#!/usr/bin/python3
""" Lesson Module for EduAccess project """
from django.db import models
from .base_model import BaseModel
from .module import Module


class Lesson(BaseModel):
    """ Lesson class """
    title = models.CharField(max_length=255)
    content = models.TextField()
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name='lessons')

    class Meta:
        db_table = 'lessons'
        ordering = ['created_at']
