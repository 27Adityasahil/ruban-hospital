import React from 'react';
import { Star, Quote, Heart, User, Calendar } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      age: 45,
      location: 'New York, USA',
      treatment: 'Cardiac Surgery',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'The team at Ruban Hospital saved my life. Dr. Kumar performed my bypass surgery with incredible skill, and the nursing staff provided exceptional care throughout my recovery. I am forever grateful for their dedication and expertise.',
      date: '2024-01-10',
      verified: true
    },
    {
      id: 2,
      name: 'Mohammad Al-Rashid',
      age: 52,
      location: 'Dubai, UAE',
      treatment: 'Neurosurgery',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'I traveled from Dubai for my brain tumor surgery. The international patient services team made everything seamless, and Dr. Sharma\'s expertise gave me a new lease on life. The facilities are world-class.',
      date: '2024-01-08',
      verified: true
    },
    {
      id: 3,
      name: 'Priya Patel',
      age: 38,
      location: 'Mumbai, India',
      treatment: 'Fertility Treatment',
      rating: 5,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'After years of trying, Ruban Hospital\'s fertility center helped us conceive our beautiful daughter. The emotional support and medical expertise of the entire team was outstanding. Our family is complete thanks to them.',
      date: '2024-01-05',
      verified: true
    },
    {
      id: 4,
      name: 'David Smith',
      age: 60,
      location: 'London, UK',
      treatment: 'Joint Replacement',
      rating: 5,
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'My knee replacement surgery exceeded all expectations. The robotic surgery technology and post-operative care were exceptional. I\'m now pain-free and back to playing golf. Highly recommend Dr. Patel and his team.',
      date: '2024-01-03',
      verified: true
    },
    {
      id: 5,
      name: 'Lisa Chen',
      age: 34,
      location: 'Singapore',
      treatment: 'Cancer Treatment',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'The oncology team at Ruban Hospital not only treated my cancer but also cared for my emotional wellbeing. The latest treatment protocols and compassionate care helped me beat cancer. I\'m now in complete remission.',
      date: '2024-01-01',
      verified: true
    },
    {
      id: 6,
      name: 'Raj Mehta',
      age: 42,
      location: 'Chennai, India',
      treatment: 'Emergency Care',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400',
      review: 'When I had a heart attack, the emergency team at Ruban Hospital acted swiftly and professionally. Their quick response and advanced cardiac care unit saved my life. The 24/7 emergency services are truly life-saving.',
      date: '2023-12-28',
      verified: true
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={index < rating ? 'text-warning' : 'text-muted'} 
        fill={index < rating ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <section className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="d-inline-flex align-items-center bg-warning bg-opacity-10 text-warning rounded-pill px-4 py-2 mb-4">
              <Heart size={16} className="me-2" />
              <span className="small fw-medium">Patient Stories</span>
            </div>
            <h2 className="display-4 fw-bold mb-4 font-display">
              What Our{' '}
              <span className="text-gradient-primary">Patients Say</span>
            </h2>
            <p className="lead text-muted">
              Real stories from real patients who have experienced exceptional care at Ruban Hospital. 
              Their testimonials reflect our commitment to excellence in healthcare delivery.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="col-lg-4 col-md-6">
              <div className="testimonial-card h-100 shadow-sm">
                {/* Quote Icon */}
                <div className="position-absolute top-0 end-0 p-3">
                  <Quote size={24} className="text-primary opacity-50" />
                </div>

                <div className="p-4">
                  {/* Rating */}
                  <div className="d-flex align-items-center mb-3">
                    <div className="d-flex me-2">
                      {renderStars(testimonial.rating)}
                    </div>
                    {testimonial.verified && (
                      <span className="badge bg-success bg-opacity-10 text-success d-flex align-items-center rounded-pill ms-auto">
                        <Heart size={12} className="me-1" />
                        Verified
                      </span>
                    )}
                  </div>

                  {/* Review Text */}
                  <blockquote className="mb-4">
                    <p className="text-muted lh-lg">"{testimonial.review}"</p>
                  </blockquote>

                  {/* Patient Info */}
                  <div className="d-flex align-items-center">
                    <div className="position-relative me-3">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-circle"
                        style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                      />
                      <div className="position-absolute bottom-0 end-0 bg-primary rounded-circle p-1">
                        <User size={12} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                      <p className="small text-muted mb-1">Age: {testimonial.age} • {testimonial.location}</p>
                      <p className="small text-primary mb-1 fw-medium">{testimonial.treatment}</p>
                      <div className="d-flex align-items-center small text-muted">
                        <Calendar size={12} className="me-1" />
                        <span>{formatDate(testimonial.date)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-10">
            <div 
              className="card border-0 shadow-custom rounded-4 overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
            >
              <div className="card-body p-5">
                <div className="row text-center d-flex align-items-center">
                  <div className="col-lg-3 col-6 mb-3 mb-lg-0">
                    <h2 className="display-6 fw-bold text-primary mb-1">4.9</h2>
                    <div className="d-flex justify-content-center mb-2">
                      {renderStars(5)}
                    </div>
                    <p className="small text-muted mb-0">Average Rating</p>
                  </div>
                  <div className="col-lg-3 col-6 mb-3 mb-lg-0">
                    <h2 className="display-6 fw-bold text-success mb-1">2,500+</h2>
                    <p className="small text-muted mb-0">Patient Reviews</p>
                  </div>
                  <div className="col-lg-3 col-6 mb-3 mb-lg-0">
                    <h2 className="display-6 fw-bold text-warning mb-1">98%</h2>
                    <p className="small text-muted mb-0">Satisfaction Rate</p>
                  </div>
                  <div className="col-lg-3 col-6">
                    <h2 className="display-6 fw-bold text-info mb-1">15+</h2>
                    <p className="small text-muted mb-0">Countries Served</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8 text-center">
            <h3 className="h2 fw-bold mb-3 font-display">
              Ready to Share Your Story?
            </h3>
            <p className="text-muted mb-4">
              Experience the same exceptional care that our patients rave about. 
              Book your consultation today and join our community of satisfied patients.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <button className="btn btn-custom text-white d-flex align-items-center px-5 py-3 fw-medium">
                <Calendar size={18} className="me-2" />
                Book Consultation
              </button>
              <button className="btn btn-outline-primary d-flex align-items-center px-5 py-3">
                <Star size={18} className="me-2" />
                Read All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;