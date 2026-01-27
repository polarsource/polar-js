# TrialInterval

## Example Usage

```typescript
import { TrialInterval } from "@polar-sh/sdk/models/components/trialinterval.js";

let value: TrialInterval = "day";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"day" | "week" | "month" | "year" | Unrecognized<string>
```