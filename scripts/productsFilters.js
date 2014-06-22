(function () {
    var $foodNav = $('#food-info-top-bar');

    var $productsFilterMenu;
    var $productsOrderMenu;
    var $productOptions = $('.product-options');

    var $orderByExpiration = $foodNav.find('#food-sort-expiration');
    $orderByExpiration.on('click', function () {
        var sorted = $('#products .product-container').sort(sortByExpirationDate);

        $('#products').empty().append(sorted);
    });

    var $orderAlphabetically = $foodNav.find('#food-sort-alphabet').on('click', function () {
        var sorted = $('#products .product-container').sort(sortAlphabetically);

        $('#products').empty().append(sorted);
    });

    $('#food-info-top-bar-categories').on('click', 'li', function (ev) {
        var categoryTitle = ev.target.innerHTML.toLowerCase();

        $.each($('.product-container'), function () {
            var type = $(this).find('.product-type')[0].innerHTML.toLowerCase();

            if (categoryTitle === type || categoryTitle === 'all') {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    });


//    $('.product-container').on('click', function () {
//        var $this = this;
//        $this.find('.product-options').slideDown();
//    });

    function sortAlphabetically(first, second) {
        var firstName = $(first).find('h1').text();
        var secondName = $(second).find('h1').text();

        return firstName > secondName ? 1 : -1;
    }

    function sortByExpirationDate(first, second) {
        var remainingDaysFirst = $(first).find('.expires').text();
        var remainingDaysSecond = $(second).find('.expires').text();

        return parseInt(remainingDaysFirst) > parseInt(remainingDaysSecond) ? 1 : -1;
    }
}());
