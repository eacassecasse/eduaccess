#!/usr/bin/python3
""" Resource Module for EduAccess project """
from django.db import models
from .base_model import BaseModel
from .user import User


class Resource(BaseModel):
    """ Resource class """
    title = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField()
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        db_table = 'resources'
