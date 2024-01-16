from rest_framework import serializers
from .models import Student

class StudentSerialier(serializers.Serializer) :
    class Meta : 
        model = Student
        fields = ['id' , 'name' , 'email' , 'age']