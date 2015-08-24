(function($){
  $(function(){

   // $('.button-collapse').sideNav();
      $('.button-collapse').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: false, // Activate on hover
      gutter: 20, // Spacing from edge
      belowOrigin: false // Displays dropdown below the button
    });

   //paralax
      $('.blueprint::after').parallax();

    new WOW().init();
        


        
        

  }); // end of document ready
})(jQuery); // end of jQuery name space