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
    if(n<=1)return n
    return Fibonacci(n-1) + Fibonacci(n-2)
}
console.log(Fibonacci(10));
