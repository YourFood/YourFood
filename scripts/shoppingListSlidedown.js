$(function () {
    var $recipeContainer = $('#recipes-content');
    var $recipe = $('.recipe');
    console.log($recipe);
    console.log($recipeContainer);

    $recipe.on('click', function(){
        console.log('here');
    })

//    $recipeContainer.on('click', function() {
//        console.log('here');
//        var $description = $shoppingListContainer.find('p');
//
//        if ( $description.data('info') === 'hidden-description' ) {
//            $description.data('info','');
//            $description.show( "slow" );
//        } else {
//            $description.data('info', 'hidden-description');
//            $description.find('.shopping-list-products-container').slideUp();
//        }
//    })

});
