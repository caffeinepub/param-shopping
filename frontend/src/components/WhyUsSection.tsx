import { CheckCircle2 } from 'lucide-react';

const stats = [
    { value: '50K+', label: 'Happy Shoppers' },
    { value: '1M+', label: 'Products Listed' },
    { value: '99.9%', label: 'Uptime Guarantee' },
    { value: '4.9★', label: 'App Store Rating' },
];

const benefits = [
    'Personalized recommendations powered by smart algorithms',
    'Real-time price comparison across thousands of sellers',
    'Hassle-free returns with one-tap refund processing',
    'Exclusive member-only deals and early access sales',
    'Dedicated 24/7 customer support via chat and call',
    'Eco-friendly packaging options for conscious shoppers',
];

export default function WhyUsSection() {
    return (
        <section id="why-us" className="py-24 bg-secondary/40">
            <div className="container mx-auto px-4 md:px-8">
                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, i) => (
                        <div key={i} className="text-center bg-card border border-border rounded-2xl p-6 shadow-xs">
                            <div className="font-heading text-4xl font-extrabold text-primary mb-1">{stat.value}</div>
                            <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: image placeholder with overlay card */}
                    <div className="relative">
                        <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 border border-border flex items-center justify-center">
                            <img
                                src="/assets/generated/hero-banner.dim_1440x600.png"
                                alt="Shopping experience"
                                className="w-full h-full object-cover opacity-80"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent rounded-3xl" />
                        </div>
                        {/* Floating card */}
                        <div className="absolute -bottom-6 -right-4 md:-right-8 bg-card border border-border rounded-2xl p-4 shadow-warm-lg max-w-[200px]">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                                    <span className="text-base">🛍️</span>
                                </div>
                                <div>
                                    <div className="text-xs font-semibold text-foreground">Order Placed!</div>
                                    <div className="text-xs text-muted-foreground">Just now</div>
                                </div>
                            </div>
                            <div className="text-xs text-muted-foreground">Saved <span className="text-primary font-bold">₹450</span> on this order</div>
                        </div>
                    </div>

                    {/* Right: benefits list */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                            <span className="text-xs font-semibold text-primary tracking-wide uppercase">Our Promise</span>
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight leading-tight">
                            Shopping made
                            <span className="text-primary"> joyful</span>
                        </h2>
                        <p className="text-muted-foreground text-base leading-relaxed mb-8">
                            We've built Param Shopping from the ground up with one goal: to make every purchase feel effortless, rewarding, and safe.
                        </p>
                        <ul className="space-y-3">
                            {benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                                    <span className="text-sm text-foreground leading-relaxed">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
