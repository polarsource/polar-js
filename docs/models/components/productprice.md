# ProductPrice


## Supported Types

### `components.ProductPriceFixed`

```typescript
const value: components.ProductPriceFixed = {
  createdAt: new Date("2024-08-11T11:13:21.434Z"),
  modifiedAt: new Date("2023-05-02T01:59:23.739Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "month",
  priceCurrency: "<value>",
  priceAmount: 321043,
};
```

### `components.ProductPriceCustom`

```typescript
const value: components.ProductPriceCustom = {
  createdAt: new Date("2023-02-02T19:48:48.046Z"),
  modifiedAt: new Date("2025-03-19T00:44:08.150Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "year",
  priceCurrency: "<value>",
  minimumAmount: 703218,
  maximumAmount: 634786,
  presetAmount: 959143,
};
```

### `components.ProductPriceFree`

```typescript
const value: components.ProductPriceFree = {
  createdAt: new Date("2023-04-24T05:09:16.816Z"),
  modifiedAt: new Date("2025-08-08T09:57:53.832Z"),
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
  createdAt: new Date("2024-03-19T01:13:26.854Z"),
  modifiedAt: new Date("2024-07-28T12:07:56.150Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "month",
  unitAmount: 19122,
  includedUnits: 518150,
  capAmount: 842777,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

