# BenefitLicenseKeysSubscriberProperties

## Example Usage

```typescript
import { BenefitLicenseKeysSubscriberProperties } from "@polar-sh/sdk/models/components/benefitlicensekeyssubscriberproperties.js";

let value: BenefitLicenseKeysSubscriberProperties = {
  prefix: "<value>",
  expires: {
    ttl: 784207,
    timeframe: "month",
  },
  activations: {
    limit: 418870,
    enableCustomerAdmin: false,
  },
  limitUsage: 176942,
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `prefix`                                                                                                             | *string*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `expires`                                                                                                            | [components.BenefitLicenseKeyExpirationProperties](../../models/components/benefitlicensekeyexpirationproperties.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `activations`                                                                                                        | [components.BenefitLicenseKeyActivationProperties](../../models/components/benefitlicensekeyactivationproperties.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `limitUsage`                                                                                                         | *number*                                                                                                             | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |