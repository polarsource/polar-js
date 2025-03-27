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
        email: "Vesta14@gmail.com",
        publicName: "<value>",
      },
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2023-03-05T21:51:16.525Z"),
        modifiedAt: new Date("2024-08-12T14:34:33.232Z"),
        metadata: {
          "key": 201848,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "FR",
        },
        taxId: [
          "FR61954506077",
          "eu_vat",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2025-12-09T01:24:16.778Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "granted",
      limitActivations: 309725,
      usage: 924824,
      limitUsage: 50505,
      validations: 272025,
      lastValidatedAt: new Date("2024-08-07T14:15:09.120Z"),
      expiresAt: new Date("2025-03-22T06:08:43.995Z"),
    },
  ],
  pagination: {
    totalCount: 228056,
    maxPage: 300344,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |