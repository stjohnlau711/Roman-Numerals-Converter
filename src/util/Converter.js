
var numerals = {
    "M": 1000,
    "D": 500,
    "C": 100,
    "L": 50,
    "X": 10,
    "V": 5,
    "I": 1  
};


const Converter = {
    romanToArabic(s){
        const arr = s.split('');
    let total = 0;
    let cur;
    let curVal;
    let next;
    let nextVal;
    for(let i = 0; i < arr.length; i ++){
        if(!(arr[i] in numerals)){
            return "That's not a Roman numeral dumbass";
        }
    }
    for(let i = 0; i < arr.length; i ++){
        cur = arr[i];
        curVal = numerals[cur];
        
        next = arr[i + 1];
        nextVal = numerals[next];
        
        if(curVal >= nextVal){
            total += curVal;
        } else if(curVal < nextVal){
            total -= curVal;
        } else if(curVal && !nextVal){
            total += curVal;
        }
    }
    
    return total;
    },
    arabicToRoman(num){
        if (isNaN(num))
            return "That's not a number dumbass";
        var digits = String(+num).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        return Array(+digits.join("") + 1).join("M") + roman;
    }
}

export default Converter;