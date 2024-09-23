# BenefitDiscordOutput

A benefit of type `discord`.

Use it to automatically invite your backers to a Discord server.

## Example Usage

```typescript
import { BenefitDiscordOutput } from "@polar-sh/sdk/models/components";

let value: BenefitDiscordOutput = {
  createdAt: new Date("2024-05-28T18:57:52.442Z"),
  modifiedAt: new Date("2022-07-23T02:28:15.732Z"),
  id: "<value>",
  description: "Inverse incremental hierarchy",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    guildId: "<value>",
    roleId: "<value>",
    guildToken: "<value>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | Creation timestamp of the object.                                                                      |
| `modifiedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | Last modification timestamp of the object.                                                             |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the benefit.                                                                                 |
| `type`                                                                                                 | [components.BenefitDiscordOutputType](../../models/components/benefitdiscordoutputtype.md)             | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The description of the benefit.                                                                        |
| `selectable`                                                                                           | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | Whether the benefit is selectable when creating a product.                                             |
| `deletable`                                                                                            | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | Whether the benefit is deletable.                                                                      |
| `organizationId`                                                                                       | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the organization owning the benefit.                                                         |
| `properties`                                                                                           | [components.BenefitDiscordPropertiesOutput](../../models/components/benefitdiscordpropertiesoutput.md) | :heavy_check_mark:                                                                                     | Properties for a benefit of type `discord`.                                                            |