function StringToInteger(value) {
    const uppercasevalue = value.toUpperCase();
    const defaultvalue = {
        'A': 1, 'B': 5, 'Z': 10, 'L': 50, 'C': 100, 'D': 500, 'R': 1000
    };

    let total = 0;

    for (let i = 0; i < uppercasevalue.length; i++) {
        let current = defaultvalue[uppercasevalue[i]];
        let next = defaultvalue[uppercasevalue[i + 1]];

        if ( current < next) {
            total += next - current; 
            i++; 
        } else {
            total += current;
        }
    }

    return total;
}
console.log(StringToInteger("AAA"));       
console.log(StringToInteger("LBAAA"));     
console.log(StringToInteger("RCRZCAB"));   
console.log(StringToInteger("CD"));        
console.log(StringToInteger("CR"));        
console.log(StringToInteger("ZC"));        
console.log(StringToInteger("AZ"));        
console.log(StringToInteger("AB"));        
