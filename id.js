
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);


function prev() {
    let inName = document.getElementById("inName").value;
    let inCollege = document.getElementById("inCollege").value;
    let inLocation = document.getElementById("inLocation").value;
    
    
    const name = document.getElementById("name");
    const college = document.getElementById("college");
    const location = document.getElementById("location");
    
    name.innerHTML = inName;
    college.innerHTML = inCollege;
    location.innerHTML = inLocation;
    
    const canvas = document.getElementById("result");
    // canvas.height = canvas.width / 1.616;
    const ctx = canvas.getContext("2d");
    ctx.font = "15px Helvetica";

    ctx.fillStyle = "#000";
    ctx.fillText(name.innerHTML, 110, 60);
    ctx.fillText(college.innerHTML, 110, 85);
    ctx.fillText(location.innerHTML, 110, 110);
    const image = document.getElementById("imgDisplayed");
    ctx.drawImage(image, 10, 20, 80, 110);
}

function loadImage(event) {
    const image = document.getElementById("imgDisplayed");
    image.src = URL.createObjectURL(event.target.files[0]);
}

window.addEventListener('load', function() {
    document.querySelector('input[type="file"]').addEventListener('change',function(){
        if(this.files && this.files[0]){
            var img = document.querySelector('img');
            img.src = URL.createObjectURL(this.files[0]);
            img.onload = imageIsLoaded;
        }
    } )
})

function imageIsLoaded(){
    
}