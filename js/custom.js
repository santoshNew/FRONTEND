$(document).ready(function () {
    //for placeholder IE8
    $('input[type="text"], input[type="email"], input[type="password"], textarea').placeholder_labels();

    // for toggle filters arrow
//    $('.filters').click(function () {
//        $(this).toggleClass('filterActive');
//    });
    show_tooltip();

    // for toggle the header drop-down menu
    $('.dropDownMenu').hide();
    $('.pMapperHeaderHelp .userIconWrap a').click(function (e) {
        e.stopPropagation();
        $(this).closest('.openMenu').toggleClass('active');
        $('.dropDownMenu').toggle('show');
    });
    $('html, body').click(function () {
        $('.openMenu').removeClass('active');
        $('.dropDownMenu').hide('slow');
    });


    //toggal to Survey Details page Download Type
    $('.dropDwonDetailspage').hide();
    $('.bannerDetailAction li:first-child, #adminDwnldSource').click(function (e) {
        e.stopPropagation();
        $(this).closest('.openMenu').toggleClass('active');
        $('.dropDwonDetailspage').toggle('show');

    });
    $('html, body').click(function () {
        $('.openMenu').removeClass('active');
        $('.dropDwonDetailspage').hide('slow');
    });

    // serach icon click on header below 661 view
    $('.popupSearchWrap').hide();
    $('.iconSearchBar').click(function (e) {
        e.stopPropagation();
        $('.popupSearchWrap').toggle('show');
    });
    $('html, body').click(function () {
        $('.popupSearchWrap').hide('slow');
    });
    $('.popupSearchWrap').click(function (e) {
        e.stopPropagation();
    })

    // page width on change  IT SHOULD BE DELETE AFTER RESPONSIVE WORK WILL OVER
    var windWidht = $(window).width();
    $(window).resize(function () {
        var windWidht = $(window).width();
    });

    // on smaller view date accordian js
    $('.dateAccordian').hide();
    $('.dateClick').click(function () {
        $('.dateAccordian').slideToggle();
    });


    // custom js for the custom checkbox hide and show
    $('.showPwdWrap label').click(function () {
        $(this).find('.customCheckbox').toggleClass('active');
        if($(this).find('.customCheckbox').hasClass('active')){
            $("#inputNewPassword").prop("type","text");
        }
        else{
            $("#inputNewPassword").prop("type","password");
        }
        return false;
    });

   //close delete survey pop up
    $(".closeDeletePopUp").click(function(){
        $("#alertInfoBox").hide();
    })

    //close share survey pop up
    $(".closeSharePopUp").click(function(){
        $("#shareBox").hide();
    })

    $(".closeDeleteJob").click(function(){
        $("#alertDeleteJobPopup").hide();
    })


    $("#editProfile").live("click",function(){
        $(".customNav li").removeClass("active");
        $(this).parent("li").addClass("active");
        var id = $(this).attr("user_id");
        $.ajax({
            type: "GET",
            url: "/users/"+id+"/edit_profile",
            data:{user_id:id},
            dataType: "script"
        })
    })

    $("#changePassword").live("click",function(){
        $(".customNav li").removeClass("active");
        $(this).parent("li").addClass("active");
        var id = $(this).attr("user_id")
        $.ajax({
            type: "GET",
            url: "/users/edit",
            data:{user_id: id},
            dataType: "script" })
    })

    //Function to highlight headings of input box while edit profile
    $('.edit_user .smallPlaceholder').hide();

    $(".edit_user input").live("focus",function(){
        $(this).siblings(".smallPlaceholder").show();
        $(this).siblings(".smallPlaceholder").addClass("editable");
        $(this).siblings(".iconPenNew").addClass("penActive");})

    $(".edit_user input").live("focusout",function(){
        if($(this).val().length == 0){
            $(this).siblings(".smallPlaceholder").hide();
        }
        $(this).siblings(".smallPlaceholder").removeClass("editable");
        $(this).siblings(".iconPenNew").removeClass ("penActive");
    })

    //Function for logOut Pop up
    $("#logOutBox").hide();
    $("#logoutAction").live("click",function(){
        $("#logOutBox").show();

    });

    $('.iconClose').live("click",function(){
        $('.overlay-bg#logOutBox').hide(); //hide logout pop up
        $('.overlay-bg#alertInfoBox').hide(); //hide logout pop up
        $('.overlay-bg#createPlanBox').hide(); //hide logout pop up
        $('.overlay-bg#editTierBox').hide(); //hide logout pop up
        $('.overlay-bg#deleteTierBox').hide(); //hide logout pop up
        $('.overlay-bg#editPlanBox').hide(); //hide logout pop up
        $('.overlay-bg#helpBox').hide(); //hide logout pop up
        $('.overlay-bg#removeShareBox').hide(); //hide logout pop up
        $('.overlay-bg#mobileSearchBox').hide(); //hide responsive search pop up
        $("#shareBox .alreadyShared").hide();
        $("#createtierBox").hide();
        $(".overlay-bg#deletePlanBox").hide();
        $(".overlay-bg#EditTierBox").hide();


    });

    // Function for help Popup
    $("#helpBox").hide();
    $("#iconHelp").on("click",function(){
        $("#helpBox").show();
    });


    // Function to select all checkboxes of users
    $("#selectAll").live("click",function(){
        $(".titleHeadChkbox").attr("checked","checked");
    })

    // Function to unselect all checkboxes of users
    $("#selectNone").live("click",function(){
        $(".titleHeadChkbox").removeAttr("checked");
    })

    $("#toDate_resp, #fromDate_resp").on("focus", function(){
        $(".customRangeCalenderTop input").removeClass("getFocus");
        $(this).addClass("getFocus");
        $(this).css("background","#c2272d")
        $(this).css("color","#fff")
    })

    $("#clearDate").click(function(){
        var fullDate = new Date();
        var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
        var currentDate = twoDigitMonth + "/" + fullDate.getDate() + "/" + fullDate.getFullYear();
        $("#fromDate_resp").val(currentDate);
        $("#toDate_resp").val(currentDate);
    })

    // Show responsive custom date caleder
    $(".showCustomRangeCalender").click(function(){
        $("#shareBox").show();
    })

    $(".applyDate").click(function(){
        $(".customRangeBoxMob").show();
        var fromDate = $("#fromDate_resp").val()
        var toDate = $("#toDate_resp").val()
        $("#fromDateShow").val(fromDate)
        $("#toDateShow").val(toDate);
        $("#fromDate").val(fromDate);
        $("#toDate").val(toDate);
        $("#shareBox").hide();
    })

    // JavaScript code for new design

    // small PlaceHolder javascript for hide and show
    $('#new_user .smallPlaceholder').hide();
    $('#new_pricing_plan_tier .smallPlaceholder').hide();
    $(document).on("keypress", '#new_user input[type="text"],#new_user input[type="password"],#new_pricing_plan_tier input[type="text"]', function(){
        console.log("hi");
        $(this).siblings('.smallPlaceholder').show();
    });

    $('#new_user input[type="text"],#new_user input[type="password"],#new_pricing_plan_tier input[type="text"]').live("keyup",function(){
        if($(this).val().length == 0){
            $(this).siblings('.smallPlaceholder').hide();
        }
    });



    //Jquery functions for Filter dropdown on dashboard
    //Filter Open and close According
    $(".openFilterWrap").hide();
    $(document).on("click", "#surveyState,#sortTiers", function(){
        if($(this).hasClass('outerDropdown')){
            $(this).removeClass('outerDropdown');
            $(this).parent(".optionBoxWrap").siblings(".openFilterWrap").hide();
        }else{
            $(this).addClass('outerDropdown');
            $(this).parent(".optionBoxWrap").siblings(".openFilterWrap").show();
        }
    })



    //Close Filter dropdown
    $(document).on("click", "#applyBtn,.closeDropDown", function(){
        $("#surveyState").removeClass('outerDropdown');
        $('.filterType').removeClass('activeDropdown');
        $(".outerList .unstyled").stop('true','true').slideUp();
        $(".openFilterWrap").hide();
    });

    //Reset values after cancel
    $(document).on("click", ".closeDropDown", function(){
        $('#showSensorFilter').html("Sernsor Type");
        $('#showStatusFilter').html("Survey Status");
        $('#showDateFilter').html("Survey Date");
        $(".customRangeBox").hide();
    })

    //Add filter tags
    $(document).on("click", "#applyBtn",function(){
        var sensor = $("#sensor").val();
        var status = $("#status").val();
        var date = $("#custom_date").val();
        var user = $("#user_emailId").val();
        if(date != "" && date == "Last"){date = "Last 30 Days"}
        if($(this).hasClass("processedJobAply")){
            var header_type = "Job Type";
            var header_status = "Status";
            var header_date = "Date";
        }else{
            var header_type = "Sensor Type";
            var header_status = "Survey Status";
            var header_date = "Survey Date";
        }
        if(sensor != "" && sensor != undefined){
            $('#showSensorFilter').html(header_type);
            add_filter_tags(sensor,"sensor");}
        if(status != "" && status != undefined){
            $('#showStatusFilter').html(header_status);
            add_filter_tags(status,"status");}
        if(date != "" && date != undefined){
            if(date === "Custom Range"){
                var fullDate = new Date();
                var twoDigitMonth = ((fullDate.getMonth().length+1) === 1)? (fullDate.getMonth()+1) : '0' + (fullDate.getMonth()+1);
                var currentDate = twoDigitMonth + "/" + fullDate.getDate() + "/" + fullDate.getFullYear();
                if(($("#fromDate").val() != "" && $("#toDate").val() == "")){
                  $("#toDate").val(currentDate);
                    if(($("#fromDate").val() > $("#toDate").val())){
                        alert ("To date should not be smaller than from date.");
                        return false;
                    }
                }else if($("#toDate").val() != "" && $("#fromDate").val() == ""){
                    $("#fromDate").val(currentDate);
                }else if($("#toDate").val() == "" && $("#fromDate").val() == ""){
                    $("#fromDate").val(currentDate);
                    $("#toDate").val(currentDate);
                }
                $('#showDateFilter').html(header_date);
                add_filter_tags(date,"customRange");
            }else{
                $('#showDateFilter').html(header_date);
                add_filter_tags(date,"custom_date"); }
        }
        if(user != "" && user != undefined){
            add_filter_tags(user,"userText");}
    })

    $(".outerList .unstyled").hide();
    $(".customRangeBox").hide();
    $(document).on("click", '.unstyled li',function(){
        var typeData = $.trim($(this).html());
        if($(this).parent("ul").hasClass("sensorType")){
            $("#sensor").val(typeData);
            $('.activeDropdown').html(typeData + "<i class='phImageSprite iconArrow'></i>");
        }else if($(this).parent("ul").hasClass("statusType")){
            $("#status").val(typeData);
            $('.activeDropdown').html(typeData + '<i class="phImageSprite iconArrow"></i>');
        }else if($(this).parent("ul").hasClass("dateType")){
            if(!$(this).hasClass("openCustomRange")){
                $("#fromDate").val("");
                $("#toDate").val("");
                $(".customRangeBox").hide();
                $("#custom_date").val(typeData);
                $('.activeDropdown').html(typeData + '<i class="phImageSprite iconArrow"></i>');
            }else{
                $("#custom_date").val(typeData);
                $('.activeDropdown').html(typeData);
            }
        }
        $('.filterType').removeClass('activeDropdown');
        $(this).parents('.outerList').children('.unstyled').slideUp();
    });

    $(".outerList .sortunstyled").hide();
    $(document).on("click", '.sortunstyled li',function(){
        var typeData = $.trim($(this).html());
        if($(this).parent("ul").hasClass("processingCostType")){
            $("#processing_cost").val(typeData);
            $('.activeDropdown').html(typeData + "<i class='phImageSprite iconArrow'></i>");
        }else if($(this).parent("ul").hasClass("storageCostType")){
            $("#storage_cost").val(typeData);
            $('.activeDropdown').html(typeData + '<i class="phImageSprite iconArrow"></i>');
        }
        $('.sortType').removeClass('activeDropdown');
        $(this).parents('.outerList').children('.sortunstyled').slideUp();
    });
    $(document).on("click", '.openFilterWrap .filterType',function(){
        if($(this).hasClass('activeDropdown')){
            $('.filterType').removeClass('activeDropdown');
            $(".outerList .unstyled").stop('true','true').slideUp();
        }else {
            $('.filterType').removeClass('activeDropdown');
            $(".outerList .unstyled").stop('true','true').slideUp();
            $(this).addClass('activeDropdown');
            $(this).next('.unstyled').stop('true','true').slideDown();
        }
    });

    $(document).on("click", '.openFilterWrap .sortType',function(){
        if($(this).hasClass('activeDropdown')){
            $('.sortType').removeClass('activeDropdown');
            $(".outerList .sortunstyled").stop('true','true').slideUp();
        }else {
            $('.sortType').removeClass('activeDropdown');
            $(".outerList .sortunstyled").stop('true','true').slideUp();
            $(this).addClass('activeDropdown');
            $(this).next('.sortunstyled').stop('true','true').slideDown();
        }
        $(document).on("click", ".openCustomRange",function(){
            $(".customRangeBox").show();
        })

    });

    // for Details page map slider
    $('.mapSlideIconWrap').click(function(){
        $('.processedDetail').toggleClass('processedDetailActive',500);
        $('.processMap').toggleClass('processMapFull',500,function(){
            if(typeof google != "undefined"){
            google.maps.event.trigger(document.getElementById("map_canvas"),"resize");
            }
        });
        $(this).toggleClass('mapSlideIconWrapActive',500);
        
//            $(this).closest('.openMenu').toggleClass('active');
    });

    // For Admin Details Page map Slider
    $('.adminMapWrap .mapSlideIconWrap').click(function(){
        $('.adminDetailWrap').toggle(700);
        $('.adminMapWrap').toggleClass('adminMapWrapA',700,function(){
            if(typeof google != "undefined"){
                google.maps.event.trigger(document.getElementById("map_canvas"),"resize");
            }
        });
        $('.mapSlideIconWrap .phImageSprite2').toggleClass('mapSlideIconWrapActive');
    });


    //for Username/EmailId of filter by area
    $('.userTextBox').hide();
    $('.userText').click(function(){
        $('.userTextBox').show();
        $('.userText').hide();
    });
    $('.closeDropDown').click(function(){
        $('.userTextBox').hide();
        $('.userText').show();
    });

    /*mobile right panel menus*/
    $(function() {

        $('#nav').stop().animate({'margin-right':'-230px'},500);
        function toggleDivs() {
            var $inner = $("#nav");
            if ($inner.css("margin-right") == "-230px") {
                $inner.animate({'margin-right': '0'});
            }
            else {
                $inner.animate({'margin-right': "-230px"});
            }
        }
        $(".nav-btn").bind("click", function(){
            toggleDivs();
        });
    });
    $("body,html").click(function(){
        $('#nav').stop().animate({'margin-right':'-230px'},500);
    });
    $("#nav > .nav-btn").click(function(e){
        e.stopPropagation();
    });
    /*js-end*/

    // Menu icon slide for less than 400px view
    $('.mobileNavWrap .nav-btn').click(function(){
        if(windWidht < 400){
            $('.pMapperHeaderLogo').toggleClass('pMapperHeaderLogoActive',500);
        }
    });

    // Survey details view for mobile view and less than 768px


//    $('.shareDeleteMobWrapBtn').hide();
    $(document).on("click", '.surveyDetailsWrap input[type="checkbox"]',function(){
        $(this).siblings('.surveyCheckbox span').toggleClass('surveyCheckboxActive');
        if(windWidht < 768){
//            $(this).siblings('.surveyCheckbox span').toggleClass('surveyCheckboxActive');

            $(this).parents(".surveyDetailsWrap").siblings('.shareDeleteMobWrapBtn').toggle(500);
        }

    });
    $(document).on("click", ".surveyDetailsWrap .surveyDetailsIcon",function(){
        $(this).parents('.surveyDetailsWrap').siblings('.shareDeleteMobWrap').find('ul').toggle(500);
        $(this).toggleClass('surveyDetailsIconActive');

    });


    // Window load event used just in case window height is dependant upon images
        var footerHeight = 0,
            footerTop = 0,
            $footer = $(".bgFooter");
        positionFooter();
        function positionFooter() {
            footerHeight = $footer.height();
            footerTop = ($(window).scrollTop()+$(window).height()-footerHeight)+"px";

            if (($('#wrapper').height()+footerHeight) < $(window).height()) {
                $footer.css({
                    position: "absolute"
                })
            } else {
                $footer.css({
                    position: "static"
                })
            }
        }
    $(window)
        .scroll(positionFooter)
        .resize(positionFooter)

    //-------------------------- close-----------------

    // Open select option while click on Filter By types------
    $('.sensorOption').slideUp();
    $('.statusOption').slideUp();
    $('.dateOption').slideUp();
    $('.allNoneOption').slideUp();
    $('.customRangeBoxMob').hide();
    var selectAllNone;
    $('.selectWrapper .selectBtn').click(function(){
        if($(window).width() < 768){
        $('.allNoneOption').slideDown();
        $('.allNoneOption li').click(function(){
            if($(this).hasClass("surveySelectAll_resp")){
                $(".selectSurveyChkBox").attr("checked","checked");
                $(".surveyDetailsWrap input:checkbox").siblings("span").addClass("surveyCheckboxActive");
                $(".shareDeleteMobWrapBtn").show();
            }
            if($(this).hasClass("surveySelectNone_resp")){
                $(".selectSurveyChkBox").removeAttr("checked")
                $(".surveyDetailsWrap input:checkbox").siblings("span").removeClass("surveyCheckboxActive")
                $(".shareDeleteMobWrapBtn").hide();
            }
            $('.allNoneOption').slideUp();
            return false;
        });
//        $(this).parents('.actionFilterWrap').siblings('.actionBottom').find('ul .sensorOption').siblings().slideUp();
        $('.statusOption').slideUp();
        $('.dateOption').slideUp();
        }
    });
    var sensorType;
    $('#sensorValue').click(function(){
        $('.sensorOption').slideDown();
        $('.sensorOption li').click(function(){
            sensorType = $(this).text();
            $('#sensorValue').find('b').remove();
            $('#sensorValue').append('<b> :'+sensorType+'</b>');
            $("#sensor").val($.trim(sensorType))
            $('.sensorOption').slideUp();
            return false;
        });
//        $(this).parents('.actionFilterWrap').siblings('.actionBottom').find('ul .sensorOption').siblings().slideUp();
        $('.statusOption').slideUp();
        $('.dateOption').slideUp();
    });
    var surveyStatus;
    $('#statusValue').click(function(){
        $('.statusOption').slideDown();
        $('.statusOption li').click(function(){
            surveyStatus = $(this).text();
            $('#statusValue').find('b').remove();
            $('#statusValue').append('<b> :'+surveyStatus+'</b>');
            $("#status").val($.trim(surveyStatus));
            $('.statusOption').slideUp();
            return false;
        });
        $('.sensorOption').slideUp();
        $('.dateOption').slideUp();
    });
    var surveyDate;
    $('#dateValue').click(function(){
        $('.dateOption').slideDown();
        $('.dateOption li').click(function(){
            surveyDate = $(this).text();
            var surveyDateLength = $.trim(surveyDate);
            $('#dateValue').find('b').remove();
            $('#dateValue').append('<b> :'+surveyDate+'</b>');
            $("#custom_date").val(surveyDateLength);
            $('.dateOption').slideUp();
            if(surveyDateLength != "Custom Range")
                $(".customRangeBoxMob").hide();
                $("#fromDate").val("");
                $("#toDate").val("");
            //for data range area open/close
             /*if(surveyDateLength === "Custom Range"){
                 $('.customRangeBoxMob').slideToggle();

             }*/
            return false;
        });
        $('.sensorOption').slideUp();
        $('.statusOption').slideUp();
    });
    $('.actionBtnWrap input').click(function(){
        $(this).parents('.actionFilterWrap').siblings('.actionBottom').find('ul').slideUp();
    });

    // this is for option list check and uncheck on click
    $('.actionBottom li').click(function(){
       $(this).toggleClass('liActive');
       $(this).siblings().removeClass('liActive');
    });
    //---------Close Filter By types-------------------

    // ----START----Responsive Detail page footer, Open Details of Survey while click on Expand icon-----FOR TOUCH DEVICE------
    $(".detailFooterMobile").hide();
    function isTouchDevice(){
        return (typeof(window.ontouchstart) != 'undefined') ? true : false;
    }
    if((isTouchDevice()== true))
    {
         $('#map').on({'touchstart' : function(){
             $(".detailFooterMobile").show(500);


         }});
    }

    $('.expandDetails').click(function(){
        $('.processedDetail').toggle();
        $('.commentWrapper').toggle();
        $('.bgFooter').toggle();
        $(this).toggleClass("active");

        if($(this).hasClass("active")){
            setTimeout(function(){$(".detailFooterMobile").css({
                position: "fixed",
                top: "122px",
                height:"45px"
            })
            }, 500)
            $("#map").css({
                "position": "fixed",
                "top" : "-513px"

            })
            $(".topOffsetCount").css({
                "margin-top": "120px"
            })
            $('html,body').animate({
                scrollTop: $(".detailFooterMobile").offset().top - 109
            }, 500);
            $('html,body').animate({
                scrollTop: $(".topOffsetCount").offset().top - 166
            }, 500);
        }
        else {
            $('html,body').animate({
                scrollTop: $(".detailFooterMobile").offset().top
            }, 500);
            setTimeout(function(){$(".detailFooterMobile").css({
                position: "fixed",
                top: "auto",
                height:"41px"
            })
            }, 0)
            $("#map").css({
                "position": "relative",
                "top" : "0"

            })

        }

        $(window).resize(function () {
            var windWidth = $(window).width();
            if(windWidht>767){
                $('.processedDetail').show();
                $('.commentWrapper').show();
            }
            else if(windWidht<=767){

            }
        });
    });
    // ----END----Responsive Detail page footer, Open Details of Survey while click on Expand icon-----------

    // for Billing Report drop down list at ADMIN side
    $('.billing').click(function(){
        $('.billingReport').toggle();
    });




});
//--------------------------document ready area is close--------------------------------------------------------------


