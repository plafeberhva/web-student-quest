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
        <h1>${config.title}</h1>
        <p>Version: ${config.version}</p>
        <p>${config.description}</p>
    `;
}

// Export configuration for other modules
export default config; 