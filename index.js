function action() {
   document.getElementById('text').innerHTML = 'This is really cool!';
}

document.addEventListener("DOMContentLoaded", function action(){
    document.getElementById('text').innerHTML = 'This is really cool!';
    console.log("The DOM has loaded");
})
