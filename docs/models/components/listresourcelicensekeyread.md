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
        email: "Zoe83@gmail.com",
        publicName: "<value>",
      },
      customer: {
        createdAt: new Date("2024-12-26T16:52:12.542Z"),
        modifiedAt: new Date("2023-08-29T06:32:45.499Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Myah_Goldner@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Montserrat",
        },
        taxId: [
          "rs_pib",
        ],
        organizationId: "<value>",
        avatarUrl: "https://acceptable-volleyball.info",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "revoked",
      limitActivations: 367683,
      usage: 844364,
      limitUsage: 736793,
      validations: 178911,
      lastValidatedAt: new Date("2023-03-24T06:29:34.406Z"),
      expiresAt: new Date("2022-01-03T23:43:26.209Z"),
    },
  ],
  pagination: {
    totalCount: 803114,
    maxPage: 236280,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |