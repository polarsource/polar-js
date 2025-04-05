# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components/listresourcebenefit.js";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2023-09-27T12:36:24.812Z"),
      modifiedAt: new Date("2024-11-08T01:17:28.121Z"),
      id: "<value>",
      description: "yippee license annual",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 879846,
          timeframe: "month",
        },
        activations: {
          limit: 481078,
          enableCustomerAdmin: false,
        },
        limitUsage: 66465,
      },
    },
  ],
  pagination: {
    totalCount: 116937,
    maxPage: 737180,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |