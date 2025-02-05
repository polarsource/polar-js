# Filter

## Example Usage

```typescript
import { Filter } from "@polar-sh/sdk/models/components/filter.js";

let value: Filter = {
  conjunction: "and",
  clauses: [],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `conjunction`                                                                | [components.FilterConjunction](../../models/components/filterconjunction.md) | :heavy_check_mark:                                                           | N/A                                                                          |
| `clauses`                                                                    | *components.Clauses*[]                                                       | :heavy_check_mark:                                                           | N/A                                                                          |