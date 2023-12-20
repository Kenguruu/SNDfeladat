// Definiáljuk a 'sportolo' típust, amely a sportolókat reprezentálja
type Sportolo = {
  nev: string;
  sportag: string;
  varos: string;
};

// Véletlenszerűen választ 3 sztringet a listából
function valasztHarmat(sportolok: string[]): string[] {
  const valasztottak: string[] = [];

  while (valasztottak.length < 3 && sportolok.length > 0) {
    const randomIndex = Math.floor(Math.random() * sportolok.length);
    const valasztott = sportolok.splice(randomIndex, 1)[0];
    valasztottak.push(valasztott);
  }

  return valasztottak;
}

// Sztringek listája (sportolók listája)
const sportolok: string[] = [
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
const valasztottSportolok = valasztHarmat(sportolok);

// Kiíratás a konzolra
console.log("Véletlenszerűen kiválasztott sportolók:");
valasztottSportolok.forEach((sportolo) => {
  console.log(sportolo);
});

//A sportolók adatait egyetlen sztringben tároljuk el, amelyet egy stringek listájában (sportolok) tárolunk. 
//A valasztHarmat függvény véletlenszerűen választ három sztringet a listából, majd ezeket kiíratja a konzolra.
//Ez a kód bemutatja, hogyan lehet véletlenszerűen kiválasztani három sztringet egy sportolók listájából TypeScript használatával.