# CustomerStateBenefitGrant

An active benefit grant for a customer.

## Example Usage

```typescript
import { CustomerStateBenefitGrant } from "@polar-sh/sdk/models/components/customerstatebenefitgrant.js";

let value: CustomerStateBenefitGrant = {
  id: "d322132c-a9d0-4e0d-b8d3-d81ad021a3a9",
  createdAt: new Date("2025-06-12T11:40:46.096Z"),
  modifiedAt: new Date("2023-04-19T01:50:49.700Z"),
  grantedAt: new Date("2025-01-03T13:37:00Z"),
  benefitId: "397a17aa-15cf-4cb4-9333-18040203cf98",
  benefitType: "license_keys",
  properties: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the grant.                                                                          | d322132c-a9d0-4e0d-b8d3-d81ad021a3a9                                                          |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |                                                                                               |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |                                                                                               |
| `grantedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The timestamp when the benefit was granted.                                                   | 2025-01-03T13:37:00Z                                                                          |
| `benefitId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the benefit concerned by this grant.                                                | 397a17aa-15cf-4cb4-9333-18040203cf98                                                          |
| `benefitType`                                                                                 | [components.BenefitType](../../models/components/benefittype.md)                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |
| `properties`                                                                                  | *components.CustomerStateBenefitGrantProperties*                                              | :heavy_check_mark:                                                                            | N/A                                                                                           |                                                                                               |