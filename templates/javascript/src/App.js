import './App.css';
import Header from './components/layout/header/header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { pageRoutes } from './components/routes/routes';

import { InstantSearch, Configure } from 'react-instantsearch-hooks-web';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  process.env.REACT_APP_APPID,
  process.env.REACT_APP_SEARCH_API_KEY
);

function App() {
  
  return (
    <div className="w-full pb-12 antialiased bg-white" data-tails-scripts="//unpkg.com/alpinejs">
        <Router>
          <div className="mx-auto">
            <InstantSearch indexName={process.env.REACT_APP_INDEX_NAME} searchClient={searchClient}>
            <Configure
              ruleContexts={['insert-context-here']}
              analytics
              hitsPerPage={48} 
              distinct
            />
              <Header />

              <Routes>
                { pageRoutes.map( page =>
                  <Route exact path={page.path} element={page.component} key={page.path}/>)
                }
              </Routes>

            </InstantSearch>
          </div>
      </Router>
  </div>
  );
}

export default App;
