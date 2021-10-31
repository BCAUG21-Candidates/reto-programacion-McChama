class LCD {
  constructor(height, width){
    this.height = height
    this.width = width
  }

  printNumber(anyNumbers){
    const strNumbers = '' + anyNumbers
    let myNumbers = [...strNumbers].map(strNumber => NUMBERS_LCD[strNumber]),
        myLCDNumbers = ''
    const myNumbersLen = myNumbers.length
  
    for(let i=0; i<3; i++){ //altura
      for(let j=0; j<myNumbersLen; j++){ //anchura
        myLCDNumbers += myNumbers[j][i]
        console.log("Imprimiendo ", myNumbers[j][i])
      }
      myLCDNumbers += "\n"
    }
    return myLCDNumbers
  }
}

const NUMBERS_LCD = {
  0: [" _ ","| |","|_|"],
  1: ["   ","  |","  |"],
  2: [" _ "," _|","|_ "],
  3: [" _ "," _|"," _|"],
  4: ["   ","|_|","  |"],
  5: [" _ ","|_ "," _|"],
  6: [" _ ","|_ ","|_|"],
  7: [" _ ","  |","  |"],
  8: [" _ ","|_|","|_|"],
  9: [" _ ","|_|"," _|"],
}
