# Func

## Example Usage

```typescript
import { Func } from "@polar-sh/sdk/models/components/propertyaggregation.js";

let value: Func = "avg";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"sum" | "max" | "min" | "avg" | Unrecognized<string>
```