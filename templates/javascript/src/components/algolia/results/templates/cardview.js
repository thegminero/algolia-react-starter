import { useEffect, useState } from "react";

/**
 * 
 * Template for Card View Hit, 
 * https://www.algolia.com/doc/api-reference/widgets/hits/react-hooks/
 * customize as needed
 */
export default function CardView({ hit }) {

    const priceAtttribute = 'price.price'
    const titleAttribute = 'title'
    const imageThumbnail = 'imageLink'
    const [color, setColor] = useState('blue');

    useEffect(()=>{
        setColor(process.env.REACT_APP_MAIN_THEME_COLOR)
    }, []);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return <div className="w-full sm:w-72 h-96 rounded-md overflow-hidden shadow-lg my-2 mx-1 flex flex-col justify-between">
    <div calssName="w-full h-32">
        <img className="scale-50 h-48 w-96 rounded-t-lg" src={hit?.[imageThumbnail]} alt={hit?.[titleAttribute]} />
    </div>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl truncate h-8 wrap font-semibold tracking-tight text-gray-900">{hit?.[titleAttribute]}</h5>
        </a>
        {(hit.stock > 0) ? <div className="flex items-center mt-2.5 mb-5">
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <span className={`${color}-100 text-${color}-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3`}>{hit.stock}</span>
        </div>: null}
        <div className="flex items-center w-full">
            <div className="grid grid-cols-3 divide-x w-full items-center">
                
            </div>
        </div>
        <div className="flex items-center justify-between">
        { (hit?.hasDiscount) ?
                <div className="special">
                    <span className={`line-through text-${color}-600 text-xl font-bold`}>{formatter.format(hit?.[priceAtttribute])}</span>
                    <span className="pl-2 text-2xl font-bold text-gray-900">{formatter.format(hit?.[priceAtttribute]*(hit?.discount/100))}</span> 
                    
                </div>
                :
                <span className="text-3xl font-bold text-gray-900">{formatter.format(hit?.[priceAtttribute])}</span>

        }
        </div>
    </div>
</div>

} 