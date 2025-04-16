# ListResourceBenefit

## Example Usage

```typescript
import { ListResourceBenefit } from "@polar-sh/sdk/models/components/listresourcebenefit.js";

let value: ListResourceBenefit = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2023-09-27T12:36:24.812Z"),
      modifiedAt: new Date("2024-11-08T01:17:28.121Z"),
      metadata: {
        "key": "<value>",
      },
      description: "hyena sarong under",
      selectable: false,
      deletable: false,
      organizationId: "<value>",
      properties: {
        prefix: "<value>",
        expires: {
          ttl: 390938,
          timeframe: "month",
        },
        activations: {
          limit: 66465,
          enableCustomerAdmin: false,
        },
        limitUsage: 116937,
      },
    },
  ],
  pagination: {
    totalCount: 737180,
    maxPage: 91241,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | *components.Benefit*[]                                         | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |