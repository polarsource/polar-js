# LicenseKeyStatus

## Example Usage

```typescript
import { LicenseKeyStatus } from "@polar-sh/sdk/models/components/licensekeystatus.js";

let value: LicenseKeyStatus = "granted";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"granted" | "revoked" | "disabled" | Unrecognized<string>
```