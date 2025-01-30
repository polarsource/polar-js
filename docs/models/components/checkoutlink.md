# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components/checkoutlink.js";

let value: CheckoutLink = {
  createdAt: new Date("2025-10-30T09:13:30.404Z"),
  modifiedAt: new Date("2024-05-08T19:54:41.594Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://accurate-reward.com",
  label: "<value>",
  allowDiscountCodes: false,
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  product: {
    createdAt: new Date("2024-05-22T16:24:30.904Z"),
    modifiedAt: new Date("2023-08-14T06:42:01.422Z"),
    id: "<value>",
    name: "<value>",
    description:
      "insert loose reassuringly fat provision easily quizzically usable yowza metabolise",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-01-10T13:58:51.311Z"),
        modifiedAt: new Date("2023-07-31T07:38:02.828Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 464473,
        maximumAmount: 375553,
        presetAmount: 815446,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-01-17T18:22:37.801Z"),
        modifiedAt: new Date("2024-09-17T03:44:36.212Z"),
        id: "<value>",
        type: "github_repository",
        description:
          "why highly cauliflower meanwhile a space prejudge oof awkwardly inasmuch",
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
        path: "/usr/obj",
        mimeType: "<value>",
        size: 4891,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-11-06T07:58:52.676Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-03-01T13:04:14.388Z"),
        sizeReadable: "<value>",
        publicUrl: "https://alive-venom.com/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-12-19T22:18:12.650Z"),
    modifiedAt: new Date("2023-01-09T04:55:52.406Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 240572,
    maximumAmount: 714693,
    presetAmount: 378278,
    recurringInterval: "year",
  },
  discount: {
    duration: "forever",
    type: "fixed",
    basisPoints: 982000,
    createdAt: new Date("2024-07-24T15:46:43.780Z"),
    modifiedAt: new Date("2023-10-13T03:45:21.275Z"),
    id: "<value>",
    metadata: {
      "key": 706780,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-05-27T09:14:17.968Z"),
    endsAt: new Date("2024-12-04T10:43:19.828Z"),
    maxRedemptions: 108040,
    redemptionsCount: 874066,
    organizationId: "<value>",
  },
  url: "https://sophisticated-cap.name",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Creation timestamp of the object.                                                                                                                                          |
| `modifiedAt`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Last modification timestamp of the object.                                                                                                                                 |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The ID of the object.                                                                                                                                                      |
| `metadata`                                                                                                                                                                 | Record<string, *components.CheckoutLinkMetadata*>                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `paymentProcessor`                                                                                                                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `clientSecret`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Client secret used to access the checkout link.                                                                                                                            |
| `successUrl`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | URL where the customer will be redirected after a successful payment.                                                                                                      |
| `label`                                                                                                                                                                    | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Optional label to distinguish links internally                                                                                                                             |
| `allowDiscountCodes`                                                                                                                                                       | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. |
| `productId`                                                                                                                                                                | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the product to checkout.                                                                                                                                             |
| `productPriceId`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the product price to checkout. First available price will be selected unless an explicit price ID is set.                                                            |
| `discountId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.                                   |
| `product`                                                                                                                                                                  | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)                                                                                           | :heavy_check_mark:                                                                                                                                                         | Product data for a checkout link.                                                                                                                                          |
| `productPrice`                                                                                                                                                             | *components.ProductPrice*                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `discount`                                                                                                                                                                 | *components.CheckoutLinkDiscount*                                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `url`                                                                                                                                                                      | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |