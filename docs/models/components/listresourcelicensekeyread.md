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
        email: "Gertrude7@yahoo.com",
        publicName: "<value>",
      },
      customer: {
        createdAt: new Date("2022-03-19T19:33:36.442Z"),
        modifiedAt: new Date("2022-11-24T11:33:05.047Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        email: "Cynthia.Thompson-Bernhard64@yahoo.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Malawi",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://multicolored-violin.com",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "revoked",
      limitActivations: 311724,
      usage: 612689,
      limitUsage: 203255,
      validations: 925393,
      lastValidatedAt: new Date("2023-04-25T23:05:43.722Z"),
      expiresAt: new Date("2023-04-19T05:18:51.847Z"),
    },
  ],
  pagination: {
    totalCount: 786325,
    maxPage: 907519,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |