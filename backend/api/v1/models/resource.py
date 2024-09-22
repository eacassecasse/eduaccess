#!/usr/bin/python3
""" Resource Module for EduAccess project """
from django.core.exceptions import ValidationError
from django.db import models

from .course import Course
from .base_model import BaseModel
from .user import User


class Resource(BaseModel):
    """ Resource class """
    title = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField()
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='resources')
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = 'resources'
        unique_together = ('id', 'course')
        ordering = ['created_at']

    def clean(self):
        """ Ensure the creator is associated with the course """
        if self.course.educator.id != self.creator.id:
            raise ValidationError('Creator must be the educator of the course')

    def save(self, *args, **kwargs):
        """ Enforce creator-course relationship validation """
        self.clean()
        super(Resource, self).save(*args, **kwargs)
