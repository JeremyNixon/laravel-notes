// This flag will help us know if we need to clear the display div
var reset_next=!1;$("button").click(function(){var value=$(this).html();if(value=="="){var total=eval($("#display").html());$("#display").html(total);reset_next=!0}else if(reset_next){$("#display").html(value);reset_next=!1}else $("#display").append(value)});