import React, { useState } from 'react';

const ClientForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    garmentType: '',
    measurements: {
      neck: '',
      shoulder: '',
      chest: '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData.measurements) {
      // Actualizar medidas
      setFormData((prev) => ({
        ...prev,
        measurements: {
          ...prev.measurements,
          [name]: value,
        },
      }));
    } else {
      // Actualizar otros campos
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    // Reiniciar el formulario después de enviar
    setFormData({
      name: '',
      garmentType: '',
      measurements: {
        neck: '',
        shoulder: '',
        chest: '',
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 dark:bg-gray-700 p-4 rounded shadow">
      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4">Agregar Cliente</h2>

      {/* Nombre */}
      <label className="block mb-2 text-gray-700 dark:text-gray-300">
        Nombre:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 rounded"
        />
      </label>

      {/* Tipo de prenda */}
      <label className="block mb-2 text-gray-700 dark:text-gray-300">
        Tipo de prenda:
        <input
          type="text"
          name="garmentType"
          value={formData.garmentType}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 rounded"
        />
      </label>

      {/* Medidas */}
      <fieldset className="mb-4">
        <legend className="text-gray-800 dark:text-gray-200 font-semibold">Medidas</legend>
        <label className="block mb-2 text-gray-700 dark:text-gray-300">
          Cuello:
          <input
            type="number"
            name="neck"
            value={formData.measurements.neck}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 rounded"
          />
        </label>
        <label className="block mb-2 text-gray-700 dark:text-gray-300">
          Hombro:
          <input
            type="number"
            name="shoulder"
            value={formData.measurements.shoulder}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 rounded"
          />
        </label>
        <label className="block mb-2 text-gray-700 dark:text-gray-300">
          Pecho:
          <input
            type="number"
            name="chest"
            value={formData.measurements.chest}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 rounded"
          />
        </label>
      </fieldset>

      {/* Botón de envío */}
      <button
        type="submit"
        className="bg-blue-500 dark:bg-blue-700 text-white px-4 py-2 rounded transition hover:bg-blue-600 dark:hover:bg-blue-800"
      >
        Guardar Cliente
      </button>
    </form>
  );
};

export default ClientForm;