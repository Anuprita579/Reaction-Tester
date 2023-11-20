var start = new Date().getTime();
        function getRandomColor(){
            var letters = '0123456789ABCDEF';
            var color = '#';
            for(var i=0; i<6; i++){
                color += letters[Math.floor(Math.random()*16)];
            }
            return color;
        }
        function move(){
            var left=Math.random()*300;
            var top=Math.random()*300;
            var wh=((Math.random()*300) + 100);
            document.getElementById("disbox").style.left = left + 'px';
            document.getElementById("disbox").style.top = top + 'px';
            document.getElementById("disbox").style.width = wh + 'px';
            document.getElementById("disbox").style.height = wh + 'px';
            document.getElementById("disbox").style.display = 'block';
            document.getElementById("disbox").style.backgroundColor=getRandomColor();
            start = new Date().getTime();
        }
        move();
        document.getElementById("disbox").onclick = function(){
            document.getElementById("disbox").style.display = 'none';
            var end = new Date().getTime();
            var x = (end - start)/1000;
            alert("Time taken is :"+ x);
            move();
        }