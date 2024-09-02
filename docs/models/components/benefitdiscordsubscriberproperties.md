# BenefitDiscordSubscriberProperties

Properties available to subscribers for a benefit of type `discord`.

## Example Usage

```typescript
import { BenefitDiscordSubscriberProperties } from "@polar-sh/sdk/models/components";

let value: BenefitDiscordSubscriberProperties = {
    guildId: "<value>",
};
```

## Fields

| Field                         | Type                          | Required                      | Description                   |
| ----------------------------- | ----------------------------- | ----------------------------- | ----------------------------- |
| `guildId`                     | *string*                      | :heavy_check_mark:            | The ID of the Discord server. |