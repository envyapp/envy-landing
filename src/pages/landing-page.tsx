import {
  ArrowRight,
  Check,
  CheckCircle,
  Eye,
  GitCompare,
  Layers3,
  Lock,
  RefreshCw,
  Server,
  ShieldCheck,
  Users,
  Workflow,
  XCircle,
} from "lucide-react";

import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTheme } from "@/hooks/use-theme";

/* ===== DATA ===== */

const problemItems = [
  {
    icon: "💬",
    title: "Secrets travel through Slack and email",
    description:
      "Someone DMs a database URL. Another person pins an API key. Six months later, nobody knows which version is current.",
  },
  {
    icon: "🔀",
    title: "Environments drift apart silently",
    description:
      "Dev has 12 secrets. Production has 14. Staging has 11. Nobody notices until something breaks at 2am.",
  },
  {
    icon: "👻",
    title: "Ex-employees still have access",
    description:
      "Someone left three months ago. Their local .env file still has production database credentials. You can't rotate what you can't see.",
  },
  {
    icon: "🤷",
    title: "No audit trail whatsoever",
    description:
      '"Who changed the Stripe key last week?" — a question nobody can answer in most teams.',
  },
  {
    icon: "🔑",
    title: "CI/CD tokens have god-mode access",
    description:
      "Your deployment pipeline can read every secret in every environment. That's not access control, that's a liability.",
  },
  {
    icon: "🏢",
    title: "Vault is overkill for your team size",
    description:
      "You need proper secret management, not a 6-month infrastructure project. Envy deploys with Docker Compose.",
  },
];

const featureItems = [
  {
    title: "Self-Hosted, Your Infrastructure",
    description:
      "Deploy on your own servers with Docker Compose. Secrets never leave your network. Full data sovereignty — no third-party cloud dependency.",
    icon: Server,
    tag: "On-Prem",
  },
  {
    title: "End-to-End Encryption",
    description:
      "Client-side keypair generation. Secrets are encrypted before they leave the CLI. The backend never sees plaintext values. Zero-knowledge architecture.",
    icon: Lock,
    tag: "Client-Side Encrypted",
  },
  {
    title: "Runtime Injection",
    description:
      "Inject secrets as environment variables at runtime with envy run. Nothing written to disk. No .env files in production.",
    icon: Layers3,
  },
  {
    title: "Role-Based Access Control",
    description:
      "Three-layer permission model: workspace role, project role, and environment access grants. Being a workspace admin doesn't mean seeing production secrets.",
    icon: Users,
  },
  {
    title: "Full Audit Trail",
    description:
      "Every push, pull, runtime inject, token creation, and access denial is logged. Know who did what, when, and in which scope.",
    icon: Eye,
  },
  {
    title: "Key Rotation",
    description:
      "When someone leaves, rotate the environment master key. Old keys can't decrypt new secret versions. Clean cryptographic boundary.",
    icon: RefreshCw,
  },
  {
    title: "Environment Comparison",
    description:
      "Instantly see which secrets are missing, different, or outdated across dev, staging, and production. Catch drift before it causes incidents.",
    icon: GitCompare,
  },
  {
    title: "CI/CD Service Tokens",
    description:
      "Machine-scoped tokens with limited permissions. No export capability — runtime-only access. Scoped to specific project and environment.",
    icon: ShieldCheck,
  },
  {
    title: "Secret Version History",
    description:
      "Every secret change creates a new version. Full history with who changed what and when. Built-in foundation for rollback.",
    icon: Workflow,
  },
];

const securityItems = [
  {
    title: "Client-side keypair generation",
    description:
      "RSA keypairs are generated on the client. Private keys are encrypted with your master password. The server stores only public keys and encrypted blobs.",
  },
  {
    title: "Envelope-based key sharing",
    description:
      'Environment master keys are wrapped ("enveloped") with each authorized user\'s public key. Same secret, different envelope per user.',
  },
  {
    title: "Cryptographic off-boarding",
    description:
      "When a team member leaves, rotate the environment master key. New envelopes are created for remaining members. Old key holders are cryptographically locked out.",
  },
  {
    title: "Recovery without backdoors",
    description:
      "One-time recovery code encrypts a backup of your private key. No master key escrow. No admin override.",
  },
];

const goodFitItems = [
  "5–30 engineers sharing secrets across environments.",
  "Running CI/CD pipelines that need scoped secret access.",
  "Need audit trail for compliance or security reviews.",
  "Want data sovereignty — secrets stay on your servers.",
  "Currently managing secrets via .env files, Slack, or docs.",
];

