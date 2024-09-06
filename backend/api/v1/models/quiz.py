#!/usr/bin/python3
""" Quiz Module for EduAccess project """
from django.db import models
from .base_model import BaseModel
from .module import Module


class Quiz(BaseModel):
    """ Quiz class """
    title = models.CharField(max_length=255)
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name='quizzes')

    class Meta:
        db_table = 'quizzes'
