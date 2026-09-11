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

    </div>
  );
}

export default Home;