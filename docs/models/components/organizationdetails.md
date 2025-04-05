# OrganizationDetails

## Example Usage

```typescript
import { OrganizationDetails } from "@polar-sh/sdk/models/components/organizationdetails.js";

let value: OrganizationDetails = {
  about: "<value>",
  productDescription: "<value>",
  intendedUse: "<value>",
  customerAcquisition: [
    "<value>",
  ],
  futureAnnualRevenue: 330907,
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `about`                                                              | *string*                                                             | :heavy_check_mark:                                                   | Brief information about you and your business.                       |
| `productDescription`                                                 | *string*                                                             | :heavy_check_mark:                                                   | Description of digital products being sold.                          |
| `intendedUse`                                                        | *string*                                                             | :heavy_check_mark:                                                   | How the organization will integrate and use Polar.                   |
| `customerAcquisition`                                                | *string*[]                                                           | :heavy_check_mark:                                                   | Main customer acquisition channels.                                  |
| `futureAnnualRevenue`                                                | *number*                                                             | :heavy_check_mark:                                                   | Estimated revenue in the next 12 months                              |
| `switching`                                                          | *boolean*                                                            | :heavy_minus_sign:                                                   | Switching from another platform?                                     |
| `switchingFrom`                                                      | [components.SwitchingFrom](../../models/components/switchingfrom.md) | :heavy_minus_sign:                                                   | Which platform the organization is migrating from.                   |
| `previousAnnualRevenue`                                              | *number*                                                             | :heavy_minus_sign:                                                   | Revenue from last year if applicable.                                |