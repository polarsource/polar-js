# LicenseKeyActivationRead

## Example Usage

```typescript
import { LicenseKeyActivationRead } from "@polar-sh/sdk/models/components/licensekeyactivationread.js";

let value: LicenseKeyActivationRead = {
  id: "<value>",
  licenseKeyId: "<value>",
  label: "<value>",
  meta: {
    "key": "<value>",
  },
  createdAt: new Date("2024-11-11T21:41:22.916Z"),
  modifiedAt: new Date("2025-04-10T22:51:31.196Z"),
  licenseKey: {
    id: "<value>",
    createdAt: new Date("2025-04-30T22:32:57.891Z"),
    modifiedAt: new Date("2025-06-17T09:52:47.691Z"),
    organizationId: "<value>",
    customerId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-01-12T11:27:38.061Z"),
      modifiedAt: new Date("2025-01-08T15:34:35.731Z"),
      metadata: {
        "key": "<value>",
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
      deletedAt: new Date("2025-06-27T03:58:57.144Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "revoked",
    limitActivations: 736079,
    usage: 264718,
    limitUsage: 746803,
    validations: 646630,
    lastValidatedAt: new Date("2024-09-04T02:54:48.765Z"),
    expiresAt: new Date("2025-01-08T07:31:26.975Z"),
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `licenseKeyId`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `label`                                                                                       | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `meta`                                                                                        | Record<string, *components.LicenseKeyActivationReadMeta*>                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `licenseKey`                                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)                        | :heavy_check_mark:                                                                            | N/A                                                                                           |