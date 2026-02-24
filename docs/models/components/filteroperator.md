# FilterOperator

## Example Usage

```typescript
import { FilterOperator } from "@polar-sh/sdk/models/components/filteroperator.js";

let value: FilterOperator = "gte";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "like" | "not_like" | Unrecognized<string>
```