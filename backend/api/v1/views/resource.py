#!/usr/bin/python3
""" Resource View Module for EduAccess project """
from django.core.exceptions import PermissionDenied
from rest_framework import generics, serializers
from rest_framework.permissions import IsAuthenticated

from ..models import BaseModel, Lesson, LessonResource, Course
from ..models import Resource
from ..serializers import ResourceSerializer


class ResourceList(generics.ListCreateAPIView):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        course_id = self.request.data.get('course_id', None)

        if not course_id:
            raise serializers.ValidationError({"course": "The course ID is required"})

        try:
            course = Course.objects.get(id=course_id)
        except Course.DoesNotExist:
            raise serializers.ValidationError({"course": "Course does not exist."})

        if course.educator != self.request.user:
            raise PermissionDenied("You are not the educator of this course.")

        resource = serializer.save(creator=self.request.user, course=course)
        
        lesson_id = self.request.data.get('lesson_id', None)
        if lesson_id:
            try:
                lesson = Lesson.objects.get(id=lesson_id)

                if lesson.module.course != course:
                    raise serializers.ValidationError({"lesson": "The lesson does not belong to the specified course."})

                LessonResource.objects.create(lesson=lesson, resource=resource)
            except Lesson.DoesNotExist:
                raise serializers.ValidationError({"lesson": 'Lesson does not exist'})


class ResourceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer
    permission_classes = [IsAuthenticated]

    def perform_update(self, serializer):
        resource = self.get_object()

        if resource.course.educator != self.request.user:
            raise PermissionDenied("You are not the educator of the specified course")

        resource = serializer.save()

        lesson_id = self.request.data.get('lesson_id', None)

        if lesson_id:
            try:
                lesson = Lesson.objects.get(id=lesson_id)

                if lesson.module.course != resource.course:
                    raise serializers.ValidationError({"lesson": "The lesson does not belong to the specified course"})
                LessonResource.objects.update_or_create(resource=resource, defaults={'lesson': lesson})
            except Lesson.DoesNotExist:
                raise serializers.ValidationError({"lesson": 'Lesson does not exist'})
