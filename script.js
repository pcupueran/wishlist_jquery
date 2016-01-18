/* Exercise 1: Wish list */

$(document).ready(function() {

	$("#item").focus();
	var btn = $("#add-to-list");

	btn.click(function() {
		var value = $("#item").val();
		if (value !== "") {
			addWishToList(value);
			updateTotal();
		} else {
			console.log("You need to enter a wish in the input to add an item");
		}
	});

	$(document).on('click', '.label.pending', function() {
		$(this).switchClass("pending", "success");
		$(this).text("Done!");
		$(this).parent().switchClass("pending", "completed");
		updateTotal();
	});

	$(document).keypress(function(e) {
		if(e.which === 13) {
		 	btn.trigger("click");
		}
	});
});

function addWishToList(value) {
	var list = $("ol#items");
	var wish = '<li class = "pending">' + value +
						'<span class="label pending">Pending</span></li>';
	list.append(wish);
}

function updateTotal() {
	var pendingNumber = $(".label.pending").length;
	var sucessNumber = $(".label.success").length;
	$(".total").text("Total: Pending = " + pendingNumber + " Done = " + sucessNumber);
}
