# ListResourceBenefitGrant

## Example Usage

```typescript
import { ListResourceBenefitGrant } from "@polar-sh/sdk/models/components/listresourcebenefitgrant.js";

let value: ListResourceBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-11-21T12:06:42.367Z"),
      modifiedAt: new Date("2023-12-31T20:50:06.920Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      customerId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-12-25T02:34:45.807Z"),
        modifiedAt: new Date("2023-04-18T05:33:58.255Z"),
        metadata: {
          "key": false,
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
        deletedAt: new Date("2025-07-27T07:18:37.950Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 645859,
    maxPage: 245217,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.BenefitGrant](../../models/components/benefitgrant.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |