function upperCaseArr(arr) {
    if (!arr.length) {
        return [];
    }

    return [arr[0].toUpperCase(), ...upperCaseArr(arr.slice(1))]
}

console.log(upperCaseArr(['orange', 'blue', 'yellow', 'red']))

function upperWDef(arr, result = []) {
    if (!arr.length) {
        return result;
    }

    result.push(arr[0].toUpperCase());

    return upperWDef(arr.slice(1), result)
}

console.log(upperWDef(['orange', 'blue', 'yellow', 'red']))
