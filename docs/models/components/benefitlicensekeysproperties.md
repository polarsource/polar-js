# BenefitLicenseKeysProperties

## Example Usage

```typescript
import { BenefitLicenseKeysProperties } from "@polar-sh/sdk/models/components/benefitlicensekeysproperties.js";

let value: BenefitLicenseKeysProperties = {
  prefix: "<value>",
  expires: {
    ttl: 98238,
    timeframe: "year",
  },
  activations: {
    limit: 664501,
    enableCustomerAdmin: false,
  },
  limitUsage: 867688,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `prefix`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `expires`                                                                                                            | [components.BenefitLicenseKeyExpirationProperties](../../models/components/benefitlicensekeyexpirationproperties.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `activations`                                                                                                        | [components.BenefitLicenseKeyActivationProperties](../../models/components/benefitlicensekeyactivationproperties.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `limitUsage`                                                                                                         | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |