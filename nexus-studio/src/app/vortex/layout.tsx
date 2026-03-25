import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vortex Analytics - Nexus Studio',
  description:
    'Plataforma de analytics para leitura executiva de dados distribuídos, com foco em telemetria, risco operacional e visibilidade de infraestrutura.',
};

export default function VortexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
