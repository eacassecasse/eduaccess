#!/usr/bin/python3
""" Course Modules for EduAccess project """
from django.db import models
from .base_model import BaseModel
from .course import Course


class Module(BaseModel):
    """ Module class """
    title = models.CharField(max_length=255)
    description = models.TextField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='modules')

    class Meta:
        db_table = 'modules'
        ordering = ['created_at']
