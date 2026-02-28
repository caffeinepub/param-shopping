import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import LandingPage from './pages/LandingPage';

export default function App() {
    return (
        <div className="min-h-screen flex flex-col">
            <SiteHeader />
            <div className="flex-1">
                <LandingPage />
            </div>
            <SiteFooter />
        </div>
    );
}
