# OrderStatus

## Example Usage

```typescript
import { OrderStatus } from "@polar-sh/sdk/models/components/orderstatus.js";

let value: OrderStatus = "void";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "paid" | "refunded" | "partially_refunded" | "void" | Unrecognized<string>
```