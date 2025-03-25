# Address

## Example Usage

```typescript
import { Address } from "@polar-sh/sdk/models/components/address.js";

let value: Address = {
  country: "US",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `line1`            | *string*           | :heavy_minus_sign: | N/A                |                    |
| `line2`            | *string*           | :heavy_minus_sign: | N/A                |                    |
| `postalCode`       | *string*           | :heavy_minus_sign: | N/A                |                    |
| `city`             | *string*           | :heavy_minus_sign: | N/A                |                    |
| `state`            | *string*           | :heavy_minus_sign: | N/A                |                    |
| `country`          | *string*           | :heavy_check_mark: | N/A                | US                 |