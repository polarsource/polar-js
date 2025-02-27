# ListResourceLicenseKeyRead

## Example Usage

```typescript
import { ListResourceLicenseKeyRead } from "@polar-sh/sdk/models/components/listresourcelicensekeyread.js";

let value: ListResourceLicenseKeyRead = {
  items: [
    {
      id: "<value>",
      organizationId: "<value>",
      userId: "<value>",
      customerId: "<value>",
      user: {
        id: "<value>",
        email: "Adrienne_Harris@hotmail.com",
        publicName: "<value>",
      },
      customer: {
        createdAt: new Date("2025-03-30T01:55:43.067Z"),
        modifiedAt: new Date("2023-03-23T05:06:34.442Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        externalId: "<id>",
        email: "Elliot_Turner51@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Togo",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://neglected-custom.info/",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "disabled",
      limitActivations: 563474,
      usage: 762279,
      limitUsage: 761965,
      validations: 753580,
      lastValidatedAt: new Date("2023-06-08T00:44:14.730Z"),
      expiresAt: new Date("2024-12-13T14:53:56.296Z"),
    },
  ],
  pagination: {
    totalCount: 480180,
    maxPage: 62091,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |