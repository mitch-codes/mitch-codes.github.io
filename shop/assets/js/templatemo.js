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
    $('.btn-size').click(function(){
      var this_val = $(this).html();
      $("#product-size").val(this_val);
      $(".btn-size").removeClass('btn-secondary');
      $(".btn-size").addClass('btn-success');
      $(this).removeClass('btn-success');
      $(this).addClass('btn-secondary');
      return false;
    });
    // End roduct detail

});

//my_codings

let myJsonGallery = [{
    "itemId": "Dresses",
    "itemName": "Ankara dress",
    "itemDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.",
    "imgs": ["dressAnkara.jpg", "dressAnkara2.jpg", "dressAnkara3.jpg", "dressAnkara4.jpg"],
    "itemColors": ["black", "red", "green"],
    "itemSizes": ["S", "M", "L", "XL"],
    "cost": 220
},
{
    "itemId": "Dresses",
    "itemName": "Kitenge dress",
    "itemDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.",
    "imgs": ["dressKitenge.jpg", "shop_07.jpg", "shop_08.jpg", "shop_09.jpg", "shop_10.jpg"],
    "itemColors": ["black", "red", "green"],
    "itemSizes": ["S", "M", "L", "XL"],
    "cost": 300
},
{
    "itemId": "Bottoms",
    "itemName": "sweat pants",
    "itemDescription": "its a drees what more is there",
    "imgs": ["bottomSweatPants.jpg", "shop_06.jpg", "shop_06.jpg", "shop_06.jpg", "shop_06.jpg"],
    "itemColors": ["black", "red", "green"],
    "itemSizes": ["S", "M", "L"],
    "cost": 40
},
{
    "itemId": "Bottoms",
    "itemName": "capris",
    "itemDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse. Donec condimentum elementum convallis. Nunc sed orci a diam ultrices aliquet interdum quis nulla.",
    "imgs": ["bottomCapris.jpg", "shop_06.jpg", "shop_06.jpg", "shop_06.jpg", "shop_06.jpg"],
    "itemColors": ["black", "red", "green"],
    "itemSizes": ["S", "M", "L", "XL"],
    "cost": 270
},
{
    "itemId": "Tops",
    "itemName": "blouse",
    "itemDescription": "its a drees what more is there",
    "imgs": ["topBlouses.jpg", "shop_06.jpg", "shop_06.jpg", "shop_06.jpg", "shop_06.jpg"],
    "itemColors": ["black", "red", "green"],
    "itemSizes": ["S", "M", "L"],
    "cost": 40
},
{
    "itemId": "Tops",
    "itemName": "Kimono",
    "itemDescription": "its a drees what more is there",
    "imgs": ["topKimonos.jpg", "shop_06.jpg", "shop_06.jpg", "shop_06.jpg", "shop_06.jpg"],
    "itemColors": ["black", "red", "green"],
    "itemSizes": ["S", "M", "L"],
    "cost": 40
},
{
    "itemId": "Tops",
    "itemName": "tank top",
    "itemDescription": "its a drees what more is there",
    "imgs": ["topTankTops.jpg", "shop_06.jpg", "shop_06.jpg", "shop_06.jpg", "shop_06.jpg"],
    "itemColors": ["black", "red", "green"],
    "itemSizes": ["S", "M", "L"],
    "cost": 40
},
{
    "itemId": "Wedding",
    "itemName": "wedding dresses",
    "itemDescription": "its a drees what more is there",
    "imgs": ["wedding.jpg", "wedding1.jpg", "wedding2.jpg", "wedding3.jpg"],
    "itemColors": ["black", "red", "green"],
    "itemSizes": ["S", "M", "L"],
    "cost": 40
}];

let shopCode = "";

let myqueryString = window.location.search;
let urlParams = new URLSearchParams(myqueryString);
let category = urlParams.get('category');


if(!category) {
for (let i = 0; i < myJsonGallery.length; i++){
    let itemObj = myJsonGallery[i];
    let myColorCode = "";
    let mysizes = "";
    for (let x = 0; x < itemObj['itemColors'].length; x++) {
        myColorCode += '<div style="color:'+ itemObj['itemColors'][x] +'; float:left; padding:2px;"><i class="fa fa-circle"></i></div>';
    }
    for (let y = 0; y < itemObj['itemSizes'].length; y++) {
        mysizes += itemObj['itemSizes'][y];
        if (y !== itemObj['itemSizes'].length - 1) {
            mysizes += '/';
        }
    }
    shopCode += '<div class="col-md-4">\
                        <div class="card mb-4 product-wap rounded-0">\
                            <div class="card rounded-0">\
                                <img class="card-img rounded-0 img-fluid" src="assets/img/'+ itemObj['imgs'][0] +'">\
                                <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">\
                                    <ul class="list-unstyled">\
                                        <li><a class="btn btn-success text-white" href="shop-single.html?itemId=' + i + '"><i class="fa fa-share-alt"></i></a></li>\
                                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html?itemId=' + i + '"><i class="far fa-eye"></i></a></li>\
                                        <li><a class="btn btn-success text-white mt-2" href="shop-single.html?itemId=' + i + '"><i class="fas fa-cart-plus"></i></a></li>\
                                    </ul>\
                                </div>\
                            </div>\
                            <div class="card-body" id="myCardBody">\
                                <a href="shop-single.html?itemId=' + i + '" class="h3 text-decoration-none">'+ itemObj['itemName'] +'</a>\
                                <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">\
                                    <li>' + mysizes + '</li>\
                                    <li class="pt-2">\
                                        <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>\
                                        <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>\
                                        <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>\
                                        <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>\
                                        <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>\
                                    </li>\
                                </ul>\
                                <ul class="list-unstyled d-flex justify-content-center mb-1">\
                                    <li>\
                                        ' + myColorCode +'\
                                    </li>\
                                </ul>\
                                <p class="text-center mb-0">$' + itemObj['cost'] + '</p>\
                            </div>\
                        </div>\
                    </div>';
}
}


