var exepct = require('expect.js');

var $ = require('jquery');
var Tip = require('../src/tip');
var tip, trigger;
var CONTENT = '_content_';

describe('Tip', function () {

  beforeEach(function () {
    trigger = $('<div style="width:200px;">trigger</div>').appendTo(document.body);
  });

  afterEach(function () {
    tip.element.remove();
    trigger.remove();
  });

  it('content', function () {
    tip = new Tip({
      content: CONTENT
    });
    tip.show();
    expect(tip.element.find('[data-role=content]').html()).to.be(CONTENT);
  });

  it('hover trigger', function (done) {
    tip = new Tip({
      trigger: trigger,
      content: CONTENT
    });
    expect(tip.element.is(':visible')).to.be(false);
    trigger.trigger('mouseover');
    setTimeout(function () {
      expect(tip.element.is(':visible')).to.be(true);
      done();
    }, 80);
  });

  it('content from function', function () {
    tip = new Tip({
      trigger: trigger,
      content: function () {
        return 'test content';
      }
    });
    tip.show();
    expect(tip.element.find('[data-role="content"]').html()).to.be('test content');
  });

  it('stylesheet load', function () {
    tip = new Tip({
      trigger: trigger,
      content: CONTENT
    });
    tip.show();
    var color = tip.element.css('color');
    expect(color == 'rgb(219, 124, 34)' || color == '#db7c22').to.be(true);
  });

  it('set size', function () {
    tip = new Tip({
      trigger: trigger,
      content: CONTENT,
      width: 600,
      height: '1024px'
    });
    tip.show();
    expect(tip.element.find('[data-role="content"]').width()).to.be(600);
    expect(tip.element.find('[data-role="content"]').height()).to.be(1024);
  });

  it('themes', function () {
    tip = new Tip({
      trigger: trigger,
      content: CONTENT
    });
    tip.show();
    expect(tip.get('theme')).to.be('yellow');
    expect(tip.element.hasClass('ui-poptip-yellow')).to.be(true);
    tip.set('theme', 'white');
    expect(tip.element.hasClass('ui-poptip-yellow')).to.be(false);
    expect(tip.element.hasClass('ui-poptip-white')).to.be(true);
    tip.set('theme', 'blue');
    expect(tip.element.hasClass('ui-poptip-yellow')).to.be(false);
    expect(tip.element.hasClass('ui-poptip-white')).to.be(false);
    expect(tip.element.hasClass('ui-poptip-blue')).to.be(true);
  });

  it('arrowPosition', function () {
    tip = new Tip({
      trigger: trigger,
      content: CONTENT
    });
    tip.show();
    expect(tip.get('arrowPosition')).to.be(7);
    expect(tip.get('direction')).to.be('up');
    tip.set('arrowPosition', 10);
    expect(tip.get('direction')).to.be('right');
    tip.set('arrowPosition', 2);
    expect(tip.get('direction')).to.be('left');
    tip.set('arrowPosition', 1);
    expect(tip.get('direction')).to.be('down');
    tip.set('arrowPosition', 5);
    expect(tip.get('direction')).to.be('up');
  });

  it('inViewport top', function () {
    trigger.css({
      position: 'absolute',
      top: 0,
      left: 10
    });
    tip = new Tip({
      trigger: trigger,
      content: CONTENT,
      arrowPosition: 7,
      height: 100,
      inViewport: true
    });
    expect(tip.get('arrowPosition')).to.be(7);
    tip.show();
    expect(tip.get('arrowPosition')).to.be(11);
    tip.hide();
    trigger.css({
      top: 'auto',
      bottom: 0
    });
    tip.show();
    expect(tip.get('arrowPosition')).to.be(7);
    trigger.css({
      position: null,
      top: null,
      left: null
    });
  });

  it('inViewport bottom', function () {
    trigger.css({
      position: 'absolute',
      bottom: 0,
      left: 10
    });
    tip = new Tip({
      trigger: trigger,
      content: CONTENT,
      arrowPosition: 1,
      height: 100,
      inViewport: true
    });
    expect(tip.get('arrowPosition')).to.be(1);
    tip.show();
    expect(tip.get('arrowPosition')).to.be(5);
    tip.hide();
    trigger.css({
      top: 0,
      bottom: 'auto'
    });
    tip.show();
    expect(tip.get('arrowPosition')).to.be(1);
    trigger.css({
      position: null,
      top: null,
      left: null
    });
  });

  it('ignore arrowPosition when there is align', function () {
    tip = new Tip({
      trigger: trigger,
      arrowPosition: 11,
      content: CONTENT,
      align: {
        baseXY: [0, 0],
        selfXY: [0, 0]
      }
    });
    tip.show();
    expect(tip.element.offset().top).to.be(trigger.offset().top);
    expect(tip.element.offset().left).to.be(trigger.offset().left);
  });

});