var Pangram = function(input) {
    this.text = input;
};


Pangram.prototype.isPangram = function() {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var flag;
    var separators = / _[0-9]+/;
    alphabet = alphabet.split('');
    this.text = this.text.replace(separators, '');
    this.text = this.text.toLowerCase();
    
    for (var i = 0; i < alphabet.length; i++) {
        if (this.text.indexOf(alphabet[i]) >= 0) {
            flag = true;
        } else {
            return false;
        };
    }
    return flag;
};

module.exports = Pangram;

