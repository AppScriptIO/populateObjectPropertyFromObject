/**
 * @description Creates properties for instance corresponding to the json objects' key-value pairs.
 * Basically an equivalent to Object.assign()
 * @action creates class instance properties.
 * @param  {object} jsonData key-value of object will end up as property-value of class.
 **/
function usingGenericInstance({
    object, // target object
    jsonData // key-value pair - data to be populated
}) {
    if(jsonData) {
        Object.entries(jsonData).forEach(([key, value]) => {
            object[key] = value
        })
    }
    object.jsonData = jsonData // to keep track of populated instances.
}

function usingThis({ jsonData, object = this }) {
    usingGenericInstance({object, jsonData})
}

export { 
    usingGenericInstance as default,
    usingGenericInstance,
    usingThis
}
