# ListResourceBenefitGrant

## Example Usage

```typescript
import { ListResourceBenefitGrant } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefitGrant = {
  items: [
    {
      createdAt: new Date("2024-09-30T03:17:45.166Z"),
      modifiedAt: new Date("2022-06-17T16:03:26.154Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      customerId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
      properties: {},
    },
  ],
  pagination: {
    totalCount: 59303,
    maxPage: 58922,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.BenefitGrant](../../models/components/benefitgrant.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |