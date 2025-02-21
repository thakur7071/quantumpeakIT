import "./contact.css";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Intro Section */}
      <div className="contact-header">
        <h1>We'd Love to Hear from You</h1>
        <p>
          Have questions or need support? Reach out to us using the form below,
          and our team will get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="tel" placeholder="Your Phone (Optional)" />
          <textarea rows={6} placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Contact Details - Flex Container */}
      <div className="contact-details">
        {/* Get in Touch Card */}
        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p><Phone size={18} /> Call us at (123) 456-7890</p>
          <p><Mail size={18} /> Email us at contact@yourcompany.com</p>
          <p><MapPin size={18} /> 1234 Business St, City, Country</p>
        </div>

        {/* Business Hours Card */}
        <div className="contact-card">
          <h2><Clock size={20} /> Business Hours</h2>
          <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
          <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
          <p><strong>Sunday:</strong> Closed</p>
        </div>
      </div>

      {/* Google Map */}
      <h3>Visit Our Office</h3>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509367!2d144.9559283153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c3625c9e0b8a!2sSome%20Business!5e0!3m2!1sen!2sus!4v1633072741372!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="[LinkedIn URL]" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </a>
        <a href="[Twitter URL]" target="_blank" rel="noopener noreferrer">
          <Twitter size={24} />
        </a>
        <a href="[Facebook URL]" target="_blank" rel="noopener noreferrer">
          <Facebook size={24} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
