'use client';

import { motion } from 'framer-motion';
import { Cpu, Layout, Terminal } from 'lucide-react';

const services = [
  {
    icon: Cpu,
    title: 'Inteligência Artificial',
    description: 'Soluções de IA personalizadas que automatizam processos e elevam a eficiência operacional ao próximo nível.',
    gradient: 'from-indigo-500 to-purple-600'
  },
  {
    icon: Layout,
    title: 'Design Premium',
    description: 'Interfaces excepcionais que combinam estética minimalista com experiência do usuário intuitiva e memorável.',
    gradient: 'from-indigo-500 to-blue-600'
  },
  {
    icon: Terminal,
    title: 'Engenharia de Software',
    description: 'Arquitetura robusta e código limpo que garantem performance, escalabilidade e manutenibilidade.',
    gradient: 'from-indigo-500 to-cyan-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tighter">
            Serviços de <span className="bg-gradient-to-r from-indigo-500 to-white bg-clip-text text-transparent">Elite</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transformamos ideias complexas em soluções digitais elegantes e poderosas
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="glass glass-hover rounded-[2.5rem] p-8 h-full min-h-[320px] flex flex-col justify-between">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-[2.5rem] transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <motion.button
            className="glass glass-hover text-white px-8 py-4 rounded-full font-semibold text-base border border-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explorar Todos os Serviços
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
