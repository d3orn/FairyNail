$(document).foundation()
$(document).ready(function(){$("input, textarea").blur(function(){$(this).val()?$(this).addClass("used"):$(this).removeClass("used")})});