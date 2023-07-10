from django.contrib.auth import get_user_model  # If used custom user model
from rest_framework import permissions, serializers
from rest_framework.generics import CreateAPIView

UserModel = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    def create(self, validated_data):
        user = UserModel.objects.create_user(
            username=validated_data["username"],
            password=validated_data["password"],
        )

        return user

    class Meta:
        model = UserModel
        # Tuple of serialized model fields (see link [2])
        fields = (
            "id",
            "username",
            "password",
        )


class CreateUserView(CreateAPIView):
    model = get_user_model()
    permission_classes = [permissions.AllowAny]  # Or anon users can't register
    serializer_class = UserSerializer
