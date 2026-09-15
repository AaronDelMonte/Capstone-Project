from django.db import models


class Assessment(models.Model):
    matematika = models.IntegerField()
    informatika = models.IntegerField()
    minat = models.CharField(max_length=100)
    ekstrakurikuler = models.CharField(max_length=100)
    aspirasi = models.CharField(max_length=100)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Assessment - {self.aspirasi}"