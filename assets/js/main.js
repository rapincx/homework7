jQuery(document).ready(function($) {
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
    });
    var affixElement = '#navbar-main';

    $(affixElement).affix({
        offset: {
            top: function () {
                return (this.top = $(affixElement).offset().top)
            }
        }
    });
});