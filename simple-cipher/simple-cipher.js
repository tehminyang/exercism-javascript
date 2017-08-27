var Cipher = function(input) {
    if (input === undefined) {
        this.key = randomKey();
    } else {
        this.key = input;
    }
    if ((input === '') || !/^[a-z]+$/.test(input)) {
        throw new Error('Bad key');
    };
};

// Generate random key 100 characters long using only 'a' to 'z'.
function randomKey() {
    var randKey = '';
    for (var i = 0; i < 100; i++) {
        randKey += String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);
    };
    return randKey;
};

Cipher.prototype.encode = function(text) {
    var tempKey = this.key;
    console.log(tempKey);
    text = text.split("");
    text = text.map(function (letter, index) {
        if (index < tempKey.length) {
            if ((letter.charCodeAt() - 97) + (tempKey[index].charCodeAt() - 97) > 25) {
                return (letter.charCodeAt() - 97) + (tempKey[index].charCodeAt() - 97) - 26;    
            } else {
                return (letter.charCodeAt() - 97) + (tempKey[index].charCodeAt() - 97);
            };
        } else {
            console.log('mek');
            return (letter.charCodeAt() - 97);
        };
    });
    text = text.map((x) => String.fromCharCode(x + 97));
    text = text.join("");
    return text;
};

Cipher.prototype.decode = function(text) {
    // this.createCipher();
    var tempKey = this.key;
    text = text.split("");
    text = text.map(function (letter, index) {
        if (index < tempKey.length) {
            if ((letter.charCodeAt() - 97) - (tempKey[index].charCodeAt() - 97) < 0) {
                return (letter.charCodeAt() - 97) - (tempKey[index].charCodeAt() - 97) + 26;
            } else {
                return (letter.charCodeAt() - 97) - (tempKey[index].charCodeAt() - 97);
            };
        } else {
            return (letter.charCodeAt() - 97);
        };
    });
    text = text.map((x) => String.fromCharCode(x + 97));
    text = text.join("");
    return text;
};

// var cip = new Cipher();
// console.log(cip.key);

// var cip2 = new Cipher('iamapandabear');
// console.log(cip2.encode('iamapandabear'));
// console.log(cip2.decode('frqqru'));
// console.log('tobys secret word:',cip2.encode('toby'));
// console.log(cip2.decode('wrec'));

module.exports = Cipher;

