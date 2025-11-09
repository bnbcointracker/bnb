// Debug utilities
function initializeMessageDebugging() {
    // Debug Firebase Authentication
    firebase.auth().onAuthStateChanged((user) => {
        console.log('[Debug] Auth state changed:', user ? 'User logged in' : 'User not logged in');
        if (user) {
            console.log('[Debug] User ID:', user.uid);
        }
    });

    // Debug message container
    const messageContainer = document.getElementById('message-conversation-container');
    if (messageContainer) {
        console.log('[Debug] Message container found');
        // Watch for changes in the container
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                console.log('[Debug] Message container changed:', mutation.type);
                console.log('[Debug] Current message count:', messageContainer.children.length);
            });
        });
        observer.observe(messageContainer, { childList: true, subtree: true });
    } else {
        console.log('[Debug] Message container not found');
    }

    // Debug Firebase Database connection
    const connectedRef = firebase.database().ref(".info/connected");
    connectedRef.on("value", (snap) => {
        console.log('[Debug] Firebase connection state:', snap.val());
    });
}

// Initialize debugging when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('[Debug] Page loaded, initializing debugging...');
    setTimeout(initializeMessageDebugging, 1000); // Wait for Firebase to initialize
});