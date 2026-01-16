// Main App Component with React Router
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { initializeNavigation } from "./utils/navigationHelper";

// Import page components
import Desktop2 from "../imports/Desktop72";
import { CloudPracticePage } from "./components/CloudPracticePage";
import { DigitalEngineeringPage } from "./components/DigitalEngineeringPage";
import { BigDataPage } from "./components/BigDataPage";
import { AppModernizationPage } from "./components/AppModernizationPage";
import { SecurityPage } from "./components/SecurityPage";
import { DatabaseManagementPage } from "./components/DatabaseManagementPage";
import { ERPTestingPage } from "./components/ERPTestingPage";
import { AgentStudioPage } from "./components/AgentStudioPage";
import { AtlasAPIManagerPage } from "./components/AtlasAPIManagerPage";
import { OttohmVideoPage } from "./components/OttohmVideoPage";
import ITSMTicketingPage from "./components/ITSMTicketingPage";
import AIOpsPage from "./components/AIOpsPage";
import SmartContractsPage from "./components/SmartContractsPage";
import { AIPage } from "./components/AIPage";
import BFSIAgentsPage from "./components/BFSIAgentsPage";
import { BrandManagementPage } from "./components/BrandManagementPage";
import { OurTeamPage } from "./components/OurTeamPage";
import AboutUsPage from "./components/AboutUsPage";
import PartnersPage from "./components/PartnersPage";
import CareersPage from "./components/CareersPage";
import NewsUpdatesPage from "./components/NewsUpdatesPage";
import { CaseStudiesPage } from "./components/CaseStudiesPage";

// Navigation initializer component
function NavigationInitializer({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Initialize navigation helper with React Router's navigate function
    initializeNavigation(navigate);
  }, [navigate]);
  
  return <>{children}</>;
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <NavigationInitializer>
          <div className="w-full transition-colors duration-300" style={{ backgroundColor: 'var(--theme-bg-primary)' }}>
            <Routes>
              {/* Home */}
              <Route path="/" element={<Desktop2 />} />
              
              {/* Services */}
              <Route path="/services/cloud-practice" element={<CloudPracticePage />} />
              <Route path="/services/digital-engineering" element={<DigitalEngineeringPage />} />
              <Route path="/services/big-data" element={<BigDataPage />} />
              <Route path="/services/app-modernization" element={<AppModernizationPage />} />
              <Route path="/services/security" element={<SecurityPage />} />
              <Route path="/services/database-management" element={<DatabaseManagementPage />} />
              <Route path="/services/erp-testing" element={<ERPTestingPage />} />
              
              {/* Products */}
              <Route path="/products/agent-studio" element={<AgentStudioPage />} />
              <Route path="/products/atlas-api-manager" element={<AtlasAPIManagerPage />} />
              <Route path="/products/ottohm-video" element={<OttohmVideoPage />} />
              <Route path="/products/itsm-ticketing" element={<ITSMTicketingPage />} />
              <Route path="/products/ai-ops" element={<AIOpsPage />} />
              <Route path="/products/smart-contracts" element={<SmartContractsPage />} />
              
              {/* AI */}
              <Route path="/ai" element={<AIPage />} />
              <Route path="/ai/bfsi-agents" element={<BFSIAgentsPage />} />
              <Route path="/ai/brand-management" element={<BrandManagementPage />} />
              
              {/* Who We Are */}
              <Route path="/who-we-are/our-team" element={<OurTeamPage />} />
              <Route path="/who-we-are/about-us" element={<AboutUsPage />} />
              <Route path="/who-we-are/partners" element={<PartnersPage />} />
              <Route path="/who-we-are/careers" element={<CareersPage />} />
              <Route path="/who-we-are/news-updates" element={<NewsUpdatesPage />} />
              
              {/* Case Studies */}
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              
              {/* Catch all - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </NavigationInitializer>
      </BrowserRouter>
    </ThemeProvider>
  );
}