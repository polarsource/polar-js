# LicenseKeyActivationRead

## Example Usage

```typescript
import { LicenseKeyActivationRead } from "@polar-sh/sdk/models/components";

let value: LicenseKeyActivationRead = {
  id: "<value>",
  licenseKeyId: "<value>",
  label: "<value>",
  meta: {},
  createdAt: new Date("2024-01-23T09:56:09.230Z"),
  modifiedAt: new Date("2023-02-10T02:38:46.323Z"),
  licenseKey: {
    id: "<value>",
    organizationId: "<value>",
    userId: "<value>",
    customerId: "<value>",
    user: {
      id: "<value>",
      email: "Marco.DuBuque47@hotmail.com",
      publicName: "<value>",
    },
    customer: {
      createdAt: new Date("2024-07-19T04:11:44.002Z"),
      modifiedAt: new Date("2025-09-05T03:00:40.973Z"),
      id: "<value>",
      metadata: {
        "key": 369529,
      },
      email: "Maurice.Larson@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Malta",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://merry-sonar.biz",
    },
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "disabled",
    limitActivations: 578185,
    usage: 75685,
    limitUsage: 313717,
    validations: 982685,
    lastValidatedAt: new Date("2024-11-03T05:08:26.435Z"),
    expiresAt: new Date("2024-04-05T01:01:35.221Z"),
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