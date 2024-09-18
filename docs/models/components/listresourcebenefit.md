# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components";

let value: ListResourceBenefit = {
  items: [
    {
      createdAt: new Date("2023-11-10T05:36:12.893Z"),
      modifiedAt: new Date("2022-12-26T19:41:24.967Z"),
      id: "<value>",
      description: "Customer-focused foreground utilisation",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 544647,
          timeframe: "day",
        },
        activations: {
          limit: 621693,
          enableUserAdmin: false,
        },
        limitUsage: 502721,
      },
    },
  ],
  pagination: {
    totalCount: 379356,
    maxPage: 922348,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |