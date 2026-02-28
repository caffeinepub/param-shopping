import { Skeleton } from '@/components/ui/skeleton';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import WhyUsSection from '../components/WhyUsSection';
import CTASection from '../components/CTASection';
import { useMarketingContent } from '../hooks/useQueries';

export default function LandingPage() {
    const { data: content, isLoading, isError } = useMarketingContent();

    if (isLoading) {
        return (
            <div className="min-h-screen flex flex-col">
                {/* Hero skeleton */}
                <div className="min-h-screen bg-secondary/30 flex items-center pt-16">
                    <div className="container mx-auto px-4 md:px-8 py-24">
                        <Skeleton className="h-6 w-40 rounded-full mb-6" />
                        <Skeleton className="h-16 w-3/4 mb-3" />
                        <Skeleton className="h-16 w-1/2 mb-6" />
                        <Skeleton className="h-6 w-2/3 mb-2" />
                        <Skeleton className="h-6 w-1/2 mb-10" />
                        <div className="flex gap-4">
                            <Skeleton className="h-14 w-44 rounded-xl" />
                            <Skeleton className="h-14 w-44 rounded-xl" />
                        </div>
                    </div>
                </div>
                {/* Features skeleton */}
                <div className="py-24 container mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                        <Skeleton className="h-6 w-40 rounded-full mx-auto mb-4" />
                        <Skeleton className="h-12 w-2/3 mx-auto mb-4" />
                        <Skeleton className="h-5 w-1/2 mx-auto" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((_, i) => (
                            <Skeleton key={i} className="h-44 rounded-2xl" />
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    if (isError || !content) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-muted-foreground text-lg mb-4">Unable to load content. Please try again.</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <main>
            <HeroSection
                appName={content.appName}
                tagline={content.tagline}
                ctaText={content.ctaText}
            />
            <FeaturesSection features={content.features} />
            <WhyUsSection />
            <CTASection ctaText={content.ctaText} appName={content.appName} />
        </main>
    );
}
