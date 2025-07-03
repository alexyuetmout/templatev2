import Link from "next/link";
import { ChevronsDown } from "lucide-react";
import { website } from "@/configs/website";

export const metadata = {
  title: "About - FluxTools",
  description:
    "Learn more about FluxTools, the AI-powered image style transfer tool that transforms your photos into stunning artwork.",
  openGraph: {
    type: "website",
    url: "https://fluxtools.ai/about",
    title: "About - FluxTools",
    description:
      "Learn more about FluxTools, the AI-powered image style transfer tool that transforms your photos into stunning artwork.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About - FluxTools",
    description:
      "Learn more about FluxTools, the AI-powered image style transfer tool that transforms your photos into stunning artwork.",
  },
};

export default function AboutPage() {
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
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About{" "}
              <span className="text-transparent bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                FluxTools
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;re revolutionizing digital creativity with AI-powered
              image style transfer technology.
            </p>
          </section>

          {/* Mission Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-4">
              At FluxTools, we believe that everyone should have access to
              powerful creative tools. Our AI-powered style transfer technology
              democratizes digital art creation, allowing anyone to transform
              their photos into stunning artwork with just a few clicks.
            </p>
            <p className="text-lg text-muted-foreground">
              We&apos;re bridging the gap between traditional artistry and
              modern technology, making professional-quality artistic
              transformations accessible to creators, marketers, and art
              enthusiasts worldwide.
            </p>
          </section>

          {/* Technology Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Technology</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Advanced AI Models
                </h3>
                <p className="text-muted-foreground">
                  Our proprietary neural networks are trained on millions of
                  artistic masterpieces, enabling them to understand and
                  replicate various artistic styles with remarkable accuracy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Lightning Fast Processing
                </h3>
                <p className="text-muted-foreground">
                  Advanced optimization techniques allow us to process
                  high-resolution images in just 10-15 seconds, without
                  compromising on quality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Quality Preservation
                </h3>
                <p className="text-muted-foreground">
                  Our algorithms preserve important image details while applying
                  artistic transformations, ensuring your photos maintain their
                  essence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">
                  Continuous Innovation
                </h3>
                <p className="text-muted-foreground">
                  We&apos;re constantly improving our models and adding new
                  artistic styles based on user feedback and emerging AI
                  research.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="space-y-4">
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-muted-foreground">
                  We believe powerful creative tools should be accessible to
                  everyone, regardless of technical expertise.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                <p className="text-muted-foreground">
                  We&apos;re committed to delivering professional-grade results
                  that meet the highest standards.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously push the boundaries of what&apos;s possible
                  with AI-powered creative technology.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-lg text-muted-foreground mb-8">
              FluxTools is built by a passionate team of AI researchers,
              engineers, and artists who share a vision of democratizing digital
              creativity.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-[#D247BF] rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">AI Research Team</h3>
                <p className="text-muted-foreground">
                  PhD researchers from top universities developing cutting-edge
                  neural network architectures.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-[#D247BF] to-primary rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Engineering Team</h3>
                <p className="text-muted-foreground">
                  Experienced engineers building scalable, reliable
                  infrastructure for millions of transformations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-primary to-[#D247BF] rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold mb-2">Design Team</h3>
                <p className="text-muted-foreground">
                  Creative professionals ensuring our tools meet the needs of
                  artists and content creators.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions about FluxTools? We&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`mailto:${website.socialMedia.email}`}
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href={`mailto:${website.socialMedia.feedback}`}
                className="inline-flex items-center justify-center px-8 py-3 border border-secondary text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                Send Feedback
              </a>
            </div>
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
