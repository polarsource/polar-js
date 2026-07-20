# PaymentTrigger

## Example Usage

```typescript
import { PaymentTrigger } from "@polar-sh/sdk/models/components/paymenttrigger.js";

let value: PaymentTrigger = "subscription_cycle";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"purchase" | "subscription_cycle" | "retry_dunning" | "retry_customer" | "retry_payment_method_update" | "retry_admin" | Unrecognized<string>
```