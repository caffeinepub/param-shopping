import { ShoppingBag } from 'lucide-react';

export default function SiteHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
            <div className="container mx-auto flex items-center justify-between h-16 px-4 md:px-8">
                <a href="#" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-warm transition-transform group-hover:scale-105">
                        <img
                            src="/assets/generated/param-shopping-logo.dim_256x256.png"
                            alt="Param Shopping Logo"
                            className="w-7 h-7 object-contain rounded-lg"
                            onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                target.style.display = 'none';
                                const parent = target.parentElement;
                                if (parent) {
                                    const icon = document.createElement('span');
                                    icon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>';
                                    parent.appendChild(icon);
                                }
                            }}
                        />
                    </div>
                    <span className="font-heading font-700 text-lg text-foreground tracking-tight">
                        Param <span className="text-primary">Shopping</span>
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Features</a>
                    <a href="#why-us" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Why Us</a>
                    <a href="#cta" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Get App</a>
                </nav>

                <a
                    href="#cta"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold shadow-warm hover:shadow-warm-lg hover:opacity-90 transition-all duration-200"
                >
                    <ShoppingBag size={15} />
                    Download
                </a>
            </div>
        </header>
    );
}
