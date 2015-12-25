
        // document.getElementById("disapear").onclick=function(){
        //     document.getElementById("box").style.visibility="hidden";
        //     // this.style.display="none";
        // }
        function getRandomColor() {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var i = 0; i < 6; i++ ) {
                color += letters[Math.floor(Math.random() * 15)];
            }
            return color;
        }

        var clickedTime;var createdTime;var reactionTime;
        function makeBox(){

            createdTime=Date.now();
            var colorRandom = getRandomColor();
            var num = Math.random()*5000;
            setTimeout(function(){
            if(Math.random() > 0.5)
            {
                document.getElementById("box").style.backgroundColor=colorRandom;
                document.getElementById("box").style.borderRadius="200px";
                document.getElementById("box").style.display="block";
            }
            else
            {
                document.getElementById("box").style.backgroundColor=colorRandom;
                document.getElementById("box").style.borderRadius="200px";
                document.getElementById("box").style.display="block";
            }
           
            },num);
        }
        makeBox();
        document.getElementById("box").onclick=function(){

            clickedTime = Date.now();

            reactionTime = (clickedTime-createdTime)/1000;
            document.getElementById("time").innerHTML=reactionTime;
            // alert(reactionTime);
            this.style.display="none";
            makeBox();
        }


        var divId="firstDiv";

        // document.getElementById("textChanger").onclick=function(){
        //     // alert("hi");
        //     document.getElementById("firstDiv").innerHTML="This is awesome";
        // }
        // alert("page loaded");
        document.getElementById("textChanger").onclick=function(){
            // alert("hi");
            document.getElementById("firstDiv").innerHTML="This is awesome";
        }
        document.getElementById("textAppender").onclick=function(){
            // alert("hi");
            document.getElementById("secondDiv").innerHTML+= document.getElementById("firstDiv").innerHTML;
        }
        document.getElementById("textCreator").onclick=function(){
            // alert("hi");
            document.getElementById("emptyDiv").innerHTML="<ul><li>cat</li><li>dob</li></ul>";
        }
  