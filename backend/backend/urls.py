from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from notes import views

router = routers.DefaultRouter()
router.register(r'notes', views.NoteViewSet, 'note')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
