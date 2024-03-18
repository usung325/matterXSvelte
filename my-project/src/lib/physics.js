// lib/physicsUtils.js
import Matter from 'matter-js';

var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

export function createPhysicsEngine() {
  // Initialize Matter.js engine
  const engine = Matter.Engine.create();
  // Add a renderer
  const render = Matter.Render.create({
    element: document.body,
    engine: engine
  });
///////////////////////////////////////////////////////////////////////////////////////////////
// create two boxes and a ground
let boxA = Bodies.rectangle(400, 200, 80, 80);
let boxB = Bodies.rectangle(450, 50, 80, 80);
let ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

// Add bodies, constraints, etc.
let rectangle = Bodies.rectangle(200, 200, 50, 50, {
render: {
    fillStyle: 'blue',
    strokeStyle: 'black'
}
});
//////////////////////////////////////////////////////////////////////////////////////////
  Matter.World.add(engine.world, [rectangle, boxB, boxA, ground]);
  // ...

  // Run the engine
  Matter.Runner.run(engine);
  // Render the scene
  Matter.Render.run(render);

  // Return the engine or any other necessary objects
  return engine;
};