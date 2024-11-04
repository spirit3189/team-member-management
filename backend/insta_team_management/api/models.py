from django.db import models

class TeamMember(models.Model):
    ROLE_CHOICES = [
        ('regular', 'Regular - Can’t delete members'),
        ('admin', 'Admin - Can delete members'),
    ]

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(max_length=20)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
