# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
  items: [
    {
      createdAt: new Date("2024-09-21T21:00:27.770Z"),
      modifiedAt: new Date("2024-03-21T21:54:23.669Z"),
      id: "<value>",
      description: "Total multimedia internet solution",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {},
      grants: [
        {
          createdAt: new Date("2022-11-30T16:09:25.804Z"),
          modifiedAt: new Date("2024-12-29T18:23:56.613Z"),
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
    },
  ],
  pagination: {
    totalCount: 362189,
    maxPage: 470649,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.UserBenefit*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |