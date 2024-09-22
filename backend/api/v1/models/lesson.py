#!/usr/bin/python3
""" Lesson Module for EduAccess project """
from django.db import models

from .resource import Resource
from .base_model import BaseModel
from .module import Module


class Lesson(BaseModel):
    """ Lesson class """
    title = models.CharField(max_length=255)
    content = models.TextField()
    module = models.ForeignKey(Module, on_delete=models.CASCADE, related_name='lessons')

    class Meta:
        db_table = 'lessons'
        unique_together = ('id', 'module')
        ordering = ['created_at']


class LessonResource(BaseModel):
    """ LessonResource Relationship """
    lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, related_name='resource_links')
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE, related_name='lesson_resources')

    class Meta:
        db_table = 'lesson_resources'
        unique_together = ('lesson', 'resource')
