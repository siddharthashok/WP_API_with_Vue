var postdata;

function loadpost(post_id){
  console.log("clicked");
  $.ajax({
   type: 'GET',
   url: 'http://gby05.review/s-theme-wp/wp-json/wp/v2/posts/' + post_id,
   dataType: 'json',
   success: function(data){
   // do something with the data here
    console.log(data);
    postdata["post"] = data;
   }
  });
}

$(document).ready(function(){



$.ajax({
	type: 'GET',
	url: 'http://gby05.review/s-theme-wp/wp-json/wp/v2/posts/1899',
	dataType: 'json',
	success: function(data){
	// do something with the data here
  console.log(data);
  // listViewVue["post"] = data;
  postdata = new Vue({
        el: '#post',
  			data: {
          post: data
      }

  });
	}
});



 $(document).foundation()
 });
