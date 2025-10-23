# ProductCreateRecurringPrices


## Supported Types

### `components.ProductPriceCustomCreate`

```typescript
const value: components.ProductPriceCustomCreate = {
  amountType: "custom",
};
```

### `components.ProductPriceFixedCreate`

```typescript
const value: components.ProductPriceFixedCreate = {
  amountType: "fixed",
  priceAmount: 578074,
};
```

### `components.ProductPriceFreeCreate`

```typescript
const value: components.ProductPriceFreeCreate = {
  amountType: "free",
};
```

### `components.ProductPriceMeteredUnitCreate`

```typescript
const value: components.ProductPriceMeteredUnitCreate = {
  amountType: "metered_unit",
  meterId: "<value>",
  unitAmount: "<value>",
};
```

### `components.ProductPriceSeatBasedCreate`

```typescript
const value: components.ProductPriceSeatBasedCreate = {
  amountType: "seat_based",
  seatTiers: {
    tiers: [
      {
        minSeats: 922152,
        pricePerSeat: 415895,
      },
    ],
  },
};
```

