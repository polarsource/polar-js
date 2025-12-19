# SubscriptionStatus

## Example Usage

```typescript
import { SubscriptionStatus } from "@polar-sh/sdk/models/components/subscriptionstatus.js";

let value: SubscriptionStatus = "canceled";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"incomplete" | "incomplete_expired" | "trialing" | "active" | "past_due" | "canceled" | "unpaid" | Unrecognized<string>
```