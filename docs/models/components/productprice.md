# ProductPrice


## Supported Types

### `components.ProductPriceCustom`

```typescript
const value: components.ProductPriceCustom = {
  createdAt: new Date("2023-06-12T19:38:31.503Z"),
  modifiedAt: new Date("2025-07-14T10:09:27.768Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 508827,
  maximumAmount: 793062,
  presetAmount: 879510,
};
```

### `components.ProductPriceFixed`

```typescript
const value: components.ProductPriceFixed = {
  createdAt: new Date("2025-12-26T12:23:44.317Z"),
  modifiedAt: new Date("2025-06-01T02:05:27.121Z"),
  id: "<value>",
  isArchived: true,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  priceAmount: 286494,
};
```

### `components.ProductPriceFree`

```typescript
const value: components.ProductPriceFree = {
  createdAt: new Date("2023-09-10T01:59:19.952Z"),
  modifiedAt: new Date("2023-06-15T13:47:01.466Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
};
```

### `components.ProductPriceMeteredUnit`

```typescript
const value: components.ProductPriceMeteredUnit = {
  createdAt: new Date("2023-10-22T15:18:33.510Z"),
  modifiedAt: null,
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  unitAmount: "<value>",
  capAmount: 700651,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

