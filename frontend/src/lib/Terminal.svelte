<script lang="ts">
 const user = 'root';
 const host = 'localhost';
 const cwd = '/';

 const lines: string[] = $state(['']);
 const symbol = () => user === 'root' ? '#' : '$';

 const prompt = `[${user}@${host} ${cwd}]${symbol()} `;

 const addInternal = (a: string) => {
     const x = a.split('\n');
     for (let v in x.slice(0, -1)) {
         x[v] += '\n';
     }
     
     lines[lines.length - 1] += x[0];
     for (let v of x.slice(1)) {
         lines.push(v);
     }
 }
 const addPrompt = () => addInternal(prompt);
 const addLine = (a: string) => addInternal(`${a}\n`);
 const addInputLine = (a: string) => {
     addPrompt();
     addLine(a);
 };

 type ERRNO = 'ENOENT';
 const strerror = (err: ERRNO): string => {
     switch (err) {
         case 'ENOENT':
             return 'No such file or directory';
     }
 }
 const perror = (pref: string, err: ERRNO) => {
     addLine(`${pref}: ${strerror(err)}`);
 }

 type ProgFun = (...args: string[]) => number;
 const progNames = ['ls', 'clear', 'whoami', 'pwd'] as const;

 type ProgNames = typeof progNames[number]
 type Progs = {
     [key in ProgNames]: ProgFun;
 };

 function isValidProgName(key: string): key is ProgNames {
     return (progNames as readonly string[]).includes(key);
 }
 const progs: Progs = {
     'ls': (...args: string[]) => {
         alert(args);
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
    role="region">
    {#each lines as line}
        <pre class="terminal-line">{line}</pre><!--
    -->{/each}<!--
  --><input bind:this={inputElement} type="text" class="terminal-input"
           bind:value={input} style="width: {inputWidth}"
           onkeydown={onInputSubmit}
    /><pre class="terminal-line terminal-cursor"> </pre>
</div>
