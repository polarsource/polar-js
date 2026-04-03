# ListResourceLicenseKeyRead

## Example Usage

```typescript
import { ListResourceLicenseKeyRead } from "@polar-sh/sdk/models/components/listresourcelicensekeyread.js";

let value: ListResourceLicenseKeyRead = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2024-11-08T14:38:45.121Z"),
      modifiedAt: new Date("2025-09-19T07:22:27.322Z"),
      organizationId: "<value>",
      customerId: "<value>",
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2026-05-26T00:47:20.880Z"),
        modifiedAt: new Date("2025-02-25T21:20:13.315Z"),
        metadata: {
          "key": 1857.67,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        type: "team",
        name: "John Doe",
        billingAddress: {
          country: "US",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2025-02-19T00:49:10.274Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
      },
      benefitId: "<value>",
      key: "<key>",
      displayKey: "<value>",
      status: "revoked",
      limitActivations: 716504,
      usage: 666467,
      limitUsage: 123846,
      validations: 49160,
      lastValidatedAt: new Date("2026-03-15T01:26:29.809Z"),
      expiresAt: null,
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.LicenseKeyRead](../../models/components/licensekeyread.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |