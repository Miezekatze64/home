<script lang="ts">
 const { children, title, initTop, initLeft, focus } = $props();

 console.assert(initTop !== undefined, 'initTop undefined');
 console.assert(initLeft !== undefined, 'initLeft undefined');

 let win_top: number  = $state(initTop);
 let win_left: number = $state(initLeft);

 let win_width:  number = $state(960);
 let win_height: number = $state(480);

 let start_win_top = 0;
 let start_win_left = 0;
 let start_drag_top = 0;
 let start_drag_left = 0;

 let drag = $state(false);

 const getWidth = () => document.body.clientWidth;
 const getHeight = () => document.body.clientHeight;

 function moveWindow(e: MouseEvent) {
     e.preventDefault();

     if (!drag) return;
     let dx = e.clientX - start_drag_left;
     let dy = e.clientY - start_drag_top;

     win_left = start_win_left + dx;
     win_top = start_win_top + dy;

     if (win_left < 0) win_left = 0;
     if (win_top < 0) win_top = 0;
     if (win_left + win_width > getWidth()) win_left = getWidth() - win_width;
     if (win_top + win_height > getHeight()) win_top = getHeight() - win_height;
 }

 function dragStart(e: MouseEvent) {
     drag = true;
     start_win_top = win_top;
     start_win_left = win_left;
     start_drag_top = e.clientY;
     start_drag_left = e.clientX;
 }
</script>

<div class="window" style="top: {win_top}px; left: {win_left}px; width: {win_width}px; height: {win_height}px;">
    <div class="window-title"
         onmousedown={dragStart} role="dialog" class:drag={drag} tabindex="0">
        <div class="window-title-icon"></div>
        <div class="window-title-text">{@render title()}</div>
        <div class="window-title-close"></div>
    </div>
    <div class="window-content">
        {@render children() }
    </div>
</div>

<svelte:window
    onmouseup={() => {if (drag) focus(); drag = false;}}
    onmousemove={moveWindow} />
