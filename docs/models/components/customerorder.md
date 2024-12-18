# CustomerOrder

## Example Usage

```typescript
import { CustomerOrder } from "@polar-sh/sdk/models/components";

let value: CustomerOrder = {
  createdAt: new Date("2024-06-16T23:00:03.457Z"),
  modifiedAt: new Date("2022-03-25T21:04:22.867Z"),
  id: "<value>",
  amount: 22523,
  taxAmount: 460636,
  currency: "Venezuelan bolívar",
  customerId: "<value>",
  productId: "<value>",
  productPriceId: "<value>",
  subscriptionId: "<value>",
  userId: "<value>",
  product: {
    createdAt: new Date("2024-03-02T17:01:51.399Z"),
    modifiedAt: new Date("2024-12-31T07:50:18.161Z"),
    id: "<value>",
    name: "<value>",
    description: "concerning obedient er jeopardise or yet shovel ouch",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-11-11T15:10:16.010Z"),
        modifiedAt: new Date("2024-12-14T21:14:15.864Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 578404,
        maximumAmount: 14318,
        presetAmount: 839896,
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2022-01-28T01:12:49.790Z"),
        modifiedAt: new Date("2024-04-09T07:14:03.361Z"),
        id: "<value>",
        type: "downloadables",
        description: "miserable actually truthfully",
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
        path: "/boot/defaults",
        mimeType: "<value>",
        size: 615622,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-01-19T03:04:57.148Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-08-25T10:22:25.518Z"),
        sizeReadable: "<value>",
        publicUrl: "https://enraged-spear.net/",
      },
    ],
    organization: {
      createdAt: new Date("2024-07-25T08:12:52.029Z"),
      modifiedAt: new Date("2023-06-09T07:31:01.739Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://lavish-digit.com",
      bio: "<value>",
      company: "Predovic, Sauer and Blanda",
      blog: "<value>",
      location: "<value>",
      email: "Caden_Runolfsdottir68@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 657791,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 108590,
      profileSettings: {},
      featureSettings: {},
    },
  },
  productPrice: {
    createdAt: new Date("2023-04-27T19:22:43.071Z"),
    modifiedAt: new Date("2024-09-20T00:35:40.151Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    priceAmount: 795428,
  },
  subscription: {
    createdAt: new Date("2022-02-11T18:46:03.521Z"),
    modifiedAt: new Date("2023-06-20T09:39:58.377Z"),
    id: "<value>",
    amount: 525146,
    currency: "Manat",
    recurringInterval: "year",
    status: "incomplete",
    currentPeriodStart: new Date("2023-04-06T00:36:00.465Z"),
    currentPeriodEnd: new Date("2023-12-25T13:54:38.176Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2024-12-18T21:15:28.785Z"),
    endedAt: new Date("2023-02-25T22:57:12.478Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
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
| `productPrice`                                                                                                          | *components.ProductPrice*                                                                                               | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |
| `subscription`                                                                                                          | [components.CustomerOrderSubscription](../../models/components/customerordersubscription.md)                            | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |