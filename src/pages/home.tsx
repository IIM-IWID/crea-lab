import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogClose,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Homepage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50">
      {/* En-tête */}
      <header className="w-full py-4 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800">Crealab</h1>
        </div>
      </header>

      {/* Section d'accueil */}
      <section className="w-full py-20 bg-gray-100 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Bienvenue chez Crealab</h2>
        <p className="text-lg text-gray-600 mb-8">
          Découvrez l'avenir de l'innovation avec notre plateforme.
        </p>
        <Button size="lg" variant="default" onClick={() => setIsDialogOpen(true)}>
          En savoir plus
        </Button>
      </section>

      {/* Fenêtre de bienvenue */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <button className="hidden"></button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Bienvenue chez Crealab</DialogTitle>
            <DialogDescription>
              Crealab offre un environnement collaboratif pour repousser les limites de la technologie et de l'innovation.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
                Fermer
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Section des fonctionnalités */}
      <section className="w-full py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-8">Nos fonctionnalités</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2 text-gray-600">Fonctionnalité Un</h4>
            <p className="text-gray-600">Description des avantages et des cas d'utilisation de cette fonctionnalité.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2 text-gray-600">Fonctionnalité Deux</h4>
            <p className="text-gray-600">Découvrez comment cette fonctionnalité répond à vos besoins.</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2 text-gray-600">Fonctionnalité Trois</h4>
            <p className="text-gray-600">Les avantages et les aspects uniques de cette fonctionnalité.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Homepage;
