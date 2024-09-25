// pages/medical-form.js
import React, { useState } from 'react';

const MedicalForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    bloodType: '',
    allergies: '',
    medications: '',
    medicalHistory: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, such as sending data to backend
    console.log(formData);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#008080' }}>AFIACHAIN - Dossier Médical</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: 'auto' }}>
        <label>Prénom :</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />

        <label>Nom :</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />

        <label>Date de naissance :</label>
        <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />

        <label>Sexe :</label>
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Sélectionner</option>
          <option value="male">Masculin</option>
          <option value="female">Féminin</option>
        </select>

        <label>Groupe sanguin :</label>
        <input type="text" name="bloodType" value={formData.bloodType} onChange={handleChange} required />

        <label>Allergies :</label>
        <textarea name="allergies" value={formData.allergies} onChange={handleChange}></textarea>

        <label>Médicaments en cours :</label>
        <textarea name="medications" value={formData.medications} onChange={handleChange}></textarea>

        <label>Antécédents médicaux :</label>
        <textarea name="medicalHistory" value={formData.medicalHistory} onChange={handleChange}></textarea>

        <button type="submit" style={{ backgroundColor: '#008080', color: '#fff', padding: '10px 20px', border: 'none', marginTop: '20px' }}>
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default MedicalForm;
