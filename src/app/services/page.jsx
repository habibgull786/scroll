 'use client';
import { Code, MonitorSmartphone, BarChart3, Paintbrush } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="bg-teal-600 from-indigo-600 to-purple-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Empowering your business with cutting-edge web solutions.
          </motion.p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Code className="text-indigo-600 mb-3" size={32} />,
              title: 'Web Development',
              desc: 'Custom, high-performance websites built using modern frameworks like Next.js.',
            },
            {
              icon: <Paintbrush className="text-indigo-600 mb-3" size={32} />,
              title: 'UI/UX Design',
              desc: 'User-centric design with clean, modern aesthetics and intuitive interfaces.',
            },
            {
              icon: <MonitorSmartphone className="text-indigo-600 mb-3" size={32} />,
              title: 'Responsive Design',
              desc: 'Mobile-first websites that look great on all devices, from phones to desktops.',
            },
            {
              icon: <BarChart3 className="text-indigo-600 mb-3" size={32} />,
              title: 'SEO & Analytics',
              desc: 'We help boost your search engine ranking and provide valuable traffic insights.',
            },
            {
              icon: <Code className="text-indigo-600 mb-3" size={32} />,
              title: 'Digital Marketing',
              desc: 'Our digital marketing agency identifies your goals, performs competitor benchmark.',
            },
            {
              icon: <Code className="text-indigo-600 mb-3" size={32} />,
              title: 'E-Commerce ',
              desc: 'Optimize your website, from design to content seamless journey for visitors.',
            },


          ].map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <motion.section
        className="bg-teal-700 text-white py-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4">Let’s build something amazing together!</h2>
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/contact"
            className="bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
          >
            Contact Us
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
