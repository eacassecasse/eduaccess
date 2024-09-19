#!/usr/bin/env python3
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from ...models import Course, Lesson, Module, Option, Question, Quiz, Resource, Score
import random
from faker import Faker

fake = Faker()
User = get_user_model()


class Command(BaseCommand):
    help = 'Seed the database with sample data'

    def handle(self, *args, **kwargs):
        # Fetch user IDs with 'educator' role
        educators = User.objects.filter(role='educator')
        educator_ids = list(educators.values_list('id', flat=True))

        courses = Course.objects.all()

        # Create Courses
        for course in courses:
            if not educator_ids:
                self.stdout.write(self.style.WARNING('No educators available to assign courses.'))
                break

            # educator_id = random.choice(educator_ids)
            #
            # course = Course.objects.create(
            #     title=fake.sentence(),
            #     description=fake.text(),
            #     prev_img=fake.image_url(),
            #     educator_id=educator_id
            # )
            # self.stdout.write(f'Created Course: {course.title}')

            # Create Modules
            for _ in range(random.randint(1, 3)):
                module = Module.objects.create(
                    title=fake.sentence(),
                    description=fake.text(),
                    course=course
                )
                self.stdout.write(f'  Created Module: {module.title}')

                # Create Lessons
                for _ in range(random.randint(1, 5)):
                    Lesson.objects.create(
                        title=fake.sentence(),
                        content=fake.text(),
                        module=module
                    )

                # Create Quizzes if quiz_ids are available
                for _ in range(random.randint(1, 4)):
                    quiz = Quiz.objects.create(
                        title=fake.sentence(),
                        module=module
                    )
                    self.stdout.write(f'  Created Quiz: {quiz.title}')

                    # Create Questions
                    for _ in range(random.randint(2, 10)):
                        question = Question.objects.create(
                            content=fake.sentence(),
                            question_type=random.choice(['multiple_choice', 'true_false']),
                            quiz=quiz
                        )
                        self.stdout.write(f'    Created Question: {question.content}')

                        # Create Options
                        for _ in range(random.randint(2, 5)):
                            Option.objects.create(
                                content=fake.word(),
                                is_correct=random.choice([True, False]),
                                question=question
                            )

        # Create Resources
        # for _ in range(5):
        #     creator_id = random.choice(educator_ids) if educator_ids else None
        #     if creator_id:
        #         Resource.objects.create(
        #             title=fake.sentence(),
        #             description=fake.text(),
        #             url=fake.url(),
        #             creator_id=creator_id
        #         )
        #         self.stdout.write('Created Resource')

        students = User.objects.filter(role='student')
        student_ids = list(students.values_list('id', flat=True))

        # Fetch existing quiz IDs
        quizzes = Quiz.objects.values_list('id', flat=True)
        quiz_ids = list(quizzes)

        # Create Scores
        for _ in range(10):
            student_id = random.choice(student_ids) if student_ids else None
            if student_id and quiz_ids:
                Score.objects.create(
                    student_id=student_id,
                    quiz_id=random.choice(quiz_ids),
                    score=random.uniform(0, 100)
                )
                self.stdout.write('Created Score')

        self.stdout.write(self.style.SUCCESS('Successfully seeded the database'))
