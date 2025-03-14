<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Konfirmasi Pesanan - Samudra Store</title>
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
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #333;
            text-align: center;
        }
        p {
            font-size: 14px;
            color: #555;
        }
        .order-info {
            background: #fafafa;
            padding: 10px;
            border-radius: 8px;
            margin-bottom: 15px;
        }
        .order-info strong {
            color: #222;
        }
        .product-list {
            list-style-type: none;
            padding: 0;
        }
        .product-list li {
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        .product-list img {
            width: 50px;
            height: 50px;
            border-radius: 5px;
            margin-right: 10px;
            vertical-align: middle;
        }
        .total {
            font-size: 16px;
            font-weight: bold;
            color: #d9534f;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #777;
            margin-top: 20px;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>Halo, {{ $order['nama'] }}!</h2>
        <p>Terima kasih telah melakukan pemesanan di <strong>Samudra Store</strong>. Berikut adalah detail pesanan Anda:</p>
        
        <div class="order-info">
            <p><strong>Nama:</strong> {{ $order['nama'] }}</p>
            <p><strong>NIM:</strong> {{ $order['nim'] }}</p>
            <p><strong>Fakultas:</strong> {{ $order['fakultas'] }}</p>
            <p><strong>Departemen:</strong> {{ $order['departemen'] }}</p>
            <p><strong>WhatsApp:</strong> {{ $order['no_wa'] }}</p>
            
        </div>

        <h3>📦 Detail Produk Pesanan Anda</h3>
        <ul class="product-list">
            @foreach ($order['produk'] as $produk)
                <li>
                    <strong>{{ $produk['nama_produk'] }}</strong> - 
                    Size: {{ $produk['size'] }} - 
                    Harga: Rp{{ number_format($produk['price'], 0, ',', '.') }} - 
                    Kuantitas: {{ $produk['kuantitas'] }}
                </li>
            @endforeach
        </ul>

        <p class="total">Total Pembayaran: Rp{{ number_format($order['total'], 0, ',', '.') }}</p>

        <p>Pesanan Anda akan segera diproses. Mohon pastikan nomor WhatsApp yang Anda cantumkan aktif agar kami dapat menghubungi Anda jika diperlukan.</p>
        <p>Jika ada pertanyaan, silakan hubungi kami di <a href="mailto:support@samudrastore.com">support@samudrastore.com</a></p>

        <p class="footer">Terima kasih sudah berbelanja di <strong>Samudra Store</strong>! 😊</p>
    </div>
</body>
</html>
