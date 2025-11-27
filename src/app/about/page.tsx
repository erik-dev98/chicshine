import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const milestones = [
    {
        year: "2025",
        description: "Nacimos en Perú con el sueño de transformar la belleza tal como la conocíamos."
    },
    {
        year: "2025",
        description: "Creamos y patentamos nuestro labial insignia \"Lunáticas\"."
    },
    {
        year: "2025",
        description: "Rompimos un récord inimaginable: ¡Vendimos 100,000 labiales!"
    },
    {
        year: "2025",
        description: "Llegó la hora de abrir fronteras y realzar la belleza de las provincias del Perú y La ciudad de Lima."
    },
    {
        year: "2025",
        description: "Estamos planeando conquistar Canadá y Estados Unidos y regalarles un poco de nuestra esencia."
    }
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
          Acerca de Chic&Shine
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Somos más que una tienda. Somos un equipo apasionado por traerte los mejores productos con una experiencia de compra inolvidable.
        </p>
      </div>

      <div className="mt-16">
        <h2 className="font-headline text-3xl font-semibold text-center">Nuestra Trayectoria</h2>
        <div className="mt-8 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2"></div>
            {milestones.map((milestone, index) => (
                <div key={index} className="relative mb-12">
                    <div className="flex items-center" style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
                        <div className="w-5/12">
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="font-headline text-2xl text-primary">{milestone.year}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">{milestone.description}</p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="w-2/12 flex justify-center">
                            <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center z-10">
                                <div className="bg-background rounded-full w-4 h-4"></div>
                            </div>
                        </div>
                        <div className="w-5/12"></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
}
