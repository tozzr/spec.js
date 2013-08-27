spec.js
=======

a naive rspec clone written in javascript. mainly for educational purposes.

you can use it like this:

describe("matcher for integer", function() {

  it("works for equal", function() {
	
    foo.should(equal(5));
	
  });
	
  it("works for not_equal", function() {
    
    foo.should(not_equal(4));
  });
  
  it("works for lower_than", function() {
    
    foo.should_be(lower_than(6));
  
  });

});
