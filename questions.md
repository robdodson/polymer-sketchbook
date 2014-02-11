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
