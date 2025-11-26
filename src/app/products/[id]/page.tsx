import { notFound } from 'next/navigation';
import Image from 'next/image';

import { products } from '@/lib/products';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }

  const image = PlaceHolderImages.find((img) => img.id === product.imageId);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        <Card className="overflow-hidden">
          <div className="relative w-full aspect-square">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                data-ai-hint={image.imageHint}
              />
            )}
             {product.originalPrice && (
                <Badge variant="destructive" className="absolute top-4 left-4 text-lg">OFERTA</Badge>
            )}
          </div>
        </Card>
        <div className="flex flex-col gap-4">
          <h1 className="font-headline text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="text-muted-foreground text-lg">{product.description}</p>
          
          <div className="flex items-baseline gap-4">
            <p className="font-headline text-3xl font-bold text-primary">S/.{product.price.toFixed(2)}</p>
            {product.originalPrice && (
                <p className="font-headline text-xl text-muted-foreground line-through">
                    S/.{product.originalPrice.toFixed(2)}
                </p>
            )}
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className='font-headline'>Detalles del Producto</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2 text-muted-foreground'>
                <li><span className='font-semibold text-foreground'>Categoría:</span> {product.category}</li>
                <li><span className='font-semibold text-foreground'>Palabras clave:</span> {product.keywords}</li>
              </ul>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
