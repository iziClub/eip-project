'use client';

import Navbar from '@/components/layouts/Navbar';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-grey-1">
      <Navbar />
      <main className="ml-[275px] p-8 grid-container">
        {children}
      </main>
    </div>
  );
}