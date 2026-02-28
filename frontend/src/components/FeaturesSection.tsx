import { ShoppingCart, Zap, Shield, Tag, Truck, HeartHandshake, Sparkles } from 'lucide-react';

interface FeaturesSectionProps {
    features: string[];
}

const featureIcons = [ShoppingCart, Zap, Shield, Tag, Truck, HeartHandshake, Sparkles];

const featureColors = [
    'bg-primary/10 text-primary',
    'bg-accent/10 text-accent',
    'bg-chart-3/10 text-chart-3',
    'bg-chart-4/10 text-chart-4',
    'bg-chart-5/10 text-chart-5',
    'bg-primary/10 text-primary',
    'bg-accent/10 text-accent',
];

const extraFeatures = [
    { title: 'Smart Cart', description: 'Intelligent cart management with real-time price tracking and savings alerts.' },
    { title: 'Lightning Deals', description: 'Flash sales and exclusive time-limited offers curated just for you.' },
    { title: 'Secure Checkout', description: 'Bank-grade encryption and multiple payment options for peace of mind.' },
    { title: 'Best Price Guarantee', description: 'We match any lower price you find — shop with total confidence.' },
    { title: 'Fast Delivery', description: 'Same-day and next-day delivery options across thousands of products.' },
    { title: 'Loyalty Rewards', description: 'Earn points on every purchase and redeem them for exclusive discounts.' },
];

export default function FeaturesSection({ features }: FeaturesSectionProps) {
    // Merge backend features with display metadata
    const displayFeatures = features.length > 0
        ? features.map((f, i) => ({
            title: f,
            description: extraFeatures[i % extraFeatures.length]?.description ?? 'Discover more with Param Shopping.',
        }))
        : extraFeatures;

    return (
        <section id="features" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-8">
                {/* Section header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <Sparkles size={13} className="text-primary" />
                        <span className="text-xs font-semibold text-primary tracking-wide uppercase">Why Param Shopping</span>
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
                        Everything you need to
                        <span className="text-primary"> shop smarter</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
                        Param Shopping brings together the best deals, fastest delivery, and most secure checkout — all in one place.
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayFeatures.map((feature, index) => {
                        const Icon = featureIcons[index % featureIcons.length];
                        const colorClass = featureColors[index % featureColors.length];
                        return (
                            <div
                                key={index}
                                className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-warm hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className={`w-12 h-12 rounded-xl ${colorClass} flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-300`}>
                                    <Icon size={22} />
                                </div>
                                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
