// export default function test_log() {
//   console.log(123)
// }

$(function () {
  $(window).resize(function () {
    var cliWidth = document.body.clientWidth;
    if (cliWidth < 736) {
      $('.banner-img').css('margin-top', '0px')
    }
  })
  // 浏览器高度
  window.onscroll = function () {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop === 0) {
      $('.copper').show()
      $('.level').show()
      $('.cooper-img').css('margin-top', '1.46rem')
      $('.organization-img').css('margin-top', '1.46rem')
      $('.inform-img').css('margin-top', '1.46rem')
      $('.banner-img').css('margin-top', '1.46rem')
      $('.map-img').css('margin-top', '1.46rem')
      $('.demos-img').css('margin-top', '1.46rem')
      $('.survey-img').css('margin-top', '1.46rem')
      $('.pment-img').css('margin-top', '1.46rem')
      $('.honor-img').css('margin-top', '1.46rem')
      $('.prices-img').css('margin-top', '1.46rem')
      $('.product-img').css('margin-top', '1.46rem')
      $('.case-img').css('margin-top', '1.46rem')

      // rgba(30, 45, 59, 1)

      // #menu_pc ul li
      // rgba(237, 205, 31, 1)  橙色
      $('.app').css({
        'margin-top': '1.46rem',
        'opacity': '1'
      })
      $('.nav_p').css({
        'opacity': '1'
      })
      $('#jd_conta').css({
        'background': '#fff',
        'box-shadow': 'none'
      })
    } else {
      $('#jd_conta').css('background', '#fff')
      $("#jd_conta").css({
        'box-shadow': 'rgba(0, 0, 0, 0.1) 0px 3px 6px 0px',
        'background': 'white'
      })
      $('.copper').hide()
      $('.level').hide()
      $('.cooper-img').css('margin-top', '.98rem')
      $('.organization-img').css('margin-top', '.98rem')
      $('.inform-img').css('margin-top', '.98rem')
      $('.map-img').css('margin-top', '.98rem')
      $('.demos-img').css('margin-top', '.98rem')
      $('.banner-img').css('margin-top', '.98rem')
      $('.survey-img').css('margin-top', '.98rem')
      $('.pment-img').css('margin-top', '.98rem')
      $('.honor-img').css('margin-top', '.98rem')
      $('.prices-img').css('margin-top', '.98rem')
      $('.product-img').css('margin-top', '.98rem')
      $('.case-img').css('margin-top', '.98rem')
      $('.app').css({
        'margin-top': '.98rem'
      })
      // $('.nav_p').css({
      //   'opacity': '.7'
      // })
    }
    // if(scrollTop>50){
    //     $('.copper').show()
    //     $('.level').show()
    //     $('.banner-img').css('margin-top','150px')
    // } else {
    //     $('.copper').hide()
    //     $('.level').hide()
    //     $('.banner-img').css('margin-top','80px')
    // }
  }
  //  滑动菜单
  // $('#menu').menu();

  $(document).ready(function () {
    // 循环执行，每隔1秒钟执行一次 1000
    var t1 = window.setInterval(refreshCount, 100)

    function refreshCount() {
      $('#menu').menu()
    }
  })
  // $('#close1').click(function () {
  //   $('#pop_up>div').hide()
  //   $(".nav_fr>a").css('color', '#fff')
  // })
  // $('#close2').click(function () {
  //   $('#pop_up>div').hide()
  //   $(".nav_fr>a").css('color', '#fff')
  // })
  // $('#close3').click(function () {
  //   $('#pop_up>div').hide()
  //   $(".nav_fr>a").css('color', '#fff')
  // })
  // $('#close4').click(function () {
  //   $('#pop_up>div').hide()
  //   $(".nav_fr>a").css('color', '#fff')
  // })
  // $('#close5').click(function () {
  //   $('#pop_up>div').hide()
  //   $(".nav_fr>a").css('color', '#fff')
  // })
  // 大图下面的导航锚点链接
  $('#turnToContent1,#turnToContent1_1').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });
  $('#turnToContent2,#turnToContent2_2').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });
  $('#turnToContent3,#turnToContent3_3').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });
  $('#turnToContent4,#turnToContent4_4').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });
})
