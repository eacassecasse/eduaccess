#!/usr/bin/python3
""" Resource Serializer Module for EduAccess project """
from rest_framework import serializers
from . import UserSerializer
from ..serializers import BaseSerializer

from ..models import BaseModel
from ..models import Resource
from ..models import LessonResource


class LessonResourceSerializer(BaseSerializer):
    class Meta:
        model = LessonResource
        fields = ['lesson', 'resource']


class ResourceSerializer(BaseSerializer):
    creator = UserSerializer(read_only=True)
    lesson_resource = LessonResourceSerializer(many=True, read_only=True)

    class Meta:
        model = Resource
        fields = ['id', 'title', 'description', 'url', 'creator', 'lesson_resource']
