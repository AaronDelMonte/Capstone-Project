from pathlib import Path

import joblib
import pandas as pd
import numpy as np


# =========================
# LOAD MODEL
# =========================

BASE_DIR = Path(__file__).resolve().parents[2]
MODEL_DIR = BASE_DIR / "datascience"

model = joblib.load(MODEL_DIR / "career_model.pkl")
scaler = joblib.load(MODEL_DIR / "career_scaler.pkl")
target_encoder = joblib.load(
    MODEL_DIR / "career_target_encoder.pkl"
)
feature_encoders = joblib.load(
    MODEL_DIR / "career_feature_encoders.pkl"
)


# =========================
# ASPIRATION MAPPING
# =========================

ASPIRATION_MAPPING = {
    "software developer": "Software Engineer",
    "software engineer": "Software Engineer",
    "programmer": "Software Engineer",
    "programmer komputer": "Software Engineer",
    "web developer": "Software Engineer",
    "frontend developer": "Software Engineer",
    "backend developer": "Software Engineer",
    "full stack developer": "Software Engineer",

    "game developer": "Game Developer",

    "designer": "Designer",
    "ui ux designer": "Designer",
    "ui/ux designer": "Designer",
    "ui designer": "Designer",
    "ux designer": "Designer",

    "doctor": "Doctor",
    "dokter": "Doctor",

    "lawyer": "Lawyer",
    "pengacara": "Lawyer",

    "teacher": "Teacher",
    "guru": "Teacher",

    "scientist": "Scientist",
    "ilmuwan": "Scientist",

    "banker": "Banker",
    "bank": "Banker",

    "writer": "Writer",
    "penulis": "Writer",

    "artist": "Artist",
    "seniman": "Artist",

    "accountant": "Accountant",
    "akuntan": "Accountant",

    "business owner": "Business Owner",
    "businessman": "Business Owner",
    "businesswoman": "Business Owner",
    "pengusaha": "Business Owner",

    "government officer": "Government Officer",
    "pegawai pemerintah": "Government Officer",

    "construction engineer": "Construction Engineer",

    "real estate developer": "Real Estate Developer",

    "stock investor": "Stock Investor",

    "social network studies": "Social Network Studies",
}


# =========================
# PREDICT CAREER
# =========================

def predict_career(student_data, aspiration=None, top_n=3):

    # -------------------------
    # Prepare input
    # -------------------------

    input_df = pd.DataFrame([student_data])

    # Encode categorical features
    for col in feature_encoders.keys():

        if col in input_df.columns:
            input_df[col] = feature_encoders[col].transform(
                input_df[col]
            )

    # Scaling
    input_scaled = scaler.transform(input_df)

    # -------------------------
    # ML prediction
    # -------------------------

    probabilities = model.predict_proba(input_scaled)[0]

    # Copy supaya probability asli model tidak berubah
    adjusted_probabilities = probabilities.copy()

    # -------------------------
    # Process aspiration
    # -------------------------

    target_profession = None

    if aspiration:

        aspiration_clean = (
            str(aspiration)
            .strip()
            .lower()
        )

        target_profession = ASPIRATION_MAPPING.get(
            aspiration_clean
        )

    # -------------------------
    # Apply aspiration preference
    # -------------------------

    classes = list(target_encoder.classes_)

    if target_profession and target_profession in classes:

        target_index = classes.index(
            target_profession
        )

        # Probability tertinggi dari ML
        max_probability = float(
            np.max(adjusted_probabilities)
        )

        # Probability profesi aspirasi
        current_probability = float(
            adjusted_probabilities[target_index]
        )

        # Berikan prioritas pada aspirasi user.
        # Target minimal sedikit di atas prediksi ML tertinggi.
        aspiration_probability = max(
            current_probability,
            max_probability * 1.15
        )

        adjusted_probabilities[target_index] = min(
            aspiration_probability,
            1.0
        )

    # -------------------------
    # Ambil rekomendasi
    # -------------------------

    top_indices = np.argsort(
        adjusted_probabilities
    )[::-1][:top_n]

    # -------------------------
    # Normalisasi score
    # -------------------------

    total_probability = np.sum(
        adjusted_probabilities
    )

    recommendations = []

    for index in top_indices:

        score = (
            adjusted_probabilities[index]
            / total_probability
        ) * 100

        recommendations.append(
            {
                "profession": classes[index],
                "match_score": round(
                    float(score),
                    2
                )
            }
        )

    return recommendations