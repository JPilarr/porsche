from rest_framework import permissions
from .serializers import PendingQuestionsSerializer, AnswerSerializer
from porsche_backend.invitations.models import Invite
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from porsche_backend.utils.models import CreateReadModelViewSet


class InviteViewSet(CreateReadModelViewSet):
    queryset = Invite.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        queryset = Invite.objects.filter(from_user__id=request.user.id)
        serializer = AnswerSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Invite.objects.filter(from_user__id=request.user.id)
        answer = get_object_or_404(queryset, pk=pk)
        serializer = AnswerSerializer(answer)
        return Response(serializer.data)
