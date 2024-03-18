<script>
    import { createPhysicsEngine } from '$lib/physics.js';
    import { onMount } from 'svelte';
    import { Matter } from 'matter-js';
  
    // Initialize the physics engine when the component mounts
    onMount(() => {
        createPhysicsEngine();
    });

</script>

<p> this is home </p>