# ProductVisibility

## Example Usage

```typescript
import { ProductVisibility } from "@polar-sh/sdk/models/components/productvisibility.js";

let value: ProductVisibility = "draft";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "private" | "public" | Unrecognized<string>
```