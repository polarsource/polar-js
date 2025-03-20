# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components/checkoutlink.js";

let value: CheckoutLink = {
  createdAt: new Date("2023-02-02T10:47:45.078Z"),
  modifiedAt: new Date("2025-06-04T02:29:45.708Z"),
  id: "<value>",
  metadata: {
    "key": "<value>",
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://scornful-platter.name",
  label: "<value>",
  allowDiscountCodes: false,
  discountId: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      createdAt: new Date("2024-01-16T16:07:14.377Z"),
      modifiedAt: new Date("2025-12-01T23:13:15.370Z"),
      id: "<value>",
      name: "<value>",
      description:
        "jet until honestly discrete than meh whale nor upwardly noxious",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-05-08T10:41:06.101Z"),
          modifiedAt: new Date("2023-05-01T01:29:19.161Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 939353,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-09-14T17:53:29.108Z"),
          modifiedAt: new Date("2024-10-17T05:26:12.523Z"),
          id: "<value>",
          type: "github_repository",
          description: "manage what cutover",
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
          path: "/var/spool",
          mimeType: "<value>",
          size: 792902,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-10-24T15:08:04.242Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-03-16T12:09:36.131Z"),
          sizeReadable: "<value>",
          publicUrl: "https://bruised-ownership.info/",
        },
      ],
    },
  ],
  discount: {
    duration: "once",
    durationInMonths: 160512,
    type: "percentage",
    basisPoints: 486993,
    createdAt: new Date("2023-07-31T16:14:05.643Z"),
    modifiedAt: new Date("2023-12-09T16:23:21.107Z"),
    id: "<value>",
    metadata: {
      "key": "<value>",
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-11-25T18:23:53.239Z"),
    endsAt: new Date("2025-10-05T09:47:55.156Z"),
    maxRedemptions: 570198,
    redemptionsCount: 641982,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  productId: "<value>",
  productPriceId: "<value>",
  product: {
    createdAt: new Date("2023-11-17T21:55:34.014Z"),
    modifiedAt: new Date("2025-02-15T10:15:12.106Z"),
    id: "<value>",
    name: "<value>",
    description:
      "circa miskey posh drat where climb satirise infatuated however factorize",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2025-08-07T06:17:20.997Z"),
        modifiedAt: new Date("2024-11-16T07:53:47.712Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
        priceCurrency: "<value>",
        priceAmount: 150606,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-09-29T16:44:03.332Z"),
        modifiedAt: new Date("2024-09-15T15:24:33.833Z"),
        id: "<value>",
        type: "discord",
        description:
          "zowie till chops yahoo yowza pacemaker though beneath gladly",
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
        path: "/Library",
        mimeType: "<value>",
        size: 782277,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-06-16T18:55:28.891Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-04-27T16:00:32.884Z"),
        sizeReadable: "<value>",
        publicUrl: "https://soggy-hunger.biz/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2023-09-30T22:08:25.999Z"),
    modifiedAt: new Date("2025-01-21T07:34:15.679Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "month",
    priceCurrency: "<value>",
    priceAmount: 536991,
  },
  url: "https://unruly-testimonial.net",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                | Example                                                                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Creation timestamp of the object.                                                                                                                                          |                                                                                                                                                                            |
| `modifiedAt`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Last modification timestamp of the object.                                                                                                                                 |                                                                                                                                                                            |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The ID of the object.                                                                                                                                                      |                                                                                                                                                                            |
| `metadata`                                                                                                                                                                 | Record<string, *components.CheckoutLinkMetadata*>                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| `paymentProcessor`                                                                                                                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| `clientSecret`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Client secret used to access the checkout link.                                                                                                                            |                                                                                                                                                                            |
| `successUrl`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | URL where the customer will be redirected after a successful payment.                                                                                                      |                                                                                                                                                                            |
| `label`                                                                                                                                                                    | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Optional label to distinguish links internally                                                                                                                             |                                                                                                                                                                            |
| `allowDiscountCodes`                                                                                                                                                       | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. |                                                                                                                                                                            |
| `discountId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.                                   |                                                                                                                                                                            |
| `organizationId`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The organization ID.                                                                                                                                                       | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                                                                       |
| `products`                                                                                                                                                                 | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)[]                                                                                         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| `discount`                                                                                                                                                                 | *components.CheckoutLinkDiscount*                                                                                                                                          | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |
| ~~`productId`~~                                                                                                                                                            | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |                                                                                                                                                                            |
| ~~`productPriceId`~~                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |                                                                                                                                                                            |
| `product`                                                                                                                                                                  | [components.CheckoutLinkProduct](../../models/components/checkoutlinkproduct.md)                                                                                           | :heavy_check_mark:                                                                                                                                                         | Product data for a checkout link.                                                                                                                                          |                                                                                                                                                                            |
| ~~`productPrice`~~                                                                                                                                                         | *components.CheckoutLinkProductPrice*                                                                                                                                      | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |                                                                                                                                                                            |
| `url`                                                                                                                                                                      | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |                                                                                                                                                                            |