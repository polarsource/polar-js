# BenefitType

## Example Usage

```typescript
import { BenefitType } from "@polar-sh/sdk/models/components/benefittype.js";

let value: BenefitType = "meter_credit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"custom" | "discord" | "github_repository" | "downloadables" | "license_keys" | "meter_credit" | Unrecognized<string>
```