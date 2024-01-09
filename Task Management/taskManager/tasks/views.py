from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Tasks
from .serializers import TaskSerializer


class TaskList(generics.ListCreateAPIView): 
    queryset = Tasks.objects.all()
    serializer_class = TaskSerializer


class TaskDetail(generics.RetrieveUpdateDestroyAPIView): 
    queryset = Tasks.objects.all()
    serializer_class = TaskSerializer
