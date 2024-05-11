function generateHTML() {
    var container = document.getElementById("container");
    var dataScript = document.getElementById("data");
    var jsonData = JSON.parse(dataScript.textContent);
    
    jsonData.forEach(function(item) {
      var div = document.createElement("div");
      div.className = "paire " + item.paire;
      var innerDiv = document.createElement("div");
      innerDiv.className = "paire-inner";
      var contentDiv = document.createElement("div");
      contentDiv.className = "content";
      contentDiv.textContent = item.content;
      innerDiv.appendChild(contentDiv);
      div.appendChild(innerDiv);
      container.appendChild(div);
    });
  }

  $(document).ready(function(){
    generateHTML();
});
