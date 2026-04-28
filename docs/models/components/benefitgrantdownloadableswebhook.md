# BenefitGrantDownloadablesWebhook

## Example Usage

```typescript
import { BenefitGrantDownloadablesWebhook } from "@polar-sh/sdk/models/components/benefitgrantdownloadableswebhook.js";

let value: BenefitGrantDownloadablesWebhook = {
  createdAt: new Date("2026-09-16T06:48:34.889Z"),
  modifiedAt: new Date("2024-05-18T09:10:18.729Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: false,
  subscriptionId: null,
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-09-23T13:35:30.918Z"),
    modifiedAt: new Date("2025-06-07T16:02:28.341Z"),
    metadata: {},
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2024-08-08T13:30:36.964Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2024-08-29T23:41:53.521Z"),
    modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-03-02T22:46:32.281Z"),
    modifiedAt: new Date("2025-12-18T13:53:02.296Z"),
    type: "downloadables",
    description: "until loudly replacement though junior agreeable excited",
    selectable: true,
    deletable: false,
    isDeleted: false,
    organizationId: "<value>",
    metadata: {},
    properties: {
      archived: {
        "key": false,
        "key1": false,
      },
      files: [
        "<value 1>",
        "<value 2>",
        "<value 3>",
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
| `memberId`                                                                                                       | *string*                                                                                                         | :heavy_minus_sign:                                                                                               | The ID of the member concerned by this grant.                                                                    |
| `benefitId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the benefit concerned by this grant.                                                                   |
| `error`                                                                                                          | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                                     | :heavy_minus_sign:                                                                                               | The error information if the benefit grant failed with an unrecoverable error.                                   |
| `customer`                                                                                                       | *components.Customer*                                                                                            | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `member`                                                                                                         | [components.Member](../../models/components/member.md)                                                           | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `benefit`                                                                                                        | [components.BenefitDownloadables](../../models/components/benefitdownloadables.md)                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `properties`                                                                                                     | [components.BenefitGrantDownloadablesProperties](../../models/components/benefitgrantdownloadablesproperties.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `previousProperties`                                                                                             | [components.BenefitGrantDownloadablesProperties](../../models/components/benefitgrantdownloadablesproperties.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |