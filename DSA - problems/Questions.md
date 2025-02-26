### **Array & String Questions**  

#### **1. Find the second largest element in an array.**  
**Input:**  
```javascript
arr = [12, 35, 1, 10, 34, 1];
```
**Output:**  
```javascript
34
```

#### **2. Reverse a string without using built-in functions.**  
**Input:**  
```javascript
str = "hello";
```
**Output:**  
```javascript
"olleh"
```

#### **3. Check if a string is a palindrome.**  
**Input:**  
```javascript
str = "racecar";
```
**Output:**  
```javascript
true
```

#### **4. Find the first non-repeating character in a string.**  
**Input:**  
```javascript
str = "swiss";
```
**Output:**  
```javascript
"w"
```

#### **5. Find the missing number in an array of 1 to N.**  
**Input:**  
```javascript
arr = [1, 2, 4, 5, 6];
```
**Output:**  
```javascript
3
```

#### **6. Rotate an array to the right by K positions.**  
**Input:**  
```javascript
arr = [1, 2, 3, 4, 5], k = 2;
```
**Output:**  
```javascript
[4, 5, 1, 2, 3]
```

#### **7. Find the longest common prefix among an array of strings.**  
**Input:**  
```javascript
strs = ["flower", "flow", "flight"];
```
**Output:**  
```javascript
"fl"
```

#### **8. Longest Substring Without Repeating Characters.**  
**Input:**  
```javascript
str = "abcabcbb";
```
**Output:**  
```javascript
3
```

#### **9. Count the frequency of characters in a string.**  
**Input:**  
```javascript
str = "hello";
```
**Output:**  
```javascript
{ h: 1, e: 1, l: 2, o: 1 }
```

#### **10. Check if two strings are anagrams.**  
**Input:**  
```javascript
s1 = "listen", s2 = "silent";
```
**Output:**  
```javascript
true
```

---

### **Sorting & Searching**  

#### **11. Implement Bubble Sort, Quick Sort, and Merge Sort.**  
**Input:**  
```javascript
arr = [5, 2, 9, 1, 5, 6];
```
**Output:**  
```javascript
[1, 2, 5, 5, 6, 9]
```

#### **12. Find the Kth smallest/largest element in an array.**  
**Input:**  
```javascript
arr = [7, 10, 4, 3, 20, 15], k = 3;
```
**Output:**  
```javascript
7
```

#### **13. Search an element in a sorted and rotated array.**  
**Input:**  
```javascript
arr = [4, 5, 6, 7, 0, 1, 2], target = 0;
```
**Output:**  
```javascript
4
```

#### **14. Find a pair in an array with a given sum.**  
**Input:**  
```javascript
arr = [1, 4, 7, 12], sum = 11;
```
**Output:**  
```javascript
[4, 7]
```

#### **15. Binary search in a sorted array.**  
**Input:**  
```javascript
arr = [1, 2, 3, 4, 5, 6, 7], target = 5;
```
**Output:**  
```javascript
4
```

---

### **Linked List Questions**  

#### **16. Reverse a linked list.**  
**Input:**  
```javascript
head = [1 -> 2 -> 3 -> 4 -> 5];
```
**Output:**  
```javascript
[5 -> 4 -> 3 -> 2 -> 1]
```

#### **17. Detect a cycle in a linked list (Floyd’s Cycle Detection).**  
**Input:**  
```javascript
head = [3 -> 2 -> 0 -> -4] (cycle at index 1);
```
**Output:**  
```javascript
true
```

#### **18. Merge two sorted linked lists.**  
**Input:**  
```javascript
list1 = [1 -> 3 -> 5], list2 = [2 -> 4 -> 6];
```
**Output:**  
```javascript
[1 -> 2 -> 3 -> 4 -> 5 -> 6]
```

---

### **Stack & Queue Questions**  

#### **19. Implement a stack using an array and linked list.**  
**Input:**  
```javascript
stack.push(10);
stack.push(20);
stack.pop();
```
**Output:**  
```javascript
[10]
```

#### **20. Implement a queue using two stacks.**  
**Input:**  
```javascript
enqueue(1);
enqueue(2);
dequeue();
```
**Output:**  
```javascript
1
```

---

### **Recursion & Backtracking**  

#### **21. Find all subsets of a given array.**  
**Input:**  
```javascript
arr = [1, 2, 3];
```
**Output:**  
```javascript
[[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
```

#### **22. Find the power of a number using recursion.**  
**Input:**  
```javascript
base = 2, exponent = 3;
```
**Output:**  
```javascript
8
```

---

### **Dynamic Programming (Basic)**  

#### **23. Fibonacci series using dynamic programming.**  
**Input:**  
```javascript
n = 6;
```
**Output:**  
```javascript
[0, 1, 1, 2, 3, 5]
```

#### **24. Find the longest common subsequence.**  
**Input:**  
```javascript
s1 = "abcde", s2 = "ace";
```
**Output:**  
```javascript
"ace"
```

---

### **Graph Questions**  

#### **25. Implement BFS and DFS.**  
**Input:**  
```javascript
Graph = { 0: [1, 2], 1: [2], 2: [0, 3], 3: [3] };
```
**Output:**  
```javascript
BFS: [0, 1, 2, 3], DFS: [0, 2, 3, 1]
```

---

### **Bit Manipulation**  

#### **26. Find the only non-repeating element in an array.**  
**Input:**  
```javascript
arr = [2, 3, 5, 4, 5, 3, 4];
```
**Output:**  
```javascript
2
```

