var combienDeRectangles = 20,
    listRects = [];

window.addEventListener("load", function() 
{ 
    for(var i = 1; i <= combienDeRectangles; i++)
    {
        generateRect();
    }
});

function generateRect()
{
    var carre = randRect(),
        hitTest = hitTestAll(carre);

    //Pour pas que les rectangles sortent de l'écran
    if(((carre.x + carre.w) >= window.innerWidth) || ((carre.y + carre.h) >= window.innerHeight))
    {
        hitTest = true;
    }

    if(!hitTest) {
        listRects.push(carre);
        factory("div", carre.w, carre.h, carre.x, carre.y);
    } else {
        generateRect();
    }
}

function factory(el, w, h, x, y)
{
    var objet = document.createElement(el);
    objet.style.position = "absolute";
    objet.style.width = w + "px";
    objet.style.height = h + "px";
    objet.style.left = x + "px";
    objet.style.top = y + "px";
    objet.style.backgroundColor = "rgb(" + generateNumber(0, 255) + "," + generateNumber(0, 255) + "," + generateNumber(0, 255) + ")";

    document.body.appendChild(objet);
}

function randRect()
{
    return { x: generateNumber(0, window.innerWidth), y: generateNumber(0, window.innerHeight), w: generateNumber(50, 300), h: generateNumber(50, 300) };
}

function hitTestAll(carre)
{
    for(var i = 0; i < listRects.length; i++)
    {
        if( hitTest(carre, listRects[i]) )
        {
            return true;
        }
    }

    return false;
}

function hitTest(r1, r2) 
{ 
    return (((r1.x + r1.w >= r2.x) && (r1.x <= r2.x + r2.w)) && ((r1.y + r1.h >= r2.y) && (r1.y <= r2.y + r2.h))); 
}

function generateNumber(min, max)
{
    return Math.floor(Math.random() * max) + min;
}
