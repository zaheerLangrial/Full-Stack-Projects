from .models import Student
from rest_framework import serializers

class StudentSerialier(serializers.ModelSerializer) : 
    class Meta : 
        model = Student 
        fields = ['id' , 'name' , 'email']
        