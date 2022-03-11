const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//const sprites = World.build(Levels.getLevel(4));
let sprites = World.build(Levels.getLevel(4));

const controller = new Controller();

setInterval(() => {

  context.clearRect(0, 0, canvas.width, canvas.height);

  for (const sprite of sprites) {

      if (sprite.win) {
        sprites = World.build(Levels.getLevel(5));
      }

      if (sprite.isDead) {
        sprites = World.build(Levels.getLevel(6));
      }

    CollisionDetector.checkCollisions(sprite, sprites);

    sprite.draw(context);

    sprite.update(canvas, controller);

  }

}, 30);