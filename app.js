/* THE NERVOUS SYSTEM */
document.addEventListener('DOMContentLoaded', () => {
    console.log("[SYSTEM ONLINE: 10.8 Hz RESONANCE DETECTED]");
    
    const statusText = document.querySelector('#status h2');
    if (statusText) {
        statusText.classList.add('resonance-active');
    }

    // Simulate a system scan
    setTimeout(() => {
        const bridgeMsg = document.createElement('p');
        bridgeMsg.innerText = "> Bridge Connection: STABLE";
        bridgeMsg.style.color = "#00ff41";
        document.getElementById('status').appendChild(bridgeMsg);
    }, 2000);
});

