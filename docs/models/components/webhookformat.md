# WebhookFormat

## Example Usage

```typescript
import { WebhookFormat } from "@polar-sh/sdk/models/components/webhookformat.js";

let value: WebhookFormat = "slack";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"raw" | "discord" | "slack" | Unrecognized<string>
```