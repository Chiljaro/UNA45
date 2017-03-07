jQuery(function($) {
	
	///////////////////imagenes
	$('#animateteam').waypoint(function() {
        $(this).toggleClass( 'fadeIn animated' );
   	},
    {
    	offset: '80%',
        triggerOnce: true
    });


    $('#animatedtitle').waypoint(function() {
        $(this).toggleClass( 'fadeIn animated' );
   	},
    {
    	offset: '80%',
        triggerOnce: true
    });


    $('#animateclients').waypoint(function() {
        $(this).toggleClass( 'fadeIn animated' );
   	},
    {
    	offset: '80%',
        triggerOnce: true
    });

    /////////////////////valores 
    $('#mision-contenido').waypoint(function() {
        $(this).toggleClass( 'fadeInLeft animated' );
   	},
    {
    	offset: '80%',
        triggerOnce: true
    });


    $('#vision-contenido').waypoint(function() {
        $(this).toggleClass( 'fadeInRight animated' );
   	},
    {
    	offset: '80%',
        triggerOnce: true
    });


    $('#valor-contenido').waypoint(function() {
        $(this).toggleClass( 'fadeInDown animated' );
   	},
    {
    	offset: '80%',
        triggerOnce: true
    });

});



