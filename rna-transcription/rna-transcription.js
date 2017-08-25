function DnaTranscriber () {
    this.toRna = function(dna) {
        var rna = dna.split("");
        rna = rna.map((x) => {
            if (x === 'G') {
                return 'C';
            } else if (x === 'C') {
                return 'G';
            } else if (x === 'T') {
                return 'A';
            } else if (x === 'A') {
                return 'U';
            } else {
                throw new Error('Invalid input');
            };
        });
        return rna.join("");
    };
};

module.exports = DnaTranscriber;
