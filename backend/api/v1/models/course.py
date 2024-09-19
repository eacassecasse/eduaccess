#!/usr/bin/python3
""" Course Module for EduAccess project """
from django.db import models
from .base_model import BaseModel
from .user import User


class Course(BaseModel):
    """ Course class """
    title = models.CharField(max_length=255)
    description = models.TextField()
    prev_img = models.URLField(default="https://picsum.photos/id/2/5000/3333")
    educator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='courses')
    students = models.ManyToManyField(User, related_name='enrolled_courses', through='Enrollment')

    class Meta:
        db_table = 'courses'
        ordering = ['created_at']
