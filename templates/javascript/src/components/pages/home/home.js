import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home(){
    const [color, setColor] = useState('blue');

    useEffect(()=>{
        setColor(process.env.REACT_APP_MAIN_THEME_COLOR)
    }, [])

    return <div className="container max-w-lg px-4 py-32 mx-auto mt-px text-left md:max-w-none md:text-center">
    <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span className="inline md:block">Start Crafting Your</span> <span className={`relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-${color}-600 to-${color}-500 md:inline-block`}>Next Great Search</span></h1>
    <div className="flex flex-col items-center mt-12 text-center">
        <span className="relative inline-flex w-full md:w-auto">
            <Link to="/search" type="button" className={`inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-black bg-${color}-600 border border-transparent rounded-full md:w-auto hover:bg-${color}-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-600`}>
                Search Now
            </Link>
        </span>
    </div>
</div>
}