import { headerCategoryOptions } from "../../routes/routes";
import { useLocation, Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Searchbar from "../../algolia/searchbar/searchbar";
import FederatedSearch from "../../algolia/federatedsearch/federatedsearch";

export default function Header() {
    const [color, setColor] = useState('blue');
    let location = useLocation();

    useEffect(() => {
    }, [location]);

    useEffect(()=>{
        setColor(process.env.REACT_APP_MAIN_THEME_COLOR)
    }, [])

    return <nav className={`relative justify-between z-50 h-32 w-full select-none bg-${color}-500 shadow-md`}>
        <div className="container w-full relative flex items-center justify-between h-24 mx-auto overflow-hidden font-medium md:overflow-visible lg:justify-center sm:px-4 md:px-2 lg:px-0">
            <div className="px-8 flex flex-col items-center items-end justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-gray-100">
                <svg className="w-6 h-6 text-white" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak=""><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </div>
            <div className="flex items-center justify-start h-full ">
                <Link to="/" className="inline-block py-4 md:py-0 pr-4 border-r-2 border-gray-200 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-12 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                    </svg>
                </Link>
                <div className="px-4 w-24">
                    
                </div>
            </div>
            <div className="search-bar w-2/4">
                {
                    (location.pathname === '/') ?
                        <div><Searchbar/><FederatedSearch /> </div>
                        :
                        <Searchbar />
                }

            </div>

            <div className={`absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 ${color}-500 rounded-full cursor-pointer md:hidden hover:bg-gray-100`}>
                <svg className="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak=""><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
                <svg className="w-6 h-6 text-gray-700" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak=""><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </div>
        </div>
        <div className="items-end hidden text-sm bg-gray-900 bg-opacity-50 md:items-center w-full lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
            <div className={`flex-col w-full h-auto overflow-hidden ${color}-500 rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row`}>
                <div className={`flex ${color}-600 items-end justify-center w-full`}>
                    {
                        headerCategoryOptions.map(
                            nav => <span className="flex items-center" key={nav.label}>
                                {nav.icon}
                                <Link to={nav.path} className="inline-block w-full py-2 mx-0 ml-6 font-large text-left text-gray-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">{nav.label}</Link>
                            </span>
                        )
                    }

                </div>
            </div>
        </div>
    </nav>
}