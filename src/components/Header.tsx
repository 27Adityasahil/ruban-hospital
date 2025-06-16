import React, { useState, useEffect } from 'react';
import logo from '../assets/logo/logo.png'
import { 
  ChevronDown, 
  Stethoscope, 
  X, 
  Phone,
  Clock, 
  Search,
  Heart,
  Bone,
  Baby,
  Activity,
  Shield,
  Users,
  Award,
  Building,
  Ambulance,
  Calendar,
  FileText,
  CreditCard,
  Globe
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Hospital Overview',
      href: '#',
      children: [
        {
          category: 'About Hospital',
          items: [
            { name: 'About Us', href: '#', description: 'Our mission, vision and values', icon: Heart },
            { name: 'Quality', href: '#', description: '25+ years of excellence', icon: Clock },
            { name: 'Message from Managing Director', href: '#', description: 'Meet our executive board', icon: Users },
            { name: 'Photo Gallery', href: '#', description: 'Our commitment to healthcare', icon: Award },
            { name: 'Doctors', href: '#', description: 'Patient safety protocols', icon: Shield },
            { name: 'Technology we use', href: '#', description: 'Medical breakthroughs', icon: Activity },
            { name: 'Awards', href: '#', description: 'Medical breakthroughs', icon: Activity },
            { name: 'Events', href: '#', description: 'Medical breakthroughs', icon: Activity },
            { name: 'Health Blog', href: '#', description: 'Medical breakthroughs', icon: Activity },
            { name: 'Hospital Management', href: '#', description: 'Medical breakthroughs', icon: Activity }
          ]
        },
      ]
    },
    {
      name: 'Super Speciality',
      href: '#',
      children: [
        {
          category: 'Super Speciality',
          items: [
            { name: 'Urology and Nephrology', href: '#', description: 'Cancer treatment', icon: Shield },
            { name: 'Cardiology and Cardiothoracic', href: '#', description: 'Cancer surgery', icon: Shield },
            { name: 'Neurology and Neurosurgery', href: '#', description: 'Radiation therapy', icon: Activity },
            { name: 'Orthopaedics, Joint Replacement & Arthroscopy', href: '#', description: 'Advanced cancer care', icon: Heart },
            { name: 'Gaestroenterology', href: '#', description: 'Children cancer care', icon: Baby },
            { name: 'Pulmonary and Sleep Medicine', href: '#', description: 'Early detection programs', icon: Search },
            { name: 'Ruban Cancer Center', href: '#', description: 'Early detection programs', icon: Search },
          ]
        }
      ]
    },
    {
      name: 'Specialities',
      href: '#',
      children: [
        {
          category: 'Medical Specialities',
          items: [
            { name: 'General Medicine', href: '#', description: 'General medical care', icon: Stethoscope },
            { name: 'General Surgery & Laparoscopic Surgery', href: '#', description: 'Digestive system care', icon: Activity },
            { name: 'Anesthesiology', href: '#', description: 'Lung and respiratory care', icon: Activity },
            { name: 'Eye Care', href: '#', description: 'Kidney care', icon: Heart },
            { name: 'ENT', href: '#', description: 'Hormone disorders', icon: Activity },
            { name: 'Physiotherapy', href: '#', description: 'Joint and muscle care', icon: Bone },
            { name: 'Radiology', href: '#', description: 'Joint and muscle care', icon: Bone }
          ]
        }        
      ]
    },
    {
      name: 'Facilities',
      href: '#',
      children: [
        {
          category: 'Hospital Facilities',
          items: [
            { name: '24 x 7 Facilities', href: '#', description: 'Advanced imaging services', icon: Activity },
            { name: 'Visiting Time', href: '#', description: 'Comprehensive lab testing', icon: Stethoscope },
            { name: 'OPD timing', href: '#', description: 'Disease diagnosis', icon: Activity }
          ]
        }
      ]
    },
    {
      name: 'Empanelment',
      href: '#',
      children: [
        {
          category: 'Insurance Partners',
          items: [
            { name: 'Public Campanies on Panel', href: '#', description: 'Direct billing facility', icon: CreditCard },
            { name: 'TPA & Insurance on Panel', href: '#', description: 'Insurance description', icon: FileText }
          ]
        }
      ]
    },
    {
      name: 'International Patient',
      href: '#',
      children: [
        {
          category: 'Medical Tourism',
          items: [
            { name: 'Why Ruban', href: '#', description: 'Comprehensive care packages', icon: Globe },
            { name: 'Food Guide', href: '#', description: 'Travel documentation help', icon: FileText },
            { name: 'Accommodation', href: '#', description: 'Patient and family lodging', icon: Building },
            { name: 'Admission Procedure', href: '#', description: 'Transportation services', icon: Ambulance },
            { name: 'Payment Information', href: '#', description: 'Financial services', icon: CreditCard},
            { name: 'Services', href: '#', description: 'Financial services', icon: CreditCard }
          ]
        }
      ]
    }
  ];

  return (
    <>
      {/* Top Contact Bar with Floating Buttons Info */}
      <div className="bg-danger text-white py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="d-flex align-items-center">
                <Phone size={14} className="me-2" />
                <small className="fw-medium">General Enquiry: 0612 3503100</small>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="d-flex align-items-center justify-content-center">
                <Users size={14} className="me-2" />
                <small className="fw-medium">Women & Child Care Unit</small>
              </div>
            </div>
            <div className="col-md-4 text-end">
              <div className="d-flex align-items-center justify-content-end">
                <Calendar size={14} className="me-2" />
                <small className="fw-medium">Book an Appointment</small>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`navbar navbar-expand-lg sticky-top navbar-custom ${isScrolled ? 'shadow-custom' : ''}`}>
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <div className='logo'>
              {/* Adding hospital logo */}
              <img className='logoImg' src={logo} alt="" />
            </div>
          </a>

          {/* Mobile Menu Toggle with Stethoscope */}
          <button
            className="navbar-toggler border-0 p-2"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ background: 'none' }}
          >
            {isMenuOpen ? (
              <X size={28} className="text-danger" />
            ) : (
              <Stethoscope size={28} className="text-primary" />
            )}
          </button>

          {/* Navigation Menu */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav mx-auto">
              {navigationItems.map((item) => (
                <li
                  key={item.name}
                  className="nav-item dropdown position-static"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    className="nav-link fw-medium px-3 py-3 d-flex align-items-center text-dark position-relative"
                    href={item.href}
                    style={{ 
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      color: activeDropdown === item.name ? 'var(--bs-primary)' : 'inherit'
                    }}
                  >
                    {item.name}
                    {item.children && (
                      <ChevronDown 
                        size={14} 
                        className="ms-1" 
                        style={{ 
                          transform: activeDropdown === item.name ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease'
                        }}
                      />
                    )}
                  </a>

                  {/* Mega Menu Dropdown */}
                  {item.children && activeDropdown === item.name && (
                    <div className="dropdown-menu mega-menu show">
                      <div className="container">
                        <div className="row">
                          {item.children.map((category, categoryIndex) => (
                            <div key={categoryIndex} className="col-md-4 mb-4">
                              <h6 className="fw-bold text-danger mb-3 border-bottom border-danger pb-2">
                                {category.category}
                              </h6>
                              <div className="row">
                                {category.items.map((child, childIndex) => (
                                  <div key={childIndex} className="col-12 mb-2">
                                    <a
                                      href={child.href}
                                      className="text-decoration-none d-flex align-items-start p-2 rounded-3 hover-bg-light"
                                      style={{ transition: 'all 0.2s ease' }}
                                    >
                                      <div className="bg-danger bg-opacity-10 text-danger rounded-2 p-2 me-3 flex-shrink-0">
                                        <child.icon size={14} />
                                      </div>
                                      <div>
                                        <h6 className="mb-1 text-dark fw-medium small">{child.name}</h6>
                                        <small className="text-muted">{child.description}</small>
                                      </div>
                                    </a>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Floating Action Buttons */}
      <div className="floating-buttons">
        {/* General Enquiry */}
        <div className="floating-btn floating-btn-1">
          <button className="btn btn-danger rounded-circle p-3 shadow-lg" title="General Enquiry">
            <Phone size={20} />
          </button>
          <div className="floating-btn-text">
            <small className="fw-bold">General Enquiry</small>
            <br />
            <small>0612 3503100</small>
          </div>
        </div>

        {/* Women & Child Care Unit */}
        <div className="floating-btn floating-btn-2">
          <button className="btn btn-primary rounded-circle p-3 shadow-lg" title="Women & Child Care Unit">
            <Baby size={20} />
          </button>
          <div className="floating-btn-text">
            <small className="fw-bold">Women & Child Care</small>
            <br />
            <small>Specialized Care</small>
          </div>
        </div>

        {/* Book Appointment */}
        <div className="floating-btn floating-btn-3">
          <button className="btn btn-success rounded-circle p-3 shadow-lg" title="Book an Appointment">
            <Calendar size={20} />
          </button>
          <div className="floating-btn-text">
            <small className="fw-bold">Book Appointment</small>
            <br />
            <small>Quick Booking</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;