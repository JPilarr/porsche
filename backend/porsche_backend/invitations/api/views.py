from rest_framework import permissions
from porsche_backend.invitations.api.serializers import InviteSerializer
from porsche_backend.invitations.models import Invite
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from porsche_backend.utils.models import CreateReadModelViewSet


class InviteViewSet(CreateReadModelViewSet):
    queryset = Invite.objects.all()
    serializer_class = InviteSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        queryset = Invite.objects.filter(from_user__id=request.user.id)
        serializer = InviteSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Invite.objects.filter(from_user__id=request.user.id)
        invite = get_object_or_404(queryset, pk=pk)
        serializer = InviteSerializer(invite)
        return Response(serializer.data)
