var oldBrowser = function() {
   var request;
   // check for old browser ie
   if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
   } else {
      request = new ActiveXObject('Microsoft.XMLHTTP');
   }
   return request;
};

function loadJSON() {
   var request;
   if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
   } else {
      request = new ActiveXObject('Microsoft.XMLHTTP');
   }

   request.open('GET', 'data.json');
   request.onreadystatechange = function() {
      if ((request.readyState === 4) && (request.status === 200)) {
         var items = JSON.parse(request.responseText);
         var output = '<ul>';
         for (var key in items) {
            output += '<li>' + items[key].name + '</li>';
         }
         output += '</ul>';
         document.getElementById('update').innerHTML = output;
      }
   };
   request.send();
}

function loadXML() {
   var request = oldBrowser();
   // AJAX request for XML
   request.open('GET', 'data.xml');
   request.onreadystatechange = function() {
      if ((request.readyState === 4) && (request.status === 200)) {
         var items = request.responseXML.getElementsByTagName('reknown');
         var output = '<ul>';
         for (var i = 0; i < items.length; i++) {
            output += '<li>' + items[i].firstChild.nodeValue + '</li>';
         }
         output += '</ul>';
         document.getElementById('update').innerHTML = output;

      }
   };
   request.send();
}


function loadTXT() {
   var request = oldBrowser();
   // AJAX request for text
   request.open('GET', 'data.txt');
   request.onreadystatechange = function() {
      if ((request.readyState === 4) && (request.status === 200)) {
         // store targeted elements in a array
         var modify = document.getElementById('listTXT').getElementsByTagName('li');
         // loop through every element of the array and assign responseText value
         for (var i = 0; i < modify.length; i++) {
            modify[i].innerHTML = request.responseText;
         }
      }
   };
   request.send();
}
