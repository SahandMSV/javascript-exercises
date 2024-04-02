const fibonacci = function(member) {
    member = Number(member);
    if (member == 0) {
        return 0;
    }
    else if (member < 0) {
        return "OOPS";
    }
    else {
        const sequence = [0, 1];
        
        for (let i = 1; i < member; i++) {
            const nextFibonacci = sequence[0] + sequence[1];
            sequence.push(nextFibonacci);
            sequence.shift();
        }
        
        return sequence[1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
