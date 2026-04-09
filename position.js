
function rotateArray(nums, k) {
    const n = nums.length;
    if (n === 0) return;
    
    k = k % n; 
    function reverse(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]; 
            start++;
            end--;
        }
    }
    reverse(nums, 0, n - 1);      
    reverse(nums, 0, k - 1);      
    reverse(nums, k, n - 1);       
}


let myArr = [89, 76, 37, 28, 12];
rotateArray(myArr, 2);
console.log(myArr); 