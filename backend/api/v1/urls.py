from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from .views.user import UserList
from .views.course import CourseList
from .views.module import ModuleList
from .views.lesson import LessonList
from .views.quiz import QuizList
from .views.question import QuestionList
from .views.option import OptionList
from .views.resource import ResourceList
from .views.score import ScoreList

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='authentication'),
    path('token/refresh/', TokenRefreshView.as_view(), name=''),
    path('users/', UserList.as_view(), name='user-list'),
    path('courses/', CourseList.as_view(), name='course-list'),
    path('modules/', ModuleList.as_view(), name='module-list'),
    path('modules/<int:id>/lessons/', LessonList.as_view(), name='lesson-list'),
    path('modules/<int:id>/quizzes/', QuizList.as_view(), name='quiz-list'),
    path('quizzes/<int:id>/questions/', QuestionList.as_view(), name='question-list'),
    path('questions/<int:id>/options/', OptionList.as_view(), name='option-list'),
    path('resources/', ResourceList.as_view(), name='resource-list'),
    path('courses/<int:id>/enrollments/', ScoreList.as_view(), name='score-list'),
]
