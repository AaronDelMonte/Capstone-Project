from pathlib import Path

import joblib
import pandas as pd
import numpy as np


BASE_DIR = Path(__file__).resolve().parents[2]
MODEL_DIR = BASE_DIR / "datascience"


model = joblib.load(MODEL_DIR / "career_model.pkl")
scaler = joblib.load(MODEL_DIR / "career_scaler.pkl")
target_encoder = joblib.load(MODEL_DIR / "career_target_encoder.pkl")
feature_encoders = joblib.load(MODEL_DIR / "career_feature_encoders.pkl")


def predict_career(student_data, top_n=3):
    input_df = pd.DataFrame([student_data])

    for col in feature_encoders.keys():
        if col in input_df.columns:
            input_df[col] = feature_encoders[col].transform(input_df[col])

    input_scaled = scaler.transform(input_df)

    probabilities = model.predict_proba(input_scaled)[0]

    top_indices = np.argsort(probabilities)[::-1][:top_n]

    recommendations = []

    for index in top_indices:
        recommendations.append({
            "profession": target_encoder.classes_[index],
            "match_score": round(float(probabilities[index]) * 100, 2)
        })

    return recommendations