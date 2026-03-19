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
    createdAt: new Date("2024-06-04T21:28:32.740Z"),
    modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2026-04-15T16:04:23.824Z"),
    modifiedAt: new Date("2025-04-16T17:12:33.507Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "member",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-09-23T13:35:30.918Z"),
    modifiedAt: new Date("2025-06-07T16:02:28.341Z"),
    type: "downloadables",
    description: "opposite instead aha delete ick",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    properties: {
      archived: {
        "key": true,
        "key1": true,
      },
      files: [],
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
| `customer`                                                                                                       | [components.Customer](../../models/components/customer.md)                                                       | :heavy_check_mark:                                                                                               | A customer in an organization.                                                                                   |
| `member`                                                                                                         | [components.Member](../../models/components/member.md)                                                           | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |
| `benefit`                                                                                                        | [components.BenefitDownloadables](../../models/components/benefitdownloadables.md)                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `properties`                                                                                                     | [components.BenefitGrantDownloadablesProperties](../../models/components/benefitgrantdownloadablesproperties.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `previousProperties`                                                                                             | [components.BenefitGrantDownloadablesProperties](../../models/components/benefitgrantdownloadablesproperties.md) | :heavy_minus_sign:                                                                                               | N/A                                                                                                              |