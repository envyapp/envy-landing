import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "@/pages/landing-page";
import { PrivacyPage } from "@/pages/privacy-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
