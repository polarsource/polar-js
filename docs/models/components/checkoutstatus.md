# CheckoutStatus

## Example Usage

```typescript
import { CheckoutStatus } from "@polar-sh/sdk/models/components/checkoutstatus.js";

let value: CheckoutStatus = "confirmed";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"open" | "expired" | "confirmed" | "succeeded" | "failed" | Unrecognized<string>
```