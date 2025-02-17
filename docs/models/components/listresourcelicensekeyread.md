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
        email: "Cristian64@gmail.com",
        publicName: "<value>",
      },
      customer: {
        createdAt: new Date("2025-09-04T09:52:55.353Z"),
        modifiedAt: new Date("2025-01-15T18:51:08.358Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        email: "Aimee_Gleason22@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Tunisia",
        },
        taxId: [
          "bo_tin",
        ],
        organizationId: "<value>",
        avatarUrl: "https://cultivated-behest.name",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "granted",
      limitActivations: 471895,
      usage: 614513,
      limitUsage: 939103,
      validations: 921273,
      lastValidatedAt: new Date("2024-10-27T18:33:39.178Z"),
      expiresAt: new Date("2024-07-04T23:21:00.370Z"),
    },
  ],
  pagination: {
    totalCount: 650391,
    maxPage: 924966,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |