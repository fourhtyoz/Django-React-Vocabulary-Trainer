from django.db import models

class Note(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.title