/**
 * 
 * Federated search product view template
 * make sure to replace attributes accordingly 
 * @returns 
 */

export default function AutocompleteView({ hit, sendEvent }) {

    const priceAtttribute = 'price.price'
    const titleAttribute = 'title'
    const imageThumbnail = 'imageLink'

    return <li class="py-3 sm:py-4 cursor-pointer">
        <div class="flex items-center space-x-4">
            <div class="flex-shrink-0">
                {(hit?.images)?<img class="w-24 h-24 rounded-full" src={hit?.[imageThumbnail]} alt={hit?.[titleAttribute]} />:null}
            </div>
            <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">
                    {hit?.[titleAttribute]}
                </p>
                <p class="text-sm text-gray-500 truncate ">
                    {hit?.[priceAtttribute]}
                </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900">
                ${hit?.[priceAtttribute]}
            </div>
        </div>
    </li>
}
