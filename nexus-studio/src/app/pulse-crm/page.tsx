import styles from './page.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pulse CRM • Nexus Studio',
  description: 'CRM moderno com automação de vendas, pipeline visual e dashboards em tempo real. Explore a demo ou comece grátis.',
};

export default function PulseCRM() {
  return (
    <main className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>◆</span> Nexus Studio
          </Link>
          <nav className={styles.nav} role="navigation" aria-label="Pulse CRM header menu">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <Link href="/pulse-crm/dashboard">Demo Dashboard</Link>
            <button type="button" className={styles.ctaButton}>Começar Grátis</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>// SALES INTELLIGENCE SYSTEM</span>
          <h1 className={styles.heroTitle}>
            Gerencie vendas com
            <br />
            <span className={styles.gradient}>inteligência artificial</span>
          </h1>
          <p className={styles.heroSubtitle}>
            CRM moderno que automatiza follow-ups e otimiza seu pipeline de vendas. 
            Reduza seu ciclo de vendas em até 40% com métricas em tempo real.
          </p>
          <div className={styles.heroButtons}>
            <button type="button" className={styles.primaryButton}>
              Iniciar Teste Gratuito →
            </button>
            <Link href="/pulse-crm/dashboard">
              <button type="button" className={styles.secondaryButton}>
                Ver Dashboard Demo
              </button>
            </Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>247</strong>
              <span>Leads Ativos</span>
            </div>
            <div className={styles.stat}>
              <strong>32%</strong>
              <span>Taxa de Conversão</span>
            </div>
            <div className={styles.stat}>
              <strong>R$ 87k</strong>
              <span>Receita/Mês</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className={styles.features}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>01 // FEATURES</span>
          <h2 className={styles.sectionTitle}>Tudo que você precisa em um só lugar</h2>
        </div>
        
        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📊</div>
            <h3>Pipeline Visual</h3>
            <p>Acompanhe seus deals em um kanban intuitivo. Arraste e solte para atualizar status em tempo real.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🤖</div>
            <h3>Automação de Follow-ups</h3>
            <p>IA analisa o momento ideal para contato. Emails automáticos personalizados aumentam conversão.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📈</div>
            <h3>Analytics em Tempo Real</h3>
            <p>Dashboards interativos com métricas de vendas, conversão e performance individual do time.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>👥</div>
            <h3>Gestão de Contatos</h3>
            <p>Histórico completo de interações, notas, documentos e timeline de comunicação centralizado.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>📱</div>
            <h3>Mobile First</h3>
            <p>Acesse de qualquer dispositivo. Interface responsiva com sincronização instantânea.</p>
          </div>
          
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔒</div>
            <h3>Segurança Enterprise</h3>
            <p>Criptografia E2E via Supabase, backups automáticos, compliance LGPD e controle granular de acessos.</p>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className={styles.techStack}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>02 // TECH STACK</span>
          <h2 className={styles.sectionTitle}>Arquitetura moderna e escalável</h2>
        </div>
        <div className={styles.techGrid}>
          <div className={styles.techItem}>
            <div className={styles.techIcon}>⚡</div>
            <div className={styles.techName}>Next.js 14</div>
            <div className={styles.techDesc}>App Router + Server Components</div>
          </div>
          <div className={styles.techItem}>
            <div className={styles.techIcon}>🎨</div>
            <div className={styles.techName}>Tremor</div>
            <div className={styles.techDesc}>Dashboard UI Components</div>
          </div>
          <div className={styles.techItem}>
            <div className={styles.techIcon}>🗄️</div>
            <div className={styles.techName}>Supabase</div>
            <div className={styles.techDesc}>Auth, Database & Real-time</div>
          </div>
          <div className={styles.techItem}>
            <div className={styles.techIcon}>🐻</div>
            <div className={styles.techName}>Zustand</div>
            <div className={styles.techDesc}>State Management</div>
          </div>
          <div className={styles.techItem}>
            <div className={styles.techIcon}>📧</div>
            <div className={styles.techName}>Resend</div>
            <div className={styles.techDesc}>Email Automation</div>
          </div>
          <div className={styles.techItem}>
            <div className={styles.techIcon}>📊</div>
            <div className={styles.techName}>Recharts</div>
            <div className={styles.techDesc}>Data Visualization</div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className={styles.preview}>
        <div className={styles.previewContent}>
          <span className={styles.sectionLabel}>03 // INTERFACE</span>
          <h2 className={styles.sectionTitle}>Design pensado para produtividade</h2>
          <div className={styles.dashboardMockup}>
            <div className={styles.mockupWindow}>
              <div className={styles.mockupHeader}>
                <div className={styles.mockupDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className={styles.mockupTitle}>pulse.app/dashboard</span>
              </div>
              <div className={styles.mockupContent}>
                <div className={styles.mockupPreview}>
                  <div className={styles.mockupSidebar}>
                    <div className={styles.mockupItem}></div>
                    <div className={styles.mockupItem}></div>
                    <div className={styles.mockupItem}></div>
                  </div>
                  <div className={styles.mockupMain}>
                    <div className={styles.mockupCards}>
                      <div className={styles.mockupCard}></div>
                      <div className={styles.mockupCard}></div>
                      <div className={styles.mockupCard}></div>
                    </div>
                    <div className={styles.mockupChart}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.previewCta}>
            <Link href="/pulse-crm/dashboard">
              <button type="button" className={styles.demoButton}>
                Explorar Dashboard Demo →
              </button>            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className={styles.pricing}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>04 // PRICING</span>
          <h2 className={styles.sectionTitle}>Planos que crescem com você</h2>
        </div>
        
        <div className={styles.pricingGrid}>
          <div className={styles.pricingCard}>
            <h3>Starter</h3>
            <div className={styles.price}>
              <span className={styles.currency}>R$</span>
              <span className={styles.amount}>49</span>
              <span className={styles.period}>/mês</span>
            </div>
            <ul className={styles.features}>
              <li>✓ Até 100 contatos</li>
              <li>✓ Pipeline básico</li>
              <li>✓ 1 usuário</li>
              <li>✓ Automações limitadas</li>
              <li>✓ Suporte por email</li>
            </ul>
            <button className={styles.pricingButton}>Começar</button>
          </div>
          
          <div className={`${styles.pricingCard} ${styles.featured}`}>
            <div className={styles.popularBadge}>MAIS POPULAR</div>
            <h3>Professional</h3>
            <div className={styles.price}>
              <span className={styles.currency}>R$</span>
              <span className={styles.amount}>149</span>
              <span className={styles.period}>/mês</span>
            </div>
            <ul className={styles.features}>
              <li>✓ Contatos ilimitados</li>
              <li>✓ Automações avançadas com IA</li>
              <li>✓ Até 5 usuários</li>
              <li>✓ Analytics completo</li>
              <li>✓ Integrações (Zapier, Slack)</li>
              <li>✓ Suporte prioritário</li>
            </ul>
            <button className={styles.pricingButton}>Começar</button>
          </div>
          
          <div className={styles.pricingCard}>
            <h3>Enterprise</h3>
            <div className={styles.price}>
              <span className={styles.amount}>Custom</span>
            </div>
            <ul className={styles.features}>
              <li>✓ Tudo do Professional</li>
              <li>✓ Usuários ilimitados</li>
              <li>✓ API access completo</li>
              <li>✓ White-label disponível</li>
              <li>✓ Onboarding dedicado</li>
              <li>✓ SLA garantido 99.9%</li>
            </ul>
            <button className={styles.pricingButton}>Falar com vendas</button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Pronto para automatizar suas vendas?</h2>
          <p>Teste grátis por 14 dias. Sem cartão de crédito. Cancele quando quiser.</p>
          <div className={styles.ctaButtons}>
            <button className={styles.ctaLargeButton}>
              Criar Conta Gratuita →
            </button>
            <span className={styles.ctaNote}>Status: <strong>Em Desenvolvimento</strong></span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.footerLogo}>
              <span className={styles.logoIcon}>◆</span> Nexus Studio
            </div>
            <p>Engenharia de software focada em performance e solidez.</p>
          </div>
          <div className={styles.footerLinks}>
            <div>
              <h4>Produto</h4>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <Link href="/pulse-crm/dashboard">Dashboard Demo</Link>
            </div>
            <div>
              <h4>Empresa</h4>
              <Link href="/">Nexus Studio</Link>
              <a href="mailto:contato@nexusstudio.com">Contato</a>
            </div>
            <div>
              <h4>Projeto</h4>
              <a href="#">GitHub (em breve)</a>
              <a href="#">Documentação</a>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2025 Nexus Studio. Pulse CRM - Projeto de Portfólio.</p>
        </div>
      </footer>
    </main>
  );
}
