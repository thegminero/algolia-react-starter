import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { SearchBox } from 'react-instantsearch-hooks-web';
import './searchbar.css'

function Searchbar(){
    const navigate = useNavigate();
    const [color, setColor] = useState('blue')

    const handleFocus = (e) => {
    }
    const goToSearch = (e) => {
        /** if not using routing = true on instantsearch use queryTerm */
        const queryTerm = e.currentTarget.getElementsByClassName('ais-SearchBox-input')[0].value
        navigate(`/search${location.search}`)
    }

    useEffect(()=>{
        setColor(process.env.REACT_APP_MAIN_THEME_COLOR);
        const aisSearchbox = document?.querySelector('div.ais-SearchBox.site-search.w-full.h-10.p-2.rounded-lg.items-center > form > input')
        aisSearchbox.addEventListener('onfocus', handleFocus)
        return () => aisSearchbox.removeEventListener('onfocus', handleFocus);
    }, [])

    useEffect(()=>{
        const aisSearchbox = document.querySelector('.ais-SearchBox-input');
        const aisSearchForm = document.querySelector('.ais-SearchBox-form');
        const aisSearchSubmit = document.querySelector('.ais-SearchBox-submit');
        aisSearchbox.classList.add('w-full', 'h-10', 'p-2', 'rounded-l-lg');
        aisSearchForm.classList.add('flex', 'border', `border-${color}-700`, 'rounded-lg')
        aisSearchSubmit.classList.add('bg-white', 'w-12', 'rounded-r-lg')
        aisSearchForm.addEventListener('onfocus', handleFocus)
    })
    return <SearchBox className="site-search w-full h-10 p-2 rounded-lg items-center"
                        placeholder="What are you looking for?"
                        onSubmit={(event) => goToSearch(event)}/>
}

export default Searchbar;