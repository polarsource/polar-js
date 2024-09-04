# ProductPriceInput

## Example Usage

```typescript
import { ProductPriceInput } from "@polar-sh/sdk/models/components";

let value: ProductPriceInput = {
    createdAt: new Date("2022-01-29T05:29:52.473Z"),
    modifiedAt: new Date("2023-06-10T09:43:52.873Z"),
    id: "<value>",
    priceAmount: 57320,
    priceCurrency: "<value>",
    isArchived: false,
    recurringInterval: "year",
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

