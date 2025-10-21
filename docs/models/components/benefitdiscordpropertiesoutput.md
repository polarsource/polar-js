# BenefitDiscordPropertiesOutput

Properties for a benefit of type `discord`.

## Example Usage

```typescript
import { BenefitDiscordPropertiesOutput } from "@polar-sh/sdk/models/components/benefitdiscordpropertiesoutput.js";

let value: BenefitDiscordPropertiesOutput = {
  guildId: "<id>",
  roleId: "<id>",
  kickMember: false,
  guildToken: "<value>",
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `guildId`                                                         | *string*                                                          | :heavy_check_mark:                                                | The ID of the Discord server.                                     |
| `roleId`                                                          | *string*                                                          | :heavy_check_mark:                                                | The ID of the Discord role to grant.                              |
| `kickMember`                                                      | *boolean*                                                         | :heavy_check_mark:                                                | Whether to kick the member from the Discord server on revocation. |
| `guildToken`                                                      | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |