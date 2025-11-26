import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
      <h1 className="font-headline text-8xl md:text-9xl font-bold text-primary">404</h1>
      <h2 className="font-headline mt-4 text-3xl md:text-4xl font-semibold">Página No Encontrada</h2>
      <p className="mt-4 max-w-md text-lg text-muted-foreground">
        Lo sentimos, la página que buscas no existe o ha sido movida.
      </p>
      <Button asChild className="mt-8 bg-accent hover:bg-accent/90">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al Inicio
        </Link>
      </Button>
    </div>
  );
}
