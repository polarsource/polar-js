# ProductPriceOutput


## Supported Types

### `components.ProductPriceCustomOutput`

```typescript
const value: components.ProductPriceCustomOutput = {
  createdAt: new Date("2025-03-30T14:24:30.734Z"),
  modifiedAt: new Date("2023-03-24T10:27:49.678Z"),
  id: "<value>",
  amountType: "custom",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "week",
  priceCurrency: "<value>",
  minimumAmount: 958646,
  maximumAmount: 563198,
  presetAmount: null,
};
```

### `components.ProductPriceFixedOutput`

```typescript
const value: components.ProductPriceFixedOutput = {
  createdAt: new Date("2024-01-01T17:25:39.269Z"),
  modifiedAt: new Date("2025-10-21T20:19:28.937Z"),
  id: "<value>",
  amountType: "fixed",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "week",
  priceCurrency: "<value>",
  priceAmount: 672496,
};
```

### `components.ProductPriceFreeOutput`

```typescript
const value: components.ProductPriceFreeOutput = {
  createdAt: new Date("2025-06-16T16:31:00.978Z"),
  modifiedAt: new Date("2024-04-13T14:48:23.147Z"),
  id: "<value>",
  amountType: "free",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "day",
};
```

### `components.ProductPriceMeteredUnitOutput`

```typescript
const value: components.ProductPriceMeteredUnitOutput = {
  createdAt: new Date("2023-12-22T07:36:37.150Z"),
  modifiedAt: new Date("2023-08-16T22:50:52.440Z"),
  id: "<value>",
  amountType: "metered_unit",
  isArchived: true,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "week",
  priceCurrency: "<value>",
  unitAmount: "<value>",
  capAmount: 868923,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

### `components.ProductPriceSeatBasedOutput`

```typescript
const value: components.ProductPriceSeatBasedOutput = {
  createdAt: new Date("2023-10-14T13:28:47.289Z"),
  modifiedAt: new Date("2024-06-24T07:23:48.462Z"),
  id: "<value>",
  amountType: "seat_based",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "year",
  priceCurrency: "<value>",
  seatTiers: {
    tiers: [
      {
        minSeats: 63601,
        pricePerSeat: 931587,
      },
    ],
  },
};
```

