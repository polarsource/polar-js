# WalletsListResponse

## Example Usage

```typescript
import { WalletsListResponse } from "@polar-sh/sdk/models/operations/walletslist.js";

let value: WalletsListResponse = {
  result: {
    items: [],
    pagination: {
      totalCount: 607201,
      maxPage: 808600,
    },
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `result`                                                                       | [components.ListResourceWallet](../../models/components/listresourcewallet.md) | :heavy_check_mark:                                                             | N/A                                                                            |