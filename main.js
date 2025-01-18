// Captcha generation
function generateCaptcha() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captcha;
}

// Initialize captcha
let currentCaptcha = generateCaptcha();
document.getElementById('captcha-text').innerText = currentCaptcha;

// Refresh captcha
document.getElementById('refresh-captcha').addEventListener('click', () => {
  currentCaptcha = generateCaptcha();
  document.getElementById('captcha-text').innerText = currentCaptcha;
});

// Form submission
document.getElementById('resultForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const enteredCaptcha = document.getElementById('captcha-input').value;

  if (enteredCaptcha === currentCaptcha) {
    // Open new page with the message
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Result</title>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: linear-gradient(90deg, #ff7b00, #ff0066);
                        color: white;
                        font-size: 50px;
                        font-weight: bold;
                        margin: 0;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                Chutiya Banaya Apko
            </body>
            </html>
        `);
  } else {
    alert('Incorrect captcha. Please try again.');
  }
});