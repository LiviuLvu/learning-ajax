var request;
// check for old browser ie
if (window.XMLHttpRequest) {
   request = new XMLHttpRequest();
} else {
   request = new ActiveXObject('Microsoft.XMLHTTP');
}

//AJAX request for XML
request.open('GET', 'data.xml');
request.onreadystatechange = function() {
   if ((request.readyState === 4) && (request.status === 200)) {
      console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);
      var items = request.responseXML.getElementsByTagName('name');
      var output = '<ul>';
      for (var i = 0; i < items.length; i++) {
         output += '<li>' + items[i].firstChild.nodeValue + '</li>';
      }
      output += '</ul>';
      document.getElementById('update').innerHTML = output;

   }
};

//AJAX request for text
// request.open('GET', 'data.txt');
// request.onreadystatechange = function() {
//    if ((request.readyState === 4) && (request.status === 200)) {
//       // store targeted elements in a array
//       var modify = document.getElementsByTagName('li');
//       // loop through every element of the array and assign responseText value
//       for (var i = 0; i < modify.length; i++) {
//          modify[i].innerHTML = request.responseText;
//       }
//    }
// };
request.send();
