// components/UI/Whatsapp.jsx
import '@styles/whatsapp.css'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'

function Whatsapp() {
  return (
    <div className="floating-contact">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9555705879"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <FaWhatsapp className="whatsapp-icon" size={24} />
        <span className="whatsapp-text">+91 9555705879</span>
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+919555705879"
        className="phone-button"
      >
        <FaPhoneAlt className="phone-icon" size={24} />

      </a>
    </div>
  )
}

export default Whatsapp
