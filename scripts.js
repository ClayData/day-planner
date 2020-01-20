$(document).ready(function() {

    $(".lock").click(function(){
        var text = $('.schedule-block');
        localStorage.setItem('text', text.val());
        alert(localStorage.getItem('text'));
    })


}