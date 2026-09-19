from django.db import models


class Assessment(models.Model):
    gender = models.CharField(max_length=20)
    part_time_job = models.BooleanField()
    absence_days = models.IntegerField(default=0)

    matematika = models.IntegerField()
    sejarah = models.IntegerField()
    fisika = models.IntegerField()
    kimia = models.IntegerField()
    biologi = models.IntegerField()
    bahasa_inggris = models.IntegerField()
    geografi = models.IntegerField()
    ekstrakurikuler = models.CharField(max_length=100)
    jam_belajar = models.IntegerField()
    aspirasi = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Assessment - {self.aspirasi}"