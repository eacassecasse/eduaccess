#!/usr/bin/python3
""" Course Serializer Module for EduAccess project """
from rest_framework import serializers
from ..serializers import BaseSerializer, UserSerializer

from ..models import BaseModel, User
from ..models import Course


class CourseSerializer(BaseSerializer):
    educator = serializers.SerializerMethodField(read_only=True)
    educator_id = serializers.PrimaryKeyRelatedField(queryset=User.objects.filter(role='educator'))
    students = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'prev_img', 'description', 'educator', 'educator_id', 'students']

    def get_educator(self, obj):
        educator = obj.educator
        if educator and educator.role == 'educator':
            return UserSerializer(educator).data
        return None

    def create(self, validated_data):
        educator = validated_data.pop('educator_id')
        course = Course.objects.create(educator=educator, **validated_data)
        return course
