var assert = require('assert');
describe('Contrived example', function(){
  this.timeout(15000);
  before(function(){
    this.foo = new Date();
  });
  it('exhibits issue', function(done){
    var delay = 10000, _this = this;
    setTimeout(function(){
      assert(+new Date() - _this.foo > delay - 10);
      done();
    }, delay);
  });
});
