from django.urls import path, register_converter
from rest_framework_simplejwt.views import (
    TokenRefreshView
)

from .utils import UUIDConverter
from .views import UserCreate, UserLogin, UserDetail, CourseList, CourseDetail, ModuleList, ModuleDetail, LessonList, \
    LessonDetail, QuizList, QuizDetail, QuestionList, QuestionDetail, OptionList, OptionDetail, ScoreList, ScoreDetail, \
    ResourceList, ResourceDetail, CustomTokenObtainPairView, QuizSubmission

register_converter(UUIDConverter, 'uuid')

urlpatterns = [
    path('auth/', CustomTokenObtainPairView.as_view(), name='authentication'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='refresh-token'),
    path('users/', UserCreate.as_view(), name='user-registration'),
    path('users/login/', UserLogin.as_view(), name='user-authentication'),
    path('users/<uuid:id>/', UserDetail.as_view(), name='user-details'),
    path('courses/', CourseList.as_view(), name='course-list'),
    path('courses/<uuid:id>/', CourseDetail.as_view(), name='course-details'),
    path('courses/<uuid:id>/modules/', ModuleList.as_view(), name='module-list'),
    path('courses/<uuid:id>/modules/<uuid:module_id>/', ModuleDetail.as_view(), name='module-details'),
    path('modules/<uuid:id>/lessons/', LessonList.as_view(), name='lesson-list'),
    path('modules/<uuid:id>/lessons/<uuid:lesson_id>/', LessonDetail.as_view(), name='lesson-details'),
    path('modules/<uuid:id>/quizzes/', QuizList.as_view(), name='quiz-list'),
    path('modules/<uuid:id>/quizzes/<uuid:quiz_id>/', QuizDetail.as_view(), name='quiz-details'),
    path('quizzes/<uuid:id>/questions/', QuestionList.as_view(), name='question-list'),
    path('quizzes/<uuid:id>/submit/', QuizSubmission.as_view(), name='quiz-submission'),
    path('quizzes/<uuid:id>/questions/<uuid:question_id>/', QuestionDetail.as_view(), name='question-details'),
    path('questions/<uuid:id>/options/', OptionList.as_view(), name='option-list'),
    path('questions/<uuid:id>/options/<uuid:option_id>', OptionDetail.as_view(), name='option-details'),
    path('resources/', ResourceList.as_view(), name='resource-list'),
    path('resources/<uuid:id>/', ResourceDetail.as_view(), name='resource-details')
]
