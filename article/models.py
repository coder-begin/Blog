from django.db import models

# Create your models here.
class ArticleManager(models.Manager):
    def getAll(self):
       return  self.all()


# 标签
class Tag(models.Model):
    name = models.CharField(max_length=20)
    class Meta:
        db_table = 'Tag'


# 类别
class Category(models.Model):
    name = models.CharField(max_length=50)
    des = models.CharField(max_length=100)
    class Meta:
        db_table = 'Category'

class Article(models.Model):
    title = models.CharField(max_length=100)
    content = models.CharField(max_length=10000)
    read_num = models.IntegerField(default=0)
    create_date = models.DateTimeField(auto_now_add=True)
    tags = models.ManyToManyField(Tag)
    img_url = models.URLField(null=True)
    categories = models.ManyToManyField(Category)
    manager = ArticleManager()
    class Meta:
        db_table = 'Article'


# 评论
class Comment(models.Model):
    create_date = models.DateTimeField(auto_now_add=True)
    content = models.CharField(max_length=400)
    own_article = models.ForeignKey(Article, on_delete=models.CASCADE, null=True)
    class Meta:
        db_table = 'Comment'
