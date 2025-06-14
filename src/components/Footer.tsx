import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight,
  Award,
  Shield,
  Users,
  Activity
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Hospital', href: '#' },
    { name: 'Medical Services', href: '#' },
    { name: 'Find a Doctor', href: '#' },
    { name: 'Book Appointment', href: '#' },
    { name: 'Health Packages', href: '#' },
    { name: 'International Patients', href: '#' }
  ];

  const services = [
    { name: 'Emergency Care', href: '#' },
    { name: 'Cardiology', href: '#' },
    { name: 'Neurology', href: '#' },
    { name: 'Orthopedics', href: '#' },
    { name: 'Oncology', href: '#' },
    { name: 'Pediatrics', href: '#' }
  ];

  const patientResources = [
    { name: 'Patient Portal', href: '#' },
    { name: 'Insurance & Billing', href: '#' },
    { name: 'Medical Records', href: '#' },
    { name: 'Visitor Information', href: '#' },
    { name: 'Patient Rights', href: '#' },
    { name: 'Feedback & Complaints', href: '#' }
  ];

  const achievements = [
    { icon: Award, text: 'JCI Accredited', color: 'warning' },
    { icon: Shield, text: 'NABH Certified', color: 'success' },
    { icon: Users, text: '50K+ Patients', color: 'info' },
    { icon: Activity, text: '24/7 Emergency', color: 'danger' }
  ];

  return (
    <footer className="bg-dark text-light">
      {/* Main Footer */}
      <div className="container section-padding">
        <div className="row g-5">
          {/* Hospital Info */}
          <div className="col-lg-4">
            <div className="mb-4">
              {/* Logo */}
              <div className="d-flex align-items-center mb-4">
                <div className="gradient-primary text-white rounded-3 p-3 me-3 shadow">
                  <Heart size={32} />
                </div>
                <div>
                  <h3 className="mb-0 font-display fw-bold text-white">RUBAN HOSPITAL</h3>
                  <p className="small text-light opacity-75 mb-0">Excellence in Healthcare</p>
                </div>
              </div>

              <p className="text-light opacity-75 mb-4">
                Leading multi-specialty hospital providing world-class healthcare services 
                with cutting-edge technology, compassionate care, and a team of renowned specialists.
              </p>

              {/* Achievements */}
              <div className="row g-2 mb-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="col-6">
                    <div className="d-flex align-items-center p-2 bg-light bg-opacity-10 rounded-3">
                      <achievement.icon size={18} className={`text-${achievement.color} me-2`} />
                      <small className="text-light">{achievement.text}</small>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="d-flex gap-3">
                <a href="#" className="text-decoration-none">
                  <div className="bg-primary bg-opacity-20 p-3 rounded-3 text-primary hover-scale">
                    <Facebook size={20} />
                  </div>
                </a>
                <a href="#" className="text-decoration-none">
                  <div className="bg-info bg-opacity-20 p-3 rounded-3 text-info hover-scale">
                    <Twitter size={20} />
                  </div>
                </a>
                <a href="#" className="text-decoration-none">
                  <div className="bg-danger bg-opacity-20 p-3 rounded-3 text-danger hover-scale">
                    <Instagram size={20} />
                  </div>
                </a>
                <a href="#" className="text-decoration-none">
                  <div className="bg-warning bg-opacity-20 p-3 rounded-3 text-warning hover-scale">
                    <Youtube size={20} />
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4 text-white">Quick Links</h5>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-3">
                  <a 
                    href={link.href} 
                    className="text-light text-decoration-none opacity-75 hover-opacity-100 d-flex align-items-center"
                  >
                    <ArrowRight size={14} className="me-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Medical Services */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4 text-white">Medical Services</h5>
            <ul className="list-unstyled">
              {services.map((service, index) => (
                <li key={index} className="mb-3">
                  <a 
                    href={service.href} 
                    className="text-light text-decoration-none opacity-75 hover-opacity-100 d-flex align-items-center"
                  >
                    <ArrowRight size={14} className="me-2" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4 text-white">Patient Resources</h5>
            <ul className="list-unstyled">
              {patientResources.map((resource, index) => (
                <li key={index} className="mb-3">
                  <a 
                    href={resource.href} 
                    className="text-light text-decoration-none opacity-75 hover-opacity-100 d-flex align-items-center"
                  >
                    <ArrowRight size={14} className="me-2" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4 text-white">Contact Us</h5>
            <div className="mb-4">
              {/* Address */}
              <div className="d-flex align-items-start mb-3">
                <MapPin size={18} className="text-primary me-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-light opacity-75 mb-0 small">
                    123 Healthcare Avenue<br />
                    Medical District<br />
                    Chennai - 600001<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="d-flex align-items-center mb-3">
                <Phone size={18} className="text-success me-3 flex-shrink-0" />
                <div>
                  <p className="text-light opacity-75 mb-0 small">+91 98765-43210</p>
                  <p className="text-danger mb-0 small fw-medium">Emergency: +91 98765-43211</p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex align-items-center mb-3">
                <Mail size={18} className="text-info me-3 flex-shrink-0" />
                <div>
                  <p className="text-light opacity-75 mb-0 small">info@rubanhospital.com</p>
                </div>
              </div>

              {/* Hours */}
              <div className="d-flex align-items-center">
                <Clock size={18} className="text-warning me-3 flex-shrink-0" />
                <div>
                  <p className="text-light opacity-75 mb-0 small">24/7 Emergency Services</p>
                  <p className="text-light opacity-75 mb-0 small">OPD: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="row justify-content-center mt-5 pt-5 border-top border-light border-opacity-25">
          <div className="col-lg-8 text-center">
            <h4 className="fw-bold mb-3 text-white">Stay Connected with Health Updates</h4>
            <p className="text-light opacity-75 mb-4">
              Subscribe to our newsletter for health tips, medical news, and hospital updates.
            </p>
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="input-group">
                  <input 
                    type="email" 
                    className="form-control form-control-lg border-0" 
                    placeholder="Enter your email address"
                  />
                  <button className="btn btn-primary px-4" type="button">
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-top border-light border-opacity-25">
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <p className="text-light opacity-75 mb-0 small">
                © {currentYear} Ruban Hospital. All rights reserved. 
                <span className="d-none d-md-inline"> | JCI Accredited Healthcare Provider</span>
              </p>
            </div>
            <div className="col-lg-6">
              <div className="d-flex flex-wrap justify-content-lg-end gap-3 mt-3 mt-lg-0">
                <a href="#" className="text-light text-decoration-none opacity-75 hover-opacity-100 small">
                  Privacy Policy
                </a>
                <a href="#" className="text-light text-decoration-none opacity-75 hover-opacity-100 small">
                  Terms of Service
                </a>
                <a href="#" className="text-light text-decoration-none opacity-75 hover-opacity-100 small">
                  Medical Disclaimer
                </a>
                <a href="#" className="text-light text-decoration-none opacity-75 hover-opacity-100 small">
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;