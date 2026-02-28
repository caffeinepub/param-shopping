import { ShoppingBag, Heart, Mail, Phone, MapPin } from 'lucide-react';
import { SiInstagram, SiFacebook, SiX, SiYoutube } from 'react-icons/si';

export default function SiteFooter() {
    const year = new Date().getFullYear();
    const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'com.paramshopping.app');

    return (
        <footer className="bg-foreground text-background">
            <div className="container mx-auto px-4 md:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand column */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2.5 mb-4">
                            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
                                <ShoppingBag size={18} className="text-primary-foreground" />
                            </div>
                            <span className="font-heading font-bold text-lg text-background">
                                Param <span className="text-primary">Shopping</span>
                            </span>
                        </div>
                        <p className="text-background/60 text-sm leading-relaxed mb-5">
                            Your ultimate destination for smart, fast, and rewarding online shopping.
                        </p>
                        <div className="flex items-center gap-3">
                            {[SiInstagram, SiFacebook, SiX, SiYoutube].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-8 h-8 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                                >
                                    <Icon size={14} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h4 className="font-heading font-semibold text-background mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
                        <ul className="space-y-2.5">
                            {['Home', 'Features', 'About Us', 'Blog', 'Careers'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-heading font-semibold text-background mb-4 text-sm uppercase tracking-wider">Support</h4>
                        <ul className="space-y-2.5">
                            {['Help Center', 'Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Refund Policy'].map(link => (
                                <li key={link}>
                                    <a href="#" className="text-background/60 text-sm hover:text-primary transition-colors">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-heading font-semibold text-background mb-4 text-sm uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2.5 text-background/60 text-sm">
                                <Mail size={14} className="text-primary shrink-0" />
                                support@paramshopping.app
                            </li>
                            <li className="flex items-center gap-2.5 text-background/60 text-sm">
                                <Phone size={14} className="text-primary shrink-0" />
                                +1 (800) PARAM-SHOP
                            </li>
                            <li className="flex items-start gap-2.5 text-background/60 text-sm">
                                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                                123 Commerce Street,<br />San Francisco, CA 94105
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-background/10 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex flex-col sm:flex-row items-center gap-2 text-background/50 text-xs">
                            <span>© {year} Param Shopping. All rights reserved.</span>
                            <span className="hidden sm:inline">·</span>
                            <span className="font-mono text-background/40">com.paramshopping.app</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-background/50 text-xs">
                            <span>Built with</span>
                            <Heart size={12} className="text-primary fill-primary" />
                            <span>using</span>
                            <a
                                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80 font-medium transition-colors"
                            >
                                caffeine.ai
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
