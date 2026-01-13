# ProductPrice


## Supported Types

### `components.ProductPriceCustom`

```typescript
const value: components.ProductPriceCustom = {
  createdAt: new Date("2024-06-11T19:38:31.503Z"),
  modifiedAt: new Date("2026-07-14T10:09:27.768Z"),
  id: "<value>",
  source: "ad_hoc",
  amountType: "custom",
  isArchived: true,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "day",
  priceCurrency: "<value>",
  minimumAmount: 770732,
  maximumAmount: 124393,
  presetAmount: 74183,
};
```

### `components.ProductPriceFixed`

```typescript
const value: components.ProductPriceFixed = {
  createdAt: new Date("2026-12-26T12:23:44.317Z"),
  modifiedAt: new Date("2026-06-01T02:05:27.121Z"),
  id: "<value>",
  source: "catalog",
  amountType: "fixed",
  isArchived: false,
  productId: "<value>",
  type: "one_time",
  recurringInterval: "week",
  priceCurrency: "<value>",
  priceAmount: 589573,
};
```

### `components.ProductPriceFree`

```typescript
const value: components.ProductPriceFree = {
  createdAt: new Date("2024-09-09T01:59:19.952Z"),
  modifiedAt: new Date("2024-06-14T13:47:01.466Z"),
  id: "<value>",
  source: "ad_hoc",
  amountType: "free",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
};
```

### `components.ProductPriceMeteredUnit`

```typescript
const value: components.ProductPriceMeteredUnit = {
  createdAt: new Date("2024-10-21T15:18:33.510Z"),
  modifiedAt: null,
  id: "<value>",
  source: "ad_hoc",
  amountType: "metered_unit",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "week",
  priceCurrency: "<value>",
  unitAmount: "<value>",
  capAmount: 689871,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
  },
};
```

### `components.ProductPriceSeatBased`

```typescript
const value: components.ProductPriceSeatBased = {
  createdAt: new Date("2024-09-17T05:03:38.369Z"),
  modifiedAt: new Date("2026-08-16T14:25:55.727Z"),
  id: "<value>",
  source: "catalog",
  amountType: "seat_based",
  isArchived: false,
  productId: "<value>",
  type: "recurring",
  recurringInterval: "month",
  priceCurrency: "<value>",
  seatTiers: {
    tiers: [
      {
        minSeats: 415895,
        pricePerSeat: 164973,
      },
    ],
    minimumSeats: 562315,
    maximumSeats: 955772,
  },
};
```

