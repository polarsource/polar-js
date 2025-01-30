# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components/listresourcebenefit.js";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2024-01-26T17:35:59.486Z"),
      modifiedAt: new Date("2024-08-12T22:20:42.028Z"),
      id: "<value>",
      description:
        "too drat connect providence hmph gnash stuff tarragon design merit",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 271465,
          timeframe: "month",
        },
        activations: {
          limit: 654297,
          enableCustomerAdmin: false,
        },
        limitUsage: 725592,
      },
    },
  ],
  pagination: {
    totalCount: 295726,
    maxPage: 47255,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |