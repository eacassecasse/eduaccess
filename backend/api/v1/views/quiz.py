#!/usr/bin/python3
""" Quiz View Module for EduAccess project """
from django.core.exceptions import ValidationError
from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated

from ..models import BaseModel, Enrollment, Score, Quiz
from ..serializers import QuizSerializer, AnswerSerializer
from ..utils import calculate_score


class QuizList(generics.ListCreateAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    permission_classes = [IsAuthenticated]


class QuizDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    permission_classes = [IsAuthenticated]


class QuizSubmission(generics.CreateAPIView):
    """ Submit answers for a quiz and calculate score """
    permission_classes = [IsAuthenticated]

    def post(self, request, quiz_id):
        # Get the quiz
        try:
            quiz = Quiz.objects.get(id=quiz_id)
        except Quiz.DoesNotExist:
            return Response({'detail': 'Quiz not found.'}, status=status.HTTP_404_NOT_FOUND)

        # Check if the user is enrolled in the course associated with the quiz
        if not Enrollment.objects.filter(student=request.user, course=quiz.module.course).exists():
            raise ValidationError("You must be enrolled in the course to take this quiz.")

        answers_data = request.data.get('answers', [])
        if not answers_data:
            raise ValidationError("No answers provided.")

        # Create answers
        answers = []
        for answer_data in answers_data:
            answer_serializer = AnswerSerializer(data=answer_data)
            if answer_serializer.is_valid():
                answer = answer_serializer.save(student=request.user)
                answers.append(answer)
            else:
                return Response(answer_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        # Calculate score
        score = calculate_score(answers)  #

        # Save the score to the Score model
        Score.objects.update_or_create(
            student=request.user,
            quiz_id=quiz_id,
            defaults={'score': score}
        )

        return Response({'score': score}, status=status.HTTP_201_CREATED)
