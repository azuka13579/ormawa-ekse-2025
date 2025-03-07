import { CartProvider } from './Context/CartContext';
import { SizeProvider } from './Context/SizeContext'; // Tambahkan SizeProvider
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import './bootstrap';
import '../css/app.css';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    return pages[`./Pages/${name}.jsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <CartProvider>
        <SizeProvider> {/* Bungkus dengan SizeProvider */}
          <App {...props} />
        </SizeProvider>
      </CartProvider>
    );
  },
});
