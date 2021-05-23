// slide function
var index=0;
show();


function show(){
  let slide= document.getElementsByClassName('slider');
    for(i=0; i < slide.length; i++) {
      slide[i].classList.remove("active");
    }
    
    index=index+1;
    if(index>slide.length){
      index=1;
    }
    slide[index-1].classList.add("active");
  
    setTimeout(show, 4000);
}

//slide fondu


// top fleche
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // icon script

