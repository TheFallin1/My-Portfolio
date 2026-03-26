# EmailJS Setup Guide

Your contact form is now integrated with EmailJS! Follow these steps to make it functional:

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Select your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Note your **Service ID**

## Step 3: Create Email Template

1. In EmailJS dashboard, click "Email Templates"
2. Click "Create New Template"
3. Use this template structure:

```
From: {{from_name}} ({{from_email}})
To: {{to_email}}
Subject: New Contact Form Message from Portfolio

Message:
{{message}}
```

4. Note your **Template ID**

## Step 4: Get Your Public Key

1. In EmailJS dashboard, go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update Contact.jsx

Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY' // Replace with your actual public key
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID' // Replace with your actual service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID' // Replace with your actual template ID
```

## Step 6: Test Your Form

1. Start your development server: `npm run dev`
2. Go to the Contact section
3. Fill out the form and test submission
4. Check your email to confirm it works!

## Important Notes

- The free EmailJS plan allows 200 emails/month
- Messages will be sent to `balogunmotolani16@gmail.com`
- Test thoroughly before deploying to production
- Keep your credentials secure and don't commit them to git

## Troubleshooting

If emails aren't sending:
1. Check that all IDs are correct
2. Verify your email service is connected
3. Check browser console for error messages
4. Ensure your template variables match exactly

Need help? Visit [EmailJS Documentation](https://www.emailjs.com/docs/)
