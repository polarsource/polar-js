# OrderBillingReason

## Example Usage

```typescript
import { OrderBillingReason } from "@polar-sh/sdk/models/components/orderbillingreason.js";

let value: OrderBillingReason = "subscription_update";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"purchase" | "subscription_create" | "subscription_cycle" | "subscription_update" | Unrecognized<string>
```