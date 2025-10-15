# @polar-sh/sdk Examples

This directory contains example scripts demonstrating how to use the @polar-sh/sdk SDK.

## Prerequisites

- Node.js (v18 or higher)
- npm

## Setup

1. Copy `.env.template` to `.env`:
   ```bash
   cp .env.template .env
   ```

2. Edit `.env` and add your actual credentials (API keys, tokens, etc.)

## Running the Examples

To run an example from this directory:

```bash
npm run build && npx tsx organizationsList.example.ts
```

Available examples:
- organizationsList.example.ts — lists organizations using the SDK
- webhookExpress.example.ts — minimal Express server validating Polar webhooks

## Creating new examples

Duplicate an existing example file, they won't be overwritten by the generation process.

