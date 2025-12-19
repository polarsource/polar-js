# BenefitDiscordSubscriber

## Example Usage

```typescript
import { BenefitDiscordSubscriber } from "@polar-sh/sdk/models/components/benefitdiscordsubscriber.js";

let value: BenefitDiscordSubscriber = {
  id: "<value>",
  createdAt: new Date("2024-07-24T23:28:24.019Z"),
  modifiedAt: new Date("2024-10-02T09:01:18.978Z"),
  type: "discord",
  description: "pish metallic eyeliner",
  selectable: true,
  deletable: true,
  organizationId: "<value>",
  metadata: {
    "key": 110104,
  },
  organization: {
    createdAt: new Date("2023-02-09T14:46:30.040Z"),
    modifiedAt: new Date("2024-07-28T16:12:54.009Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://spotless-knight.com/",
    prorationBehavior: "prorate",
    allowCustomerUpdates: true,
  },
  properties: {
    guildId: "<id>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the benefit.                                                                                         |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Creation timestamp of the object.                                                                              |
| `modifiedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Last modification timestamp of the object.                                                                     |
| `type`                                                                                                         | *"discord"*                                                                                                    | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The description of the benefit.                                                                                |
| `selectable`                                                                                                   | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | Whether the benefit is selectable when creating a product.                                                     |
| `deletable`                                                                                                    | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | Whether the benefit is deletable.                                                                              |
| `organizationId`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the organization owning the benefit.                                                                 |
| `metadata`                                                                                                     | Record<string, *components.MetadataOutputType*>                                                                | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `organization`                                                                                                 | [components.BenefitSubscriberOrganization](../../models/components/benefitsubscriberorganization.md)           | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `properties`                                                                                                   | [components.BenefitDiscordSubscriberProperties](../../models/components/benefitdiscordsubscriberproperties.md) | :heavy_check_mark:                                                                                             | Properties available to subscribers for a benefit of type `discord`.                                           |