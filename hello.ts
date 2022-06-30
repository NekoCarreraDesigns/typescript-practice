type Point = {
    x: number;
    y: number;
};

function printCoord (pt: Point) {
    console.log("The x value is " + pt.x);
    console.log("the y value is " + pt.y);
}

printCoord({x: 100, y: 400});