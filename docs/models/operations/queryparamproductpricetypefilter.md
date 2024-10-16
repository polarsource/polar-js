# QueryParamProductPriceTypeFilter

Filter by product price type. `recurring` will return orders corresponding to subscriptions creations or renewals. `one_time` will return orders corresponding to one-time purchases.


## Supported Types

### `components.ProductPriceType`

```typescript
const value: components.ProductPriceType = "one_time";
```

### `components.ProductPriceType[]`

```typescript
const value: components.ProductPriceType[] = [
  "one_time",
];
```

