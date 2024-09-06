from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView
)

from .views import UserCreate, UserLogin, UserDetail
from .views import CourseList
from .views import ModuleList
from .views import LessonList
from .views import QuizList
from .views import QuestionList
from .views import OptionList
from .views import ResourceList
from .views import ScoreList

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='authentication'),
    path('token/refresh/', TokenRefreshView.as_view(), name=''),
    path('users/', UserCreate.as_view(), name='user-registration'),
    path('users/auth/', UserLogin.as_view(), name='user-authentication'),
    path('users/<pk>/', UserDetail.as_view(), name='user-details'),
    path('courses/', CourseList.as_view(), name='course-list'),
    path('modules/', ModuleList.as_view(), name='module-list'),
    path('modules/<int:id>/lessons/', LessonList.as_view(), name='lesson-list'),
    path('modules/<int:id>/quizzes/', QuizList.as_view(), name='quiz-list'),
    path('quizzes/<int:id>/questions/', QuestionList.as_view(), name='question-list'),
    path('questions/<int:id>/options/', OptionList.as_view(), name='option-list'),
    path('resources/', ResourceList.as_view(), name='resource-list'),
    path('courses/<int:id>/enrollments/', ScoreList.as_view(), name='score-list'),
]
