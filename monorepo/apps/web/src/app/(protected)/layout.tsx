'use client';

import Navbar from '@/components/layouts/Navbar';

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-grey-1">
      <Navbar />
      <main className="ml-[275px] pt-[50px] grid-container h-screen">
        {children}
      </main>
    </div>
  );
}