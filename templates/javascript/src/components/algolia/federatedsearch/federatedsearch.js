import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useConnector, Configure, Index, Hits } from 'react-instantsearch-hooks-web';
import connectStats from 'instantsearch.js/es/connectors/stats/connectStats';
import AutocompleteTemplate from '../results/autocompleteTemplate';
import QuerySuggestionTemplate from '../results/querySuggestionTemplate';

export function useStats(props) {
  return useConnector(connectStats, props);
}
export default function FederatedSearch(props) {
  let location = useLocation();
  const [show, setShow] = useState(false);
  const [color, setColor] = useState('blue');
  const [qrySuggIndex, setQrySuggIndex] = useState('');

  const {
    hitsPerPage,
    nbHits,
    areHitsSorted,
    nbSortedHits,
    nbPages,
    page,
    processingTimeMS,
    query,
  } = useStats(props);

  useEffect(()=>{
    setQrySuggIndex(process.env.REACT_APP_QRY_SUGGEST_INDEX)
    setColor(process.env.REACT_APP_MAIN_THEME_COLOR)
  }, [])
  useEffect(() => {
  }, [location]);
  useEffect(()=>{
  }, [query])

    return (nbHits > 0 && location.pathname === '/' && query.length > 1) ? <div className="absolute w-full right-0 z-10 mt-3 origin-top-right rounded-md bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
            <div className="grid grid-cols-3 gap-4 divide-x divide-solid auto-complete" role="none">
              <div className="w-full bg-white rounded-lg sm:p-8 ">
              <div className="flex  justify-between mb-4 flex-col"> 
                    <h5 className="text-xl font-bold leading-none text-gray-900 ">Recent Searches</h5>
                    <div className='flex flex-col pt-2'>
                      <Link to="/search?q=Query%201" className='text-md text-gray-600'>Query 1</Link>
                      <Link to="/search?q=Query%202" className='text-md text-gray-600'> Query 2</Link>
                      <Link to="/search?q=Query%203" className='text-md text-gray-600'>Query 3</Link>
                      <Link to="/search?q=Query%204" className='text-md text-gray-600'>Query 4</Link>
                    </div>
              </div>
              { qrySuggIndex ? <div className="flex justify-between mb-4 flex-col"> 
                <h5 className="text-xl font-bold leading-none text-gray-900 ">Suggestions</h5>
                  <Index indexName={qrySuggIndex}>
                    <Configure hitsPerPage={8} /> 
                    <div className='query-suggestions items-center pt-2'>
                      <Hits hitComponent={QuerySuggestionTemplate}/>
                    </div>
                  </Index>
              </div> : null}
              </div>
              <div className="w-full bg-white rounded-lg sm:p-8 col-span-2">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 ">Products</h5>
                    <Link to="/search" className={`text-sm font-medium text-${color}-600 hover:underline`}>
                        see all
                    </Link>
                </div>
                <div className="w-full">
                  <ul role="list" className="flex w-full">
                    <Hits hitComponent={AutocompleteTemplate} />
                  </ul>
                </div>
              </div>
              <Configure hitsPerPage={3} /> 
            </div>
          </div>
          : null;
}