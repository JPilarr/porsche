from django.contrib import admin
from porsche_backend.invitations.models import Invite
from django import forms


@admin.register(Invite)
class SectionAdmin(admin.ModelAdmin):
    list_display = ["from_user", "to_user", "email", "expired"]
    search_fields = ['email']