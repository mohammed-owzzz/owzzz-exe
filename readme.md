# owzzz-exe: interactive terminal portfolio

welcome to the frontend repository for owzzz-exe, a custom interactive portfolio i built using pure html, css, and vanilla javascript. instead of providing recruiters with a traditional static webpage, i designed this terminal-inspired chat interface to actively present my technical skills, educational background, and full-stack projects in real time. the interface simulates a 1-on-1 command-line conversation, allowing visitors to click through predefined prompts while demonstrating my ability to build dynamic, state-managed user interfaces from scratch without relying on heavy frontend frameworks.

# tech stack

- **frontend structure:** html5
- **styling:** vanilla css3 (custom properties, keyframe animations, backdrop filters)
- **logic:** vanilla javascript (es6+, dom manipulation, event handling)
- **typography:** hosted poppins typeface (light 300 / bold 700)
- **deployment:** github pages

# key features

- **interactive dialogue system:** users select predefined prompts, triggering sequential, delayed dom injections that mimic a live human typing response.
- **state management:** vanilla javascript array filtering dynamically updates the available ui options so users are never trapped in a loop.
- **performant animations:** utilizes javascript's intersection observer api for smooth slide-up animations that trigger instantly as new elements enter the dom.
- **ambient ui:** features a pure css, keyframe-driven radial background that breathes behind the interface, providing a premium visual aesthetic without sacrificing load times.
- **ecosystem integration:** direct, clickable ui cards seamlessly route traffic to my heavy backend projects (like omni-bot) and official professional channels.

# local development setup

follow these steps to run the owzzz-exe frontend on your local machine.

```bash
1. clone the repository
git clone [https://github.com/mohammed-owzzz/owzzz-exe.git](https://github.com/mohammed-owzzz/owzzz-exe.git)
cd owzzz-exe

2. run locally
since this project uses zero dependencies and requires no build steps, running it locally is instant.

simply double-click the index.html file to open it in any modern web browser, or use a tool like vscode live server for hot-reloading.