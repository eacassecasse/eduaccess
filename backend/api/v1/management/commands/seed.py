#!/usr/bin/env python3
from django.core.management.base import BaseCommand
from ...models import Course, Lesson, Module, Option, Question, Quiz, Resource, Score
import random
from faker import Faker

fake = Faker()


class Command(BaseCommand):
    help = 'Seed the database with sample data'

    def handle(self, *args, **kwargs):
        user_ids = [
            'f870749155e04f838180fa520e693dd2',
            '0bf27d07316e4726972b921c91fb013e',
            '7574fd01960b4f078bb11cbc48c06951'
        ]

        quiz_ids = [
            '14907790951342af9f9202d1084a2d7e',
            '34ee9fed194a404fba475c62b1397a82',
            '1c226053259140f98a56dd9eeb04e9a6',
            '60c7871d41374366aed1c55395c24e45',
            '264cbd45520e43628bc115bdb0317dce',
        ]

        # # Create Courses
        for _ in range(5):
            course = Course.objects.create(
                title=fake.sentence(),
                description=fake.text(),
                prev_img=fake.image_url(),
                educator_id=random.choice(user_ids)
            )
            self.stdout.write(f'Created Course: {course.title}')

            #     # Create Modules
            for _ in range(random.randint(1, 3)):
                module = Module.objects.create(
                    title=fake.sentence(),
                    description=fake.text(),
                    course=course
                )
                self.stdout.write(f'  Created Module: {module.title}')

                #         # Create Lessons
                for _ in range(random.randint(1, 5)):
                    Lesson.objects.create(
                        title=fake.sentence(),
                        content=fake.text(),
                        module=module
                    )

                #         # Create Quizzes
                quiz = Quiz.objects.create(
                    title=fake.sentence(),
                    module=module
                )
                self.stdout.write(f'  Created Quiz: {quiz.title}')

                #         # Create Questions
                for _ in range(random.randint(2, 4)):
                    question = Question.objects.create(
                        content=fake.sentence(),
                        question_type=random.choice(['multiple_choice', 'true_false']),
                        quiz=quiz
                    )
                    self.stdout.write(f'    Created Question: {question.content}')

                    # Create Options
                    for _ in range(random.randint(2, 4)):
                        Option.objects.create(
                            content=fake.word(),
                            is_correct=random.choice([True, False]),
                            question=question
                        )

        # # Create Resources
        for _ in range(5):
            Resource.objects.create(
                title=fake.sentence(),
                description=fake.text(),
                url=fake.url(),
                creator_id=random.choice(user_ids)
            )
            self.stdout.write('Created Resource')

        # Create Scores
        for _ in range(10):
            Score.objects.create(
                student_id=random.choice(user_ids),
                quiz_id=random.choice(quiz_ids),  # Assuming quizzes with IDs 1-5 exist
                score=random.uniform(0, 100)
            )
            self.stdout.write('Created Score')

        self.stdout.write(self.style.SUCCESS('Successfully seeded the database'))
