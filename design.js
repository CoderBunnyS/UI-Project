const prints = "https://api.harvardartmuseums.org/object?apikey=69722951-0855-4881-85a9-5f645f0a3b6f&hasimage=1"

fetch(prints)
  .then(res => res.json())
  .then(res => console.log("success!", res))
  .catch(err => console.log("something went wrong...", err));


    fetch(prints)
    .then(response => response.json())
    .then(response => {
 //       console.log(response)
        resPrints = response
        let randomPrint = document.querySelector("#randomPrint")
        for(i=0; i<resPrints.records.length; i++){
            console.log(resPrints)
            let printsElement = document.createElement("img")
            if (resPrints.records[i].images.length>0){
                printsElement.setAttribute("src", resPrints.records[i].images[0].baseimageurl)
                printsElement.setAttribute("width", 250)
                printsElement.setAttribute("height", 200)
                randomPrint.appendChild(printsElement)
            }
 
        }
    })

var accordion = document.querySelectorAll(".accordion");
var i

for (i=0; i< accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 500 + "px";
        }
    })
}
