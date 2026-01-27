# DisputeStatus

## Example Usage

```typescript
import { DisputeStatus } from "@polar-sh/sdk/models/components/disputestatus.js";

let value: DisputeStatus = "needs_response";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"prevented" | "early_warning" | "needs_response" | "under_review" | "lost" | "won" | Unrecognized<string>
```