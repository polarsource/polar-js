# LicenseKeyActivationRead

## Example Usage

```typescript
import { LicenseKeyActivationRead } from "@polar-sh/sdk/models/components";

let value: LicenseKeyActivationRead = {
  id: "<value>",
  licenseKeyId: "<value>",
  label: "<value>",
  meta: {},
  createdAt: new Date("2023-11-23T12:59:59.189Z"),
  modifiedAt: new Date("2022-02-05T23:54:40.915Z"),
  licenseKey: {
    id: "<value>",
    organizationId: "<value>",
    userId: "<value>",
    user: {
      id: "<value>",
      publicName: "<value>",
      email: "Nayeli84@gmail.com",
      avatarUrl: "https://moral-insolence.biz",
    },
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "disabled",
    limitActivations: 799857,
    usage: 863575,
    limitUsage: 225945,
    validations: 97903,
    lastValidatedAt: new Date("2024-02-05T11:53:56.680Z"),
    expiresAt: new Date("2024-09-27T19:31:42.820Z"),
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