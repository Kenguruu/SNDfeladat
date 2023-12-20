var Parallelogram = /** @class */ (function () {
    function Parallelogram() {
    }
    Parallelogram.prototype.calculateAreaWithHeightAndSide = function (height, side) {
        return height * side;
    };
    Parallelogram.prototype.calculateAreaWithAngleAndSides = function (angle, side1, side2) {
        var radians = (angle * Math.PI) / 180; // Átváltás radiánba
        return side1 * side2 * Math.sin(radians);
    };
    return Parallelogram;
}());
// Példa használat:
var parallelogram = new Parallelogram();
// Terület kiszámítása magassággal és oldallal
var areaWithHeightAndSide = parallelogram.calculateAreaWithHeightAndSide(5, 8);
console.log("Terület magassággal és oldallal:", areaWithHeightAndSide);
// Terület kiszámítása szöggel és két oldallal
var areaWithAngleAndSides = parallelogram.calculateAreaWithAngleAndSides(30, 6, 9);
console.log("Terület szöggel és két oldallal:", areaWithAngleAndSides);
//Ez a program egy Parallelogram osztályt definiál, amelynek két metódusa van: calculateAreaWithHeightAndSide és calculateAreaWithAngleAndSides. Ezek a metódusok a megadott paraméterek alapján számítják ki a paralelogramma területét a kért módok szerint.
//A calculateAreaWithHeightAndSide módszer magasság és oldal alapján számolja ki a területet, míg a calculateAreaWithAngleAndSides módszer szög és két oldal alapján számítja ki a területet. Az eredményeket kiírja a konzolra példaként.
