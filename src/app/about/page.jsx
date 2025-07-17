'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HERO / BANNER */}
      <section className="bg-teal-600 from-purple-600 to-indigo-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-yellow-300">StornSite</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We craft high-quality, fast, and reliable web solutions for businesses that want to stand out.
          </motion.p>
        </div>
      </section>
      <div className="grid md:grid-cols-2 gap-10  ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-2  ">Our Mission</h2>
            <p className="text-gray-700  ">
              At StornSite, our mission is to help businesses establish a powerful online presence through modern,
              scalable, and secure web applications. We strive for innovation and excellence in every project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-gray-700">
              We envision a world where technology seamlessly empowers people and organizations to achieve their goals
              and make a positive impact on society.
            </p>
          </motion.div>
        </div>
 
      
      

      {/* VALUES / TEAM / IMAGE */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h2
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Core Values
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Innovation', desc: 'We constantly explore new technologies to deliver the best solutions.' },
              { title: 'Integrity', desc: 'We believe in honesty, transparency, and strong ethical principles.' },
              { title: 'Excellence', desc: 'We aim for quality and precision in every line of code we write.' },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-teal-600 rounded-xl p-6 shadow hover:shadow-lg transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-black-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
             src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg"
             alt='img'
             width={800}
             height={800}
  


              className="rounded-2xl mx-auto shadow-lg"
            />
            <p className="mt-2 text-sm text-gray-500">Meet our passionate and creative team!</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
