#!/usr/bin/python3
""" User Serializer Module for EduAccess project """
from rest_framework import serializers
from ..serializers import BaseSerializer

from ..models import BaseModel
from ..models import User
from ..models import ROLES


class UserSerializer(BaseSerializer):
    password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ['id', 'name', 'email', 'role', 'password']

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        user = User(**validated_data)
        if password:
            user.set_password(password)
        user.save()
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        if password:
            instance.set_password(password)
        instance.save()
        return instance
