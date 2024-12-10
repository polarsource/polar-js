# BenefitLicenseKeysSubscriberProperties

## Example Usage

```typescript
import { BenefitLicenseKeysSubscriberProperties } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeysSubscriberProperties = {
  prefix: "<value>",
  expires: {
    ttl: 170949,
    timeframe: "year",
  },
  activations: {
    limit: 632121,
    enableUserAdmin: false,
  },
  limitUsage: 147883,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `prefix`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `expires`                                                                                                            | [components.BenefitLicenseKeyExpirationProperties](../../models/components/benefitlicensekeyexpirationproperties.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `activations`                                                                                                        | [components.BenefitLicenseKeyActivationProperties](../../models/components/benefitlicensekeyactivationproperties.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `limitUsage`                                                                                                         | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |