document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('sendBtn');
    const promptInput = document.getElementById('promptInput');
    const resultContainer = document.getElementById('resultContainer');
    const loading = document.getElementById('loading');

    sendBtn.addEventListener('click', async () => {
        const prompt = promptInput.value.trim();
        if (!prompt) return;

        // Reset UI
        resultContainer.style.display = 'none';
        resultContainer.textContent = '';
        loading.style.display = 'block';
        sendBtn.disabled = true;

        try {
            const response = await fetch('/api/gemini', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt }),
            });

            const data = await response.json();

            if (response.ok) {
                resultContainer.textContent = data.text;
                resultContainer.style.display = 'block';
            } else {
                throw new Error(data.error || 'Failed to get response');
            }
        } catch (error) {
            resultContainer.textContent = 'Error: ' + error.message;
            resultContainer.style.display = 'block';
            resultContainer.style.borderColor = 'red';
        } finally {
            loading.style.display = 'none';
            sendBtn.disabled = false;
        }
    });
});
