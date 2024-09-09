import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";
import RegisterPage from "./pages/RegisterPage";
import TutoringAcademicSupportPage from "./pages/TutoringAcademicSupportPage";
import LanguageLearningPage from "./pages/LanguageLearningPage";

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
