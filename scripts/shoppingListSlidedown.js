$(function () {
    var $shoppingListContainer = $('#shopping-list');
    console.log($shoppingListContainer);

    $shoppingListContainer.on('click', function() {
        console.log('clicked!');

        if ( $( "div:first" ).is( ":hidden" ) ) {
            $shoppingListContainer.find('.shopping-list-products-container').show( "slow" );
        } else {
            $shoppingListContainer.find('.shopping-list-products-container').slideUp();
        }
    })

});
