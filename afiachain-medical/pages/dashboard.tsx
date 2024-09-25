import Link from 'next/link';
import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-6">AFIACHAIN - Tableau de bord</h1>
      <p className="text-lg mb-8 text-green-600">Ici, vous pouvez visualiser et gérer les données médicales.</p>
      
      <Link href="/" className="text-xl text-green-700 hover:text-green-900 transition duration-300">
        Retour à accueil
      </Link>
    </div>
  );
};

export default Dashboard;
