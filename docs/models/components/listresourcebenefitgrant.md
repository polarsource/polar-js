# ListResourceBenefitGrant

## Example Usage

```typescript
import { ListResourceBenefitGrant } from "@polar-sh/sdk/models/components/listresourcebenefitgrant.js";

let value: ListResourceBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-12-28T15:28:03.893Z"),
      modifiedAt: new Date("2025-04-15T06:22:03.126Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      customerId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
      customer: {
        createdAt: new Date("2023-06-10T08:23:28.124Z"),
        modifiedAt: new Date("2023-04-14T01:23:42.431Z"),
        id: "<value>",
        metadata: {
          "key": 481828,
        },
        externalId: "<id>",
        email: "Oma_Volkman@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Iceland",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://front-lobster.name",
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 10686,
    maxPage: 348739,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.BenefitGrant](../../models/components/benefitgrant.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |