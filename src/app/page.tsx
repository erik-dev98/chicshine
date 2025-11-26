import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-home');
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh] text-primary-foreground">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
            Accesorios en Tendencia
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/90 drop-shadow-md">
            ¡Combina tus looks con piezas únicas y ligeras! 40% OFF y 2x1 en accesorios seleccionados.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="/products">
              Ver Colección <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold">
              ¿Por qué elegirnos?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Estamos comprometidos a ofrecer los mejores productos con un servicio al cliente excepcional.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg">
              <h3 className="font-headline text-xl font-semibold">Productos de Calidad</h3>
              <p className="mt-2 text-muted-foreground">
                Cada artículo en nuestra tienda es cuidadosamente seleccionado y probado para garantizar su calidad.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="font-headline text-xl font-semibold">Envío Rápido</h3>
              <p className="mt-2 text-muted-foreground">
                Nos aseguramos de que tus pedidos se procesen y envíen en el menor tiempo posible.
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <h3 className="font-headline text-xl font-semibold">Soporte Excelente</h3>
              <p className="mt-2 text-muted-foreground">
                Nuestro equipo de soporte siempre está aquí para ayudarte con cualquier pregunta o inquietud.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
