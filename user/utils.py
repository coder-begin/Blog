from user.models import User

# 登陆验证判定
def isLogin(request):
    try:
        sid = request.session['sid']
    except KeyError:
        return False
    else:
        return sid

# 检测用户名密码是否正确
def checkNP(request):
    username = request.POST['username']
    password = request.POST['password']
    userInfo = User.manager.filter(name=username)
    if(len(userInfo)==0):
        return {'code': 400, 'msg': '没有此用户'}
    else:
        if(userInfo[0].password==password):
            return {'code': 200}
        else:
            return {'code': 400, 'msg': '密码错误!'}

