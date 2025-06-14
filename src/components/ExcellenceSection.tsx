import React from 'react';
import { Heart, Brain, Bone, Shield, Activity, Users, Eye, Baby, Stethoscope, ArrowRight } from 'lucide-react';

const ExcellenceSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology & Heart Surgery',
      description: 'Advanced cardiac care with minimally invasive procedures, heart transplants, and comprehensive preventive cardiology services.',
      features: ['Cardiac Catheterization', 'Heart Transplant Surgery', 'Valve Replacement', 'Preventive Cardiology'],
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
      bgColor: 'bg-danger'
    },
    {
      icon: Brain,
      title: 'Neurology & Neurosurgery',
      description: 'Cutting-edge neurological treatments for brain, spine, and nervous system disorders using the latest medical technology.',
      features: ['Brain Surgery', 'Spine Surgery', 'Stroke Care', 'Neuro Rehabilitation'],
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      bgColor: 'bg-primary'
    },
    {
      icon: Bone,
      title: 'Orthopedics & Joint Care',
      description: 'Complete orthopedic solutions including joint replacement, sports medicine, trauma care, and advanced arthroscopic procedures.',
      features: ['Joint Replacement', 'Sports Medicine', 'Trauma Care', 'Arthroscopic Surgery'],
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
      bgColor: 'bg-info'
    },
    {
      icon: Shield,
      title: 'Emergency & Critical Care',
      description: '24/7 emergency services with state-of-the-art trauma center, intensive care facilities, and rapid response teams.',
      features: ['24/7 Emergency Care', 'Level 1 Trauma Center', 'ICU & Critical Care', 'Air Ambulance'],
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      bgColor: 'bg-success'
    },
    {
      icon: Activity,
      title: 'Radiology & Imaging',
      description: 'Advanced diagnostic imaging including MRI, CT, PET scans, and interventional radiology with cutting-edge technology.',
      features: ['3T MRI & 128-Slice CT', 'PET-CT Imaging', 'Interventional Radiology', 'Digital Mammography'],
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      bgColor: 'bg-warning'
    },
    {
      icon: Users,
      title: 'Fertility & IVF Center',
      description: 'Comprehensive fertility treatments and reproductive medicine with high success rates and personalized care protocols.',
      features: ['IVF & ICSI Treatment', 'Fertility Preservation', 'Genetic Testing', 'Reproductive Surgery'],
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      bgColor: 'bg-success'
    },
    {
      icon: Eye,
      title: 'Ophthalmology Center',
      description: 'Complete eye care services including cataract surgery, retinal treatments, LASIK, and pediatric ophthalmology.',
      features: ['Phacoemulsification', 'LASIK & Refractive Surgery', 'Retinal Surgery', 'Glaucoma Management'],
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
      bgColor: 'bg-warning'
    },
    {
      icon: Baby,
      title: 'Pediatrics & NICU',
      description: 'Specialized care for children from birth through adolescence with Level III NICU and pediatric subspecialties.',
      features: ['Level III NICU', 'Pediatric Surgery', 'Child Development', 'Pediatric Emergency'],
      gradient: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)',
      bgColor: 'bg-danger'
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Comprehensive internal medicine services for adult patients with chronic conditions, preventive care, and health screenings.',
      features: ['Diabetes Management', 'Hypertension Care', 'Preventive Medicine', 'Executive Health'],
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
      bgColor: 'bg-primary'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="d-inline-flex align-items-center bg-primary bg-opacity-10 text-primary rounded-pill px-4 py-2 mb-4">
              <Shield size={16} className="me-2" />
              <span className="small fw-medium">Centers of Excellence</span>
            </div>
            <h2 className="display-4 fw-bold mb-4 font-display">
              World-Class Medical{' '}
              <span className="text-gradient-primary">Specialties</span>
            </h2>
            <p className="lead text-muted">
              Our centers of excellence bring together the finest medical professionals, 
              cutting-edge technology, and proven treatment protocols to deliver exceptional care.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {services.map((service, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card card-custom h-100 border-0 position-relative overflow-hidden service-card">
                {/* Background Gradient Overlay */}
                <div 
                  className="position-absolute top-0 end-0 opacity-25"
                  style={{
                    width: '100px',
                    height: '100px',
                    background: service.gradient,
                    clipPath: 'circle(50% at 80% 20%)'
                  }}
                ></div>

                <div className="card-body p-4 position-relative">
                  {/* Icon */}
                  <div 
                    className="service-icon mb-4 shadow-sm"
                    style={{ background: service.gradient }}
                  >
                    <service.icon size={32} className="text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="fw-bold mb-3 text-dark">
                    {service.title}
                  </h4>
                  
                  <p className="text-muted mb-4 lh-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="d-flex align-items-start mb-2">
                        <div 
                          className="rounded-circle flex-shrink-0 me-3 mt-1"
                          style={{
                            width: '8px',
                            height: '8px',
                            background: service.gradient
                          }}
                        ></div>
                        <small className="text-muted">{feature}</small>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button 
                    className="btn w-100 text-white fw-medium rounded-pill py-3 border-0 position-relative overflow-hidden"
                    style={{ background: service.gradient }}
                  >
                    <span className="d-flex align-items-center justify-content-center">
                      <span>Learn More</span>
                      <ArrowRight size={16} className="ms-2" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div 
              className="card border-0 shadow-custom text-center rounded-4 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
            >
              <div className="card-body p-5">
                <h3 className="h2 fw-bold mb-3 font-display">
                  Need Help Choosing the Right Specialty?
                </h3>
                <p className="lead text-muted mb-4 mx-auto" style={{ maxWidth: '600px' }}>
                  Our patient care coordinators are here to help you find the right specialist 
                  and schedule your appointment with the most suitable expert for your needs.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <button className="btn btn-custom text-white px-5 py-3 rounded-pill">
                    <Users size={18} className="me-2" />
                    Consult Our Experts
                  </button>
                  <button className="btn btn-outline-primary px-5 py-3 rounded-pill">
                    <Activity size={18} className="me-2" />
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExcellenceSection;