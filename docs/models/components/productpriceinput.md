# ProductPriceInput

## Example Usage

```typescript
import { ProductPriceInput } from "@polar-sh/sdk/models/components";

let value: ProductPriceInput = {
    createdAt: new Date("2022-02-05T08:54:59.720Z"),
    modifiedAt: new Date("2023-04-04T05:56:40.707Z"),
    id: "<value>",
    priceAmount: 456688,
    priceCurrency: "<value>",
    isArchived: false,
    recurringInterval: "month",
};
```

## Supported Types

### `components.ProductPriceOneTime`

```typescript
const value: components.ProductPriceOneTime = /* values here */
```

### `components.ProductPriceRecurring`

```typescript
const value: components.ProductPriceRecurring = /* values here */
```

