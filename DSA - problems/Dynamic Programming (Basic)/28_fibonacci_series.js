function fibonacciTab(n) {
    if (n <= 1) return n;

    let fib = [0, 1]; // Base cases
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; // Compute and store
    }

    return fib[n]; // Return nth Fibonacci number
}

console.log(fibonacciTab(10)); // Output: 55
//time complexity O(n)

function Fibonacci(n){
    if(n<=1)return 0
    let fib =[0,1]
    for(let i=2; i<n; i++){
        let nextTerm = fib[i-1] + fib[i-2]
        fib.push(nextTerm)
    }
    return fib
}
console.log(Fibonacci(10));
