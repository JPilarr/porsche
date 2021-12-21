from datetime import timedelta
from rest_framework import serializers
from porsche_backend.invitations.models import Invite


class InviteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Invite
        fields = "__all__"

