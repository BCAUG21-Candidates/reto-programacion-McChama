class LCD {
  constructor(height = 3, width = 3){
    this._height = height
    this._width = width
  }
  set height(newHeight){ this._height = newHeight }
  set width(newWidth){ this._width = newWidth }

  printNumber(anyNumbers){
    const strNumbers = '' + anyNumbers
    let myNumbers = [...strNumbers].map(strNumber => NUMBERS_LCD[strNumber]),
        myLCDNumbers = '',
        myCounter = this._height - 2;
    const myNumbersLen = myNumbers.length
  
    for(let i=0; i<3; i++){ //altura
      for(let j=0; j<myNumbersLen; j++){ //anchura
        console.log(i === 1 && myCounter > 1)
        if (i === 1 && myCounter > 1){
          myLCDNumbers += myNumbers[j](this._width)[1]
          
        }
        else{
          myLCDNumbers += myNumbers[j](this._width)[i]
        }
      }
      if (i === 1 && myCounter > 1){
        i -= 1
        myCounter -= 1
      }
      myLCDNumbers += "\n"
    }
    return myLCDNumbers
  }
}

const DASH = "-",
      PIPE = "|",
      U_S = "_",
      W_S = " ",
      B_L = "\n"

const NUMBERS_LCD = {
  0: (w) => [
    `${W_S}${U_S.repeat(w-2)}${W_S}`,
    `${PIPE}${W_S.repeat(w-2)}${PIPE}`,
    `${PIPE}${U_S.repeat(w-2)}${PIPE}`
  ],
  1: (w) => [
    `${W_S}${W_S.repeat(w-2)}${W_S}`,
    `${W_S}${W_S.repeat(w-2)}${PIPE}`,
    `${W_S}${W_S.repeat(w-2)}${PIPE}`
  ],
  2: (w) => [
    `${W_S}${U_S.repeat(w-2)}${W_S}`,
    `${W_S}${U_S.repeat(w-2)}${PIPE}`,
    `${PIPE}${U_S.repeat(w-2)}${W_S}`
  ],
  3: (w) => [
    `${W_S}${U_S.repeat(w-2)}${W_S}`,
    `${W_S}${U_S.repeat(w-2)}${PIPE}`,
    `${W_S}${U_S.repeat(w-2)}${PIPE}`
  ],
  4: (w) => [
    `${W_S}${W_S.repeat(w-2)}${W_S}`,
    `${PIPE}${U_S.repeat(w-2)}${PIPE}`,
    `${W_S}${W_S.repeat(w-2)}${PIPE}`
  ],
  5: (w) => [
    `${W_S}${U_S.repeat(w-2)}${W_S}`,
    `${PIPE}${U_S.repeat(w-2)}${W_S}`,
    `${W_S}${U_S.repeat(w-2)}${PIPE}`
  ],
  6: (w) => [
    `${W_S}${U_S.repeat(w-2)}${W_S}`,
    `${PIPE}${U_S.repeat(w-2)}${W_S}`,
    `${PIPE}${U_S.repeat(w-2)}${PIPE}`
  ],
  7: (w) => [
    `${W_S}${U_S.repeat(w-2)}${W_S}`,
    `${W_S}${W_S.repeat(w-2)}${PIPE}`,
    `${W_S}${W_S.repeat(w-2)}${PIPE}`
  ],
  8: (w) => [
    `${W_S}${U_S.repeat(w-2)}${W_S}`,
    `${PIPE}${U_S.repeat(w-2)}${PIPE}`,
    `${PIPE}${U_S.repeat(w-2)}${PIPE}`,
  ],
  9: (w) => [
    `${W_S}${U_S.repeat(w-2)}${W_S}`,
    `${PIPE}${U_S.repeat(w-2)}${PIPE}`,
    `${W_S}${U_S.repeat(w-2)}${PIPE}`,
  ],
}

const myLCD = new LCD(4,3)


// class LCD {
//   constructor(height = 3, width = 3){
//     this.height = height
//     this.width = width
//   }

//   printNumber(anyNumbers){
//     const strNumbers = '' + anyNumbers
//     let myNumbers = [...strNumbers].map(strNumber => NUMBERS_LCD[strNumber]),
//         myLCDNumbers = ''
//     const myNumbersLen = myNumbers.length
  
//     for(let i=0; i<3; i++){ //altura
//       for(let j=0; j<myNumbersLen; j++){ //anchura
//         myLCDNumbers += myNumbers[j](this.height, this.width)[i]
//         console.log("Imprimiendo ", myNumbers[j](this.height, this.width)[i])
//       }
//     }
//     return myLCDNumbers
//   }
// }

// const NUMBERS_LCD = {
//   0: (h, w) => [
//     `${W_S}${U_S.repeat(w-2)}${W_S}${B_L}`,
//     `${PIPE}${W_S.repeat(w-2)}${PIPE}${B_L}`.repeat(h-2),
//     `${PIPE}${U_S.repeat(w-2)}${PIPE}${B_L}`
//   ],
//   1: (h, w) => [
//     `${W_S}${W_S.repeat(w-2)}${W_S}${B_L}`,
//     `${W_S}${W_S.repeat(w-2)}${PIPE}${B_L}`.repeat(h-2),
//     `${W_S}${W_S.repeat(w-2)}${PIPE}${B_L}`
//   ],
//   2: (h, w) => [
//     `${W_S}${U_S.repeat(w-2)}${W_S}${B_L}`,
//     `${W_S}${U_S.repeat(w-2)}${PIPE}${B_L}`.repeat(h-2),
//     `${PIPE}${U_S.repeat(w-2)}${W_S}${B_L}`
//   ],
//   3: [" _ "," _|"," _|"],
//   4: ["   ","|_|","  |"],
//   5: [" _ ","|_ "," _|"],
//   6: [" _ ","|_ ","|_|"],
//   7: [" _ ","  |","  |"],
//   8: [" _ ","|_|","|_|"],
//   9: [" _ ","|_|"," _|"],
// }

