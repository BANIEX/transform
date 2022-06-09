let letterPeople = document.getElementsByClassName("letter");
for (let i = 0; i < letterPeople.length; i++){


    document.getElementsByClassName("letter")[i].addEventListener("mouseenter", function(){
        document.getElementsByClassName("letter")[i].classList.add("change");


    });
    document.getElementsByClassName("letter")[i].addEventListener("mouseout", function(){
        document.getElementsByClassName("letter")[i].classList.remove("change");


    })





}