# ProductCreateOneTimePrices


## Supported Types

### `components.ProductPriceFixedCreate`

```typescript
const value: components.ProductPriceFixedCreate = {
  amountType: "fixed",
  priceAmount: 578074,
};
```

### `components.ProductPriceCustomCreate`

```typescript
const value: components.ProductPriceCustomCreate = {
  amountType: "custom",
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

