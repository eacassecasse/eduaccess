#!/usr/bin/python3
""" Answer Module for EduAccess project """
from django.db import models

from .base_model import BaseModel
from .question import Question
from .option import Option
from .user import User


class Answer(BaseModel):
    """ The answer choosen by the user model """
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    option = models.ForeignKey(Option, on_delete=models.CASCADE)

    class Meta:
        db_table = 'answers'
        unique_together = ('student', 'question')
        ordering = ['created_at']
