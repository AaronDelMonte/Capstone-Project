from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import AssessmentSerializer
from .models import Assessment


class AssessmentView(APIView):
    def post(self, request):
        serializer = AssessmentSerializer(data=request.data)

        if serializer.is_valid():
            Assessment.objects.create(**serializer.validated_data)
            
            return Response(
                {
                    "message": "Assessment berhasil diterima",
                    "recommendations": [
                        {
                            "nama": "Software Developer",
                            "persentase": 92,
                            "deskripsi": "Berfokus pada pembuatan dan pengembangan aplikasi serta sistem berbasis teknologi."
                        },
                        {
                            "nama": "Data Analyst",
                            "persentase": 84,
                            "deskripsi": "Menganalisis data untuk menemukan informasi dan membantu pengambilan keputusan."
                        },
                        {
                            "nama": "UI/UX Designer",
                            "persentase": 78,
                            "deskripsi": "Merancang tampilan dan pengalaman pengguna agar aplikasi mudah digunakan."
                        }
                    ],
                    "learningPath": [
                        {
                            "nomor": 1,
                            "judul": "Pelajari Dasar Pemrograman",
                            "deskripsi": "Pelajari konsep dasar pemrograman seperti variabel, kondisi, perulangan, fungsi, dan struktur data.",
                            "status": "Dasar"
                        },
                        {
                            "nomor": 2,
                            "judul": "Pelajari Web Development",
                            "deskripsi": "Pelajari HTML, CSS, JavaScript, dan konsep dasar bagaimana sebuah website bekerja.",
                            "status": "Pemula"
                        }
                    ]
                },
                status=status.HTTP_200_OK
            )

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)