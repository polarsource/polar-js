# LicenseKeyActivationRead

## Example Usage

```typescript
import { LicenseKeyActivationRead } from "@polar-sh/sdk/models/components/licensekeyactivationread.js";

let value: LicenseKeyActivationRead = {
  id: "<value>",
  licenseKeyId: "<value>",
  label: "<value>",
  meta: {},
  createdAt: new Date("2024-08-04T03:55:20.343Z"),
  modifiedAt: new Date("2025-02-04T09:19:43.771Z"),
  licenseKey: {
    id: "<value>",
    organizationId: "<value>",
    userId: "<value>",
    customerId: "<value>",
    user: {
      id: "<value>",
      email: "Theresa84@yahoo.com",
      publicName: "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-08-11T00:02:38.927Z"),
      modifiedAt: new Date("2024-01-11T10:33:24.010Z"),
      metadata: {
        "key": false,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "granted",
    limitActivations: 152546,
    usage: 588889,
    limitUsage: 396101,
    validations: 423692,
    lastValidatedAt: new Date("2024-07-10T21:53:22.945Z"),
    expiresAt: new Date("2024-12-25T03:47:13.190Z"),
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