// import React from 'react';
// import { Check, Heart, Shield, Users, ArrowRight, Star, Clock } from 'lucide-react';

// const HealthPackagesSection = () => {
//   const packages = [
//     {
//       name: 'Essential Health Checkup',
//       price: '₹2,999',
//       originalPrice: '₹4,999',
//       discount: '40% OFF',
//       duration: '2-3 hours',
//       category: 'Basic',
//       icon: Shield,
//       color: 'success',
//       gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//       popular: false,
//       tests: [
//         'Complete Blood Count (CBC)',
//         'Lipid Profile Analysis',
//         'Blood Sugar (Fasting & PP)',
//         'Liver Function Test',
//         'Kidney Function Test',
//         'Thyroid Profile (T3, T4, TSH)',
//         'ECG & Chest X-Ray',
//         'General Physician Consultation'
//       ],
//       benefits: [
//         'Early disease detection',
//         'Preventive healthcare',
//         'Detailed health report',
//         'Doctor consultation included',
//         'Home sample collection'
//       ]
//     },
//     {
//       name: 'Essential Health Checkup',
//       price: '₹2,999',
//       originalPrice: '₹4,999',
//       discount: '40% OFF',
//       duration: '2-3 hours',
//       category: 'Basic',
//       icon: Shield,
//       color: 'success',
//       gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//       popular: false,
//       tests: [
//         'Complete Blood Count (CBC)',
//         'Lipid Profile Analysis',
//         'Blood Sugar (Fasting & PP)',
//         'Liver Function Test',
//         'Kidney Function Test',
//         'Thyroid Profile (T3, T4, TSH)',
//         'ECG & Chest X-Ray',
//         'General Physician Consultation'
//       ],
//       benefits: [
//         'Early disease detection',
//         'Preventive healthcare',
//         'Detailed health report',
//         'Doctor consultation included',
//         'Home sample collection'
//       ]
//     },
//     {
//       name: 'Essential Health Checkup',
//       price: '₹2,999',
//       originalPrice: '₹4,999',
//       discount: '40% OFF',
//       duration: '2-3 hours',
//       category: 'Basic',
//       icon: Shield,
//       color: 'success',
//       gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
//       popular: false,
//       tests: [
//         'Complete Blood Count (CBC)',
//         'Lipid Profile Analysis',
//         'Blood Sugar (Fasting & PP)',
//         'Liver Function Test',
//         'Kidney Function Test',
//         'Thyroid Profile (T3, T4, TSH)',
//         'ECG & Chest X-Ray',
//         'General Physician Consultation'
//       ],
//       benefits: [
//         'Early disease detection',
//         'Preventive healthcare',
//         'Detailed health report',
//         'Doctor consultation included',
//         'Home sample collection'
//       ]
//     },
//     {
//       name: 'Comprehensive Health Checkup',
//       price: '₹7,999',
//       originalPrice: '₹12,999',
//       discount: '38% OFF',
//       duration: '4-5 hours',
//       category: 'Advanced',
//       icon: Heart,
//       color: 'primary',
//       gradient: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
//       popular: true,
//       tests: [
//         'All Essential Package Tests',
//         'Cardiac Risk Assessment',
//         'Cancer Screening Markers',
//         'Vitamin D3 & B12 Analysis',
//         'HbA1c (Diabetes Monitoring)',
//         '2D Echocardiography',
//         'USG Abdomen & Pelvis',
//         'Stress Test (TMT)',
//         'Pulmonary Function Test',
//         'Bone Density Scan (DEXA)',
//         'Specialist Consultations (2)'
//       ],
//       benefits: [
//         'Complete body assessment',
//         'Advanced cardiac evaluation',
//         'Cancer risk screening',
//         'Nutritional assessment',
//         'Priority appointment booking',
//         'Specialist consultations'
//       ]
//     },
//     {
//       name: 'Executive Health Checkup',
//       price: '₹15,999',
//       originalPrice: '₹24,999',
//       discount: '36% OFF',
//       duration: '6-8 hours',
//       category: 'Premium',
//       icon: Users,
//       color: 'warning',
//       gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
//       popular: false,
//       tests: [
//         'All Comprehensive Package Tests',
//         'Full Body MRI Screening',
//         'CT Coronary Angiography',
//         'Advanced Tumor Markers Panel',
//         'Genetic Risk Assessment',
//         'Sleep Study Analysis',
//         'Comprehensive Eye Examination',
//         'Audiometry & Hearing Test',
//         'Specialist Consultations (4)',
//         'Clinical Dietitian Session',
//         'Physiotherapy Assessment',
//         'Mental Health Screening'
//       ],
//       benefits: [
//         'Premium healthcare experience',
//         'Advanced imaging studies',
//         'Genetic risk profiling',
//         'Personalized health plan',
//         'VIP treatment experience',
//         'Annual health monitoring'
//       ]
//     }
//   ];

//   return (
//     <section className="section-padding bg-white">
//       <div className="container">
//         {/* Section Header */}
//         <div className="row justify-content-center mb-5">
//           <div className="col-lg-8 text-center">
//             <div className="d-inline-flex align-items-center bg-danger bg-opacity-10 text-danger rounded-pill px-4 py-2 mb-4">
//               <Heart size={16} className="me-2" />
//               <span className="small fw-medium">Preventive Healthcare</span>
//             </div>
//             <h2 className="display-4 fw-bold mb-4 font-display">
//               Health Checkup{' '}
//               <span className="text-gradient-primary">Packages</span>
//             </h2>
//             <p className="lead text-muted">
//               Comprehensive health screening packages designed to detect potential health issues early 
//               and help you maintain optimal wellness throughout your life.
//             </p>
//           </div>
//         </div>

//         {/* Packages Grid */}
//         <div className="row g-4 justify-content-center">
//           {packages.map((pkg, index) => (
//             <div key={index} className="col-lg-4 col-md-6">
//               <div className={`card card-custom h-100 border-0 position-relative ${pkg.popular ? 'shadow-custom-lg' : ''}`}>
//                 {/* Popular Badge */}
//                 {pkg.popular && (
//                   <div className="position-absolute top-0 start-50 translate-middle">
//                     <div className="bg-primary text-white rounded-pill px-4 py-2 shadow-sm">
//                       <Star size={14} className="me-1" fill="currentColor" />
//                       <span className="small fw-bold">Most Popular</span>
//                     </div>
//                   </div>
//                 )}

//                 {/* Discount Badge */}
//                 <div className="position-absolute top-3 end-3">
//                   <div 
//                     className="text-white rounded-pill px-3 py-1 shadow-sm"
//                     style={{ background: pkg.gradient }}
//                   >
//                     <small className="fw-bold">{pkg.discount}</small>
//                   </div>
//                 </div>

//                 <div className="card-body p-4 pt-5">
//                   {/* Header */}
//                   <div className="text-center mb-4">
//                     <div 
//                       className="d-inline-flex align-items-center justify-center rounded-4 mb-3 shadow-sm"
//                       style={{
//                         width: '80px',
//                         height: '80px',
//                         background: pkg.gradient
//                       }}
//                     >
//                       <pkg.icon size={32} className="text-white" />
//                     </div>
                    
//                     <div 
//                       className="d-inline-block px-3 py-1 text-white rounded-pill small fw-medium mb-3"
//                       style={{ background: pkg.gradient }}
//                     >
//                       {pkg.category}
//                     </div>
                    
//                     <h4 className="fw-bold mb-3">{pkg.name}</h4>
                    
//                     <div className="mb-3">
//                       <div className="d-flex align-items-center justify-content-center gap-2 mb-2">
//                         <h2 className="fw-bold text-dark mb-0">{pkg.price}</h2>
//                         <small className="text-muted text-decoration-line-through">{pkg.originalPrice}</small>
//                       </div>
//                       <div className="d-flex align-items-center justify-content-center text-muted">
//                         <Clock size={14} className="me-2" />
//                         <small>Duration: {pkg.duration}</small>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Tests Included */}
//                   <div className="mb-4">
//                     <h6 className="fw-bold text-dark mb-3">Tests Included:</h6>
//                     <div className="bg-light rounded-3 p-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
//                       {pkg.tests.map((test, testIndex) => (
//                         <div key={testIndex} className="d-flex align-items-start mb-2">
//                           <Check size={16} className="text-success mt-1 me-2 flex-shrink-0" />
//                           <small className="text-muted">{test}</small>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Benefits */}
//                   <div className="mb-4">
//                     <h6 className="fw-bold text-dark mb-3">Key Benefits:</h6>
//                     <div className="row g-2">
//                       {pkg.benefits.map((benefit, benefitIndex) => (
//                         <div key={benefitIndex} className="col-12">
//                           <div className="d-flex align-items-start">
//                             <div 
//                               className="rounded-circle flex-shrink-0 me-2 mt-1"
//                               style={{
//                                 width: '8px',
//                                 height: '8px',
//                                 background: pkg.gradient
//                               }}
//                             ></div>
//                             <small className="text-muted">{benefit}</small>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* CTA Button */}
//                   <div className="d-grid mb-3">
//                     <button 
//                       className="btn text-white fw-medium py-3 border-0 rounded-pill"
//                       style={{ background: pkg.gradient }}
//                     >
//                       <span className="d-flex align-items-center justify-content-center">
//                         <span>Book Package</span>
//                         <ArrowRight size={18} className="ms-2" />
//                       </span>
//                     </button>
//                   </div>

//                   {/* Additional Info */}
//                   <div className="text-center">
//                     <p className="small text-muted mb-0">
//                       * Free home sample collection available
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="row justify-content-center mt-5">
//           <div className="col-lg-10">
//             <div 
//               className="card border-0 shadow-custom text-center rounded-4"
//               style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
//             >
//               <div className="card-body p-5">
//                 <div className="row align-items-center">
//                   <div className="col-lg-8">
//                     <h3 className="h2 fw-bold mb-3 font-display">
//                       Need a Customized Health Package?
//                     </h3>
//                     <p className="text-muted mb-lg-0">
//                       Our healthcare experts can create a personalized health screening package 
//                       based on your age, lifestyle, family history, and specific health concerns.
//                     </p>
//                   </div>
//                   <div className="col-lg-4">
//                     <div className="d-grid gap-2">
//                       <button className="btn btn-custom text-white px-4 py-3 fw-medium">
//                         <Heart size={18} className="me-2" />
//                         Customize Package
//                       </button>
//                       <button className="btn btn-outline-primary px-4 py-2">
//                         <ArrowRight size={16} className="me-2" />
//                         Download Brochure
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HealthPackagesSection;

import React from 'react';

const packages = [
  {
    title: 'Express Cardiac Check',
    price: 1299,
    tests: [
      'Blood Pressure', 'FBS/RBS', 'BMI', 'Lipid Profile', 'ECG', 'ECHO/TMT', 'Consultation',
    ],
  },
  {
    title: 'Express Diabetic Check',
    price: 899,
    tests: [
      'BMI', 'Blood Pressure', 'FBS/RBS', 'HbA1c', 'CBC', 'Uric Acid', 'Urea', 'Creatinine', 'ECG', 'Lipid profile', 'Consultation',
    ],
  },
  {
    title: 'General Health Check',
    price: 2399,
    tests: [
      'Complete Haemogram With ESR', 'SGPT', 'SGOT', 'Uric Acid', 'Bilirubin', 'Urine Routine and Microscopy', 'Fasting Sugar', 'Chest X-Ray',
      'Urea', 'Creatinine', 'ECG', 'ECHO/TMT', 'Total cholesterol', 'Ultrasound whole Abdomen', 'General Physician Consultation', 'Breakfast',
    ],
  },
  {
    title: 'Well Women Check',
    price: 2499,
    tests: [
      'CBC, ESR', 'FBS', 'PPBS', 'LFT', 'RFT', 'VIT D3', 'VIT B12', 'Chest X-Ray', 'ECG',
      'USG Whole Abdomen', 'Gynae Consultation', 'PAP Smear With LBC', 'TFT', 'Breakfast',
    ],
  },
  {
    title: 'Child Health Check',
    price: 1199,
    tests: [
      'Complete Hemogram', 'Serum Ferritin, B12 and Folate Levels', 'Serum Vitamin D Levels', 'Blood Sugar',
      'Assessment of Growth, Development and Nutrition', 'Dietician Consultation', 'Paediatric Consultation',
    ],
  },
  {
    title: 'Cancer Check',
    price: 2899,
    tests: [
      'Complete Haemogram with ESR', 'Blood Group', 'Liver Function Test', 'Kidney-Creatinine', 'Urea', 'Blood Sugar Fasting', 'Blood Sugar PP',
      'PSA (for males)', 'Stool Routine and Microscopy', 'Urine Routine and Microscopy', 'Stool for occult Blood', 'Chest X-ray',
      'Ultrasound whole Abdomen', 'Oncologist Consultation', 'PAP Smear (for females)',
    ],
  },
  {
    title: 'Cardiac Check',
    price: 3999,
    tests: [
      'Complete Haemogram with ESR', 'Blood Group', 'Liver Function Test', 'Kidney-Creatinine', 'Urea', 'Lipid Profile',
      'Blood Sugar Fasting', 'Blood Sugar PP', 'Glycosylated Hemoglobin (HbA1c)', 'Serum Phosphorous', 'Serum Calcium', 'Stool Routine and Microscopy',
      'Urine Routine and Microscopy', 'TSH', 'Chest X-Ray', 'Ultrasound whole Abdomen', 'ECG', 'TMT', 'PTT', 'ECHO', 'CPK', 'Cardiologist Consultation', 'Breakfast',
    ],
  },
];

const HealthCheckupPackages = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-red-700">Health Checkup Packages</h2>

      <div className="flex flex-wrap justify-center gap-6">
        {packages.map((pkg, index) => (
          <div key={index} className="w-full sm:w-[300px] bg-white shadow-lg rounded-xl flex flex-col justify-between p-4 border border-gray-200">
            <div>
              <div className="bg-red-700 text-white text-center py-2 rounded-t-md font-semibold mb-2">
                HEALTH CHECKUP PACKAGE
              </div>
              <div className="mb-2">
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">{pkg.title}</span>
                <p className="text-xl font-bold mt-2">₹ {pkg.price}</p>
              </div>
              <ul className="list-disc list-inside mt-2 text-sm text-gray-800 space-y-1">
                {pkg.tests.map((test, idx) => (
                  <li key={idx}>{test}</li>
                ))}
              </ul>
            </div>
            <div className="mt-4">
              <button className="w-full bg-red-600 text-white py-2 rounded-md font-semibold hover:bg-red-700 transition">
                📞 8051237036
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthCheckupPackages;
