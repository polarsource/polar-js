# BenefitDiscordPropertiesInput

Properties for a benefit of type `discord`.

## Example Usage

```typescript
import { BenefitDiscordPropertiesInput } from "@polar-sh/sdk/models/components";

let value: BenefitDiscordPropertiesInput = {
    guildId: "<value>",
    roleId: "<value>",
};
```

## Fields

| Field                                | Type                                 | Required                             | Description                          |
| ------------------------------------ | ------------------------------------ | ------------------------------------ | ------------------------------------ |
| `guildId`                            | *string*                             | :heavy_check_mark:                   | The ID of the Discord server.        |
| `roleId`                             | *string*                             | :heavy_check_mark:                   | The ID of the Discord role to grant. |