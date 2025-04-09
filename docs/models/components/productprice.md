# ProductPrice


## Supported Types

### `components.ProductPriceFixed`

```typescript
const value: components.ProductPriceFixed = {
  createdAt: new Date("2025-12-26T12:23:44.317Z"),
  modifiedAt: new Date("2025-07-03T15:28:37.002Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceCurrency: "<value>",
  priceAmount: 593331,
};
```

### `components.ProductPriceCustom`

```typescript
const value: components.ProductPriceCustom = {
  createdAt: new Date("2023-06-12T19:38:31.503Z"),
  modifiedAt: new Date("2023-09-25T15:00:34.865Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 9926,
  maximumAmount: 338033,
  presetAmount: 867213,
};
```

### `components.ProductPriceFree`

```typescript
const value: components.ProductPriceFree = {
  createdAt: new Date("2023-09-10T01:59:19.952Z"),
  modifiedAt: new Date("2024-10-07T22:48:38.896Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "year",
};
```

### `components.ProductPriceMeteredUnit`

```typescript
const value: components.ProductPriceMeteredUnit = {
  createdAt: new Date("2023-10-22T15:18:33.510Z"),
  modifiedAt: new Date("2023-02-10T09:49:20.536Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  unitAmount: "<value>",
  capAmount: 912776,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

