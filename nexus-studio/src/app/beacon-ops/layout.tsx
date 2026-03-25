import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Beacon Ops - Nexus Studio',
  description:
    'Plataforma para operação de campo, SLA e coordenação de equipes técnicas com foco em ritmo, visibilidade e resposta.',
};

export default function BeaconOpsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
