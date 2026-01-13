'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function PulseDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Dados fake realistas
  const deals = [
    { id: 1, company: 'Tech Solutions Ltda', value: 12000, status: 'Proposta', contact: 'João Silva', probability: 65 },
    { id: 2, company: 'Startup AI Labs', value: 25000, status: 'Qualificado', contact: 'Maria Santos', probability: 40 },
    { id: 3, company: 'Distribuidora Norte', value: 8700, status: 'Lead', contact: 'Pedro Costa', probability: 25 },
    { id: 4, company: 'Agência Digital +', value: 15000, status: 'Negociação', contact: 'Ana Paula', probability: 80 },
    { id: 5, company: 'E-commerce Brasil', value: 32000, status: 'Proposta', contact: 'Carlos Mendes', probability: 55 },
    { id: 6, company: 'Consultoria XYZ', value: 9500, status: 'Qualificado', contact: 'Juliana Lima', probability: 35 },
  ];

  const recentActivities = [
    { id: 1, action: 'Deal fechado', company: 'Tech Solutions', time: '2h atrás', type: 'success' },
    { id: 2, action: 'Follow-up enviado', company: 'Startup AI Labs', time: '4h atrás', type: 'info' },
    { id: 3, action: 'Proposta criada', company: 'Distribuidora Norte', time: '1d atrás', type: 'warning' },
    { id: 4, action: 'Novo lead cadastrado', company: 'Agência Digital +', time: '2d atrás', type: 'info' },
    { id: 5, action: 'Reunião agendada', company: 'E-commerce Brasil', time: '3d atrás', type: 'success' },
  ];

  const tasks = [
    { id: 1, title: 'Enviar proposta para Tech Solutions', due: 'Hoje', priority: 'high', completed: false },
    { id: 2, title: 'Ligar para Startup AI Labs', due: 'Amanhã', priority: 'medium', completed: false },
    { id: 3, title: 'Preparar apresentação para E-commerce', due: 'Esta semana', priority: 'high', completed: false },
    { id: 4, title: 'Follow-up com Agência Digital', due: 'Hoje', priority: 'medium', completed: true },
  ];

  const pipelineStages = [
    { name: 'Lead', count: 8, value: 42000 },
    { name: 'Qualificado', count: 5, value: 78000 },
    { name: 'Proposta', count: 3, value: 55000 },
    { name: 'Negociação', count: 2, value: 31000 },
    { name: 'Fechado', count: 12, value: 187000 },
  ];

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <Link href="/pulse-crm" className={styles.logo}>
            <span className={styles.logoIcon}>⚡</span>
            <span>Pulse CRM</span>
          </Link>
        </div>

        <nav className={styles.sidebarNav}>
          <button 
            className={`${styles.navItem} ${activeTab === 'overview' ? styles.active : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className={styles.navIcon}>📊</span>
            Overview
          </button>
          <button 
            className={`${styles.navItem} ${activeTab === 'pipeline' ? styles.active : ''}`}
            onClick={() => setActiveTab('pipeline')}
          >
            <span className={styles.navIcon}>🎯</span>
            Pipeline
          </button>
          <button 
            className={`${styles.navItem} ${activeTab === 'contacts' ? styles.active : ''}`}
            onClick={() => setActiveTab('contacts')}
          >
            <span className={styles.navIcon}>👥</span>
            Contatos
          </button>
          <button className={styles.navItem}>
            <span className={styles.navIcon}>📈</span>
            Analytics
          </button>
          <button className={styles.navItem}>
            <span className={styles.navIcon}>🤖</span>
            Automações
          </button>
          <button className={styles.navItem}>
            <span className={styles.navIcon}>⚙️</span>
            Configurações
          </button>
        </nav>

        <div className={styles.sidebarFooter}>
          <div className={styles.userProfile}>
            <div className={styles.userAvatar}>LB</div>
            <div className={styles.userInfo}>
              <div className={styles.userName}>Luan</div>
              <div className={styles.userRole}>Admin</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <h1>Dashboard</h1>
            <p className={styles.subtitle}>Bem-vindo de volta, Luan! 👋</p>
          </div>
          <div className={styles.headerRight}>
            <button className={styles.headerButton}>
              <span>🔔</span>
              <span className={styles.notificationBadge}>3</span>
            </button>
            <button className={styles.primaryButton}>+ Novo Deal</button>
          </div>
        </header>

        {/* Content based on active tab */}
        {activeTab === 'overview' && (
          <>
            {/* Stats Cards */}
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <span className={styles.statLabel}>Leads Ativos</span>
                  <span className={styles.statIcon}>📊</span>
                </div>
                <div className={styles.statValue}>247</div>
                <div className={styles.statChange}>
                  <span className={styles.positive}>↑ 12%</span>
                  <span className={styles.statPeriod}>vs. mês anterior</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <span className={styles.statLabel}>Taxa de Conversão</span>
                  <span className={styles.statIcon}>📈</span>
                </div>
                <div className={styles.statValue}>32%</div>
                <div className={styles.statChange}>
                  <span className={styles.positive}>↑ 8%</span>
                  <span className={styles.statPeriod}>vs. mês anterior</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <span className={styles.statLabel}>Receita (Mês)</span>
                  <span className={styles.statIcon}>💰</span>
                </div>
                <div className={styles.statValue}>R$ 87k</div>
                <div className={styles.statChange}>
                  <span className={styles.positive}>↑ 24%</span>
                  <span className={styles.statPeriod}>vs. mês anterior</span>
                </div>
              </div>

              <div className={styles.statCard}>
                <div className={styles.statHeader}>
                  <span className={styles.statLabel}>Ticket Médio</span>
                  <span className={styles.statIcon}>💳</span>
                </div>
                <div className={styles.statValue}>R$ 4.8k</div>
                <div className={styles.statChange}>
                  <span className={styles.negative}>↓ 3%</span>
                  <span className={styles.statPeriod}>vs. mês anterior</span>
                </div>
              </div>
            </div>

            {/* Charts & Tables Row */}
            <div className={styles.contentGrid}>
              {/* Recent Deals */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>Deals Recentes</h3>
                  <button className={styles.textButton}>Ver todos →</button>
                </div>
                <div className={styles.dealsTable}>
                  {deals.slice(0, 5).map(deal => (
                    <div key={deal.id} className={styles.dealRow}>
                      <div className={styles.dealInfo}>
                        <div className={styles.dealCompany}>{deal.company}</div>
                        <div className={styles.dealContact}>{deal.contact}</div>
                      </div>
                      <div className={styles.dealValue}>
                        R$ {deal.value.toLocaleString('pt-BR')}
                      </div>
                      <div className={`${styles.dealStatus} ${styles[deal.status.toLowerCase()]}`}>
                        {deal.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tasks */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3>Tarefas Pendentes</h3>
                  <button className={styles.textButton}>+ Nova</button>
                </div>
                <div className={styles.tasksList}>
                  {tasks.map(task => (
                    <div key={task.id} className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
                      <input 
                        type="checkbox" 
                        checked={task.completed}
                        className={styles.taskCheckbox}
                        readOnly
                      />
                      <div className={styles.taskContent}>
                        <div className={styles.taskTitle}>{task.title}</div>
                        <div className={styles.taskMeta}>
                          <span className={styles.taskDue}>{task.due}</span>
                          <span className={`${styles.taskPriority} ${styles[task.priority]}`}>
                            {task.priority === 'high' ? '🔴' : '🟡'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activities */}
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3>Atividades Recentes</h3>
              </div>
              <div className={styles.activitiesList}>
                {recentActivities.map(activity => (
                  <div key={activity.id} className={styles.activityItem}>
                    <div className={`${styles.activityDot} ${styles[activity.type]}`}></div>
                    <div className={styles.activityContent}>
                      <div className={styles.activityAction}>{activity.action}</div>
                      <div className={styles.activityCompany}>{activity.company}</div>
                    </div>
                    <div className={styles.activityTime}>{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {activeTab === 'pipeline' && (
          <div className={styles.pipelineView}>
            <div className={styles.pipelineHeader}>
              <h2>Pipeline de Vendas</h2>
              <p className={styles.pipelineSummary}>
                Total no pipeline: <strong>R$ {pipelineStages.reduce((acc, stage) => acc + stage.value, 0).toLocaleString('pt-BR')}</strong>
              </p>
            </div>
            
            <div className={styles.pipelineStages}>
              {pipelineStages.map((stage, index) => (
                <div key={index} className={styles.pipelineStage}>
                  <div className={styles.stageHeader}>
                    <h3>{stage.name}</h3>
                    <span className={styles.stageCount}>{stage.count}</span>
                  </div>
                  <div className={styles.stageValue}>
                    R$ {stage.value.toLocaleString('pt-BR')}
                  </div>
                  <div className={styles.stageCards}>
                    {/* Placeholder for draggable cards */}
                    <div className={styles.stagePlaceholder}>
                      Arraste deals aqui
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contacts' && (
          <div className={styles.contactsView}>
            <div className={styles.contactsHeader}>
              <h2>Contatos</h2>
              <div className={styles.contactsActions}>
                <input 
                  type="search" 
                  placeholder="Buscar contatos..." 
                  className={styles.searchInput}
                />
                <button className={styles.primaryButton}>+ Novo Contato</button>
              </div>
            </div>

            <div className={styles.contactsGrid}>
              {deals.map(deal => (
                <div key={deal.id} className={styles.contactCard}>
                  <div className={styles.contactAvatar}>
                    {deal.contact.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className={styles.contactInfo}>
                    <div className={styles.contactName}>{deal.contact}</div>
                    <div className={styles.contactCompany}>{deal.company}</div>
                  </div>
                  <div className={styles.contactActions}>
                    <button className={styles.iconButton}>📧</button>
                    <button className={styles.iconButton}>📞</button>
                    <button className={styles.iconButton}>👁️</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
