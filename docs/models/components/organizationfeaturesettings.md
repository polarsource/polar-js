# OrganizationFeatureSettings

## Example Usage

```typescript
import { OrganizationFeatureSettings } from "@polar-sh/sdk/models/components/organizationfeaturesettings.js";

let value: OrganizationFeatureSettings = {};
```

## Fields

| Field                                               | Type                                                | Required                                            | Description                                         |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| `issueFundingEnabled`                               | *boolean*                                           | :heavy_minus_sign:                                  | If this organization has issue funding enabled      |
| `seatBasedPricingEnabled`                           | *boolean*                                           | :heavy_minus_sign:                                  | If this organization has seat-based pricing enabled |
| `revopsEnabled`                                     | *boolean*                                           | :heavy_minus_sign:                                  | If this organization has RevOps enabled             |
| `walletsEnabled`                                    | *boolean*                                           | :heavy_minus_sign:                                  | If this organization has Wallets enabled            |