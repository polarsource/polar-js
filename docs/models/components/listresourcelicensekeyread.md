# ListResourceLicenseKeyRead

## Example Usage

```typescript
import { ListResourceLicenseKeyRead } from "@polar-sh/sdk/models/components/listresourcelicensekeyread.js";

let value: ListResourceLicenseKeyRead = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2024-12-20T06:39:15.874Z"),
      modifiedAt: new Date("2023-11-09T14:38:45.121Z"),
      organizationId: "<value>",
      customerId: "<value>",
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-06-29T06:03:41.518Z"),
        modifiedAt: new Date("2024-09-19T07:22:27.322Z"),
        metadata: {
          "key": false,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "FR",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2025-10-30T12:36:02.777Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "revoked",
      limitActivations: 185767,
      usage: 829086,
      limitUsage: 263069,
      validations: 800959,
      lastValidatedAt: new Date("2024-02-20T00:49:10.274Z"),
      expiresAt: new Date("2024-04-19T10:06:06.470Z"),
    },
  ],
  pagination: {
    totalCount: 285029,
    maxPage: 716504,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |