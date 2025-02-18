# LicenseKeyActivationRead

## Example Usage

```typescript
import { LicenseKeyActivationRead } from "@polar-sh/sdk/models/components/licensekeyactivationread.js";

let value: LicenseKeyActivationRead = {
  id: "<value>",
  licenseKeyId: "<value>",
  label: "<value>",
  meta: {},
  createdAt: new Date("2024-04-17T04:00:42.753Z"),
  modifiedAt: new Date("2024-05-30T08:15:17.595Z"),
  licenseKey: {
    id: "<value>",
    organizationId: "<value>",
    userId: "<value>",
    customerId: "<value>",
    user: {
      id: "<value>",
      email: "Franco89@hotmail.com",
      publicName: "<value>",
    },
    customer: {
      createdAt: new Date("2023-08-16T14:40:51.811Z"),
      modifiedAt: new Date("2023-08-27T00:10:13.525Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Constance_Gutmann45@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Guernsey",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://superb-rawhide.info/",
    },
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "disabled",
    limitActivations: 338709,
    usage: 935836,
    limitUsage: 500782,
    validations: 111203,
    lastValidatedAt: new Date("2024-06-04T19:11:08.158Z"),
    expiresAt: new Date("2024-01-30T16:52:49.455Z"),
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