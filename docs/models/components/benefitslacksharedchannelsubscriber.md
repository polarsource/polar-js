# BenefitSlackSharedChannelSubscriber

## Example Usage

```typescript
import { BenefitSlackSharedChannelSubscriber } from "@polar-sh/sdk/models/components/benefitslacksharedchannelsubscriber.js";

let value: BenefitSlackSharedChannelSubscriber = {
  id: "<value>",
  createdAt: new Date("2026-06-18T16:48:04.948Z"),
  modifiedAt: new Date("2025-02-25T10:33:24.025Z"),
  type: "slack_shared_channel",
  description: "because hm lonely angrily for following",
  selectable: true,
  deletable: false,
  isDeleted: true,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2026-09-21T01:01:26.200Z"),
    modifiedAt: new Date("2024-02-09T14:46:30.040Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://quintessential-battle.net",
    prorationBehavior: "next_period",
    allowCustomerUpdates: true,
  },
  properties: {},
};
```

## Fields

| Field                                                                                                                                | Type                                                                                                                                 | Required                                                                                                                             | Description                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                 | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The ID of the benefit.                                                                                                               |
| `createdAt`                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_check_mark:                                                                                                                   | Creation timestamp of the object.                                                                                                    |
| `modifiedAt`                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                        | :heavy_check_mark:                                                                                                                   | Last modification timestamp of the object.                                                                                           |
| `type`                                                                                                                               | *"slack_shared_channel"*                                                                                                             | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `description`                                                                                                                        | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The description of the benefit.                                                                                                      |
| `selectable`                                                                                                                         | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | Whether the benefit is selectable when creating a product.                                                                           |
| `deletable`                                                                                                                          | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | Whether the benefit is deletable.                                                                                                    |
| `isDeleted`                                                                                                                          | *boolean*                                                                                                                            | :heavy_check_mark:                                                                                                                   | Whether the benefit is deleted.                                                                                                      |
| `organizationId`                                                                                                                     | *string*                                                                                                                             | :heavy_check_mark:                                                                                                                   | The ID of the organization owning the benefit.                                                                                       |
| `organization`                                                                                                                       | [components.BenefitSubscriberOrganization](../../models/components/benefitsubscriberorganization.md)                                 | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |
| `properties`                                                                                                                         | [components.BenefitSlackSharedChannelSubscriberProperties](../../models/components/benefitslacksharedchannelsubscriberproperties.md) | :heavy_check_mark:                                                                                                                   | N/A                                                                                                                                  |