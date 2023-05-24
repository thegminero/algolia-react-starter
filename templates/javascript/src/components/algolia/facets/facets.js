import { RangeInput, RefinementList, HierarchicalMenu, DynamicWidgets } from "react-instantsearch-hooks-web";
import './facets.css';
import ToggleFacet from "./toggleFacet";

/**
 * Sample usage of DynamicWidgets, requires fallback component for default refinements
 * can embed custom facets related to specific attributes and other
 * Instantsearch Refinement Components
 * https://www.algolia.com/doc/api-reference/widgets/dynamic-facets/react-hooks/
 */
function Facets(){
    return <div className="facets mt-2 w-full">
        
        <DynamicWidgets fallbackComponent={RefinementList}>
            {/* <ToggleFacet attribute="" />
            <ToggleFacet attribute="" /> */}
            <HierarchicalMenu attributes={
                                        ['categoryLevel0',
                                        'categoryLevel1',
                                        'categoryLevel2',]
                                        } />
            <RangeInput attribute="price.price" />
        </DynamicWidgets>
       
    </div>
}
export default Facets;