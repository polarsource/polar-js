# BenefitLicenseKeysProperties

## Example Usage

```typescript
import { BenefitLicenseKeysProperties } from "@polar-sh/sdk/models/components/benefitlicensekeysproperties.js";

let value: BenefitLicenseKeysProperties = {
  prefix: "<value>",
  expires: {
    ttl: 56931,
    timeframe: "month",
  },
  activations: {
    limit: 936323,
    enableCustomerAdmin: false,
  },
  limitUsage: 224846,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `prefix`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `expires`                                                                                                            | [components.BenefitLicenseKeyExpirationProperties](../../models/components/benefitlicensekeyexpirationproperties.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `activations`                                                                                                        | [components.BenefitLicenseKeyActivationProperties](../../models/components/benefitlicensekeyactivationproperties.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `limitUsage`                                                                                                         | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |