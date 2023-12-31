# Birthmark - Customized Birthday Card Sender

Birthmark is a Node.js application that allows users to send customized birthday cards to the email address of their choice on the recipient's birthday. The application offers a variety of styles for the birthday cards, providing a personalized and delightful experience for both the sender and the recipient.

## Features

- Customized Birthday Cards: Users can choose from a wide range of styles and designs for the birthday cards, allowing them to create a unique and personalized greeting.

- Email Integration: Birthmark integrates with an email service provider to send the customized birthday cards directly to the recipient's email address.

- Automatic Scheduling: The application automatically schedules the delivery of the birthday card to be sent on the recipient's birthday, ensuring a timely and memorable surprise.

- COMING SOON.. Easy-to-Use Interface: Birthmark provides a user-friendly interface that makes it simple for users to select a card style, enter the recipient's email address, and schedule the card to be sent.

- Coming soon.. Personal: enter your email address and the recipient will feel the personal touch. Optional: get a reminder email when a birthday card was sent so you're in the know...

## Installation

1. Clone the repository:

   ````bash
   git clone https://github.com/your-username/birthmark.git
   ```

2. Navigate to the project directory:

   ````bash
   cd birthmark
   ```

3. Install the dependencies:

   ````bash
   npm install
   ```

4. Configure the environment variables:
   - Create a `.env` file in the project root directory.
   - Define the following variables in the `.env` file:
     ```dotenv
     SMTP_HOST=your_smtp_host
     SMTP_PORT=your_smtp_port
     SMTP_USERNAME=your_smtp_username
     SMTP_PASSWORD=your_smtp_password
     ```

## Usage

1. Start the application:

   ````bash
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:3000`.

3. Select a card style from the available options.

4. Enter the recipient's email address.

5. Click on the "Schedule Card" button.

6. The card will be automatically sent to the recipient's email address on their birthday.

## Contributing

Contributions are welcome! If you discover any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request. Make sure to follow the existing coding style and conventions.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

Birthmark makes use of the following open-source libraries and resources:

- [Node.js](https://nodejs.org/)
- [Docxtemplater](https://docxtemplater.com/)
- [PizZip](https://pizzip.com/)
- [Nodemailer](https://nodemailer.com/)
- [node-cron](https://nodecron.com/)

We extend our gratitude to the authors and contributors of these projects for their valuable work.

## Contact

If you have any questions, suggestions, or feedback, please feel free to reach out to us:

- Email: [happybirthmark@outlook.com]
- GitHub: [YourGitHubUsername](https://github.com/YourGitHubUsername)

Happy birthday card sending with Birthmark! 🎉🎂💌
