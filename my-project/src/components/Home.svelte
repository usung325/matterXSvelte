<script>
    import { onMount } from "svelte";
    import { createPhysicsEngine } from "$lib/physics.js";

    let canvasContainer;

    onMount(() => {
        createPhysicsEngine(canvasContainer);
        
    });
    
</script>

<div class="bg-slate-200 flex  flex-col mx-atuo items-center justify-center ">
    <p>what's up</p>
    <div id="canvas-container" bind:this={canvasContainer}>
    </div>
</div>
