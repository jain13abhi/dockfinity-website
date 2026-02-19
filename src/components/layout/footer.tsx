import Link from "next/link";
import { Container } from "@/components/ui/container";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-muted/30 mt-auto">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1 space-y-4">
                        <Link href="/" className="font-outfit font-bold text-xl tracking-tighter block uppercase">
                            DOCKFINITY
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Dockfinity Private Limited is a technology-first group building ventures across Software, Trading Education, and Custom Gifting.
                        </p>
                        <div className="text-xs text-muted-foreground space-y-1">
                            <p><span className="font-semibold text-foreground">CIN:</span> U66190DL2025PTC454662</p>
                            <p><span className="font-semibold text-foreground">GSTIN:</span> 07AAMCD0054C1Z3</p>
                            <p><span className="font-semibold text-foreground">UDYAM:</span> UDYAM-DL-06-0174779</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">Verticals</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/verticals/dockware-labs" className="hover:text-primary transition-colors">Dockware Labs</Link></li>
                            <li><Link href="/verticals/trading-dock" className="hover:text-primary transition-colors">Trading Dock</Link></li>
                            <li><Link href="/verticals/impression-dock" className="hover:text-primary transition-colors">Impression Dock</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">Company</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                            <li><Link href="/verticals" className="hover:text-primary transition-colors">All Verticals</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">Contact</h3>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <p>
                                G-30/394-395, 2nd Floor, Sector-3,<br />
                                Rohini, North West Delhi,<br />
                                Delhi - 110085, India
                            </p>
                            <div className="space-y-1">
                                <p><a href="tel:+919911721100" className="hover:text-primary transition-colors">+91 99117 21100</a></p>
                                <p><a href="mailto:dockfinity@gmail.com" className="hover:text-primary transition-colors">dockfinity@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 pb-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-muted-foreground text-center md:text-left mb-8">
                        <div className="bg-card border border-border p-3 rounded-md">
                            <span className="block font-bold text-foreground">DPIIT Recognized</span>
                            Startup India
                        </div>
                        <div className="bg-card border border-border p-3 rounded-md">
                            <span className="block font-bold text-foreground">ISO 9001:2015</span>
                            Quality Management
                        </div>
                        <div className="bg-card border border-border p-3 rounded-md">
                            <span className="block font-bold text-foreground">ISO 27001:2022</span>
                            Info Security
                        </div>
                        <div className="bg-card border border-border p-3 rounded-md">
                            <span className="block font-bold text-foreground">ISO 20000-1:2018</span>
                            IT Service Mgmt
                        </div>
                    </div>
                </div>

                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
                    <p>© {currentYear} Dockfinity Private Limited. All rights reserved.</p>
                    <div className="flex gap-6 flex-wrap justify-center">
                        <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link>
                        <Link href="/refund-policy" className="hover:text-foreground transition-colors">Refund Policy</Link>
                        <Link href="/shipping-policy" className="hover:text-foreground transition-colors">Shipping Policy</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
