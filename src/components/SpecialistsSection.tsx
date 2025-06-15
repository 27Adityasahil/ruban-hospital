import React from 'react';
import { Star, Calendar, Award, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import AnilImg from '../assets/management/Dr.-Gp.-Capt.-Anil-Kumar-Singh.png';
import SatyajeetImg from '../assets/management/satyajeet.jpg';
import BibhaImg from '../assets/management/Dr.-Bibha-Singh.jpg'


const SpecialistsSection = () => {
  const specialists = [
    {
      name: 'Dr. Gp. Capt. Anil Kumar Singh',
      specialty: 'Senior Cardiologist',
      subSpecialty: 'Interventional Cardiology',
      experience: '15+ Years',
      education: 'MBBS, MD, DM Cardiology',
      image: AnilImg,
      rating: 4.9,
      reviews: 847,
      location: 'Cardiac Center',
      availability: 'Mon, Wed, Fri',
      achievements: ['Padma Shri Awardee', 'Published 50+ Research Papers', 'International Speaker'],
      specializations: ['Angioplasty', 'Bypass Surgery', 'Heart Transplant']
    },
    {
      name: 'Dr. Satyajeet',
      specialty: 'Senior Cardiologist',
      subSpecialty: 'Interventional Cardiology',
      experience: '15+ Years',
      education: 'MBBS, MD, DM Cardiology',
      image: SatyajeetImg,
      rating: 4.9,
      reviews: 847,
      location: 'Cardiac Center',
      availability: 'Mon, Wed, Fri',
      achievements: ['Padma Shri Awardee', 'Published 50+ Research Papers', 'International Speaker'],
      specializations: ['Angioplasty', 'Bypass Surgery', 'Heart Transplant']
    },
    {
      name: 'Dr.-Bibha-Singh',
      specialty: 'Senior Cardiologist',
      subSpecialty: 'Interventional Cardiology',
      experience: '15+ Years',
      education: 'MBBS, MD, DM Cardiology',
      image: BibhaImg,
      rating: 4.9,
      reviews: 847,
      location: 'Cardiac Center',
      availability: 'Mon, Wed, Fri',
      achievements: ['Padma Shri Awardee', 'Published 50+ Research Papers', 'International Speaker'],
      specializations: ['Angioplasty', 'Bypass Surgery', 'Heart Transplant']
    },
    
    
  ];

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="d-inline-flex align-items-center bg-success bg-opacity-10 text-success rounded-pill px-4 py-2 mb-4">
              <Award size={16} className="me-2" />
              <span className="small fw-medium">Expert Medical Team</span>
            </div>
            <h2 className="display-4 fw-bold mb-4 font-display">
              Meet Our{' '}
              <span className="text-gradient-primary">Renowned Specialists</span>
            </h2>
            <p className="lead text-muted">
              Our team of highly qualified and experienced doctors are leaders in their fields, 
              committed to providing exceptional healthcare with personalized attention and cutting-edge treatments.
            </p>
          </div>
        </div>

        {/* Specialists Grid */}
        <div className="row g-4 d-flex align-items-center justify-content-center">
          {specialists.map((doctor, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="card card-custom h-100 border-0 overflow-hidden">
                {/* Image Section */}
                <div className="position-relative overflow-hidden">
                  <img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="card-img-top"
                    style={{ height: '280px', objectFit: 'cover' }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                  
                  {/* Rating Badge */}
                  <div className="position-absolute top-3 end-3 bg-white bg-opacity-90 rounded-pill px-3 py-2 d-flex align-items-center shadow-sm">
                    <Star size={14} className="text-warning me-1" fill="currentColor" />
                    <span className="small fw-bold">{doctor.rating}</span>
                  </div>

                  {/* Availability Badge */}
                  <div className="position-absolute top-3 start-3 bg-success text-white rounded-pill px-3 py-1">
                    <small className="fw-medium">Available</small>
                  </div>

                  {/* Quick Stats Overlay */}
                  <div className="position-absolute bottom-3 start-3 end-3">
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="bg-white bg-opacity-90 rounded-3 p-2 text-center">
                          <h6 className="mb-0 fw-bold text-primary">{doctor.experience}</h6>
                          <small className="text-muted">Experience</small>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="bg-white bg-opacity-90 rounded-3 p-2 text-center">
                          <h6 className="mb-0 fw-bold text-primary">{doctor.reviews}</h6>
                          <small className="text-muted">Reviews</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="card-body p-4">
                  {/* Doctor Info */}
                  <div className="mb-3">
                    <h5 className="fw-bold mb-1 text-dark">{doctor.name}</h5>
                    {/* <p className="text-primary fw-semibold mb-1">{doctor.specialty}</p> */}
                    {/* <p className="text-muted small mb-1">{doctor.subSpecialty}</p> */}
                    {/* <p className="text-muted small">{doctor.education}</p> */}
                  </div>

                  {/* Location & Availability */}
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      {/* <MapPin size={14} className="text-muted me-2" /> */}
                      {/* <small className="text-muted">{doctor.location}</small> */}
                    </div>
                    <div className="d-flex align-items-center">
                      {/* <Clock size={14} className="text-muted me-2" /> */}
                      {/* <small className="text-muted">{doctor.availability}</small> */}
                    </div>
                  </div>

                  {/* Specializations */}
                  {/* <div className="mb-3">
                    <h6 className="small fw-bold text-dark mb-2">Specializations:</h6>
                    <div className="d-flex flex-wrap gap-1">
                      {doctor.specializations.slice(0, 2).map((spec, specIndex) => (
                        <span key={specIndex} className="badge bg-primary bg-opacity-10 text-primary rounded-pill">
                          {spec}
                        </span>
                      ))}
                      {doctor.specializations.length > 2 && (
                        <span className="badge bg-light text-muted rounded-pill">
                          +{doctor.specializations.length - 2} more
                        </span>
                      )}
                    </div>
                  </div> */}

                  {/* Key Achievements */}
                  {/* <div className="mb-4">
                    <h6 className="small fw-bold text-dark mb-2">Key Achievements:</h6>
                    <div className="small">
                      {doctor.achievements.slice(0, 2).map((achievement, achIndex) => (
                        <div key={achIndex} className="d-flex align-items-start mb-1">
                          <div className="bg-success rounded-circle me-2 flex-shrink-0 mt-1" style={{ width: '6px', height: '6px' }}></div>
                          <span className="text-muted">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div> */}
                  
                  {/* Action Buttons */}
                  <div className="d-grid gap-2">
                    <button className="btn btn-custom text-white d-flex align-items-center justify-center fw-medium">
                      <Calendar size={16} className="me-2" />
                      Book Appointment
                    </button>
                    <button className="btn btn-outline-primary  btn-sm d-flex align-items-center justify-center">
                      <Users size={14} className="me-2" />
                      View Full Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div className="card border-0 shadow-custom text-center" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
              <div className="card-body p-5">
                <div className="row align-items-center">
                  <div className="col-lg-8">
                    <h3 className="h2 fw-bold mb-3 font-display">
                      Can't Find the Right Specialist?
                    </h3>
                    <p className="text-muted mb-lg-0">
                      We have over 200+ specialist doctors across 50+ medical disciplines. 
                      Let our patient care team help you find the perfect match for your healthcare needs.
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <div className="d-grid gap-2">
                      <button className="btn btn-custom text-white d-flex align-items-center justify-center px-4 py-3 fw-medium">
                        <Users size={18} className="me-2" />
                        View All Doctors
                      </button>
                      <button className="btn btn-outline-primary d-flex align-items-center justify-center px-4 py-2">
                        <ArrowRight size={16} className="me-2" />
                        Get Help Choosing
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialistsSection;