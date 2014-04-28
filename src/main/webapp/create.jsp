<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>
        <link type="text/css" rel="stylesheet" href="create.css">
        <title> Create CollageJam </title>
        <script src="https://www.google.com/jsapi" type="text/javascript"></script>
        <script language="Javascript" type="text/javascript">
        google.load('search', '1');
        var selectedImages = [];

        function addPaginationLinks() {
      
        // To paginate search results, use the cursor function.
        var cursor = searcher.cursor;
        var curPage = cursor.currentPageIndex; // check what page the app is on
        var pagesDiv = document.createElement('div');
        for (var i = 0; i < cursor.pages.length; i++) {
          var page = cursor.pages[i];
          if (curPage == i) { 

          // If we are on the current page, then don't make a link.
            var label = document.createTextNode(' ' + page.label + ' ');
            pagesDiv.appendChild(label);
          } else {

            // Create links to other pages using gotoPage() on the searcher.
            var link = document.createElement('a');
            link.href="imageSearch.gotoPage("+i+');';
            link.innerHTML = page.label;
            link.style.marginRight = '2px';
            pagesDiv.appendChild(link);
          }
        }

        var contentDiv = document.getElementById('content');
        contentDiv.appendChild(pagesDiv);
      }
	

        function OnLoad() 
        {
	        // Create a search control
	      var searchControl = new google.search.SearchControl();
	      var searcher = new google.search.ImageSearch();
	      searchControl.addSearcher(searcher);
	      
	      searchControl.setSearchCompleteCallback(this, searchComplete);
	      
	      // tell the searcher to draw itself and tell it where to attach
	      searchControl.draw(document.getElementById("result"));
	      
	      // tell the searcher the number of result in each page.
	      searcher.setResultSetSize(8);
	      
	      var userInput = document.URL;
	      userInput = userInput.split("=");
	      console.log(userInput[1]);
	     
	      // execute an inital search
	    	  if ( userInput ) 
	    	  {
		     	 searchControl.execute(userInput[1]);
		      }
		      else
		      {
			      searchControl.execute("LINE LEONARD");
		      }
		      
	      
	      //searchControl.setSearchStartingCallback(this, document.prototype.OnSearchStarting);
	    }
    
	    function searchComplete(searchControl, searcher) 
	    {
	    	 
    		// Check that we got results
    		if (searcher.results && searcher.results.length > 0) 
    		{
    			// Grab our content div, clear it.
    			var contentDiv = document.getElementById('overview');
    			contentDiv.innerHTML = '';
    			
    			// Loop through our results, printing them to the page.
    			var results = searcher.results;
    			for (var i = 0; i < results.length; i++) 
    			{
	            	// For each result write it's title and image to the screen
		            var result = results[i];
		            var imageFrame = document.createElement('div');
		            imageFrame.setAttribute("class", "imageFrame");
		            
		            //var title = document.createElement('div');
		            
		            // We use titleNoFormatting so that no HTML tags are left in the 
		            // title
		            //title.innerHTML = result.titleNoFormatting;
		            var newImg = document.createElement('img');
		
		            // There is also a result.url property which has the escaped version
		            newImg.src = result.url;
		            newImg.width = 150;
		            newImg.height = 150;
		            
		            //imgContainer.appendChild(title);
		            imageFrame.appendChild(newImg);
		
		            // Put our title + image in the content
		            contentDiv.appendChild(imageFrame);
	            }
	            // Now add links to additional pages of search results.
	            addPaginationLinks(searcher);
	            }
	            }
    
    google.setOnLoadCallback(OnLoad);

    </script>
    </head>
    <body>
        <div id="mainNaviagation" class="center">
            <h1>
                CollageJam
            </h1>
        </div>
        <div id="subNavigation" class="center">
            <br>
            <h1>
                Choose Photos
            </h1>
            <br>
        </div>
        <div id="search" class="center">
        <form>
        <span class="search-input" style="opacity: 1;">
        Search for Images: 
        <input class="placeholder" type="text" name="search-photos" autocomplete="off">
        <span class="submit">
        </span>
        </span>
        </form>
        </div>
        
     
        <div id="overview">
        Loading...
        </div>
    </body>
</html>