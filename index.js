
//=================================================
// ejercicios


//### Exercise: Level 1

/*
1. Declare a variable named challenge and assign it to an initial value 'Long Days Of JavaScript'.

2. Print the string on the browser console using console.log()

3. Print the length of the string on the browser console using console.log()

4. Change all the string characters to capital letters using toUpperCase() method

5. Change all the string characters to lowercase letters using toLowerCase() method

6. Cut (slice) out the first word of the string using substr() or substring() method

7. Slice out the phrase Days Of JavaScript from Long Days Of JavaScript.

8. Check if the string contains a word Script using includes() method

9. Split the string into an array using split() method

10. Split the string Long Days Of JavaScript at the space using split() method

11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.

12. Change Long Days Of JavaScript to Long Days Of Python using replace() method.

13. What is character at index 15 in 'Long Days Of JavaScript' string? Use charAt() method.

14. What is the character code of J in 'Long Days Of JavaScript' string using charCodeAt()

15. Use indexOf to determine the position of the first occurrence of a in Long Days Of JavaScript

16. Use lastIndexOf to determine the position of the last occurrence of a in Long Days Of JavaScript.

17. Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

18. Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

19. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

20. Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' Long Days Of JavaScript '.

21. Use startsWith() method with the string Long Days Of JavaScript and make the result true

22. Use endsWith() method with the string Long Days Of JavaScript and make the result true

23. Use match() method to find all the a’s in Long Days Of JavaScript

24. Use concat() and merge ‘Long Days of' and 'JavaScript' to a single string, 'Long Days Of JavaScript'

25. Use repeat() method to print Long Days Of JavaScript 2 times
*/

// 1
console.log("-------------#1-------------")
let challengue = "Long Days Of JavaScript";
// 2
console.log("-------------#2-------------")
console.log(challengue);
// 3
console.log("-------------#3-------------")
console.log(challengue.length);
// 4
console.log("-------------#4-------------")
console.log(challengue.toUpperCase());
// 5
console.log("-------------#5-------------")
console.log(challengue.toLocaleLowerCase());
// 6
console.log("-------------#6-------------")
console.log(challengue.substring(0,4));
// 7
console.log("-------------#7-------------")
console.log(challengue.substring(5,challengue.length));
// 8
console.log("-------------#8-------------")
console.log(challengue.includes("Script"));
// 9
console.log("-------------#9-------------")
console.log(challengue.split(""));
// 10
console.log("-------------#10------------")
console.log(challengue.split(" "));
// 11
console.log("-------------#11------------")
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(","));
// 12
console.log("-------------#12------------")
console.log(challengue.replace("JavaScript","Python"));
// 13
console.log("-------------#13------------")
console.log(challengue.charAt(15));
// 14
console.log("-------------#14------------")
console.log(challengue.charCodeAt(challengue.indexOf("J")));
// 15
console.log("-------------#15------------")
console.log(challengue.indexOf("a"));
// 16
console.log("-------------#16------------")
console.log(challengue.lastIndexOf("a"));
// 17
console.log("-------------#17------------")
console.log('You cannot end a sentence with because because because is a conjunction'.indexOf("because"));
// 18
console.log("-------------#18------------")
console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf("because"));
// 19
console.log("-------------#19------------")
console.log('You cannot end a sentence with because because because is a conjunction'.search("because"));
// 20
console.log("-------------#20------------")
console.log(' Long Days Of JavaScript '.trim());
// 21
console.log("-------------#21------------")
console.log(challengue.startsWith("Long"));
// 22
console.log("-------------#22------------")
console.log(challengue.endsWith("JavaScript"));
// 23
console.log("-------------#23------------")
console.log(challengue.match("a"));
// 24
console.log("-------------#24------------")
console.log('Long Days of'.concat(" ",'JavaScript'));
// 25
console.log("-------------#25------------")
console.log(challengue.repeat(2));


/*
### Exercise: Level 2

1.  Using console.log() print out the following statement:
    
    The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
    
2.  Using console.log() print out the following quote by Mother Teresa:
    
    "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
    
3.  Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
    
4.  Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
    
5.  Check if 'on' is found in both python and jargon
    
6.  _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
    
7.  Generate a random number between 0 and 100 inclusively.
    
8.  Generate a random number between 50 and 100 inclusively.
    
9.  Generate a random number between 0 and 255 inclusively.
    
10.  Access the 'JavaScript' string characters using a random number.
    
11.  Use console.log() and escape characters to print the following pattern.
    
    1 1 1 1 1
    2 1 2 4 8
    3 1 3 9 27
    4 1 4 16 64
    5 1 5 25 125
    
12.  Use **substr** to slice out the phrase **because because because** from the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
    

### [](https://github.com/Asabeneh/30-Days-Of-JavaScript/blob/master/02_Day_Data_types/02_day_data_types.md#exercises-level-3)

*/ 
console.log("");
console.log("");

