$(function() {
  //  $('.main-nav').load("menubar.html");
    
$( ".main-nav" ).load( "menubar.html", function() {
    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1).split(".");
  
        $("#"+filename[0]).addClass("currentpage")
        .removeClass("link")
        .click(function( event ) {
            event.preventDefault();
        });
});
    $('footer').load("footer.html");   
    $("button").click(function () {
        $("ol").show();
    });
   $("#ss").html($(".q-cards div").eq(0).html());
  });

  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
      showDivs(slideIndex += n);
  }

  function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {
          slideIndex = 1;
      }
      if (n < 1) {
          slideIndex = x.length;
      }
      for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
      }
      x[slideIndex - 1].style.display = "block";
  }