$(function () {
    var $foodNav = $('#food-info-top-bar');

    var $productsFilterMenu;
    var $productsOrderMenu;
    var $listedProducts = $('.product-container');

    var $orderByExpiration = $foodNav.find('#food-sort-expiration');

    $orderByExpiration.on('click', function () {

    });


    $('.product-container').on('click', function () {
        var $this = this;
        $this.next('.product-options').slideDown();
    });

    var $productOptions = $('.product-options');


    function sortByExpirationDate(first, second) {


    }
});
