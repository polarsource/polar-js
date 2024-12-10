# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components";

let value: CheckoutLink = {
  createdAt: new Date("2023-07-21T20:59:47.090Z"),
  modifiedAt: new Date("2024-07-02T16:51:39.984Z"),
  id: "<value>",
  metadata: {
    "key": 12254,
  },
  clientSecret: "<value>",
  successUrl: "https://right-numeric.org/",
  label: "<value>",
  allowDiscountCodes: false,
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  product: {
    createdAt: new Date("2024-10-11T08:49:36.926Z"),
    modifiedAt: new Date("2024-05-27T03:30:02.459Z"),
    id: "<value>",
    name: "<value>",
    description: "rubbery adjourn nervously zowie",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-09-08T06:00:16.318Z"),
        modifiedAt: new Date("2024-04-30T05:47:55.446Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-11-10T21:03:22.282Z"),
        modifiedAt: new Date("2022-01-07T05:47:13.051Z"),
        id: "<value>",
        type: "custom",
        description: "black manage what",
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
        path: "/opt/include",
        mimeType: "<value>",
        size: 17902,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-03-17T14:54:52.778Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2022-04-18T13:40:59.739Z"),
        sizeReadable: "<value>",
        publicUrl: "https://steel-cutover.org",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-03-16T12:09:36.131Z"),
    modifiedAt: new Date("2023-05-29T06:31:27.160Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    priceCurrency: "<value>",
    minimumAmount: 92847,
    maximumAmount: 636930,
    presetAmount: 416228,
  },
  discount: {
    duration: "once",
    durationInMonths: 160512,
    type: "percentage",
    basisPoints: 486993,
    createdAt: new Date("2022-07-31T16:14:05.643Z"),
    modifiedAt: new Date("2022-12-09T16:23:21.107Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-11-26T18:23:53.239Z"),
    endsAt: new Date("2024-10-05T09:47:55.156Z"),
    maxRedemptions: 570198,
    redemptionsCount: 641982,
    organizationId: "<value>",
  },
  url: "https://scaly-tomatillo.com/",
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