import { useState, FormEvent } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const emailBody = `
New Contact Form Submission

From: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
Sent from Portfolio Contact Form
      `.trim();

      const mailtoLink = `mailto:sakthivel@example.com?subject=${encodeURIComponent(
        `Portfolio Contact: ${formData.subject}`
      )}&body=${encodeURIComponent(emailBody)}`;

      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact me directly via email.');
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all"
              placeholder="john@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all"
            placeholder="Project Inquiry"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-600 dark:focus:ring-cyan-400 focus:border-transparent outline-none transition-all resize-none"
            placeholder="Tell me about your project or inquiry..."
          />
        </div>

        {submitStatus === 'success' && (
          <div className="flex items-center space-x-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-4 py-3 rounded-lg">
            <CheckCircle size={20} />
            <span>Message sent successfully! I'll get back to you soon.</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="flex items-center space-x-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 px-4 py-3 rounded-lg">
            <AlertCircle size={20} />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 font-medium"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send size={20} />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Or reach out directly</p>
          <a
            href="mailto:sakthivel@example.com"
            className="inline-flex items-center space-x-2 text-blue-600 dark:text-cyan-400 hover:underline"
          >
            <Mail size={20} />
            <span>sakthivel@example.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
