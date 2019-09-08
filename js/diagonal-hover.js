$(document).ready(function () {
    $(".diagonal-shape-hover_1").hover(function(){
    var diagonalShapes = document.getElementById("hover-target-1").getElementsByTagName("div");
    whiteShapesAfterTransform(diagonalShapes);
    }, function(){
    var diagonalShapes = document.getElementById("hover-target-1").getElementsByTagName("div");
    whiteShapesBeforeTransform(diagonalShapes);
    }
    );

    $(".diagonal-shape-hover_2").hover(function(){
    var diagonalShapes = document.getElementById("hover-target-2").getElementsByTagName("div");
    whiteShapesAfterTransform(diagonalShapes);
    }, function(){
    var diagonalShapes = document.getElementById("hover-target-2").getElementsByTagName("div");
    whiteShapesBeforeTransform(diagonalShapes);
    }
    );

    $(".diagonal-shape-hover_3").hover(function(){
        var diagonalShapes = document.getElementById("hover-target-3").getElementsByTagName("div");
        mixShapesAfterTransform(diagonalShapes);
        }, function(){
        var diagonalShapes = document.getElementById("hover-target-3").getElementsByTagName("div");
        mixShapesBeforeTransform(diagonalShapes);
        }
        );





        // FUNCTIONS TO MAKE SCRIPT SHORTERs
        function whiteShapesAfterTransform(diagonalShapesFunction) {
            diagonalShapesFunction[0].style.borderTop = "5vh solid #FFFFFF";
            diagonalShapesFunction[1].style.borderBottom = "5vh solid #FFFFFF";
          }
        function whiteShapesBeforeTransform(diagonalShapesFunction) {
            diagonalShapesFunction[0].style.borderTop = "35vh solid #FFFFFF";
            diagonalShapesFunction[1].style.borderBottom = "35vh solid #FFFFFF";
        }

        function mixShapesAfterTransform(diagonalShapesFunction) {
            diagonalShapesFunction[0].style.borderTop = "10vh solid #FFFFFF";
            diagonalShapesFunction[1].style.borderBottom = "10vh solid #ee4145";
        }
        function mixShapesBeforeTransform(diagonalShapesFunction) {
            diagonalShapesFunction[0].style.borderTop = "35vh solid #FFFFFF";
            diagonalShapesFunction[1].style.borderBottom = "35vh solid #ee4145";
        }
        
          
});