//* 1 lesson 
/* types data */

// let str = 'alex' //? -> string  
// let num = 123 //? -> num  
// let isMarried = true || false //? -> boolean 

// let error_one = undefined //? -> undefined 
// let error_two = null //? -> object 
// let error_three = NaN //? -> not a number || number 

// let arr = {} //? -> object 
// let obj = [] //? -> object 
  
// typeof() //? ->  is a function which determines given massive data

//* 2 lesson 
/*  concatination */
//  let name= "alex"
// let surname = "adams"
// let age = "12"
//  
//  console.log(
//     ' My name is ' + name +' My surname is ' + surname + ' I am ' + age + ' years old'
// )  

/*  interpolation */
//  let name = prompt('waht is your name?')
// let surname = "adams"
// let age = "12"

// console.log(
//     `My name is ${name} and my surname is ${surname} i am ${age} years old`
// ); 

//*3 lesson 

/* methods of string */
// console.log(
//     String.prototype //? -> shows all methods of string
// )


// let txt = 'alex hello fhahaw etuyhq5uyweaue 5uye uytytyeyteyueu tuesuesuuu'
// console.log(
//     txt.toUpperCase(), //? -> changes into capital letters
//     txt.toLowerCase() //? -> changes into `small` letters
//     txt.slice(6,11) //? -> slice letters from bedinning index to last index of letters 
//     txt.search('world'), //? -> returns the indx of words
//     txt.length //? -> gives the last indx of the text
//     txt.slice(txt.search(keyword),txt.search(keyword).length) //? slice any indicated word authomatically
//     txt.slice(txt.search("a") ,txt.search("a") + "a".length) +
//     txt.slice(txt.search('lex') , txt.search('lex') + 'lex'.length) //? -> we add 'a' to the 'lex' and result: 'alex'
//     txt.trim() //? -> removes probels
//     txt.replace('alex','max') //? -> replaces given word to another wanted
//     txt.replaceAll('hello','max') //? -> replaces all
//     txt.split('/') //? -> divides words with given symbols for ex: alex/world/gg -> alex world gg -> splits with "/"
//     txt.charAt() //? -> gives the letter which is in exact indx 
//     [] //? -> short form of charAt()
// );



// let str  =  'aaa@bbb@ccc' 
// let a = str.split("@").join("!")
// console.log(
//   a
// ) //? -> we replaced '@' to '!'

// let str = "HELLOWORLD"
// let b =  str.slice(str.search('H'), str.search('H') + 'H'.length).toUpperCase()+
//      str.slice(str.search('E'),str.search('D') + 'D'.length).toLowerCase()
// console.log(b); //? -> HELLOWORLD => helloworld



//* lesson 4
/* Math Methods */

// let num = '25.50'
// console.log(
// Math.floor(num) ,//? -> down
// Math.ceil(num),//? -> up
// Math.round(num) //? -> logical
// Math.max(num),
// Math.min(num), 
// Math.pow(5,2)
// 7**5

// parseInt(num) //? -> 25.50 => 25
// parseFloat(num) //? -> 25.50 => 25.5
// +num
// );

//* lesson 5
/* alert , prompt,confirm */
// alert('hello') //? -> returns nothing
//  let answer =confirm('18?') //? -> returns boolean
//  console.log(answer);
// let answer = prompt('how old are u ?') //? -> reutrns strings
// console.log(answer);

// let box = 'banana'
// if (box === 'banana') {
//     alert('good')
// } else{
//     alert('bad')
// }