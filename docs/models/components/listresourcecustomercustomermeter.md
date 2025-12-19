# ListResourceCustomerCustomerMeter

## Example Usage

```typescript
import { ListResourceCustomerCustomerMeter } from "@polar-sh/sdk/models/components/listresourcecustomercustomermeter.js";

let value: ListResourceCustomerCustomerMeter = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2023-12-07T07:26:26.021Z"),
      modifiedAt: new Date("2025-11-26T21:40:33.194Z"),
      customerId: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
      consumedUnits: 25,
      creditedUnits: 100,
      balance: 75,
      meter: {
        createdAt: new Date("2024-07-09T14:31:46.959Z"),
        modifiedAt: new Date("2024-10-28T13:02:25.281Z"),
        id: "<value>",
        name: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 296266,
    maxPage: 544155,
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `items`                                                                                | [components.CustomerCustomerMeter](../../models/components/customercustomermeter.md)[] | :heavy_check_mark:                                                                     | N/A                                                                                    |
| `pagination`                                                                           | [components.Pagination](../../models/components/pagination.md)                         | :heavy_check_mark:                                                                     | N/A                                                                                    |