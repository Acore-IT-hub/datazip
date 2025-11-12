// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import Home from './Pages/Home';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Subscribe from './Pages/Subscription';

// // Doctor
// import Dashboard from './Pages/Doctor/Dasboard';
// import DoctorDashboard from './Pages/Doctor/DoctorDashboard';
// import AnalyticsTraining from './Pages/Doctor/AnalyticsTraining';
// import Prescriptions from './Pages/Doctor/Prescriptions';
// import Engagement from './Pages/Doctor/Engagement';
// import CertificatesBilling from './Pages/Doctor/CertificatesBilling';
// import PracticeManagement from './Pages/Doctor/PracticeManagement';
// import Sidebar from './Pages/Doctor/Sidebar';

// // Student
// import StudentDashboard from './Pages/Student/StudentDashboard';
// import StudentPracticeMode from './Pages/Student/StudentPracticeMode';
// import StudentFeedback from './Pages/Student/StudentFeedback';
// import StudentProgress from './Pages/Student/StudentProgress';
// import StudentCertification from './Pages/Student/StudentCertification';
// import StudentSidebar from './Pages/Student/StudentSidebar';
// import ExpensePage from './Pages/Doctor/ExpensePage';
// import FeedbackPage from './Pages/Doctor/FeedbackPage';
// import ReportPage from './Pages/Doctor/ReportPage';
// import AppointmentPage from './Pages/Doctor/AppointmentPage';
// import MedicalHistoryPage from './Pages/Doctor/MedicalHistoryPage';
// import PatientsDesk from './Pages/Doctor/PatientsDesk';
// import SubAdminDashboard from './Pages/SubAdmin/SubAdminDashboard';

// const App = () => {
//   const location = useLocation();

//   // Hide navbar/footer on auth & subscription pages
//   const hideNavFooterRoutes = ['/login', '/signup', '/subscription'];
//   const hideNavFooter = hideNavFooterRoutes.some(route =>
//     location.pathname.startsWith(route)
//   );

//   // Show Doctor sidebar only on doctor dashboard routes
//   const showDoctorSidebar = location.pathname.startsWith('/dashboard');
//   // Show Student sidebar only on student dashboard routes
//   const showStudentSidebar = location.pathname.startsWith('/student');

//   return (
//     <div
//       style={{
//         display: 'flex',
//         minHeight: '100vh',
//         backgroundColor: 'offwhite',
//         fontFamily: 'Arial, sans-serif',
//       }}
//     >
//       {showDoctorSidebar && <Sidebar />}
//       {showStudentSidebar && <StudentSidebar />}

//       <div style={{ flex: 1, padding: (showDoctorSidebar || showStudentSidebar) ? '20px' : '0' }}>
//         {!hideNavFooter && !showDoctorSidebar && !showStudentSidebar && <Navbar />}

//         <Routes>
//           {/* Public */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/subscription" element={<Subscribe />} />

//           {/* Doctor Dashboard */}
//           {/* <Route path="/dashboard" element={<Dashboard />} /> */}
//           <Route path='/dashboard' element={<DoctorDashboard/>} />
//           <Route path='/dashboard/expense' element={<ExpensePage/>}/>
//           <Route path='/dashboard/feedback' element={<FeedbackPage/>}/>
//           <Route path='/dashboard/reports' element={<ReportPage/>}/>
//           <Route path='/dashboard/appointments' element={<AppointmentPage/>}/>
//           <Route path='/dashboard/medical-history' element={<MedicalHistoryPage/>}/>
//           <Route path='/dashboard/patients' element={<PatientsDesk/>}/>
//           <Route path="/dashboard/prescriptions" element={<Prescriptions />} />
//           <Route path="/dashboard/certificates-billing" element={<CertificatesBilling />} />
//           <Route path="/dashboard/engagement" element={<Engagement />} />
//           <Route path="/dashboard/analytics-training" element={<AnalyticsTraining />} />
//           <Route path="/dashboard/practice-management" element={<PracticeManagement />} />

//           {/* Student Dashboard */}
//           <Route path="/student" element={<StudentDashboard />} />
//           <Route path="/student/practice" element={<StudentPracticeMode />} />
//           <Route path="/student/feedback" element={<StudentFeedback />} />
//           <Route path="/student/progress" element={<StudentProgress />} />
//           <Route path="/student/certification" element={<StudentCertification />} />

//           {/* Sub Admin Dasnboard */}
//           <Route path='/subadmin' element={<SubAdminDashboard/>}/>
//         </Routes>

//         {!hideNavFooter && !showDoctorSidebar && !showStudentSidebar && <Footer />}
//       </div>
//     </div>
//   );
// };

// export default App;





// import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './Components/Navbar';
// import Footer from './Components/Footer';
// import Home from './Pages/Home';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
// import About from './Pages/About';
// import Contact from './Pages/Contact';
// import Subscribe from './Pages/Subscription';



// const App = () => {
//   const location = useLocation();

//   // Hide navbar/footer on auth & subscription pages
//   const hideNavFooterRoutes = ['/login', '/signup', '/subscription'];
//   const hideNavFooter = hideNavFooterRoutes.some(route =>
//     location.pathname.startsWith(route)
//   );

//   // Role-based sidebar conditions
//   const showDoctorSidebar = location.pathname.startsWith('/dashboard');
//   const showStudentSidebar = location.pathname.startsWith('/student');
//   const showSubAdminSidebar = location.pathname.startsWith('/subadmin');

//   return (
//     <div
//       style={{
//         display: 'flex',
//         minHeight: '100vh',
//         backgroundColor: 'offwhite',
//         fontFamily: 'Arial, sans-serif',
//       }}
//     >
      

//       <div
//         style={{
//           flex: 1,
//           padding:
//             showDoctorSidebar || showStudentSidebar || showSubAdminSidebar
//               ? '20px'
//               : '0',
//         }}
//       >
//         {/* Show Navbar only on public pages */}
//         {!hideNavFooter &&
//           !showDoctorSidebar &&
//           !showStudentSidebar &&
//           !showSubAdminSidebar && <Navbar />}

//         <Routes>
//           {/* Public */}
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/subscription" element={<Subscribe />} />

         


          
//         </Routes>

//         {/* Show Footer only on public pages */}
//         {!hideNavFooter &&
//           !showDoctorSidebar &&
//           !showStudentSidebar &&
//           !showSubAdminSidebar && <Footer />}
//       </div>
//     </div>
//   );
// };

// export default App;









import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Subscribe from './Pages/Subscription';

const App = () => {
  const location = useLocation();

  // Hide Navbar and Footer on these routes
  const hideNavFooterRoutes = ['/login', '/signup', '/subscription'];
  const hideNavFooter = hideNavFooterRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#f6f8fb', // formal light background
        fontFamily: 'Poppins, sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Navbar (visible only on public pages) */}
      {!hideNavFooter && <Navbar />}

      <div style={{ flex: 1 }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/subscription" element={<Subscribe />} />
        </Routes>
      </div>

      {/* Footer (visible only on public pages) */}
      {!hideNavFooter && <Footer />}
    </div>
  );
};

export default App;
