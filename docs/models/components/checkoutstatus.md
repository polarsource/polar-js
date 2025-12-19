# CheckoutStatus

## Example Usage

```typescript
import { CheckoutStatus } from "@polar-sh/sdk/models/components/checkoutstatus.js";

let value: CheckoutStatus = "confirmed";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"open" | "expired" | "confirmed" | "succeeded" | "failed" | Unrecognized<string>
```