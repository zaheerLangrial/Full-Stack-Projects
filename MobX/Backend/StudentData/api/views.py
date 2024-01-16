from django.shortcuts import render
from .serialiers import StudentSerialier
from .models import Student
from rest_framework import generics

# Create your views here.


class StudentList (generics.ListCreateAPIView) :
    queryset = Student.objects.all()
    serializer_class = StudentSerialier

