
(
    function ($) {

        $(function () {
            var idx2 = 1;
            $('.floor_info ul li a').click(function (event) { event.stopPropagation() });
            $('.floor_select').on('click', 'a', function () {
                idx2 = $(this).index();
                if(idx2 == 1) return;
                $('.floor_info > div').stop().hide().eq(idx2).stop().fadeIn(500);
            });
            $('#main_floor').on('click', 'a', function() {

            });

            $('.floor_info > div > ul > li').on('click', function () {
                if($(this).attr('class') == "noClick") return;
                $(this).addClass('on').siblings().removeClass('on');
            });

            $('.floor_info div ul li > div ul li a').on('click', function () {
                $('.cont_bg img').each(function (i, el) { $(el).css({ 'opacity': '1', 'display': 'none' }) });
                var idx = $(this).parent().index();

                $(this).parent().addClass('on').siblings().removeClass('on');
                $(this).parents('ul').siblings('div').find('img').stop().hide().eq(idx).stop().fadeIn(300);
                $(this).parents('.floor_info > div > ul > li').find('.cont_bg img').stop().hide().eq(idx).stop().fadeIn(300); //2018-04-26 추가
            });
            $('.build1').on('click', function (e) {
                e.stopPropagation();
                $(this).find('div > ul > li').removeClass('on');
                $(this).find('div > ul > li').eq(0).addClass('on');
                $('#main_floor').hide();
                $('#health_floor').show();
                $('.build2 div img').css({ 'display': 'none' });
                $('.build2').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su1 div img').css({ 'display': 'none' });
                $('.su1').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su2 div img').css({ 'display': 'none' });
                $('.su2').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su3 div img').css({ 'display': 'none' });
                $('.su3').find('div.cont_bg img').css({ 'display': 'none' });
                $(this).find('div img').eq(0).css({ 'z-index': '9999', 'display': 'block' });
                $(this).find('div.cont_bg img').eq(0).css({ 'opacity': '1', 'display': 'block' });
            });
            $('.build2').on('click', function (e) {
                e.stopPropagation();
                $(this).find('div > ul > li').removeClass('on');
                $(this).find('div > ul > li').eq(0).addClass('on');
                $('#main_floor').hide();
                $('#health_floor').show();
                $('.build1 div img').css({ 'display': 'none' });
                $('.build1').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su1 div img').css({ 'display': 'none' });
                $('.su1').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su2 div img').css({ 'display': 'none' });
                $('.su2').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su3 div img').css({ 'display': 'none' });
                $('.su3').find('div.cont_bg img').css({ 'display': 'none' });
                $(this).find('div img').eq(0).css({ 'z-index': '9999', 'display': 'block' });
                $(this).find('div.cont_bg img').eq(0).css({ 'opacity': '1', 'display': 'block' });
            });
            $('.su1').on('click', function (e) {
                e.stopPropagation();
                $(this).find('div > ul > li').removeClass('on');
                $(this).find('div > ul > li').eq(0).addClass('on');
                $('#main_floor').show();
                $('#health_floor').hide();
                $('.build1 div img').css({ 'display': 'none' });
                $('.build1').find('div.cont_bg img').css({ 'display': 'none' });
                $('.build2 div img').css({ 'display': 'none' });
                $('.build2').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su2 div img').css({ 'display': 'none' });
                $('.su2').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su3 div img').css({ 'display': 'none' });
                $('.su3').find('div.cont_bg img').css({ 'display': 'none' });
                $(this).find('div img').eq(0).css({ 'z-index': '9999', 'display': 'block' });
                $(this).find('div.cont_bg img').eq(0).css({ 'opacity': '1', 'display': 'block' });

            });
            $('.su2').on('click', function (e) {
                e.stopPropagation();
                $(this).find('div > ul > li').removeClass('on');
                $(this).find('div > ul > li').eq(0).addClass('on');
                $('#main_floor').show();
                $('#health_floor').hide();
                $('.build1 div img').css({ 'display': 'none' });
                $('.build1').find('div.cont_bg img').css({ 'display': 'none' });
                $('.build2 div img').css({ 'display': 'none' });
                $('.build2').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su1 div img').css({ 'display': 'none' });
                $('.su1').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su3 div img').css({ 'display': 'none' });
                $('.su3').find('div.cont_bg img').css({ 'display': 'none' });
                $(this).find('div img').eq(0).css({ 'z-index': '9999', 'display': 'block' });
                $(this).find('div.cont_bg img').eq(0).css({ 'opacity': '1', 'display': 'block' });
            });
            $('.su3').on('click', function (e) {
                e.stopPropagation();
                $(this).find('div > ul > li').removeClass('on');
                $(this).find('div > ul > li').eq(0).addClass('on');
                $('#main_floor').show();
                $('#health_floor').hide();
                $('.build1 div img').css({ 'display': 'none' });
                $('.build1').find('div.cont_bg img').css({ 'display': 'none' });
                $('.build2 div img').css({ 'display': 'none' });
                $('.build2').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su2 div img').css({ 'display': 'none' });
                $('.su2').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su1 div img').css({ 'display': 'none' });
                $('.su1').find('div.cont_bg img').css({ 'display': 'none' });
                $(this).find('div img').eq(0).css({ 'z-index': '9999', 'display': 'block' });
                $(this).find('div.cont_bg img').eq(0).css({ 'opacity': '1', 'display': 'block' });
            });
        });
        $(document).ready(function () {
            // $('.health_floor').click();
            $('#main_floor').show();
            $('#health_floor').hide();
            $('.floor_info .center').show();
            $('.main_floor').click(function () {
                // $('div.center').hide();
                // $('div.center img').css({ 'display': 'none' });
                $('#health_floor').hide();
                $('div.main').show();
                $('.floor_info ul li').removeClass('on');
                $('.su1').addClass('on');
                $('.su1 ul li').eq(0).addClass('on');
                $('.su1 .cont_bg img').eq(0).css({ 'z-index': '9999', 'display': 'block' });
                $('.floor_select img:eq(1)').css({ 'opacity': '1', 'display': 'block' });
            });
            $('.health_floor').click(function () {
                // $('div.main').hide();
                // $('div.main img').css({ 'display': 'none' });
                $('.build2 div img').css({ 'display': 'none' });
                $('.build2').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su1 div img').css({ 'display': 'none' });
                $('.su1').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su2 div img').css({ 'display': 'none' });
                $('.su2').find('div.cont_bg img').css({ 'display': 'none' });
                $('.su3 div img').css({ 'display': 'none' });
                $('.su3').find('div.cont_bg img').css({ 'display': 'none' });
                $('#main_floor').hide();
                $('div.center').show();
                $('.floor_info ul li').removeClass('on');
                $('.build1').addClass('on');
                $('.build1 ul li').eq(0).addClass('on');
                $('.build1 .cont_bg img').eq(0).css({ 'z-index': '9999', 'display': 'block' });
                $('.floor_select img:eq(0)').css({ 'opacity': '1', 'display': 'block' });
            });
        });
    }
)(jQuery);