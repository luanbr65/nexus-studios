"use client";

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar/navbar';
import ScrollProgress from './ScrollProgress';
import Footer from '../Footer';

export default function AppChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isProductDashboard =
    pathname?.startsWith('/pulse-crm/dashboard') ||
    pathname?.startsWith('/beacon-ops/dashboard') ||
    pathname?.startsWith('/vortex');

  return (
    <>
      {!isProductDashboard && (
        <>
          <ScrollProgress />
          <Navbar />
        </>
      )}
      {children}
      {!isProductDashboard && <Footer />}
    </>
  );
}
