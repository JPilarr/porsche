from django.apps import AppConfig


class InvitationsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'porsche_backend.invitations'
    
    def ready(self):
        import porsche_backend.invitations.signals