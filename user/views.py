from django.shortcuts import render
from user import utils
from django.http import JsonResponse
from user.models import User
# Create your views here.

# 登录
def login(request):
    data = utils.checkNP(request)
    if(data['code']==200):
        request.session['sid'] = request.POST['username']
    return JsonResponse(data)

# 注销
def logout(request):
    data = utils.isLogin(request)
    if(data):
        del request.session['sid']
        return JsonResponse({'code': 200}, safe=False)
    else:
        return JsonResponse({'code': 500}, safe=False)

# 注册
def register(request):
    if(request.method=='GET'):
        return render(request, 'register/Register.html')
    if(request.method=='POST'):
        try:
            name = request.POST['username']
            password = request.POST['password']
            email = request.POST['email']
            User.manager.create(name, password, email)
        except Exception:
            return JsonResponse({'code': 500, 'msg': '注册失败!'}, safe=False)
        else:
            request.session['sid'] = name
            return JsonResponse({'code': 200}, safe=False)





