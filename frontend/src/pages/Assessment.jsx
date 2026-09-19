import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitAssessment } from "../services/api";

function Assessment() {
    const [formData, setFormData] = useState({
 gender: "",
  part_time_job: "",
  absence_days: "",
  matematika: "",
  sejarah: "",
  fisika: "",
  kimia: "",
  biologi: "",
  bahasa_inggris: "",
  geografi: "",
  ekstrakurikuler: "",
  jam_belajar: "",
  aspirasi: "",
});

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
  });
};

const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();

if (
  !formData.gender ||
  !formData.part_time_job ||
  formData.absence_days === "" ||
  !formData.matematika ||
  !formData.sejarah ||
  !formData.fisika ||
  !formData.kimia ||
  !formData.biologi ||
  !formData.bahasa_inggris ||
  !formData.geografi ||
  !formData.ekstrakurikuler ||
  !formData.jam_belajar ||
  !formData.aspirasi
) {
  alert("Silakan lengkapi semua data assessment terlebih dahulu.");
  return;
}

  setLoading(true);

  try {
    const result = await submitAssessment(formData);

    navigate("/result", {
      state: {
        formData: formData,
        recommendations: result.recommendations,
        learningPath: result.learningPath,
      },
    });
  } catch (error) {
    console.error("Gagal mengirim assessment:", error);
    alert("Terjadi kesalahan. Silakan coba lagi.");
  } finally {
    setLoading(false);
  }
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

  {/* Data Siswa */}
  <div>
    <h2 className="text-xl font-semibold text-gray-900">
      Data Siswa
    </h2>

    <p className="mt-1 text-sm text-gray-500">
      Masukkan informasi dasar tentang dirimu.
    </p>

    <div className="mt-5 grid gap-5 sm:grid-cols-2">

      {/* Gender */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Jenis Kelamin
        </label>

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="">Pilih jenis kelamin</option>
          <option value="male">Laki-laki</option>
          <option value="female">Perempuan</option>
        </select>
      </div>

      {/* Part-time Job */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Memiliki pekerjaan part-time?
        </label>

        <select
          name="part_time_job"
          value={formData.part_time_job}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        >
          <option value="">Pilih jawaban</option>
          <option value="false">Tidak</option>
          <option value="true">Ya</option>
        </select>
      </div>

      {/* Absence */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Jumlah Hari Tidak Hadir
        </label>

        <input
          type="number"
          name="absence_days"
          value={formData.absence_days}
          onChange={handleChange}
          min="0"
          placeholder="Contoh: 2"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
        />
      </div>

    </div>
  </div>

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
    Sejarah
  </label>

  <input
    type="number"
    name="sejarah"
    value={formData.sejarah}
    onChange={handleChange}
    placeholder="Contoh: 85"
    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-gray-700">
    Fisika
  </label>

  <input
    type="number"
    name="fisika"
    value={formData.fisika}
    onChange={handleChange}
    placeholder="Contoh: 85"
    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-gray-700">
    Kimia
  </label>

  <input
    type="number"
    name="kimia"
    value={formData.kimia}
    onChange={handleChange}
    placeholder="Contoh: 85"
    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-gray-700">
    Biologi
  </label>

  <input
    type="number"
    name="biologi"
    value={formData.biologi}
    onChange={handleChange}
    placeholder="Contoh: 85"
    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-gray-700">
    Bahasa Inggris
  </label>

  <input
    type="number"
    name="bahasa_inggris"
    value={formData.bahasa_inggris}
    onChange={handleChange}
    placeholder="Contoh: 85"
    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-gray-700">
    Geografi
  </label>

  <input
    type="number"
    name="geografi"
    value={formData.geografi}
    onChange={handleChange}
    placeholder="Contoh: 85"
    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
  />
</div>
</div>
        </div>

        {/* Ekstrakurikuler */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            2. Ekstrakurikuler
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

        {/* Jam Belajar */}
<div className="mt-10">
  <h2 className="text-xl font-semibold text-gray-900">
    3. Jam Belajar Mandiri
  </h2>

  <p className="mt-1 text-sm text-gray-500">
    Berapa jam biasanya kamu belajar sendiri dalam satu minggu?
  </p>

  <input
    type="number"
    name="jam_belajar"
    value={formData.jam_belajar}
    onChange={handleChange}
    min="0"
    placeholder="Contoh: 10"
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
  disabled={loading}
  className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white hover:bg-blue-700"
>
  {loading ? "Memproses..." : "Lihat Hasil →"}
</button>
        </div>

      </div>
    </div>
  );
}

export default Assessment;