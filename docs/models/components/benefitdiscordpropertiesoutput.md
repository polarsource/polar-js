# BenefitDiscordPropertiesOutput

Properties for a benefit of type `discord`.

## Example Usage

```typescript
import { BenefitDiscordPropertiesOutput } from "@polar-sh/sdk/models/components";

let value: BenefitDiscordPropertiesOutput = {
  guildId: "<id>",
  roleId: "<id>",
  guildToken: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `guildId`                            | *string*                             | :heavy_check_mark:                   | The ID of the Discord server.        |
| `roleId`                             | *string*                             | :heavy_check_mark:                   | The ID of the Discord role to grant. |
| `guildToken`                         | *string*                             | :heavy_check_mark:                   | N/A                                  |