 'use client';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* BANNER */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We'd love to hear from you! Fill out the form or reach us directly.
          </motion.p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
        {/* FORM */}
        <motion.div
          className="bg-white shadow-lg rounded-xl p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-500 transition"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* CONTACT INFO */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center space-x-3">
            <Mail className="text-indigo-600" />
            <span className="text-gray-700">contact@stornsite.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="text-indigo-600" />
            <span className="text-gray-700">+123 456 7890</span>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="text-indigo-600" />
            <span className="text-gray-700">123 Storn Street, Web City</span>
          </div>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <iframe
              src="https://maps.google.com/maps?q=Web%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 rounded-lg border"
              loading="lazy"
            ></iframe>
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