const notFitItems = [
  "Solo developer with one environment.",
  "Enterprise requiring SAML/SSO/SCIM today.",
  "Need a full infrastructure secrets engine (use Vault).",
  "100+ person platform teams with dedicated DevOps.",
  "Looking for a managed SaaS solution.",
];

const comparisonData = [
  { feature: "Self-hosted", envy: "✓", env: "N/A", vault: "✓", saas: "✗" },
  { feature: "Setup time", envy: "Minutes", env: "None", vault: "Weeks", saas: "Minutes" },
  { feature: "Client-side encryption", envy: "✓", env: "✗", vault: "✗", saas: "Varies" },
  { feature: "RBAC + env access matrix", envy: "✓", env: "✗", vault: "✓", saas: "✓" },
  { feature: "Audit trail", envy: "✓", env: "✗", vault: "✓", saas: "✓" },
  { feature: "Ops overhead", envy: "Low", env: "None", vault: "High", saas: "None" },
  { feature: "Data stays on your infra", envy: "✓", env: "✓", vault: "✓", saas: "✗" },
];

const plans = [
  {
    name: "Founding",
    price: "$1,500",
    period: "/year",
    description: "For the first 10 teams. Full product, founding price.",
    badge: "Founding Customer",
    features: [
      "Up to 20 users",
      "Unlimited projects & environments",
      "Full RBAC & environment access matrix",
      "CLI + Web Dashboard + API",
      "Runtime injection & service tokens",
      "Audit trail & secret history",
      "Key rotation",
      "Docker Compose deployment",
      "Email support",
      "One onboarding session",
    ],
    highlight: true,
    ctaLabel: "Claim Founding Spot",
    ctaHref: "mailto:hello@getenv.org?subject=Founding%20Customer%20Inquiry",
    ctaVariant: "default" as const,
  },
  {
    name: "Standard",
    price: "$3,000",
    period: "/year",
    description: "Full-scale on-prem license for growing teams.",
    features: [
      "Unlimited users",
      "Everything in Founding",
      "Priority email support",
      "Deployment assistance & review",
      "Production onboarding call",
      "Security documentation pack",
    ],
    highlight: false,
    ctaLabel: "Contact Us",
    ctaHref: "mailto:hello@getenv.org?subject=Standard%20License%20Inquiry",
    ctaVariant: "outline" as const,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For organizations with compliance requirements.",
    features: [
      "Everything in Standard",
      "Dedicated onboarding & training",
      "Custom SLA",
      "Security review & documentation",
      "Migration assistance",
      "Private deployment consulting",
    ],
    highlight: false,
    ctaLabel: "Talk to Us",
    ctaHref: "mailto:hello@getenv.org?subject=Enterprise%20Inquiry",
    ctaVariant: "outline" as const,
  },
];

const faqs = [
  {
    question: "How does on-prem deployment work?",
    answer:
      "You get a Docker Compose setup that runs the API, web dashboard, and PostgreSQL on your own server. A minimal setup can be running quickly — we provide documentation and assist with the initial deployment.",
  },
  {
    question: "What happens if you disappear tomorrow?",
    answer:
      "Since Envy runs entirely on your infrastructure, it continues working regardless of what happens to us. The CLI source code is open on GitHub. Your data, your encryption keys, your infrastructure — everything stays with you.",
  },
  {
    question: "Can the backend see our secrets?",
    answer:
      "No. Secrets are encrypted on the client before they're sent to the backend. The server stores only ciphertext. Decryption happens locally using your private key, which the server never has access to.",
  },
  {
    question: "How is this different from HashiCorp Vault?",
    answer:
      "Vault is an enterprise infrastructure tool that requires significant operational investment. Envy is built for small-to-medium engineering teams who need real secret management without months of setup. Deploy with Docker Compose, manage with a CLI and web dashboard.",
  },
  {
    question: "What about CI/CD?",
    answer:
      "Envy has a service token model designed specifically for CI/CD. Tokens are scoped to specific projects and environments with runtime-only access — they can inject secrets into processes but can't export them as raw values.",
  },
  {
    question: "What support do we get?",
    answer:
      "Founding customers get email support with a direct line to the developer building Envy. Standard licenses include an onboarding call and deployment assistance. Enterprise plans come with custom SLAs.",
  },
  {
    question: "How do we handle someone leaving the team?",
    answer:
      "Run key rotation. Envy generates a new environment master key, re-encrypts all secrets, and creates new envelopes for remaining team members. The departed member's old key can't decrypt the new versions.",
  },
  {
    question: "How do we get updates?",
    answer:
      "Active license holders receive access to new Docker images and release notes. Updates are pulled and applied at your own pace — nothing auto-updates on your infrastructure without your control.",
  },
];

