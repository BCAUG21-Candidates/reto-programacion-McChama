class LCD {
  constructor(height = 1, width = 3){
    this._height = Math.abs(height)
    this._width = Math.abs(width)
  }
  set height(newHeight){ this._height = newHeight }
  set width(newWidth){ this._width = newWidth }

  get height() { return this._height }
  get width() { return this._width }

  generateData(anyNumbers){
    let myNumbers = [...('' + anyNumbers)].map(strNumber => NUMBERS_LCD[strNumber](this._height, this._width)),
        LCDNumbers = '';
    const numberLength = myNumbers[0].length,
          numbersLength = myNumbers.length;
  
    for(let i=0; i<numberLength; i++){
      for(let j=0; j<numbersLength; j++) LCDNumbers += myNumbers[j][i]
      LCDNumbers += "\n"
    }
    return LCDNumbers
  }
  printNumber(anyNumbers) { 
    const LCD_NUMBER = this.generateData(anyNumbers)
    document.getElementById("App").innerHTML = `<pre>${LCD_NUMBER}</pre>`
    this.printValues()
    console.log(LCD_NUMBER) 
  }
  printInstructions(){
    console.log("To try a number, please use myLCD.printNumber(<your number goes here>)")
    console.log("If you want to change the heigth, use myLCD.heigth = <your number goes here>\nThen use again myLCD.printNumber(<your number goes here>)")
    console.log("If you want to change the width, use myLCD.width = <your number goes here>\nThen use again myLCD.printNumber(<your number goes here>)")
  }
  printValues(){
    console.log(`
    CURRENT VALUES
      Heigth = ${this._height}  Width = ${this._width}
    `)
  }
}

const DASH = "─",
      PIPE = "│",
      U_S = "_",
      W_S = " ";

