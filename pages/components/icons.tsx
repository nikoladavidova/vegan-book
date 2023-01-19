import Link from "next/link";
import * as url from "url";


export const time = () => {

    return(

        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock inline align-[-3px]" width="17" height="17" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 15" />
        </svg>

    )


}

export const plant = () => {

    return(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-seeding inline align-[-3px]" width="17" height="17"
             viewBox="0 0 24 24" stroke-width="1.5" stroke="#00b341" fill="none" stroke-linecap="round"
             stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3"/>
            <path d="M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3"/>
            <line x1="12" y1="20" x2="12" y2="10"/>
        </svg><p>vegan</p>
</>
    )
}



export const level = () => {

    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-accessible inline align-[-5px]" width="20" height="20"  viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffec00" fill="none" stroke-linecap="round"
             stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <circle cx="12" cy="12" r="9"/>
            <path d="M10 16.5l2 -3l2 3m-2 -3v-2l3 -1m-6 0l3 1"/>
            <circle cx="12" cy="7.5" r=".5" fill="currentColor"/>
        </svg>


    )
}
export const arrowUp = () => {

    return(

    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fold-up inline align-[-3px]" width="20" height="20"
         viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round"
         stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 13v-8l-3 3m6 0l-3 -3"/>
        <line x1="9" y1="17" x2="10" y2="17"/>
        <line x1="14" y1="17" x2="15" y2="17"/>
        <line x1="19" y1="17" x2="20" y2="17"/>
        <line x1="4" y1="17" x2="5" y2="17"/>
    </svg>
    )
}

export const arrowDown = () => {

    return(

    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-fold-down inline align-[-3px]" width="20" height="20"
         viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round"
         stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 11v8l3 -3m-6 0l3 3"/>
        <line x1="9" y1="7" x2="10" y2="7"/>
        <line x1="14" y1="7" x2="15" y2="7"/>
        <line x1="19" y1="7" x2="20" y2="7"/>
        <line x1="4" y1="7" x2="5" y2="7"/>
    </svg>

    )
}