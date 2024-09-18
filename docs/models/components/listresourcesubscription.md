# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [],
  pagination: {
    totalCount: 228263,
    maxPage: 105906,
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `items`                                                                          | [components.SubscriptionOutput](../../models/components/subscriptionoutput.md)[] | :heavy_check_mark:                                                               | N/A                                                                              |
| `pagination`                                                                     | [components.Pagination](../../models/components/pagination.md)                   | :heavy_check_mark:                                                               | N/A                                                                              |