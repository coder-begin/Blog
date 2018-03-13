from django.shortcuts import render
from django.http import HttpResponseRedirect
from user.utils import isLogin
from user.models import User
from article.models import Article
# 首页展示
def index(request):
    if(isLogin(request)):
        return HttpResponseRedirect('/home')
    else:
        return render(request, 'index/index.html')

def home(request):
    data =isLogin(request)
    if(data):
        user_infos = User.manager.getUserInfos(data)
        all_articles = Article.manager.getAll()
        return render(request, 'home/Home.html', {'is_login': True, 'user_infos': user_infos, 'all_articles': all_articles})
    else:
        return render(request, 'home/Home.html', {'is_login': False})

