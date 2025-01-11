//using a netsted for loop making the below output:

/*
1.
* * * * *
* * * * *
* * * * * 
* * * * * 
* * * * *

2. 
* 
* * 
* * *
* * * *
* * * * *

*/

for(let i = 1;i<=5;i++){
    for(let j=1;j<=5;j++ ){
        if(i>=j){
        document.writeln("*");
        }
    }
    document.writeln("<br>");
}
