# 02_Max communication with JavaScript envoirment
![ALT](https://github.com/L4COUR/La-Cour_Max-Patchers/blob/master/02_Max%20communication%20with%20JavaScript%20envoirment/Screen%20Shot%202018-04-22%20at%2021.19.30.png)

Normally when using max, and you perhaps wanted to calculate something and you maybe isnt the greatest at addition or subtracking or what ever they are called  yu would create a max patch to calculate those difficult tasks for you. a such patch would look something like what is seen on the left
_________________________

However the process can become even more complex by using .js files in the max envoirment, no maybe this is a bit overkill for this task, but think about the possibilities for other potential concepts.
Since all the varibles inside the .js file can be called in the max envoirment we can use commands such as "r [ ]" to receive data parsed through these abstractions

```javascript
function mathTest (a,b) {

  var input1 = a;
  var input2 = b;

  var output1 = input1 + input2;

  outlet(0, output1);
  messnamed("output1",output1);
}
```
