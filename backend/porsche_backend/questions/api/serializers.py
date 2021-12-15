from datetime import timedelta
from rest_framework import serializers
from porsche_backend.questions.models import (Section, SubSection, QNaire, Answer,
                        Question)

class QNaireSerializer(serializers.ModelSerializer):
    class Meta:
        model = QNaire
        fields = "__all__"


class SingleSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = "__all__"



class SingleSubSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubSection
        fields = "__all__"



class SingleQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = "__all__"


class MultipleQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = "__all__"  
    

class MultipleSubSectionSerializer(serializers.ModelSerializer):
    questions = serializers.SerializerMethodField(source = "get_questions")
    status = serializers.SerializerMethodField(source = "get_status")
    class Meta:
        model = SubSection
        fields = "__all__"  
    def get_questions(self, obj):
        questions = Question.objects.filter(sub_section = obj)
        serializer = MultipleQuestionSerializer(questions, many = True)
        return serializer.data
    
    def get_status(self,obj):
        assigned_question = Question.objects.filter(sub_section = obj).first()
        user_answers = Answer.objects.filter(question = assigned_question, 
                user = self.context['request'].user)
        if user_answers.count():
            return True
        else:
            return False

class MultipleSectionSerializer(serializers.ModelSerializer):
    sub_section = MultipleSubSectionSerializer(many = True)
    class Meta:
        model = Section
        fields = "__all__"

class PendingQuestionsSerializer(serializers.ModelSerializer):
    sub_sections = serializers.SerializerMethodField(source = "get_sub_sections",
        )
    class Meta:
        model = Section
        fields = "__all__"
    def get_sub_sections(self, obj):
        sub_sections = SubSection.objects.filter(section = obj)
        serializer = MultipleSubSectionSerializer(sub_sections, many = True,
                context = {'request':self.context['request']})
        return serializer.data