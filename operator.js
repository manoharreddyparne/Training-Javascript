console.log("These are operators")
//arthmetic operators
// additon operator
console.log(5+5);
console.log(100+100);
console.log(10+"100"); // contcatenation--> output: 10100
console.log(10+30+"Manohar"); //40Manohar
console.log("hi"+10+40); // output: hi1040
console.log("hi"+(40+50)); // based on the BODMAS rule

// subtraction operator
console.log(10-5); //subtraction
console.log("10"-5); // typecasting

// multiplication operator
console.log(5*5);
console.log(5*"5"); //typecasting

//division operator
console.log(10/5);
console.log("10"/5); //typecasting
//exponentional operator
console.log(5**5);
console.log("5"**5); //typecasting
console.log("5"**"5");
//modulus operator
console.log(30%2);
console.log(5%"5"); //typecasting
console.log("11"%2); //typecasting

//increment
{let a =10;
console.log(a);
console.log(++a); //output 11
console.log(a++); //output 11
console.log(a); // ouput 12
}
// decrement
{let b = 20;
console.log(b); // ouput 20
console.log(--b); //output 19
console.log(b--); // ouput 19
console.log(b); // ouput 18
}
// assignment operator
{let x = 10;
console.log(x+5);
console.log(x+=5);
console.log(x-=4);
console.log(x*=2);
console.log(x/3);
console.log(x%=2);
}
//relational operators

console.log(10==10); //true
console.log("10"==10); // true
// == will only check the values will not worry about the datatype

// === will check both data types and values
console.log("300" === 300); //output: false

// != operator
console.log(10!=5);
console.log("10"!=1); // will not worry about the datatype
console.log("10"!==10); // strictly not equal to
console.log(10>5);
console.log(5<10);
console.log(5<=1);
console.log(5>=5);

//logical operators:
console.log((10<5) || (40>0));
console.log((50<599) && (10>2));

