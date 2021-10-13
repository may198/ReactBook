//Block-scope Variales

import { PRIORITY_ABOVE_NORMAL } from "constants";
import { reject } from "q";

//normal variables
    function app(){
        var num = 1;
        if(true){
            return num;
        }
    }
    console.log(app());

//block-scope variables(let/const)
//allow property changes in (const) variables when it's an object{key:value} , otherwise it can't be changed
    const user = {name:'bob'};
    user.name='tom';
    console.log(user);


//Map,Filter,Reduce(important for later use)
//produce another array depend on curent array(more systematic way in working with arrays)
    
    //Map function (.map())
    const num=[1,2,3];
    const res=num.map(function(n){
        return n+1;
    })
    console.log(res);

    //Filter function (.filter())
    const num1=[1,2,3,4];
    const res1=num1.filter(function(n){
        return n % 2;
    });
    console.log(res1);

    //Reduce function (.reduce(previous,current)), accept two argument
    //return one result
    const num3=[1,2,3,4];
    const res3=num1.reduce(function(n,a){
        return n+a;
    });
    console.log(res3);

//Arrow Function
    const num4=[3,2,3];
    const res4=num4.map(n => n+1); 
    console.log(res4);//(or)
    console.log([3,2,3].map(n=>n+1))

    const res5=num4.reduce((a,b) => a+b);
    console.log(res5)

//Destructuring
//Destructue the arrays and objects(key:value)

    const addition = {fnum:1,snum:5};
    function showaddition({fnum,snum}) {
        return fnum + ' + ' + snum + ' is 6';
    }
    console.log(showaddition(addition));


//String Interpolation ( using $ and ` instead of + when concatinating strings)

    const newuser = { newname:'echo', position:'my love'};
    function showuser({newname,position}){
        return ` ${newname} is ${position}.`;
    }
    console.log(showuser(newuser));


///////////////////////////////////////////////////////////////////////////////////////////////////////////


//Javascript Callback function

    function add(nums,solve,reject){
        if(Array.isArray(nums)){
            let result = nums.reduce((a,b)=>a+b);
            return result;
        }else{
            reject();
        }
    }

    const answer = add([1,2],solve=>{
            console.log(`Result is : ${result}`);
        },()=>{
            console.log('Something Wrong!!!');
        });

    console.log(answer);


///////////////////////////////////////////////////////////////////////////////////////////////////

//ES6 Promises

    function adding(nums) {
        return new Promise((solve,reject)=>{
            if(Array.isArray(nums)){
                let result = nums.reduce((a,b)=>a+b);
                solve(result);
            }else{
                reject();
            }
        });
        
    }

    const ans = adding([1,2]);
    ans.then(res=>{
        console.log(`Result is : ${res}`)
    });

    const ans2 = adding([2,3]).then(r=>{
            console.log(`Result: ${r}`);
        }).catch(()=>{
            console.log('Something Wrong!');
        });



    function multiply(number) {
        return new Promise((multi,cancle)=>{
            if(Array.isArray(number)){
            let result = number.reduce((a,b)=>a*b);
            multi(result);
            }else{
                cancle();
            }
        });
    }

    multiply([2,3]).then(res=>{
        console.log(`Mutiplication : ${res}`);
    }).catch(()=>{
        console.log('Something Wrong!')
    })

//Chain of then() functions, then() function return a Promise everytime, so can chain the function
    multiply([2,3]).then(a=>{
        return a*2;
    }).then(b=>{
        return b*3;
    }).then(c=>{
        console.log(`Final Result: ${c}`)
    })


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//async and await , twice() is a function that doesn't need to wait until finish and let the another code run simutaneouesly
//so, the code "This work first" render frist and then twice() function done

async function twice(num){
    let answer = await multiply(num);
    console.log(`Twice is ${answer}`);
}

twice([2,2]) // it won't work when the parameter isn't array, any reject function won't run, this is b/c of async
console.log('This work first')


//To catch reject() function of the Promise
async function multipli(num){
    try{
        let answer = await multiply(num);
    console.log(`Twice is ${answer}`);
    }
    catch{
        console.log('Something Wrong!')
    }
}

multipli(1) // now it catch the reject function
