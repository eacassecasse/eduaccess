#!/usr/bin/python3
""" Enrollment Module for EduAccess project """
from django.db import models

from .base_model import BaseModel
from .course import Course
from .user import User


class Enrollment(BaseModel):
    """ Enrollment class linking students to courses """
    student = models.ForeignKey(User, related_name='enrollments', on_delete=models.CASCADE)
    course = models.ForeignKey(Course, related_name='enrollments', on_delete=models.CASCADE)
    enrolled_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'enrollments'
        unique_together = ('student', 'course')
        ordering = ['enrolled_at']
