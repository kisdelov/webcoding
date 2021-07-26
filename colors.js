var Link = {
    set_color:function (color){
        var target2 = document.querySelectorAll('a');
        var i = 0;
        while(i < target2.length){
            target2[i].style.color=color;
            i = i + 1;
        }
        
        if(color == 'white'){
            document.querySelector('h1').style.borderBottom='2px solid white'
            document.querySelector('#separate').style.borderBottom='2px solid white'
            document.querySelector('#grid #list').style.borderRight='2px solid white'
        } else {
            document.querySelector('h1').style.borderBottom='2px solid black'
            document.querySelector('#separate').style.borderBottom='2px solid black'
            document.querySelector('#grid #list').style.borderRight='2px solid black'
        }
        
    }
}

var Body = {
    set_color:function (color1, color2){
        var target = document.querySelector('body');
        target.style.background=color1;
        target.style.color=color2;
    }
}

function night_day_handler(self){
    if(self.value == 'Night'){
        Body.set_color('black', 'white')
        Link.set_color('white')
        self.value = 'Day';
    } else {
        Body.set_color('white', 'black')
        Link.set_color('black')
        self.value = 'Night';

    }
}