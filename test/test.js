import {sayHello} from '../js/main.js';
import {loaded} from '../js/main.js';

QUnit.module('hello', function() {

    QUnit.test("make sure that window.onload is set to loaded", function(assert) {
        assert.equal(window.onload, loaded);
    });

    QUnit.test('make sure the hello function says hello', function(assert) {
        var result = sayHello();
        assert.equal(result, 'hello');
    });


});
