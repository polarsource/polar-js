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
        email: "Brad88@hotmail.com",
        publicName: "<value>",
      },
      customer: {
        createdAt: new Date("2024-03-02T00:36:18.406Z"),
        modifiedAt: new Date("2025-04-12T21:02:13.589Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        email: "Rhianna20@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Saint Vincent and the Grenadines",
        },
        taxId: [
          "ro_tin",
        ],
        organizationId: "<value>",
        avatarUrl: "https://understated-gift.biz/",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "revoked",
      limitActivations: 345865,
      usage: 709870,
      limitUsage: 694619,
      validations: 850108,
      lastValidatedAt: new Date("2025-12-24T22:33:51.471Z"),
      expiresAt: new Date("2025-05-26T07:43:46.615Z"),
    },
  ],
  pagination: {
    totalCount: 141549,
    maxPage: 762643,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |