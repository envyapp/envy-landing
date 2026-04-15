import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "@/hooks/use-theme";

export function PrivacyPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-background dark:text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt="Envy" className="h-7 w-7 object-contain" />
            <p className="text-sm font-semibold">Envy</p>
          </Link>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>
      </header>

      <main className="mx-auto w-full max-w-3xl px-4 py-16 sm:px-6">
        {/* Title */}
        <div className="mb-12">
          <p className="text-sm font-medium text-primary">Legal</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: <time dateTime="2026-04-15">April 15, 2026</time>
          </p>
        </div>

        <div className="prose prose-zinc dark:prose-invert max-w-none space-y-10 text-sm leading-relaxed text-muted-foreground [&_h2]:mb-3 [&_h2]:mt-0 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:list-disc">

          {/* 1 */}
          <section>
            <h2>1. Who We Are</h2>
            <p>
              Envy ("we", "our", "us") is a self-hosted secrets management platform developed and
              maintained by its founders. Our website is located at{" "}
              <a href="https://getenv.org" className="text-primary hover:underline">
                getenv.org
              </a>{" "}
              and our primary contact email is{" "}
              <a href="mailto:hello@getenv.org" className="text-primary hover:underline">
                hello@getenv.org
              </a>
              .
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2>2. What Data We Collect — and What We Don't</h2>
            <p>
              <strong className="text-foreground">This website (getenv.org) does not collect any personal data automatically.</strong>{" "}
              There is no tracking pixel, no analytics script, no cookie banner, and no form that
              collects data without your explicit action.
            </p>
            <p>
              The only data we receive is what you voluntarily send us:
            </p>
            <ul>
              <li>
                <strong className="text-foreground">Email inquiries</strong> — if you click a
                "Contact" or "Book a call" link, your email client opens and you choose what to
                send. We receive only what you write in that email.
              </li>
              <li>
                <strong className="text-foreground">No cookies</strong> — this website sets no
                cookies and uses no local storage for tracking purposes.
              </li>
              <li>
                <strong className="text-foreground">No third-party analytics</strong> — we do not
                embed Google Analytics, Meta Pixel, Hotjar, or any similar tool on this page.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2>3. The Envy Product (Self-Hosted)</h2>
            <p>
              Envy is a <strong className="text-foreground">self-hosted</strong> product. When you
              deploy Envy on your own infrastructure:
            </p>
            <ul>
              <li>
                All secrets, encryption keys, and user data are stored exclusively on your servers.
              </li>
              <li>
                We have no access to your secrets, your encryption keys, or your team's data —
                ever.
              </li>
              <li>
                The only data we hold about you as a customer is your license information (name,
                email, company, installation ID) and any support correspondence.
              </li>
              <li>
                Secrets are encrypted client-side before they reach any server. The backend stores
                only ciphertext — it never sees plaintext values.
              </li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2>4. License Data</h2>
            <p>
              When you purchase an Envy license, we collect and store the following:
            </p>
            <ul>
              <li>Name and company name (for license issuance)</li>
              <li>Email address (for license delivery and support)</li>
              <li>Installation ID (a randomly generated identifier tied to your deployment)</li>
              <li>License tier and expiration date</li>
            </ul>
            <p>
              This data is used solely for license management and customer support. We do not sell,
              share, or rent this data to third parties.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2>5. Email Communication</h2>
            <p>
              If you contact us via email, we will use your email address to reply to your inquiry.
              We do not add you to any marketing list without your explicit consent. You can ask us
              to delete your contact information at any time by emailing{" "}
              <a href="mailto:hello@getenv.org" className="text-primary hover:underline">
                hello@getenv.org
              </a>
              .
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2>6. Hosting Infrastructure</h2>
            <p>
              This website is served via a static hosting provider. The hosting provider may log
              standard server access logs (IP address, browser type, requested URL, timestamp) for
              infrastructure and security purposes. These logs are retained for a short period and
              are not used by us for user tracking or profiling.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2>7. Your Rights (GDPR / KVKK)</h2>
            <p>
              If you are located in the European Union or Turkey, you have the following rights
              regarding any personal data we hold about you:
            </p>
            <ul>
              <li>
                <strong className="text-foreground">Right of access</strong> — you can ask us what
                data we hold about you.
              </li>
              <li>
                <strong className="text-foreground">Right to rectification</strong> — you can ask
                us to correct inaccurate data.
              </li>
              <li>
                <strong className="text-foreground">Right to erasure</strong> — you can ask us to
                delete your data.
              </li>
              <li>
                <strong className="text-foreground">Right to object</strong> — you can object to
                any processing we carry out.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email us at{" "}
              <a href="mailto:hello@getenv.org" className="text-primary hover:underline">
                hello@getenv.org
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2>8. Children's Privacy</h2>
            <p>
              Envy is a professional B2B product. We do not knowingly collect any data from
              individuals under the age of 16.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy as the product evolves. When we make material
              changes, we will update the "Last updated" date at the top of this page. Continued
              use of the website or product after changes constitutes acceptance of the updated
              policy.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2>10. Contact</h2>
            <p>
              For any privacy-related questions or requests, contact us at:
            </p>
            <p>
              <a href="mailto:hello@getenv.org" className="text-primary hover:underline">
                hello@getenv.org
              </a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-6 text-sm text-muted-foreground sm:px-6">
          <p>© 2026 Envy. Self-hosted secrets management.</p>
          <Link to="/" className="hover:text-foreground">
            ← Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
