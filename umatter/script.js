
    // Auto generate message
        var myDate = new Date();
        var hrs = myDate.getHours();
        var greet;
        if (hrs < 12){
        greet = 'Good Morning';
        }
        else if (hrs >= 12 && hrs <= 17){
            greet = 'Good Afternoon';
        }
        else if (hrs >= 17 && hrs <= 24){
            greet = 'Good Evening';
        }
        document.getElementById("autogenerateMessage").innerHTML = greet;
        

        setInterval(function(){
        var myDate = new Date();
        var hrs = myDate.getHours();
            document.getElementById("liveTime").innerHTML = myDate.getHours()+":"+myDate.getMinutes()+":"+myDate.getSeconds();
        },1000);
        // updateClock();

    // End Auto generate message
    let homeNav = document.getElementById("homeNavSec"); 
    let musicNav = document.getElementById("musicNavSec");
    let homeSection = document.getElementById("home-section");
    let musicSection =  document.getElementById("musicSection");
    
    console.log(homeNav , musicNav , homeSection , musicSection);
    
    homeNav.addEventListener("click",function(){
        window.location="home.html";
    })
    musicNav.addEventListener("click" , function(){
        window.location="music.html";
    });

    document.getElementById("sceneNavSec").addEventListener("click" , function(){
        window.location="scene.html";
    });
    document.getElementById("relax").addEventListener("click" , function(){
        window.location="relax.html";
    });
    document.getElementById("talktohope").addEventListener("click" , function(){
        window.location="talktohope.html";
    });
    
    
