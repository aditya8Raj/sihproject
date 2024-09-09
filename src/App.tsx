import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";
import RegisterPage from "./pages/RegisterPage";
import TutoringAcademicSupportPage from "./pages/TutoringAcademicSupportPage";
import LanguageLearningPage from "./pages/LanguageLearningPage";
import CareerCoachingPage from "./pages/CareerCoachingPage";
import WritingResearchSupportPage from "./pages/WritingResearchSupportPage";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
