# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
  items: [
    {
      createdAt: new Date("2023-11-10T06:40:42.932Z"),
      modifiedAt: new Date("2022-09-24T23:08:07.624Z"),
      id: "<value>",
      description: "confirm mid individual reboot",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      grants: [
        {
          createdAt: new Date("2024-02-25T19:18:44.351Z"),
          modifiedAt: new Date("2023-10-03T14:14:26.405Z"),
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
    totalCount: 91333,
    maxPage: 566262,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.UserBenefit*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |