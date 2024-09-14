import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";
import RegisterPage from "./pages/RegisterPage";
import TutoringAcademicSupportPage from "./pages/TutoringAcademicSupportPage";
import LanguageLearningPage from "./pages/LanguageLearningPage";
import CareerCoachingPage from "./pages/CareerCoachingPage";
import WritingResearchSupportPage from "./pages/WritingResearchSupportPage";
import Resources from "./pages/ResourcesPage";
import CodingLessonsPage from "./pages/CodingLessonsPage";
import TestPrepStudyResourcesPage from "./pages/TestPrepStudyResourcesPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/tutoring-academic-support"
            element={<TutoringAcademicSupportPage />}
          />
          <Route path="/language-learning" element={<LanguageLearningPage />} />
          <Route path="/career-coaching" element={<CareerCoachingPage />} />
          <Route
            path="/writing-research-support"
            element={<WritingResearchSupportPage />}
          />
          <Route path="/coding-lessons" element={<CodingLessonsPage />} />
          <Route
            path="/testprep-study-resources"
            element={<TestPrepStudyResourcesPage />}
          />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