// 1
console.log("-------------#1-------------")
console.log( "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
// 2
console.log("-------------#2-------------")
console.log( "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"");
// 3
console.log("-------------#3-------------")
console.log(typeof("10") === typeof(10));
console.log(typeof(parseInt("10")) === typeof(10));
// 4
console.log("-------------#4-------------")
console.log(parseFloat("9.8") === 10);
console.log(Math.ceil(parseFloat("9.8")) === 10);

// 5
console.log("-------------#5-------------")
if("python".includes("on") && "jerga".includes("on")){
    console.log("se encuentra en ambos");
}else{
    console.log("python".includes("on"));
    console.log("jerga".includes("on"));
}
// 6
console.log("-------------#6-------------")
console.log("_I hope this course is not full of jargon_".includes("_jargon_"));
// 7
console.log("-------------#7-------------")
console.log(Math.random()*100);
// 8
console.log("-------------#8-------------")
console.log(Math.random()*(100-50)+50);
// 9
console.log("-------------#9-------------")
console.log(Math.random()*255);
// 10
console.log("-------------#10------------")
let cadenita = 'JavaScript';
console.log(cadenita.charAt(Math.trunc(Math.random()* cadenita.length-1)));
// 11
console.log("-------------#11------------")
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
// 12
console.log("-------------#12------------")
let palabrita = 'You cannot end a sentence with because because because is a conjunction';
console.log(palabrita.substring(palabrita.indexOf("because"),palabrita.lastIndexOf("because")+7));


/*

### Exercises: Level 3

1.  'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word **love** in this sentence.
    
2.  Use **match()** to count the number of all **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
    
3.  Clean the following text and find the most frequent word (hint, use replace and regular expressions).
    
        const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
    
4.  Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

*/
console.log("");
console.log("");
console.log("");



// 1
console.log("-------------#1-------------")
let oracion = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let array = oracion.toLowerCase().replaceAll(".","").split(" ");
let contador = 0;
for(let i=0;i<array.length;i++){
    if(array[i] === "love"){
        contador++;
    }
}
console.log(`la palabra 'love' se repite: ${contador} veces`);

// 1 version 2
console.log("---------#1 version 2 ---------");
let array_1 = oracion.toLowerCase().match(/love/g);
console.log(array_1.length);

// 2
console.log("-------------#2-------------")
let palabrita2 = 'You cannot end a sentence with because because because is a conjunction';
let array2 = palabrita2.match(/because/g);
console.log(array2.length);

// 3
console.log("-------------#3-------------")

let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let sentence_format = sentence.replaceAll(/[^a-zA-Z\s]/g,"");
console.log(sentence_format);
let arraysito = sentence_format.toLowerCase().split(" ");
let objetos = {};
for(let i = 0; i< arraysito.length;i++){
    if( objetos[arraysito[i]]){
        objetos[arraysito[i]] += 1;
    }else{
        objetos[arraysito[i]] = 1;
    }
}
let objetos_claves = Object.keys(objetos);
let mayor = 0;
for(let i=0; i<objetos_claves.length;i++){
    if(objetos[objetos_claves[i]] > mayor){
        mayor = objetos[objetos_claves[i]];
    }if(objetos[objetos_claves[i]] < mayor){
        delete objetos[objetos_claves[i]];
    }
}
console.log(`la palabra o palabras que mas se repiten son: `);
console.log(objetos);

// 4
console.log("-------------#4-------------")

let palabrita3 = 'Gana 5000 euros de sueldo al mes, 10000 euros de bonificación anual, 15000 euros de cursos en línea al mes';
let array3 = palabrita3.split(" ");
let expresion = /[0-9]+/;
let array4 = [];
for(let i=0;i<array3.length;i++){
    if(expresion.test(array3[i])){
       array4.push(parseInt(array3[i]));
    }
}
console.log(`los ingresos anuales totales son: ${(array4[0]+array4[2])*12 + array4[1]} euros`);

// 4 version 2
console.log("---------#4 version 2 ---------");

let array5 = palabrita3.match(/[0-9]+/g);
console.log(array5);
console.log(`los ingresos anuales totales son: ${(parseInt(array5[0])+parseInt(array5[2]))*12 + parseInt(array5[1])} euros`);




