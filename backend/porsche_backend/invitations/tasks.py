from django.contrib.auth import get_user_model
from config import celery_app


@celery_app.task()
def send_invitation():
    """A pointless Celery task to demonstrate usage."""
    return User.objects.count()
