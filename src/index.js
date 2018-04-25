import React from 'react';
import ReactDOM from 'react-dom';

function luckyNumber(){
    return Math.floor(Math.random()*1001);
}

function greeting(user){
    return <div><h1>Welcome {user.name}</h1><h2 className={"text-muted"} >Lucky Number is {user.luckyNumber}</h2></div>
}
const user = {
    name: "Harrison",
    luckyNumber: luckyNumber()
};


ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);
