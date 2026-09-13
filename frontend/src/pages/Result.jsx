import { useLocation, useNavigate } from "react-router-dom";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const formData = location.state?.formData;
const recommendations = location.state?.recommendations || [];

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center">
          <p className="font-medium text-blue-600">
            SKILLPATH
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Hasil Rekomendasi Karier
          </h1>

          <p className="mt-3 text-gray-600">
            Berikut beberapa pilihan karier yang sesuai dengan profilmu.
          </p>
        </div>

        {/* Data Assessment */}
        <div className="mt-10 rounded-2xl bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900">
            Profil Assessment
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">

            <div>
              <p className="text-sm text-gray-500">
                Nilai Matematika
              </p>
              <p className="font-semibold">
                {formData?.matematika || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Nilai Informatika
              </p>
              <p className="font-semibold">
                {formData?.informatika || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Minat & Hobi
              </p>
              <p className="font-semibold">
                {formData?.minat || "-"}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Ekstrakurikuler
              </p>
              <p className="font-semibold">
                {formData?.ekstrakurikuler || "-"}
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="text-sm text-gray-500">
                Aspirasi Karier
              </p>
              <p className="font-semibold">
                {formData?.aspirasi || "-"}
              </p>
            </div>

          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Rekomendasi Karier
          </h2>

          <p className="mt-2 text-gray-600">
            Berdasarkan data assessment yang kamu masukkan.
          </p>

          <div className="mt-6 space-y-5">

            {recommendations.map((career, index) => (
              <div
                key={career.nama}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between gap-4">

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-600">
                        {index + 1}
                      </span>

                      <h3 className="text-xl font-bold text-gray-900">
                        {career.nama}
                      </h3>
                    </div>

                    <p className="mt-3 text-gray-600">
                      {career.deskripsi}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-3xl font-bold text-blue-600">
                      {career.persentase}%
                    </p>

                    <p className="text-sm text-gray-500">
                      Kecocokan
                    </p>
                  </div>

                </div>

                {/* Progress bar */}
                <div className="mt-5 h-3 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full rounded-full bg-blue-600"
                    style={{
                      width: `${career.persentase}%`,
                    }}
                  />
                </div>

                <button
  onClick={() =>
    navigate("/learning-path", {
      state: {
        learningPath: location.state?.learningPath,
      },
    })
  }
  className="mt-5 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white hover:bg-blue-700"
>
  Lihat Learning Path →
</button>
              </div>
            ))}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Result;