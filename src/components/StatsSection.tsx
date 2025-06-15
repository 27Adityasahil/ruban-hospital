import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, Heart, Building, Clock, Globe, Activity, Shield } from 'lucide-react';

const StatsSection = () => {
  const [counters, setCounters] = useState({
    patients: 0,
    doctors: 0,
    years: 0,
    beds: 0,
    surgeries: 0,
    countries: 0,
    departments: 0,
    awards: 0
  });
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const finalValues = {
    patients: 400000,
    doctors: 200,
    years: 25,
    beds: 450,
    surgeries: 10000,
    countries: 15,
    departments: 20,
    awards: 20
  };

  const stats = [
    {
      icon: Users,
      count: counters.patients,
      suffix: '+',
      label: 'Happy Patients',
      description: 'Treated with excellence',
      color: 'primary',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
    },
    {
      icon: Award,
      count: counters.doctors,
      suffix: '+',
      label: 'Expert Doctors',
      description: 'Board-certified specialists',
      color: 'success',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      icon: Clock,
      count: counters.years,
      suffix: '+',
      label: 'Years of Service',
      description: 'Trusted healthcare legacy',
      color: 'warning',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      icon: Building,
      count: counters.beds,
      suffix: '+',
      label: 'Hospital Beds',
      description: 'Modern patient facilities',
      color: 'info',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)'
    },
    {
      icon: Heart,
      count: counters.surgeries,
      suffix: '+',
      label: 'Successful Surgeries',
      description: 'Life-saving procedures',
      color: 'danger',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
    },
    {
      icon: Globe,
      count: counters.countries,
      suffix: '+',
      label: 'Countries Served',
      description: 'International patients',
      color: 'secondary',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    },
    {
      icon: Activity,
      count: counters.departments,
      suffix: '+',
      label: 'Departments',
      description: 'Specialized medical units',
      color: 'primary',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
    },
    {
      icon: Shield,
      count: counters.awards,
      suffix: '+',
      label: 'Awards & Recognition',
      description: 'Excellence acknowledged',
      color: 'success',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2500;
    const steps = 60;
    const stepDuration = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      setCounters({
        patients: Math.floor(finalValues.patients * easeOutQuart),
        doctors: Math.floor(finalValues.doctors * easeOutQuart),
        years: Math.floor(finalValues.years * easeOutQuart),
        beds: Math.floor(finalValues.beds * easeOutQuart),
        surgeries: Math.floor(finalValues.surgeries * easeOutQuart),
        countries: Math.floor(finalValues.countries * easeOutQuart),
        departments: Math.floor(finalValues.departments * easeOutQuart),
        awards: Math.floor(finalValues.awards * easeOutQuart)
      });

      if (step >= steps) {
        clearInterval(timer);
        setCounters(finalValues);
      }
    }, stepDuration);
  };

  return (
    <section ref={sectionRef} className="section-padding" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="d-inline-flex align-items-center bg-primary bg-opacity-10 text-primary rounded-pill px-4 py-2 mb-4">
              <Award size={16} className="me-2" />
              <span className="small fw-medium">Trusted Healthcare Provider</span>
            </div>
            <h2 className="display-4 fw-bold mb-4 font-display">
              Numbers That Speak{' '}
              <span className="text-gradient-primary">Excellence</span>
            </h2>
            <p className="lead text-muted">
              Our commitment to healthcare excellence is reflected in every statistic. 
              Each number represents lives touched, families served, and communities strengthened.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="row g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div 
                className="card card-custom h-100 border-0 text-center position-relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background Pattern */}
                <div 
                  className="position-absolute top-0 end-0 opacity-25"
                  style={{
                    width: '80px',
                    height: '80px',
                    background: stat.gradient,
                    clipPath: 'circle(50% at 70% 30%)'
                  }}
                ></div>

                <div className="card-body p-4 position-relative">
                  {/* Icon */}
                  <div 
                    className="d-inline-flex align-items-center justify-content-center rounded-4 mb-4 shadow-sm"
                    style={{
                      width: '80px',
                      height: '80px',
                      background: `${stat.gradient}`
                    }}
                  >
                    <stat.icon size={32} className="text-white" />
                  </div>

                  {/* Counter */}
                  <h2 className="stats-counter fw-bold mb-2 text-dark">
                    {stat.count.toLocaleString()}{stat.suffix}
                  </h2>

                  {/* Label */}
                  <h5 className="fw-bold mb-2" style={{ color: `var(--bs-${stat.color})` }}>
                    {stat.label}
                  </h5>

                  {/* Description */}
                  <p className="text-muted mb-4 small">
                    {stat.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="progress mb-3" style={{ height: '4px' }}>
                    <div 
                      className="progress-bar"
                      style={{
                        background: stat.gradient,
                        width: hasAnimated ? '100%' : '0%',
                        transition: `width 1.5s ease ${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div className="card border-0 shadow-custom text-center" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}>
              <div className="card-body p-5">
                <h3 className="h2 fw-bold mb-3 font-display">
                  Ready to Experience Excellence?
                </h3>
                <p className="lead text-muted mb-4">
                  Join thousands of satisfied patients who have trusted us with their healthcare needs.
                </p>
                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <button className="btn btn-custom d-flex align-items-center text-white px-5 py-3 rounded-pill">
                    <Users size={18} className="me-2" />
                    Schedule Consultation
                  </button>
                  <button className="btn btn-outline-primary d-flex align-items-center px-5 py-3 rounded-pill">
                    <Activity size={18} className="me-2" />
                    Explore Services
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

export default StatsSection;