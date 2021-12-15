from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter
from django.urls import include, path

from porsche_backend.users.api.views import UserViewSet
from porsche_backend.questions.api.views import PendingQuestionsSerializerView

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)

app_name = "api"
urlpatterns = router.urls

urlpatterns += [path("pending_questions", PendingQuestionsSerializerView.as_view()),
            ]
