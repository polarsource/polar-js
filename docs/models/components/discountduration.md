# DiscountDuration

## Example Usage

```typescript
import { DiscountDuration } from "@polar-sh/sdk/models/components/discountduration.js";

let value: DiscountDuration = "once";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"once" | "forever" | "repeating" | Unrecognized<string>
```