const dataFlowSteps: ({ label: string; variant: "client" | "server" | "storage" } | { arrow: string })[] = [
  { label: "CLI reads local .env file", variant: "client" },
  { arrow: "decrypt envelope with user private key" },
  { label: "Obtain environment master key", variant: "client" },
  { arrow: "encrypt each secret value" },
  { label: "Encrypted payload ready", variant: "client" },
  { arrow: "HTTPS" },
  { label: "Backend stores ciphertext only", variant: "server" },
  { arrow: "write" },
  { label: "PostgreSQL (encrypted values + nonces)", variant: "storage" },
];

/* ===== COMPONENT ===== */

export function LandingPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-background dark:text-foreground">
      {/* ===== HEADER ===== */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Envy" className="h-7 w-7 object-contain" />
            <p className="text-sm font-semibold">Envy</p>
          </div>

          <div className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <a href="#product" className="hover:text-foreground">
              Product
            </a>
            <a href="#security" className="hover:text-foreground">
              Security
            </a>
            <a href="#pricing" className="hover:text-foreground">
              Pricing
            </a>
            <a href="#faq" className="hover:text-foreground">
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <a
                href="https://github.com/envyapp/envy-cli"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub <ArrowRight className="ml-1 h-3 w-3" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* ===== HERO ===== */}
        <section className="mx-auto w-full max-w-6xl px-4 pb-10 pt-14 sm:px-6 md:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="secondary">Self-hosted &middot; End-to-end encrypted</Badge>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Self-hosted secrets management
              <br />
              for <span className="text-primary">modern engineering teams.</span>
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              End-to-end encrypted, role-based, auditable — deployed on your own infrastructure
              with Docker Compose. No vendor lock-in. Your secrets never leave your servers.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              Built for 5–30 person engineering teams running multiple environments and CI/CD
              pipelines.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              {/* TODO: Video hazır olduğunda aşağıdaki butonu aktif et ve href="VIDEO_URL" yap
              <Button asChild size="lg">
                <a href="#demo">
                  <Play className="mr-1.5 h-4 w-4" />
                  Watch 3-Minute Demo
                </a>
              </Button>
              */}
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://github.com/envyapp/envy-cli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore CLI on GitHub
                </a>
              </Button>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              or{" "}
              <a
                href="mailto:hello@getenv.org?subject=Deployment%20Fit%20Call"
                className="text-foreground/70 underline hover:text-foreground"
              >
                book a 15-min deployment fit call
              </a>
            </p>
          </div>
        </section>

        {/* ===== TERMINAL DEMO ===== */}
        <section id="demo" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
          <Card className="overflow-hidden border-border/60 bg-zinc-950 text-zinc-100 shadow-xl dark:bg-zinc-900">
            <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2 font-mono text-xs text-zinc-500">~/your-project</span>
            </div>
            <div className="space-y-1 p-6 font-mono text-sm leading-relaxed">
              <p className="text-zinc-500"># Link your project to Envy</p>
              <p>
                <span className="text-green-400">$</span> envy init
              </p>
              <p className="text-zinc-400">
                ✓ Connected to workspace "acme-corp" → project "payments-api"
              </p>
              <p>&nbsp;</p>
              <p className="text-zinc-500"># Push local secrets to the dev environment</p>
              <p>
                <span className="text-green-400">$</span> envy push{" "}
                <span className="text-blue-400">dev</span>
              </p>
              <p className="text-zinc-400">
                ✓ 8 secrets encrypted and pushed to{" "}
                <span className="text-amber-400">development</span>
              </p>
              <p>&nbsp;</p>
              <p className="text-zinc-500">
                # Run your app with secrets injected — nothing written to disk
              </p>
              <p>
                <span className="text-green-400">$</span> envy run{" "}
                <span className="text-blue-400">prod</span> -- node server.js
              </p>
              <p className="text-green-400">
                ● Server running on port 3000 with 12 secrets injected
              </p>
            </div>
          </Card>
        </section>

        {/* ===== PROBLEM ===== */}
        <section id="problem" className="border-y border-border/40 bg-background">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
            <p className="text-sm font-medium text-primary">The Problem</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              You already know this is broken.
            </h2>
            <p className="mt-2 max-w-xl text-base text-muted-foreground">
              Every growing team hits the same wall with secrets. Envy exists because we hit it too.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {problemItems.map((item) => (
                <Card key={item.title} className="border-border/60">
                  <CardHeader>
                    <span className="text-xl">{item.icon}</span>
                    <CardTitle className="text-base">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FEATURES ===== */}
        <section id="features" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-medium text-primary">Features</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Everything your team needs. Nothing it doesn't.
          </h2>
          <p className="mt-2 max-w-xl text-base text-muted-foreground">
            Built for small-to-medium engineering teams who want real security without enterprise
            complexity.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureItems.map((feature) => (
              <Card key={feature.title} className="border-border/60">
                <CardHeader>
                  <feature.icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-base">
                    {feature.title}
                    {feature.tag && (
                      <Badge variant="secondary" className="ml-2 text-[10px]">
                        {feature.tag}
                      </Badge>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== SECURITY MODEL ===== */}
        <section id="security" className="border-y border-border/40 bg-background">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
            <p className="text-sm font-medium text-primary">Security Model</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Secrets are encrypted before they leave your machine.
            </h2>
            <p className="mt-2 max-w-xl text-base text-muted-foreground">
              Envy uses client-side encryption with an envelope-based key sharing model. Decryption
              happens locally with user-controlled keys. The backend stores only ciphertext.
            </p>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                {securityItems.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="border-border/60">
                <CardHeader>
                  <CardDescription className="font-mono text-xs uppercase tracking-wider">
                    Data Flow — envy push
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {dataFlowSteps.map((step, i) => {
                    if ("arrow" in step) {
                      return (
                        <p
                          key={i}
                          className="py-1 text-center font-mono text-xs text-muted-foreground"
                        >
                          ↓ {step.arrow}
                        </p>
                      );
                    }
                    const variantStyles = {
                      client:
                        "border-green-500/20 bg-green-500/5 text-green-600 dark:text-green-400",
                      server: "border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400",
                      storage:
                        "border-amber-500/20 bg-amber-500/5 text-amber-600 dark:text-amber-400",
                    };
                    return (
                      <div
                        key={i}
                        className={`flex items-center gap-2 rounded-md border px-3 py-2.5 font-mono text-xs ${variantStyles[step.variant]}`}
                      >
                        <span>→</span> {step.label}
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ===== PRODUCT ===== */}
        <section id="product" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <p className="text-sm font-medium text-primary">See it in action</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight">
            Not just a CLI. A full dashboard for your team.
          </h2>
          <p className="mt-2 max-w-xl text-base text-muted-foreground">
            Your team manages secrets from both the CLI and a clean web interface.
          </p>

          <div className="mt-10 space-y-6">
            <Card className="overflow-hidden border-border/60 shadow-sm">
              <div className="flex items-center gap-3 border-b border-border/50 bg-muted/30 px-5 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  Project Settings — Environment Access Matrix
                </span>
              </div>
              <CardContent className="p-0">
                <img
                  src={theme === "dark" ? "/screenshot-permissions-dark.png" : "/screenshot-permissions-light.png"}
                  alt="Environment Access Matrix — role-based permission grid across environments"
                  className="w-full object-top object-cover transition-transform duration-300 hover:scale-[1.01]"
                />
              </CardContent>
              <div className="border-t border-border/40 bg-muted/20 px-5 py-3">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Role × Environment matrix</span>
                  {" "}— Set granular access per role per environment. Admin writes everywhere. Developer reads staging values. Viewer sees only key names in production.
                </p>
              </div>
            </Card>

            <Card className="overflow-hidden border-border/60 shadow-sm">
              <div className="flex items-center gap-3 border-b border-border/50 bg-muted/30 px-5 py-3">
                <div className="flex gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-red-400/70" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                  <span className="h-3 w-3 rounded-full bg-green-400/70" />
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  Project Dashboard — Secrets & Environments
                </span>
              </div>
              <CardContent className="p-0">
                <img
                  src={theme === "dark" ? "/screenshot-secrets-dark.png" : "/screenshot-secrets-light.png"}
                  alt="Secret list with masked values across Development, Staging and Production"
                  className="w-full object-top object-cover transition-transform duration-300 hover:scale-[1.01]"
                />
              </CardContent>
              <div className="border-t border-border/40 bg-muted/20 px-5 py-3">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Secret management dashboard</span>
                  {" "}— Browse secrets per environment, track versions, reveal values on demand. Workspace admin access doesn't mean production secret access.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* ===== IS ENVY RIGHT FOR YOU? ===== */}
        <section className="border-y border-border/40 bg-background">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
            <p className="text-sm font-medium text-primary">Is Envy right for you?</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Built for small teams with real security needs.
            </h2>
            <p className="mt-2 max-w-xl text-base text-muted-foreground">
              Envy isn't for everyone. Here's how to know if it fits.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card className="border-green-500/20 bg-green-500/[0.03]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                    <CheckCircle className="h-4 w-4" /> Good fit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {goodFitItems.map((item) => (
                    <p key={item} className="text-sm text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-red-500/20 bg-red-500/[0.03]">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
                    <XCircle className="h-4 w-4" /> Not the right fit
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {notFitItems.map((item) => (
                    <p key={item} className="text-sm text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ===== COMPARISON TABLE ===== */}
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h3 className="mb-2 text-center text-xl font-semibold">Envy vs. the alternatives</h3>
            <p className="mb-8 text-center text-sm text-muted-foreground">
              How Envy compares for small-to-medium teams
            </p>

            <div className="overflow-x-auto rounded-xl border border-border/60 bg-card">
              <table className="w-full min-w-[660px] text-sm">
                <thead>
                  <tr className="border-b border-border/50 text-left text-muted-foreground">
                    <th className="px-4 py-3 font-medium" />
                    <th className="bg-primary/5 px-4 py-3 font-semibold text-primary">Envy</th>
                    <th className="px-4 py-3 font-medium">.env files</th>
                    <th className="px-4 py-3 font-medium">Vault</th>
                    <th className="px-4 py-3 font-medium">SaaS tools</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr key={row.feature} className="border-b border-border/40">
                      <td className="px-4 py-3 font-medium text-foreground">{row.feature}</td>
                      <td className="bg-primary/5 px-4 py-3 font-medium text-primary">
                        {row.envy}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground">{row.env}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.vault}</td>
                      <td className="px-4 py-3 text-muted-foreground">{row.saas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ===== PRICING ===== */}
        <section id="pricing" className="border-y border-border/40 bg-background">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
            <div className="mb-10 text-center">
              <p className="text-sm font-medium text-primary">Pricing</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight">
                Simple, annual licensing.
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                On-prem deployment. Annual licensing. No usage metering. No surprises.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className={`relative ${plan.highlight ? "border-primary/60 shadow-lg shadow-primary/10" : "border-border/60"}`}
                >
                  {"badge" in plan && plan.badge && (
                    <Badge className="absolute -top-3 left-6">{plan.badge}</Badge>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-1 text-3xl font-semibold">
                      {plan.price}
                      <span className="text-base font-normal text-muted-foreground">
                        {plan.period}
                      </span>
                    </p>
                    {plan.highlight && (
                      <p className="mb-4 text-xs text-muted-foreground">
                        Limited spots · Locked-in rate for year one
                      </p>
                    )}
                    {!plan.highlight && <div className="mb-4" />}
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="mt-5 w-full" variant={plan.ctaVariant} asChild>
                      <a href={plan.ctaHref}>
                        {plan.ctaLabel} <ArrowRight className="ml-1 h-3 w-3" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section id="faq" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-sm font-medium text-primary">FAQ</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight">
              Questions you're probably asking.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {faqs.map((item) => (
              <Card key={item.question} className="border-border/60">
                <CardHeader>
                  <CardTitle className="text-base">{item.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
          <Card className="border-primary/30 bg-primary/5">
            <CardContent className="flex flex-col items-center gap-5 p-8 text-center">
              <p className="text-2xl font-semibold">Ready to stop managing secrets in Slack?</p>
              <p className="max-w-md text-sm text-muted-foreground">
                See the full workflow in 3 minutes. Deploy on your infrastructure when you're ready.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {/* TODO: Video hazır olduğunda aşağıdaki butonu aktif et ve href="VIDEO_URL" yap
                <Button asChild size="lg">
                  <a href="#demo">
                    <Play className="mr-1.5 h-4 w-4" />
                    Watch the Demo
                  </a>
                </Button>
                */}
                <Button asChild variant="outline" size="lg">
                  <a
                    href="https://github.com/envyapp/envy-cli"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Explore the CLI <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Ready to deploy?{" "}
                <a
                  href="mailto:hello@getenv.org?subject=Deployment%20Fit%20Call"
                  className="text-foreground/70 underline hover:text-foreground"
                >
                  Book a 15-min deployment fit call
                </a>
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-border/40">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Envy" className="h-5 w-5 object-contain opacity-70" />
            <p>© 2026 Envy. Self-hosted secrets management.</p>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/envyapp/envy-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
            <a href="#security" className="hover:text-foreground">
              Security
            </a>
            <a href="#pricing" className="hover:text-foreground">
              Pricing
            </a>
            <a
              href="mailto:hello@getenv.org"
              className="hover:text-foreground"
            >
              Contact
            </a>
            <Link to="/privacy" className="hover:text-foreground">
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
