import { useLocation, useNavigate } from "react-router-dom";

function LearningPath() {
  const location = useLocation();
  const navigate = useNavigate();

  const learningPath = location.state?.learningPath || [];
  const profession = location.state?.profession || "Karier";

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center">
          <p className="font-medium text-blue-600">
            SKILLPATH
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Learning Path
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Berikut roadmap belajar yang dapat kamu ikuti untuk mempersiapkan
            diri menjadi {profession}.
          </p>
        </div>

        {/* Career */}
        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <p className="text-sm text-gray-500">
            Rekomendasi Karier
          </p>

          <h2 className="mt-2 text-2xl font-bold text-gray-900">
            {profession}
          </h2>

          <p className="mt-2 text-gray-600">
            Roadmap pembelajaran yang disesuaikan dengan rekomendasi karier.
          </p>
        </div>

        {/* Roadmap */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Roadmap Pembelajaran
          </h2>

          <div className="mt-5 space-y-5">
            {learningPath.length > 0 ? (
              learningPath.map((step) => (
                <div
                  key={step.nomor}
                  className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm"
                >
                  {/* Number */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                    {step.nomor}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {step.judul}
                      </h3>

                      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                        {step.status}
                      </span>
                    </div>

                    <p className="mt-2 leading-relaxed text-gray-600">
                      {step.deskripsi}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
                <p className="text-gray-500">
                  Roadmap pembelajaran belum tersedia untuk karier ini.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/result")}
            className="rounded-lg border border-gray-300 bg-white px-5 py-2.5 font-medium text-gray-700 hover:bg-gray-50"
          >
            ← Kembali ke Hasil
          </button>
        </div>

      </div>
    </div>
  );
}

export default LearningPath;