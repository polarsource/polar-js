# LicenseKeyActivationRead

## Example Usage

```typescript
import { LicenseKeyActivationRead } from "@polar-sh/sdk/models/components";

let value: LicenseKeyActivationRead = {
  id: "<value>",
  licenseKeyId: "<value>",
  label: "<value>",
  meta: {},
  createdAt: new Date("2024-11-25T22:49:11.497Z"),
  modifiedAt: new Date("2025-12-02T06:51:15.837Z"),
  licenseKey: {
    id: "<value>",
    organizationId: "<value>",
    userId: "<value>",
    customerId: "<value>",
    user: {
      id: "<value>",
      email: "Cornell.Runolfsson89@gmail.com",
      publicName: "<value>",
    },
    customer: {
      createdAt: new Date("2025-02-25T22:59:52.460Z"),
      modifiedAt: new Date("2025-04-13T13:33:13.010Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Mitchel_Howell@gmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "United Kingdom",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://strident-digit.com/",
    },
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "granted",
    limitActivations: 985677,
    usage: 413308,
    limitUsage: 395967,
    validations: 757018,
    lastValidatedAt: new Date("2023-03-10T18:18:16.044Z"),
    expiresAt: new Date("2023-07-05T19:31:24.943Z"),
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