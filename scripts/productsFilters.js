$(function () {
    var $foodNav = $('#food-info-top-bar');

    var $productsFilterMenu;
    var $productsOrderMenu;
    var $productOptions = $('.product-options');

    var $orderByExpiration = $foodNav.find('#food-sort-expiration');
    $orderByExpiration.on('click', function () {
        var sorted = $('#products .product-container').sort(sortByExpirationDate);

        $('#products').empty().append(sorted);
    });

    $('#food-info-top-bar-categories').on('click', 'li', function (ev) {
        var categoryTitle = ev.target.innerHTML.toLowerCase();

        $.each($('.product-container'), function () {
            var type = $(this).find('.product-type')[0].innerHTML.toLowerCase();

            if (categoryTitle !== type) {
                $(this).hide();
            }
            else {
                $(this).show();
            }
        });
    });

    $('.product-container').on('click', function () {
        var $this = this;
        $this.next('.product-options').slideDown();
    });

    function sortByExpirationDate(first, second) {
        var remainingDaysFirst = $(first).find('span').text();
        var remainingDaysSecond = $(second).find('span').text();

        return parseInt(remainingDaysFirst) > parseInt(remainingDaysSecond) ? 1 : -1;
    }
});
