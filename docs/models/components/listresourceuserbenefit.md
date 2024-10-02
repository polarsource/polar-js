# ListResourceUserBenefit

## Example Usage

```typescript
import { ListResourceUserBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceUserBenefit = {
  items: [
    {
      createdAt: new Date("2023-04-06T14:30:06.008Z"),
      modifiedAt: new Date("2024-09-09T18:38:44.004Z"),
      id: "<value>",
      description: "geez oxidise row a mmm",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {},
      grants: [
        {
          createdAt: new Date("2022-08-07T20:11:39.205Z"),
          modifiedAt: new Date("2024-08-05T00:10:24.690Z"),
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
    totalCount: 590573,
    maxPage: 969911,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.UserBenefit*[]                                     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |