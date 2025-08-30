import { useState } from "react"
import { genRandom  } from "./helper";
import Ticket from "./Ticket";
import "./Lottery.css"

export default function Lottery({n=3, winCondition}) {
    let [ticket, setTicket] = useState(genRandom(n));
    let  isWinning = winCondition(ticket);

    let buyTicket = () =>{
        setTicket(genRandom(n));
    }


    return (
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
            <br />
            <button onClick={buyTicket} className="ticket" >Buy New Ticket</button>
            <h3>{isWinning && "Congrats you won!"}</h3>
        </div>
    );
}