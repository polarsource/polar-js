# CustomerPortalBenefitGrantsUpdateRequest

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsUpdateRequest } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalBenefitGrantsUpdateRequest = {
  id: "<value>",
  customerBenefitGrantUpdate: {
    properties: {
      accountId: "<id>",
    },
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_check_mark:                      | The benefit grant ID.                   |
| `customerBenefitGrantUpdate`            | *components.CustomerBenefitGrantUpdate* | :heavy_check_mark:                      | N/A                                     |