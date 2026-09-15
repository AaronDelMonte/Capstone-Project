from rest_framework import serializers


class AssessmentSerializer(serializers.Serializer):
    matematika = serializers.IntegerField()
    informatika = serializers.IntegerField()
    minat = serializers.CharField()
    ekstrakurikuler = serializers.CharField()
    aspirasi = serializers.CharField()