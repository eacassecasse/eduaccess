# Generated by Django 5.1 on 2024-09-14 16:52

import django.db.models.deletion
import uuid
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('v1', '0004_alter_course_options_alter_enrollment_options_and_more'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='enrollment',
            unique_together={('student', 'course')},
        ),
        migrations.AlterUniqueTogether(
            name='lesson',
            unique_together={('id', 'module')},
        ),
        migrations.AlterUniqueTogether(
            name='module',
            unique_together={('id', 'course')},
        ),
        migrations.AlterUniqueTogether(
            name='option',
            unique_together={('id', 'question')},
        ),
        migrations.AlterUniqueTogether(
            name='question',
            unique_together={('id', 'quiz')},
        ),
        migrations.AlterUniqueTogether(
            name='quiz',
            unique_together={('id', 'module')},
        ),
        migrations.AlterUniqueTogether(
            name='score',
            unique_together={('student', 'quiz')},
        ),
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('option', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='v1.option')),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='v1.question')),
                ('student', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'db_table': 'answers',
                'ordering': ['created_at'],
                'unique_together': {('student', 'question')},
            },
        ),
    ]
