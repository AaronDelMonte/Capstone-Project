LEARNING_PATHS = {
    "Software Engineer": [
        {
            "nomor": 1,
            "judul": "Dasar Pemrograman",
            "deskripsi": "Pelajari konsep dasar pemrograman dan logika algoritma.",
            "status": "Dasar",
        },
        {
            "nomor": 2,
            "judul": "Git dan GitHub",
            "deskripsi": "Pelajari version control untuk mengelola project.",
            "status": "Pemula",
        },
        {
            "nomor": 3,
            "judul": "Web Development",
            "deskripsi": "Pelajari HTML, CSS, JavaScript, dan pengembangan aplikasi web.",
            "status": "Pemula",
        },
        {
            "nomor": 4,
            "judul": "Framework dan Backend",
            "deskripsi": "Pelajari framework seperti React dan Django.",
            "status": "Menengah",
        },
        {
            "nomor": 5,
            "judul": "Bangun Project",
            "deskripsi": "Buat project nyata sebagai portfolio.",
            "status": "Lanjutan",
        },
    ],

    "Game Developer": [
        {
            "nomor": 1,
            "judul": "Dasar Pemrograman",
            "deskripsi": "Pelajari logika dan konsep dasar pemrograman.",
            "status": "Dasar",
        },
        {
            "nomor": 2,
            "judul": "Game Engine",
            "deskripsi": "Pelajari Unity atau Godot.",
            "status": "Pemula",
        },
        {
            "nomor": 3,
            "judul": "Game Programming",
            "deskripsi": "Pelajari sistem input, physics, dan game logic.",
            "status": "Menengah",
        },
        {
            "nomor": 4,
            "judul": "Game Design",
            "deskripsi": "Pelajari mekanik permainan dan level design.",
            "status": "Menengah",
        },
        {
            "nomor": 5,
            "judul": "Bangun Game",
            "deskripsi": "Buat game sederhana untuk portfolio.",
            "status": "Lanjutan",
        },
    ],

    "Designer": [
        {
            "nomor": 1,
            "judul": "Dasar Desain",
            "deskripsi": "Pelajari warna, tipografi, layout, dan komposisi.",
            "status": "Dasar",
        },
        {
            "nomor": 2,
            "judul": "Figma",
            "deskripsi": "Pelajari Figma untuk membuat desain digital.",
            "status": "Pemula",
        },
        {
            "nomor": 3,
            "judul": "UI/UX Design",
            "deskripsi": "Pelajari wireframe, prototype, UI, dan UX.",
            "status": "Menengah",
        },
        {
            "nomor": 4,
            "judul": "Design Project",
            "deskripsi": "Buat project desain untuk meningkatkan kemampuan.",
            "status": "Menengah",
        },
        {
            "nomor": 5,
            "judul": "Bangun Portfolio",
            "deskripsi": "Kumpulkan hasil desain menjadi portfolio.",
            "status": "Lanjutan",
        },
    ],
}


def get_learning_path(profession):
    if profession in LEARNING_PATHS:
        return LEARNING_PATHS[profession]

    return [
        {
            "nomor": 1,
            "judul": f"Dasar {profession}",
            "deskripsi": f"Pelajari konsep dasar yang dibutuhkan untuk menjadi {profession}.",
            "status": "Dasar",
        },
        {
            "nomor": 2,
            "judul": "Pelajari Skill Utama",
            "deskripsi": f"Pelajari keterampilan utama yang dibutuhkan dalam bidang {profession}.",
            "status": "Pemula",
        },
        {
            "nomor": 3,
            "judul": "Latihan dan Praktik",
            "deskripsi": f"Lakukan latihan dan praktik yang berkaitan dengan bidang {profession}.",
            "status": "Menengah",
        },
        {
            "nomor": 4,
            "judul": "Bangun Project",
            "deskripsi": f"Buat project untuk menerapkan kemampuan di bidang {profession}.",
            "status": "Menengah",
        },
        {
            "nomor": 5,
            "judul": "Bangun Portfolio",
            "deskripsi": f"Susun hasil project sebagai portfolio untuk mempersiapkan karier sebagai {profession}.",
            "status": "Lanjutan",
        },
    ]