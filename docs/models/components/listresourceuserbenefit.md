# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
  items: [
    {
      createdAt: new Date("2023-03-25T06:54:06.627Z"),
      modifiedAt: new Date("2022-12-31T03:28:31.793Z"),
      id: "<value>",
      description:
        "delight provided stay appertain so quintessential until enroll upsell pish",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 28256,
          timeframe: "year",
        },
        activations: {
          limit: 102071,
          enableUserAdmin: false,
        },
        limitUsage: 756936,
      },
      grants: [
        {
          createdAt: new Date("2023-01-08T06:10:49.913Z"),
          modifiedAt: new Date("2023-12-01T05:07:28.563Z"),
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
    totalCount: 603783,
    maxPage: 385828,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.UserBenefit*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |