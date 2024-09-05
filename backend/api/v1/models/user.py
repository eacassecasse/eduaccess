#!/usr/bin/python3
"""This module defines a class User"""
from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.db import models
from .base_model import BaseModel

ROLES = [('educator', 'educator'),
         ('student', 'student'),
         ('admin', 'admin'),
         ('guest', 'guest')]


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('Email address must not be empty')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)

        return self.create_user(email, password, **extra_fields)


class User(BaseModel, AbstractBaseUser):
    """This class defines a user by various attributes"""
    email = models.EmailField(max_length=100, unique=True)
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=255)
    role = models.CharField(choices=ROLES, default='guest', max_length=50)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'password']

    class Meta:
        db_table = 'users'
