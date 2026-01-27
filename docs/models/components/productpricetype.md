# ProductPriceType

## Example Usage

```typescript
import { ProductPriceType } from "@polar-sh/sdk/models/components/productpricetype.js";

let value: ProductPriceType = "one_time";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"one_time" | "recurring" | Unrecognized<string>
```