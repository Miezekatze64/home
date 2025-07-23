<script lang="ts">
 import Window from "./Window.svelte";

 import { onMount } from "svelte";
 type Dir = { [key: string]: Direntry | undefined };
 type Direntry = {
     "type": "file",
     "content": string,
 } | {
     "type": "dir",
     "children": Dir
 };

 import files_ from "../../../content.json" with {type: "json"};
 import { goto } from "$app/navigation";
 const files: Direntry = files_ as unknown as Direntry;

 const user = 'root';
 const host = 'localhost';
 let cwd = $state('/');

 function resolvePath(path: string): {entry: Direntry, path: string} | ERRNO {
     let file = files;

     if (!path.startsWith('/')) {
         path = `${cwd}/${path}`;
     }
     path = path.replaceAll('//', '/');
     if (path.startsWith('/')) {
         path = path.slice(1); 
     }
     let parts = path.split('/');
     parts = parts.filter(x => x !== '' && x !== '.');
     let nparts = [];
     for (let part of parts) {
         if (part === '..') {
             nparts.pop();
         } else {
             nparts.push(part);
         }
     }
     path = nparts.join('/');

     let stack: Direntry[] = [];
     for (let part of parts) {
         if (file.type === "file") {
             return 'ENOTDIR';
         } else {
             const children = file.children;
             if (children[part]) {
                 stack.push(file);
                 file = children[part]
             } else {
                 return 'ENOENT';
             }
         }
     }

     return {entry: file, path: `/${path}`};
 }


 const lines: string[] = $state(['']);
 const symbol = () => user === 'root' ? '#' : '$';

 const prompt = () => `[${user}@${host} ${cwd}]${symbol()} `;

 let terminal: HTMLElement;
 const addInternal = (a: string) => {
     const x = a.split('\n');
     for (let v in x.slice(0, -1)) {
         x[v] += '\n';
     }
     
     lines[lines.length - 1] += x[0];
     for (let v of x.slice(1)) {
         lines.push(v);
     }

     queueMicrotask(() => {
         if (terminal) {
             terminal.scrollTop = terminal.scrollHeight;
         }
     });
 }

 const addPrompt = () => addInternal(prompt());
 const addLine = (a: string) => addInternal(`${a}\n`);
 const addInputLine = (a: string) => {
     addPrompt();
     addLine(a);
 };

 type ERRNO = 'ENOENT' | 'EISDIR' | 'ENOTDIR' | 'ETOOMANYARGS';
 const strerror = (err: ERRNO): string => {
     switch (err) {
         case 'ENOENT':
             return 'No such file or directory';
         case 'EISDIR':
             return 'Is a directory';
         case 'ENOTDIR':
             return 'Not a directory';
         case 'ETOOMANYARGS':
             return 'Too many arguments';
     }
 }
 const perror = (pref: string, err: ERRNO) => {
     addLine(`${pref}: ${strerror(err)}`);
 }

 type ProgFun = (...args: string[]) => number;
 const progNames = ['ls', 'clear', 'whoami', 'pwd', 'cd', 'help'] as const;
 type ProgNames = typeof progNames[number]

 const description: {[key in ProgNames]: string} = {
     'ls':     'list files',
     'clear':  'clear screen',
     'whoami': 'print user',
     'pwd':    'print current directory',
     'cd':     'change directory',
     'help':   'list availible commands'
 };

 type Progs = {
     [key in ProgNames]: ProgFun;
 };

 function isValidProgName(key: string): key is ProgNames {
     return (progNames as readonly string[]).includes(key);
 }
 const progs: Progs = {
     'ls': (..._args: string[]) => {
         const dir = resolvePath(cwd);
         if (typeof dir === 'string') {
             perror('ls', dir);
         } else if (dir.entry.type !== 'dir') {
             perror('ls', 'ENOTDIR');
         } else {
             const files = Object.keys(dir.entry.children).sort();
             for (let idx of files.keys()) {
                 if (idx !== 0) addInternal(' ');
                 addInternal(files[idx]);
             }
             addLine('');
         }
         return 1;
     },
     'clear': (..._args: string[]) => {
         lines.length = 0;
         lines.push('');
         return 0;
     },
     'whoami': (..._args: string[]) => {
         addLine(user);
         return 0;
     },
     'pwd': (..._args: string[]) => {
         addLine(cwd);
         return 0;
     },
     'cd': (...args: string[]) => {
         if (args.length > 1) {
             perror('cd', 'ETOOMANYARGS');
             return 1;
         }
         let path;
         if (args.length === 0) {
             path = '/';
         } else {
             path = args[0];
         }

         const dir = resolvePath(path);
         if (typeof dir === 'string') {
             perror(`cd: ${path}`, dir);
         } else if (dir.entry.type !== 'dir') {
             perror(`cd: ${path}`, 'ENOTDIR');
         } else {
             goto(`#${dir.path}`);
             cwd = dir.path;
         }

         return 0;
     },
     'help': (..._args: string[]) => {
         addLine('Availible commands:');
         let longest = progNames.map(x => x.length)
                                .reduce((a, b, _i, _arr) => Math.max(a, b));
         for (let prog of progNames) {
             addLine(prog + ' '.repeat(longest + 1 - prog.length) + ' -- ' + description[prog]);
         }
         return 0;
     }
 };

 let retcode = 0;
 const submitLine = (a: string) => {
     if (a === '') return;

     let vals = a.split(' ');
     if (vals.length === 0) return;
     const name = vals[0];
     const args = vals.slice(1);

     if (isValidProgName(name)) {
         retcode = progs[name](...args);
     } else {
         perror(name, 'ENOENT');
         retcode = 255;
     }
 };

 let inputElement: HTMLInputElement;

 let input = $state('');
 let inputWidth = $state('0ch');
 $effect(() => {
     inputWidth = input.length + 'ch';
 });

 onMount(() => {
     const path = window.location.hash.slice(1);
     const res = resolvePath(path);

     if (typeof res === 'string') {
         perror(path, res);
     } else if (res.entry.type !== 'dir') {
         perror(path, 'ENOTDIR');
     } else {
         if (res.path !== path) {
             goto(`#${res.path}`);
         }
         cwd = res.path;
     }

     addInputLine('help');
     submitLine('help');
     addPrompt();

     inputElement.focus();
 });

 const onInputSubmit = (e: KeyboardEvent) => {
     if (e.key !== 'Enter') return;
     addLine(input);
     submitLine(input);
     input = '';
     addPrompt();
 };

 const {initTop, initLeft} = $props();

 export function focus() {
     inputElement.focus();
 }
</script>

<Window initTop={initTop} initLeft={initLeft} focus={focus}>
    {#snippet title()}
        <span>xterm@localhost {cwd}</span>
    {/snippet}
    <div class="terminal"
         onclick={() => inputElement.focus()}
        onkeydown={() => undefined}
        bind:this={terminal}
        role="button"
        tabindex="0">
        {#each lines as line}
            <pre class="terminal-line">{line}</pre><!--
-->{/each}<!--
--><input bind:this={inputElement} type="text" class="terminal-input"
          bind:value={input} style="width: {inputWidth}"
          onkeydown={onInputSubmit}
   /><pre class="terminal-line terminal-cursor">&nbsp;</pre>
    </div>
</Window>
