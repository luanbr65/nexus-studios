import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vortex Analytics | Nexus Studio',
  description: 'Operational analytics workspace for growth, revenue, and funnel performance.',
};

export default function VortexLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
