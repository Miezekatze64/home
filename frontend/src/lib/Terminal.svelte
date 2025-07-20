<script lang="ts">
 type Dir = { [key: string]: Direntry | undefined };
 type Direntry = {
     "type": "file",
     "content": string,
 } | {
     "type": "dir",
     "children": Dir
 };

 import files_ from "../../../content.json";
 const files: Direntry = files_ as unknown as Direntry;

 const user = 'root';
 const host = 'localhost';
 const cwd = '/';

 const resolvePath = (path: string): {entry: Direntry, path: string} | ERRNO => {
     let file = files;

     if (!path.startsWith('/')) {
         path = cwd + path;
     }
     path = path.replaceAll('//', '/');
     if (path.startsWith('/')) {
         path = path.slice(1); 
     }
     let parts = path.split('/');
     parts = parts.filter(x => x !== '' && x !== '.');
     path = parts.join('/');

     for (let part of parts) {
         if (file.type === "file") {
             return 'ENOTDIR';
         } else if (part === '.' || part === '') {
             continue;
         } else {
             const children = file.children;
             if (children[part]) {
                 file = children[part]
             } else {
                 return 'ENOENT';
             }
         }
     }

     return {entry: file, path: path};
 }


 const lines: string[] = $state(['']);
 const symbol = () => user === 'root' ? '#' : '$';

 const prompt = `[${user}@${host} ${cwd}]${symbol()} `;

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

 const addPrompt = () => addInternal(prompt);
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
 const progNames = ['ls', 'clear', 'whoami', 'pwd', 'cd'] as const;

 type ProgNames = typeof progNames[number]
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
             perror(`cd: ${dir}`, dir);
         } else if (dir.entry.type !== 'dir') {
             perror(`cd: ${dir}`, 'ENOTDIR');
         } else {
             window.location.href = dir.path;
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

 addInputLine('ls');
 addLine('Hello, World => 42');
 addPrompt();

 let inputElement: HTMLInputElement;

 let input = $state('');
 let inputWidth = $state('0ch');
 $effect(() => {
     inputWidth = input.length + 'ch';
 })

 const onInputSubmit = (e: KeyboardEvent) => {
     if (e.key !== 'Enter') return;
     addLine(input);
     submitLine(input);
     input = '';
     addPrompt();
 };

</script>

<div class="terminal"
     onmouseenter={() => inputElement.focus()}
    bind:this={terminal}
    role="region">
    {#each lines as line}
        <pre class="terminal-line">{line}</pre><!--
-->{/each}<!--
--><input bind:this={inputElement} type="text" class="terminal-input"
          bind:value={input} style="width: {inputWidth}"
          onkeydown={onInputSubmit}
   /><pre class="terminal-line terminal-cursor"> </pre>
</div>
