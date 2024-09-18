# BenefitArticlesSubscriber

## Example Usage

```typescript
import { BenefitArticlesSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitArticlesSubscriber = {
  createdAt: new Date("2023-07-26T01:20:48.501Z"),
  modifiedAt: new Date("2023-06-21T13:05:43.340Z"),
  id: "<value>",
  description: "Balanced encompassing complexity",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    paidArticles: false,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Creation timestamp of the object.                                                                                |
| `modifiedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Last modification timestamp of the object.                                                                       |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the benefit.                                                                                           |
| `type`                                                                                                           | [components.Type](../../models/components/type.md)                                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The description of the benefit.                                                                                  |
| `selectable`                                                                                                     | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the benefit is selectable when creating a product.                                                       |
| `deletable`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the benefit is deletable.                                                                                |
| `organizationId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the organization owning the benefit.                                                                   |
| `properties`                                                                                                     | [components.BenefitArticlesSubscriberProperties](../../models/components/benefitarticlessubscriberproperties.md) | :heavy_check_mark:                                                                                               | Properties available to subscribers for a benefit of type `articles`.                                            |