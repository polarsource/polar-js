# LicenseKeyActivationRead

## Example Usage

```typescript
import { LicenseKeyActivationRead } from "@polar-sh/sdk/models/components";

let value: LicenseKeyActivationRead = {
  id: "<value>",
  licenseKeyId: "<value>",
  label: "<value>",
  meta: {},
  createdAt: new Date("2023-07-05T19:31:24.943Z"),
  modifiedAt: new Date("2025-02-27T23:43:34.291Z"),
  licenseKey: {
    id: "<value>",
    organizationId: "<value>",
    userId: "<value>",
    customerId: "<value>",
    user: {
      id: "<value>",
      email: "Maybelle_McLaughlin14@gmail.com",
      publicName: "<value>",
    },
    customer: {
      createdAt: new Date("2025-10-14T06:10:04.916Z"),
      modifiedAt: new Date("2024-07-07T11:57:55.965Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Margarette92@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Wallis and Futuna",
      },
      taxId: [
        "om_vat",
      ],
      organizationId: "<value>",
      avatarUrl: "https://zesty-intellect.com/",
    },
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "disabled",
    limitActivations: 570377,
    usage: 459004,
    limitUsage: 19789,
    validations: 428401,
    lastValidatedAt: new Date("2023-07-20T20:45:13.442Z"),
    expiresAt: new Date("2025-02-26T23:14:03.443Z"),
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `licenseKeyId`                                                                                     | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `label`                                                                                            | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `meta`                                                                                             | [components.LicenseKeyActivationReadMeta](../../models/components/licensekeyactivationreadmeta.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `modifiedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `licenseKey`                                                                                       | [components.LicenseKeyRead](../../models/components/licensekeyread.md)                             | :heavy_check_mark:                                                                                 | N/A                                                                                                |