# CustomerCancellationReason

## Example Usage

```typescript
import { CustomerCancellationReason } from "@polar-sh/sdk/models/components/customercancellationreason.js";

let value: CustomerCancellationReason = "low_quality";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"customer_service" | "low_quality" | "missing_features" | "switched_service" | "too_complex" | "too_expensive" | "unused" | "other" | Unrecognized<string>
```