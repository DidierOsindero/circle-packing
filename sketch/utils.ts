
/* returns the "minimum" element of the given array according to the given weighting function. 

Calls weightFn on each element of the array and returns the element for which weightFn returns the lowest value.
 */
function minBy<T>(arr: T[], weightFn: (a: T) => number): T | null {
    if (arr.length === 0) {
        return null;
    }

    let minElem: T = arr[0];
    let minVal: number = weightFn(minElem);

    for (let elem of arr) {
        const v = weightFn(elem);
        if (v < minVal) {
            minElem = elem;
            minVal = v;
        }
    }
    return minElem;
}