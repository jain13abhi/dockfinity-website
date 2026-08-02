import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Terms of Service | Dockfinity",
    description: "Terms and Conditions for using Dockfinity services.",
};

export default function TermsPage() {
    return (
        <Section className="py-16 md:py-24">
            <Container className="max-w-4xl">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight tracking-tight mb-4">Terms of Service</h1>
                    <p className="text-muted-foreground">Effective Date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead text-xl text-foreground/80">
                        These Terms of Service ("Terms") govern your use of the website operated by Dockfinity Private Limited ("Dockfinity") and the services provided by its verticals: Dockware Labs, Trading Dock, and Impressio Dock.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">1. Agreement to Terms</h2>
                    <p>
                        By accessing or using our website and services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">2. Use of Services</h2>
                    <h3 className="text-xl font-bold mt-6 mb-3">Dockware Labs</h3>
                    <p>
                        Services provided by Dockware Labs are subject to separate Master Service Agreements (MSA) and Statements of Work (SOW) signed with each client. In case of conflict, the specific agreement shall prevail.
                    </p>

                    <h3 className="text-xl font-bold mt-6 mb-3">Trading Dock</h3>
                    <p>
                        Trading Dock provides educational content and market analysis tools. <strong>We are not SEBI registered investment advisors.</strong> No content should be construed as financial advice. All trading involves risk, and you are solely responsible for your investment decisions.
                    </p>

                    <h3 className="text-xl font-bold mt-6 mb-3">Impressio Dock</h3>
                    <p>
                        Orders placed for custom merchandise are subject to approval of proofs. Dockfinity is not responsible for errors in approved proofs. Slight color variations may occur due to printing processes.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">3. Intellectual Property</h2>
                    <p>
                        The Service and its original content, features, and functionality are and will remain the exclusive property of Dockfinity Private Limited and its licensors. The service is protected by copyright, trademark, and other laws of both India and foreign countries.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">4. Limitation of Liability</h2>
                    <p>
                        In no event shall Dockfinity Private Limited, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">5. Governing Law</h2>
                    <p>
                        These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">6. Changes</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">7. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at <a href="mailto:dockfinity@gmail.com" className="text-primary hover:underline">dockfinity@gmail.com</a>.
                    </p>
                </div>
            </Container>
        </Section>
    );
}
