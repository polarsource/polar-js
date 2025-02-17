# LicenseKeyActivationRead

## Example Usage

```typescript
import { LicenseKeyActivationRead } from "@polar-sh/sdk/models/components/licensekeyactivationread.js";

let value: LicenseKeyActivationRead = {
  id: "<value>",
  licenseKeyId: "<value>",
  label: "<value>",
  meta: {},
  createdAt: new Date("2025-10-02T08:39:37.015Z"),
  modifiedAt: new Date("2025-05-19T10:16:04.212Z"),
  licenseKey: {
    id: "<value>",
    organizationId: "<value>",
    userId: "<value>",
    customerId: "<value>",
    user: {
      id: "<value>",
      email: "Woodrow.Auer91@gmail.com",
      publicName: "<value>",
    },
    customer: {
      createdAt: new Date("2025-10-12T20:17:36.677Z"),
      modifiedAt: new Date("2024-11-05T10:30:44.673Z"),
      id: "<value>",
      metadata: {
        "key": 365827,
      },
      email: "Hiram30@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Mongolia",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://circular-numeracy.net/",
    },
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "revoked",
    limitActivations: 915661,
    usage: 125535,
    limitUsage: 487889,
    validations: 642426,
    lastValidatedAt: new Date("2024-09-16T06:51:59.563Z"),
    expiresAt: new Date("2025-09-01T21:15:30.000Z"),
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