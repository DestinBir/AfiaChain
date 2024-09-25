import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-teal-50 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-teal-700 mb-6">Bienvenue sur AFIACHAIN</h1>
      <p className="text-lg mb-8 text-teal-600">Une plateforme sécurisée et décentralisée pour la gestion des données médicales.</p>

      <Link href="/medical-form" className="text-xl text-teal-700 hover:text-teal-900 transition duration-300">
        Remplir un dossier médical
      </Link>
      <br />
      <Link href="/dashboard" className="mt-4 text-xl text-teal-700 hover:text-teal-900 transition duration-300">
        Accéder au Dashboard
      </Link>
    </div>
  );
};

export default Home;
