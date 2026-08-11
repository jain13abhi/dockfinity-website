import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | Dockfinity",
    description: "Privacy Policy for Dockfinity Private Limited.",
    alternates: {
        canonical: "/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <Section className="py-16 md:py-24">
            <Container className="max-w-4xl">
                <div className="mb-8">
                    <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
                    </Link>
                    <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Privacy Policy</h1>
                    <p className="text-muted-foreground">Effective Date: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="lead text-xl text-foreground/80">
                        At Dockfinity Private Limited ("Dockfinity", "we", "us", or "our"), we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">1. Who We Are</h2>
                    <p>
                        Docfinity Private Limited is a registered company in India with CIN <strong>U66190DL2025PTC454662</strong> and GSTIN <strong>07AAMCD0054C1Z3</strong>. Our registered office is located at G-30/394-395, 2nd Floor, Sector-3, Rohini, North West Delhi, Delhi - 110085, India.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">2. The Data We Collect About You</h2>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, and operating system and platform.</li>
                        <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                    </ul>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">3. How We Use Your Personal Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                    </ul>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">4. Disclosure of Your Personal Data</h2>
                    <p>
                        We may share your personal data with internal third parties (our verticals Dockware Labs, Trading Dock, Impressio Dock) and external third parties (service providers acting as processors) for the purposes set out in this policy. We require all third parties to respect the security of your personal data and to treat it in accordance with the law.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">5. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>
                    <p>
                        As an ISO 27001:2022 certified company, we adhere to strict information security standards to ensure the confidentiality, integrity, and availability of your data.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">6. Your Rights</h2>
                    <p>
                        Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                    </p>

                    <h2 className="text-2xl font-bold tracking-tight mt-12 mb-6 text-foreground">7. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:dockfinity@gmail.com" className="text-primary hover:underline">dockfinity@gmail.com</a>.
                    </p>
                </div>
            </Container>
        </Section>
    );
}