#### **27. Count the number of set bits in an integer.**  
**Input:**  
```javascript
n = 5;
```
**Output:**  
```javascript
2
```

---

### **Mathematical & Miscellaneous**  

#### **28. Find the Greatest Common Divisor (GCD) of two numbers.**  
**Input:**  
```javascript
a = 56, b = 98;
```
**Output:**  
```javascript
14
```

#### **29. Convert decimal to binary and vice versa.**  
**Input:**  
```javascript
num = 10;
```
**Output:**  
```javascript
"1010"
```

---


## **🔹 Stack & Queue Questions**  

### **30. Implement a min stack (stack with getMin in O(1)).**  
**Input:**  
```javascript
MinStack.push(3);
MinStack.push(5);
MinStack.getMin();
MinStack.push(2);
MinStack.push(1);
MinStack.getMin();
MinStack.pop();
MinStack.getMin();
```
**Output:**  
```javascript
3
1
2
```

### **31. Find the next greater element in an array.**  
**Input:**  
```javascript
arr = [4, 5, 2, 25];
```
**Output:**  
```javascript
[5, 25, 25, -1]
```

### **32. Implement a queue using a linked list.**  
**Input:**  
```javascript
enqueue(10);
enqueue(20);
dequeue();
enqueue(30);
```
**Output:**  
```javascript
[20, 30]
```

---

## **🔹 Tree Questions**  

### **33. Find the height of a binary tree.**  
**Input:**  
```javascript
Tree: [1, 2, 3, null, null, 4, 5];
```
**Output:**  
```javascript
3
```

### **34. Find the lowest common ancestor (LCA) of two nodes in a BST.**  
**Input:**  
```javascript
Tree = [6, 2, 8, 0, 4, 7, 9], n1 = 2, n2 = 8;
```
**Output:**  
```javascript
6
```

### **35. Check if a binary tree is balanced.**  
**Input:**  
```javascript
Tree = [1, 2, 2, 3, 3, null, null, 4, 4];
```
**Output:**  
```javascript
false
```

### **36. Serialize and deserialize a binary tree.**  
**Input:**  
```javascript
Tree = [1, 2, 3, null, null, 4, 5];
```
**Output:**  
```javascript
"1,2,3,null,null,4,5"
```

---

## **🔹 Trie Questions**  

### **37. Implement a Trie (Prefix Tree).**  
**Input:**  
```javascript
Trie.insert("apple");
Trie.search("apple");
Trie.startsWith("app");
```
**Output:**  
```javascript
true
true
```

### **38. Find all words in a dictionary that start with a given prefix.**  
**Input:**  
```javascript
words = ["dog", "deer", "deal"], prefix = "de";
```
**Output:**  
```javascript
["deer", "deal"]
```

---

## **🔹 Heap Questions**  

### **39. Find the top K frequent elements in an array.**  
**Input:**  
```javascript
arr = [1, 1, 1, 2, 2, 3], k = 2;
```
**Output:**  
```javascript
[1, 2]
```

### **40. Merge K sorted linked lists.**  
**Input:**  
```javascript
lists = [[1 -> 4 -> 5], [1 -> 3 -> 4], [2 -> 6]];
```
**Output:**  
```javascript
[1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6]
```

---

## **🔹 Graph Questions**  

### **41. Find the shortest path in an unweighted graph (BFS).**  
**Input:**  
```javascript
Graph = { A: ["B", "C"], B: ["D"], C: ["D", "E"], D: ["E"], E: [] };
start = "A", end = "E";
```
**Output:**  
```javascript
["A", "C", "E"]
```

### **42. Detect a cycle in a directed graph.**  
**Input:**  
```javascript
Graph = { 0: [1], 1: [2], 2: [3], 3: [1] };
```
**Output:**  
```javascript
true
```

### **43. Find the number of islands in a grid (DFS).**  
**Input:**  
```javascript
grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
];
```
**Output:**  
```javascript
3
```

---

## **🔹 Greedy Algorithm Questions**  

### **44. Find the minimum number of coins for change (Greedy).**  
**Input:**  
```javascript
coins = [1, 2, 5], amount = 11;
```
**Output:**  
```javascript
[5, 5, 1]
```

### **45. Activity selection problem (Max number of activities).**  
**Input:**  
```javascript
start = [1, 3, 0, 5, 8, 5], end = [2, 4, 6, 7, 9, 9];
```
**Output:**  
```javascript
[0, 1, 3, 4]
```

### **46. Fractional Knapsack problem.**  
**Input:**  
```javascript
items = [{ weight: 10, value: 60 }, { weight: 20, value: 100 }, { weight: 30, value: 120 }], capacity = 50;
```
**Output:**  
```javascript
180
```

---

## **🔹 Bit Manipulation**  

### **47. Find the only non-repeating element in an array where every other element repeats twice.**  
**Input:**  
```javascript
arr = [2, 3, 5, 4, 5, 3, 4];
```
**Output:**  
```javascript
2
```

### **48. Count the number of set bits in an integer.**  
**Input:**  
```javascript
n = 5;
```
**Output:**  
```javascript
2
```

---

## **🔹 Mathematical & Miscellaneous Questions**  

### **49. Implement a basic calculator using switch case.**  
**Input:**  
```javascript
operation = "+", num1 = 5, num2 = 3;
```
**Output:**  
```javascript
8
```

### **50. Generate all subsets of a given array (Power Set).**  
**Input:**  
```javascript
arr = [1, 2, 3];
```
**Output:**  
```javascript
[[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
```

---

