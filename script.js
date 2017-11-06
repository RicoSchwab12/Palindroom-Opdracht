function palindroom(str) {
    var letterCounts = {};
    var letter;
    var palindromeSum = 0;
    str = str.toLowerCase();
    for (var i = 0; i < str.length; i++) {
        letter = str[i];
        letterCounts[letter] = letterCounts[letter] || 0;
        letterCounts[letter]++;
    }
    for (var letterCount in letterCounts) {
        palindromeSum += letterCounts[letterCount] % 2;
    }

    return palindromeSum < 2;
}

//Please PHP next time

function check(str){
    if (palindroom(str)){
        var p1 = document.getElementById('p1');
        p1.innerHTML = str + " is een palindroom";
    } else {
        var p1 = document.getElementById('p1');
        p1.innerHTML = str + " is geen palindroom";
    }
}