import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Refund Policy | Dockfinity",
    description: "Refund and Cancellation Policy for Dockfinity services.",
};

export default function RefundPolicyPage() {
    return (
        <Section className="py-24 md:py-32">
            <Container className="max-w-4xl">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Refund Policy</h1>
                    <p className="text-muted-foreground">Effective Date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead text-xl text-foreground/80">
                        At Dockfinity Private Limited, we strive to ensure customer satisfaction across all our verticals. However, due to the diverse nature of our services (Software, Education, Manufacturing), specific refund policies apply to each division.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">1. Dockware Labs (Software Services)</h2>
                    <p>
                        Refunds and cancellations for software development, automation, and SaaS services are governed by the specific Master Services Agreement (MSA) and Statement of Work (SOW) signed with the client.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                        <li><strong>Retainers & Advance Payments:</strong> Generally non-refundable once resources have been allocated.</li>
                        <li><strong>Milestone-based Payments:</strong> Refunds for uncompleted milestones may be considered subject to the termination clauses in the contract.</li>
                    </ul>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">2. Trading Dock (Digital Products & Education)</h2>
                    <p>
                        Due to the immediate access nature of digital content and educational courses:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                        <li><strong>Courses & Content:</strong> We do not offer refunds once access credentials have been generated and sent to the user.</li>
                        <li><strong>SaaS Tools/Subscriptions:</strong> Cancellations are effective at the end of the current billing cycle. No pro-rata refunds are provided for partial usage.</li>
                        <li><strong>Exceptions:</strong> In the rare event of a technical failure where access could not be provided, a full refund will be processed within 7-10 working days.</li>
                    </ul>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">3. Impressio Dock (Corporate Gifting & Printing)</h2>
                    <p>
                        Since our products are custom-manufactured and branded:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                        <li><strong>Custom Orders:</strong> No refunds or cancellations are accepted once the proof is approved and production has started.</li>
                        <li><strong>Defects/Damage:</strong> Refunds or free replacements are provided ONLY in case of manufacturing defects or damage during transit. Such cases must be reported within 48 hours of delivery with photographic evidence.</li>
                        <li><strong>Logistics:</strong> Shipping costs are non-refundable.</li>
                    </ul>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">4. Refund Processing</h2>
                    <p>
                        Approved refunds will be processed to the original method of payment within 7-10 business days.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">5. Contact Us</h2>
                    <p>
                        For any refund-related queries, please email us at <a href="mailto:dockfinity@gmail.com" className="text-primary hover:underline">dockfinity@gmail.com</a> with your order/invoice number.
                    </p>
                </div>
            </Container>
        </Section>
    );
}
