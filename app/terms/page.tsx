import Link from "next/link";
import { ChevronsDown } from "lucide-react";
import { website } from "@/configs/website";

export const metadata = {
  title: "Terms of Service - FluxTools",
  description: "FluxTools Terms of Service - Legal terms and conditions governing your use of our AI image style transfer service.",
  openGraph: {
    type: "website",
    url: "https://fluxtools.ai/terms",
    title: "Terms of Service - FluxTools",
    description: "FluxTools Terms of Service - Legal terms and conditions governing your use of our AI image style transfer service.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - FluxTools",
    description: "FluxTools Terms of Service - Legal terms and conditions governing your use of our AI image style transfer service.",
  },
};

export default function TermsPage() {
  return (
    <>
      {/* Simple Navbar */}
      <nav className="border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex font-bold items-center">
              <ChevronsDown className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">{website.logo.name}</h3>
            </Link>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto prose prose-slate dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            <strong>Effective Date:</strong> January 1, 2024<br />
            <strong>Last Updated:</strong> January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using FluxTools (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of these terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
            <p>
              FluxTools is an AI-powered image style transfer platform that allows users to transform their photos into artwork using various artistic styles. The Service includes web-based tools, mobile applications, and API access for developers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
            
            <h3 className="text-xl font-medium mb-3">3.1 Account Creation</h3>
            <p className="mb-4">
              You must create an account to access certain features of the Service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
            </p>

            <h3 className="text-xl font-medium mb-3">3.2 Account Requirements</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>You must be at least 13 years old to create an account</li>
              <li>You must provide accurate and complete information</li>
              <li>You must promptly update any changes to your information</li>
              <li>You are responsible for maintaining account security</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">3.3 Account Termination</h3>
            <p>
              We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Acceptable Use</h2>
            
            <h3 className="text-xl font-medium mb-3">4.1 Permitted Use</h3>
            <p className="mb-4">You may use the Service for lawful purposes only. You agree to comply with all applicable laws and regulations.</p>

            <h3 className="text-xl font-medium mb-3">4.2 Prohibited Activities</h3>
            <p className="mb-4">You agree not to:</p>
            <ul className="list-disc pl-6">
              <li>Upload illegal, harmful, threatening, abusive, defamatory, or obscene content</li>
              <li>Upload content that infringes on intellectual property rights</li>
              <li>Upload images containing minors without proper consent</li>
              <li>Use the Service for commercial purposes without a commercial license</li>
              <li>Attempt to reverse engineer, decompile, or hack the Service</li>
              <li>Interfere with the Service&apos;s operation or security</li>
              <li>Create fake accounts or impersonate others</li>
              <li>Spam, harass, or abuse other users</li>
              <li>Distribute malware or engage in fraudulent activities</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Content and Intellectual Property</h2>
            
            <h3 className="text-xl font-medium mb-3">5.1 Your Content</h3>
            <p className="mb-4">
              You retain ownership of images you upload (&quot;User Content&quot;). By uploading content, you grant us a non-exclusive, worldwide, royalty-free license to use, process, and display your content solely for providing the Service.
            </p>

            <h3 className="text-xl font-medium mb-3">5.2 Generated Content</h3>
            <p className="mb-4">
              You own the AI-generated images created from your uploaded content. However, similar outputs may be generated for other users using the same style and AI models.
            </p>

            <h3 className="text-xl font-medium mb-3">5.3 Our Intellectual Property</h3>
            <p className="mb-4">
              The Service, including its AI models, algorithms, software, and design, is protected by intellectual property laws. You may not copy, modify, or distribute our proprietary technology.
            </p>

            <h3 className="text-xl font-medium mb-3">5.4 Copyright Compliance</h3>
            <p>
              You must have the right to upload and process any images you submit. We respond to valid copyright infringement notices under the Digital Millennium Copyright Act (DMCA).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Payment and Subscriptions</h2>
            
            <h3 className="text-xl font-medium mb-3">6.1 Pricing</h3>
            <p className="mb-4">
              Subscription fees are charged in advance on a monthly basis. Prices are subject to change with reasonable notice.
            </p>

            <h3 className="text-xl font-medium mb-3">6.2 Billing</h3>
            <p className="mb-4">
              You authorize us to charge your payment method for all fees. Failure to pay may result in service suspension or termination.
            </p>

            <h3 className="text-xl font-medium mb-3">6.3 Refunds</h3>
            <p className="mb-4">
              Refunds are provided in accordance with our Refund Policy. Generally, we offer prorated refunds for unused service periods when requested within 30 days.
            </p>

            <h3 className="text-xl font-medium mb-3">6.4 Free Trial</h3>
            <p>
              Free trials are limited to one per user. We may require payment information to start a trial and will charge you when the trial period ends unless you cancel.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Service Availability</h2>
            <p>
              We strive to maintain high service availability but do not guarantee uninterrupted access. We may experience downtime for maintenance, updates, or due to factors beyond our control. We are not liable for any losses due to service unavailability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Privacy and Data Protection</h2>
            <p>
              Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your information. By using the Service, you consent to the practices described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Disclaimers and Limitation of Liability</h2>
            
            <h3 className="text-xl font-medium mb-3">9.1 Service Disclaimers</h3>
            <p className="mb-4">
              The Service is provided &quot;as is&quot; without warranties of any kind. We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.
            </p>

            <h3 className="text-xl font-medium mb-3">9.2 AI Limitations</h3>
            <p className="mb-4">
              AI-generated results may vary and are not guaranteed to meet your expectations. We do not warrant the accuracy, quality, or suitability of AI outputs for any specific purpose.
            </p>

            <h3 className="text-xl font-medium mb-3">9.3 Limitation of Liability</h3>
            <p>
              To the maximum extent permitted by law, we shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability shall not exceed the amount you paid for the Service in the 12 months preceding the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless FluxTools from any claims, damages, or expenses arising from your use of the Service, violation of these Terms, or infringement of any rights of another party.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
            <p className="mb-4">
              Either party may terminate these Terms at any time. Upon termination:
            </p>
            <ul className="list-disc pl-6">
              <li>Your access to the Service will cease immediately</li>
              <li>We may delete your account and associated data</li>
              <li>You remain liable for any outstanding fees</li>
              <li>Provisions that should survive termination will remain in effect</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">12. Governing Law and Dispute Resolution</h2>
            <p className="mb-4">
              These Terms are governed by the laws of [Your Jurisdiction]. Any disputes shall be resolved through binding arbitration in accordance with [Arbitration Rules], except for claims that may be brought in small claims court.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">13. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will notify users of material changes via email or through the Service. Your continued use after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">14. Contact Information</h2>
            <p>
              If you have questions about these Terms, please contact us:
            </p>
            <ul className="list-none mt-4">
              <li><strong>Email:</strong>{" "}
                <a href={`mailto:${website.socialMedia.email}`} className="text-primary hover:underline">
                  {website.socialMedia.email}
                </a>
              </li>
              <li><strong>Address:</strong> [Your Business Address]</li>
            </ul>
          </section>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-border bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground text-sm">
              Copyright ©2024 fluxtools.ai. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}