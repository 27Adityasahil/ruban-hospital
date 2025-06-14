import React from 'react';
import { Calendar, Clock, ArrowRight, Award, Heart, Users, Activity } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Ruban Hospital Introduces Revolutionary Robotic Heart Surgery Program',
      excerpt: 'State-of-the-art robotic surgical system now available for minimally invasive cardiac procedures, reducing recovery time by 50%.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Medical Innovation',
      date: '2024-01-15',
      readTime: '5 min read',
      icon: Heart,
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)'
    },
    {
      id: 2,
      title: 'International Recognition: JCI Reaccreditation for Excellence',
      excerpt: 'Ruban Hospital receives prestigious JCI reaccreditation, reinforcing our commitment to international quality standards.',
      image: 'https://images.pexels.com/photos/4167669/pexels-photo-4167669.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Awards & Recognition',
      date: '2024-01-10',
      readTime: '3 min read',
      icon: Award,
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      id: 3,
      title: 'Free Health Screening Camp: Serving 1000+ Community Members',
      excerpt: 'Our monthly community health initiative provides free medical checkups and health education to underserved populations.',
      image: 'https://images.pexels.com/photos/8376177/pexels-photo-8376177.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Community Service',
      date: '2024-01-08',
      readTime: '4 min read',
      icon: Users,
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
    },
    {
      id: 4,
      title: 'Advanced Cancer Treatment Center Opens with Latest Technology',
      excerpt: 'New oncology wing features cutting-edge immunotherapy and precision medicine capabilities for comprehensive cancer care.',
      image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Facility Expansion',
      date: '2024-01-05',
      readTime: '6 min read',
      icon: Activity,
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Extract the featured news icon component
  const FeaturedNewsIcon = newsItems[0].icon;

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <div className="d-inline-flex align-items-center bg-info bg-opacity-10 text-info rounded-pill px-4 py-2 mb-4">
              <Activity size={16} className="me-2" />
              <span className="small fw-medium">Latest Updates</span>
            </div>
            <h2 className="display-4 fw-bold mb-4 font-display">
              Hospital{' '}
              <span className="text-gradient-primary">News & Updates</span>
            </h2>
            <p className="lead text-muted">
              Stay informed about our latest medical breakthroughs, community initiatives, 
              and achievements in delivering exceptional healthcare services.
            </p>
          </div>
        </div>

        {/* Featured News */}
        <div className="row mb-5">
          <div className="col-12">
            <div className="card card-custom border-0 overflow-hidden shadow-custom">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="position-relative h-100">
                    <img 
                      src={newsItems[0].image}
                      alt={newsItems[0].title}
                      className="img-fluid w-100 h-100"
                      style={{ objectFit: 'cover', minHeight: '400px' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-25"></div>
                    
                    {/* Category Badge */}
                    <div className="position-absolute top-3 start-3">
                      <div 
                        className="d-flex align-items-center text-white rounded-pill px-3 py-2 shadow-sm"
                        style={{ background: newsItems[0].gradient }}
                      >
                        <FeaturedNewsIcon size={16} className="me-2" />
                        <span className="small fw-medium">{newsItems[0].category}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card-body p-5 h-100 d-flex flex-column">
                    <div className="mb-3">
                      <div className="d-flex align-items-center text-muted mb-3">
                        <Calendar size={16} className="me-2" />
                        <span className="small me-3">{formatDate(newsItems[0].date)}</span>
                        <Clock size={16} className="me-2" />
                        <span className="small">{newsItems[0].readTime}</span>
                      </div>
                      <h3 className="fw-bold mb-3">{newsItems[0].title}</h3>
                      <p className="text-muted lead">{newsItems[0].excerpt}</p>
                    </div>
                    <div className="mt-auto">
                      <button className="btn btn-custom text-white fw-medium">
                        Read Full Story
                        <ArrowRight size={16} className="ms-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Grid */}
        <div className="row g-4">
          {newsItems.slice(1).map((news, index) => {
            const NewsIcon = news.icon;
            return (
              <div key={news.id} className="col-lg-4 col-md-6">
                <div className="card card-custom h-100 border-0 overflow-hidden">
                  {/* Image */}
                  <div className="position-relative overflow-hidden">
                    <img 
                      src={news.image}
                      alt={news.title}
                      className="card-img-top"
                      style={{ height: '250px', objectFit: 'cover' }}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-20"></div>
                    
                    {/* Category Badge */}
                    <div className="position-absolute top-3 start-3">
                      <div 
                        className="d-flex align-items-center text-white rounded-pill px-3 py-1 shadow-sm"
                        style={{ background: news.gradient }}
                      >
                        <NewsIcon size={14} className="me-1" />
                        <span className="small fw-medium">{news.category}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="card-body p-4 d-flex flex-column">
                    <div className="mb-3">
                      <div className="d-flex align-items-center text-muted mb-3">
                        <Calendar size={14} className="me-2" />
                        <span className="small me-3">{formatDate(news.date)}</span>
                        <Clock size={14} className="me-2" />
                        <span className="small">{news.readTime}</span>
                      </div>
                      <h5 className="fw-bold mb-3 lh-base">{news.title}</h5>
                      <p className="text-muted">{news.excerpt}</p>
                    </div>
                    
                    <div className="mt-auto">
                      <button className="btn btn-outline-primary btn-sm fw-medium">
                        Read More
                        <ArrowRight size={14} className="ms-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="row justify-content-center mt-5">
          <div className="col-lg-8">
            <div 
              className="card border-0 shadow-custom text-center rounded-4"
              style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)' }}
            >
              <div className="card-body p-5">
                <h3 className="h2 fw-bold mb-3 font-display">
                  Stay Updated with Our Newsletter
                </h3>
                <p className="text-muted mb-4">
                  Get the latest health tips, medical breakthroughs, and hospital updates 
                  delivered directly to your inbox.
                </p>
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="input-group mb-3">
                      <input 
                        type="email" 
                        className="form-control form-control-lg border-0 shadow-sm" 
                        placeholder="Enter your email address"
                      />
                      <button className="btn btn-custom text-white px-4" type="button">
                        Subscribe
                      </button>
                    </div>
                    <p className="small text-muted mb-0">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
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

export default NewsSection;