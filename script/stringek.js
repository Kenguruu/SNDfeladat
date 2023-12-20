// Véletlenszerűen választ 3 sztringet a listából
function valasztHarmat(sportolok) {
    var valasztottak = [];
    while (valasztottak.length < 3 && sportolok.length > 0) {
        var randomIndex = Math.floor(Math.random() * sportolok.length);
        var valasztott = sportolok.splice(randomIndex, 1)[0];
        valasztottak.push(valasztott);
    }
    return valasztottak;
}
// Sztringek listája (sportolók listája)
var sportolok = [
    "Kovács Péter - Atlétika - Budapest",
    "Nagy Anna - Úszás - Debrecen",
    "Varga János - Kosárlabda - Szeged",
    "Tóth Eszter - Tenisz - Pécs",
    "Kiss Gergő - Kerékpározás - Szombathely",
    "Simon Réka - Tollaslabda - Győr",
    "Balogh Bence - Futball - Miskolc"
    // ... további sportolók
];
// Véletlenszerűen választott sportolók kiválasztása
var valasztottSportolok = valasztHarmat(sportolok);
// Kiíratás a konzolra
console.log("Véletlenszerűen kiválasztott sportolók:");
valasztottSportolok.forEach(function (sportolo) {
    console.log(sportolo);
});
//A sportolók adatait egyetlen sztringben tároljuk el, amelyet egy stringek listájában (sportolok) tárolunk. 
//A valasztHarmat függvény véletlenszerűen választ három sztringet a listából, majd ezeket kiíratja a konzolra.
//Ez a kód bemutatja, hogyan lehet véletlenszerűen kiválasztani három sztringet egy sportolók listájából TypeScript használatával.
