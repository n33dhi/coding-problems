//Reverse a string
const reverseIt = (string) => {
    let reversed = '';
    for (let i=string.length-1; i>=0; i--) {
        reversed += string[i];
    }
    return reversed;
}

//Find Longest word
const longestWord = (string) => {
    let words = string.split(' ');
    let longest = '';
    for (let word of words) {
        if (word.length > longest.length);
        longest = word;
    }
    return longest;
}

//Palindrome or not
const checkPalindrome = (n) => {
    let d = n;
    let reversed = 0;
    while (d > 0) {
        let ld = d % 10;
        reversed = (reversed*10) + ld;
        d = Math.floor(d/10);
    }
    return reversed === n;
}

//Prime or not
const checkPrime = (n) => {
    let count = 0;
    //O(sqrt(n))
    for (let i=1; i*i<=n; i++) {
        if (n%i == 0) {
            count++;
            if (n/i != i) {
                count++;
            }
        }
    }
    return count > 2 ? false : true;
}

//Print AllDivisors
const allDivisors = (n) => {
    let div = [];
    for (let i=1; i*i<=n; i++) {
        if (n%i == 0) {
            div.push(i);
            if (n/i != i) {
                div.push(n/i);
            }
        }
    }
    return div;
}

//Sqrt of No
const findSqrt = (n) => {
    let i = 2;
    while (i*i <= n) {
        i++;
    }
    return i-1;
}

//GCD or HCF
//O(log pie(min(a,b)))
const GCD = (a,b) => {
    while ( a > 0 && b > 0 ) {
        a > b ? a=a%b : b=b%a;
    }

    if (a == 0) {
        return b;
    } else {
        return a;
    }
}

//BRUTEFORCE METHOD
//O(min(a,b))
const GCD2 = (a,b) => {
    let large = 0;
    for (let i=Math.min(a,b); i>=1; i--) {
        if (a%i == 0 && b%i == 0) {
            large = i;
            break;
        }
    }
    return large;
}

//Recursion
const printNum = () => {
    let n = 0;
    console.log(rec(n))

    const rec = (n) => {
        if (n>10) return;
        console.log(n);
        n++;
        rec(n);
    }
}


//Sum n numbers 
// Recursion: Parameterized 
const printSum = (N, sum) => {
    //base condition
    if (N < 1) {
        console.log(sum);
        return;
    };
    printSum(N-1, sum+N);
}


//Recursion: Functional
const printSum2 = (N) => {
    //base condition
    if (N == 0) {
        return 0;
    };
    return N + printSum2(N-1);
}

//Remove duplicates
const removeDuplicates = (arr) => {
    let result = [];
    for(let i=0; i<arr.length; i++) {
        let isDuplicate = false;
        for(let j=0; j<result.length; j++) {
            if (arr[i] === result[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            result.push(arr[i]);
        }
    }
    return result;
}

//Reverse an array
const reverseArray = (arr) => {
    let start = 0;
    let end = arr.length-1;
    while(start<end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp
        start++;
        end--;
    }
    return arr;
}

//Find Missing Number in an Array
const findMissing = (arr) => {
    let n = arr.length;
    let sum = n*(n+1)/2;
    let actualSum = 0;
    for (let num of arr) {
        actualSum += num;
    }
    return sum-actualSum;
}

//Move zero to an end
const moveZeros = (arr) => {
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i];
        }
    }
    while (count<arr.length) {
        arr[count++] = 0;
    }
    return arr;
}

const zeros = (arr) => {
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count] = arr[i];
            count++;
        }
    }
    while(count<arr.length) {
        arr[count] = 0;
        count++;
    }

    return arr;
}
let arr9 = [2,3,0,9,0,4,0];
console.log(zeros(arr9));

let arr1 = [1,3,4,7];
let arr2 = [5,2,10,13];

const mergeAndSort = (arr1, arr2) => {
    let output = [];
    let i=0, j=0;
    
    while(i<arr1.length && j<arr2.length) {
        if (arr1[i] < arr2[j]) {
            output.push(arr1[i]);
            i++;
        } else {
            output.push(arr2[j]);
            j++;
        }
    }
    
    while(i<arr1.length) {
        output.push(arr1[i]);
        i++
    }
    
    while(j<arr2.length) {
        output.push(arr2[j]);
        j++
    }
    
    return output;
}

let arr = [4,6,7,10,12,14]

const rotateArray = (arr, d) => {
    d=d%arr.length;
    let nums = [];
    for (let i=0; i<d; i++) {
        nums.push(arr[i]);
    }

    for (let i=d; i<arr.length; i++) {
        arr[i-d] = arr[i];
    }

    for (let i=arr.length-d; i<arr.length; i++) {
        arr[i] = nums[i-(arr.length-d)];
    }

    return arr;
}



const print = () => {
    let row = 3;
    let column = 3;
    let arr2d = [];

    for (let i=0; i<row; i++) {
        arr2d[i] = [];
        for (let j=0; j<column; j++) {
            arr2d[i][j] = 0
        }
    }

    return arr2d;
}

console.log(print());
