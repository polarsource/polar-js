# SubscriptionProrationBehavior

## Example Usage

```typescript
import { SubscriptionProrationBehavior } from "@polar-sh/sdk/models/components/subscriptionprorationbehavior.js";

let value: SubscriptionProrationBehavior = "invoice";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"invoice" | "prorate" | Unrecognized<string>
```