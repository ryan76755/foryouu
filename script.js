document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Handle form submission
    const messageForm = document.getElementById('messageForm');
    
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const senderName = document.getElementById('senderName').value.trim();
        const messageContent = document.getElementById('messageContent').value.trim();
        
        if (!senderName || !messageContent) {
            alert('Harap isi nama dan pesan kamu!');
            return;
        }
        
        // Create message object
        const message = {
            sender: senderName,
            message: messageContent,
            createdAt: new Date().toISOString()
        };
        
        // In a real app, you would send this to a server
        // For demo, we'll use localStorage
        const messageId = 'msg-' + Date.now();
        localStorage.setItem(messageId, JSON.stringify(message));
        
        // Show success message with link
        alert(`Pesan berhasil dibuat!\n\nBagikan link ini:\n${window.location.origin}/pesanuntukmu/view/${messageId}`);
        
        // Reset form
        messageForm.reset();
    });
});