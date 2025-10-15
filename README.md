# Tax Web App

A modern web application for tax filing and AI-powered assistance using React, TypeScript, and Tailwind CSS.

## Features

- 🤖 **AI Chat with Grok**: Interactive AI assistant for tax-related questions
- 📧 **Email Integration**: Automatic email notifications for user interactions
- 🔐 **User Authentication**: Secure login and registration system
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 📊 **Tax Filing**: Streamlined tax filing process with guided steps

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- EmailJS account for email functionality
- xAI API key for Grok integration

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tax-web-app
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:

#### EmailJS Setup (Required for Gmail integration)

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Create a new service and select Gmail
3. Create email templates for different notifications
4. Get your credentials and add them to `.env`:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

#### xAI Grok API Setup

1. Get your API key from xAI
2. Add it to `.env`:

```env
XAI_API_KEY=your_xai_api_key_here
```

5. Start the development server:
```bash
npm run dev
```

## Email Functionality

The application includes comprehensive email integration that sends notifications for:

- **User Signups**: Welcome emails when new users register
- **Grok Interactions**: Conversation logs sent to Gmail
- **Tax Filing**: Status updates and confirmations
- **Contact Forms**: User inquiries and support requests

### Email Templates

The app uses predefined email templates for different scenarios:

- `signup`: Welcome email for new users
- `contact`: Contact form submissions
- `tax-filing`: Tax filing status updates
- `grok-interaction`: AI conversation logs

### EmailJS Configuration

1. **Service Setup**: Create a Gmail service in EmailJS
2. **Template Creation**: Create templates for each email type
3. **Testing**: Use the EmailSettings component to test your configuration

## Components

### Core Components

- `GrokChat`: AI chat interface with email logging
- `EmailSettings`: Configuration and testing interface
- `SignUpPage`: User registration with email notifications
- `Dashboard`: Main application dashboard

### Email Components

- `useEmail`: React hook for email functionality
- `email-service`: Core email configuration and templates

## Development

### Project Structure

```
src/
├── components/          # React components
├── hooks/              # Custom React hooks
├── lib/                # Utility libraries
├── pages/              # Page components
└── contexts/           # React contexts
```

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **EmailJS**: Client-side email sending
- **xAI Grok**: AI chat integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For issues and questions:

1. Check the EmailSettings component for configuration help
2. Verify your EmailJS and xAI API credentials
3. Review the browser console for error messages
4. Ensure all environment variables are properly set

## Troubleshooting

### Email Issues

- **Emails not sending**: Check EmailJS credentials and service configuration
- **Template errors**: Verify template IDs match your EmailJS templates
- **CORS issues**: Ensure your domain is allowlisted in EmailJS settings

### Grok AI Issues

- **API errors**: Verify your xAI API key is valid and has sufficient credits
- **Connection issues**: Check network connectivity and API endpoint availability