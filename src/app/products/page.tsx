import { products } from '@/lib/products';
import ProductList from './_components/product-list';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProductsPage() {
  const productsWithImages = products.map((product) => {
    const image = PlaceHolderImages.find((img) => img.id === product.imageId);
    return {
      ...product,
      imageUrl: image?.imageUrl || '',
      imageHint: image?.imageHint || '',
      imageDescription: image?.description || ''
    };
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">Nuestros Productos</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explora nuestra colección de productos de alta calidad. Usa la búsqueda para encontrar exactamente lo que necesitas.
        </p>
      </div>
      <ProductList products={productsWithImages} />
    </div>
  );
}
