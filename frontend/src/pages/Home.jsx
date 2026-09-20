import { Link } from "react-router-dom";
import skillpath from "../assets/skillpath.png"

function Home() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-blue-600">
          SkillPath
        </h1>

        <div className="flex items-center gap-8">
          <a href="/" className="text-gray-700 hover:text-blue-600">
            Home
          </a>

          <a href="#" className="text-gray-700 hover:text-blue-600">
            Tentang Kami
          </a>

          <Link
  to="/assessment"
  className="rounded-lg bg-blue-600 px-5 py-2.5 text-white hover:bg-blue-700"
>
  Mulai Assessment
</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-[calc(100vh-88px)] items-center px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          {/* Text */}
          <div>
            <p className="mb-4 font-medium text-blue-600">
              PERSONALIZED CAREER PLATFORM
            </p>

            <h2 className="text-5xl font-bold leading-tight text-gray-900">
              Temukan Karier yang
              <span className="text-blue-600"> Cocok Untukmu</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Kenali potensi, minat, dan kemampuanmu untuk mendapatkan
              rekomendasi karier serta jalur belajar yang sesuai denganmu.
            </p>

           <Link
  to="/assessment"
  className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg hover:bg-blue-700"
>
  Mulai Assessment →
</Link>
          </div>

          {/* Illustration sementara */}
          <div className="flex justify-center">
            <div className="flex h-100 w-100 items-center justify-center rounded-3xl bg-white">
              <img src={skillpath} alt="skill" className="h-100 w-100 object-contain" />
            </div>
          </div>

        </div>
      </section>

      <section className="bg-gray-50 px-8 py-20">
  <div className="mx-auto max-w-6xl">

    {/* Section Header */}
    <div className="text-center">
      <p className="font-medium text-blue-600">
        CARA KERJA SKILLPATH
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-900">
        Temukan Jalur Kariermu
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        SkillPath membantu kamu mengenali potensi dan menemukan
        jalur belajar yang sesuai dengan tujuan kariermu.
      </p>
    </div>

    {/* Steps */}
    <div className="mt-12 grid gap-8 md:grid-cols-3">

      {/* Step 1 */}
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
          📝
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          1. Isi Assessment
        </h3>

        <p className="mt-3 leading-relaxed text-gray-600">
          Masukkan informasi tentang nilai, minat, hobi,
          ekstrakurikuler, dan aspirasi kariermu.
        </p>
      </div>

      {/* Step 2 */}
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
          🎯
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          2. Dapatkan Rekomendasi
        </h3>

        <p className="mt-3 leading-relaxed text-gray-600">
          Sistem menganalisis profilmu dan memberikan
          rekomendasi karier yang sesuai.
        </p>
      </div>

      {/* Step 3 */}
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
          🚀
        </div>

        <h3 className="mt-6 text-xl font-bold text-gray-900">
          3. Ikuti Learning Path
        </h3>

        <p className="mt-3 leading-relaxed text-gray-600">
          Dapatkan roadmap belajar yang membantu kamu
          mempersiapkan diri menuju karier pilihanmu.
        </p>
      </div>

    </div>
  </div>
</section>

    <section className="bg-white px-8 py-20">
  <div className="mx-auto max-w-6xl">

    {/* Header */}
    <div className="text-center">
      <p className="font-medium text-blue-600">
        KENAPA SKILLPATH?
      </p>

      <h2 className="mt-2 text-3xl font-bold text-gray-900">
        Kenali Potensimu, Tentukan Masa Depanmu
      </h2>

      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        SkillPath membantu kamu membuat keputusan karier
        berdasarkan potensi, minat, dan tujuanmu.
      </p>
    </div>

    {/* Features */}
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      {/* Feature 1 */}
      <div className="rounded-2xl border border-gray-100 p-6 transition hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
          🎯
        </div>

        <h3 className="mt-5 text-lg font-bold text-gray-900">
          Rekomendasi Personal
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Mendapatkan rekomendasi karier yang disesuaikan
          dengan profil dan minatmu.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="rounded-2xl border border-gray-100 p-6 transition hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
          📊
        </div>

        <h3 className="mt-5 text-lg font-bold text-gray-900">
          Berdasarkan Data
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Rekomendasi dibuat berdasarkan data assessment
          yang kamu berikan.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="rounded-2xl border border-gray-100 p-6 transition hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
          🛣️
        </div>

        <h3 className="mt-5 text-lg font-bold text-gray-900">
          Learning Path
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Mendapatkan roadmap belajar untuk membantu
          mempersiapkan karier pilihanmu.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="rounded-2xl border border-gray-100 p-6 transition hover:-translate-y-1 hover:shadow-lg">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
          🚀
        </div>

        <h3 className="mt-5 text-lg font-bold text-gray-900">
          Persiapan Karier
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Membantu kamu memahami langkah yang perlu
          dilakukan untuk mencapai tujuan karier.
        </p>
      </div>

    </div>
  </div>
</section>

    <section className="px-8 py-20">
  <div className="mx-auto max-w-6xl rounded-3xl bg-blue-600 px-8 py-16 text-center">
    <h2 className="text-3xl font-bold text-white md:text-4xl">
      Siap Menemukan Karier yang Cocok?
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-blue-100">
      Kenali potensimu dan dapatkan rekomendasi karier
      serta learning path yang sesuai denganmu.
    </p>

    <Link
      to="/assessment"
      className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 shadow-lg transition hover:bg-gray-100"
    >
      Mulai Assessment →
    </Link>
  </div>
</section>

    <footer className="border-t border-gray-200 bg-white px-8 py-8">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">

    <div>
      <h2 className="text-xl font-bold text-blue-600">
        SkillPath
      </h2>

      <p className="mt-1 text-sm text-gray-500">
        Temukan jalur karier yang sesuai dengan potensimu.
      </p>
    </div>

    <p className="text-sm text-gray-500">
      © 2026 SkillPath. All rights reserved.
    </p>

  </div>
</footer>

    </div>
  );
}

export default Home;
