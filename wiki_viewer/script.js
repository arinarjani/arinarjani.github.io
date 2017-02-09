fetch("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=psp&namespace=*").then(function(response){return response.json()}).then(function(json){console.log(json)})
