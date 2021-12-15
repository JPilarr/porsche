from rest_framework import viewsets, filters, pagination
from rest_framework import permissions
from rest_framework.generics import ListAPIView
from .serializers import PendingQuestionsSerializer
from porsche_backend.questions.models import QNaire, SubSection, Research, Section
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

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

