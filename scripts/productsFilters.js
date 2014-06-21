$(function () {
    var $productsFilterMenu;
    var $productsOrderMenu;


    $('.product-container').on('click', function () {
        var $this = this;
        $this.next('.product-options').slideDown();
    });

    var $productOptions = $('.product-options');

});
