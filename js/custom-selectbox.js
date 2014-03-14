$(document).ready(function(){
    $('.selectCustom').each(function(){
        //var title = $(this).attr('title');
        var title = $('option:first-child',this)[0].text

        if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
        $(this)
            .css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
            .after('<span class="customSelectSpan">' + title + '</span>')
            .change(function(){
                val = $('option:selected',this).text();
                $(this).next().text(val);
            })
    });
});