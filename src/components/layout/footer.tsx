import { Facebook, Instagram } from 'lucide-react';
import { Logo } from '../logo';
import Link from 'next/link';
import { TikTokIcon } from '../icons';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">Tu tienda única para productos increíbles.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/profile.php?id=61580537210103" target="_blank" aria-label="Facebook" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="https://www.instagram.com/chic.shine.store1?igsh=YzRsMzJmcXRkbXR0" target="_blank" aria-label="Instagram" className="text-muted-foreground hover:text-foreground">
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://www.tiktok.com/@chic.shine2?_t=ZS-90E1mqqlbyZ&_r=1" target="_blank" aria-label="TikTok" className="text-muted-foreground hover:text-foreground">
              <TikTokIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Chic&Shine. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}