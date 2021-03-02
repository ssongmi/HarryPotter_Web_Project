$(function(){
    var $menu_li = $(".area_02 > .wrap > ul > li ");
    var news_p = "";
    var news2_p = "";
    var $news_content = $("#news_1 > #news_content > p");
    var $news2_content = $("#news_2 > p");
    var $area_05 = $(".area_05");
    var $rec = $("#rec");
    var $recipe = $("#recipe");
    var $quidditch = $("#qudditch");
    var $snitch = $("#snitch");
    var $gryffindor = $("#gryffindor");
    var $slytherin = $("#slytherin");
    var $vill_list = $("#vill_list > li");
    var $wrap_07 = $(".area_07 > .wrap");
    var $pro = $(".pro");
    var $under = $("#under");
    var $peter = $("#peter");
    var $harry = $("#harry");
    var $ron = $("#ron");
    var $luna = $("#luna");
    var $footprint = $("#footprint");
    var $footprint2 = $("#footprint2");
    var $foot = $(".foot");
    var $foot2 = $(".foot2");
    var $me = $(".me");
    var i = 0, j = 0, k = 0 , m = 0, n = 0, s = 0;
    var y = 0; // rec_list.wheel
    var pos = 0;
    var posX, posY;
    var x,y;
    var randX = 0;
    var randY = 0;
    var flag = 0, flag_2 = 0, flag_3 = 0, flag_4 = 0, flag_5 = 0, flag_6 = 0, flag_7 = 0;
    var Xarr = new Array();
    var Yarr = new Array();
    var peter_ID = 0 , harry_ID = 0, luna_ID = 0;
    var p = 1, q = 1; r = 1;
    var limit_y = 0;
    var foot_height = 0;

    $("#cover > button").on("click",function(){
        $(this).parent().fadeOut();
        $(".first").fadeIn();
    });

    // menu hover
    $menu_li.on("mouseenter",function(){
        $(this).children("ul").stop().slideDown();
    });

    $menu_li.on("mouseleave",function(){
        $(this).children("ul").stop().slideUp();
    });




    // Professor_hover
    $pro.children("li").on("mouseenter",function(){
        $under.children("#before").removeAttr("style");
        $under.children("#after").removeAttr("style");
        $under.css("opacity","1");
        $under.appendTo($(this));
        x = $(this).parent().offset().left;
        y = $(this).parent().offset().top;
        posX = $(this).offset().left - x + 87;
        posY = $(this).offset().top + $(this).height() - y + 6;
        console.log("posX = " + posX + ",posY = " + posY);
        $under.css({"top":posY, "left":posX});
        $under.children("#before").stop().animate({"left":"0"});
        $under.children("#after").stop().animate({"right":"0"});
    });



    // recipe_scroll
    $("#rec").on("wheel",function(e){
        e.preventDefault();
        y = e.originalEvent.deltaY;
        if(y < 0){
            if(pos < 300){
                pos += 50;
                $recipe.animate({"top":pos + "px"},10);
            }
        }
        else{
            if(pos > -100){
                pos -= 50;
                $recipe.animate({"top":pos + "px"},10);
            }
        }
    }); //#rec.wheel

    // quidditch_hover
    $snitch.on("click",function(){
        if(!($snitch.is(".sn_active"))){
            $(this).addClass("sn_active");
            $quidditch.children("#quidditch_hover").animate({"opacity":"1"},function(){
                $snitch.children("h3").eq(0).css("opacity","0");
                $snitch.children("h3").eq(1).css("opacity","1");
                $gryffindor.children("#gry_list").slideDown();
                $slytherin.children("#sly_list").slideDown();
            });
        }
        else{
            $(this).removeClass("sn_active");
            $gryffindor.children("#gry_list").slideUp();
            $slytherin.children("#sly_list").slideUp();
            $snitch.children("h3").eq(0).css("opacity","1");
            $snitch.children("h3").eq(1).css("opacity","0");
            $quidditch.children("#quidditch_hover").animate({"opacity":"0"});
        }
    });


    //snitch
    setInterval(function(){
        $snitch.children("img").animate({"top":"45%"},function(){
                $(this).animate({"top":"50%"});
        });
    },800);


    //surrounding Village
    $vill_list.on("click",function(){
        $(this).toggleClass("vill_active");
    });

    //surrounding village li
    for(n = 0; n < 9; n++){
        Xarr[n] = $(".a" + n).css("left");
        Yarr[n] = $(".a" + n).css("top");
    }
    for(k = 0; k < 9; k++){
        randX = Math.floor(Math.random()*600)-300;
        randY = Math.floor(Math.random()*600)-300;
        $(".a" + k).css({"top":randY , "left":randX});
    }

    news_p = $news_content.text();
    $news_content.empty().css("opacity","1");
    for(i=0; i<news_p.length; i++){
        $("<span>"+ news_p[i] +"</span>").css("opacity","0").addClass("c"+(i%6)).appendTo($news_content);
    }
    news2_p = $news2_content.text();
    $news2_content.empty().css("opacity","1");
    for(j=0; j<news2_p.length; j++){
        $("<span>"+ news2_p[j] +"</span>").css("opacity","0").addClass("d"+(j%6)).appendTo($news2_content);
    }
    // scroll
    $(window).on("scroll",function(){
        limit_y = $(window).scrollTop() + $(window).height();
        if(!flag_7){
            foot_print();
        }
        // news opacity
        if($(window).scrollTop() > 1){

            $(".c0").animate({"opacity":"1"},2000);
            $(".c1").animate({"opacity":"1"},2400);
            $(".c2").animate({"opacity":"1"},3000);
            $(".c3").animate({"opacity":"1"},1700);
            $(".c4").animate({"opacity":"1"},1200);
            $(".c5").animate({"opacity":"1"},2100);


        }
        if($(window).scrollTop() > $news2_content.offset().top - 500){
            $(".d0").animate({"opacity":"1"},2000);
            $(".d1").animate({"opacity":"1"},2400);
            $(".d2").animate({"opacity":"1"},3000);
            $(".d3").animate({"opacity":"1"},1700);
            $(".d4").animate({"opacity":"1"},1200);
            $(".d5").animate({"opacity":"1"},2100);
        }

        //last night news
        if($(window).scrollTop() > $("#last > h2").offset().top -300){
            $("#last > p").animate({"opacity":"1"},1500);
        }

        // peter footprint
        if($(window).scrollTop() > parseInt($peter.css("top")) - 400){
            if(!flag_2){
                flag_2 = 1;
                peter_ID = setInterval(function(){
                    $peter.children("img").eq(p).animate({"opacity":"1"});
                    p++;
                    if(p >= 20){ clearInterval(peter_ID); }
                },400);
            }
        }

        // harry footprint
        if($(window).scrollTop() > parseInt($harry.css("top"))-800){
            if(!flag_3){
                flag_3 = 1;
                harry_ID = setInterval(function(){
                    $harry.children("img").eq(q).animate({"opacity":"1"});
                    q++;
                    if(q >= 15){ clearInterval(harry_ID); }
                },400);
            }
        }

        // ron, hermione
        if($(window).scrollTop() > parseInt($ron.css("top"))-800){
            $ron.children("img").animate({"opacity":"1"});
            $("#hermione > img").animate({"opacity":"1"});
        }

        // luna footprint
        if($(window).scrollTop() > parseInt($luna.css("top")) - 800){
            if(!flag_4){
                flag_4 = 1;
                luna_ID = setInterval(function(){
                    $luna.children("img").eq(r).animate({"opacity":"1"});
                    r++;
                    if(r >= 9){ clearInterval(luna_ID); }
                },400);
            }
        }

        // recipe
        if($(window).scrollTop() > parseInt($area_05.css("top")) - 100){
            $("#shadow").css("box-shadow","0 0 106px 180px rgba(255,255,255,0.5)");
        }
        if($(window).scrollTop() > $wrap_07.offset().top - 100){
            if(!flag){
                for(m = 0; m < 9; m++){
                    $(".a" + m).animate({"top":Yarr[m] , "left":Xarr[m]});
                }
                flag = 1;
            }
        }

    }); // window.scroll

    // //function : foot_print start
    // function foot_print(){
    //     flag_7 = 1;
    //     $me.remove().appendTo($footprint);
    //     $me.animate({"opacity":"1"});
    //     $foot.eq(0).animate({"opacity":"1"},200,function(){
    //         $foot.eq(1).animate({"opacity":"1"},200,function(){
    //             $foot.eq(2).animate({"opacity":"1"},200,function(){
    //                 $foot.eq(3).animate({"opacity":"1"},200,function(){
    //                     $foot.eq(1).animate({"opacity":"0"},200,function(){
    //                         $foot.eq(2).animate({"opacity":"0"},200,function(){
    //                             $foot.eq(3).animate({"opacity":"0"},200); //eq(3).opacity = 0
    //                             if($footprint.offset().top + $footprint.height() >= limit_y){
    //                                 flag_7 = 0;
    //                                 return;
    //                             }
    //                             //
    //                             foot_height = parseInt($footprint.css("top"));
    //                             if(foot_height > 4400){
    //                                 $me.animate({"opacity":"0"});
    //                                 return;
    //                             }
    //                             $footprint2.css("top",  foot_height + 60 + "px");
    //
    //                             $me.remove().appendTo($footprint2);
    //                             $foot2.eq(0).animate({"opacity":"1"},200,function(){
    //                                 $foot2.eq(1).animate({"opacity":"1"},200,function(){
    //                                     $foot2.eq(2).animate({"opacity":"1"},200,function(){
    //                                         $foot2.eq(3).animate({"opacity":"1"},200,function(){
    //                                             $foot2.eq(1).animate({"opacity":"0"},200,function(){
    //                                                 $foot2.eq(2).animate({"opacity":"0"},200,function(){
    //                                                     $foot2.eq(3).animate({"opacity":"0"},200); //eq(0).opacity = 0
    //                                                     if($footprint2.offset().top + $footprint2.height() >= limit_y) {
    //                                                         flag_7 = 0;
    //                                                         return;
    //                                                     }
    //                                                     foot_height = parseInt($footprint2.css("top"));
    //                                                     if(foot_height > 4400){
    //                                                         $me.animate({"opacity":"0"});
    //                                                         return;
    //                                                     }
    //                                                     $footprint.css("top", foot_height + 60 + "px");
    //
    //                                                     foot_print();
    //                                                 }); //eq(1).opacity = 0
    //                                             }); //eq(2).opacity = 0
    //                                         }); //eq(0).opacity = 1
    //                                         $foot2.eq(0).animate({"opacity":"0"},200); //eq(3).opacity = 0
    //                                     }); //eq(1).opacity = 1
    //                                 }); //eq(2).opacity = 1
    //                             }); //eq(3).opacity = 1
    //                             //
    //                         }); //eq(1).opacity = 0
    //                     }); //eq(2).opacity = 0
    //                 }); //eq(0).opacity = 1
    //                 $foot.eq(0).animate({"opacity":"0"}); //eq(3).opacity = 0
    //             }); //eq(1).opacity = 1
    //         }); //eq(2).opacity = 1
    //     }); //eq(3).opacity = 1
    // }// foot_print: finish

    function foot_print(){
        flag_7 = 1;
        $me.remove().appendTo($footprint);
        $me.animate({"opacity":"1"});
        $foot.eq(0).animate({"opacity":"1"},200);
        $foot.eq(1).delay(200).animate({"opacity":"1"},200);
        $foot.eq(2).delay(400).animate({"opacity":"1"},200);
        $foot.eq(0).delay(400).animate({"opacity":"0"},200);
        $foot.eq(1).delay(400).animate({"opacity":"0"},200);
        $foot.eq(3).delay(600).animate({"opacity":"1"},200,function(){

                if($footprint.offset().top + $footprint.height() >= limit_y){
                    flag_7 = 0;
                    return;
                }
                //
                foot_height = parseInt($footprint.css("top"));
                if(foot_height > 4400){
                    $me.animate({"opacity":"0"});
                    return;
                }
                $footprint2.css("top",  foot_height + 60 + "px");

                $me.remove().appendTo($footprint2);
                $foot2.eq(0).animate({"opacity":"1"},200);
                $foot.eq(2).animate({"opacity":"0"},200);
                $foot.eq(3).delay(200).animate({"opacity":"0"},200);
                $foot2.eq(1).delay(200).animate({"opacity":"1"},200);
                $foot2.eq(2).delay(400).animate({"opacity":"1"},200);
                $foot2.eq(0).delay(400).animate({"opacity":"0"},200);
                $foot2.eq(1).delay(400).animate({"opacity":"0"},200);
                $foot2.eq(3).delay(600).animate({"opacity":"1"},200,function(){
                    if($footprint2.offset().top + $footprint2.height() >= limit_y) {
                        flag_7 = 0;
                        return;
                    }
                    foot_height = parseInt($footprint2.css("top"));
                    if(foot_height > 4400){
                        $me.animate({"opacity":"0"});
                        return;
                    }
                    $footprint.css("top", foot_height + 60 + "px");

                    $foot2.eq(2).animate({"opacity":"0"},200);
                    $foot2.eq(3).delay(200).animate({"opacity":"0"},200);
                    foot_print();

                    });

            });

    }// foot_print: finish


}); // finish
