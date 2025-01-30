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
        email: "Dahlia20@hotmail.com",
        publicName: "<value>",
      },
      customer: {
        createdAt: new Date("2024-01-22T23:18:37.610Z"),
        modifiedAt: new Date("2024-03-01T13:30:13.678Z"),
        id: "<value>",
        metadata: {
          "key": 131173,
        },
        email: "Tristin_Halvorson24@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Cocos (Keeling) Islands",
        },
        taxId: [
          "ge_vat",
        ],
        organizationId: "<value>",
        avatarUrl: "https://small-barge.biz/",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "disabled",
      limitActivations: 319651,
      usage: 701679,
      limitUsage: 22860,
      validations: 590360,
      lastValidatedAt: new Date("2024-08-19T11:50:24.629Z"),
      expiresAt: new Date("2023-06-08T18:18:07.548Z"),
    },
  ],
  pagination: {
    totalCount: 118735,
    maxPage: 928155,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |