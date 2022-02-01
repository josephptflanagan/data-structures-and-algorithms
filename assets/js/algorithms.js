let answerExplainationEl = document.querySelector('#explaination')
let answerListEl = document.querySelector('#answerList');

function avg(arr) { //O(n)

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total / arr.length;

}

function addUpToOne(n) {

    let total = 0;

    for (let i = 0; i <= n; i++) {

        total += i;        // 5n + 2 operations  O(n)

    }

    return total

}

function addUpToTwo(n) {

    return n * (n + 1) / 2; //3 operations       O(1)

}

function sameOne(arr1, arr2) {  //Time Complexity O(n^2)

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIdx = arr2.indexOf(arr1[i] ** 2);
        if (correctIdx === -1) {
            return false;
        }
        arr2.slice(correctIdx, 1);
    }

    return true;

}

function sameTwo(arr1, arr2) {  //Time Complexity of O(n)

    if (arr1.length !== arr2.length) {
        return false;
    }

    let freqCount1 = {};
    let freqCount2 = {};

    for (let val of arr1) {
        freqCount1[val] = (freqCount1[val] || 0) + 1
    }

    for (let val of arr2) {
        freqCount2[val] = (freqCount2[val] || 0) + 1
    }

    for (let key in freqCount1) {
        if (!(key ** 2 in freqCount2)) {
            return false;
        }
        if (freqCount2[key ** 2] !== freqCount1[key]) {
            return false;
        }
    }

    return true;

}

function anagramOne(str1, str2) { //O(n)

    if (str1.length !== str2.length) {
        return false;
    }

    let freqCount1 = {};
    let freqCount2 = {};

    for (let char of str1) {
        freqCount1[char] = (freqCount1[char] || 0) + 1
    }

    for (let char of str2) {
        freqCount2[char] = (freqCount2[char] || 0) + 1
    }

    for (let key in freqCount1) {
        if (!freqCount2[key]) {
            return false;
        } else if (freqCount1[key] != freqCount2[key]) {
            return false;
        }
    }

    return true;

}

function anagramTwo(str1, str2) { // O(n log(n))

    if (str1.length !== str2.length) {
        return false;
    }

    let str1Sorted = str1.split("").sort().join(""); //sort is the problem, O(n log(n));
    let str2Sorted = str2.split("").sort().join("");

    if (str1Sorted === str2Sorted) {

        return true;

    } else {

        return false;

    }
}

function anagramThree(str1, str2) { //O(n)

    if (str1.length !== str2.length) {
        return false;
    }

    const lookup = {};

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];

        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];

        if (!lookup[letter]) {

            return false;

        } else {

            lookup[letter] -= 1;

        }
    }

    return true;

}

function sumZeroOne(arr) { // O(n)

    if (arr.length < 2) {
        return undefined;
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 0) {

            let tempArr = arr.slice(); // O(n)
            tempArr.splice(i, 1, 1); // O(n)

            if (tempArr.includes(0)) { // O(n)

                return [0, 0];

            }

        } else if (arr.includes(-arr[i])) { // O(n)

            return [arr[i], -arr[i]];

        }
    }

    return undefined;

}

function sumZeroTwo(arr) { //O(n)

    if (arr.length < 2) {
        return undefined;
    }

    let left = 0;
    let right = arr.length - 1;

    while (right > left) {

        let sum = arr[left] + arr[right];

        if (sum === 0) {

            return [arr[left], arr[right]];

        } else if (sum < 0) {

            left++;

        } else {

            right--;

        }
    }

}

function countUniqueValuesOne(arr) { //Time O(n)

    if (arr.length === 0) {
        return 0;
    }

    let left = 0;
    let right = arr.length - 1;
    let obj = {}
    let count = 0;

    while (right > left) {

        if (!obj[arr[left]]) {
            obj[arr[left]] = 1
            count++;
        } else {
            obj[arr[left]]++;
        }

        if (!obj[arr[right]]) {
            obj[arr[right]] = 1
            count++;
        } else {
            obj[arr[right]]++;
        }

        right--;
        left++;

    }

    return count;

}

function countUniqueValuesTwo(arr) {   //Time O(n)

    if (arr.length <= 1) {
        return arr.length;
    }

    let i = 0;
    let j = 1;

    while (j < arr.length) {

        if (arr[i] == arr[j]) {
            j++;
        } else {
            i++;
            arr[i] = arr[j];
            j++;
        }
    }

    return ++i;

}

function maxSubarraySumOne(arr, n) { //O(n^2)

    let i = 0;
    let max = -Infinity;

    if (arr.length === 0) {
        return null;
    }

    while ((i + n - 1) < arr.length) {

        let tempArr = arr.slice(i, (i + n))
        let tempSum = 0;

        for (let j = 0; j < tempArr.length; j++) {
            tempSum += tempArr[j]
        }

        max = (tempSum > max ? tempSum : max);
        i++;

    }

    return max;

}

function maxSubarraySumTwo(arr, n) { //O(n)

    let maxSum = 0;

    if (arr.length < n) {
        return null;
    }

    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    let tempSum = maxSum;

    for (let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;

}

function binarySearchOne(arr, n) { // O(log(n))

    let lower = 0;
    let upper = arr.length - 1;

    while (lower <= upper) {

        let idx = Math.floor((upper + lower) / 2);
        let temp = arr[idx];

        if (temp === n) {
            return idx;
        } else if (temp > n) {
            upper = idx - 1;
        } else {
            lower = idx + 1;
        }

    }

    return -1;

}

function sameFrequencyOne(intA, intB) {

    let str1 = intA.toString();
    let str2 = intB.toString();

    if (str1.length !== str2.length) {
        return false;
    }

    let freqCount1 = {};
    let freqCount2 = {};

    for (let char of str1) {
        freqCount1[char] = (freqCount1[char] || 0) + 1
    }

    for (let char of str2) {
        freqCount2[char] = (freqCount2[char] || 0) + 1
    }

    for (let key in freqCount1) {
        if (!freqCount2[key]) {
            return false;
        } else if (freqCount1[key] != freqCount2[key]) {
            return false;
        }
    }

    return true;

}

function areThereDuplicates(arr) {

    if (!arr) {
        return false;
    }

    let freqCount = {};

    for (let i = 0; i < arr.length; i++) {
        freqCount[arr[i]] = (freqCount[arr[i]] || 0);
    }

    for (let key in freqCount) {
        if (freqCount[key] > 1) {
            return true;
        }
    }

    return false;

}

function averagePair(arr, target) {

    if (arr.length < 2) {
        return false;
    }

    let left = 0;
    let right = arr.length - 1;

    while (right > left) {

        let tempAvg = (arr[left] + arr[right]) / 2

        if (tempAvg === target) {
            return true;
        } else if (tempAvg > target) {
            right--;
        } else {
            left++;
        }

    }

    return false;

}

function isSubsequence(str1, str2) {

    if (!str1 || !str2) {
        return false;
    }

    let i = 0;
    let j = 0;

    while (j < str2.length) {

        if (str1[i] == str2[j]) {
            i++;
        }
        j++;


        if (i >= str1.length) {
            return true;
        }
    }

    return false;

}

function minSubArrayLen(arr, target) {

    let left = 0;
    let right = 0;
    let tempSum = 0;
    let minLength = Infinity;

    while (left < arr.length) {

        if (tempSum < target && right < arr.length) {
            tempSum += arr[right];
            right++;
        } else if (tempSum >= target) {
            minLength = Math.min(minLength, right - left);
            tempSum -= arr[left];
            left++;
        } else {
            break;
        }
    }

    return minLength === Infinity ? 0 : minLength;

}

function findLongestSubstring(str) {

    let tempLongest = 0;

    if (str) {

        let i = 0;
        let j = 1;
        let issue = false;
        let obj = {};

        tempLongest++;
        obj[str[i]] = 1;

        while (j < str.length) {

            if (issue) {

                obj[str[i]] -= 1;
                i++;

                if (obj[str[j]] == 1) {

                    issue = false;
                    j++;

                }

            } else {

                obj[str[j]] = obj[str[j]] ? obj[str[j]] + 1 : 1;

                if (obj[str[j]] > 1) {

                    issue = true;

                } else {

                    tempLongest = tempLongest < j - i + 1 ? j - i + 1 : tempLongest
                    j++;

                }
            }
        }
    }

    return tempLongest;

}

function recursiveLaugh(num) {

    if (num > 0) {

        console.log("ha");
        return recursiveLaugh(num - 1);

    }

    return num;

}

function iterativeFactorial(num) {

    let total = 0;

    if (num > 0) {

        total = 1;

        for (let i = num; i > 1; i--) {
            total *= i;
        }
    }

    return total;

}

function recursiveFactorial(num) {

    if (num > 1) {
        return num * recursiveFactorial(num - 1);
    }

    return 1;

}

function collectOdds(arr) {

    let odds = [];

    function helper(helperInput) {

        if (helperInput.length === 0) {
            return;
        }

        if (helperInput[0] % 2 !== 0) {
            odds.push(helperInput[0]);
        }

        helper(helperInput.slice(1));

    }

    helper(arr);

    return odds

}

function compareArrays(arr1, arr2) {

    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;

}

function pureRecursionCollectOdds(arr) {

    let newArr = [];

    if (arr.length === 0) {
        return newArr
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(pureRecursionCollectOdds(arr.slice(1)));
    return newArr;

}

function power(base, exp) {

    // let returned = 1; //Iterative

    // for (let i = exp;i > 0; i--){
    //     returned *= base;
    // }

    // return returned;

    if (exp > 0) {
        return base * power(base, exp - 1)
    }

    return 1;

}

function reverse(str) {

    // let len = str.length;
    // let reversed = "";

    // function helper(str) {

    //     while (len > 0) {
    //         len--;
    //         reversed += str.slice(len)
    //         return helper(str.slice(0, len));
    //     }

    //     return reversed;

    // }
    // return helper(str);

    if (str.length <= 1) return str;
    return reverse(str.slice(1)) + str[0]

}

function isPalindrome(str) {

    //Mine
    // function helper(str) {
    //     if (str.length <= 1) return str;
    //     return helper(str.slice(1)) + str[0];
    // }

    // return str == helper(str);

    //His
    if (str.length === 1) {
        return true;
    }
    if (str.length === 2) {
        return str[0] === str[1];
    }
    if (str[0] === str.slice(-1)) {
        return isPalindrome(str.slice(1, -1))
    }
    return false;

}

function flatten(oldArr) {

    var newArr = []

    for (var i = 0; i < oldArr.length; i++) {

        if (Array.isArray(oldArr[i])) {

            newArr = newArr.concat(flatten(oldArr[i]))

        } else {

            newArr.push(oldArr[i])

        }
    }

    return newArr;

}

function capitalizeFirst(arr) {
    let dict = {
        'a': 'A', 'b': 'B', 'c': 'C', 'd': 'D', 'e': 'E', 'f': 'F', 'g': 'G',
        'h': 'H', 'i': 'I', 'j': 'J', 'k': 'K', 'l': 'L', 'm': 'M', 'n': 'N',
        'o': 'O', 'p': 'P', 'q': 'Q', 'r': 'R', 's': 'S', 't': 'T', 'u': 'U',
        'v': 'V', 'w': 'W', 'x': 'X', 'y': 'Y', 'z': 'Z',
    };

    let newArr = [];

    function helper(arr) {

        arr[0] = dict[arr[0][0]] + arr[0].slice(1);
        newArr.push(arr[0]);

        if (arr.length > 1) {

            return helper(arr.slice(1));

        }

        return newArr;

    }

    return helper(arr);
}

function linearSearch(arr, item) {

    if (arr[0] === item) {
        return true
    }

    if (arr.length === 1) {
        return false;
    }

    return linearSearch(arr.slice(1), item);

}

function linearSearchIndexOf(arr, item) {

    let count = 0;

    function helper(arr, item) {

        if (arr[0] === item) {
            return count
        }

        if (arr.length === 1) {
            return -1;
        }

        count++;

        return helper(arr.slice(1), item);

    }
    return helper(arr, item);

}

function binarySearch(arr, item) {

    let left = 0;
    let right = arr.length - 1;

    if (arr[left] == item) {
        return left;
    } else if (arr[right] == item) {
        return right;
    } else if (item > arr[right] || item < arr[left] || arr.length < 3) {
        return -1;
    }

    while (right > left) {

        let middle = Math.ceil((right + left) / 2);

        if (arr[middle] == item) {
            return middle;
        } else if (arr[middle] < item) {
            left = middle + 1
        } else {
            right = middle - 1;
        }

    }

    return -1;

}

function naiveStringSearch(long, short) {

    for (let i = 0; i < long.length; i++) {

        if (long[i] == short[0]) {

            for (let j = 0; j < short.length; j++) {

                if (j == short.length - 1 && long[i + j] == short[j]) {
                    return i
                }

                if (long[i + j] != short[j]) {
                    break;
                }
            }
        }
        // if (long[i] == short[0]){
        //     if (long.slice(i, i + short.length) == short){
        //         return i;
        //     }
        // }
    }
    return -1;
}

function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function bubbleSortAsc(arr) {

    let localArr = arr.slice();
    let sorted = false;
    let endBuffer = 1;

    while (!sorted) {

        sorted = true;

        for (let i = 0; i < localArr.length - endBuffer; i++) {

            if (localArr[i] > localArr[i + 1]) {
                swap(localArr, i, i + 1);
                sorted = false;
            }

        }

        endBuffer++;

    }

    return localArr;

}

function bubbleSortDesc(arr) {

    let localArr = arr.slice();
    let sorted = false;
    let endBuffer = 1

    while (!sorted) {

        sorted = true;

        for (let i = 0; i < localArr.length - endBuffer; i++) {

            if (localArr[i] < localArr[i + 1]) {
                swap(localArr, i, i + 1);
                sorted = false;
            }


        }
        endBuffer++;

    }

    return localArr;

}

function selectionSort(arr) {

    let minIdx = 0;
    let localArr = arr.slice();
    let sorted = false;
    startBuffer = 0;

    while (!sorted) {

        sorted = true;

        for (let i = 0 + startBuffer; i < localArr.length; i++) {

            if (localArr[i + 1] < localArr[minIdx]) {
                sorted = false;
                minIdx = i + 1;
            }

        }

        swap(localArr, minIdx, startBuffer);

        startBuffer++;
        minIdx = startBuffer;

        if (startBuffer == localArr.length - 1) {
            sorted = true;
        }

    }

    return localArr;

}

function insertionSort(arr) { //arr = [5,3,4,1,2]

    let localArr = arr.slice();

    for (let i = 1; i < arr.length; i++) {

        if (localArr[i] < localArr[i - 1]) {
            localArr = backup(localArr.slice(0, i + 1)).concat(localArr.slice(i + 1))
        }

    }

    function backup(arr) {

        let localArr = arr.reverse();

        for (let i = 0; i < localArr.length - 1; i++) {
            if (localArr[i] < localArr[i + 1]) {
                swap(localArr, i, i + 1)
            }
        }
        return localArr.reverse();
    }

    return localArr;

}

function mergeSortedArray(arr1, arr2) {

    let arr3 = [];
    let i = 0;
    let j = 0;
    let combinedLength = arr1.length + arr2.length;

    for (let k = 0; k < combinedLength; k++) {

        if (i < arr1.length && j < arr2.length) {
            if (arr1[i] <= arr2[j]) {
                arr3.push(arr1[i]);
                i++;
            } else {
                arr3.push(arr2[j]);
                j++;
            }
        } else if (i < arr1.length) {
            arr3.push(arr1[i]);
            i++;
        } else {
            arr3.push(arr2[j]);
            j++;
        }
    }

    return arr3;

}

function mergeSort(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return mergeSortedArray(left, right);
}

function pivotHelper(arr, start = 0, end = arr.length - 1) {
    let pivotIdx = start;
    let pivotVal = arr[pivotIdx];

    for (let i = start + 1; i <= end; i++) {

        if (arr[i] < pivotVal) {

            pivotIdx++;
            swap(arr, pivotIdx, i)

        }
    }

    swap(arr, start, pivotIdx)
    return pivotIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivotHelper(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;

}

function getDigit(num, place) {

    return Math.floor(Math.abs(num) / Math.pow(10, place) % 10);

}

function digitCount(num){
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
    let most = 0;
    for (let i = 0; i < arr.length;i++){
        let current = digitCount(arr[i]);
        most = current > most ? current : most;
    }
    return most;
}

function radixSort(arr) {

    let maxDigits = mostDigits(arr);

    for (let k = 0; k < maxDigits;k++){

        let digitBuckets = Array.from({length:10},() => []);

        for(let i = 0; i < arr.length ;i++){
            let index = getDigit(arr[i],k);
            digitBuckets[index].push(arr[i]);
        }
        
        arr = [].concat(...digitBuckets); //combines numbers into a single array rather than an array of arrays

    }

    return arr;

}

function recursiveFibonacci(n){

    if (n <= 2){
        return 1;
    }
    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

function dynamicMemoizationFibonacci(n, memo=[undefined, 1, 1]){

    if(memo[n] !== undefined){
        return memo[n];
    }

    let res = dynamicMemoizationFibonacci(n-1,memo) + dynamicMemoizationFibonacci(n-2,memo);

    memo[n] = res;

    return res

}

function dynamicTabulationFibonacci (n){

    if (n <= 2){
        return 1;
    }

    let fibNums = [0,1,1]

    for (let i = 3;i <= n;i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }

    return fibNums[n];

}

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ADD UP TO - START 
 
let x = [3, 4, 5, 10000, 100000,1000000];
let correct = [6, 10, 15, 50005000, 5000050000, 500000500000];
let timeOne, timeTwo;
 
answerExplainationEl.textContent = "Given an integer n, return the sum of all numbers up to and including n.";
 
for (let i = 0; i < x.length; i++) {
 
    let listEl = document.createElement('li');
 
    time1 = performance.now();
 
    let sum = addUpToOne(x[i]);
 
    time2 = performance.now();
 
    let coloring = "Path 1: The sum of all numbers up to " + x[i] + " is " + sum;
 
    let proper = (sum == correct[i] ? ", this is correct" : ", this is wrong");
 
    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`
 
    listEl.textContent = coloring + proper + timing;
 
    answerListEl.appendChild(listEl);
 
}
 
for (let i = 0; i < x.length; i++) {
 
    let listEl = document.createElement('li');
 
    time1 = performance.now();
 
    let sum = addUpToTwo(x[i]);
 
    time2 = performance.now();
 
    let coloring = "Path 2: The sum of all numbers up to " + x[i] + " is " + sum;
 
    let proper = (sum == correct[i] ? ", this is correct" : ", this is wrong");
 
    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`
 
    listEl.textContent = coloring + proper + timing;
 
    answerListEl.appendChild(listEl);
 
}
 
 ADD UP TO - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SAME - START 
 
let x = [[1, 2, 3], [1, 3, 4, 2], [1, 3, 4, 2]];
let y = [[1, 4, 9], [1, 4, 16, 25], [1, 4, 9, 16]];
let correct = [true, false, true];
let timeOne, timeTwo;
 
answerExplainationEl.textContent = "Given two arrays of numbers, does the second array contain squares of those items in the first array?";
 
for (let i = 0; i < x.length; i++) {
 
    let listEl = document.createElement('li');
 
    time1 = performance.now();
 
    let same = sameOne(x[i], y[i]);
 
    time2 = performance.now();
 
    let coloring = (same ? "Path 1: The array " + y[i] + " contains squares of the numbers in " + x[i] : "Path 1: The array " + y[i] + " does not contains squares of the numbers in " + x[i]);
 
    let proper = (same == correct[i] ? ", this is correct" : ", this is wrong");
 
    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`
 
    listEl.textContent = coloring + proper + timing;
 
    answerListEl.appendChild(listEl);
 
}
 
for (let i = 0; i < x.length; i++) {
 
    let listEl = document.createElement('li');
 
    time1 = performance.now();
 
    let same = sameTwo(x[i], y[i]);
 
    time2 = performance.now();
 
    let coloring = (same ? "Path 2: The array " + y[i] + " contains squares of the numbers in " + x[i] : "Path 2: The array " + y[i] + " does not contains squares of the numbers in " + x[i]);
 
    let proper = (same == correct[i] ? ", this is correct" : ", this is wrong");
 
    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`
 
    listEl.textContent = coloring + proper + timing;
 
    answerListEl.appendChild(listEl);
 
}
 
 SAME - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ANAGRAM - START 

let x = ['', 'aaz', 'anagram', 'rat', 'awesome', 'qwerty', 'texttwisttime'];
let y = ['', 'zza', 'nagaram', 'car', 'awesom', 'qeywrt', 'timetwisttext'];
let correct = [true, false, true, false, false, true, true];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given two strings, determine if they are anagrams.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let isAnagram = anagramOne(x[i], y[i]);

    time2 = performance.now();

    let coloring = (isAnagram ? "Path 1: '" + x[i] + "' and '" + y[i] + "' are anagrams" : "Path 1: '" + x[i] + "' and '" + y[i] + "' are not anagrams");

    let proper = (isAnagram == correct[i] ? ", this is correct" : ", this is wrong");

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let isAnagram = anagramTwo(x[i], y[i]);

    time2 = performance.now();

    let coloring = (isAnagram ? "Path 2: '" + x[i] + "' and '" + y[i] + "' are anagrams" : "Path 2: '" + x[i] + "' and '" + y[i] + "' are not anagrams");

    let proper = (isAnagram == correct[i] ? ", this is correct" : ", this is wrong");

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let isAnagram = anagramThree(x[i], y[i]);

    time2 = performance.now();

    let coloring = (isAnagram ? "Path 3: '" + x[i] + "' and '" + y[i] + "' are anagrams" : "Path 3: '" + x[i] + "' and '" + y[i] + "' are not anagrams");

    let proper = (isAnagram == correct[i] ? ", this is correct" : ", this is wrong");

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 ANAGRAM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SUM ZERO - START 

let x = [[-3, -2, -1, 0, 1, 2, 3], [-2, 0, 1, 3], [1, 2, 3], [-2, -1, 0, 0, 3, 4], [-4, -3, -2, -1, 0, 1, 2, 5]];
let correct = [[-3, 3], undefined, undefined, [0, 0], [-2, 2]];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, return the first pair that sum to zero, or return undefined if no pair exists.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let pair = sumZeroOne(x[i]);

    time2 = performance.now();

    let coloring = (pair ? "Path 1: [" + x[i] + "] contains the pair [" + pair + "] that sum to zero" : "Path 1: [" + x[i] + "] does not contain a pair that sum to zero");

    let proper;

    if (correct[i] === undefined) {

        proper = (pair === undefined ? ", this is correct" : ", this is wrong")

    } else {

        proper = ((pair[0] === correct[i][0]) && (pair[1] === correct[i][1]) ? ", this is correct" : ", this is wrong");

    }

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let pair = sumZeroTwo(x[i]);

    time2 = performance.now();

    let coloring = (pair ? "Path 2: [" + x[i] + "] contains the pair [" + pair + "] that sum to zero" : "Path 2: [" + x[i] + "] does not contain a pair that sum to zero");

    let proper;

    if (correct[i] === undefined) {

        proper = (pair === undefined ? ", this is correct" : ", this is wrong")

    } else if (correct[i] !== undefined && pair === undefined) {

        proper = ", this is wrong";

    } else {

        proper = ((pair[0] === correct[i][0]) && (pair[1] === correct[i][1]) ? ", this is correct" : ", this is wrong");

    }

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 SUM ZERO - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* COUNT UNIQUE VALUES - START 

let x = [[1,1,1,1,1,2],[1,2,3,4,4,4,7,7,12,12,13],[],[-2,-1,-1,0,1]];
let correct = [2,7,0,4];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, return the count of quantity of unique values in the array.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let unique = countUniqueValuesOne(x[i]);

    time2 = performance.now();

    let coloring = (unique ? "Path 1: [" + x[i] + "] contains " + unique + " unique values"  : "Path 1: [" + x[i] + "] contains no unique values");

    let proper = unique === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let unique = countUniqueValuesTwo(x[i]);

    time2 = performance.now();

    let coloring = (unique ? "Path 2: [" + x[i] + "] contains " + unique + " unique values"  : "Path 2: [" + x[i] + "] contains no unique values");

    let proper = unique === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 COUNT UNIQUE VALUES - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MAX SUBARRAY SUM - START 

let x = [[1, 2, 5, 2, 8, 1, 5], [1, 2, 5, 2, 8, 1, 5], [4, 2, 1, 6], [4, 2, 1, 6, 2], []];
let y = [2, 4, 1, 4, 4]
let correct = [10, 17, 6, 13, null];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers and a number n, return the maximum sum of n consecutive elements in the array.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let maxSum = maxSubarraySumOne(x[i], y[i]);

    time2 = performance.now();

    let coloring = (maxSum ? "Path 1: The maximum sum of " + y[i] + " consecutive elements in the array [" + x[i] + "] is " + maxSum : "Path 1: A maximum sum cannot be found in array[" + x[i] + "]");

    let proper = maxSum === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let maxSum = maxSubarraySumTwo(x[i], y[i]);

    time2 = performance.now();

    let coloring = (maxSum ? "Path 2: The maximum sum of " + y[i] + " consecutive elements in the array [" + x[i] + "] is " + maxSum : "Path 2: A maximum sum cannot be found in array[" + x[i] + "]");

    let proper = maxSum === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 MAX SUBARRAY SUM - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BINARY SEARCH - START 

let x = [[1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]];
let y = [4, 6, 11]
let correct = [3, 5, -1];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers and an element to search for, return the index of the number if it is in the array.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let location = binarySearchOne(x[i], y[i]);

    time2 = performance.now();

    let coloring = (location !== -1 ? "Path 1: The array [" + x[i] + "] contains the element '" + y[i] + "' at index " + location : "Path 1: The array [" + x[i] + "] does not contains the element '" + y[i] + "'");

    let proper = location === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 BINARY SEARCH - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SAME FREQUENCY - START 

let x = [182, 34, 3589578, 22];
let y = [281, 14, 5879385, 222]
let correct = [true, false, true, false];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Compare a pair of integers and return a boolean of whether or not they contain the same frequency of each digit.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let same = sameFrequencyOne(x[i], y[i]);

    time2 = performance.now();

    let coloring = (same ? x[i] + " and " + y[i] + " contains the same frequency of each digit" : x[i] + " and " + y[i] + " do not contain the same frequency of each digit");

    let proper = same === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 SAME FREQUENCY - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* ARE THERE DUPLICATES - START 

let x = [[1,2,3],[1,2,2],['a','b','c','a']];
let correct = [false, true, true]
let timeOne, timeTwo;

answerExplainationEl.textContent = "Compare a series of elements in an array and return if there are duplicates within.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let duplicates = areThereDuplicates(x[i]);

    time2 = performance.now();

    let coloring = (duplicates ? "[" + x[i] + "] contains dupicates" : "[" + x[i] + "] does not contain duplicates");

    let proper = duplicates === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 ARE THERE DUPLICATES - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* AVERAGE PAIR - START 

let x = [[1,2,3], [1,3,3,5,6,7,10,12,19], [-1,0,3,4,5,6],[]];
let y = [2.5,8,4.1,4]
let correct = [true, true, false, false]
let timeOne, timeTwo;

answerExplainationEl.textContent = "given an array of integers and a target average, find if the array contains a pair of integers that averages to the target.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let avePair = averagePair(x[i],y[i]);

    time2 = performance.now();

    let coloring = (avePair ? "[" + x[i] + "] contains a pair of integers that average to " + y[i] : "[" + x[i] + "] does not contain a pair of integers that averages to " + y[i]);

    let proper = avePair === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 AVERAGE PAIR - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* IS SUBSEQUENCE - START 

let x = ['hello', 'sing', 'abc', 'abc'];
let y = ['hello world', 'sting', 'abracadabra', 'acb'];
let correct = [true, true, true, false]
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given a pair of strings, determine if the first string is a subsequence of the second.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let subsequence = isSubsequence(x[i],y[i]);

    time2 = performance.now();

    let coloring = (subsequence ? "'" + x[i] + "' is a subsequence of '" + y[i] + "'" : "'" + x[i] + "' is not a subsequence of '" + y[i] + "'");

    let proper = subsequence === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 IS SUBSEQUENCE - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MIN SUBARRAY LENGTH - START 

let x = [[2, 3, 1, 2, 4, 3], [2, 1, 6, 5, 4], [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], [1, 4, 16, 22, 5, 7, 8, 9, 10], [1, 4, 16, 22, 5, 7, 8, 9, 10], [4, 3, 3, 8, 1, 2, 3], [1, 4, 16, 22, 5, 7, 8, 9, 10]];
let y = [7, 9, 52, 39, 55, 11, 95];
let correct = [2, 2, 1, 3, 5, 2, 0]
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of integers and a target sum, determine the shortest length of subarray that adds together to be greater than or equal to the target.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let subarrayLength = minSubArrayLen(x[i], y[i]);

    time2 = performance.now();

    let coloring = (subarrayLength > 0 ? "The smallest subarray of [" + x[i] + "] that sums to " + y[i] + " is " + subarrayLength + ' elements long' : "There is no subarray of [" + x[i] + "] that sums to " + y[i]);

    let proper = subarrayLength === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 MIN SUBARRAY LENGTH - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FIND LONGEST SUBSTRING - START 

let x = ["", "rithmschool", "thisisawesome", "thecatinthehat", "bbbbbb", "longestsubstring", "thisishowwedoit"];
let correct = [0, 7, 6, 7, 1, 8, 6]
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given a string, return the length of the longest substring composed of only unique characters.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let longest = findLongestSubstring(x[i]);

    time2 = performance.now();

    let coloring = (longest > 0 ? "In the string '" + x[i] + ",' the longest substring composed on unique characters is " + longest + " characters long" : "The given string is empty");

    let proper = longest === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 MIN SUBARRAY LENGTH - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FIND LONGEST SUBSTRING - START 

let x = [2,1,6,12,5];
let correct = [0,0,0,0,0]
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given a number of laughs, recursively laugh in comments.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let zero = recursiveLaugh(x[i]);

    time2 = performance.now();

    console.log("<><><><><><>")

    let coloring = "nothing required here";

    let proper = zero === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 FIND LONGEST SUBSTRING - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FACTORIAL - START 

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let correct = [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800]
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given a number, return the result of that number as a factorial.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let facty1 = iterativeFactorial(x[i]);

    time2 = performance.now();

    let coloring = "Iterative, " + x[i] + "! is " + facty1;

    let proper = facty1 === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let facty2 = recursiveFactorial(x[i]);

    time2 = performance.now();

    let coloring = "Recursive, " + x[i] + "! is " + facty2;

    let proper = facty2 === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 FACTORIAL - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* COLLECT ODDS - START 

let x = [[1,2,3,4,5,6,7,8,9,0],[2,4,5,6], [1,3,5], [2,4,6,8]];
let correct = [[1,3,5,7,9],[5], [1,3,5], []]
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, return the odds.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let odds = collectOdds(x[i]);

    time2 = performance.now();

    let right = compareArrays(odds, correct[i]);

    let plural1 = odds.length > 1 ? "numbers" : "number";

    let plural2 = odds.length > 1 ? "are" : "is";

    let coloring = odds.length > 0 ? "Helper Function Recursion, The odd " + plural1 + " within [" + x[i] + "] " + plural2 + " [" + odds : "Helper Function Recursion, There are no odd numbers within [" + x[i];

    let proper = right ? "], this is correct" : "], this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let odds = pureRecursionCollectOdds(x[i]);

    time2 = performance.now();

    let right = compareArrays(odds, correct[i]);

    let plural1 = odds.length > 1 ? "numbers" : "number";

    let plural2 = odds.length > 1 ? "are" : "is";

    let coloring = odds.length > 0 ? "Pure Recursion, The odd " + plural1 + " within [" + x[i] + "] " + plural2 + " [" + odds : "Pure Recursion, There are no odd numbers within [" + x[i];

    let proper = right ? "], this is correct" : "], this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

COLLECT ODDS - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* POWER - START 

let x = [2, 2, 2];
let y = [0, 2, 4]
let correct = [1, 4, 16]
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given a number, raise it to a given exponent.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let raised = power(x[i], y[i]);

    time2 = performance.now();

    let coloring = x[i] + ", when raised to " + y[i] + ", becomes " + raised;

    let proper = raised === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 POWER - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* POWER - START 

let x = ["awesome", "rithmschool"];
let correct = ["emosewa", "loohcsmhtir"];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given a number, raise it to a given exponent.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let reversed = reverse(x[i]);

    time2 = performance.now();

    let coloring = x[i] + ", when reversed, becomes " + reversed;

    let proper = reversed === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 POWER - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* FLATTEN - START 

let x = [[1, 2, 3, [4, 5] ], [1, [2, [3, 4], [[5]]]], [[1],[2],[3]], [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]];
let correct = [[1,2,3,4,5],[1,2,3,4,5],[1,2,3],[1,2,3]];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of elements, reduce any internal arrays down to their contents.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let flattened = flatten(x[i]);

    time2 = performance.now();

    let coloring = "[" + x[i] + "], when flattened, becomes [" + flattened + "]";

    let proper = compareArrays(flattened,correct[i]) ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 FLATTEN - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* CAPITALIZE - START 

let x = [['car', 'taco', 'banana']];
let correct = [['Car', 'Taco', 'Banana']];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of words, capitalize the first letter.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let capped = capitalizeFirst(x[i]);

    time2 = performance.now();

    let coloring = "[" + x[i] + "], when capitalized, becomes [" + capped + "]";

    let proper = compareArrays(capped, correct[i]) ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 CAPITALIZE - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* LINEAR SEARCH - START 

let states = ["alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia",
    "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", " maryland", "massachusetts",
    "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico",
    "new york", "north carolina", "north dakota", "ohio", "oklahoma", " oregon", "pennsylvania", "rhode island", "south carolina",
    "south dakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington", "west virginia", "wisconsin", "wyoming"];
let x = ["Alabama", "Floorida", "Yaxes", "Taxsachusetts", "Virginia", "North Dakota", "West Dakota"];
let correct = [true, false, false, false, true, true, false];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given a supposed state name, use a linear search to determine if it is one.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let localX = x[i].toLowerCase();

    let isAState = linearSearch(states, localX);

    time2 = performance.now();

    let coloring = isAState ? x[i] + " is a state" : x[i] + " is not a state";

    let proper = isAState === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 LINEAR SEARCH - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BINARY SEARCH - START 

let x = [[1, 3, 5, 7, 9, 11, 13], [1, 2, 3, 4, 5, 6, 7, 8], [1, 5, 9, 10, 13, 16, 20]];
let y = [6, 2, 12];
let correct = [-1, 1, -1];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given a sorted array and an element to search for, perform a binary search and return the index of that element, or -1 if it is not in the array.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let searched = binarySearch(x[i], y[i]);

    time2 = performance.now();

    let coloring = searched != -1 ? y[i] + " is found at index " + searched + " in the array [" + x[i] + "]" : y[i] + " is not found in the array [" + x[i] + "]";

    let proper = searched === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 BINARY SEARCH - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* STRING SEARCH - START 

let x = ["lorie loled", "what we call corn is known elsewhere as maize", "corn is a synonym for grain elsewhere"];
let y = ["lol", "grain", "grain"];
let correct = [6, -1, 22];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given two strings, find the index of the second string if it exists within the first, otherwise return -1.";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let searched = naiveStringSearch(x[i], y[i]);

    time2 = performance.now();

    let coloring = searched != -1 ? "'" + y[i] + "' is found at index " + searched + " in the string '" + x[i] + "'" : "'" + y[i] + "' is not found in the string '" + x[i] + "'";

    let proper = searched === correct[i] ? ", this is correct" : ", this is wrong";

    let timing = `, and this took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + proper + timing;

    answerListEl.appendChild(listEl);

}

 STRING SEARCH - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BUBBLE SORT ASCENDING - START 

let x = [[23,45,6,12,13]];
let correct = [[6,12,13,23,45]];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, sort them in ascending order";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let sorted = bubbleSortAsc(x[i]);

    time2 = performance.now();

    let right = compareArrays(sorted, correct[i]);

    let proper = right ? "correct" : "wrong"

    let coloring = "[" + x[i] + "] when sorted into ascending order becomes [" + sorted + "], this is " + proper;

    let timing = `, and took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + timing;

    answerListEl.appendChild(listEl);

}

/* BUBBLE SORT ASCENDING - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BUBBLE SORT DESCENDING - START 

let x = [[23,45,6,12,13]];
let correct = [[45,23,13,12,6]];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, sort them in ascending order";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let sorted = bubbleSortDesc(x[i]);

    time2 = performance.now();

    let right = compareArrays(sorted, correct[i]);

    let proper = right ? "correct" : "wrong"

    let coloring = "[" + x[i] + "] when sorted into descending order becomes [" + sorted + "], this is " + proper;

    let timing = `, and took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + timing;

    answerListEl.appendChild(listEl);

}

/* BUBBLE SORT DESCENDING - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* SELECTION SORT - START 

let x = [[5, 3, 4, 1, 2]];
let correct = [[1, 2, 3, 4, 5]];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, sort them in ascending order";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let sorted = selectionSort(x[i]);

    time2 = performance.now();

    let right = compareArrays(sorted, correct[i]);

    let proper = right ? "correct" : "wrong"

    let coloring = "[" + x[i] + "] when sorted into ascending order becomes [" + sorted + "], this is " + proper;

    let timing = `, and took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + timing;

    answerListEl.appendChild(listEl);

}

/* SELECTION SORT - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* INSERTION SORT - START 

let x = [[5, 3, 4, 1, 2]];
let correct = [[1, 2, 3, 4, 5]];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, sort them in ascending order";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let sorted = insertionSort(x[i]);

    time2 = performance.now();

    let right = compareArrays(sorted, correct[i]);

    let proper = right ? "correct" : "wrong"

    let coloring = "[" + x[i] + "] when sorted into ascending order becomes [" + sorted + "], this is " + proper;

    let timing = `, and took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + timing;

    answerListEl.appendChild(listEl);

}

/* INSERTION SORT - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* MERGE SORT - START 

let x = [[2,7,4,3,8,1], [12,5,7,3,2,6,4]];
let correct = [[1,2,3,4,7,8],[2,3,4,5,6,7,12]];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, sort them in ascending order";

for (let i = 0; i < x.length; i++) {

let listEl = document.createElement('li');

time1 = performance.now();

let sorted = mergeSort(x[i]);

time2 = performance.now();

let right = compareArrays(sorted, correct[i]);

let proper = right ? "correct" : "wrong"

let coloring = "[" + x[i] + "] when sorted, becomes [" + sorted + "], this is " + proper;

let timing = `, and took ${(time2 - time1)} milliseconds to calculate`

listEl.textContent = coloring + timing;

answerListEl.appendChild(listEl);

}

/* MERGE SORT - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* QUICK SORT - START 

let x = [[2, 7, 4, 3, 8, 1], [12, 5, 7, 3, 2, 6, 4]];
let correct = [[1, 2, 3, 4, 7, 8], [2, 3, 4, 5, 6, 7, 12]];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, sort them in ascending order";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let sorted = quickSort(x[i]);

    time2 = performance.now();

    let right = compareArrays(sorted, correct[i]);

    let proper = right ? "correct" : "wrong"

    let coloring = "[" + x[i] + "] when sorted, becomes [" + sorted + "], this is " + proper;

    let timing = `, and took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + timing;

    answerListEl.appendChild(listEl);

}

/* QUICK SORT - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* RADIX SORT - START 

let x = [[2, 7, 4, 3, 8, 1], [12, 5, 7, 3, 2, 6, 4]];
let correct = [[1, 2, 3, 4, 7, 8], [2, 3, 4, 5, 6, 7, 12]];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, sort them in ascending order";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let sorted = radixSort(x[i]);

    time2 = performance.now();

    let right = compareArrays(sorted, correct[i]);

    let proper = right ? "correct" : "wrong"

    let coloring = "[" + x[i] + "] when sorted, becomes [" + sorted + "], this is " + proper;

    let timing = `, and took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + timing;

    answerListEl.appendChild(listEl);

}

/* RADIX SORT - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* RECURSIVE FIBONACCI - START 

let x = [1,2,3,4,5,6,7,8,9,10,30];//45
let correct = [1,1,2,3,5,8,13,21,34,55,832040];//1134903170
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, sort them in ascending order";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let fibonacciNum = recursiveFibonacci(x[i]);

    time2 = performance.now();

    let proper = fibonacciNum == correct[i] ? "correct" : "wrong"

    let coloring = "Fibonacci sequence number " + x[i] + " is " + fibonacciNum + ", this is " + proper;

    let timing = `, and took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + timing;

    answerListEl.appendChild(listEl);

}

/*RECURSIVE FIBONACCI - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* DYNAMIC MEMOIZATION FIBONACCI - START 

let x = [1,2,3,4,5,6,7,8,9,10,30,45];
let correct = [1,1,2,3,5,8,13,21,34,55,832040,1134903170];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, sort them in ascending order";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let fibonacciNum = dynamicMemoizationFibonacci(x[i]);

    time2 = performance.now();

    let proper = fibonacciNum == correct[i] ? "correct" : "wrong"

    let coloring = "Fibonacci sequence number " + x[i] + " is " + fibonacciNum + ", this is " + proper;

    let timing = `, and took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + timing;

    answerListEl.appendChild(listEl);

}

/*DYNAMIC MEMOIZATION FIBONACCI - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* DYNAMIC TABULATION FIBONACCI - START */

let x = [1,2,3,4,5,6,7,8,9,10,30,45];
let correct = [1,1,2,3,5,8,13,21,34,55,832040,1134903170];
let timeOne, timeTwo;

answerExplainationEl.textContent = "Given an array of numbers, sort them in ascending order";

for (let i = 0; i < x.length; i++) {

    let listEl = document.createElement('li');

    time1 = performance.now();

    let fibonacciNum = dynamicTabulationFibonacci(x[i]);

    time2 = performance.now();

    let proper = fibonacciNum == correct[i] ? "correct" : "wrong"

    let coloring = "Fibonacci sequence number " + x[i] + " is " + fibonacciNum + ", this is " + proper;

    let timing = `, and took ${(time2 - time1)} milliseconds to calculate`

    listEl.textContent = coloring + timing;

    answerListEl.appendChild(listEl);

}

/*DYNAMIC TABULATION FIBONACCI - END */