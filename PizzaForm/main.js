$(document).ready(init);

function init() {
    $(".navTab").click(doTabClick).eq(0).click();
    $("#pizza_button").click(tab2);
    $("#customer_button").click(tab3);
}

function doTabClick() {
    $(".divTab").hide().filter(this.hash).show();  //hides all then show the active one content
    $(".navTab").removeClass("selected");  //deselect previous tab
    $(this).addClass("selected");  //recognize new tab
}

function tab2() {
    $(".navTab").eq(1).click();
}

function tab3() {
    var size = $("input[name='size']:checked").val();
    var crust = $("input[name='crust']:checked").val();
    var ingredients =[];
    $("input[name=meats]:checked").each(function(){
        ingredients.push(this.value);
    });
    $("input[name=veggies]:checked").each(function () {
        ingredients.push(this.value);
    })
    var output = ingredients.join(", ");
    var subtotal = 0;

    $("p").html("Size: " + size + "<br/>");
    $("p").append("Crust: " + crust + "<br/>");
    $("p").append("Ingredients: " + output + "<br/>");
    $("p").append("===================================<br/>");
    //play with span within p tags

    //calculate charge amount
    if (size === "small") {
        subtotal = subtotal + 7;
    } else if (size === "medium") {
        subtotal = subtotal + 9;
    } else if (size === "large") {
        subtotal = subtotal + 12
    } else {
        alert("Please select a size.")
    }
    var meats = document.querySelectorAll('input[name="meats"]:checked').length;
    if (meats > 0) {
        subtotal = subtotal + (meats * 1.50);
    }
    var veggies = document.querySelectorAll('input[name="veggies"]:checked').length;
    if (veggies > 0) {
        subtotal = subtotal + (veggies);
    }

    var tax = subtotal * 0.051;
    var delivery = 2.00;
    var grandTtl = subtotal + tax + delivery;

    $("p").append("Subtotal: $" + subtotal.toFixed(2) + "<br/>");
    $("p").append("Sales Tax: $" + tax.toFixed(2) + "<br/>");
    $("p").append("Delivery Charge: $" + delivery + "<br/>");
    $("P").append("Grand Total: <b>$" + grandTtl.toFixed(2) + "</b><br/>");
    $("p").append("===================================<br/>");
    var name = $("#firstName").val() + " " + $("#lastName").val();
    $("p").append("Customer : " + name + "<br/>");
    var addr1 = $("#house").val() + " " + $("#street").val();
    var addr2 = $("#city").val() + ", " + $("#state").val() + " " + $("#zip").val();
    $("p").append("Address : " + "<br/>");
    $("p").append(addr1 + "<br/>");
    $("p").append(addr2 + "<br/>");

    $(".navTab").eq(2).click();
    return false;
}
