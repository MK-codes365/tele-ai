import React from 'react';
import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import HowItWorks from '../components/HowItWorks';
import RoleSelection from '../components/RoleSelection';
import ImpactMetrics from '../components/ImpactMetrics';
import SecuritySection from '../components/SecuritySection';

const LandingPage = () => {
    return (
        <>
            <Hero />
            <ProblemSection />
            <SolutionSection />
            <HowItWorks />
            <RoleSelection />
            <ImpactMetrics />
            <SecuritySection />
        </>
    );
};

export default LandingPage;
