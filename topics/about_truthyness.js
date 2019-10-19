
module("About Truthyness (topics/about_truthyness.js)");

// Not truthy! false, 0, 0n, "", null, undefined, and NaN
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy

// ALL true
//if (true)
//if ({})
//if ([])
//if (42)
//if ("0")
//if ("false")
//if (new Date())
//if (-42)
//if (12n)
//if (3.14)
//if (-3.14)
//if (Infinity)
//if (-Infinity)


test("truthyness of positive numbers", function() {
    var oneIsTruthy = 1 ? true : false;
    equal(true, oneIsTruthy, 'is one truthy?');
});

test("truthyness of negative numbers", function() {
    var negativeOneIsTruthy = -1 ? true : false;
    equal(true, negativeOneIsTruthy, 'is -1 truthy?');
});

test("truthyness of zero", function() {
    var zeroIsTruthy = 0 ? true : false;
    equal(false, zeroIsTruthy, 'is 0 truthy?');
});

test("truthyness of null", function() {
    var nullIsTruthy = null ? true : false;
    equal(false, nullIsTruthy, 'is null truthy?');
});
