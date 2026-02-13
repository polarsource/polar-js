# OrganizationFeatureSettings

## Example Usage

```typescript
import { OrganizationFeatureSettings } from "@polar-sh/sdk/models/components/organizationfeaturesettings.js";

let value: OrganizationFeatureSettings = {};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `issueFundingEnabled`                                            | *boolean*                                                        | :heavy_minus_sign:                                               | If this organization has issue funding enabled                   |
| `seatBasedPricingEnabled`                                        | *boolean*                                                        | :heavy_minus_sign:                                               | If this organization has seat-based pricing enabled              |
| `revopsEnabled`                                                  | *boolean*                                                        | :heavy_minus_sign:                                               | If this organization has RevOps enabled                          |
| `walletsEnabled`                                                 | *boolean*                                                        | :heavy_minus_sign:                                               | If this organization has Wallets enabled                         |
| `memberModelEnabled`                                             | *boolean*                                                        | :heavy_minus_sign:                                               | If this organization has the Member model enabled                |
| `tinybirdRead`                                                   | *boolean*                                                        | :heavy_minus_sign:                                               | If this organization reads from Tinybird                         |
| `tinybirdCompare`                                                | *boolean*                                                        | :heavy_minus_sign:                                               | If this organization compares Tinybird results with database     |
| `presentmentCurrenciesEnabled`                                   | *boolean*                                                        | :heavy_minus_sign:                                               | If this organization has multiple presentment currencies enabled |
| `checkoutLocalizationEnabled`                                    | *boolean*                                                        | :heavy_minus_sign:                                               | If this organization has checkout localization enabled           |