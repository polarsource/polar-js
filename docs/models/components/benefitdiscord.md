# BenefitDiscord

A benefit of type `discord`.

Use it to automatically invite your backers to a Discord server.

## Example Usage

```typescript
import { BenefitDiscord } from "@polar-sh/sdk/models/components";

let value: BenefitDiscord = {
  createdAt: new Date("2023-09-20T16:28:52.728Z"),
  modifiedAt: new Date("2023-05-18T22:46:14.781Z"),
  id: "<value>",
  description: "divert despite drab eek",
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