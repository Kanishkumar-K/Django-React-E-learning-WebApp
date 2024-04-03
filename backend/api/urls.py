from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from . import views

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name="token-obtain"),
    path('token/refresh/', TokenRefreshView.as_view(), name="refresh-token"),
    path('register/', views.RegisterView.as_view(), name="register-user"),
    path('change-password/', views.ChangePasswordView.as_view(), name="change-password"),
    path('edit-profile/', views.EditProfileView.as_view(), name="edit-profile"),
    path('test/', views.protectedView, name="test"),
    path('dashboard/', views.dashboard, name="dashboard"),
    path('attendance-records/', views.AttendanceRecordsView.as_view(), name="attendance-records"),
    path('admin/', views.UserListView.as_view(), name="user-list"),
    path('user/<int:pk>/attendance/', views.UserAttendanceView.as_view(), name="user-attendance"),
    path('', views.view_all_routes, name="all-routes"),
    path('api/posts/', views.PostView.as_view(), name= 'posts_list'),
    path('apply-leave/', views.LeaveApplicationView.as_view(), name="apply-leave"),
    path('leave/', views.LeaveListView.as_view(), name="leave-list"),
    path('leave/<int:pk>/action/', views.LeaveActionView.as_view(), name="leave-action"),
]