else {
    for (let i = 0; i < myJsonGallery.length; i++){
        let itemObj = myJsonGallery[i];
        let myColorCode = "";
        let mysizes = "";
        for (let x = 0; x < itemObj['itemColors'].length; x++) {
            myColorCode += '<div style="color:'+ itemObj['itemColors'][x] +'; float:left; padding:2px;"><i class="fa fa-circle"></i></div>';
        }
        for (let y = 0; y < itemObj['itemSizes'].length; y++) {
            mysizes += itemObj['itemSizes'][y];
            if (y !== itemObj['itemSizes'].length - 1) {
                mysizes += '/';
            }
        }
        if (itemObj['itemId'] === category) {
        shopCode += '<div class="col-md-4">\
                            <div class="card mb-4 product-wap rounded-0">\
                                <div class="card rounded-0">\
                                    <img class="card-img rounded-0 img-fluid" src="assets/img/'+ itemObj['imgs'][0] +'">\
                                    <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">\
                                        <ul class="list-unstyled">\
                                            <li><a class="btn btn-success text-white" href="shop-single.html?itemId=' + i + '"><i class="fa fa-share-alt"></i></a></li>\
                                            <li><a class="btn btn-success text-white mt-2" href="shop-single.html?itemId=' + i + '"><i class="far fa-eye"></i></a></li>\
                                            <li><a class="btn btn-success text-white mt-2" href="shop-single.html?itemId=' + i + '"><i class="fas fa-cart-plus"></i></a></li>\
                                        </ul>\
                                    </div>\
                                </div>\
                                <div class="card-body" id="myCardBody">\
                                    <a href="shop-single.html?itemId=' + i + '" class="h3 text-decoration-none">'+ itemObj['itemName'] +'</a>\
                                    <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">\
                                        <li>' + mysizes + '</li>\
                                        <li class="pt-2">\
                                            <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>\
                                            <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>\
                                            <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>\
                                            <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>\
                                            <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>\
                                        </li>\
                                    </ul>\
                                    <ul class="list-unstyled d-flex justify-content-center mb-1">\
                                        <li>\
                                            ' + myColorCode +'\
                                        </li>\
                                    </ul>\
                                    <p class="text-center mb-0">$' + itemObj['cost'] + '</p>\
                                </div>\
                            </div>\
                        </div>';
        }
    }
}



$('#rowshop').html(shopCode);

let checkoutTotal = sessionStorage.getItem("cartTotal");
let totalItems = sessionStorage.getItem("noItems");
let myCartJs = JSON.parse(sessionStorage.getItem("items"));
console.log(myCartJs);

if (totalItems === null) {
    checkoutTotal = 0;
    totalItems = 0;
    myCartJs = [];
    $('#items_bubble').css("display", "none");
    $('#checkout_total').html("0");
}
else {
    $('#items_bubble').css("display", "block");
    $('#items_bubble').html(totalItems);
}

$('#addToMyCart').click(function(){
    totalItems = parseInt(totalItems) + 1;
    let searchParams = new URLSearchParams(window.location.search);
    let itemPosition = 0;
    let tempDictInd = {};

    //get url parameter and assign it to variable
    if (searchParams.has("itemId")) {
        itemPosition = searchParams.get("itemId");
    }
    tempDictInd = myJsonGallery[itemPosition];
    tempDictInd['quantity'] = $('#product-quanity').val();
    tempDictInd['mycolor'] = $('#itemColor').val();
    tempDictInd['itemSize'] = $('#product-size').val();
    tempDictInd['totalCost'] = parseInt(tempDictInd['quantity']) * parseInt(tempDictInd['cost']);
    myCartJs.push(tempDictInd);
    sessionStorage.setItem("items", JSON.stringify(myCartJs));
    sessionStorage.setItem("noItems", totalItems);
    sessionStorage.setItem("cartTotal", parseInt(checkoutTotal) + parseInt(tempDictInd['totalCost']));
    console.log(sessionStorage.getItem("noItems"));
    $('#items_bubble').css("display", "block");
    $('#items_bubble').html(totalItems);

    //alert box
    Swal.fire({
        title: "Item added to basket",
        text: "Would you like to checkout or continue shopping?",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#59ab6e",
        cancelButtonColor: "#59ab6e",
        confirmButtonText: "checkout",
        cancelButtonText: "continue shopping"
    }).then((result) => {
        if (result.isConfirmed) {
            window.open("checkout.html", "_self");
        }
        else {
            window.open("shop.html", "_self");
        }
    });
    //alert("The paragraph was clicked.");
});


$('.card-body#myCardBody').click(function(){
    let mivale = $(this).html();
    let mivalearr = mivale.split(" ")[33];
    console.log(mivalearr.split("\"")[1]);
    window.open(mivalearr.split("\"")[1], "_self");
});

