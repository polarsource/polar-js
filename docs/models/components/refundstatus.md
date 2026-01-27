# RefundStatus

## Example Usage

```typescript
import { RefundStatus } from "@polar-sh/sdk/models/components/refundstatus.js";

let value: RefundStatus = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "succeeded" | "failed" | "canceled" | Unrecognized<string>
```