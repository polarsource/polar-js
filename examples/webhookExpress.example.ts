/*
 * Example: Minimal Express server validating Polar webhooks
 *
 * To run from the examples directory:
 *   npm run build && npx tsx webhookExpress.example.ts
 */

import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from "express";
import { validateEvent, WebhookVerificationError } from "@polar-sh/sdk/webhooks";

const app = express();

// Use raw body for signature verification
app.post("/webhook", express.raw({ type: "application/json" }), (req: Request, res: Response) => {
  try {
    const secret = process.env["POLAR_WEBHOOK_SECRET"] ?? "";
    if (!secret) {
      console.warn("POLAR_WEBHOOK_SECRET is not set; refusing to validate requests.");
      return res.status(500).send("");
    }

    const event = validateEvent(req.body, req.headers as Record<string, string>, secret);

    // TODO: Handle the event by type if desired
    console.log("Received webhook:", event.type);

    return res.status(202).send("");
  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      return res.status(403).send("");
    }
    console.error(error);
    return res.status(500).send("");
  }
});

const port = Number(process.env["PORT"] ?? 3000);
app.listen(port, () => {
  console.log(`Webhook server listening on http://localhost:${port}`);
});

