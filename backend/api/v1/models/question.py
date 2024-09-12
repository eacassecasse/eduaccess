#!/usr/bin/python3
""" Question module for the EduAccess project """
from django.db import models

from .base_model import BaseModel
from .quiz import Quiz


class Question(BaseModel):
    """ Question class """
    content = models.TextField()
    question_type = models.CharField(max_length=50)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questions')

    class Meta:
        db_table = 'questions'
        ordering = ['created_at']
