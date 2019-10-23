// interface docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp

module("About Regular Expressions (topics/about_regular_expressions.js)");

test("exec", function() {
    var numberFinder = /(\d).*(\d)/;
    var results = numberFinder.exec("what if 6 turned out to be 9?");
    //ok(results.equalTo([__, __, __]), 'what is the value of results?');
    
    // FAILS - late quick guess - very late
    //ok(results.equalTo(["6 turned out to be 9", "6", "9", index: 8, input: "what if 6 turned out to be 9?", groups: undefined]), 'what is the value of results?');
    //ok(results.equalTo(['6 turned out to be 9', index: 1, input: "what if 6 turned out to be 9?"]), 'what is the value of results?');    //
    // https://api.qunitjs.com/assert/ok
    // ok just looking for truthyness
    //
    // equalTo is not QUnit - its a monkey patch
    // Array.prototype.equalTo = function(compareTo) { ... }  << Ln:5 koans.js

    // FAILS - from console
    //ok(results.equalTo(["6 turned out to be 9", "6", "9", index: 8, input: "what if 6 turned out to be 9?", groups: undefined]), 'what is the value of results?');

    // lets dissect:
    console.log(results);
    //["6 turned out to be 9", "6", "9", index: 8, input: "what if 6 turned out to be 9?", groups: undefined] < object
    console.log(typeof(results));
    // object
    console.log(results.keys());        // USE: Object.keys(results)
    // Array IteratorÊ{}
    console.log(Object.keys(results));  // not results.keys()
    // ["0", "1", "2", "index", "input", "groups"]    
    
    //ok(results.equalTo({0:"6 turned out to be 9", 1:"6", 2:"9", index: 8, input: "what if 6 turned out to be 9?", groups: undefined}), 'what is the value of results A?');
                //          ^^^ actual result!
    // PASS            
    ok(results.equalTo(["6 turned out to be 9", "6", "9"]), 'what is the value of results B?');

    
});

test("test", function() {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
    // look for occurance of /string_bla/.test(target)  // returns true / false
    var containsSelect = /select/.test("  select * from users ");
    equal(true, containsSelect, 'does the string provided contain "select"?');
});

test("match", function() {
    // flags
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Parameters
    var matches = "what if 6 turned out to be 9?".match(/(\d)/g);
    ok(matches.equalTo(['6', '9']), 'what is the value of matches?');
});

test("replace", function() {
    var pie = "apple pie".replace("apple", "strawberry");
    equal('strawberry pie', pie, 'what is the value of pie?');

    pie = "what if 6 turned out to be 9?".replace(/\d/g, function(number) { // the second parameter can be a string or a function
        var map = {'6': 'six','9': 'nine'};  // is this declared o the stack every time? TODO
        return map[number];
    });
    equal("what if six turned out to be nine?", pie, 'what is the value of pie?');
});

// THE END - I feel like there is A LOT MORE that could be done here!
// TODO extend QUnits
