$(document).ready(function () {
    $("button").click(function () {
        $.get("http://47.100.107.101/recruitment/get?page=1&size=2",
            {
                "page":1,
                "size":5
            },
            function (code,message,data) {
               /!* console.log(data),*!/
                    alert(message)
            }
            );
    });
});
$.ajax({
    url:"47.100.107.101/recruitment/get",
    timeout:6000,
    success:function(data){}
}).done().fail(function(){
    alert('网络不行，请求错误')
})
$(function() {
    load();
    $(document).on('keydown', function (event) {
        // 键盘翻页事件
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e && e.keyCode == 38 || e && e.keyCode == 37) {//上,左
            // 上一页
            $('.page-pre').click()
        }
        if (e && e.keyCode == 40 || e && e.keyCode == 39) {//下,右
            // 下一页
            $('.page-next').click()
        }

    })
});


/*$("button").onclick(function () {
    var page=1;
    var size=1;

    $.ajax({
        url: "http://47.100.107.101/recruitment/get",
        type: "get",
        dataType: "json",
        data: {
            /!*'pid': data.link,
            'reflevel':data.level,
            'id':data.uid*!/
           /!* 'id':data.recruitmentId,
            'name':data.enterpriseName,
            'postName':data.postName,
            'postDescription':data.postDescription,
            'enterpriseIntroduction':data.enterpriseIntroduction,
            'enterpriseAddress':data.enterpriseAddress,
           'enterprisePhone':data.enterprisePhone*!/
           page : page,
           size : size
        },
        success:function(data){
            //alert(data.err);
            console.log(data);

        },
        error:function(){
            alert("错啦！")
        }


    });
})*/
/*
function leftmenu(parentid, parentpath,moduleindex){
    var leftcontent="";
    $.ajax({
        type: "POST",
        url : "<%=path%>/resource/usermenus",
        data : {parentid:parentid,parentpath:parentpath},
        success : function(data){
            // 处理head menu是否有页面要打开
            leftcontent= template('_menu2tmpl',data);
            $('.nav').html(leftcontent);
            addclick();
            //临时点击显示菜单
            if($('.index-left-warp').width()==0){
                $(".index-left-show").hide();
                $(".index-left-warp").animate({width:"200px"},250);
                timer=setTimeout(function(){
                    tabsResize();
                },500);
            };

            $(".nav").accordion({
                //accordion: true,
                speed: 500,
                closedSign: '<img src="<%=path%>/images/menu_close.png"/>',
                openedSign: '<img src="<%=path%>/images/menu_open.png"/>'
            });
        }
    });
*/