let NUMBER_STRUCTURE = {
  'top':        ``,
  'middleUp':   ``,
  'middle':     ``,
  'middleDown': ``,
  'bottom':     ``
}
const NUMBERS_LCD = {
  0: (h, w) => {
    /**
      top:             __ 
      middleUp:       │  │ 
      middle:           
      middleDown:     │  │
      bottom:          ── 
    */
    NUMBER_STRUCTURE = {
      'top':        `${W_S}${U_S.repeat(w)}${W_S} `,
      'middleUp':   `${PIPE}${W_S.repeat(w)}${PIPE} `,
      'middle':     `${W_S}${W_S.repeat(w)}${W_S} `,
      'middleDown': `${PIPE}${W_S.repeat(w)}${PIPE} `,
      'bottom':     `${W_S}${DASH.repeat(w)}${W_S} `,
    }
    let myNewNumberStructure = []

    myNewNumberStructure.push(NUMBER_STRUCTURE.top)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleUp)
    myNewNumberStructure.push(NUMBER_STRUCTURE.middle)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleDown)
    myNewNumberStructure.push(NUMBER_STRUCTURE.bottom)

    return myNewNumberStructure
  },
  1: (h, w) => {
    /**
      top:                
      middleUp:          │ 
      middle:           
      middleDown:        │
      bottom:             
    */
    NUMBER_STRUCTURE = {
      'top':        `${W_S}${W_S.repeat(w)}${W_S} `,
      'middleUp':   `${W_S}${W_S.repeat(w)}${PIPE} `,
      'middle':     `${W_S}${W_S.repeat(w)}${W_S} `,
      'middleDown': `${W_S}${W_S.repeat(w)}${PIPE} `,
      'bottom':     `${W_S}${W_S.repeat(w)}${W_S} `,
    }
    let myNewNumberStructure = []

    myNewNumberStructure.push(NUMBER_STRUCTURE.top)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleUp)
    myNewNumberStructure.push(NUMBER_STRUCTURE.middle)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleDown)
    myNewNumberStructure.push(NUMBER_STRUCTURE.bottom)

    return myNewNumberStructure

  },
  2: (h, w) => {
    /**
      top:             __ 
      middleUp:          │ 
      middle:          ──
      middleDown:     │  
      bottom:          ── 
    */

    NUMBER_STRUCTURE = {
      'top':        `${W_S}${U_S.repeat(w)}${W_S} `,
      'middleUp':   `${W_S}${W_S.repeat(w)}${PIPE} `,
      'middle':     `${W_S}${DASH.repeat(w)}${W_S} `,
      'middleDown': `${PIPE}${W_S.repeat(w)}${W_S} `,
      'bottom':     `${W_S}${DASH.repeat(w)}${W_S} `,
    }
    let myNewNumberStructure = []

    myNewNumberStructure.push(NUMBER_STRUCTURE.top)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleUp)
    myNewNumberStructure.push(NUMBER_STRUCTURE.middle)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleDown)
    myNewNumberStructure.push(NUMBER_STRUCTURE.bottom)

    return myNewNumberStructure
  },
  3: (h, w) => {
    /**
      top:             __ 
      middleUp:          │ 
      middle:          ──
      middleDown:        │
      bottom:          ── 
    */

    NUMBER_STRUCTURE = {
      'top':        `${W_S}${U_S.repeat(w)}${W_S} `,
      'middleUp':   `${W_S}${W_S.repeat(w)}${PIPE} `,
      'middle':     `${W_S}${DASH.repeat(w)}${W_S} `,
      'middleDown': `${W_S}${W_S.repeat(w)}${PIPE} `,
      'bottom':     `${W_S}${DASH.repeat(w)}${W_S} `,
    }
    let myNewNumberStructure = []

    myNewNumberStructure.push(NUMBER_STRUCTURE.top)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleUp)
    myNewNumberStructure.push(NUMBER_STRUCTURE.middle)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleDown)
    myNewNumberStructure.push(NUMBER_STRUCTURE.bottom)

    return myNewNumberStructure
  },
  4: (h, w) => {
    /**
      top:              
      middleUp:       │  │ 
      middle:          ──
      middleDown:        │
      bottom:           
    */

    NUMBER_STRUCTURE = {
      'top':        `${W_S}${W_S.repeat(w)}${W_S} `,
      'middleUp':   `${PIPE}${W_S.repeat(w)}${PIPE} `,
      'middle':     `${W_S}${DASH.repeat(w)}${W_S} `,
      'middleDown': `${W_S}${W_S.repeat(w)}${PIPE} `,
      'bottom':     `${W_S}${W_S.repeat(w)}${W_S} `,
    }
    let myNewNumberStructure = []

    myNewNumberStructure.push(NUMBER_STRUCTURE.top)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleUp)
    myNewNumberStructure.push(NUMBER_STRUCTURE.middle)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleDown)
    myNewNumberStructure.push(NUMBER_STRUCTURE.bottom)

    return myNewNumberStructure
  },
  5: (h, w) => {
    /**
      top:             __
      middleUp:       │   
      middle:          ──
      middleDown:        │
      bottom:          ── 
    */

    NUMBER_STRUCTURE = {
      'top':        `${W_S}${U_S.repeat(w)}${W_S} `,
      'middleUp':   `${PIPE}${W_S.repeat(w)}${W_S} `,
      'middle':     `${W_S}${DASH.repeat(w)}${W_S} `,
      'middleDown': `${W_S}${W_S.repeat(w)}${PIPE} `,
      'bottom':     `${W_S}${DASH.repeat(w)}${W_S} `,
    }
    let myNewNumberStructure = []

    myNewNumberStructure.push(NUMBER_STRUCTURE.top)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleUp)
    myNewNumberStructure.push(NUMBER_STRUCTURE.middle)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleDown)
    myNewNumberStructure.push(NUMBER_STRUCTURE.bottom)

    return myNewNumberStructure
  },
  6: (h, w) => {
    /*
      Heigth = 1, Width = 2
      top:             __ 
      middleUp:       │   
      middle:          ── 
      middleDown:     │  │
      bottom:          ── 
     */

    NUMBER_STRUCTURE = {
      'top':        `${W_S}${U_S.repeat(w)}${W_S} `,
      'middleUp':   `${PIPE}${W_S.repeat(w)}${W_S} `,
      'middle':     `${W_S}${DASH.repeat(w)}${W_S} `,
      'middleDown': `${PIPE}${W_S.repeat(w)}${PIPE} `,
      'bottom':     `${W_S}${DASH.repeat(w)}${W_S} `,
    }
    let myNewNumberStructure = []

    myNewNumberStructure.push(NUMBER_STRUCTURE.top)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleUp)
    myNewNumberStructure.push(NUMBER_STRUCTURE.middle)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleDown)
    myNewNumberStructure.push(NUMBER_STRUCTURE.bottom)

    return myNewNumberStructure
  },
  7: (h, w) => {
    /*
      Heigth = 1, Width = 2
      top:             __ 
      middleUp:          │ 
      middle:            
      middleDown:        │
      bottom:           
     */

    NUMBER_STRUCTURE = {
      'top':        `${W_S}${U_S.repeat(w)}${W_S} `,
      'middleUp':   `${W_S}${W_S.repeat(w)}${PIPE} `,
      'middle':     `${W_S}${W_S.repeat(w)}${W_S} `,
      'middleDown': `${W_S}${W_S.repeat(w)}${PIPE} `,
      'bottom':     `${W_S}${W_S.repeat(w)}${W_S} `,
    }
    let myNewNumberStructure = []

    myNewNumberStructure.push(NUMBER_STRUCTURE.top)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleUp)
    myNewNumberStructure.push(NUMBER_STRUCTURE.middle)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleDown)
    myNewNumberStructure.push(NUMBER_STRUCTURE.bottom)

    return myNewNumberStructure
  },
  8: (h, w) => {
    /*
      Heigth = 1, Width = 2
      top:             __ 
      middleUp:       │  │ 
      middle:          ── 
      middleDown:     │  │
      bottom:          ── 
    */
    NUMBER_STRUCTURE = {
      'top':        `${W_S}${U_S.repeat(w)}${W_S} `,
      'middleUp':   `${PIPE}${W_S.repeat(w)}${PIPE} `,
      'middle':     `${W_S}${DASH.repeat(w)}${W_S} `,
      'middleDown': `${PIPE}${W_S.repeat(w)}${PIPE} `,
      'bottom':     `${W_S}${DASH.repeat(w)}${W_S} `,
    }
    let myNewNumberStructure = []

    myNewNumberStructure.push(NUMBER_STRUCTURE.top)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleUp)
    myNewNumberStructure.push(NUMBER_STRUCTURE.middle)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleDown)
    myNewNumberStructure.push(NUMBER_STRUCTURE.bottom)

    return myNewNumberStructure
  },
  9: (h, w) => {
    /*
      Heigth = 1, Width = 2
      top:             __ 
      middleUp:       │  │ 
      middle:          ── 
      middleDown:        │
      bottom:          ── 
    */
    NUMBER_STRUCTURE = {
      'top':        `${W_S}${U_S.repeat(w)}${W_S} `,
      'middleUp':   `${PIPE}${W_S.repeat(w)}${PIPE} `,
      'middle':     `${W_S}${DASH.repeat(w)}${W_S} `,
      'middleDown': `${W_S}${W_S.repeat(w)}${PIPE} `,
      'bottom':     `${W_S}${DASH.repeat(w)}${W_S} `,
    }
    let myNewNumberStructure = []

    myNewNumberStructure.push(NUMBER_STRUCTURE.top)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleUp)
    myNewNumberStructure.push(NUMBER_STRUCTURE.middle)
    for (let i=0; i<h; i++) myNewNumberStructure.push(NUMBER_STRUCTURE.middleDown)
    myNewNumberStructure.push(NUMBER_STRUCTURE.bottom)

    return myNewNumberStructure
  },
}

const myLCD = new LCD(2,3)
myLCD.printInstructions()

