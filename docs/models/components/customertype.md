# CustomerType

## Example Usage

```typescript
import { CustomerType } from "@polar-sh/sdk/models/components/customertype.js";

let value: CustomerType = "individual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"individual" | "team" | Unrecognized<string>
```