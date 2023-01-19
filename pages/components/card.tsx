import Link from "next/link";
import * as url from "url";
import {useState} from "react";
import{time} from "@/pages/components/icons";
import{plant} from "@/pages/components/icons";
import{level} from "@/pages/components/icons";
import{arrowUp} from "@/pages/components/icons";
import{arrowDown} from "@/pages/components/icons";

interface showncpropstype{

    name:string;
    timeEstimationInMinutes:number;

    difficulty:string;
    isVegan: boolean
    id: string;
    imageUrl:string;
    ingredients: any;
    description:string;

}

interface hiddencpropstype{

    ingredients: any;
    description:string;

}

export function HiddenCard({ingredients,description}:hiddencpropstype){
    return(

        <div>
            <div className="inline-block w-80">{description}</div>
            <div className="inline-block align-top w-60 float-right text-green-800">{ingredients}</div>
        </div>

    )
}
export function Card({name, timeEstimationInMinutes,difficulty,isVegan, imageUrl, id,ingredients,description}:showncpropstype){
    const[state,setState]=useState(false);
    const showHide=()=>{
        setState(!state);
    }
    const nonVegan=()=>{
        return(
            <p className="text-red-600 ">non-vegan</p>
        )
    }





    return(

        <div className="p-8 my-5 w-1/2 rounded-[20px] border-solid border-2 border-green-500/50 ">
            <div className="inline-block box-content h-35 w-35 p-4 border-4 rounded-[20px] mr-5">
                <img src="{imageUrl}"/>
            </div>
            <div className="inline-block ">
                <h1>{name}</h1>
                <p className="text-blue-900 ">{time()}{timeEstimationInMinutes}</p>
                <p className="text-green-600 "> {isVegan ? plant():nonVegan()}</p>
                <p className="text-yellow-300">{level()}{difficulty}</p>

            </div>

            <button onClick={showHide}className=" float-right bg-green-500 text-white font-bold py-2 px-4 rounded-[15px]">
                Zobrazit ingredience {state ? arrowUp():arrowDown()}
            </button>

            {state ? <HiddenCard ingredients={ingredients} description={description}/>:""}

        </div>


    )

}