function add_filter_tags(type,categary){
    if($('ul#filterLabelList li p:contains('+type+')').length == 0) {
        var className = categary+"FilterLabel";
        var deleteIconClass = categary+"Filter"
        if($("ul#filterLabelList li").hasClass(className)){
            if(categary == "customRange"){
                $("."+className).replaceWith('<li class="token-input-token-facebook '+className+'"><p>'+ $("#fromDate").val() +' to '+$("#toDate").val() +'</p><span class="token-input-delete-token-facebook delete'+deleteIconClass+'"><i class="phImageSprite icon_removeFilterTag"></i></span></li>')
            }else{
                $("."+className).replaceWith('<li class="token-input-token-facebook '+className+'"><p>'+ type +'</p><span class="token-input-delete-token-facebook delete'+deleteIconClass+'"><i class="phImageSprite icon_removeFilterTag"></i></span></li>')
            }
        }
        else{
            if(categary == "customRange"){
                $(".custom_dateFilterLabel").remove();
                $("ul#filterLabelList").append('<li class="token-input-token-facebook '+className+'"><p>'+ $("#fromDate").val() +' to '+$("#toDate").val() +'</p><span class="token-input-delete-token-facebook delete'+deleteIconClass+'"><i class="phImageSprite icon_removeFilterTag"></i></span></li>')
            }else{
                if(className === "custom_dateFilterLabel"){
                    $(".customRangeFilterLabel").remove();
                    $("ul#filterLabelList").append('<li class="token-input-token-facebook '+className+'"><p>'+ type +'</p><span class="token-input-delete-token-facebook delete'+deleteIconClass+'"><i class="phImageSprite icon_removeFilterTag"></i></span></li>')
                }else{
                    $("ul#filterLabelList").append('<li class="token-input-token-facebook '+className+'"><p>'+ type +'</p><span class="token-input-delete-token-facebook delete'+deleteIconClass+'"><i class="phImageSprite icon_removeFilterTag"></i></span></li>')
                }

            }
        }
    }
}

// tooltip for survey guid on mouseover
function show_tooltip() {
    $('.showSurveyIdWrap').hide();
    $('.iconShared').mouseover(function () {
        $(this).siblings('.showSurveyIdWrap').fadeIn('fast');
        return false;
    });
    $('.iconShared').mouseleave(function () {
        $(this).siblings('.showSurveyIdWrap').fadeOut('fast');
        return false;
    });
}
