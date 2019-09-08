$(document).ready(function () {


    $(document).on('click', '.btn-sorting-all', function(){
        var allItems = document.getElementsByClassName("sorting-items");
        for(var i = 0; i < allItems.length; i++){
            allItems[i].style.display = "block"; 
        }
    })
    
    $(document).on('click', '.btn-sorting-video', function(){
        var allItems = document.getElementsByClassName("sorting-items");
        for(var i = 0; i < allItems.length; i++){
            if(allItems[i].classList.contains("sort-class-video")){
                allItems[i].style.display = "block";
            } else {
                allItems[i].style.display = "none";
            }  
        }
    });

    $(document).on('click', '.btn-sorting-book', function(){
        var allItems = document.getElementsByClassName("sorting-items");
        for(var i = 0; i < allItems.length; i++){
            if(allItems[i].classList.contains("sort-class-book")){
                allItems[i].style.display = "block";
            } else {
                allItems[i].style.display = "none";
            }  
        }
    });

    $(document).on('click', '.btn-sorting-other', function(){
        var allItems = document.getElementsByClassName("sorting-items");
        for(var i = 0; i < allItems.length; i++){
            if(allItems[i].classList.contains("sort-class-other")){
                allItems[i].style.display = "block";
            } else {
                allItems[i].style.display = "none";
            }  
        }
    });



});