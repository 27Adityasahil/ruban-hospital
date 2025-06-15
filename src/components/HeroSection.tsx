import React from "react";
import {
  ArrowRight,
  Award,
  Users,
  Heart,
  Shield,
  Calendar,
  Phone,
} from "lucide-react";

const HeroSection = () => {
  const achievements = [
    { icon: Award, number: "25+", text: "Years Experience", color: "primary" },
    { icon: Users, number: "4L+", text: "Happy Patients", color: "success" },
    { icon: Heart, number: "50+", text: "Specialties", color: "danger" },
    { icon: Shield, number: "24/7", text: "Emergency Care", color: "warning" },
  ];

  const stats = [
    { number: "99.8%", label: "Success Rate", icon: Heart },
    { number: "500+", label: "Hospital Beds", icon: Shield },
    { number: "200+", label: "Expert Doctors", icon: Users },
  ];

  return (
    <section
      className="position-relative overflow-hidden"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #f1f5f9 100%)",
      }}
    >
      {/* Background Decorations */}
      <div className="position-absolute top-0 end-0 opacity-25">
        <div
          className="rounded-circle gradient-primary"
          style={{
            width: "400px",
            height: "400px",
            transform: "translate(40%, -40%)",
          }}
        ></div>
      </div>
      <div className="position-absolute bottom-0 start-0 opacity-25">
        <div
          className="rounded-circle gradient-secondary"
          style={{
            width: "300px",
            height: "300px",
            transform: "translate(-40%, 40%)",
          }}
        ></div>
      </div>

      <div className="container section-padding">
        <div className="row align-items-center min-vh-100">
          {/* Left Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="slide-in-left">
              <div className="d-inline-flex align-items-center bg-primary bg-opacity-10 text-primary rounded-pill px-4 py-2 mb-4">
                <Award size={16} className="me-2" />
                <span className="small fw-medium">
                  NABH Accredited Multi-Specialty Hospital
                </span>
              </div>

              <h1 className="display-3 fw-bold mb-4 font-display">
                Your Health is Our{" "}
                <span className="text-gradient-primary">Priority</span>
              </h1>

              <p
                className="lead text-muted mb-5"
                style={{ fontSize: "1.25rem", lineHeight: "1.7" }}
              >
                Experience world-class healthcare with cutting-edge technology,
                compassionate care, and a team of renowned specialists dedicated
                to your wellbeing. We deliver excellence in every aspect of
                medical care.
              </p>

              <div className="row g-3 mb-5">
                {achievements.map((achievement, index) => (
                  <div key={index} className="col-6 col-md-3">
                    <div className="card card-custom h-100 text-center border-0 bg-white shadow-sm">
                      <div className="card-body p-3">
                        <div className={`text-${achievement.color} mb-2`}>
                          <achievement.icon size={24} />
                        </div>
                        <h6 className="fw-bold mb-1">{achievement.number}</h6>
                        <small className="text-muted">{achievement.text}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="d-flex flex-wrap gap-3">
                <button className="btn btn-custom text-white px-4 d-flex py-3 rounded-pill shadow">
                  <Calendar size={18} className="me-2" />
                  Book Appointment
                  <ArrowRight size={18} className="ms-2" />
                </button>
                <button className="btn btn-outline-danger px-4 d-flex align-items-center py-2 rounded-pill">
                  <Phone size={18} className="me-2" />
                  Emergency: +91 9876543210
                  <div
                    className="bg-danger rounded-circle d-inline-block ms-2"
                    style={{ width: "8px", height: "8px" }}
                  ></div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Video Section */}
          <div className="col-lg-6">
            <div className="slide-in-right">
              <div
                className="position-relative rounded-4 overflow-hidden shadow-custom-lg"
                style={{ height: "500px" }}
              >
                {/* YouTube Video Embed */}
                {/* <iframe
                  className="w-100 h-100 border-0 rounded-4"
                  src="https://www.youtube.com/embed/yHCsfTTe0nQ?autoplay=1&mute=1&loop=1&playlist=yHCsfTTe0nQ&controls=0"
                  title="Hospital Tour Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe> */}

                <iframe
                  className="w-100 h-100 border-0 rounded-4"
                  src="https://www.youtube.com/embed/yHCsfTTe0nQ?autoplay=1&mute=1&loop=1&playlist=yHCsfTTe0nQ&controls=0"
                  title="Hospital Tour Video"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  loading="lazy"
                />
                <noscript>
                  <p>
                    Your browser does not support embedded videos.{" "}
                    <a href="https://youtu.be/yHCsfTTe0nQ" target="_blank">
                      Watch on YouTube
                    </a>
                  </p>
                </noscript>

                {/* Gradient Overlay */}
                <div
                  className="position-absolute top-0 start-0 w-100 h-100"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(30, 64, 175, 0.1) 0%, rgba(8, 145, 178, 0.1) 100%)",
                  }}
                ></div>

                {/* Info Card */}
                {/* Info Card */}
                <div
                  className="position-absolute bottom-3 start-50 translate-middle-x"
                  style={{ width: "280px" }}
                >
                  <div className="card border-0 bg-white bg-opacity-90 backdrop-blur shadow-sm">
                    <div className="card-body px-4 py-3 text-center">
                      <h6 className="mb-1 fw-bold">Virtual Hospital Tour</h6>
                      <small className="text-muted">
                        Discover our state-of-the-art facilities
                      </small>
                    </div>
                  </div>
                </div>

                {/* Floating Stats */}
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="position-absolute card border-0 shadow-custom p-3 floating-animation"
                    style={{
                      [index === 0 ? "top" : index === 1 ? "bottom" : "top"]:
                        index === 1 ? "20px" : "60px",
                      [index === 2 ? "right" : "left"]:
                        index === 2 ? "-20px" : "-20px",
                      animationDelay: `${index * 0.5}s`,
                      width: "160px",
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="gradient-primary text-white rounded-3 p-2 me-3">
                        <stat.icon size={20} />
                      </div>
                      <div>
                        <h5 className="mb-0 fw-bold">{stat.number}</h5>
                        <small className="text-muted">{stat.label}</small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
