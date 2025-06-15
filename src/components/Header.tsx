import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Stethoscope, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Search,
  Heart,
  Brain,
  Bone,
  Eye,
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
  Globe,
  Headphones,
  Plus
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
            { name: 'Our History', href: '#', description: '25+ years of excellence', icon: Clock },
            { name: 'Leadership Team', href: '#', description: 'Meet our executive board', icon: Users },
            { name: 'Vision & Mission', href: '#', description: 'Our commitment to healthcare', icon: Award },
            { name: 'Quality & Safety', href: '#', description: 'Patient safety protocols', icon: Shield },
            { name: 'Research & Innovation', href: '#', description: 'Medical breakthroughs', icon: Activity }
          ]
        },
        {
          category: 'Recognition & Awards',
          items: [
            { name: 'JCI Accreditation', href: '#', description: 'International quality standards', icon: Award },
            { name: 'NABH Certification', href: '#', description: 'National accreditation', icon: Shield },
            { name: 'Awards & Recognition', href: '#', description: 'Excellence in healthcare', icon: Award },
            { name: 'Patient Testimonials', href: '#', description: 'Success stories', icon: Heart },
            { name: 'Media Coverage', href: '#', description: 'News and press releases', icon: FileText },
            { name: 'Community Outreach', href: '#', description: 'Social responsibility', icon: Users }
          ]
        }
      ]
    },
    {
      name: 'Super Speciality',
      href: '#',
      children: [
        {
          category: 'Cardiac Sciences',
          items: [
            { name: 'Cardiology', href: '#', description: 'Heart disease treatment', icon: Heart },
            { name: 'Cardiac Surgery', href: '#', description: 'Advanced heart procedures', icon: Heart },
            { name: 'Interventional Cardiology', href: '#', description: 'Minimally invasive procedures', icon: Activity },
            { name: 'Pediatric Cardiology', href: '#', description: 'Children heart care', icon: Baby },
            { name: 'Heart Transplant', href: '#', description: 'Advanced cardiac procedures', icon: Heart },
            { name: 'Cardiac Rehabilitation', href: '#', description: 'Recovery programs', icon: Activity }
          ]
        },
        {
          category: 'Neuro Sciences',
          items: [
            { name: 'Neurology', href: '#', description: 'Brain and nervous system', icon: Brain },
            { name: 'Neurosurgery', href: '#', description: 'Brain and spine surgery', icon: Brain },
            { name: 'Spine Surgery', href: '#', description: 'Spinal treatments', icon: Bone },
            { name: 'Stroke Care', href: '#', description: 'Emergency stroke treatment', icon: Activity },
            { name: 'Epilepsy Center', href: '#', description: 'Seizure management', icon: Brain },
            { name: 'Neuro Rehabilitation', href: '#', description: 'Recovery programs', icon: Activity }
          ]
        },
        {
          category: 'Cancer Care',
          items: [
            { name: 'Medical Oncology', href: '#', description: 'Cancer treatment', icon: Shield },
            { name: 'Surgical Oncology', href: '#', description: 'Cancer surgery', icon: Shield },
            { name: 'Radiation Oncology', href: '#', description: 'Radiation therapy', icon: Activity },
            { name: 'Bone Marrow Transplant', href: '#', description: 'Advanced cancer care', icon: Heart },
            { name: 'Pediatric Oncology', href: '#', description: 'Children cancer care', icon: Baby },
            { name: 'Cancer Screening', href: '#', description: 'Early detection programs', icon: Search }
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
            { name: 'Internal Medicine', href: '#', description: 'General medical care', icon: Stethoscope },
            { name: 'Gastroenterology', href: '#', description: 'Digestive system care', icon: Activity },
            { name: 'Pulmonology', href: '#', description: 'Lung and respiratory care', icon: Activity },
            { name: 'Nephrology', href: '#', description: 'Kidney care', icon: Heart },
            { name: 'Endocrinology', href: '#', description: 'Hormone disorders', icon: Activity },
            { name: 'Rheumatology', href: '#', description: 'Joint and muscle care', icon: Bone }
          ]
        },
        {
          category: 'Surgical Specialities',
          items: [
            { name: 'General Surgery', href: '#', description: 'Comprehensive surgical care', icon: Activity },
            { name: 'Orthopedics', href: '#', description: 'Bone and joint surgery', icon: Bone },
            { name: 'Plastic Surgery', href: '#', description: 'Reconstructive surgery', icon: Heart },
            { name: 'Urology', href: '#', description: 'Urinary system surgery', icon: Activity },
            { name: 'ENT Surgery', href: '#', description: 'Ear, nose, throat surgery', icon: Activity },
            { name: 'Ophthalmology', href: '#', description: 'Eye care and surgery', icon: Eye }
          ]
        },
        {
          category: 'Women & Child Care',
          items: [
            { name: 'Obstetrics & Gynecology', href: '#', description: 'Women\'s health', icon: Heart },
            { name: 'Pediatrics', href: '#', description: 'Children\'s healthcare', icon: Baby },
            { name: 'Neonatology', href: '#', description: 'Newborn care', icon: Baby },
            { name: 'Fertility & IVF', href: '#', description: 'Reproductive medicine', icon: Heart },
            { name: 'High Risk Pregnancy', href: '#', description: 'Specialized maternity care', icon: Heart },
            { name: 'Pediatric Surgery', href: '#', description: 'Children\'s surgery', icon: Baby }
          ]
        }
      ]
    },
    {
      name: 'Facilities',
      href: '#',
      children: [
        {
          category: 'Diagnostic Services',
          items: [
            { name: 'Radiology & Imaging', href: '#', description: 'Advanced imaging services', icon: Activity },
            { name: 'Laboratory Services', href: '#', description: 'Comprehensive lab testing', icon: Stethoscope },
            { name: 'Pathology', href: '#', description: 'Disease diagnosis', icon: Activity },
            { name: 'Nuclear Medicine', href: '#', description: 'Advanced diagnostics', icon: Activity },
            { name: 'Endoscopy', href: '#', description: 'Minimally invasive diagnosis', icon: Activity },
            { name: 'Cardiac Catheterization', href: '#', description: 'Heart diagnostics', icon: Heart }
          ]
        },
        {
          category: 'Support Services',
          items: [
            { name: 'Emergency Services', href: '#', description: '24/7 emergency care', icon: Ambulance },
            { name: 'ICU & Critical Care', href: '#', description: 'Intensive care units', icon: Heart },
            { name: 'Operation Theaters', href: '#', description: 'State-of-the-art surgical suites', icon: Building },
            { name: 'Blood Bank', href: '#', description: 'Safe blood storage', icon: Heart },
            { name: 'Pharmacy', href: '#', description: '24/7 medication services', icon: Stethoscope },
            { name: 'Ambulance Services', href: '#', description: 'Emergency transportation', icon: Ambulance }
          ]
        },
        {
          category: 'Patient Amenities',
          items: [
            { name: 'Patient Rooms', href: '#', description: 'Comfortable accommodation', icon: Building },
            { name: 'Cafeteria & Food Court', href: '#', description: 'Nutritious meals', icon: Heart },
            { name: 'Parking Facilities', href: '#', description: 'Convenient parking', icon: Building },
            { name: 'ATM & Banking', href: '#', description: 'Financial services', icon: CreditCard },
            { name: 'Wi-Fi & Internet', href: '#', description: 'Connectivity services', icon: Globe },
            { name: 'Chapel & Prayer Room', href: '#', description: 'Spiritual care', icon: Heart }
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
            { name: 'Cashless Treatment', href: '#', description: 'Direct billing facility', icon: CreditCard },
            { name: 'Insurance Claims', href: '#', description: 'Claim processing support', icon: FileText },
            { name: 'Corporate Health Plans', href: '#', description: 'Employee health coverage', icon: Users },
            { name: 'Government Schemes', href: '#', description: 'Public health programs', icon: Shield },
            { name: 'International Insurance', href: '#', description: 'Global coverage', icon: Globe },
            { name: 'Pre-authorization', href: '#', description: 'Treatment approval', icon: FileText }
          ]
        },
        {
          category: 'Health Packages',
          items: [
            { name: 'Executive Health Checkup', href: '#', description: 'Comprehensive screening', icon: Heart },
            { name: 'Preventive Health Packages', href: '#', description: 'Early detection programs', icon: Shield },
            { name: 'Cardiac Health Packages', href: '#', description: 'Heart health screening', icon: Heart },
            { name: 'Women\'s Health Packages', href: '#', description: 'Specialized women care', icon: Heart },
            { name: 'Senior Citizen Packages', href: '#', description: 'Elderly care programs', icon: Users },
            { name: 'Occupational Health', href: '#', description: 'Workplace health programs', icon: Building }
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
            { name: 'Treatment Packages', href: '#', description: 'Comprehensive care packages', icon: Globe },
            { name: 'Visa Assistance', href: '#', description: 'Travel documentation help', icon: FileText },
            { name: 'Airport Transfers', href: '#', description: 'Transportation services', icon: Ambulance },
            { name: 'Accommodation', href: '#', description: 'Patient and family lodging', icon: Building },
            { name: 'Language Interpreters', href: '#', description: 'Multi-language support', icon: Users },
            { name: 'Currency Exchange', href: '#', description: 'Financial services', icon: CreditCard }
          ]
        },
        {
          category: 'Support Services',
          items: [
            { name: 'International Coordinator', href: '#', description: 'Dedicated support team', icon: Headphones },
            { name: 'Medical Records Transfer', href: '#', description: 'Seamless information sharing', icon: FileText },
            { name: 'Follow-up Care', href: '#', description: 'Continued support', icon: Heart },
            { name: 'Telemedicine', href: '#', description: 'Remote consultations', icon: Phone },
            { name: 'Cultural Support', href: '#', description: 'Culturally sensitive care', icon: Globe },
            { name: 'Insurance Coordination', href: '#', description: 'International coverage', icon: Shield }
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
            <div>
              <h4 className="mb-0 font-display fw-bold text-danger">RUBAN</h4>
              <small className="text-muted">Redefining Healthcare</small>
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