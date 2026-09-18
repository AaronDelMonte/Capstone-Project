import joblib
import json
import pandas as pd
import numpy as np

# --- Load model dan komponen pendukung ---
model = joblib.load('career_model.pkl')
scaler = joblib.load('career_scaler.pkl')
target_encoder = joblib.load('career_target_encoder.pkl')
feature_encoders = joblib.load('career_feature_encoders.pkl')

categorical_cols = list(feature_encoders.keys())


def predict(student_data, top_n=3):
    """
    Menerima data siswa dan mengembalikan hasil prediksi karier.

    Parameter:
        student_data (dict): key = nama kolom fitur, value = nilainya.
        top_n (int): jumlah rekomendasi karier yang dikembalikan.

    Return:
        str: JSON string berisi daftar rekomendasi karier dan skor kecocokannya.
    """
    input_df = pd.DataFrame([student_data])

    for col in categorical_cols:
        if col in input_df.columns:
            input_df[col] = feature_encoders[col].transform(input_df[col])

    input_scaled = scaler.transform(input_df)
    proba = model.predict_proba(input_scaled)[0]
    top_indices = np.argsort(proba)[::-1][:top_n]

    result = {
        "recommendations": [
            {
                "profession": target_encoder.classes_[i],
                "match_score": round(float(proba[i]) * 100, 2)
            }
            for i in top_indices
        ]
    }
    return json.dumps(result, indent=2)


if __name__ == "__main__":
    # Contoh pemakaian langsung dari terminal untuk uji coba
    sample_student = {
        "gender": "male",
        "part_time_job": False,
        "absence_days": 2,
        "extracurricular_activities": True,
        "weekly_self_study_hours": 10,
        "math_score": 85,
        "history_score": 70,
        "physics_score": 82,
        "chemistry_score": 75,
        "biology_score": 78,
        "english_score": 88,
        "geography_score": 65
    }
    print(predict(sample_student, top_n=3))