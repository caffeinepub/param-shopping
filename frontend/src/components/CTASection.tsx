import { ArrowRight, Download, Star } from 'lucide-react';

interface CTASectionProps {
    ctaText: string;
    appName: string;
}

export default function CTASection({ ctaText, appName }: CTASectionProps) {
    return (
        <section id="cta" className="py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/8 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-accent/8 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {/* Stars */}
                    <div className="flex items-center justify-center gap-1 mb-6">
                        {[1,2,3,4,5].map(i => (
                            <Star key={i} size={20} className="text-accent fill-accent" />
                        ))}
                    </div>

                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 tracking-tight leading-tight">
                        Ready to transform
                        <span className="text-primary block">your shopping?</span>
                    </h2>

                    <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto">
                        Join over 50,000 smart shoppers who trust {appName} for the best deals, fastest delivery, and most rewarding experience.
                    </p>

                    {/* CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-base shadow-warm-lg hover:opacity-90 hover:shadow-warm transition-all duration-200 group">
                            <Download size={18} />
                            {ctaText}
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-primary/30 text-foreground font-semibold text-base hover:bg-primary/5 hover:border-primary/50 transition-all duration-200">
                            Learn More
                        </button>
                    </div>

                    {/* App store badges */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-foreground text-background font-medium text-sm cursor-pointer hover:opacity-90 transition-opacity">
                            <span className="text-xl">🍎</span>
                            <div className="text-left">
                                <div className="text-xs opacity-70">Download on the</div>
                                <div className="font-semibold">App Store</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-foreground text-background font-medium text-sm cursor-pointer hover:opacity-90 transition-opacity">
                            <span className="text-xl">▶</span>
                            <div className="text-left">
                                <div className="text-xs opacity-70">Get it on</div>
                                <div className="font-semibold">Google Play</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
