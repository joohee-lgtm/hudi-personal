<!-- <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <title>Google Search API Sample</title>
    <script src="https://www.google.com/jsapi"></script>
    <script type="text/javascript">

      // This code generates a "Raw Searcher" to handle search queries. The Raw Searcher requires
      // you to handle and draw the search results manually.
      google.load('search', '1');

      var videoSearch;
        function searchComplete() {

          // Check that we got results
          document.getElementById('content').innerHTML = '';
          if (videoSearch.results && videoSearch.results.length > 0) {
            for (var i = 0; i < videoSearch.results.length; i++) {

              // Create HTML elements for search results
              var p = document.createElement('p');
              var a = document.createElement('a');
              a.href="/video-search/v1/videoSearch.results[i].url;"
              a.innerHTML = videoSearch.results[i].title;

              // Append search results to the HTML nodes
              p.appendChild(a);
              document.body.appendChild(p);
            }
          }
        }

      function onLoad() {
        // Create a VideoSearch instance.
        videoSearch = new google.search.VideoSearch();

        // Set searchComplete as the callback function when a search is complete.  The
        // videoSearch object will have results in it.
        videoSearch.setSearchCompleteCallback(this, searchComplete, null);

        // Specify search quer(ies)
        videoSearch.execute('1974 Chevrolet Caprice');

        // Include the required Google branding
        google.search.Search.getBranding('branding');
      }

      // Set a callback to call your code when the page loads
      google.setOnLoadCallback(onLoad);

    </script>

  </head>
  <body style="font-family: Arial;border: 0 none;">
    <div id="branding"  style="float: left;"></div><br />
    <div id="content">Loading...</div>
  </body>
</html> -->

<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8"/>
	<title>Google AJAX Search API Sample</title>
</head>
<body style="font-family: Arial;border: 0 none;">
	<div id="content">Loading...</div>
</body>
	<script type="text/javascript" src="http://www.google.com/jsapi"></script>
	<script type="text/javascript">
		// How to search through a YouTube channel aka http://www.youtube.com/members
		google.load('search', '1');
		function OnLoad() {
			// create a search control 
			var searchControl = new google.search.SearchControl();
			var videoSearch = new google.search.VideoSearch();
			// So the results are expanded by default
			// options = new google.search.SearcherOptions();
			// options.setExpandMode(google.search.SearchControl.EXPAND_MODE_OPEN);
			// Create a video searcher and add it to the control
			// searchControl.addSearcher(new google.search.VideoSearch(), options);
			searchControl.addSearcher(videoSearch);
			searchControl.setSearchCompleteCallback(this, searchComplete);
			videoSearch.setResultSetSize(8);
			
			
			// Draw the control onto the page 
			var content = document.getElementById("content");
			searchControl.draw(content);
			//search 
			searchControl.execute("bigbang");
			/* console.log(videoSearch.results); */
		}
		var a = [];
		var p=1;
		function searchComplete(searchControl, videoSearch){
			for (var c=0; c<8 ; c++){
				a.push(videoSearch.results[c]);
			}
			if (p === 8){
				console.log(a);
				return ;
			} else {
				videoSearch.gotoPage(p);
				p++;
			}
			var cont = document.getElementById("content");
			var rest = cont.children[0].children[1];
			rest.style.display = "none";
		}
		
		google.setOnLoadCallback(OnLoad);
    </script>
</html>


<!-- <!doctype html>
<html>
  <head>
    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
  <script>
  
  
//After the API loads, call a function to enable the search box.
  function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
  }

  // Search for a specified string.
  function search() {
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet'
    });

    request.execute(function(response) {
      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');
    });
  }</script>
    <title>Search</title>
  </head>
  <body>
    <div id="buttons">
      <label> <input id="query" value='cats' type="text"/><button id="search-button" disable onclick="search()">Search</button></label>
    </div>
    <div id="search-container">
    </div>
	<script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<script src="auth.js"></script>
    <script src="https://apis.google.com/js/client.js?onload=googleApiClientReady"></script>
	<script src=".././src/js/test/ytsearch.js"></script>
  </body>
</html> -->