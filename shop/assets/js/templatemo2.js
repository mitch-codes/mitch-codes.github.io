/*

TemplateMo 559 Zay Shop

https://templatemo.com/tm-559-zay-shop

*/

'use strict';
$(document).ready(function() {

    // Accordion
    var all_panels = $('.templatemo-accordion > li > ul').hide();

    $('.templatemo-accordion > li > a').click(function() {
        console.log('Hello world!');
        var target =  $(this).next();
        if(!target.hasClass('active')){
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        }
      return false;
    });
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function(){
      var this_src = $(this).children('img').attr('src');
      $('#product-detail').attr('src',this_src);
      return false;
    });
    $('#btn-minus').click(function(){
      var val = $("#var-value").html();
      val = (val=='1')?val:val-1;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    $('#btn-plus').click(function(){
      var val = $("#var-value").html();
      val++;
      $("#var-value").html(val);
      $("#product-quanity").val(val);
      return false;
    });
    // End roduct detail

});

let checkoutTotal = sessionStorage.getItem("cartTotal");
let totalItems = sessionStorage.getItem("noItems");
let myCartJs = JSON.parse(sessionStorage.getItem("items"));

if (checkoutTotal === null) {
    checkoutTotal = "0";
    $('#items_bubble').css("display", "none");
    $('#checkout_total').html("ksh " + 0);
}
else {
  $('#items_bubble').css("display", "none");
    $('#checkout_total').html("ksh " + checkoutTotal);
    
    for (let pi = 0; pi < myCartJs.length; pi++) {
      $('#cartItemBoxing').append('<div class="cartItem">\
                                <img src="assets/img/' + myCartJs[pi]['imgs'][0] +'">\
                                <div class="cartItemName">'
                                   + myCartJs[pi]['itemName'] + ' (' + myCartJs[pi]['mycolor'] + ')\
                                </div>\
                                <div class="cartItemQuantity">'
                                   + myCartJs[pi]['quantity'] +
                                '</div>\
                                <div class="cartItemCost">' + myCartJs[pi]['totalCost'] + '</div>\
                                <a onclick="removeMyItem('+pi+')"> <i class="fa-solid fa-xmark"></i></a>\
                            </div>');
    }
    $('#cartItemBoxing').append('<div class="cartItem">\
                                <div class="imgHead">\
                                </div>\
                                <div class="cartItemName">\
                                   TOTAL\
                                </div>\
                                <div class="cartItemQuantity">'
                                   + totalItems + 
                                '</div>\
                                <div class="cartItemCost">'
                                   + checkoutTotal +
                                '</div>\
                            </div>\
                            </div>');
}

//payment method select

$('.btn-size').click(function(){
  if (totalItems > 0) {
  var this_val = $(this).html().match(/<img[^>]*title="([^"]*)"/i)[1];
  if (this_val === 'paypal') {
        $("#paypal-button-container").css("display", "block");
        $("#mpesadets").css("display", "none");
        $("#mpesadetbut").css("display", "none");
        $("#coddets").css("display", "none");
  }
  else if(this_val === 'cash on delivery') {
    $("#paypal-button-container").css("display", "none");
    $("#mpesadets").css("display", "none");
    $("#mpesadetbut").css("display", "none");
    $("#coddets").css("display", "block");
    $("#coddetbut").css("display", "block");
  }
  else {
    $("#paypal-button-container").css("display", "none");
    $("#mpesadets").css("display", "block");
    $("#mpesadetbut").css("display", "block");
    $("#coddets").css("display", "none");
  }
  $("#product-size").val(this_val);
  $(".btn-size").removeClass('btn-secondary');
  $(".btn-size").addClass('btn-success');
  $(this).removeClass('btn-success');
  $(this).addClass('btn-secondary');
  return false;
}
else {
  alert("you haven't added any items to your basket");
}
});

