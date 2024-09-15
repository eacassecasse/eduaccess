#!/usr/bin/python3
""" Answer View Module for EduAccess project """
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from ..models import BaseModel
from ..models import Answer
from ..serializers import AnswerSerializer


class AnswerList(generics.ListCreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated]


class AnswerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    permission_classes = [IsAuthenticated]
