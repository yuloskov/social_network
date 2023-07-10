from django.urls import path

from .views import PostsViewSet

urlpatterns = [
    path("", PostsViewSet.as_view({"get": "list", "post": "create"})),
]
