# ~~CustomerSubscriptionPrice~~

> :warning: **DEPRECATED**: This will be removed in a future release, please migrate away from it as soon as possible.


## Supported Types

### `components.LegacyRecurringProductPrice`

```typescript
const value: components.LegacyRecurringProductPrice = {
  createdAt: new Date("2024-08-25T12:31:12.659Z"),
  modifiedAt: new Date("2023-09-13T01:01:31.367Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  recurringInterval: "month",
};
```

### `components.ProductPrice`

```typescript
const value: components.ProductPrice = {
  createdAt: new Date("2023-04-08T11:18:18.543Z"),
  modifiedAt: new Date("2023-02-07T01:55:36.963Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
};
```

