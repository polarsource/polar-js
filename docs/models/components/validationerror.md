# ValidationError

## Example Usage

```typescript
import { ValidationError } from "@polar-sh/sdk/models/components/validationerror.js";

let value: ValidationError = {
  loc: [
    929957,
  ],
  msg: "<value>",
  type: "<value>",
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `loc`                                                    | *components.Loc*[]                                       | :heavy_check_mark:                                       | N/A                                                      |
| `msg`                                                    | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `type`                                                   | *string*                                                 | :heavy_check_mark:                                       | N/A                                                      |
| `input`                                                  | *any*                                                    | :heavy_minus_sign:                                       | N/A                                                      |
| `ctx`                                                    | [components.Context](../../models/components/context.md) | :heavy_minus_sign:                                       | N/A                                                      |