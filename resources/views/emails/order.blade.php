<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔥 Konfirmasi Pesanan - Samudra Store 🔥</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            background: #ffffff;
            margin: 20px auto;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            text-align: center;
        }
        h2 {
            color: #1b697d;
            font-size: 20px;
            font-weight: bold;
        }
        p {
            font-size: 16px;
            color: #2e2828;
        }
        .order-info {
            background: #f8f9fa;
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            text-align: left;
        }
        .order-info p {
            margin: 5px 0;
        }
        .product-list {
            list-style-type: none;
            padding: 0;
        }
        .product-list li {
            padding: 12px;
            border-bottom: 2px solid #ddd;
            font-size: 16px;
        }
        .total {
            font-size: 20px;
            font-weight: bold;
            color: #d9534f;
            margin-top: 15px;
        }
        .cta-button {
            display: inline-block;
            background-color: #28a745;
            color: #ffffff;
            padding: 12px 20px;
            border-radius: 5px;
            text-decoration: none;
            font-size: 16px;
            font-weight: bold;
            margin-top: 20px;
            box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }
        .cta-button:hover {
            background-color: #0a641d;
        }
        .footer {
            font-size: 14px;
            color: #645e5e;
            margin-top: 30px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>PESANAN ANDA TELAH DITERIMA!</h2>
        <p>Halo, <strong>{{ $order['nama'] }}</strong>!</p>
        <p>Terima kasih telah berbelanja di <strong>Samudra Store</strong>. Kami sangat senang melayani Anda! Berikut detail pesanan Anda:</p>
        
        <div class="order-info">
            <p><strong>Nama:</strong> {{ $order['nama'] }}</p>
            <p><strong>NIM:</strong> {{ $order['nim'] }}</p>
            <p><strong>Fakultas:</strong> {{ $order['fakultas'] }}</p>
            <p><strong>Departemen:</strong> {{ $order['departemen'] }}</p>
            <p><strong>WhatsApp:</strong> {{ $order['no_wa'] }}</p>
        </div>

        <h3>DETAIL PRODUK PESANAN</h3>
        <ul class="product-list">
            @foreach ($order['produk'] as $produk)
                <li>
                    <strong>{{ $produk['nama_produk'] }}</strong> | 
                    Size: {{ $produk['size'] }} | 
                    Harga: <strong>Rp{{ number_format($produk['price'], 0, ',', '.') }}</strong> | 
                    Kuantitas: <strong>{{ $produk['kuantitas'] }}</strong>
                </li>
            @endforeach
        </ul>

        <p class="total">Total Pembayaran: <strong>Rp{{ number_format($order['total'], 0, ',', '.') }}</strong></p>

        <p>Pesanan Anda sedang dalam proses! Pastikan nomor WhatsApp Anda aktif agar tim kami bisa menghubungi Anda jika diperlukan.</p>
        <p>Bergabunglah dengan komunitas Samudra Store untuk mendapatkan update terbaru terkait informasi pesanan:</p>
        <a href="https://chat.whatsapp.com/your-group-link" class="cta-button">GABUNG GRUP WHATSAPP</a>
        
        <p>Ada pertanyaan? Hubungi kami di <a href="mailto:support@samudrastore.com">support@samudrastore.com</a></p>

        <p class="footer">Terima kasih telah memilih <strong>Samudra Store</strong>! Sampai jumpa di pesanan berikutnya! 😊</p>
    </div>
</body>
</html>
