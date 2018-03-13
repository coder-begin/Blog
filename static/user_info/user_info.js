$(function () {
    $('.datetime').datetimepicker({
        format: 'yyyy-mm-dd',
        maxView: 3,
        minView: 2,
        autoclose:true
    })
    $('#btn-change').click(function () {
        var userInfo = {}
        $('.info-change-form').find('[name]').each(function (index, item) {
            userInfo[$(item).attr('name')] = $(item).val();
        });

         $.ajax({
            url:"/change-info/",
            type:"POST",
            data:{
                csrfmiddlewaretoken:getCSRF(),
                userInfo:JSON.stringify(userInfo)
            },
            success:function (data) {
                console.log(data)
               if(data['code']==200){
                    console.log(200)
                   window.location.href='/home';
               }else{
                   $('.error-info').text(data.msg)
               }
            },
            error:function (err) {
               console.log(err)
            }
        })


    });
});