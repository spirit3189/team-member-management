from django.db import models
from django.core.validators import RegexValidator

class TeamMember(models.Model):
    ROLE_CHOICES = [
        ('regular', 'Regular - Can’t delete members'),
        ('admin', 'Admin - Can delete members'),
    ]
    phone_regex = RegexValidator(
        regex=r'^\d{3}-\d{3}-\d{4}$',
        message="Phone number must have the format xxx-xxx-xxxx"
    )

    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone = models.CharField(validators=[phone_regex], max_length=12, blank=False)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
