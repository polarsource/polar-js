# BenefitCustomSubscriber

## Example Usage

```typescript
import { BenefitCustomSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitCustomSubscriber = {
  createdAt: new Date("2023-01-21T05:01:58.399Z"),
  modifiedAt: new Date("2023-07-15T22:33:35.122Z"),
  id: "<value>",
  description: "ew mmm zowie",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2022-04-16T11:56:12.784Z"),
      modifiedAt: new Date("2023-02-13T17:25:18.235Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
    },
  ],
  properties: {
    note: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Creation timestamp of the object.                                                                            |
| `modifiedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Last modification timestamp of the object.                                                                   |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the benefit.                                                                                       |
| `type`                                                                                                       | [components.BenefitCustomSubscriberType](../../models/components/benefitcustomsubscribertype.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The description of the benefit.                                                                              |
| `selectable`                                                                                                 | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is selectable when creating a product.                                                   |
| `deletable`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is deletable.                                                                            |
| `organizationId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the organization owning the benefit.                                                               |
| `grants`                                                                                                     | [components.BenefitGrantSubscriber](../../models/components/benefitgrantsubscriber.md)[]                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | [components.BenefitCustomSubscriberProperties](../../models/components/benefitcustomsubscriberproperties.md) | :heavy_check_mark:                                                                                           | Properties available to subscribers for a benefit of type `custom`.                                          |