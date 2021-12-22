from django.contrib.auth import get_user_model
from config import celery_app


@celery_app.task()
def send_invitation(invite_data):
    """A pointless Celery task to demonstrate usage."""
    # fill email by instance data
    print("Invitation data>",invite_data)

