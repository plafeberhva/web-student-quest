// Main entry point for the web-student-quest game
const appContainer = document.getElementById('app');

// Game configuration
const config = {
    title: import.meta.env.VITE_APP_NAME || 'Web Student Quest',
    version: import.meta.env.VITE_APP_VERSION || '0.0.1',
    description: 'Retro style adventure game by PCML'
};

// Create and render initial content
if (appContainer) {
    appContainer.innerHTML = `
        <style>
            #game-container {
                display: flex;
                flex-direction: column;
                height: 100vh;
                width: 100vw;
                background: #222;
                color: #f8f8f2;
                font-family: 'Courier New', Courier, monospace;
            }
            #output-area {
                flex: 2 1 0%;
                padding: 2rem;
                overflow-y: auto;
                font-size: 1.2rem;
                background: #222;
                border-bottom: 2px solid #444;
            }
            #input-area {
                flex: 1 1 0%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #181818;
            }
            #instruction-input {
                width: 60%;
                padding: 0.75rem 1rem;
                font-size: 1.2rem;
                border: none;
                border-radius: 4px;
                background: #333;
                color: #f8f8f2;
                outline: none;
            }
        </style>
        <div id="game-container">
            <div id="output-area">
                <h1>${config.title}</h1>
                <p>Version: ${config.version}</p>
                <p>${config.description}</p>
                <div id="game-response"></div>
            </div>
            <div id="input-area">
                <input id="instruction-input" type="text" placeholder="Type your instruction and press Enter..." autocomplete="off" />
            </div>
        </div>
    `;

    // Add input handling logic
    const input = document.getElementById('instruction-input') as HTMLInputElement;
    const responseDiv = document.getElementById('game-response');
    if (input && responseDiv) {
        input.focus();
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim() !== '') {
                // For now, just echo the input as the response
                const userInstruction = input.value.trim();
                const response = `<div><strong>&gt; ${userInstruction}</strong></div><div>Game: You typed "${userInstruction}"</div>`;
                responseDiv.innerHTML += response + '<hr />';
                responseDiv.scrollTop = responseDiv.scrollHeight;
                input.value = '';
            }
        });
    }
}

// Export configuration for other modules
export default config; 