# ListResourceUserSubscription

## Example Usage

```typescript
import { ListResourceUserSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceUserSubscription = {
  items: [],
  pagination: {
    totalCount: 63955,
    maxPage: 512393,
  },
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.UserSubscription](../../models/components/usersubscription.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |
| `pagination`                                                                 | [components.Pagination](../../models/components/pagination.md)               | :heavy_check_mark:                                                           | N/A                                                                          |