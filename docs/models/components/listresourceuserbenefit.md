# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
  items: [
    {
      createdAt: new Date("2024-09-30T13:19:56.386Z"),
      modifiedAt: new Date("2022-01-22T01:52:48.321Z"),
      id: "<value>",
      description:
        "outrun lighthearted quizzically pleasing foolishly why beside",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 329961,
          timeframe: "day",
        },
        activations: {
          limit: 491784,
          enableUserAdmin: false,
        },
        limitUsage: 131116,
      },
      grants: [
        {
          createdAt: new Date("2022-09-30T06:35:01.392Z"),
          modifiedAt: new Date("2022-10-31T08:48:47.117Z"),
          id: "<value>",
          isGranted: false,
          isRevoked: false,
          subscriptionId: "<value>",
          orderId: "<value>",
          userId: "<value>",
          benefitId: "<value>",
          properties: {},
        },
      ],
    },
  ],
  pagination: {
    totalCount: 123546,
    maxPage: 463044,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.UserBenefit*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |