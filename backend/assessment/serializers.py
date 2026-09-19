from rest_framework import serializers


class AssessmentSerializer(serializers.Serializer):
    gender = serializers.CharField()
    part_time_job = serializers.BooleanField()
    absence_days = serializers.IntegerField()

    matematika = serializers.IntegerField()
    sejarah = serializers.IntegerField()
    fisika = serializers.IntegerField()
    kimia = serializers.IntegerField()
    biologi = serializers.IntegerField()
    bahasa_inggris = serializers.IntegerField()
    geografi = serializers.IntegerField()
    ekstrakurikuler = serializers.CharField()
    jam_belajar = serializers.IntegerField()
    aspirasi = serializers.CharField()