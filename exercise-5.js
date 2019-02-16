//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-5_Exercise-5
//----------------------------------------------------------
function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if (Math.floor(angka / 10) === 0) {
        return angka;
    } else {
        return kaliTerusRekursif(angka % 10 * kaliTerusRekursif(Math.floor(angka / 10)));
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6