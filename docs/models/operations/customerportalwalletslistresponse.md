# CustomerPortalWalletsListResponse

## Example Usage

```typescript
import { CustomerPortalWalletsListResponse } from "@polar-sh/sdk/models/operations/customerportalwalletslist.js";

let value: CustomerPortalWalletsListResponse = {
  result: {
    items: [
      {
        id: "<value>",
        createdAt: new Date("2023-03-24T21:59:08.847Z"),
        modifiedAt: new Date("2024-04-12T14:32:45.125Z"),
        customerId: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        balance: 5000,
        currency: "usd",
      },
    ],
    pagination: {
      totalCount: 607201,
      maxPage: 808600,
    },
  },
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `result`                                                                                       | [components.ListResourceCustomerWallet](../../models/components/listresourcecustomerwallet.md) | :heavy_check_mark:                                                                             | N/A                                                                                            |