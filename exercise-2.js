//----------------------------------------------------------
// Muhammad Ramadhoni
// Batch 29 Classic Fox 2019
// Week-5_Exercise-2
//----------------------------------------------------------
function changeVocals (str) {
    //code di sini
    var dict = [
        ["a", "b"], ["i", "j"], ["u", "v"], ["e", "f"], ["o", "p"]
    ]
    var strArr = str.split("");

    for (var i = 0; i < strArr.length; i++) {
        for (var j = 0; j < dict.length; j++) {
            if (strArr[i] === dict[j][0]) {
                strArr[i] = dict[j][1];
                // console.log(strArr, "masuk");
            } else if (strArr[i].toLowerCase() === dict[j][0]) {
                strArr[i] = dict[j][1].toUpperCase();
            }
        }
    }
    return strArr.join("");
}

function reverseWord (str) {
    //code di sini
    var output = "";
    
    for (var i = str.length - 1; i > -1; i--) {
        output += str[i];
    }

    return output;
}

function setLowerUpperCase (str) {
    //code di sini
    var strArr = str.split("");

    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] === strArr[i].toLowerCase()) {
            strArr[i] = strArr[i].toUpperCase();
        } else if (strArr[i] === strArr[i].toUpperCase()) {
            strArr[i] = strArr[i].toLowerCase();
        }
    }

    return strArr.join("");
}

function removeSpaces (str) {
    //code di sini
    var output = "";

    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            output += str[i];
        }
    }

    return output;
}

function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    } else {
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'  