<script>
    import { onMount } from "svelte";
    import { createPhysicsEngine } from "$lib/physics.js";

    let canvasContainer;

    onMount(() => {
        createPhysicsEngine(canvasContainer);
        
    });
</script>

<div id="canvas-container" bind:this={canvasContainer}>
    <!-- The canvas will be appended here by Matter.js -->
</div>
