# SubscriptionOutput

## Example Usage

```typescript
import { SubscriptionOutput } from "@polar-sh/sdk/models/components";

let value: SubscriptionOutput = {
  createdAt: new Date("2024-01-06T08:57:30.703Z"),
  modifiedAt: new Date("2023-03-05T10:39:39.567Z"),
  id: "<value>",
  amount: 861166,
  currency: "Gourde",
  recurringInterval: "year",
  status: "unpaid",
  currentPeriodStart: new Date("2024-03-08T18:33:30.754Z"),
  currentPeriodEnd: new Date("2022-04-14T18:09:20.036Z"),
  cancelAtPeriodEnd: false,
  startedAt: new Date("2024-05-01T17:51:17.309Z"),
  endedAt: new Date("2024-09-15T06:04:46.672Z"),
  userId: "<value>",
  productId: "<value>",
  priceId: "<value>",
  user: {
    email: "Jasen.Blanda86@hotmail.com",
    publicName: "<value>",
    githubUsername: "<value>",
    avatarUrl: "https://torn-hydrolyse.com/",
  },
  product: {
    createdAt: new Date("2023-05-19T04:29:44.919Z"),
    modifiedAt: new Date("2024-03-13T12:12:28.416Z"),
    id: "<value>",
    name: "<value>",
    description: "deceivingly colligate uh-huh drat capsize",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-09-06T04:53:08.086Z"),
        modifiedAt: new Date("2022-04-29T18:01:53.095Z"),
        id: "<value>",
        isArchived: false,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-10-30T16:33:35.903Z"),
        modifiedAt: new Date("2024-04-09T06:40:27.256Z"),
        id: "<value>",
        description: "council absent quietly",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
        properties: {
          paidArticles: false,
        },
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/sys",
        mimeType: "<value>",
        size: 535031,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-01-10T21:15:00.436Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-11-07T11:43:07.881Z"),
        sizeReadable: "<value>",
        publicUrl: "https://corny-submitter.net",
      },
    ],
  },
  price: {
    createdAt: new Date("2023-10-01T10:38:22.243Z"),
    modifiedAt: new Date("2024-10-02T05:10:30.950Z"),
    id: "<value>",
    isArchived: false,
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the object.                                                                                |
| `amount`                                                                                             | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currency`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `status`                                                                                             | [components.SubscriptionStatus](../../models/components/subscriptionstatus.md)                       | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currentPeriodStart`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `currentPeriodEnd`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `cancelAtPeriodEnd`                                                                                  | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `startedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `endedAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `userId`                                                                                             | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `productId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `priceId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `user`                                                                                               | [components.SubscriptionUser](../../models/components/subscriptionuser.md)                           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `product`                                                                                            | [components.ProductOutput](../../models/components/productoutput.md)                                 | :heavy_check_mark:                                                                                   | A product.                                                                                           |
| `price`                                                                                              | *components.ProductPriceOutput*                                                                      | :heavy_check_mark:                                                                                   | N/A                                                                                                  |