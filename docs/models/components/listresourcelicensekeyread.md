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
        email: "Bessie.Sawayn91@gmail.com",
        publicName: "<value>",
      },
      customer: {
        createdAt: new Date("2024-06-18T17:26:23.980Z"),
        modifiedAt: new Date("2024-12-05T02:22:06.346Z"),
        id: "<value>",
        metadata: {
          "key": 889495,
        },
        email: "Reva.Heathcote@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Somalia",
        },
        taxId: [
          "sg_gst",
        ],
        organizationId: "<value>",
        avatarUrl: "https://subdued-vestment.org",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "granted",
      limitActivations: 392307,
      usage: 575206,
      limitUsage: 690546,
      validations: 464706,
      lastValidatedAt: new Date("2025-05-13T09:28:35.495Z"),
      expiresAt: new Date("2024-11-23T16:18:25.939Z"),
    },
  ],
  pagination: {
    totalCount: 595870,
    maxPage: 145395,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |