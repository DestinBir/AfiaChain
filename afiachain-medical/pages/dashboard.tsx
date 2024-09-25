import Link from 'next/link';
import React from 'react';
import { v4 as uuidv4 } from 'uuid'; // Génère un hash unique pour chaque entrée

const Dashboard: React.FC = () => {
  // Données provisoires
  const data = [
    {
      id: uuidv4(),
      patientName: 'Destin Nkolo',
      age: 45,
      condition: 'Normale',
      date: '2024-09-25',
    },
    {
      id: uuidv4(),
      patientName: 'Pauline Mvondo',
      age: 30,
      condition: 'Sous cure antibiotique',
      date: '2024-09-26',
    },
    {
      id: uuidv4(),
      patientName: 'Alain Mokili',
      age: 60,
      condition: 'Convalescence',
      date: '2024-09-27',
    },
  ];

  return (
    <div className="min-h-screen bg-teal-50 flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold text-teal-700 mb-6">AFIACHAIN - Tableau de bord</h1>
      <p className="text-lg mb-8 text-teal-600">Ici, vous pouvez visualiser et gérer les données médicales.</p>

      <table className="table-auto bg-white border-collapse border border-teal-700 text-left shadow-lg">
        <thead>
          <tr>
            <th className="border border-teal-600 px-4 py-2">#</th>
            <th className="border border-teal-600 px-4 py-2">Nom du Patient</th>
            <th className="border border-teal-600 px-4 py-2">Âge</th>
            <th className="border border-teal-600 px-4 py-2">Etat actuel Médical</th>
            <th className="border border-teal-600 px-4 py-2">Date d Admission</th>
            <th className="border border-teal-600 px-4 py-2">Hash</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr key={entry.id}>
              <td className="border border-teal-600 px-4 py-2">{index + 1}</td>
              <td className="border border-teal-600 px-4 py-2">{entry.patientName}</td>
              <td className="border border-teal-600 px-4 py-2">{entry.age}</td>
              <td className="border border-teal-600 px-4 py-2">{entry.condition}</td>
              <td className="border border-teal-600 px-4 py-2">{entry.date}</td>
              <td className="border border-teal-600 px-4 py-2">{entry.id}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link href="/" className="text-xl text-teal-700 hover:text-teal-900 mt-8 transition duration-300">
        Retour à accueil
      </Link>
    </div>
  );
};

export default Dashboard;
