# CustomerPortalCustomerMetersListResponse

## Example Usage

```typescript
import { CustomerPortalCustomerMetersListResponse } from "@polar-sh/sdk/models/operations/customerportalcustomermeterslist.js";

let value: CustomerPortalCustomerMetersListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2024-12-18T19:03:05.416Z"),
        modifiedAt: new Date("2023-12-07T07:26:26.021Z"),
        customerId: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        meterId: "d498a884-e2cd-4d3e-8002-f536468a8b22",
        consumedUnits: 25,
        creditedUnits: 100,
        balance: 75,
        meter: {
          createdAt: new Date("2025-11-30T13:18:20.135Z"),
          modifiedAt: new Date("2025-11-26T21:40:33.194Z"),
          id: "<value>",
          name: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 506939,
      maxPage: 196566,
    },
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `result`                                                                                                     | [components.ListResourceCustomerCustomerMeter](../../models/components/listresourcecustomercustomermeter.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |