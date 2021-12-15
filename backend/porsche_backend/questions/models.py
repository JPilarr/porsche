from django.db import models
from porsche_backend.users.models import User
from ckeditor.fields import RichTextField

class BaseModel(models.Model):
    created_at = models.DateTimeField(auto_now_add= True)
    updated_at = models.DateTimeField(auto_now= True)
    class Meta:
        abstract = True

class QNaire(BaseModel):
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    def __str__(self):
        return self.name

class Research(BaseModel):
    assigned_user = models.ForeignKey(User, on_delete=models.CASCADE)
    q_naire = models.ForeignKey(QNaire, on_delete=models.CASCADE,
             related_name= "q_naire")
    part_name = models.CharField(max_length=255)
    def __str__(self):
        return self.assigned_user.name

class Section(BaseModel):
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    q_naire = models.ForeignKey(QNaire, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class SubSection(BaseModel):
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    section = models.ForeignKey(Section, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class Question(BaseModel):
    title = models.TextField()
    sub_section = models.ForeignKey(SubSection, on_delete=models.CASCADE)
    extra_fields = models.TextField()
    field_type = models.CharField(max_length=255)
    index = models.IntegerField(default = 0)
    image_required = models.BooleanField(default = False)
    helper_text = RichTextField()
    def save(self, *args, **kwargs):
        if not self.index:
            self.index = SubSection.objects.filter(name = self.sub_section.name).count()+1
        
        super(Question, self).save(*args, **kwargs)
    def __str__(self):
        return f"{self.sub_section.name}-{self.index}"

class Answer(BaseModel):
    title = models.TextField()
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete= models.CASCADE)
    answer_text = models.TextField()
    def __str__(self):
        return f"{self.question.sub_section.name}-{self.question.index}"
