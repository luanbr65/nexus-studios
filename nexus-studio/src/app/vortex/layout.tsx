import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Vortex Analytics • Nexus Studio',
  description: 'Dashboard beta para análise de big data em tempo real com estilo cyberpunk. Login de demonstração incluso.',
};

export default function VortexLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
