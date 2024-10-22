# BenefitDiscordInput

A benefit of type `discord`.

Use it to automatically invite your backers to a Discord server.

## Example Usage

```typescript
import { BenefitDiscordInput } from "@polar-sh/sdk/models/components";

let value: BenefitDiscordInput = {
  createdAt: new Date("2023-08-08T07:18:03.677Z"),
  modifiedAt: new Date("2022-04-14T07:45:40.363Z"),
  id: "<value>",
  description: "incidentally livid phew poetry tank bicycle",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    guildId: "<id>",
    roleId: "<id>",
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the benefit.                                                                               |
| `type`                                                                                               | [components.BenefitDiscordType](../../models/components/benefitdiscordtype.md)                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `description`                                                                                        | *string*                                                                                             | :heavy_check_mark:                                                                                   | The description of the benefit.                                                                      |
| `selectable`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the benefit is selectable when creating a product.                                           |
| `deletable`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the benefit is deletable.                                                                    |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the organization owning the benefit.                                                       |
| `properties`                                                                                         | [components.BenefitDiscordPropertiesInput](../../models/components/benefitdiscordpropertiesinput.md) | :heavy_check_mark:                                                                                   | Properties for a benefit of type `discord`.                                                          |