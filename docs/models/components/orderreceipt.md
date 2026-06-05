# OrderReceipt

Order's receipt data.

## Example Usage

```typescript
import { OrderReceipt } from "@polar-sh/sdk/models/components/orderreceipt.js";

let value: OrderReceipt = {
  url: "https://worst-alligator.biz/",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `url`                       | *string*                    | :heavy_check_mark:          | The URL to the receipt PDF. |