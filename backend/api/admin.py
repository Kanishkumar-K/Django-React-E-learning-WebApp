# admin.py
from django.contrib import admin
from api.models import Profile, User, AttendanceRecord

class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email']

class ProfileAdmin(admin.ModelAdmin):
    list_editable = ['verified']
    list_display = ['full_name', 'user', 'verified']

class AttendanceRecordAdmin(admin.ModelAdmin):
    list_display = ['user', 'login_time']

admin.site.register(User, UserAdmin)
admin.site.register(Profile, ProfileAdmin)
admin.site.register(AttendanceRecord, AttendanceRecordAdmin)
