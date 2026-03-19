# SubType

## Example Usage

```typescript
import { SubType } from "@polar-sh/sdk/models/components/subtype.js";

let value: SubType = "organization";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"user" | "organization" | Unrecognized<string>
```