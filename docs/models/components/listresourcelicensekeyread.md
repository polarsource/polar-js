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
        email: "Angela_Schinner56@gmail.com",
        publicName: "<value>",
      },
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2024-03-19T23:08:02.167Z"),
        modifiedAt: new Date("2023-04-27T21:02:57.653Z"),
        metadata: {
          "key": 840168,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "SE",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2023-07-01T20:08:02.445Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "disabled",
      limitActivations: 691226,
      usage: 198041,
      limitUsage: 810142,
      validations: 280855,
      lastValidatedAt: new Date("2024-09-01T01:32:00.618Z"),
      expiresAt: new Date("2023-12-04T05:53:21.167Z"),
    },
  ],
  pagination: {
    totalCount: 693117,
    maxPage: 375675,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |