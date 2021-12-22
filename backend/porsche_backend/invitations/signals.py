from django.db.models.signals import post_save
from porsche_backend.invitations.models import Invite
from django.dispatch import receiver
import porsche_backend.invitations.tasks as tasks
 
 
@receiver(post_save, sender=Invite)
def send_invitation(sender, instance, created, **kwargs):
    if created:
        tasks.send_invitation.delay(instance)
