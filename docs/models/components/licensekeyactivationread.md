# LicenseKeyActivationRead

## Example Usage

```typescript
import { LicenseKeyActivationRead } from "@polar-sh/sdk/models/components";

let value: LicenseKeyActivationRead = {
  id: "<value>",
  licenseKeyId: "<value>",
  label: "<value>",
  meta: {},
  createdAt: new Date("2022-03-13T11:24:21.889Z"),
  modifiedAt: new Date("2024-01-24T09:32:26.939Z"),
  licenseKey: {
    id: "<value>",
    organizationId: "<value>",
    userId: "<value>",
    customerId: "<value>",
    user: {
      id: "<value>",
      email: "Bryon.Labadie-Grimes@yahoo.com",
      publicName: "<value>",
    },
    customer: {
      createdAt: new Date("2022-09-27T08:48:38.427Z"),
      modifiedAt: new Date("2023-09-16T21:19:37.654Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Harmony38@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Nauru",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://rapid-toothbrush.name/",
    },
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "disabled",
    limitActivations: 684229,
    usage: 947182,
    limitUsage: 407209,
    validations: 772726,
    lastValidatedAt: new Date("2023-07-13T01:37:39.797Z"),
    expiresAt: new Date("2022-02-24T05:49:24.787Z"),
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