$('#mpesadetbut').click(function(){
  event.preventDefault();
  $('input').css("border", "1px solid green");
  if ($('#fName').val() === "") {
    $('#fName').css("border", "1px solid red"); 
    console.log("missing info");
  }
  else if($('#lName').val() === "") {
    $('#lName').css("border", "1px solid red"); 
    console.log("missing info");
  }
  else if($('#pNumber').val() === "") {
    $('#pNumber').css("border", "1px solid red"); 
    console.log("missing info");
  }
  else {
    //inhouse clients summary
    /**
    let clientMessage = "Name: " + $('#fName').val() + " " + $('#lName').val() + "\nphone number: " + $('#pNumber').val() + "\nadditional info: " + $('#addInformation').val() +"\n\norder\n";
    for (let pi = 0; pi < myCartJs.length; pi++) {
      let tmppi = pi + 1;
      clientMessage += tmppi + "." + " ordered item: " + myCartJs[pi]['itemName'] + ", Color: " + myCartJs[pi]['mycolor'] +  ", Quantity: " + myCartJs[pi]['quantity'] + ", Cost: " + myCartJs[pi]['totalCost'] + "\n";
    }
    clientMessage += "TOTAL COST: " + checkoutTotal;
    **/

    //sumary to be sent out
    let clientMessage = "Name: " + $('#fName').val() + " " + $('#lName').val() + "%0Aphone number: " + $('#pNumber').val() + "%0Aadditional info: " + $('#addInformation').val() +"%0A%0Aorder%0A";
    for (let pi = 0; pi < myCartJs.length; pi++) {
      let tmppi = pi + 1;
      clientMessage += tmppi + "." + " ordered item: " + myCartJs[pi]['itemName'] + ", Color: " + myCartJs[pi]['mycolor'] +  ", Quantity: " + myCartJs[pi]['quantity'] + ", Cost: " + myCartJs[pi]['totalCost'] + "%0A";
    }
    clientMessage += "TOTAL COST: " + checkoutTotal;
    console.log(clientMessage);
    window.open("https://api.whatsapp.com/send?phone=254792549422&text="+clientMessage);
  }
});

$('#coddetbut').click(function(){
  event.preventDefault();
  $('input').css("border", "1px solid green");
  if ($('#cfName').val() === "") {
    $('#cfName').css("border", "1px solid red"); 
    console.log("missing info");
  }
  else if($('#clName').val() === "") {
    $('#clName').css("border", "1px solid red"); 
    console.log("missing info");
  }
  else if($('#cpNumber').val() === "") {
    $('#cpNumber').css("border", "1px solid red"); 
    console.log("missing info");
  }
  else {
    //inhouse clients summary
    /**
    let clientMessage = "Name: " + $('#fName').val() + " " + $('#lName').val() + "\nphone number: " + $('#pNumber').val() + "\nadditional info: " + $('#addInformation').val() +"\n\norder\n";
    for (let pi = 0; pi < myCartJs.length; pi++) {
      let tmppi = pi + 1;
      clientMessage += tmppi + "." + " ordered item: " + myCartJs[pi]['itemName'] + ", Color: " + myCartJs[pi]['mycolor'] +  ", Quantity: " + myCartJs[pi]['quantity'] + ", Cost: " + myCartJs[pi]['totalCost'] + "\n";
    }
    clientMessage += "TOTAL COST: " + checkoutTotal;
    **/

    //sumary to be sent out
    let clientMessage = "Name: " + $('#cfName').val() + " " + $('#clName').val() + "%0Aphone number: " + $('#cpNumber').val() + "%0Aadditional info: " + $('#caddInformation').val() +"%0A%0Aorder%0A";
    for (let pi = 0; pi < myCartJs.length; pi++) {
      let tmppi = pi + 1;
      clientMessage += tmppi + "." + " ordered item: " + myCartJs[pi]['itemName'] + ", Color: " + myCartJs[pi]['mycolor'] +  ", Quantity: " + myCartJs[pi]['quantity'] + ", Cost: " + myCartJs[pi]['totalCost'] + "%0A";
    }
    clientMessage += "TOTAL COST: " + checkoutTotal;
    console.log(clientMessage);
    window.open("mailto:mitchbonda@gmail.com?subject=New Order For You&body="+clientMessage);
  }
});


function removeMyItem(myId) {
  let reducedCost = myCartJs[myId]["totalCost"];
  console.log(myCartJs);
  myCartJs.splice(myId, 1);
  sessionStorage.setItem("items", JSON.stringify(myCartJs))
  sessionStorage.setItem("noItems", parseInt(totalItems) - 1);
  sessionStorage.setItem("cartTotal", parseInt(checkoutTotal) - parseInt(reducedCost));
  location.reload();
}