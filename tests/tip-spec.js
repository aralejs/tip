define(function(require) {

    var exepct = require('expect');

    var $ = require('$');
    var Tip = require('tip');
    var tip, trigger;
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

});

