# BenefitDiscord

A benefit of type `discord`.

Use it to automatically invite your backers to a Discord server.

## Example Usage

```typescript
import { BenefitDiscord } from "@polar-sh/sdk/models/components";

let value: BenefitDiscord = {
  createdAt: new Date("2022-11-20T15:45:49.704Z"),
  modifiedAt: new Date("2024-02-13T00:23:21.664Z"),
  id: "<value>",
  description: "monasticism ugh and slide thongs",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    guildId: "<id>",
    roleId: "<id>",
    guildToken: "<value>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the benefit.                                                                        |
| `type`                                                                                        | [components.BenefitDiscordType](../../models/components/benefitdiscordtype.md)                | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the benefit.                                                               |
| `selectable`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is selectable when creating a product.                                    |
| `deletable`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is deletable.                                                             |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the benefit.                                                |
| `properties`                                                                                  | [components.BenefitDiscordProperties](../../models/components/benefitdiscordproperties.md)    | :heavy_check_mark:                                                                            | Properties for a benefit of type `discord`.                                                   |