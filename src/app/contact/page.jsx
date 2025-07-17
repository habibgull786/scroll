'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    if (res.ok) {
      setStatus('✅ Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('❌ Failed to send message.');
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* BANNER */}
      <section className="bg-teal-600 text-white py-10 text-center">
        <div className="mx-5 flex flex-col justify-center items-center">
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
      <section className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">
        {/* FORM */}
        <motion.div
          className="bg-white shadow-lg rounded-xl p-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                placeholder="Your Message"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-teal-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-500 transition"
            >
              Send Message
            </motion.button>
            {status && <p className="text-sm text-center text-gray-600">{status}</p>}
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27230.0
              3051423878!2d73.09799474999999!3d31.4039586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13
              .1!3m3!1m2!1s0x39226796ea3f3c0f%3A0xd1cfa287631d6cbc!2sCareer%20Institute%20Satiana%20Road%20
              Branch%20-%20eEarn%20PITB's%20Coworking%20Space%20Faisalabad!5e0!3m2!1sen!2s!4v1720445475703!5m2!
              1sen!2s"
              className="w-full h-64 rounded-lg border"
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
















//  'use client';
// import { Mail, Phone, MapPin } from 'lucide-react';
// import { motion } from 'framer-motion';

// export default function ContactPage() {
//   return (
//     <main className="min-h-screen bg-gray-50">
//       {/* BANNER */}
//       <section className="bg-teal-600 from-indigo-600  text-white py-10  text-center ">
//         <div className="mx-5 text-center flex flex-col justify-center items-center ">
//           <motion.h1
//             className="text-4xl sm:text-5xl font-bold mb-4"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span>Get in Touch</span>
//           </motion.h1>
//           <motion.p
//             className="text-lg sm:text-xl"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//           >
//             We'd love to hear from you! Fill out the form or reach us directly.
//           </motion.p>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-4">
//         {/* FORM */}
//         <motion.div
//           className="bg-white shadow-lg rounded-xl p-8"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <h2 className="text-2xl font-bold mb-6  ">Contact Form</h2>
//           <form className="space-y-4">
//             <div>
//               <label className="block mb-1 font-medium">Name</label>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">Email</label>
//               <input
//                 type="email"
//                 placeholder="Your Email"
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               />
//             </div>
//             <div>
//               <label className="block mb-1 font-medium">Message</label>
//               <textarea
//                 placeholder="Your Message"
//                 rows="5"
//                 className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//               ></textarea>
//             </div>
//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-teal-600 text-white font-semibold px-6 py-2 rounded-md hover:bg-indigo-500 transition"
//             >
//               Send Message
//             </motion.button>
//           </form>
//         </motion.div>

//         {/* CONTACT INFO */}
//         <motion.div
//           className="flex flex-col justify-center space-y-6"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7 }}
//         >
//           <div className="flex items-center space-x-3">
//             <Mail className="text-indigo-600" />
//             <span className="text-gray-700">contact@stornsite.com</span>
//           </div>
//           <div className="flex items-center space-x-3">
//             <Phone className="text-indigo-600" />
//             <span className="text-gray-700">+123 456 7890</span>
//           </div>
//           <div className="flex items-center space-x-3">
//             <MapPin className="text-indigo-600" />
//             <span className="text-gray-700">123 Storn Street, Web City</span>
//           </div>
//           <motion.div
//             className="mt-8"
//             initial={{ opacity: 0, scale: 0.95 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//            <iframe
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27230.03051423878!2d73.09799474999999!3d31.4039586!2
//   m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226796ea3f3c0f%3A0x
//   d1cfa287631d6cbc!2sCareer%20Institute%20Satiana%20Road%20Branch%20-%20eEarn%20PITB&#39;s%20Coworking%20Space%20Faisalabad!5e0!3m2!1sen!2s!4v1720445475703!5m2!1sen!2s"
//   className="w-full h-64 rounded-lg border"
//   loading="lazy"
//   allowFullScreen=""
//   referrerPolicy="no-referrer-when-downgrade"
// />

//           </motion.div>
//         </motion.div>
//       </section>
//     </main>
//   );
// }

// 'use client';

// import { useState } from 'react';

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });
//   const [status, setStatus] = useState('');

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const res = await fetch('/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(form),
//     });

//     if (res.ok) {
//       setStatus('Message sent successfully!');
//       setForm({ name: '', email: '', message: '' });
//     } else {
//       const data = await res.json();
//       setStatus(`Error: ${data.error || 'Something went wrong'}`);
//     }
//   };

//   return (
//     <main className="min-h-screen p-6 bg-gray-50 flex items-center justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4"
//       >
//         <h2 className="text-2xl font-semibold text-center text-teal-600">Contact Us</h2>

//         <input
//           type="text"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           placeholder="Your Name"
//           className="w-full p-2 border rounded"
//           required
//         />

//         <input
//           type="email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           placeholder="Your Email"
//           className="w-full p-2 border rounded"
//           required
//         />

//         <textarea
//           name="message"
//           value={form.message}
//           onChange={handleChange}
//           placeholder="Your Message"
//           className="w-full p-2 border rounded"
//           rows="4"
//           required
//         />

//         <button
//           type="submit"
//           className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
//         >
//           Send Message
//         </button>

//         {status && <p className="text-center text-sm text-gray-600">{status}</p>}
//       </form>
//     </main>
//   );
// }
