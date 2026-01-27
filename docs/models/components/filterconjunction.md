# FilterConjunction

## Example Usage

```typescript
import { FilterConjunction } from "@polar-sh/sdk/models/components/filterconjunction.js";

let value: FilterConjunction = "and";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"and" | "or" | Unrecognized<string>
```