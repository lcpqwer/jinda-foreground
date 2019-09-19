function fn () {
    // 1440 128.194px
    // 1620 113.951px
    // var whdef = 100/1440;// 表示1440的设计图,使用100PX的默认值,设计图多少就写多少
    var whdef = 100/1650;// 表示1440的设计图,使用100PX的默认值,设计图多少就写多少
    var wH = window.innerHeight;// 当前窗口的高度
    var wW = window.innerWidth;// 当前窗口的宽度
    var rem = wW * whdef;// 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
    var html=document.querySelector('html');
    console.log(wH,wW,rem);
    document.body.style.display="block";
    html.style.fontSize=rem+"px";
    // $('html').css('font-size', rem + "px");
    };
    window.addEventListener("resize",fn);
    var i=1;
function ready(fn){
    i++;
    console.log(i);
    if(document.addEventListener){		//标准浏览器
        document.addEventListener('DOMContentLoaded',function(){
            //注销时间，避免重复触发
            document.removeEventListener('DOMContentLoaded',arguments.callee,false);
            fn();		//运行函数
        },false);
    }else if(document.attachEvent){		//IE浏览器
        document.attachEvent('onreadystatechange',function(){
            if(document.readyState=='complete'){
                document.detachEvent('onreadystatechange',arguments.callee);
                fn();		//函数运行
            }
        });
    }
};
ready(fn);
