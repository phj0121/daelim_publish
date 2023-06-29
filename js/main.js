$(function(){
    $('.search').click(function(){
        $('.search_form').toggle()
    });

    $('#btn_left').click(function(){
        $('.left_family').toggle();
        $('.right_family').hide();
    })
    
    $('#btn_right').click(function(){
        $('.left_family').hide();
        $('.right_family').toggle();
    })

    $('.slide').slick({
        autoplay: true,
        fade: true,
        arrows: false
    });

    // 주메뉴에 마우스 over 전체 메뉴 보이게하고
    // 주메뉴에 마우스 leave 전체 메뉴 안보이게
    $('.gnb>li').mouseenter(function(){
        $('#header_wrap').stop().animate({'height':320},300);
        $('.gnb>li>.depth2,.go_to_dlche').stop().slideDown(300);
    });
    
    $('#header_wrap').mouseleave(function(){
        $('#header_wrap').stop().animate({'height':70},300);
        $('.gnb>li>.depth2,.go_to_dlche').stop().slideUp(300);
    });


    // HTML .modal_content 동적 컨텐츠
    // 제목
    // 문단
    // 유튜브주소
    let video_tit = ['D TOWER','Canakkale 1915 Bridge','Petrochemical Plant'];
    let video_p = ['도시를 개발하다.','세계 6번째 현수교 기술자립국, 세계최고의 기술력, DL이앤씨.','1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년.'];
    let video_url = ['https://www.youtube.com/embed/lAJ3SGjbdr4','https://www.youtube.com/embed/vM8b0CZd2Ww','https://www.youtube.com/embed/gehtA1gfXPc'];

    $('.list li').click(function(){
        console.log('클릭')
        let num = $(this).index();
        console.log(num);

        $('.modal_wrap').fadeIn();
        // 동적 제목 삽입
        $('.tit h2').text(video_tit[num]);
        // 동적 문단 삽입
        $('.tit p').text(video_p[num]);
        // 동적 영상 삽입
        $('.tit iframe').attr('src',video_url[num]);

        // 이전버튼 클릭시 비디오 바뀜
        $('.prev').click(function(){
            if(num==0){
                num = 2;
            }else{
                num --;
            }
            $('.tit h2').text(video_tit[num]);
            $('.tit p').text(video_p[num]);
            $('.tit iframe').attr('src',video_url[num]);
        });

        // 다음 버튼 클릭시 비디오 바뀜
        $('.next').click(function(){
            if(num <=2){
                num = 0;
            }else{
                num ++;
            }
            $('.tit h2').text(video_tit[num]);
            $('.tit p').text(video_p[num]);
            $('.tit iframe').attr('src',video_url[num]);
        });
    });

    $('.btn_list .close').click(function(){
        $('.modal_wrap').fadeOut();
    });


    $('.btn_header_menu').click(function(){
        $('.allmenu_wrap').fadeIn();
    });
    $('.allmenu_close').click(function(){
        $('.allmenu_wrap').fadeOut();
    });


    $('.slide_box').slick({
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

    let sw=true;
    
    $('.btn_allmenu_slide_pause').click(function(){
        if(sw==true){
            $('.btn_allmenu_slide_pause').addClass('on');
            $('.slide_box').slick('slickPause');
            sw=false;
        }else{
            $('.btn_allmenu_slide_pause').removeClass('on');
            $('.slide_box').slick('slickPlay');
            sw=true;
        }

    });
    

});