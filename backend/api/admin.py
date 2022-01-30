from curses.ascii import US
from django.contrib import admin
from .models import User

class UserAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'version_control', 'team_size')

# Register your models here.
admin.site.register(User)