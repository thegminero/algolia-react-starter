import { useState, useEffect } from 'react'
import { useRefinementList } from 'react-instantsearch-hooks-web';
import { Switch } from '@headlessui/react'
import './facets.css';

/**
 * 
 *  Sample Custom Facet used - useRefinement Hook
 *  https://www.algolia.com/doc/api-reference/widgets/refinement-list/react-hooks/#hook
 */

function ToggleFacet(props){
        const {
          items,
          title,
          hasExhaustiveItems,
          createURL,
          refine,
          sendEvent,
          searchForItems,
          isFromSearch,
          canRefine,
          canToggleShowMore,
          isShowingMore,
          toggleShowMore,
        } = useRefinementList(props);

        const [enabled, setEnabled] = useState(false)
        const [color, setColor] = useState('blue')
        useEffect(()=>{
            refine(!enabled)
        }, [enabled]);

        useEffect(()=>{
            setColor(process.env.REACT_APP_MAIN_THEME_COLOR)
        }, [])

    return <div className="facets mt-2 w-full ais-RefinementList flex justify-between items-center">
        {(props.attribute === 'super_express') ? 
            <svg xmlns="http://www.w3.org/2000/svg" className="w-28 py-4" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            : 
            (props.attribute === 'status') ? 
            <div className="w-full flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-16 py-4 pr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
            <span className="text-green-600">Free Shipping</span></div>
            : null
        } 

        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
                enabled ? `${color}-600` : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
        <span className="sr-only bg-green-400">{title}</span>
        <span
            className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
        </Switch>
       
    </div>
}
export default ToggleFacet;