import { ArrowRight, Star } from 'lucide-react';

interface HeroSectionProps {
    appName: string;
    tagline: string;
    ctaText: string;
}

export default function HeroSection({ appName, tagline, ctaText }: HeroSectionProps) {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/generated/hero-banner.dim_1440x600.png"
                    alt="Hero background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-8 relative z-10 py-24 md:py-32">
                <div className="max-w-2xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 border border-primary/30 mb-6 animate-fade-in">
                        <Star size={12} className="text-accent fill-accent" />
                        <span className="text-xs font-semibold text-primary-foreground tracking-wide uppercase">
                            #1 Shopping App
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6 animate-fade-up">
                        {appName}
                        <span className="block text-primary mt-1">Reimagined.</span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-xl animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
                        {tagline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
                        <a
                            href="#cta"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-warm-lg hover:opacity-90 hover:shadow-warm transition-all duration-200 group"
                        >
                            {ctaText}
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#features"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-semibold text-base backdrop-blur-sm hover:bg-white/20 transition-all duration-200"
                        >
                            Explore Features
                        </a>
                    </div>

                    {/* Social proof */}
                    <div className="flex items-center gap-6 mt-12 animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
                        <div className="flex -space-x-2">
                            {['🛍️', '🛒', '💳', '⭐'].map((emoji, i) => (
                                <div
                                    key={i}
                                    className="w-9 h-9 rounded-full bg-primary/80 border-2 border-white/30 flex items-center justify-center text-sm"
                                >
                                    {emoji}
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center gap-1 mb-0.5">
                                {[1,2,3,4,5].map(i => (
                                    <Star key={i} size={12} className="text-accent fill-accent" />
                                ))}
                            </div>
                            <p className="text-white/70 text-xs">Loved by <span className="text-white font-semibold">50,000+</span> shoppers</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative bottom wave */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
                    <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="oklch(0.98 0.005 60)" />
                </svg>
            </div>
        </section>
    );
}
