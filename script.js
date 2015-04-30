/* Exercise 1: Wish list */
/*$(document).on('click','#add-to-list', function() {
	var list = $("#items ol");
	var value = $("#item").val();
	console.log(value);
	var wish = '<li id = "pending">' + value + '</li>';
	list.append(wish);

});*/

$(document).ready(function() {

	$("#item").focus();

	function addToList(value) {
		var list = $("ol#items");   // it is $("ol#items") and not $("#items ol")
		var wish = '<li class = "pending">' + value + 
						'<span class="label pending">Pending</span>' + 
				  	'</li>';
		list.append(wish);
		updateTotal();
	}

	var button = $("#add-to-list");
	button.click(function() {
		var value = $("#item").val();
		addToList(value);
	});
	//what is the difference between using a "on" function and a normal function like the above and below ones?
	$(document).on('click','.label.pending',function() {
		console.log($(this));
		$(this).switchClass("pending", "success");
		$(this).text("Done!");
		$(this).parent().switchClass("pending", "completed");
		updateTotal();
	});

	$(document).keypress(function(e) {
		if(e.which==13) {
		 	button.trigger("click");
			console.log("helkjdlfkjdklfjd");
		}
	});

	function updateTotal() {
		var pendingNumber = $(".label.pending").length;
		var sucessNumber = $(".label.success").length;
		$(".total").text("Total: Pending = " + pendingNumber + " Done = " + sucessNumber);
	}
});
