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
});