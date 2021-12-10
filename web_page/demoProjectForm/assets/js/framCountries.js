if(typeof demoProjFuncObj !== 'object'){
    demoProjFuncObj = {};
}

demoProjFuncObj._frameCountriesContinent = function(arr){
    let outputData = [];
    
    arr.map(function(itm){
        let tmpObj = {};
        tmpObj.continent = itm.region;
        tmpObj.country = itm.name;
        tmpObj.acronym = itm.iso3;
        outputData.push(tmpObj);
    });
    
    return outputData;
}

demoProjFuncObj._getCountries = function(arr, continent){
    var outputData = [];
    
    arr.map(function(itm){
        if(itm.continent === continent){
            outputData.push(itm);
        }
    });
    
    return outputData;
}

demoProjFuncObj._getUniqueList = function(arr){
    let uniqueArr = [...new Set(arr)];
    return uniqueArr;
}

demoProjFuncObj._appIndexFnx = function(arr, indexElem, defVal){
    let outputData = defVal !== null && defVal !== undefined ? defVal : null;
    if(indexElem !== null && indexElem !== undefined && indexElem !== ""){
        if(typeof indexElem === 'number'){
            outputData = arr[indexElem];
        }
        if(typeof indexElem === 'string'){
            outputData = [];
            arr.map(function(itm){
                if(itm[indexElem] !== null && itm[indexElem] !== undefined && itm[indexElem] !== ""){
                    let tmpObj = itm[indexElem];
                    outputData.push(tmpObj);
                }
            });
        }
    }
    
    return outputData;
}

function frameCountriesContinent(arr){
    let outputData = [];
    
    arr.map(function(itm){
        let tmpObj = {};
        tmpObj.continent = itm.region;
        tmpObj.country = itm.name;
        tmpObj.acronym = itm.iso3;
        outputData.push(tmpObj);
    });
    
    return outputData;
}

function getCountries(arr, continent){
    let outputData = [];
    
    arr.map(function(itm){
        if(itm.continent === continent){
            outputData.push(itm);
        }
    });
    
    return outputData;
}