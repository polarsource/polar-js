# RefundReason

## Example Usage

```typescript
import { RefundReason } from "@polar-sh/sdk/models/components/refundreason.js";

let value: RefundReason = "service_disruption";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"duplicate" | "fraudulent" | "customer_request" | "service_disruption" | "satisfaction_guarantee" | "dispute_prevention" | "other" | Unrecognized<string>
```