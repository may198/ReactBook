//Block-scope Variales

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

