# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
  items: [
    {
      createdAt: new Date("2024-07-19T12:50:57.168Z"),
      modifiedAt: new Date("2023-11-25T14:28:38.552Z"),
      id: "<value>",
      description: "veg certainly punctual sermon insist whose among",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
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
        },
      ],
      properties: {
        note: "<value>",
      },
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