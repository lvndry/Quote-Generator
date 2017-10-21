//Function that get a randome quote
jQuery(function($){ //$(document).ready(function(){
  $('#generator').on('click', function(e) {
    e.preventDefault();
    $.ajax( {
      url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
      success: function(data) {
        var post = data.shift(); // The data is an array of posts. Grab the first one.
        $('#quote-author').text('- ' + post.title);
        $('#quote-content').html("<p>" + post.content + "</p>");

        // If the Source is available, use it. Otherwise hide it.
        if (typeof post.custom_meta !== 'undefined' && typeof post.custom_meta.Source !== 'undefined') {
          $('#quote-source').html('Source:' + post.custom_meta.Source);
        } else {
          $('#quote-source').text('');
        }
      },
      cache: false
    });
  });
});

function changeColor(){
  var colors, index;

  colors = ['#427cb1', '#d57780', '#20a18d']; //array of colors
  index = Math.floor(Math.random() * colors.length);
  $("body").css("background-color", colors[index]);
  $(".generator").css("background-color", colors[index]);
}
setInterval(changeColor, 2000);
