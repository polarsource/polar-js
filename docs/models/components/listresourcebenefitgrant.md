# ListResourceBenefitGrant

## Example Usage

```typescript
import { ListResourceBenefitGrant } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-10-09T22:41:15.933Z"),
      modifiedAt: new Date("2023-10-30T11:14:17.437Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      customerId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
      customer: {
        createdAt: new Date("2023-01-25T13:17:01.010Z"),
        modifiedAt: new Date("2025-01-21T08:21:59.543Z"),
        id: "<value>",
        metadata: {
          "key": 724231,
        },
        email: "Justina_Considine22@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Burkina Faso",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://overcooked-seafood.biz",
      },
      properties: {},
    },
  ],
  pagination: {
    totalCount: 898908,
    maxPage: 533956,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.BenefitGrant](../../models/components/benefitgrant.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |