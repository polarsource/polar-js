# LicenseKeyActivationRead

## Example Usage

```typescript
import { LicenseKeyActivationRead } from "@polar-sh/sdk/models/components/licensekeyactivationread.js";

let value: LicenseKeyActivationRead = {
  id: "<value>",
  licenseKeyId: "<value>",
  label: "<value>",
  meta: {},
  createdAt: new Date("2025-10-10T14:33:56.119Z"),
  modifiedAt: new Date("2023-02-25T08:29:39.215Z"),
  licenseKey: {
    id: "<value>",
    organizationId: "<value>",
    userId: "<value>",
    customerId: "<value>",
    user: {
      id: "<value>",
      email: "Kacie.Farrell@gmail.com",
      publicName: "<value>",
    },
    customer: {
      createdAt: new Date("2024-07-06T18:19:06.566Z"),
      modifiedAt: new Date("2025-09-12T13:15:58.455Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      externalId: "<id>",
      email: "Kiara.Bernier19@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Curacao",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://grim-swine.biz/",
    },
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "granted",
    limitActivations: 76002,
    usage: 924861,
    limitUsage: 194346,
    validations: 572268,
    lastValidatedAt: new Date("2024-02-14T14:16:24.671Z"),
    expiresAt: new Date("2024-08-31T14:36:16.716Z"),
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