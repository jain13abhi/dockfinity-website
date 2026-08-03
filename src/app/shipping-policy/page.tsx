import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ArrowLeft, Truck, Clock, MapPin } from "lucide-react";

export const metadata = {
    title: "Shipping Policy | Dockfinity",
    description: "Shipping and Fulfillment Policy for Dockfinity.",
};

export default function ShippingPolicyPage() {
    return (
        <Section className="py-16 md:py-24">
            <Container className="max-w-4xl">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Shipping Policy</h1>
                    <p className="text-muted-foreground">Effective Date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead text-xl text-foreground/80">
                        This Shipping Policy applies primarily to the tangible goods provided by our vertical <strong>Impressio Dock</strong> (Corporate Gifting & Printing).
                    </p>

                    <div className="p-6 bg-secondary/30 border border-border rounded-2xl my-8 flex gap-4">
                        <Truck className="w-6 h-6 text-primary shrink-0 mt-1" />
                        <div>
                            <h3 className="font-bold text-lg mb-2 mt-0">B2B Focus</h3>
                            <p className="mb-0 text-sm">
                                We specialize in bulk B2B logistics. While we can handle individual last-mile delivery for employee kits, our primary shipping model is bulk freight to corporate offices.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground flex items-center gap-2">
                        <Clock className="w-6 h-6" /> Processing & Production Time
                    </h2>
                    <p>
                        Since all our products are custom-branded, "shipping time" refers to the time in transit after production.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                        <li><strong>Standard Production:</strong> 7-10 business days after proof approval.</li>
                        <li><strong>Rush Production:</strong> 3-5 business days (subject to availability and rush fees).</li>
                        <li><strong>Orders are not processed on weekends or public holidays.</strong></li>
                    </ul>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground flex items-center gap-2">
                        <MapPin className="w-6 h-6" /> Shipping Rates & Estimates
                    </h2>
                    <p>
                        Shipping charges are calculated based on weight, dimensions, and destination. These will be clearly itemized in your official quotation/invoice.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                        <li><strong>Domestic (India):</strong> 3-7 business days via standard courier partners (Delhivery, Bluedart, etc.).</li>
                        <li><strong>International:</strong> 7-15 business days (Customs duties and taxes are the responsibility of the recipient).</li>
                    </ul>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">Tracking Your Order</h2>
                    <p>
                        Once your order has shipped, you will receive a Shipping Confirmation email containing your tracking number(s). The tracking number will be active within 24 hours.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">Damages</h2>
                    <p>
                        Dockfinity Private Limited is not liable for products lost during shipping. However, if you received your order damaged, please contact us within 24 hours.
                    </p>
                    <p>
                        Please save all packaging materials and damaged goods before filing a claim. Photographic evidence is required for us to process insurance claims with our courier partners.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">Contact Us</h2>
                    <p>
                        If you have any further questions, please contact our logistics team at <a href="mailto:dockfinity@gmail.com" className="text-primary hover:underline">dockfinity@gmail.com</a>.
                    </p>
                </div>
            </Container>
        </Section>
    );
}
