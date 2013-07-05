describe('AmazingFilter', function() {
  var amazing;

  beforeEach(module('app'));

  beforeEach(inject(function($filter) {
    amazing = $filter('amazing');
  }));

  it('should filter words to AMAZING', function() {
    var words = ['lame', 'boring', 'dull', 'pointless', 'slow'];
    words.forEach(function(word) {
      expect(amazing(word)).toEqual('AMAZING');
    });
  });

  it('should interpolate the words in a sentence', function() {
    expect(amazing('This dull talk was pointless')).toEqual('This AMAZING talk was AMAZING');
  });

  it('should treat "sucked" specially', function() {
    expect(amazing('This talk sucked')).toEqual('This talk was AMAZING');
  });
});
