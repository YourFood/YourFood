$(document).ready(function () {

    var $screenMenu = $('#screen-tabs-menu');

    $screenMenu.children().each(function(){
        var $this = $(this);

        $this.on('click', function () {
            $('.selected').removeClass('selected');
            $this.addClass('selected');
            $('.current').removeClass('current');
            $('#' + $this.data('info')).addClass('current');
        })
    });


    var $foodBars = $('#food-info-top-bar-categories');

    $foodBars.children().each(function(){
        var $this = $(this);

        $this.on('click', function () {
            $('.selected-catagory').removeClass('selected-catagory');
            $this.addClass('selected-catagory');
        })
    });

    var $recipeBars = $('#recipes-top-bar-categories');

    $recipeBars.children().each(function(){
        var $this = $(this);

        $this.on('click', function () {
            $('.selected-recipes').removeClass('selected-recipes');
            $this.addClass('selected-recipes');
        })
    });
});