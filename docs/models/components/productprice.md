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
  priceCurrency: "<value>",
  taxBehavior: null,
  isArchived: true,
  productId: "<value>",
  minimumAmount: 867213,
  maximumAmount: 508827,
  presetAmount: 793062,
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
  priceCurrency: "<value>",
  taxBehavior: "inclusive",
  isArchived: false,
  productId: "<value>",
  priceAmount: 286494,
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
  priceCurrency: "<value>",
  taxBehavior: "exclusive",
  isArchived: false,
  productId: "<value>",
  unitAmount: "<value>",
  capAmount: 700651,
  meterId: "<value>",
  meter: {
    id: "<value>",
    name: "<value>",
    unit: "scalar",
    customLabel: "<value>",
    customMultiplier: 471087,
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
  priceCurrency: "<value>",
  taxBehavior: "inclusive",
  isArchived: false,
  productId: "<value>",
  seatTiers: {
    tiers: [
      {
        minSeats: 35082,
        pricePerSeat: 375432,
      },
    ],
    minimumSeats: 940861,
    maximumSeats: 961303,
  },
};
```

