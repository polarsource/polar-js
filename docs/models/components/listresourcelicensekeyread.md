# ListResourceLicenseKeyRead

## Example Usage

```typescript
import { ListResourceLicenseKeyRead } from "@polar-sh/sdk/models/components";

let value: ListResourceLicenseKeyRead = {
  items: [
    {
      id: "<value>",
      organizationId: "<value>",
      userId: "<value>",
      customerId: "<value>",
      user: {
        id: "<value>",
        email: "Frederick.Cassin@hotmail.com",
        publicName: "<value>",
      },
      customer: {
        createdAt: new Date("2023-04-11T23:24:18.548Z"),
        modifiedAt: new Date("2023-06-02T19:37:32.666Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Dameon_Bergnaum40@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Wallis and Futuna",
        },
        taxId: [
          "cr_tin",
        ],
        organizationId: "<value>",
        avatarUrl: "https://gifted-nun.biz/",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "revoked",
      limitActivations: 278278,
      usage: 44454,
      limitUsage: 413166,
      validations: 356620,
      lastValidatedAt: new Date("2023-09-27T11:53:41.126Z"),
      expiresAt: new Date("2024-08-02T18:04:30.206Z"),
    },
  ],
  pagination: {
    totalCount: 389623,
    maxPage: 949946,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |