import { useEffect, useState} from "react";
import helloServices from "../services/helloServices";

//class - Stateful functions
//functions- stateless
//react - reactive
const Hello = () =>{


    //react hooks usestate
    const[hello, setHello] = useState("haha buset di nanaman nagwork")

    //react hooks useEffect
    //axios - tool for hhtp request promises
    //promises - asynchronous processes
    useEffect( () =>{  //anonymous function
        helloServices.getHello()
        .then(response =>{
            setHello(response.data)
        })
        .catch(err => {
            console.log("something went wrong!")
        })
    }
    )
    return hello;
}

export default Hello