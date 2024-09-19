#!/usr/bin/python3
""" Answer Serializer Module for EduAccess project """
from . import QuestionSerializer, OptionSerializer, UserSerializer
from ..serializers import BaseSerializer

from ..models import BaseModel
from ..models import Answer


class AnswerSerializer(BaseSerializer):
    question = QuestionSerializer(read_only=True)
    option = OptionSerializer(read_only=True)
    student = UserSerializer(read_only=True)

    class Meta:
        model = Answer
        fields = ['id', 'question', 'student', 'option']
