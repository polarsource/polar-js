# CostMetadataOutput

## Example Usage

```typescript
import { CostMetadataOutput } from "@polar-sh/sdk/models/components/costmetadataoutput.js";

let value: CostMetadataOutput = {
  amount: "531.10",
  currency: "Vatu",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `amount`                                          | *string*                                          | :heavy_check_mark:                                | The amount in cents.                              |
| `currency`                                        | *string*                                          | :heavy_check_mark:                                | The currency. Currently, only `usd` is supported. |