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
    <div className="container py-5">
      <h2 className="text-center text-danger mb-4">Health Checkup Packages</h2>
      <p className="package-text text-center ">We offer comprehensive health checkup packages which helps in the overall evaluation of the organs and systems of the body such as Heart, Breast, Eyes, ENT, Dental, Lungs, Kidneys, Liver, etc. You can get a full-body check-up done as per your requirement.</p>

      <div className="row g-4 justify-content-center">
        {packages.map((pkg, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 border border-secondary">
              <div className="card-header bg-danger text-white text-center fw-semibold">
                HEALTH CHECKUP PACKAGE
              </div>
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <span className="badge bg-light text-danger mb-2">{pkg.title}</span>
                  <h5 className="card-title fw-bold">₹ {pkg.price}</h5>
                  <ul className="list-unstyled mt-2 small">
                    {pkg.tests.map((test, idx) => (
                      <li key={idx}>• {test}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-3">
                  <button className="btn btn-custom text-white w-100 fw-semibold">
                    📞 8051237036
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthCheckupPackages;
