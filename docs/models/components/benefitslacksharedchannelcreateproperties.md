# BenefitSlackSharedChannelCreateProperties

## Example Usage

```typescript
import { BenefitSlackSharedChannelCreateProperties } from "@polar-sh/sdk/models/components/benefitslacksharedchannelcreateproperties.js";

let value: BenefitSlackSharedChannelCreateProperties = {
  slackIntegrationId: "<value>",
  channelNameTemplate: "<value>",
};
```

## Fields

| Field                                            | Type                                             | Required                                         | Description                                      |
| ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ | ------------------------------------------------ |
| `slackIntegrationId`                             | *string*                                         | :heavy_check_mark:                               | Polar Slack integration to use for this benefit. |
| `channelNameTemplate`                            | *string*                                         | :heavy_check_mark:                               | N/A                                              |
| `private`                                        | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `welcomeMessage`                                 | *string*                                         | :heavy_minus_sign:                               | N/A                                              |
| `archiveOnRevoke`                                | *boolean*                                        | :heavy_minus_sign:                               | N/A                                              |
| `teamInvitees`                                   | *string*[]                                       | :heavy_minus_sign:                               | N/A                                              |