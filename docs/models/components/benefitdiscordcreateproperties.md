# BenefitDiscordCreateProperties

Properties to create a benefit of type `discord`.

## Example Usage

```typescript
import { BenefitDiscordCreateProperties } from "@polar-sh/sdk/models/components/benefitdiscordcreateproperties.js";

let value: BenefitDiscordCreateProperties = {
  guildToken: "<value>",
  roleId: "<id>",
  kickMember: true,
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `guildToken`                                                      | *string*                                                          | :heavy_check_mark:                                                | N/A                                                               |
| `roleId`                                                          | *string*                                                          | :heavy_check_mark:                                                | The ID of the Discord role to grant.                              |
| `kickMember`                                                      | *boolean*                                                         | :heavy_check_mark:                                                | Whether to kick the member from the Discord server on revocation. |