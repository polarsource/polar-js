# OrganizationStatus

## Example Usage

```typescript
import { OrganizationStatus } from "@polar-sh/sdk/models/components/organizationstatus.js";

let value: OrganizationStatus = "onboarding_started";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created" | "onboarding_started" | "initial_review" | "ongoing_review" | "denied" | "active" | Unrecognized<string>
```