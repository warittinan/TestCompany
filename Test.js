function StringToInteger(value) {
    const defaultvalue = {
        'A': 1, 'B': 5, 'Z': 10, 'L': 50, 'C': 100, 'D': 500, 'R': 1000
    };

    let total = 0;

    for (let i = 0; i < value.length; i++) {
        let current = defaultvalue[value[i]];
        let next = defaultvalue[value[i + 1]];

        if ( current < next) {
            total += next - current; 
            i++; 
        } else {
            total += current;
        }
    }

    return total;
}


console.log(StringToInteger("AAA"));       // 3
console.log(StringToInteger("LBAAA"));     // 58
console.log(StringToInteger("RCRZCAB"));   // 1994
console.log(StringToInteger("CD"));        // 400 
console.log(StringToInteger("CR"));        // 900 
console.log(StringToInteger("ZC"));        // 90 
console.log(StringToInteger("AZ"));        // 9 
console.log(StringToInteger("AB"));        // 4
