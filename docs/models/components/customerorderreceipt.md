# CustomerOrderReceipt

Order's receipt data.

## Example Usage

```typescript
import { CustomerOrderReceipt } from "@polar-sh/sdk/models/components/customerorderreceipt.js";

let value: CustomerOrderReceipt = {
  url: "https://ideal-cutlet.name/",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `url`                       | *string*                    | :heavy_check_mark:          | The URL to the receipt PDF. |