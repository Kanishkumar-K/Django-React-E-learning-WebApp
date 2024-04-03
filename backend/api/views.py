# views.py

from rest_framework import generics, status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from .models import User, AttendanceRecord, Leave, Post, Profile
from .serializers import MyTOPS, RegistrationSerializer, ChangePasswordSerializer,UserSerializer, AttendanceRecordSerializer, LeaveSerializer, PostSerializer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny
from django.shortcuts import render
from django.db import connection
from django.http import JsonResponse

def index(request):
    return render(request, 'index.html')

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTOPS

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny)
    serializer_class = RegistrationSerializer
    permission_classes = (permissions.AllowAny,)  # Ensure AllowAny permission for registration

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protectedView(request):
    output = f"{request.user}, Authentication Successful!"
    return Response({'response':output}, status=status.HTTP_200_OK)

@api_view(['GET'])
@permission_classes([IsAuthenticated])

@api_view(['GET'])
@permission_classes([permissions.IsAuthenticated])
def dashboard(request):
    user = request.user
    dashboard_data = {
        "username": user.username,
    }
    return Response(dashboard_data)


@api_view(['GET'])
def view_all_routes(request):
    data = [
        'api/token/refresh/',
        'api/register/',
        'api/token/',
        'api/dashboard/',
        'api/change-password',
        'api/edit-profile',
        'api/attendance-records/',
        'api/user/<int:pk>/attendance/'
        'api/admin',
        'posts/',
        'api/upload-profile-icon/',
        'api/apply-leave',
        'api/leave',
        'api/leave/<int:pk>/action/'
        
    ]
    return Response(data)
class PostView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        user_id = request.query_params.get('user_id')
        if user_id is None:
            return Response({'error': 'user_id parameter is required'}, status=status.HTTP_400_BAD_REQUEST)
        
        posts = Post.objects.filter(user_id=user_id)
        serializer = PostSerializer(posts, many=True)
        # Iterate through each post and update the image field to contain the URL of the image
        for post in serializer.data:
            post['image'] = request.build_absolute_uri(post['image'])
        return Response(serializer.data)


    def post(self, request, *args, **kwargs):
        posts_serializer = PostSerializer(data=request.data)
        if posts_serializer.is_valid():
            posts_serializer.save()
            # After saving, update the image field to contain the URL of the image
            posts_serializer.data['image'] = request.build_absolute_uri(posts_serializer.data['image'])
            return Response(posts_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', posts_serializer.errors)
            return Response(posts_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ChangePasswordView(generics.UpdateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = ChangePasswordSerializer

    def get_object(self):
        return self.request.user

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            old_password = serializer.validated_data.get('old_password')
            new_password = serializer.validated_data.get('new_password')

            if not user.check_password(old_password):
                return Response({'detail': 'Invalid old password.'}, status=status.HTTP_400_BAD_REQUEST)

            user.set_password(new_password)
            user.save()
            new_authenticated_user = authenticate(username=user.username, password=new_password)
            if new_authenticated_user:
                return Response({'detail': 'Password changed successfully.'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class EditProfileView(generics.UpdateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        serializer = self.get_serializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserAttendanceView(generics.ListAPIView):
    serializer_class = AttendanceRecordSerializer

    def get_queryset(self):
        user_id = self.kwargs['pk']
        return AttendanceRecord.objects.filter(user_id=user_id)


class AttendanceRecordsView(generics.ListAPIView):
    queryset = AttendanceRecord.objects.all()
    serializer_class = AttendanceRecordSerializer


class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        return request.user.is_staff


class LeaveApplicationView(generics.CreateAPIView):
    serializer_class = LeaveSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class LeaveListView(generics.ListAPIView):
    serializer_class = LeaveSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return Leave.objects.all()
        else:
            return Leave.objects.filter(user=self.request.user)


class LeaveActionView(generics.UpdateAPIView):
    queryset = Leave.objects.all()
    serializer_class = LeaveSerializer
    permission_classes = [IsAuthenticated, IsAdminUser]

    def put(self, request, *args, **kwargs):
        leave = self.get_object()
        status = request.data.get('status')
        if status not in ['APPROVED', 'REJECTED']:
            return Response({'detail': 'Invalid status provided'}, status=status.HTTP_400_BAD_REQUEST)
        leave.status = status
        leave.save()
        return Response({'detail': f'Leave status updated to {status}'})

