# ProductPrice


## Supported Types

### `components.ProductPriceFixed`

```typescript
const value: components.ProductPriceFixed = {
  createdAt: new Date("2025-01-07T03:36:18.419Z"),
  modifiedAt: new Date("2024-08-02T17:14:09.216Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "year",
  priceCurrency: "<value>",
  priceAmount: 362189,
};
```

### `components.ProductPriceCustom`

```typescript
const value: components.ProductPriceCustom = {
  createdAt: new Date("2024-05-30T19:56:59.856Z"),
  modifiedAt: new Date("2024-02-19T13:21:39.892Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceCurrency: "<value>",
  minimumAmount: 327988,
  maximumAmount: 680349,
  presetAmount: 63207,
};
```

### `components.ProductPriceFree`

```typescript
const value: components.ProductPriceFree = {
  createdAt: new Date("2024-10-27T13:05:15.123Z"),
  modifiedAt: new Date("2024-06-07T12:00:49.002Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "month",
};
```

### `components.ProductPriceMeteredUnit`

```typescript
const value: components.ProductPriceMeteredUnit = {
  createdAt: new Date("2024-07-17T21:44:35.519Z"),
  modifiedAt: new Date("2024-02-08T05:58:01.482Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "month",
  priceCurrency: "<value>",
  unitAmount: 970494,
  capAmount: 133439,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

