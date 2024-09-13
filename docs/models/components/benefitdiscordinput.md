# BenefitDiscordInput

A benefit of type `discord`.

Use it to automatically invite your backers to a Discord server.

## Example Usage

```typescript
import { BenefitDiscordInput } from "@polar-sh/sdk/models/components";

let value: BenefitDiscordInput = {
  createdAt: new Date("2022-11-29T09:47:26.598Z"),
  modifiedAt: new Date("2023-11-04T14:49:14.630Z"),
  id: "<value>",
  description: "Grass-roots radical protocol",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    guildId: "<value>",
    roleId: "<value>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the benefit.                                                                               |
| `type`                                                                                               | [components.BenefitDiscordInputType](../../models/components/benefitdiscordinputtype.md)             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The description of the benefit.                                                                      |
| `selectable`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the benefit is selectable when creating a product.                                           |
| `deletable`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the benefit is deletable.                                                                    |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the organization owning the benefit.                                                       |
| `properties`                                                                                         | [components.BenefitDiscordPropertiesInput](../../models/components/benefitdiscordpropertiesinput.md) | :heavy_check_mark:                                                                                   | Properties for a benefit of type `discord`.                                                          |