from django.db import models

# 用户管理
class UserManager(models.Manager):
    def create(self, name, password, email):
        user = User(name=name, password=password, email=email)
        user.is_active = True
        user.user_group = UsersGroup.objects.filter(id=1)[0]
        user.save()

    def getUserInfos(self, name):
        return self.filter(name=name)[0]

# 用户权限
class Permission(models.Model):
    name = models.CharField(max_length=10)
    des = models.CharField(max_length=100, null=True)
    code = models.CharField(max_length=16, unique=True)
    class Meta:
        db_table = 'Permission'

# 用户组
class UsersGroup(models.Model):
    name = models.CharField(max_length=15)
    permission = models.ManyToManyField(Permission)
    des = models.CharField(max_length=200, null=True)
    class Meta:
        db_table = 'UsersGroup'

# 用户
class User(models.Model):
    name = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=16)
    birthday = models.DateTimeField(blank=True, null=True)
    tel = models.IntegerField(blank=True, null=True)
    sex = models.IntegerField(default=0, blank=True)
    email = models.EmailField()
    describe = models.CharField(max_length=300, blank=True)
    position = models.CharField(max_length=50, blank=True)
    is_active = models.BooleanField(default=True)
    create_date = models.DateTimeField(auto_now_add=True)
    latest_date = models.DateTimeField(auto_now=True)
    user_group = models.ForeignKey(UsersGroup, on_delete=models.CASCADE)
    class Meta:
        db_table = 'User'
    manager = UserManager()



