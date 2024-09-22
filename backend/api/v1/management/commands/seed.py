from django.core.management.base import BaseCommand
from django.utils import timezone
from ...models import Course, Enrollment, Module, Lesson, Quiz, Question, Option, Resource, Score, Answer


class Command(BaseCommand):
    help = 'Seed the database with sample data'

    def handle(self, *args, **kwargs):
        # Existing User IDs
        educator_id = '7addfbca-96f3-4049-b243-ec75b94a1f34'
        student_ids = [
            '09fe2b9d-d73a-496e-917e-0a23b2841f71',  # Student 1
            '28ef3c8f-ece0-443a-8813-150c7a13592d',  # Student 2
        ]

        # Create 3 courses
        courses = []
        for i in range(3):
            course = Course.objects.create(
                title=f"Course {i + 1} - Django Basics",
                description=f"Course {i + 1} on the basics of Django framework.",
                educator_id=educator_id,
            )
            courses.append(course)

        # Enroll 2 students in each course
        for course in courses:
            for student in student_ids:
                Enrollment.objects.create(
                    student_id=student,
                    course=course,
                )

        # Create 3 modules per course
        modules = []
        for course in courses:
            for i in range(3):
                module = Module.objects.create(
                    title=f"Module {i + 1} - {course.title}",
                    description=f"Module {i + 1} for {course.title}.",
                    course=course,
                )
                modules.append(module)

        # Create 3 lessons per module
        for module in modules:
            for i in range(3):
                Lesson.objects.create(
                    title=f"Lesson {i + 1} - {module.title}",
                    content=f"This is the content of lesson {i + 1} for {module.title}.",
                    module=module,
                )

        # Create 3 quizzes per module
        quizzes = []
        for module in modules:
            for i in range(3):
                quiz = Quiz.objects.create(
                    title=f"Quiz {i + 1} - {module.title}",
                    module=module,
                )
                quizzes.append(quiz)

        # Create 3 questions per quiz
        for quiz in quizzes:
            for i in range(3):
                question = Question.objects.create(
                    content=f"Question {i + 1} for {quiz.title}.",
                    question_type="multiple_choice",
                    quiz=quiz,
                )

                # Create 3 options per question
                for j in range(3):
                    Option.objects.create(
                        content=f"Option {j + 1} for {question.content}",
                        is_correct=(j == 0),  # Mark the first option as correct
                        question=question,
                    )

        # Add 3 resources per course
        for course in courses:
            for i in range(3):
                Resource.objects.create(
                    title=f"Resource {i + 1} for {course.title}",
                    description=f"Resource {i + 1} description for {course.title}.",
                    url=f"https://example.com/resource_{i + 1}_{course.id}",
                    course=course,
                    creator_id=educator_id,
                )

        # Record 3 scores per student per quiz
        for quiz in quizzes:
            for student in student_ids:
                Score.objects.create(
                    student_id=student,
                    quiz=quiz,
                    score=75.00 + (student_ids.index(student) * 10),  # Different scores for each student
                )

        # Record 3 answers per student per question
        questions = Question.objects.all()
        for question in questions:
            for student in student_ids:
                # Student selects the first option (correct answer)
                Answer.objects.create(
                    student_id=student,
                    question=question,
                    option=question.options.first(),  # Correct answer
                )

        self.stdout.write(self.style.SUCCESS("Database seeding completed with 3 rows per table!"))
