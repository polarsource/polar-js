# ProductPriceTypeFilter

Filter by product price type. `recurring` will return orders corresponding to subscriptions creations or renewals. `one_time` will return orders corresponding to one-time purchases.

## Example Usage

```typescript
import { ProductPriceTypeFilter } from "@polar-sh/sdk/models/operations";

let value: ProductPriceTypeFilter = "one_time";
```

## Supported Types

### `components.ProductPriceType`

```typescript
const value: components.ProductPriceType = /* values here */
```

### `components.ProductPriceType[]`

```typescript
const value: components.ProductPriceType[] = /* values here */
```

