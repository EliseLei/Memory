function generateHTML() {
    var container = document.getElementById("container");

    const data = $("#data").text();
    const jsonData = JSON.parse(data);

    
    jsonData.forEach(function(item) {
      var div = document.createElement("div");
      div.className = "paire " + item.paire;
      var innerDiv = document.createElement("div");
      innerDiv.className = "paire-inner";
      var contentDiv = document.createElement("div");
      contentDiv.className = "content";
      contentDiv.textContent = item.content + " " + item.emoji; 
      innerDiv.appendChild(contentDiv);
      div.appendChild(innerDiv);
      container.appendChild(div);
    });
  }

  $(document).ready(function(){
    generateHTML();
});
