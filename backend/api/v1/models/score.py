#!/usr/bin/python3
""" Score Module for EduAccess project """
from django.db import models

from .base_model import BaseModel
from .quiz import Quiz
from .user import User


class Score(BaseModel):
    """ A quiz score model """
    student = models.ForeignKey(User, on_delete=models.CASCADE, related_name='scores')
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='scores')
    score = models.DecimalField(max_digits=5, decimal_places=2)

    class Meta:
        db_table = 'scores'
        unique_together = ('student', 'quiz')
        ordering = ['created_at']
