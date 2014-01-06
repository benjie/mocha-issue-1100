var assert = require('assert');
var delay = 2000;

describe('Contrived example', function(){
  this.timeout(15000);
  before(function(){
    this.foo = new Date();
  });
  it('exhibits issue', function(done){
    var _this = this;
    setTimeout(function(){
      assert(+new Date() - _this.foo > delay - 10);
      done();
    }, delay);
  });
  it('has a second test', function(done){
    setTimeout(function(){
      assert(true);
      done();
    }, delay);
  });
});
