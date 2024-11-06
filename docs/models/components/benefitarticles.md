# BenefitArticles

A benefit of type `articles`.

Use it to grant access to posts.

## Example Usage

```typescript
import { BenefitArticles } from "@polar-sh/sdk/models/components";

let value: BenefitArticles = {
  createdAt: new Date("2022-02-27T21:22:28.511Z"),
  modifiedAt: new Date("2022-01-01T01:54:20.575Z"),
  id: "<value>",
  description:
    "yum underneath off plain hmph however parody amidst before misappropriate",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    paidArticles: false,
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the benefit.                                                                        |
| `type`                                                                                        | [components.BenefitArticlesType](../../models/components/benefitarticlestype.md)              | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the benefit.                                                               |
| `selectable`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is selectable when creating a product.                                    |
| `deletable`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is deletable.                                                             |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the benefit.                                                |
| `properties`                                                                                  | [components.BenefitArticlesProperties](../../models/components/benefitarticlesproperties.md)  | :heavy_check_mark:                                                                            | Properties for a benefit of type `articles`.                                                  |