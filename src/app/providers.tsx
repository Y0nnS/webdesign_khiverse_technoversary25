'use client';

import { usePathname } from 'next/navigation';
import { Toaster } from 'react-hot-toast';

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboardRoute = pathname?.startsWith('/admin');

  return (
    <>
      {children}
      <Toaster position="top-center" />
    </>
  );
}
