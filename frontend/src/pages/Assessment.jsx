import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Assessment() {
    const [formData, setFormData] = useState({
        matematika: "",
        informatika: "",
        minat: "",
        ekstrakurikuler: "",
        aspirasi: "",
});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
  });
};

const navigate = useNavigate();
const handleSubmit = (e) => {
  e.preventDefault();

  navigate("/result", {
    state: formData,
  });
};

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">

      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-medium text-blue-600">
          SKILLPATH ASSESSMENT
        </p>

        <h1 className="mt-2 text-4xl font-bold text-gray-900">
          Kenali Potensi Dirimu
        </h1>

        <p className="mt-4 text-gray-600">
          Isi beberapa informasi tentang dirimu untuk mendapatkan
          rekomendasi karier yang sesuai.
        </p>
      </div>

      {/* Form */}
      <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-white p-8 shadow-sm">

        {/* Nilai */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            1. Nilai Akademik
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Masukkan nilai mata pelajaran yang kamu miliki.
          </p>

          <div className="mt-5 grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Matematika
              </label>

             <input
  type="number"
  name="matematika"
  value={formData.matematika}
  onChange={handleChange}
  placeholder="Contoh: 85"
  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
/>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Informatika
              </label>

              <input
  type="number"
  name="informatika"
  value={formData.informatika}
  onChange={handleChange}
  placeholder="Contoh: 90"
  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
/>
            </div>

          </div>
        </div>

        {/* Minat */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            2. Minat dan Hobi
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Ceritakan hal yang kamu sukai.
          </p>

          <textarea
  name="minat"
  value={formData.minat}
  onChange={handleChange}
  rows="4"
  placeholder="Contoh: Saya suka komputer dan teknologi."
  className="mt-5 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
/>
        </div>

        {/* Ekstrakurikuler */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            3. Ekstrakurikuler
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Masukkan kegiatan atau organisasi yang pernah kamu ikuti.
          </p>

          <input
  type="text"
  name="ekstrakurikuler"
  value={formData.ekstrakurikuler}
  onChange={handleChange}
  placeholder="Contoh: Robotik, Basket, Pramuka"
  className="mt-5 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
/>
        </div>

        {/* Aspirasi */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            4. Aspirasi Karier
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Karier apa yang ingin kamu jalani di masa depan?
          </p>

          <input
  type="text"
  name="aspirasi"
  value={formData.aspirasi}
  onChange={handleChange}
  placeholder="Contoh: Software Developer"
  className="mt-5 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
/>
        </div>

        {/* Button */}
        <div className="mt-10 flex justify-end">
          <button
  onClick={handleSubmit}
  className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
>
  Lihat Rekomendasi →
</button>
        </div>

      </div>
    </div>
  );
}

export default Assessment;