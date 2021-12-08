from django.urls import path

from porsche_backend.users.api.views import (UserCreate)
from rest_framework.authtoken.views import obtain_auth_token

app_name = "users"
urlpatterns = [
    # path("<str:username>/", view=user_detail_view, name="detail"),
    path("signup/", UserCreate.as_view(), name="sign-up"),
    path("login/", obtain_auth_token, name="login"),

]
