$(function () {
    $('.form-register').formValidation({

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
            },
            email: {
                validators: {
                    notEmpty: {
                        message: '邮箱不能为空'
                    },
                    emailAddress: {
                        message: '邮箱格式错误'
                    }
                }
            },
            confirmpwd: {
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    identical: {
                        field: 'password',
                        message: '两次输入的密码不一样'
                    },
                    different: {
                        field: 'username',
                        message: '用户名和密码不能相同'
                    }
                }
            }

        }
    })

    $('.btn-register').click(function () {
        $.ajax({
            url: "/register",
            type: "POST",
            data: {
                csrfmiddlewaretoken: getCSRF(),
                username: $('#username').val(),
                password: $('#password').val(),
                email:$('#email').val()
            },
            success: function (data) {
                if (data.code == 200) {
                    window.location.href='/home'
                } else {
                    $('.error-info').text(data['msg'])
                }
            },
            error: function (err) {
                console.log(err)
            }
        })

    });
});