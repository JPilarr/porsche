from rest_framework import viewsets, filters, pagination
from rest_framework import permissions
from rest_framework.generics import ListAPIView
from .serializers import PendingQuestionsSerializer, AnswerSerializer
from porsche_backend.questions.models import QNaire, SubSection, Research, Section, Answer
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from porsche_backend.utils.models import CreateReadModelViewSet


class PendingQuestionsSerializerView(ListAPIView):
    serializer_class = PendingQuestionsSerializer
    queryset = Research.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self, *args, **kwargs):
        return get_object_or_404(Research, assigned_user = self.request.user,
                        )

    def list(self, request, *args, **kwargs):
        research = self.get_queryset()
        sections = Section.objects.filter(q_naire = research.q_naire)
        print(list(sections.values()))
        serializer = PendingQuestionsSerializer(sections, many = True,
         context = {'request':request})
        return Response({"results":serializer.data})


class AnswerViewSet(CreateReadModelViewSet):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def list(self, request):
        queryset = Answer.objects.filter(user__id=request.user.id)
        serializer = AnswerSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Answer.objects.filter(user__id=request.user.id)
        answer = get_object_or_404(queryset, pk=pk)
        serializer = AnswerSerializer(answer)
        return Response(serializer.data)
