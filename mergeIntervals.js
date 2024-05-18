function mergeIntervals(intervals){

    intervals.sort((a,b) => a[0] - b[0])

    let result = [intervals[0]]

    for (let i=1; i<intervals.length; i++){

        let currentInterval = intervals[i]
        let lastMergedIntervals = result[result.length - 1]

        if (currentInterval[0] <= lastMergedIntervals[1]){

            lastMergedIntervals[1] = Math.max(lastMergedIntervals[1], currentInterval[1])
        }
        else{
            result.push(currentInterval)
         }
    
    }

    return result
}

console.log(mergeIntervals([[1,3],[2,6],[8,12]]))