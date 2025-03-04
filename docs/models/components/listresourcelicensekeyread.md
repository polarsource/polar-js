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
        email: "Ardith.Johns53@hotmail.com",
        publicName: "<value>",
      },
      customer: {
        createdAt: new Date("2023-03-28T17:01:37.333Z"),
        modifiedAt: new Date("2024-05-27T11:11:35.681Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        externalId: "<id>",
        email: "Emerson_Abshire5@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Angola",
        },
        taxId: [
          "au_abn",
        ],
        organizationId: "<value>",
        avatarUrl: "https://radiant-fedora.com/",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "granted",
      limitActivations: 714693,
      usage: 378278,
      limitUsage: 820286,
      validations: 738980,
      lastValidatedAt: new Date("2024-10-04T05:47:27.023Z"),
      expiresAt: new Date("2023-04-14T13:04:44.229Z"),
    },
  ],
  pagination: {
    totalCount: 982000,
    maxPage: 520673,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |