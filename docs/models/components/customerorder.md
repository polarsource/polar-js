# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components/customerorder.js";

let value: CustomerOrder = {
  createdAt: new Date("2025-08-02T23:12:56.433Z"),
  modifiedAt: new Date("2023-01-27T00:25:14.511Z"),
  id: "<value>",
  amount: 881551,
  taxAmount: 822818,
  currency: "CFA Franc BEAC",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2023-12-11T02:29:40.537Z"),
    modifiedAt: new Date("2023-07-16T23:00:46.513Z"),
    id: "<value>",
    name: "<value>",
    description: "punctually instead baritone",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-12-16T01:50:43.036Z"),
        modifiedAt: new Date("2024-09-08T22:32:20.535Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
        priceCurrency: "<value>",
        priceAmount: 418585,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-09-25T16:52:07.472Z"),
        modifiedAt: new Date("2023-05-20T10:14:59.264Z"),
        id: "<value>",
        type: "custom",
        description: "pro yowza supposing jazz",
        selectable: false,
        deletable: false,
        organizationId: "<value>",
      },
    ],
    medias: [
      {
        id: "<value>",
        organizationId: "<value>",
        name: "<value>",
        path: "/media",
        mimeType: "<value>",
        size: 236544,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-09-02T17:34:26.813Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-01-04T04:06:45.165Z"),
        sizeReadable: "<value>",
        publicUrl: "https://inborn-farmer.net",
      },
    ],
    organization: {
      createdAt: new Date("2023-10-23T00:05:45.383Z"),
      modifiedAt: new Date("2025-08-12T00:35:57.398Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://average-instruction.biz/",
      bio: "<value>",
      company: "Greenholt and Sons",
      blog: "<value>",
      location: "<value>",
      email: "Lia_Haley@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 721472,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 93617,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
    },
  },
  productPrice: {
    createdAt: new Date("2023-08-10T03:09:07.889Z"),
    modifiedAt: new Date("2023-11-07T18:41:18.933Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "month",
    priceCurrency: "<value>",
    priceAmount: 943350,
  },
  subscription: {
    createdAt: new Date("2025-11-05T00:11:06.002Z"),
    modifiedAt: new Date("2025-06-30T11:37:55.414Z"),
    id: "<value>",
    amount: 451522,
    currency: "Kip",
    recurringInterval: "month",
    status: "active",
    currentPeriodStart: new Date("2023-06-05T02:07:02.116Z"),
    currentPeriodEnd: new Date("2023-10-24T23:58:31.091Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-07-22T20:54:17.146Z"),
    startedAt: new Date("2025-08-23T11:21:19.841Z"),
    endsAt: new Date("2025-01-26T05:03:14.787Z"),
    endedAt: new Date("2023-05-27T03:14:14.894Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "switched_service",
    customerCancellationComment: "<value>",
  },
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Creation timestamp of the object.                                                                                       |
| `modifiedAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                           | :heavy_check_mark:                                                                                                      | Last modification timestamp of the object.                                                                              |
| `id`                                                                                                                    | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `amount`                                                                                                                | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `taxAmount`                                                                                                             | *number*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `currency`                                                                                                              | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `customerId`                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productId`                                                                                                             | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productPriceId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscriptionId`                                                                                                        | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| ~~`userId`~~                                                                                                            | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. |
| `product`                                                                                                               | [components.CustomerOrderProduct](../../models/components/customerorderproduct.md)                                      | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `productPrice`                                                                                                          | *components.CustomerOrderProductPrice*                                                                                  | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscription`                                                                                                          | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |