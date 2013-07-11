define(function(require) {

    var exepct = require('expect');

    var $ = require('$');
    var Tip = require('tip');
    var Atip = require('atip');
    var tip, atip, trigger;
    var TPL = '<div><div data-role="content"></div></div>';
    var CONTENT = '_content_';

    describe('Tip', function() {

        beforeEach(function() {
            trigger = $('<div style="width:200px;">trigger</div>').appendTo(document.body);
        });

        afterEach(function() {
            tip.element.remove();
            trigger.remove();
        });

        it('content', function() {
            tip = new Tip({
                template: TPL,
                content: CONTENT
            });
            tip.show();
            expect(tip.element.find('[data-role=content]').html()).to.be(CONTENT);
        });

        it('hover trigger', function(done) {
            tip = new Tip({
                trigger: trigger,
                template: TPL,
                content: CONTENT
            });
            expect(tip.element.is(':visible')).to.be(false);
            trigger.trigger('mouseover');
            setTimeout(function() {
                expect(tip.element.is(':visible')).to.be(true);
                done();
            }, 80);
        });

        it('direction up', function() {
            tip = new Tip({
                trigger: trigger,
                template: TPL,
                content: CONTENT
            });
            tip.show();
            expect(tip.element.offset().top).to.be.below(trigger.offset().top);
        });

        it('direction down', function() {
            tip = new Tip({
                trigger: trigger,
                template: TPL,
                content: CONTENT,
                direction: 'down'
            });
            tip.show();
            expect(tip.element.offset().top).to.be.above(trigger.offset().top);
        });

        it('direction left', function() {
            tip = new Tip({
                trigger: trigger,
                template: TPL,
                content: CONTENT,
                direction: 'left'
            });
            tip.show();
            expect(tip.element.offset().left).to.be.below(trigger.offset().left);
        });

        it('direction right', function() {
            tip = new Tip({
                trigger: trigger,
                template: TPL,
                content: CONTENT,
                direction: 'right'
            });
            tip.show();
            expect(tip.element.offset().left).to.be.above(trigger.offset().left);
        });

        it('distance', function() {
            tip = new Tip({
                trigger: trigger,
                template: TPL,
                content: CONTENT,
                distance: 20
            });
            tip.show();
            expect(tip.element.offset().top).to.be(trigger.offset().top - trigger.height() - 20);
        });

        it('distance down', function() {
            tip = new Tip({
                trigger: trigger,
                template: TPL,
                content: CONTENT,
                direction: 'down',         
                distance: 0
            });
            tip.show();
            expect(tip.element.offset().top).to.be(trigger.offset().top + trigger.height());
        });

        it('arrowShift', function() {
            tip = new Tip({
                trigger: trigger,
                template: TPL,
                content: CONTENT,
                distance: 0,
                arrowShift: 50
            });
            tip.show();
            expect(tip.element.offset().left).to.be(trigger.offset().left + trigger.width()/2 - 50);
        });

        it('content from function', function() {
            tip = new Tip({
                trigger: trigger,
                template: TPL,                
                content: function() {
                    return 'test content';
                }
            });
            tip.show();
            expect(tip.element.find('[data-role="content"]').html()).to.be('test content');
        });

        it('negative arrowShift', function() {
            tip = new Tip({
                trigger: trigger,
                template: TPL,
                content: CONTENT,
                distance: 0,
                arrowShift: -10
            });
            tip.show();
            expect(tip.element.offset().left).to.be(trigger.offset().left + trigger.width()/2 - tip.element.width() + 10);
        });

    });

    describe('Atip', function() {

        beforeEach(function() {
            trigger = $('<div style="width:200px;">trigger</div>').appendTo(document.body);
        });

        afterEach(function() {
            atip.element.remove();
            trigger.remove();
        });

        it('atip is a Tip ', function() {
            atip = new Atip({
                trigger: trigger,
                inViewport: true,
                content: CONTENT
            });
            atip.show();
            expect(atip.element.find('[data-role=content]').html()).to.be(CONTENT);
            expect(Atip.superclass.constructor).to.be(Tip);
        });

        it('stylesheet load', function() {
            atip = new Atip({
                trigger: trigger,
                content: CONTENT
            });
            atip.show();
            expect(atip.element.css('color')).to.be('rgb(219, 124, 34)');            
        });

        it('themes', function() {
            atip = new Atip({
                trigger: trigger,
                content: CONTENT
            });
            atip.show();
            expect(atip.get('theme')).to.be('yellow');
            expect(atip.element.hasClass('ui-poptip-yellow')).to.be(true);
            atip.set('theme', 'white');
            expect(atip.element.hasClass('ui-poptip-yellow')).to.be(false);
            expect(atip.element.hasClass('ui-poptip-white')).to.be(true);
            atip.set('theme', 'blue');
            expect(atip.element.hasClass('ui-poptip-yellow')).to.be(false);
            expect(atip.element.hasClass('ui-poptip-white')).to.be(false);
            expect(atip.element.hasClass('ui-poptip-blue')).to.be(true);
        });

        it('arrowPosition', function() {
            atip = new Atip({
                trigger: trigger,
                content: CONTENT
            });
            atip.show();
            expect(atip.get('arrowPosition')).to.be(7);
            expect(atip.get('direction')).to.be('up');
            atip.set('arrowPosition', 10);
            expect(atip.get('direction')).to.be('right');
            atip.set('arrowPosition', 2);
            expect(atip.get('direction')).to.be('left');
            atip.set('arrowPosition', 1);
            expect(atip.get('direction')).to.be('down');
            atip.set('arrowPosition', 5);
            expect(atip.get('direction')).to.be('up');
        });

        it('inViewport top', function() {
            trigger.css({
                position: 'absolute',
                top: 0,
                left: 10
            });
            atip = new Atip({
                trigger: trigger,
                content: CONTENT,
                arrowPosition: 7,
                height: 100,
                inViewport: true
            });
            expect(atip.get('arrowPosition')).to.be(7);
            atip.show();
            expect(atip.get('arrowPosition')).to.be('11');
            trigger.css({
                position: null,
                top: null,
                left: null
            });
        });

        it('inViewport bottom', function() {
            trigger.css({
                position: 'absolute',
                bottom: 0,
                left: 10
            });
            atip = new Atip({
                trigger: trigger,
                content: CONTENT,
                arrowPosition: 1,
                height: 100,
                inViewport: true
            });
            expect(atip.get('arrowPosition')).to.be(1);
            atip.show();
            expect(atip.get('arrowPosition')).to.be('5');
            trigger.css({
                position: null,
                top: null,
                left: null
            });
        });


    });

});

