import { CartProvider } from './Context/CartContext';
import { SizeProvider } from './Context/SizeContext';
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import PreLoader from './Components/PreLoader'; // Import PreLoader component
import './bootstrap';
import '../css/app.css';

// Komponen AppWrapper untuk menangani preloading
const AppWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadComplete = () => {
    setIsLoading(false);
    document.documentElement.classList.add('app-loaded');
  };

  return (
    <>
      <PreLoader onLoadComplete={handleLoadComplete} />
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {children}
      </div>
    </>
  );
};

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    return pages[`./Pages/${name}.jsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(
      <CartProvider>
        <SizeProvider>
          <AppWrapper>
            <App {...props} />
          </AppWrapper>
        </SizeProvider>
      </CartProvider>
    );
  },
});