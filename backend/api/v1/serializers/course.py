#!/usr/bin/python3
""" Course Serializer Module for EduAccess project """
from ..serializers import BaseSerializer, UserSerializer

from ..models import BaseModel
from ..models import Course


class CourseSerializer(BaseSerializer):
    educator = UserSerializer(read_only=True)
    students = UserSerializer(many=True, read_only=True)

    class Meta:
        model = Course
        fields = ['id', 'title', 'description', 'educator', 'students', 'modules']

    def to_representation(self, instance):
        from .module import ModuleSerializer
        self.fields['modules'] = ModuleSerializer(many=True, read_only=True)
        return super().to_representation(instance)
