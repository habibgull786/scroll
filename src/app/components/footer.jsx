'use client';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-2">StornSite</h2>
          <p className="text-sm">
            Empowering your web experience with modern design and performance.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About</Link></li>
            <li><Link href="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-white mb-2">Services</h3>
          <ul className="space-y-1 text-sm">
            <li><Link href="#" className="hover:text-yellow-400">Web Development</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">UI/UX Design</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">SEO</Link></li>
            <li><Link href="#" className="hover:text-yellow-400">Consulting</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold text-white mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#"><Facebook className="hover:text-yellow-400" /></Link>
            <Link href="#"><Twitter className="hover:text-yellow-400" /></Link>
            <Link href="#"><Instagram className="hover:text-yellow-400" /></Link>
            <Link href="#"><Linkedin className="hover:text-yellow-400" /></Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center text-sm">
        &copy; {new Date().getFullYear()} StornSite. All rights reserved.
      </div>
    </footer>
  );
}
