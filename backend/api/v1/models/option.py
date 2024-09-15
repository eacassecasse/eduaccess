#!/usr/bin/python3
""" Option module for the EduAccess project """
from django.db import models

from .base_model import BaseModel
from .question import Question


class Option(BaseModel):
    """ Option class """
    content = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='options')

    class Meta:
        db_table = 'options'
        unique_together = ('id', 'question')
        ordering = ['created_at']
