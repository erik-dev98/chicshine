import ContactForm from "./_components/contact-form";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

export default function ContactPage() {
    const contactImage = PlaceHolderImages.find(img => img.id === 'contact-us');
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
          Ponte en Contacto
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          ¿Tienes alguna pregunta o comentario? Nos encantaría saber de ti. Completa el formulario a continuación y te responderemos lo antes posible.
        </p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <ContactForm />
        </div>
        <div className="order-1 md:order-2">
            {contactImage && (
                <Image 
                    src={contactImage.imageUrl}
                    alt={contactImage.description}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    data-ai-hint={contactImage.imageHint}
                />
            )}
        </div>
      </div>
    </div>
  );
}
