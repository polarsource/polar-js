# BenefitGrantDownloadablesWebhook

## Example Usage

```typescript
import { BenefitGrantDownloadablesWebhook } from "@polar-sh/sdk/models/components/benefitgrantdownloadableswebhook.js";

let value: BenefitGrantDownloadablesWebhook = {
  createdAt: new Date("2025-09-16T06:48:34.889Z"),
  modifiedAt: new Date("2023-05-19T09:10:18.729Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: false,
  subscriptionId: null,
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-04-26T10:19:45.222Z"),
    modifiedAt: new Date("2025-02-01T06:50:40.155Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-01T02:27:46.266Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-02-09T09:21:30.385Z"),
    modifiedAt: new Date("2023-09-01T08:02:14.520Z"),
    type: "downloadables",
    description: "gladly rapidly record excluding because ill",
    selectable: false,
    deletable: true,
    organizationId: "<value>",
    metadata: {
      "key": 834881,
    },
    properties: {
      archived: {
        "key": false,
      },
      files: [
        "<value 1>",
        "<value 2>",
      ],
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Creation timestamp of the object.                                                                                |
| `modifiedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Last modification timestamp of the object.                                                                       |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the grant.                                                                                             |
| `grantedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | The timestamp when the benefit was granted. If `None`, the benefit is not granted.                               |
| `isGranted`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the benefit is granted.                                                                                  |
| `revokedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_minus_sign:                                                                                               | The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.                               |
| `isRevoked`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the benefit is revoked.                                                                                  |
| `subscriptionId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the subscription that granted this benefit.                                                            |
| `orderId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the order that granted this benefit.                                                                   |
| `customerId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the customer concerned by this grant.                                                                  |
| `benefitId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the benefit concerned by this grant.                                                                   |
| `error`                                                                                                          | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                                     | :heavy_minus_sign:                                                                                               | The error information if the benefit grant failed with an unrecoverable error.                                   |
| `customer`                                                                                                       | [components.Customer](../../models/components/customer.md)                                                       | :heavy_check_mark:                                                                                               | A customer in an organization.                                                                                   |
| `benefit`                                                                                                        | [components.BenefitDownloadables](../../models/components/benefitdownloadables.md)                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `properties`                                                                                                     | [components.BenefitGrantDownloadablesProperties](../../models/components/benefitgrantdownloadablesproperties.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `previousProperties`                                                                                             | [components.BenefitGrantDownloadablesProperties](../../models/components/benefitgrantdownloadablesproperties.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |