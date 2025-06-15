
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Heart,
  ArrowRight,
  Shield,
  Users,
  Activity,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Hospital", href: "#" },
    { name: "Medical Services", href: "#" },
    { name: "Find a Doctor", href: "#" },
    { name: "Book Appointment", href: "#" },
    { name: "Health Packages", href: "#" },
    { name: "International Patients", href: "#" },
  ];

  const services = [
    { name: "Emergency Care", href: "#" },
    { name: "Cardiology", href: "#" },
    { name: "Neurology", href: "#" },
    { name: "Orthopedics", href: "#" },
    { name: "Oncology", href: "#" },
    { name: "Pediatrics", href: "#" },
  ];

  const patientResources = [
    { name: "Patient Portal", href: "#" },
    { name: "Insurance & Billing", href: "#" },
    { name: "Medical Records", href: "#" },
    { name: "Visitor Information", href: "#" },
    { name: "Patient Rights", href: "#" },
    { name: "Feedback & Complaints", href: "#" },
  ];

  const achievements = [
    // { icon: Award, text: 'JCI Accredited', color: 'warning' },
    { icon: Shield, text: "NABH Certified", color: "success" },
    { icon: Users, text: "4L+ Patients", color: "info" },
    { icon: Activity, text: "24/7 Emergency", color: "danger" },
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
                  <h3 className="mb-0 font-display fw-bold text-white">
                    RUBAN HOSPITAL
                  </h3>
                  <p className="small text-light opacity-75 mb-0">
                    Excellence in Healthcare
                  </p>
                </div>
              </div>

              <p className="text-light opacity-75 mb-4">
                Leading multi-specialty hospital providing world-class
                healthcare services with cutting-edge technology, compassionate
                care, and a team of renowned specialists.
              </p>

              {/* Achievements */}
              <div className="row g-2 mb-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="col-6">
                    <div className="d-flex align-items-center p-2 bg-light bg-opacity-10 rounded-3">
                      <achievement.icon
                        size={18}
                        className={`text-${achievement.color} me-2`}
                      />
                      <small className="text-light">{achievement.text}</small>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              {/* <div className="d-flex gap-3">
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
              </div> */}
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
                <MapPin
                  size={18}
                  className="text-primary me-3 mt-1 flex-shrink-0"
                />
                <div>
                  <p className="text-light opacity-75 mb-0 small">
                    19, Boring Patliputra Road,
                    <br />
                    near New Patliputra colony,
                    <br />
                    Golambar, Patna - 800013
                    <br />
                    Bihar, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="d-flex align-items-center mb-3">
                <Phone size={18} className="text-success me-3 flex-shrink-0" />
                <div>
                  <p className="text-light opacity-75 mb-0 small">
                    +91 6123503100
                  </p>
                  <p className="text-danger mb-0 small fw-medium">
                    Emergency: +91 8406003102
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="d-flex align-items-center mb-3">
                <Mail size={18} className="text-info me-3 flex-shrink-0" />
                <div>
                  <p className="text-light opacity-75 mb-0 small">
                    info@ruban.org.in
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="d-flex align-items-center">
                <Clock size={18} className="text-warning me-3 flex-shrink-0" />
                <div>
                  <p className="text-light opacity-75 mb-0 small">
                    24/7 Emergency Services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224.8321807314384!2d85.11170339431621!3d25.627672519527565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed582b586ec055%3A0x4bdbe8813044fc2d!2sRuban%20Memorial%20Hospital!5e0!3m2!1sen!2sin!4v1749949281230!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-top border-light border-opacity-25 ">
        <div className="container d-flex align-items-center justify-content-center py-4">
          <div className="d-flex align-items-center col-lg-6">
            <p className="text-light  opacity-75 mb-0 small">
              © {currentYear} Ruban Hospital. All rights reserved.
              <span className="d-none d-md-inline">
                {" "}
                | NABH Accredited Healthcare Provider
              </span>
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
