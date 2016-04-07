			$("#addOne").click(function() {
				var value = $("#name").val();
				$("ul").append("<li>" + value + "</li>");
				});
			$("#clear").click(function(){
				$("ul").empty();
			});
			
			$("#list").on("click", "li", function(){
				$(this).toggleClass('purchased');
			});