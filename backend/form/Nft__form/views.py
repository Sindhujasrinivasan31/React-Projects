# myapp/views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from django.core.mail import send_mail
from .serializers import Contactserializer

@api_view(['POST'])
@permission_classes([AllowAny])  # Explicitly set permissions to AllowAny for this view
def contact_form(request):
    serializer = Contactserializer(data=request.data)
    if serializer.is_valid():
        serializer.save()

        subject = 'New Contact Form Submission'
        message = f'Name: {serializer.data["name"]} {serializer.data["subject"]}\nEmail: {serializer.data["email"]}\nMessage: {serializer.data["message"]}'
        send_mail(subject, message, 'sneha09333@gmail.com', ['sneha09333@gmail.com'], fail_silently=False)

        return Response({'message': 'Form submitted successfully'})
    return Response(serializer.errors, status=400)
