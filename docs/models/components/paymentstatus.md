# PaymentStatus

## Example Usage

```typescript
import { PaymentStatus } from "@polar-sh/sdk/models/components/paymentstatus.js";

let value: PaymentStatus = "succeeded";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "succeeded" | "failed" | Unrecognized<string>
```