class Paralelogramma {
    // Terület számítása magassággal és oldallal
    static teruletMagassaggal(oldal: number, magassag: number): number {
        return oldal * magassag;
    }

    // Terület számítása szöggel és két oldallal
    static teruletSzoggel(oldal1: number, oldal2: number, szogRad: number): number {
        return oldal1 * oldal2 * Math.sin(szogRad);
    }
}

// Tesztelés
const oldal = 5;
const magassag = 8;
const szogRad = Math.PI / 3; // 60 fok radiánban

const teruletMagassaggal = Paralelogramma.teruletMagassaggal(oldal, magassag);
const teruletSzoggel = Paralelogramma.teruletSzoggel(oldal, oldal, szogRad);

console.log('Paralelogramma területe magassággal:', teruletMagassaggal); // Eredmény 40
console.log('Paralelogramma területe szöggel és két oldallal:', teruletSzoggel); // Eredmény kb. 21.65