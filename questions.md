## polymer elements

### polymer-animation

- how does duration Infinity work?
- why does rotate3d(1, 1, 1, 360deg) not work?
  - <polymer-animation-prop name="transform" value="rotate3d(1, 1, 1, 360deg)"></polymer-animation-prop>

## Web Animations

- Is web animations not included in polymer?
- Why doesn't rotate3d work or why can't you use multiple transforms?
  - var box = document.querySelector('.box');
    document.timeline.play(new ParGroup([
      new Animation(box, [
        { transform: 'rotateX(0deg)' },
        { transform: 'rotateX(360deg)' }
      ], { duration: 1 }),
      new Animation(box, [
        { transform: 'rotateY(0deg)' },
        { transform: 'rotateY(360deg)' }
      ], { duration: 1 })
    ],
    {
      direction: 'alternate',
      iterations: Infinity
    }));

## Object.observe

## Mutation Observer

## Node.bind

- The textNode example doesn't seem to work. I get [object Object]
  - var obj = {
      path: {
        to: {
          value: 'hi'
        }
      }
    };

    var textNode = document.createTextNode('mytext');
    textNode.bind('textContent', obj, 'path.to.value');

- Can't uncheck the checkbox
  - var obj = {
      path: {
        to: {
          bar: null
        }
      }
    };

    var foo = document.getElementById('foo');
    foo.bind('checked', obj, 'path.to.bar');

- Binding to textarea's value gives me [object Object]
  - <textarea name="foo" id="foo" cols="30" rows="10"></textarea>

    <script>
    'use strict';

    var obj = {
      path: {
        to: {
          bar: 'Hello, world!'
        }
      }
    };

    var foo = document.getElementById('foo');
    foo.bind('value', obj, 'path.to.bar');
    </script>

- Binding to select's value comes up blank
  - <select name="foo" id="foo">
      <option value="bar">bar</option>
      <option value="baz">baz</option>
      <option value="qux">qux</option>
    </select>

    <script>
    'use strict';

    var obj = {
      path: {
        to: {
          bar: 'bar'
        }
      }
    };

    var foo = document.getElementById('foo');
    foo.bind('value', obj, 'path.to.bar');
    </script>

- Binding to select's selectedIndex always shows the first value
  - <select name="foo" id="foo">
      <option value="bar">bar</option>
      <option value="baz">baz</option>
      <option value="qux">qux</option>
    </select>

    <script>
    'use strict';

    var obj = {
      path: {
        to: {
          bar: 2
        }
      }
    };

    var foo = document.getElementById('foo');
    foo.bind('selectedIndex', obj, 'path.to.bar');
    </script>
