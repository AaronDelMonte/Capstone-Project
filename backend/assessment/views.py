from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import AssessmentSerializer
from .models import Assessment
from ml.predictor import predict_career
from learning_path.learning_path import get_learning_path


class AssessmentView(APIView):
    def post(self, request):
        serializer = AssessmentSerializer(data=request.data)

        if serializer.is_valid():
            assessment = Assessment.objects.create(**serializer.validated_data)

            student_data = {
                "gender": assessment.gender,
                "part_time_job": assessment.part_time_job,
                "absence_days": assessment.absence_days,
                "extracurricular_activities": bool(
                    assessment.ekstrakurikuler.strip()
                ),
                "weekly_self_study_hours": assessment.jam_belajar,
                "math_score": assessment.matematika,
                "history_score": assessment.sejarah,
                "physics_score": assessment.fisika,
                "chemistry_score": assessment.kimia,
                "biology_score": assessment.biologi,
                "english_score": assessment.bahasa_inggris,
                "geography_score": assessment.geografi,
            }

            recommendations = predict_career(student_data)
            top_profession = recommendations[0]["profession"]
            learning_path = get_learning_path(top_profession)

            return Response(
    {
        "message": "Assessment berhasil diterima",
        "assessment_id": assessment.id,
        "recommendations": recommendations,
        "learningPath": learning_path,
    },
    status=status.HTTP_200_OK,
)

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )