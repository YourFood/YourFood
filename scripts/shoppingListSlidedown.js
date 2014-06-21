$(function () {
    var $shoppingListContainer = $('#recipes-content');

    $shoppingListContainer.on('click', function() {
        var $description = $shoppingListContainer.find('p');

        if ( $description.data('info') === 'hidden-description' ) {
            $description.data('info','');
            $description.show( "slow" );
        } else {
            $description.data('info', 'hidden-description');
            $description.find('.shopping-list-products-container').slideUp();
        }
    })

});
