// pages/index.tsx
import Link from 'next/link';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#e0f7fa', minHeight: '100vh' }}>
      <h1 style={{ color: '#00796b' }}>Bienvenue sur AFIACHAIN</h1>
      <p>Une plateforme sécurisée et décentralisée pour la gestion des données médicales.</p>
      
      {/* Utilisation de Link sans balise <a> */}
      <Link href="/medical-form" style={{ color: '#00796b', fontSize: '20px' }}>
        Remplir un dossier médical
      </Link>
      <br />
      <Link href="/dashboard" style={{ color: '#00796b', fontSize: '20px' }}>
        Accéder au Dashboard
      </Link>
    </div>
  );
};

export default Home;
