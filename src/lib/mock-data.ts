export interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
  initials: string;
  role: 'USER' | 'ADMIN';
  isPro: boolean;
  storageUsedMb: number;
  storageLimitGb: number;
}

export interface ItemType {
  id: string;
  name: string;
  slug: 'snippet' | 'prompt' | 'command' | 'note' | 'file' | 'image' | 'url';
  badgeText: string;
  icon: string;
  color: string;
  count: number;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  itemCount: number;
  featuredType: string;
  color: string;
  icon?: string;
  isFavorite: boolean;
  isSelected?: boolean;
}

export interface Item {
  id: string;
  title: string;
  contentType: 'TEXT' | 'FILE' | 'LINK';
  typeId: string;
  typeSlug: 'snippet' | 'prompt' | 'command' | 'note' | 'file' | 'image' | 'url';
  collectionId: string;
  collectionName: string;
  content?: string;
  description?: string;
  language?: string;
  fileName?: string;
  fileSize?: string;
  fileUrl?: string;
  mimeType?: string;
  url?: string;
  tags: string[];
  isPinned: boolean;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface DashboardStats {
  totalItems: number;
  activeCollections: number;
  aiEnhanced: number;
  aiEnhancedPercentage: number;
  storageUsedMb: number;
  storageLimitGb: number;
}

export const currentUser: User = {
  id: 'usr_elias_m',
  name: 'Elias M.',
  email: 'elias@devstash.io',
  initials: 'EM',
  role: 'USER',
  isPro: true,
  storageUsedMb: 18.4,
  storageLimitGb: 50,
};

export const itemTypes: ItemType[] = [
  {
    id: 'type_snippet',
    name: 'Snippets',
    slug: 'snippet',
    badgeText: 'SNI',
    icon: 'Code',
    color: '#3b82f6',
    count: 4,
  },
  {
    id: 'type_prompt',
    name: 'Prompts',
    slug: 'prompt',
    badgeText: 'PRO',
    icon: 'Bot',
    color: '#a855f7',
    count: 2,
  },
  {
    id: 'type_command',
    name: 'Commands',
    slug: 'command',
    badgeText: 'CMD',
    icon: 'Terminal',
    color: '#eab308',
    count: 2,
  },
  {
    id: 'type_note',
    name: 'Notes',
    slug: 'note',
    badgeText: 'NOT',
    icon: 'FileText',
    color: '#10b981',
    count: 2,
  },
  {
    id: 'type_file',
    name: 'Files',
    slug: 'file',
    badgeText: 'FIL',
    icon: 'Folder',
    color: '#06b6d4',
    count: 2,
  },
  {
    id: 'type_image',
    name: 'Images',
    slug: 'image',
    badgeText: 'IMG',
    icon: 'Image',
    color: '#ec4899',
    count: 1,
  },
  {
    id: 'type_url',
    name: 'URLs',
    slug: 'url',
    badgeText: 'URL',
    icon: 'Link',
    color: '#f97316',
    count: 1,
  },
];

export const collections: Collection[] = [
  {
    id: 'col_stripe_stack',
    name: 'Next.js + Stripe Stack',
    description: 'App Router webhooks, checkout server actions, and Prisma billing sync.',
    itemCount: 6,
    featuredType: 'Snippet',
    color: '#3b82f6',
    icon: 'Package',
    isFavorite: true,
    isSelected: true,
  },
  {
    id: 'col_prompt_engineering',
    name: 'AI Prompt Engineering',
    description: 'Structured system prompts, chain-of-thought templates, and evaluation criteria.',
    itemCount: 2,
    featuredType: 'Prompt',
    color: '#a855f7',
    icon: 'Sparkles',
    isFavorite: false,
    isSelected: false,
  },
  {
    id: 'col_devops_cli',
    name: 'DevOps & CLI Toolkit',
    description: 'Docker Compose configs, Nginx reverse proxy rules, and deployment scripts.',
    itemCount: 2,
    featuredType: 'Command',
    color: '#eab308',
    icon: 'Terminal',
    isFavorite: false,
    isSelected: false,
  },
  {
    id: 'col_arch_docs',
    name: 'Architecture & Docs',
    description: 'ADRs, architecture diagrams, guidelines, and code snippets.',
    itemCount: 4,
    featuredType: 'Note',
    color: '#10b981',
    icon: 'BookOpen',
    isFavorite: false,
    isSelected: false,
  },
];

export const items: Item[] = [
  {
    id: 'item_1',
    title: 'Stripe Webhook Signature Verifier',
    contentType: 'TEXT',
    typeId: 'type_snippet',
    typeSlug: 'snippet',
    collectionId: 'col_stripe_stack',
    collectionName: 'Next.js + Stripe Stack',
    language: 'typescript',
    content: `import { headers } from 'next/headers';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function verifyStripeWebhook(req: Request) {
  const body = await req.text();
  const signature = (await headers()).get('stripe-signature');

  if (!signature) {
    throw new Error('Missing stripe-signature header');
  }

  return stripe.webhooks.constructEvent(
    body,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET!
  );
}`,
    description: 'App Router webhook handler with signature verification and Stripe event construction.',
    tags: ['nextjs', 'stripe', 'webhooks', 'typescript'],
    isPinned: true,
    isFavorite: true,
    createdAt: '2026-11-22T15:00:00Z',
    updatedAt: '2026-11-22T15:00:00Z',
  },
  {
    id: 'item_2',
    title: 'Prisma Singleton Client Instance',
    contentType: 'TEXT',
    typeId: 'type_snippet',
    typeSlug: 'snippet',
    collectionId: 'col_stripe_stack',
    collectionName: 'Next.js + Stripe Stack',
    language: 'typescript',
    content: `import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;`,
    description: 'Global singleton Prisma client preventing connection exhaustion during Next.js hot reload.',
    tags: ['prisma', 'database', 'typescript'],
    isPinned: true,
    isFavorite: true,
    createdAt: '2026-11-22T12:00:00Z',
    updatedAt: '2026-11-22T12:00:00Z',
  },
  {
    id: 'item_3',
    title: 'Zod Dynamic Form Validator',
    contentType: 'TEXT',
    typeId: 'type_snippet',
    typeSlug: 'snippet',
    collectionId: 'col_stripe_stack',
    collectionName: 'Next.js + Stripe Stack',
    language: 'typescript',
    content: `import { z } from 'zod';

export const checkoutSchema = z.object({
  planId: z.enum(['free', 'pro_monthly', 'pro_yearly']),
  billingEmail: z.string().email('Please enter a valid email address'),
  taxId: z.string().optional(),
  successUrl: z.string().url(),
  cancelUrl: z.string().url(),
});

export type CheckoutInput = z.infer<typeof checkoutSchema>;`,
    description: 'Type-safe schema validator for subscription checkout inputs and billing data.',
    tags: ['zod', 'validation', 'typescript'],
    isPinned: false,
    isFavorite: false,
    createdAt: '2026-11-21T18:00:00Z',
    updatedAt: '2026-11-21T18:00:00Z',
  },
  {
    id: 'item_4',
    title: 'Stripe Checkout Session Server Action',
    contentType: 'TEXT',
    typeId: 'type_snippet',
    typeSlug: 'snippet',
    collectionId: 'col_stripe_stack',
    collectionName: 'Next.js + Stripe Stack',
    language: 'typescript',
    content: `'use server';

import Stripe from 'stripe';
import { redirect } from 'next/navigation';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function createCheckoutSession(priceId: string, customerId?: string) {
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    payment_method_types: ['card'],
    customer: customerId,
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/dashboard?billing=success\`,
    cancel_url: \`\${process.env.NEXT_PUBLIC_APP_URL}/billing?billing=cancel\`,
  });

  if (session.url) {
    redirect(session.url);
  }
}`,
    description: 'Server Action to create Stripe customer checkout session and redirect securely.',
    tags: ['nextjs', 'stripe', 'server-actions'],
    isPinned: false,
    isFavorite: false,
    createdAt: '2026-11-20T10:00:00Z',
    updatedAt: '2026-11-20T10:00:00Z',
  },
  {
    id: 'item_5',
    title: 'System Architecture Designer Prompt',
    contentType: 'TEXT',
    typeId: 'type_prompt',
    typeSlug: 'prompt',
    collectionId: 'col_prompt_engineering',
    collectionName: 'AI Prompt Engineering',
    language: 'markdown',
    content: `Role: Senior Principal Cloud Architect
Context: Designing a multi-tenant SaaS application using {{tech_stack}}.
Constraints: High availability (99.99%), sub-100ms API response time, GDPR/SOC2 compliance.

Task: Provide a detailed architectural breakdown including:
1. Data persistence strategy (primary DB vs caching layer)
2. Authentication & RBAC token flow
3. Event-driven queue setup for heavy background jobs
4. Recommended infrastructure blueprint on AWS/Vercel

Output Format: Clean Markdown with ASCII sequence diagrams.`,
    description: 'System prompt for generating production-ready cloud architectural breakdowns.',
    tags: ['ai', 'architecture', 'system-design'],
    isPinned: true,
    isFavorite: true,
    createdAt: '2026-11-19T14:30:00Z',
    updatedAt: '2026-11-19T14:30:00Z',
  },
  {
    id: 'item_6',
    title: 'TypeScript Code Refactor & Optimizer',
    contentType: 'TEXT',
    typeId: 'type_prompt',
    typeSlug: 'prompt',
    collectionId: 'col_prompt_engineering',
    collectionName: 'AI Prompt Engineering',
    language: 'markdown',
    content: `Role: Code Reviewer & Performance Optimization Specialist
Context: Refactoring TypeScript React 19 / Next.js code for performance, readability, and strict type safety.

Task:
1. Identify performance bottlenecks and unnecessary re-renders.
2. Enforce strict type safety without \`any\`.
3. Provide refactored code with inline comments explaining key improvements.`,
    description: 'Role-based review prompt targeting Next.js React 19 and strict type safety.',
    tags: ['ai', 'refactor', 'code-quality'],
    isPinned: false,
    isFavorite: false,
    createdAt: '2026-11-18T11:15:00Z',
    updatedAt: '2026-11-18T11:15:00Z',
  },
  {
    id: 'item_7',
    title: 'Docker Compose Full-Stack Up',
    contentType: 'TEXT',
    typeId: 'type_command',
    typeSlug: 'command',
    collectionId: 'col_devops_cli',
    collectionName: 'DevOps & CLI Toolkit',
    language: 'bash',
    content: 'docker compose -f docker-compose.prod.yml up -d --build --remove-orphans',
    description: 'Build and run full-stack production containers in detached mode.',
    tags: ['docker', 'devops', 'cli'],
    isPinned: true,
    isFavorite: false,
    createdAt: '2026-11-17T09:20:00Z',
    updatedAt: '2026-11-17T09:20:00Z',
  },
  {
    id: 'item_8',
    title: 'Nginx SSL Reverse Proxy Reload',
    contentType: 'TEXT',
    typeId: 'type_command',
    typeSlug: 'command',
    collectionId: 'col_devops_cli',
    collectionName: 'DevOps & CLI Toolkit',
    language: 'bash',
    content: 'sudo nginx -t && sudo systemctl reload nginx',
    description: 'Test Nginx configuration syntax and gracefully reload reverse proxy service.',
    tags: ['nginx', 'linux', 'ssl'],
    isPinned: false,
    isFavorite: false,
    createdAt: '2026-11-16T16:45:00Z',
    updatedAt: '2026-11-16T16:45:00Z',
  },
  {
    id: 'item_9',
    title: 'ADR 001: Next.js App Router Architecture',
    contentType: 'TEXT',
    typeId: 'type_note',
    typeSlug: 'note',
    collectionId: 'col_arch_docs',
    collectionName: 'Architecture & Docs',
    language: 'markdown',
    content: `# ADR 001: Next.js App Router & Server Components

## Status
Accepted

## Context
We need a unified framework combining SEO visibility, instant data hydration, and strict TypeScript end-to-end type safety.

## Decision
Adopt Next.js 15+ App Router with React Server Components as the default pattern. Client components are restricted to interactive leaves.

## Consequences
Faster initial render times, reduced client bundle sizes, and zero-waterfall server data fetching.`,
    description: 'Architectural Decision Record choosing Next.js App Router for DevStash web tier.',
    tags: ['adr', 'architecture', 'nextjs'],
    isPinned: false,
    isFavorite: true,
    createdAt: '2026-11-15T13:00:00Z',
    updatedAt: '2026-11-15T13:00:00Z',
  },
  {
    id: 'item_10',
    title: 'Database Schema & Migration Guidelines',
    contentType: 'TEXT',
    typeId: 'type_note',
    typeSlug: 'note',
    collectionId: 'col_arch_docs',
    collectionName: 'Architecture & Docs',
    language: 'markdown',
    content: `# Database Schema & Migration Guidelines

- Always use \`prisma migrate dev\` for schema changes in development.
- Never use \`prisma db push\` on production or staging databases.
- Ensure every foreign key column has an index for query performance.
- Mark soft-deleted entities or audit trails where compliance is required.
- Run \`prisma migrate status\` before committing changes.`,
    description: 'Engineering standards for Postgres database schema design and migrations.',
    tags: ['database', 'prisma', 'guidelines'],
    isPinned: false,
    isFavorite: false,
    createdAt: '2026-11-14T17:10:00Z',
    updatedAt: '2026-11-14T17:10:00Z',
  },
  {
    id: 'item_11',
    title: '.env.example Template',
    contentType: 'FILE',
    typeId: 'type_file',
    typeSlug: 'file',
    collectionId: 'col_stripe_stack',
    collectionName: 'Next.js + Stripe Stack',
    language: 'dotenv',
    fileName: '.env.example',
    fileSize: '1.2 KB',
    mimeType: 'text/plain',
    content: `# Database
DATABASE_URL="postgresql://user:password@localhost:5432/devstash?schema=public"

# Auth.js / NextAuth
AUTH_SECRET="super-secret-auth-key-change-me"
NEXTAUTH_URL="http://localhost:3000"

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# OpenAI
OPENAI_API_KEY="sk-..."`,
    description: 'Standard local environment variables template with placeholder secrets.',
    tags: ['env', 'config', 'stripe'],
    isPinned: false,
    isFavorite: false,
    createdAt: '2026-11-12T08:30:00Z',
    updatedAt: '2026-11-12T08:30:00Z',
  },
  {
    id: 'item_12',
    title: 'Docker Compose Local Services',
    contentType: 'FILE',
    typeId: 'type_file',
    typeSlug: 'file',
    collectionId: 'col_arch_docs',
    collectionName: 'Architecture & Docs',
    language: 'yaml',
    fileName: 'docker-compose.yml',
    fileSize: '2.4 KB',
    mimeType: 'text/yaml',
    content: `version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    restart: always
    environment:
      POSTGRES_USER: devstash
      POSTGRES_PASSWORD: devpassword
      POSTGRES_DB: devstash
    ports:
      - '5432:5432'
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:`,
    description: 'Docker Compose config for running local PostgreSQL and Redis dependencies.',
    tags: ['docker', 'database', 'devops'],
    isPinned: false,
    isFavorite: false,
    createdAt: '2026-11-10T14:00:00Z',
    updatedAt: '2026-11-10T14:00:00Z',
  },
  {
    id: 'item_13',
    title: 'System Architecture Flow Diagram',
    contentType: 'FILE',
    typeId: 'type_image',
    typeSlug: 'image',
    collectionId: 'col_arch_docs',
    collectionName: 'Architecture & Docs',
    fileName: 'system-architecture-diagram.png',
    fileSize: '18.4 MB',
    fileUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
    mimeType: 'image/png',
    description: 'High-resolution diagram illustrating client tier, server actions, and cloud storage.',
    tags: ['architecture', 'diagram', 'mockup'],
    isPinned: false,
    isFavorite: false,
    createdAt: '2026-11-08T19:00:00Z',
    updatedAt: '2026-11-08T19:00:00Z',
  },
  {
    id: 'item_14',
    title: 'Stripe Elements & Next.js Docs',
    contentType: 'LINK',
    typeId: 'type_url',
    typeSlug: 'url',
    collectionId: 'col_stripe_stack',
    collectionName: 'Next.js + Stripe Stack',
    url: 'https://stripe.com/docs/stripe-js',
    description: 'Official Stripe Elements guide for React and Next.js payment integrations.',
    tags: ['stripe', 'docs', 'nextjs'],
    isPinned: false,
    isFavorite: false,
    createdAt: '2026-11-05T12:00:00Z',
    updatedAt: '2026-11-05T12:00:00Z',
  },
];

export const dashboardStats: DashboardStats = {
  totalItems: 14,
  activeCollections: 4,
  aiEnhanced: 14,
  aiEnhancedPercentage: 100,
  storageUsedMb: 18.4,
  storageLimitGb: 50,
};

// Aliases for convenient importing
export const mockUser = currentUser;
export const mockItemTypes = itemTypes;
export const mockCollections = collections;
export const mockItems = items;
export const mockDashboardStats = dashboardStats;
