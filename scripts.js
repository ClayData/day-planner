$(document).ready(function() {
    $("#block-1").val(localStorage.getItem("text1"));
    $(".lock").click(function(){
        var text1 = $("#block-1").val();
        localStorage.setItem("text1", text1);
    })

    $("#block-2").val(localStorage.getItem("text2"));
    $(".lock").click(function(){
        var text2 = $("#block-2").val();
        localStorage.setItem("text2", text2);
    })

    $("#block-3").val(localStorage.getItem("text3"));
    $(".lock").click(function(){
        var text3 = $("#block-3").val();
        localStorage.setItem("text3", text3); 
    })

    $("#block-4").val(localStorage.getItem("text4"));
    $(".lock").click(function(){
        var text4 = $("#block-4").val();
        localStorage.setItem("text4", text4);
    })

    $("#block-5").val(localStorage.getItem("text5"));
    $(".lock").click(function(){
        var text5 = $("#block-5").val();
        localStorage.setItem("text5", text5);   
    })

    $("#block-6").val(localStorage.getItem("text6"));
    $(".lock").click(function(){
        var text6 = $("#block-6").val();
        localStorage.setItem("text6", text6); 
    })

    $("#block-7").val(localStorage.getItem("text7"));
    $(".lock").click(function(){
        var text7 = $("#block-7").val();
        localStorage.setItem("text7", text7);
    })

    $("#block-8").val(localStorage.getItem("text8"));
    $(".lock").click(function(){
        var text8 = $("#block-8").val();
        localStorage.setItem("text8", text8);
    })

    $("#block-9").val(localStorage.getItem("text9"));
    $(".lock").click(function(){
        var text9 = $("#block-9").val();
        localStorage.setItem("text9", text9);
    })

   $("#clear-btn").click(function() {
       localStorage.clear();
       location.reload(true);
   })

})