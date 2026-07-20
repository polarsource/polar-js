# OrganizationFeatureSettingsUpdate

Feature settings that organizations can update themselves.

Other feature settings are managed by Polar staff: they're ignored if
provided and keep their current value.

## Example Usage

```typescript
import { OrganizationFeatureSettingsUpdate } from "@polar-sh/sdk/models/components/organizationfeaturesettingsupdate.js";

let value: OrganizationFeatureSettingsUpdate = {};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `seatBasedPricingEnabled`                                     | *boolean*                                                     | :heavy_minus_sign:                                            | If this organization has seat-based pricing enabled           |
| `memberModelEnabled`                                          | *boolean*                                                     | :heavy_minus_sign:                                            | If this organization has the Member model enabled             |
| `checkoutLocalizationEnabled`                                 | *boolean*                                                     | :heavy_minus_sign:                                            | If this organization has checkout localization enabled        |
| `overviewMetrics`                                             | *string*[]                                                    | :heavy_minus_sign:                                            | Ordered list of metric slugs shown on the dashboard overview. |