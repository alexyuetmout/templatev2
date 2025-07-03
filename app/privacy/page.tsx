import Link from "next/link";
import { ChevronsDown } from "lucide-react";
import { website } from "@/configs/website";

export const metadata = {
  title: "Privacy Policy - FluxTools",
  description: "FluxTools Privacy Policy - Learn how we collect, use, and protect your personal information when you use our AI image style transfer service.",
  openGraph: {
    type: "website",
    url: "https://fluxtools.ai/privacy",
    title: "Privacy Policy - FluxTools",
    description: "FluxTools Privacy Policy - Learn how we collect, use, and protect your personal information when you use our AI image style transfer service.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - FluxTools",
    description: "FluxTools Privacy Policy - Learn how we collect, use, and protect your personal information when you use our AI image style transfer service.",
  },
};

export default function PrivacyPage() {
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
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            <strong>Effective Date:</strong> January 1, 2024<br />
            <strong>Last Updated:</strong> January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>
              FluxTools (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered image style transfer service (&quot;Service&quot;). Please read this Privacy Policy carefully.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Account Information:</strong> Email address, username, and password when you create an account</li>
              <li><strong>Payment Information:</strong> Billing details processed securely through third-party payment processors</li>
              <li><strong>Communications:</strong> Messages you send us through support channels or feedback forms</li>
              <li><strong>Images:</strong> Photos and images you upload for style transfer processing</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">2.2 Information Automatically Collected</h3>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Usage Data:</strong> How you interact with our Service, including features used and time spent</li>
              <li><strong>Device Information:</strong> IP address, browser type, operating system, and device identifiers</li>
              <li><strong>Log Data:</strong> Server logs including access times, pages viewed, and error reports</li>
              <li><strong>Cookies:</strong> Small data files to improve your experience and analyze usage patterns</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use collected information for the following purposes:</p>
            <ul className="list-disc pl-6">
              <li><strong>Service Provision:</strong> Process your images, manage your account, and deliver requested services</li>
              <li><strong>Communication:</strong> Send service updates, support responses, and important notices</li>
              <li><strong>Improvement:</strong> Analyze usage to enhance our Service and develop new features</li>
              <li><strong>Security:</strong> Detect fraud, protect against abuse, and ensure platform security</li>
              <li><strong>Legal Compliance:</strong> Comply with applicable laws and respond to legal requests</li>
              <li><strong>Marketing:</strong> Send promotional content (with your consent, where required)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Image Processing and AI Training</h2>
            <p className="mb-4">
              <strong>Your Images:</strong> Images you upload are processed using our AI models to apply style transfers. We do not use your personal images to train our AI models unless you explicitly opt-in to our training program.
            </p>
            <p className="mb-4">
              <strong>Data Retention:</strong> Uploaded images are automatically deleted from our servers within 30 days of processing unless you save them to your account. Account-saved images are retained until you delete them or close your account.
            </p>
            <p>
              <strong>AI Model Training:</strong> We may use anonymized, non-personal data and publicly available images to improve our AI models. Personal images are never used for training without explicit consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Information Sharing and Disclosure</h2>
            <p className="mb-4">We do not sell your personal information. We may share information in the following circumstances:</p>
            <ul className="list-disc pl-6">
              <li><strong>Service Providers:</strong> Third-party vendors who assist in providing our Service (hosting, payment processing, analytics)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights and safety</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Consent:</strong> When you explicitly authorize sharing for specific purposes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Access controls and authentication protocols</li>
              <li>Secure data centers with physical and digital safeguards</li>
            </ul>
            <p className="mt-4">
              However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights and Choices</h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6">
              <li><strong>Access:</strong> Request a copy of your personal information</li>
              <li><strong>Correction:</strong> Update or correct inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
              <li><strong>Objection:</strong> Object to processing for direct marketing</li>
              <li><strong>Withdrawal:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a href={`mailto:${website.socialMedia.email}`} className="text-primary hover:underline">
                {website.socialMedia.email}
              </a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Children&apos;s Privacy</h2>
            <p>
              Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
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