export const submitAssessment = async (data) => {
  console.log("Data assessment:", data);

  // Simulasi proses API
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
  recommendations: [
    {
      nama: "Software Developer",
      persentase: 92,
      deskripsi:
        "Berfokus pada pembuatan dan pengembangan aplikasi serta sistem berbasis teknologi.",
    },
    {
      nama: "Data Analyst",
      persentase: 84,
      deskripsi:
        "Menganalisis data untuk menemukan informasi dan membantu pengambilan keputusan.",
    },
    {
      nama: "UI/UX Designer",
      persentase: 78,
      deskripsi:
        "Merancang tampilan dan pengalaman pengguna agar aplikasi mudah digunakan.",
    },
  ],

  learningPath: [
    {
      nomor: 1,
      judul: "Pelajari Dasar Pemrograman",
      deskripsi:
        "Pelajari konsep dasar pemrograman seperti variabel, kondisi, perulangan, fungsi, dan struktur data.",
      status: "Dasar",
    },
    {
      nomor: 2,
      judul: "Pelajari Web Development",
      deskripsi:
        "Pelajari HTML, CSS, JavaScript, dan konsep dasar bagaimana sebuah website bekerja.",
      status: "Pemula",
    },
    {
      nomor: 3,
      judul: "Pelajari React.js",
      deskripsi:
        "Pelajari cara membuat aplikasi web interaktif menggunakan React.js.",
      status: "Menengah",
    },
    {
      nomor: 4,
      judul: "Bangun Project",
      deskripsi:
        "Buat beberapa project untuk menerapkan kemampuan yang sudah dipelajari.",
      status: "Praktik",
    },
    {
      nomor: 5,
      judul: "Persiapkan Karier",
      deskripsi:
        "Bangun portfolio, CV, dan persiapkan diri untuk mencari peluang kerja sebagai Software Developer.",
      status: "Karier",
    },
  ],
};
};