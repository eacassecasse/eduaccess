#!/usr/bin/python3
""" Enrollment Module for EduAccess project """
from django.db import models

from .base_model import BaseModel
from .course import Course
from .user import User


class Enrollment(BaseModel):
    """ An user Enrollment """
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    enrolled_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'enrollments'
