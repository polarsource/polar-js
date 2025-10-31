# ListResourceCustomerWallet

## Example Usage

```typescript
import { ListResourceCustomerWallet } from "@polar-sh/sdk/models/components/listresourcecustomerwallet.js";

let value: ListResourceCustomerWallet = {
  items: [],
  pagination: {
    totalCount: 607201,
    maxPage: 808600,
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [components.CustomerWallet](../../models/components/customerwallet.md)[] | :heavy_check_mark:                                                       | N/A                                                                      |
| `pagination`                                                             | [components.Pagination](../../models/components/pagination.md)           | :heavy_check_mark:                                                       | N/A                                                                      |