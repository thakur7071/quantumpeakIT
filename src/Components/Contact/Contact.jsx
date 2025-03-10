import "./Contact.css";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Clock,
  User,
  MessageSquare,
  Briefcase,
} from "lucide-react";

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
          <div className="input-group">
            <User size={18} className="input-icon" />
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="input-group">
            <Mail size={18} className="input-icon" />
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="input-group">
            <Phone size={18} className="input-icon" />
            <input type="tel" placeholder="Your Phone Number" />
          </div>

          {/* Service Selection Dropdown */}
          <div className="select-group">
            <Briefcase size={18} className="input-icon" />
            <select required defaultValue="">
              <option value="" disabled>Select a Service</option>
              <option value="web-development">Web Development</option>
              <option value="seo">SEO Optimization</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="textarea-group">
            <MessageSquare size={18} className="textarea-icon" />
            <textarea rows={6} placeholder="Your Message" required></textarea>
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <div className="contact-card">
          <h2>Get in Touch</h2>
          <p><Phone size={18} /> (+91) 8114227222</p>
          <p><Mail size={18} /> info@quantumpeakit.com</p>
          <p><MapPin size={18} /> Alambagh Lucknow, Uttar-Pradesh</p>
        </div>

        <div className="contact-card">
          <h2><Clock size={20} /> Business Hours</h2>
          <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
          <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
          <p><strong>Sunday:</strong> Closed</p>
        </div>
      </div>

      {/* Google Map */}
      <h3 className="map-title">Visit Our Office</h3>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509367!2d144.9559283153167!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577c3625c9e0b8a!2sSome%20Business!5e0!3m2!1sen!2sus!4v1633072741372!5m2!1sen!2us"
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      {/* Social Media Links */}
      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
        <a href="#" target="_blank" rel="noopener noreferrer"><Youtube size={24} /></a>
      </div>
    </div>
  );
};

export default Contact;
