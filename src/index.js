const MORSE_TABLE = {
   '.-': 'a',
   '-...': 'b',
   '-.-.': 'c',
   '-..': 'd',
   '.': 'e',
   '..-.': 'f',
   '--.': 'g',
   '....': 'h',
   '..': 'i',
   '.---': 'j',
   '-.-': 'k',
   '.-..': 'l',
   '--': 'm',
   '-.': 'n',
   '---': 'o',
   '.--.': 'p',
   '--.-': 'q',
   '.-.': 'r',
   '...': 's',
   '-': 't',
   '..-': 'u',
   '...-': 'v',
   '.--': 'w',
   '-..-': 'x',
   '-.--': 'y',
   '--..': 'z',
   '.----': '1',
   '..---': '2',
   '...--': '3',
   '....-': '4',
   '.....': '5',
   '-....': '6',
   '--...': '7',
   '---..': '8',
   '----.': '9',
   '-----': '0',
};

function decode(expr) {
   let devidedExpr = [];
   for (let i = 1, n = 0; i <= (expr.length / 10), n < expr.length; i++, n += 10) {
      devidedExpr.push(expr.slice(n, i * 10));
   }
   const preperRes = devidedExpr.map((value) => value.replace(/^0+/, ''));
   const result = preperRes.map((value) => (value.replace(/10/g, '.')).replace(/11/g, '-'));

   return ((result.map((s) => s === "**********" ? ' ' : MORSE_TABLE[s])).join(''))
}


module.exports = {
   decode
}