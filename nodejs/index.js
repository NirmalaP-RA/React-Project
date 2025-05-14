// in node js type name of key we define is commonjs using require
const data=require('./data.js');
//  require use for taking data from another file in nodejs which contain type of common js
// console.log(data)
// console.log(data.a);
console.log(data.add());
// <--------------->
console.log('hello world');
// <------------->

var a=5;
var b=10;
var sum=a+b;
console.log(sum);

// <------------------>
var numbers=[54,32,65,87,12];
console.log(numbers[2]);

// <----------------->
function addition(){
    var a=45;
    var b=15;
    console.log(a+b);
}
addition();
// const addition=require('./calculation.js');
// called  addition variable 
// <---------------------------------->

function subtraction(){
    var a=45;
    var b=15;
    console.log(a-b);
}
subtraction();
// <-------------------------------------------------------------------------------------------------->
// introduction of node js:
// step1: download & install nodejs from browser with Lts(stable version) version.
// step2:node js come with two package
//      2.1:npm(node package manager)
//      ex: watch movie after download
//      2.2:npx(node package executer)
//      ex:online watch movie
// step3:node js use for both frontend and backend
// *node js is backend javascript run time environment
// *run on v8 javascript engine(google's open source high performance js and web assembly engine) & execute java script code outside a web browser
// <---------------------->
//     node js:
//     *package:
                // open command prompt and check installation related confirmation by pressing command
                // 1.node -v
                // 2.npm -v
                // 3.npx -v
//     *manager(npm)
//     *react js(run & build)

// <--------------------------->
// node js use to run java script code
// ->create simple folder and create file in it with extension of js:index.js file
// -> if you open it directly on browser then you can see that output not show on browser it shows your code in text Form.
// ->uptonow now we are using html file to show o/p on console.
// ->so open index.js file with terminal
// ->press command:ls
//                 :node index.js
// o/p generated on console using terminal but still not on browser

// <--------------------------->

// process of manual file creation:
// steps:project setup in nodejs
// step1:create folder
// step2:create file with js extention:index.js
// step3:open with terminal to get output because output not show on browser
// step4:press command:nodejs index.js to show output on terminal

// <----------------------------->
// install global package:nodemon
// nodemon help to reduce run time,no need to run project again and again to get output
// search on browser:nodemon npm copy given command of installation
// press command:npm install -g nodemon

//  step5:to avoid repeatetion of command to show output we install nodemon with global

// 3way to run project on nodemon:
// 1:nodemon filename.js(generate output line by line)
// 2:node filename
// 3:nodemon
// note:if you want to close between press ctrl+c
// <-------------------------------->
// 
// step6:we need package.json file to create third party module which give node_module folder 
// command to get package.json
// <----------------------->
// #in case of node js:

// step8:  press command : npm init 
// by default it ask question regarding your project name etc. do whatever changes you want if not want dont do
// it create sample file which inserted in package.json file
// before command you have only one file that is index.js but after that you see two more file name of package
// in node js if you want to use third party module you have to create manually
// <--------------------------->
// ##in case of react js :
// upto now we have file extension with js in node js but in react we use file name with .jsx extension (means java script +xml)
// to use third party module  press command :npm init -y
// now you see node_module folder in your project folder where having two new  file
// react automatically create package.json file or package-Lock.json
// <---------------------------->

// ###to install any third party module use command:npm i package name
// ex: npm i bootstrap
    //  :npm i react
// always remember  before sharing any project of react delete node_module folder because it contain huge space.
// so i am sure you are confusing that than how can we run are code:press coomand to reinstall it:npm i 
// it will firstly check package.json file having or not if having then it check its dependency in package.json file and reinsall it
// in package.json file you see "type" name of key where  we define two things:
// 1:if we are working using node js then it type will be common.js
// in which we use require & export method
// here i am using index.js file and data.js file for its practice

// 2:if we working on react js then its type will be Module.js
// in this we use import & export method
// and for i am using calculation.js and Server.js file
// "main": "server.js", here we change main file from index.js to server.js in package.json file for a while
// <------------------------------------------>
// dom has two type:
// 1:real dom that is used in JS
// 2:virtual dom that is used in react js