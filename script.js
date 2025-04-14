let lastTrailTime = 0;
document.addEventListener("mousemove", function(e) {
        const now = Date.now();
        if (now - lastTrailTime > 70) { 
            lastTrailTime = now;
        const trail = document.createElement('div');
        trail.className = "mouse-trail";
        trail.style.left = e.pageX + "px";
        trail.style.top = e.pageY + "px";
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.remove();
        }, 500);
    }
});

document.getElementById('v-pw').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        verifyPassword(); 
    }
});

function verifyPassword() {
    var password = document.getElementById('v-pw').value;
    var correctPws = ["samgyupsal", "samgy", "samsung", "sam"];

    if (correctPws.includes(password)) {
        var unlockedTab = document.getElementById('about');
        unlockedTab.classList.add('visible');
        document.getElementById('v-pw').value = "welcome to sam's profile!";

        var image1 = document.getElementById('img-1');
        
        image1.style.opacity = 0;

        setTimeout(function() {
            image1.src = "https://i.pinimg.com/474x/56/98/f7/5698f7024221bd9f440a2f0a743b538c.jpg";
            image1.style.opacity = 1; 

            setTimeout(function() {
                image1.style.border = "5px solid rgb(29, 30, 32)";
                image1.style.width = "116px";
                image1.style.height = "116px";
            }, 500);
        }, 500); 

        var userName = document.getElementById('username');
        userName.style.opacity = 0;
        setTimeout(function() {
            userName.textContent = "About SAM ?!";
            userName.style.opacity = 1;
        }, 500);

        var image2 = document.getElementById('img-2')
        image2.style.opacity = 0;

        setTimeout(function() {
            image2.src = "https://i.pinimg.com/736x/7c/6b/72/7c6b72cdd7cf0022693d139eac4e9ca6.jpg";
            image2.style.opacity = 1; 

            setTimeout(function() {
                image2.style.border = "5px solid rgb(29, 30, 32)";
                image2.style.width = "116px";
                image2.style.height = "116px";
            }, 500);
        }, 500); 

    } else {
        window.alert('Sorry, wrong password! the passwords are given in the github page:)');
    }
}
document.getElementById('button1').addEventListener('click', function() {
    var desc3 = document.querySelector('.desc3');
    var desc4 = document.querySelector('.desc4')

    desc3.style.opacity = 0;
    desc4.style.opacity = 0;

    setTimeout(function() {
        desc3.innerHTML = "DNI .. homophobic, racist, ableist, idk basic dni criteria, extremely dry";
        desc3.style.opacity = 1;
        desc4.innerHTML = "BYF .. I spam a lot :) just lmk if u want me to stop, i text daily, inactive sometimes bc of school";
        desc4.style.opacity = 1;
    }, 500);

});
document.getElementById('button2').addEventListener('click', function() {
    var desc3 = document.querySelector('.desc3');
    var desc4 = document.querySelector('.desc4')

    desc3.style.opacity = 0;
    desc4.style.opacity = 0;

    setTimeout(function() {
        desc3.innerHTML = "ig : @giovannieiieiei";
        desc3.style.opacity = 1;
        desc4.innerHTML = "snap : @n0urou";
        desc4.style.opacity = 1;
    }, 500);

});
document.getElementById('button3').addEventListener('click', function() {
    var desc3 = document.querySelector('.desc3');
    var desc4 = document.querySelector('.desc4');

    desc3.style.opacity = 0;
    desc4.style.opacity = 0;

    setTimeout(function() {
        desc3.innerHTML = "I love .. <i>drawing</i>, painting, coding, reading, my friends !<i>!</i>";
        desc4.innerHTML = "I don't like .. <i>chemistry</i>, math, bugs";
        desc3.style.opacity = 1;
        desc4.style.opacity = 1;
    }, 500);

});
    

