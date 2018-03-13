$(function () {

    //初始化
    $('#home-carousel').carousel();
    $('.login-form').formValidation({
        err: {
            container: 'tooltip'
        },
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                message: '用户名错误!!',
                validators: {
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    stringLength: {
                        min: 2,
                        max: 30,
                        message: '用户名长度在2-30位'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 32,
                        message: '密码长度在6-32位'
                    }
                }
            }

        }
    });
    $('.home-login').find('input').val("");


    //注销
    $('.logout').on('click',function () {
        $.get('/logout',function (data) {
           if(data.code==200){
               window.location.reload()
           }else{

           }
        })
    });

    $('.login').on('click',function () {
        var username = $('#username').val();
        var password = $('#password').val();

        $.ajax({
            url:"login",
            type:"POST",
            data:{
                csrfmiddlewaretoken:getCSRF(),
                username:username,
                password:password
            },
            success:function (data) {
                if(data.code == 200){
                    window.location.reload()
                }else{
                    $('.error-info').text(data['msg'])
                }
            },
            error:function (err) {
                console.log(err)
            }
        })

    })


});