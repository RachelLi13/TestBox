from django.db import models

#Creating the model for the User
class User(models.Model):
    name = models.CharField(max_length = 60)
    email = models.EmailField(max_length = 254)
    version_control = models.CharField(max_length = 60)
    team_size = models.IntegerField()


