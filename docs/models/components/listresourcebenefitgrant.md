# ListResourceBenefitGrant

## Example Usage

```typescript
import { ListResourceBenefitGrant } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefitGrant = {
  items: [
    {
      createdAt: new Date("2023-05-31T19:56:59.817Z"),
      modifiedAt: new Date("2023-12-13T09:21:23.434Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      properties: {},
      subscriptionId: "<value>",
      orderId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
    },
  ],
  pagination: {
    totalCount: 378245,
    maxPage: 5189,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.BenefitGrant](../../models/components/benefitgrant.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |