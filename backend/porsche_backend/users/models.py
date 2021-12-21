from django.contrib.auth.models import AbstractUser
from django.db.models import CharField
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from django.db import models

class User(AbstractUser):
    """Default user for Porsche Backend."""

    #: First and last name do not cover name patterns around the globe
    name = CharField(_("Name of User"), blank=True, max_length=255)
    updated_at = models.DateTimeField(auto_now= True)
    company = models.CharField(max_length=100, default = "")
    duns = models.CharField(max_length=100, default = "")
    country = models.CharField(max_length=100, default = "")
    email = models.CharField(max_length=100, default = "")
    phone_number = models.CharField(max_length=100, default = "")
    job  = models.CharField(max_length=100, default = "")
    # invited = models.ForeignKey(to = "self")
    def get_absolute_url(self):
        """Get url for user's detail view.

        Returns:
            str: URL for user detail.

        """
        return reverse("users:detail", kwargs={"username": self.username})


