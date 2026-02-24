# SubType

## Example Usage

```typescript
import { SubType } from "@polar-sh/sdk/models/components/subtype.js";

let value: SubType = "organization";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"user" | "organization" | Unrecognized<string>
```