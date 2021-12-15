from django.contrib import admin
from porsche_backend.questions.models import (Section, SubSection, QNaire, Answer,
                        Question, Research)
from django import forms
from ckeditor.widgets import CKEditorWidget

@admin.register(Section)
class SectionAdmin(admin.ModelAdmin):
    list_display = ["name", "created_at", "updated_at"]
    search_fields = ['name']

@admin.register(SubSection)
class SubSectionAdmin(admin.ModelAdmin):
    list_display = ["name", "created_at", "updated_at"]
    search_fields = ['name']

@admin.register(QNaire)
class QNaireAdmin(admin.ModelAdmin):
    list_display = ["name", "created_at", "updated_at"]
    search_fields = ['name']

@admin.register(Research)
class ResearchAdmin(admin.ModelAdmin):
    list_display = ["assigned_user","created_at", "updated_at"]
    search_fields = ['assigned_user']

@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    list_display = ["user", "created_at", "updated_at"]
    search_fields = ['user']

class QuestionAdminForm(forms.ModelForm):
    helper_text = forms.CharField(widget=CKEditorWidget())
    class Meta:
        model = Question
        fields = '__all__'

class QuestionAdmin(admin.ModelAdmin):
    form = QuestionAdminForm
    list_display = ["title", "created_at", "updated_at"]
    search_fields = ['title']
        
admin.site.register(Question, QuestionAdmin)

        