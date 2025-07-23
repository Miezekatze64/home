<script lang="ts">
 import Terminal from './Terminal.svelte'

 import '../app.scss';
 import { afterNavigate } from '$app/navigation';
 import type { Component } from 'svelte';

 type Application = {
     focus: () => void,
 };
 type AppComponent = {
     index: number,
     component: Component<{
         initTop: number, initLeft: number
     }, Application, "">,
     obj: Application | undefined
 };
 let windows: AppComponent[] = $state([
     {index: 0, component: Terminal, obj: undefined as Application | undefined},
     {index: 1, component: Terminal, obj: undefined as Application | undefined},
     {index: 2, component: Terminal, obj: undefined as Application | undefined},
 ]);

 const {children} = $props();

 afterNavigate(() => {
     let end = windows.length - 1;
     for (let i of windows.keys()) {
         if (windows[i].index == end) {
             windows[i].obj?.focus();
             break;
         }
     }
 });
</script>

<main class="main">
    <noscript>
        <div style="width: 51vw;">
        <hr>
        <h2>
            <marquee>
                Please enable Javascript to use this web site.
                We expect Javascript to be available in 2025+.
                If you are using an extension (i.e. adblocker)
                that blocked the Javascript on this site, please
                disable it
            </marquee>
        </h2>
        <hr>
        </div>
    </noscript>

    {#each windows as win, i}
        {@const Win = win.component}
        <div class="window-wrapper" style="z-index: {win.index};"
             onmousedown={() => {
                 let oindex = win.index;
                 for (let w of windows) {
                     if (w.index >= oindex) {
                         w.index--;
                     }
                 }
                 win.index = windows.length-1
             }} role="button" tabindex="0" id="window-wrapper-{i}">
            <Win initTop={i*70+100} initLeft={i*50} bind:this="{win.obj}" />
        </div>
    {/each}

    {@render children()}
</main>
