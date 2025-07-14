# CustomerPortalBenefitGrantsUpdateRequest

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsUpdateRequest } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantsupdate.js";

let value: CustomerPortalBenefitGrantsUpdateRequest = {
  id: "<value>",
  customerBenefitGrantUpdate: {
    benefitType: "license_keys",
  },
};
```

## Fields

| Field                                   | Type                                    | Required                                | Description                             |
| --------------------------------------- | --------------------------------------- | --------------------------------------- | --------------------------------------- |
| `id`                                    | *string*                                | :heavy_check_mark:                      | The benefit grant ID.                   |
| `customerBenefitGrantUpdate`            | *components.CustomerBenefitGrantUpdate* | :heavy_check_mark:                      | N/A                                     |