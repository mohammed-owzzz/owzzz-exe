const preloadedBot = new Image();
preloadedBot.src = "owaiz chibi.png";
const preloadedUser = new Image();
preloadedUser.src = "aliya chibi.png";

const chatContainer = document.getElementById('chat-container');
const buttonContainer = document.getElementById('button-container');

let availableOptions = ['about', 'projects', 'contact'];

const chatData = {
    start: {
        bot: [
            "Hey there, I'm Owaiz.",
            "I'm a <span class=\"highlight\">Computer Engineering</span> student and <span class=\"highlight\">Full-Stack Developer</span> passionate about building scalable applications and integrating <span class=\"highlight\">AI solutions</span>.",
            "P.S. Want to know more about me? Click on the buttons below."
        ]
    },
    about: {
        user: "Tell me more about yourself.",
        bot: [
            "I stand at the intersection of academia and innovation. As a Computer Engineering student from <span class=\"highlight\">Mumbai, India</span>, my journey in technology is driven by a never-ending curiosity.",
            "With my sights set on the ever-expanding horizons of computer science, I'm carving out my niche in <span class=\"highlight\">full-stack development</span> and <span class=\"highlight\">artificial intelligence</span>.",
            "I'm not just preparing for the future of technology - I'm actively shaping it."
        ],
        label: "Tell me more about yourself"
    },
    projects: {
        user: "What have you built?",
        bot: [
            "My portfolio of software projects is diverse. I've developed everything from custom scripts to full web applications.",
            "One project that stands out right now is <span class=\"highlight\">Lexicon</span>. You can click the card below to test the expansion engine directly.",
            `<a href="https://mohammed-owzzz.github.io/lexicon/" target="_blank" style="text-decoration: none; display: block; border-bottom: none;">
                <div class="project-card" style="cursor: pointer; transition: background-color 0.2s;">
                    <div class="project-title" style="color: var(--text);">Lexicon ↗</div>
                    <div class="project-desc">A lightweight context expansion engine built with <span class=\"highlight\">Python, FastAPI, and the Groq API</span>. It intercepts basic user prompts and leverages few-shot prompting to systematically generate highly detailed, professional-grade instructions for large language models.</div>
                </div>
            </a>`
        ],
        label: "What have you built"
    },
    contact: {
        user: "How can I reach out to you?",
        bot: [
            "Intrigued to learn more? Or perhaps you have a professional opportunity in mind? You can connect with me through the following platforms:",
            `<div style="display: flex; flex-direction: column; gap: 0.75rem; margin-top: 0.5rem;">
                <a href="https://github.com/mohammed-owzzz" target="_blank">GitHub ↗</a>
                <a href="https://linkedin.com/in/mohammed-owzzz" target="_blank">LinkedIn ↗</a>
                <a href="https://twitter.com/mohammed_owzzz" target="_blank">X (Twitter) ↗</a>
                <a href="https://instagram.com/0w_xqv/" target="_blank">Instagram ↗</a>
            </div>`
        ],
        label: "Get in touch"
    }
};

function createAvatar(type) {
    if (type === 'bot') {
        return `<img src="owaiz chibi.png" alt="Owaiz" class="avatar" style="object-position: center 40% 150%;">`;
    }
    return `<img src="aliya chibi.png" alt="User" class="avatar" style="object-position: center 40%;">`;
}

function renderBotMessages(messages) {
    const group = document.createElement('div');
    group.className = 'message-group bot-group animate-in';
    
    messages.forEach((msg, index) => {
        const row = document.createElement('div');
        row.className = 'avatar-row';
        
        const isLast = index === messages.length - 1;
        const avatarHtml = isLast ? createAvatar('bot') : '<div style="width:32px; flex-shrink:0;"></div>';
        
        row.innerHTML = `${avatarHtml}<div class="bubble bot-bubble">${msg}</div>`;
        group.appendChild(row);
    });
    
    chatContainer.appendChild(group);
}

function renderUserMessage(msg) {
    const group = document.createElement('div');
    group.className = 'message-group user-group animate-in';
    
    const row = document.createElement('div');
    row.className = 'avatar-row';
    row.style.justifyContent = 'flex-end';
    row.innerHTML = `<div class="bubble user-bubble">${msg}</div>${createAvatar('user')}`;
    
    group.appendChild(row);
    chatContainer.appendChild(group);
}

function renderButtons() {
    buttonContainer.innerHTML = '';
    availableOptions.forEach(id => {
        const button = document.createElement('button');
        button.className = 'action-btn animate-in';
        button.textContent = chatData[id].label;
        button.onclick = () => handleAction(id);
        buttonContainer.appendChild(button);
    });
}

function handleAction(id) {
    buttonContainer.innerHTML = '';
    availableOptions = availableOptions.filter(option => option !== id);
    
    const data = chatData[id];
    
    if (data.user) {
        renderUserMessage(data.user);
    }
    
    setTimeout(() => {
        renderBotMessages(data.bot);
        renderButtons();
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 500);
}

renderBotMessages(chatData.start.bot);
renderButtons();