<script lang="ts">
 const { children, title, initTop, initLeft } = $props();

 console.assert(initTop !== undefined, 'initTop undefined');
 console.assert(initLeft !== undefined, 'initLeft undefined');

 let term_top: number  = $state(initTop);
 let term_left: number = $state(initLeft);

 let start_term_top = 0;
 let start_term_left = 0;
 let start_drag_top = 0;
 let start_drag_left = 0;

 let drag = $state(false);
</script>

<div class="window" style="top: {term_top}px; left: {term_left}px">
    <div class="window-title"
         onmousedown={e => {
          drag = true;
          start_term_top = term_top;
          start_term_left = term_left;
          start_drag_top = e.clientY;
          start_drag_left = e.clientX;
        }} role="dialog"
        class:drag={drag}
         tabindex="0">
        <div class="window-title-icon"></div>
        <div class="window-title-text">{@render title()}</div>
        <div class="window-title-close"></div>
    </div>
    <div class="window-content">
        {@render children() }
    </div>
</div>

<svelte:window onmouseup={() => {drag = false;}}
    onmousemove={e => {
                if (drag) {
                    let dx = e.clientX - start_drag_left;
                    let dy = e.clientY - start_drag_top;

                    term_left = start_term_left + dx;
                    term_top = start_term_top + dy;
                }
                }} />
