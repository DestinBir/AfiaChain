import React, { useState } from 'react';

interface FormData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: string;
  bloodType: string;
  allergies: string;
  medications: string;
  medicalHistory: string;
}

const MedicalForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    bloodType: '',
    allergies: '',
    medications: '',
    medicalHistory: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12">
      <h1 className="text-3xl font-semibold text-teal-700 mb-8">AFIACHAIN - Dossier Médical</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Prénom :</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="mt-1 p-2 w-full border rounded" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Nom :</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="mt-1 p-2 w-full border rounded" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Date de naissance :</label>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required className="mt-1 p-2 w-full border rounded" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Sexe :</label>
          <select name="gender" value={formData.gender} onChange={handleChange} required className="mt-1 p-2 w-full border rounded">
            <option value="">Sélectionner</option>
            <option value="male">Masculin</option>
            <option value="female">Féminin</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Groupe sanguin :</label>
          <input type="text" name="bloodType" value={formData.bloodType} onChange={handleChange} required className="mt-1 p-2 w-full border rounded" />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Allergies :</label>
          <textarea name="allergies" value={formData.allergies} onChange={handleChange} className="mt-1 p-2 w-full border rounded"></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Médicaments en cours :</label>
          <textarea name="medications" value={formData.medications} onChange={handleChange} className="mt-1 p-2 w-full border rounded"></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold">Antécédents médicaux :</label>
          <textarea name="medicalHistory" value={formData.medicalHistory} onChange={handleChange} className="mt-1 p-2 w-full border rounded"></textarea>
        </div>

        <button type="submit" className="w-full bg-teal-600 text-white py-2 px-4 rounded hover:bg-teal-700 transition duration-300">
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default MedicalForm;
