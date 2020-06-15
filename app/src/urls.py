from django.urls import path

from . import views

# Page urls

urlpatterns = [
    path('', views.index, name='main'),
]