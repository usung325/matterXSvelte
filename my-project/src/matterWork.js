
// import { Matter } from "../node_modules/matter-js/build/matter";
import { Matter } from "matter-js";

var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

export function createPhysicsEngine(element) {
    // canvas.width = 300;
    // canvas.height = 300;
    // Initialize Matter.js engine
    const engine = Matter.Engine.create();
    // Add a renderer
    const render = Matter.Render.create({
        element: element,
        engine: engine
    });
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // create two boxes and a ground
    let boxA = Bodies.rectangle(100, 100, 30, 30);
    let boxB = Bodies.rectangle(50, 50, 20, 20);
    let ground = Bodies.rectangle(200, 200, 810, 60, { isStatic: true });
    let ground2 = Bodies.rectangle(0, 10, 100, 400, { isStatic: true });
    let ground3 = Bodies.rectangle(512, 10, 100, 700, { isStatic: true });
    let ground4 = Bodies.rectangle(250, 0, 700, 50, { isStatic: true });

    // Add bodies, constraints, etc.
    let rectangle2 = Bodies.rectangle(300, 50, 10, 10);
    //////////////////////////////////////////////////////////////////////////////////////////

    let mouse = Matter.Mouse.create(render.canvas);
    let mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            render: { visible: false }
        }
    });
    render.mouse = mouse;

    Matter.World.add(engine.world, [rectangle2, boxB, boxA, ground, ground2, ground3, ground4, mouseConstraint]);
    // ...

    // Run the engine
    Matter.Runner.run(engine);
    // Render the scene
    Matter.Render.run(render);

    // Change the canvas size
    const canvas = render.canvas;
    canvas.width = 512; // Desired width
    canvas.height = 200; // Desired height

    // Return the engine or any other necessary objects
    return engine;
};
