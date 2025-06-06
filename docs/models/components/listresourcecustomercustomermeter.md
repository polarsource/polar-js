# ListResourceCustomerCustomerMeter

## Example Usage

```typescript
import { ListResourceCustomerCustomerMeter } from "@polar-sh/sdk/models/components/listresourcecustomercustomermeter.js";

let value: ListResourceCustomerCustomerMeter = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2024-07-28T02:18:32.798Z"),
      modifiedAt: new Date("2025-12-14T17:21:36.219Z"),
      customerId: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
      consumedUnits: 25,
      creditedUnits: 100,
      balance: 75,
      meter: {
        createdAt: new Date("2025-01-05T10:33:28.821Z"),
        modifiedAt: new Date("2024-02-04T03:35:20.238Z"),
        id: "<value>",
        name: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 935537,
    maxPage: 425077,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.CustomerCustomerMeter](../../models/components/customercustomermeter.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |