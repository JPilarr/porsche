import uuid

from django.db import models
from porsche_backend.utils.models import BaseModel
from porsche_backend.users.models import User


class Invite(BaseModel):
    from_user = models.ForeignKey(User,
                                  on_delete=models.CASCADE,
                                  related_name='invite_from_user')
    to_user = models.ForeignKey(User,
                                null=True,
                                blank=True,
                                on_delete=models.CASCADE,
                                related_name='invite_to_users')
    reminder_date = models.DateField()
    expired = models.BooleanField(default=False)
    email = models.EmailField()
    invite_code = models.UUIDField(default=uuid.uuid4, editable=False)
