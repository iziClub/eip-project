'use client';

import { Toaster } from 'react-hot-toast';

export default function ToasterProvider() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      toastOptions={{
        className: '',
        style: {
          background: '#fff',
          color: '#333',
          border: '1px solid #e5e7eb',
          borderRadius: '10px',
          padding: '12px 16px',
        },
        success: {
          iconTheme: {
            primary: '#22c55e', // vert Tailwind
            secondary: '#fff',
          },
        },
        error: {
          style: {
            background: '#fff0f0',
            color: '#cc1e1e',
            border: '1px solid #cc1e1e',
          },
          iconTheme: {
            primary: '#cc1e1e',
            secondary: '#fff',
          },
        },
      }}
    />
  );
}
