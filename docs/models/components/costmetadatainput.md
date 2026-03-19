# CostMetadataInput

## Example Usage

```typescript
import { CostMetadataInput } from "@polar-sh/sdk/models/components/costmetadatainput.js";

let value: CostMetadataInput = {
  amount: 749.24,
  currency: "Ouguiya",
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `amount`                                          | *components.Amount*                               | :heavy_check_mark:                                | The amount in cents.                              |
| `currency`                                        | *string*                                          | :heavy_check_mark:                                | The currency. Currently, only `usd` is supported. |