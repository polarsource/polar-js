# LicenseKeyActivationRead

## Example Usage

```typescript
import { LicenseKeyActivationRead } from "@polar-sh/sdk/models/components/licensekeyactivationread.js";

let value: LicenseKeyActivationRead = {
  id: "<value>",
  licenseKeyId: "<value>",
  label: "<value>",
  meta: {},
  createdAt: new Date("2024-11-11T21:41:22.916Z"),
  modifiedAt: new Date("2025-04-30T22:32:57.891Z"),
  licenseKey: {
    id: "<value>",
    createdAt: new Date("2025-06-17T09:52:47.691Z"),
    modifiedAt: new Date("2025-01-08T15:34:35.731Z"),
    organizationId: "<value>",
    customerId: "<value>",
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-05-26T00:47:20.880Z"),
      modifiedAt: new Date("2024-02-26T21:20:13.315Z"),
      metadata: {
        "key": 1857.67,
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
      deletedAt: new Date("2025-05-27T20:24:19.765Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    benefitId: "<value>",
    key: "<key>",
    displayKey: "<value>",
    status: "granted",
    limitActivations: null,
    usage: 130388,
    limitUsage: 516286,
    validations: 736079,
    lastValidatedAt: new Date("2025-03-29T11:53:32.986Z"),
    expiresAt: new Date("2024-09-04T02:54:48.765Z"),
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