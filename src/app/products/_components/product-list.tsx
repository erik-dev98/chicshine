'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { type Product } from '@/lib/types';
import { Badge } from '@/components/ui/badge';

type ProductWithImage = Product & {
  imageUrl: string;
  imageHint: string;
  imageDescription: string;
};

type ProductListProps = {
  products: ProductWithImage[];
};

export default function ProductList({ products }: ProductListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    return products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, products]);

  return (
    <div>
      <div className="relative mb-8 max-w-md mx-auto">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar productos..."
          className="w-full pl-10"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id}>
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader className="p-0 relative">
                  <div className="relative w-full h-60">
                    <Image
                      src={product.imageUrl}
                      alt={product.imageDescription}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      data-ai-hint={product.imageHint}
                    />
                  </div>
                  {product.originalPrice && (
                     <Badge variant="destructive" className="absolute top-2 right-2">OFERTA</Badge>
                  )}
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground">{product.category}</p>
                  <CardTitle className="font-headline text-xl mt-1 mb-2">{product.name}</CardTitle>
                  <p className="text-muted-foreground line-clamp-2 h-10">{product.description}</p>
                  <div className="mt-4 flex items-baseline gap-2">
                    <p className="font-semibold text-lg text-primary">
                      S/.{product.price.toFixed(2)}
                    </p>
                    {product.originalPrice && (
                        <p className="text-sm text-muted-foreground line-through">
                            S/.{product.originalPrice.toFixed(2)}
                        </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <h2 className="font-headline text-2xl font-semibold">No se encontraron productos</h2>
          <p className="mt-2 text-muted-foreground">
            Tu búsqueda de "{searchTerm}" no coincidió con ningún producto.
          </p>
        </div>
      )}
    </div>
  );
}
