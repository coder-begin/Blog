from django.shortcuts import HttpResponse
from django.utils.deprecation import MiddlewareMixin
class Token(MiddlewareMixin):
    def process_request(self, request):
        # return HttpResponse(request.session)
        pass
