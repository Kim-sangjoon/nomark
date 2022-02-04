$(function() {
    var selectTarget = $('.selectbox select');

    selectTarget.change(function(){
        var select_name = $(this).children('option:selected').text();
        $(this).siblings('label').text(select_name);
    });
});
    
    selectTarget.on({
    'focus' : function () {
        $(this).parent().addClass('focus');
    },
    'blur' : function () {
        $(this).parent().removeClass('focus');
    }
});