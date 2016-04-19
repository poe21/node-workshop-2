// Creating our own callback-receiving functions (higher-order functions)

// Create a file called call-callbacks.js where all your code will be

// Create a function called firstChar that takes a string and a callback, 
// and "returns" the first character of the string after one second.
// NOTE: You won't be allowed to use the return keyword, because you'll only be "returning" in the callback 
// to setTimeout, way after your function has finished executing.

function firstChar(string, callback) {
    setTimeout(function() {
        var first = string.substring(0,1);
        callback(first);
    }, 1000);
}

firstChar("hello", function(string) {
    console.log(string);
});

// Create a function called lastChar that takes a string and "returns" 
// the last character of the string after one second.

function lastChar(string, callback) {
    setTimeout(function() {
        var last = string.substring((string.length - 1), string.length);
        callback(last);
    }, 1000);
}

lastChar("hello", function(string) {
    console.log(string);
});

// Create a function called getFirstAndLast that takes a string and "returns" the first+last character of the 
// string. Your function should use firstChar and lastChar to do its work. 
// I should be able to call your function like this:
//   getFirstAndLast("hello", function(firstLast) {
//     console.log(firstLast); // should output "ho"
//   });

function getFirstAndLast(string, callback) {
    firstChar(string, function(str1) {
        lastChar(string, function(str2) {
            callback(str1+str2);
        });
    });
}

getFirstAndLast("hello", function(str) {
    console.log(str);
});

// Add/commit/push
// Create a pull request, and keep pushing to it after each exercise