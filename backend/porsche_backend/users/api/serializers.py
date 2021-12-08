from django.contrib.auth import get_user_model
from rest_framework import serializers

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        exclude = ("is_superuser", "is_active", "is_staff", "user_permissions",
        "groups", "last_login", "date_joined", "password")

        extra_kwargs = {
            "url": {"view_name": "api:user-detail", "lookup_field": "username"}
        }

class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        exclude = ("is_superuser", "is_active", "is_staff", "user_permissions",
        "groups", "last_login", "date_joined")
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user