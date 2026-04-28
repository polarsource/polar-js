# ListResourceCustomerBenefitGrant

## Example Usage

```typescript
import { ListResourceCustomerBenefitGrant } from "@polar-sh/sdk/models/components/listresourcecustomerbenefitgrant.js";

let value: ListResourceCustomerBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-10-01T12:22:46.823Z"),
      modifiedAt: new Date("2026-05-28T07:05:09.153Z"),
      id: "<value>",
      grantedAt: new Date("2026-03-02T17:39:16.099Z"),
      revokedAt: null,
      customerId: "<value>",
      benefitId: "<value>",
      subscriptionId: "<value>",
      orderId: "<value>",
      isGranted: false,
      isRevoked: false,
      customer: {
        createdAt: new Date("2024-10-05T17:24:11.012Z"),
        modifiedAt: new Date("2024-12-27T23:55:37.070Z"),
        id: "<value>",
        email: "Javonte_Bradtke81@yahoo.com",
        emailVerified: true,
        name: null,
        billingName: "<value>",
        billingAddress: {
          country: "US",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        oauthAccounts: {},
      },
      benefit: {
        id: "<value>",
        createdAt: new Date("2026-10-07T04:17:24.786Z"),
        modifiedAt: new Date("2026-05-05T02:01:44.871Z"),
        type: "license_keys",
        description: "light indeed mmm scary import cricket wear mysteriously",
        selectable: false,
        deletable: false,
        isDeleted: true,
        organizationId: "<value>",
        metadata: {
          "key": 455074,
        },
        organization: {
          createdAt: new Date("2026-08-25T19:07:42.873Z"),
          modifiedAt: new Date("2025-12-26T12:35:13.942Z"),
          id: "<value>",
          name: "<value>",
          slug: "<value>",
          avatarUrl: null,
          prorationBehavior: "reset",
          allowCustomerUpdates: false,
        },
        properties: {
          prefix: "<value>",
          expires: {
            ttl: 708691,
            timeframe: "day",
          },
          activations: {
            limit: 240022,
            enableCustomerAdmin: false,
          },
          limitUsage: 441892,
        },
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.CustomerBenefitGrant*[]                            | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |