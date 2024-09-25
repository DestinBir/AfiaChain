// pages/dashboard.js
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f0f4c3', minHeight: '100vh' }}>
      <h1 style={{ color: '#33691e' }}>AFIACHAIN - Tableau de bord</h1>
      <p>Ici, vous pouvez visualiser et gérer les données médicales.</p>
      <Link href="/">
        <a style={{ color: '#33691e', fontSize: '20px' }}>Retour</a>
      </Link>
    </div>
  );
}