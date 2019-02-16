//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-5_Exercise-1
//----------------------------------------------------------
function sorting(arrNumber) {
    // code di sini
    var tmp = 0;
    var isSorted = false;

    while (!isSorted) {
        isSorted = true;
        for (var i = 1; i < arrNumber.length; i++) {
            if (arrNumber[i] < arrNumber[i - 1]) {
                isSorted = false;
                tmp = arrNumber[i];
                arrNumber[i] = arrNumber[i - 1];
                arrNumber[i - 1] = tmp;
            }
        }
    }
    
    return arrNumber;
}

function getTotal(arrNumber) {
    // code di sini
    var max = 0;
    var countMax = 0;
    var result = ""

    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] === max) {
            countMax++;
        } else if (arrNumber[i] > max) {
            max = arrNumber[i];
            countMax = 1;
        }
    }
    
    if (arrNumber.length !== 0) {
        result = "angka paling besar adalah " + max + " dan jumlah kemunculan sebanyak " + countMax + " kali";
    }
    
    return result;
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''