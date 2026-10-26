# Deploy ke Kubernetes melalui GHCR

Image aplikasi dibangun oleh GitHub Actions dan dipublikasikan ke GitHub Container Registry (GHCR):

```text
ghcr.io/azuka13579/ormawa-ekse-2025:latest
```

Secara default image dibangun untuk arsitektur `linux/amd64`, yang umum digunakan VPS. Build satu arsitektur menghindari emulasi QEMU sehingga jauh lebih cepat. Jika node VPS memakai ARM, ubah `platforms` di `.github/workflows/container-image.yml` menjadi `linux/arm64` dan gunakan runner ARM.

## 1. Build image di GitHub

1. Push perubahan ke branch default (`main` atau `master`).
2. Buka tab **Actions** dan tunggu workflow **Build and publish container image** selesai.
3. Buka halaman package repository di GitHub, lalu ubah visibility package menjadi **Public** agar Kubernetes dapat menarik image tanpa kredensial.

Workflow juga dapat dijalankan manual melalui **Actions > Build and publish container image > Run workflow**. Tag Git seperti `v1.0.0` menghasilkan tag image `1.0.0`, `1.0`, dan `v1.0.0`.

## 2. Siapkan secret aplikasi

Buat `APP_KEY` secara lokal satu kali:

```bash
php artisan key:generate --show
```

Buat Secret Kubernetes. Jangan commit nilai rahasia ke repository:

```bash
kubectl create secret generic ormawa-ekse-secret \
  --from-literal=APP_KEY='base64:HASIL_DARI_PERINTAH_DI_ATAS' \
  --from-literal=DB_USERNAME='ormawa_user' \
  --from-literal=DB_PASSWORD='ganti-dengan-password-kuat'
```

Secret dapat ditambah dengan konfigurasi mail atau layanan eksternal lain menggunakan argumen `--from-literal` tambahan.

## 3. Sesuaikan dan deploy

Ubah `APP_URL`, host PostgreSQL, ukuran PVC, serta nama image di `k8s/deployment.yaml`, kemudian jalankan. Nilai `DB_HOST=postgres` mengasumsikan Service PostgreSQL di cluster bernama `postgres`; sesuaikan jika nama Service berbeda atau database berada di luar cluster.

```bash
kubectl apply -f k8s/deployment.yaml
kubectl rollout status deployment/ormawa-ekse
kubectl exec deployment/ormawa-ekse -- php artisan migrate --force
```

Service `ormawa-ekse` mengekspos HTTP pada port `80` di dalam cluster. Hubungkan Service tersebut ke Ingress atau reverse proxy yang sudah ada di VPS.

File upload disimpan pada PVC `ormawa-ekse-uploads`. Manifest menggunakan satu replica karena PVC default memakai `ReadWriteOnce`. Untuk beberapa replica, gunakan object storage atau volume `ReadWriteMany`.

## Image private

Jika package GHCR tetap private, buat Personal Access Token GitHub dengan izin `read:packages`, lalu buat pull secret:

```bash
kubectl create secret docker-registry ghcr-credentials \
  --docker-server=ghcr.io \
  --docker-username='USERNAME_GITHUB' \
  --docker-password='PERSONAL_ACCESS_TOKEN'
```

Tambahkan konfigurasi berikut di bawah `spec.template.spec` pada Deployment:

```yaml
imagePullSecrets:
  - name: ghcr-credentials
```

## Operasional

Melihat log dan melakukan rollout setelah image baru tersedia:

```bash
kubectl logs -f deployment/ormawa-ekse
kubectl rollout restart deployment/ormawa-ekse
kubectl rollout status deployment/ormawa-ekse
```

Untuk deployment yang dapat direproduksi, gunakan tag versi (`:1.0.0`) atau tag commit (`:sha-xxxxxxx`) sebagai pengganti `:latest`.

## Kecepatan build

Build pertama tetap perlu mengunduh base image, paket npm, dependency Composer, dan ekstensi PHP. Build berikutnya menggunakan cache GitHub Actions dan biasanya lebih cepat selama lockfile tidak berubah. Tahap Composer dipisahkan dari source aplikasi agar perubahan kode biasa tidak memasang ulang seluruh dependency.
