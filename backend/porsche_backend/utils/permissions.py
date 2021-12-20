from rest_framework.permissions import BasePermission, SAFE_METHODS, IsAdminUser

class IsAdminOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        if request.user.is_staff:
            return True
        else:
            return request.method in SAFE_METHODS
 