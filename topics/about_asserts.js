
module("About Asserts (topics/about_asserts.js)");

//     /------ test name for report 
test("ok", function() {
    ok(true === true, 'what will satisfy the ok assertion?');
});

//         /------ test name for report - PASSES - can be anything!
test("fliberty jibbert", function() {
//test("not ok", function() {    
    ok(false === false, 'what is a false value?');
});


test("equal", function() {
    equal(2, 1 + 1, 'what will satisfy the equal assertion?');
});  //\\
    //  \\
   //    tests here: https://api.qunitjs.com/
  // 