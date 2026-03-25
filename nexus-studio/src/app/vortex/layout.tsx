import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vortex Analytics • Nexus Studio',
  description: 'Dashboard beta para análise de big data em tempo real com estilo cyberpunk. Login de demonstração incluso.',
};

export default function VortexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
