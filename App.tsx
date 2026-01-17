
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { Phase1Screen } from './screens/Phase1Screen';
import { Phase2Screen } from './screens/Phase2Screen';
import { Phase3Screen } from './screens/Phase3Screen';
import { PhaseHistoryScreen } from './screens/PhaseHistoryScreen';
import { Phase4Screen } from './screens/Phase4Screen';
import { ProgressScreen } from './screens/ProgressScreen';
import { ProfessionalGuideScreen } from './screens/ProfessionalGuideScreen';
import { AuthScreen } from './screens/AuthScreen';
import { useAuth } from './context/AuthContext';

// Fix: Using React.FC with PropsWithChildren to explicitly define that ProtectedRoute accepts children, resolving TS errors in Routes
const ProtectedRoute: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/auth" />;
  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="/" element={<ProtectedRoute><WelcomeScreen /></ProtectedRoute>} />
          <Route path="/phase1" element={<ProtectedRoute><Phase1Screen /></ProtectedRoute>} />
          <Route path="/phase2" element={<ProtectedRoute><Phase2Screen /></ProtectedRoute>} />
          <Route path="/phase3" element={<ProtectedRoute><Phase3Screen /></ProtectedRoute>} />
          <Route path="/phase-history" element={<ProtectedRoute><PhaseHistoryScreen /></ProtectedRoute>} />
          <Route path="/phase4" element={<ProtectedRoute><Phase4Screen /></ProtectedRoute>} />
          <Route path="/progress" element={<ProtectedRoute><ProgressScreen /></ProtectedRoute>} />
          <Route path="/professional-guide" element={<ProtectedRoute><ProfessionalGuideScreen /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
