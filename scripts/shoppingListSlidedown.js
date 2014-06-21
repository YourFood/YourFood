$(function () {
    var $recipeContainer = $('#recipies-info-btn');

    $recipeContainer.on('click', function(){
        var $recipe = $('.recipe');

        $recipe.each(function(){
            var $this = $(this);
            $this.on('click', function () {
                var $description = $this.find('p');
                console.log($description);

                if ( $description.data('info') === 'hidden-description' ) {
                    $description.data('info','');
                    $description.show( "slow" );
                } else {
                    $description.data('info', 'hidden-description');
                    $description.slideUp();
                }
            })
        })
    })
});
