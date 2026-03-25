import Link from 'next/link';
import { ArrowUpRight, Github, Instagram, Mail, MessageCircle } from 'lucide-react';
import styles from './footer.module.css';

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/luanbr65',
    icon: Github,
    note: 'código e evolução dos produtos',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/luan_78/',
    icon: Instagram,
    note: 'presença visual e bastidores',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/qr/T73YZS6YWDZLP1',
    icon: MessageCircle,
    note: 'canal direto para consultoria',
  },
];

const productLinks = [
  { label: 'Pulse CRM', href: '/pulse-crm' },
  { label: 'Beacon Ops', href: '/beacon-ops' },
  { label: 'Vortex Analytics', href: '/vortex' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.brandBlock}>
            <span className={styles.logo}>NEXUS STUDIO.</span>
            <h2 className={styles.headline}>Interfaces, produto e operação em uma mesma camada de entrega.</h2>
            <p className={styles.tagline}>
              Engenharia de software focada em performance, clareza e presença de produto. Construímos superfícies
              que ajudam o negócio a parecer melhor e operar melhor.
            </p>
          </div>

          <div className={styles.socialGrid}>
            {socialLinks.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialCard}
                >
                  <div className={styles.socialHead}>
                    <span className={styles.iconWrap}>
                      <Icon size={16} strokeWidth={1.9} />
                    </span>
                    <ArrowUpRight size={15} strokeWidth={1.9} className={styles.linkArrow} />
                  </div>
                  <strong>{item.label}</strong>
                  <p>{item.note}</p>
                </Link>
              );
            })}
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.linkGroup}>
            <span className={styles.groupTitle}>Produtos</span>
            <div className={styles.inlineLinks}>
              {productLinks.map((item) => (
                <Link key={item.label} href={item.href} className={styles.inlineLink}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.linkGroup}>
            <span className={styles.groupTitle}>Contato</span>
            <div className={styles.contactRow}>
              <a href="mailto:contato@nexus.studio" className={styles.contactLink}>
                <Mail size={15} strokeWidth={1.9} />
                contato@nexus.studio
              </a>
              <span className={styles.location}>São Paulo, BR</span>
            </div>
          </div>

          <div className={styles.copyBlock}>
            <span className={styles.copy}>&copy; {currentYear} Nexus Studio. Todos os direitos reservados.</span>
            <div className={styles.status}>
              <span className={styles.indicator}></span>
              Sistemas publicados e operacionais
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
