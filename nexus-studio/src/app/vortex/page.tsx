import type { Metadata } from 'next';
import VortexClient from './VortexClient';

export const metadata: Metadata = {
  title: 'Vortex Analytics • Nexus Studio',
  description: 'Dashboard beta para análise de big data em tempo real com estilo cyberpunk. Login de demonstração incluso.',
};

export default function VortexPage() {
  return <VortexClient />;
}
