$(function () {
    var $recipeContainer = $('#recipes-info-btn');

    $recipeContainer.on('click', function(){
        var $recipe = $('.recipe');

        $recipe.each(function(){
            var $this = $(this);
            $this.on('click', function () {
                var $description = $this.find('p');
                console.log($description);

                if ( $description.data('info') === 'hidden-description' ) {
                    $description.data('info','');
                    $description.hide( "slow" );
                } else {
                    $description.data('info', 'hidden-description');
                    $description.slideDown();
                }
            })
        })
    })

    var $productContainers = $('.product-container');

    $productContainers.each(function(){
        var $this = $(this);

        $this.on('click', function () {
            var $itemDescription = $this.find('.product-options');

            if ( $itemDescription.data('info') === 'hidden-item-description' ) {
                $itemDescription.data('info','');
                $itemDescription.hide( 1000 );
            } else {
                $itemDescription.data('info', 'hidden-item-description');
                $itemDescription.slideDown();
            }
        }).click().click();
    })
});
