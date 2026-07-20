# BenefitSlackSharedChannel

## Example Usage

```typescript
import { BenefitSlackSharedChannel } from "@polar-sh/sdk/models/components/benefitslacksharedchannel.js";

let value: BenefitSlackSharedChannel = {
  id: "<value>",
  createdAt: new Date("2025-10-12T14:29:51.310Z"),
  modifiedAt: new Date("2026-10-16T23:28:38.799Z"),
  type: "slack_shared_channel",
  description: "inside aboard swear including randomize qua",
  selectable: true,
  deletable: true,
  isDeleted: true,
  organizationId: "<value>",
  metadata: {
    "key": false,
  },
  visibility: "public",
  properties: {
    slackIntegrationId: "<value>",
    channelNameTemplate: "<value>",
  },
  visibilityConfigurable: false,
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the benefit.                                                                                           |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Creation timestamp of the object.                                                                                |
| `modifiedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Last modification timestamp of the object.                                                                       |
| `type`                                                                                                           | *"slack_shared_channel"*                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The description of the benefit.                                                                                  |
| `selectable`                                                                                                     | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the benefit is selectable when creating a product.                                                       |
| `deletable`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the benefit is deletable.                                                                                |
| `isDeleted`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the benefit is deleted.                                                                                  |
| `organizationId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the organization owning the benefit.                                                                   |
| `metadata`                                                                                                       | Record<string, *components.MetadataOutputType*>                                                                  | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `visibility`                                                                                                     | [components.BenefitVisibility](../../models/components/benefitvisibility.md)                                     | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `properties`                                                                                                     | [components.BenefitSlackSharedChannelProperties](../../models/components/benefitslacksharedchannelproperties.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `visibilityConfigurable`                                                                                         | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |