    async function sendDiscordWebhookMessage(webhookUrl, messageContent) {
        const payload = {
            content: messageContent,
            // Optionally, you can add:
            // username: "My Bot Name", // Customize the sender's name
            // avatar_url: "https://example.com/avatar.png", // Customize the sender's avatar
            // embeds: [ // Add rich embeds for more structured messages
            //     {
            //         title: "Embed Title",
            //         description: "This is an embed description.",
            //         color: 0x00FFFF // Hexadecimal color code
            //     }
            // ]
        };

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                console.log('Message sent successfully!');
            } else {
                console.error('Failed to send message:', response.status, response.statusText);
                const errorData = await response.json();
                console.error('Error details:', errorData);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    }

    // Usage example:
    const discordWebhookUrl = 'https://discord.com/api/webhooks/1424476999644086292/CxzZBh4y4kzPFh16qkOqLF7_HsIjAqI5KqocV65KXriMdCYpTUzhuljCUx36qjQU_cO5/github'; // Replace with your actual webhook URL
    const messageToSend = 'Hello from Github!';

    sendDiscordWebhookMessage(discordWebhookUrl, messageToSend);
