#!/usr/bin/python3
import uuid

from .models import BaseModel, Question, Answer, Score


def calculate_score(enrollment, quiz):
    answers = Answer.objects.filter(student=enrollment.student, quiz=quiz)
    total_answers = Question.objects.filter(quiz=quiz).count()
    correct_answer = sum(1 for answer in answers if answer.option.is_correct)

    score_value = (correct_answer / total_answers) * 100 if total_answers > 0 else 0
    Score.objects.update_or_create(
        student=enrollment.student,
        quiz=quiz,
        defaults={'score': score_value})

    return score_value


class UUIDConverter:
    regex = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}'

    def to_python(self, value):
        return uuid.UUID(value)

    def to_url(self, value):
        return str(value)
