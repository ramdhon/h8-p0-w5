//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-5_Exercise-7
//----------------------------------------------------------
function meleeRangedGrouping (str) {
    //your code here
    var output = [];
    var tampung = [];
    var tampungLagi = [];

    if (str.length !== 0) {
        output = [[], []];
        tampung = str.split(",");
        for (var i = 0; i < tampung.length; i++) {
            tampungLagi.push(tampung[i].split("-"));
            if (tampungLagi[i][1] === "Ranged") {
                output[0].push(tampungLagi[i][0]);
            } else if (tampungLagi[i][1] === "Melee") {
                output[1].push(tampungLagi[i][0]);
            }
        }
    }

    return output;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []