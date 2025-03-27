# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components/checkoutlink.js";

let value: CheckoutLink = {
  createdAt: new Date("2025-09-24T10:31:27.817Z"),
  modifiedAt: new Date("2023-01-07T06:53:10.517Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://warped-replacement.info",
  label: "<value>",
  allowDiscountCodes: false,
  discountId: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      createdAt: new Date("2024-11-26T17:45:25.271Z"),
      modifiedAt: new Date("2024-02-10T05:06:21.763Z"),
      id: "<value>",
      name: "<value>",
      description:
        "pillbox than duh implode quirkily including amidst fuss foot ah",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-08-17T18:33:35.647Z"),
          modifiedAt: new Date("2023-04-24T07:30:00.599Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 700685,
          maximumAmount: 383213,
          presetAmount: 724985,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-11-19T12:36:32.087Z"),
          modifiedAt: new Date("2024-05-26T00:12:10.957Z"),
          id: "<value>",
          type: "github_repository",
          description: "phew where indeed strong rightfully reassuringly lock",
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
          path: "/private/var",
          mimeType: "<value>",
          size: 953563,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-10-21T12:24:46.268Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-05-22T22:32:55.689Z"),
          sizeReadable: "<value>",
          publicUrl: "https://rotating-instruction.info",
        },
      ],
    },
  ],
  discount: {
    duration: "repeating",
    type: "percentage",
    amount: 455069,
    currency: "Kip",
    createdAt: new Date("2023-01-01T06:40:37.483Z"),
    modifiedAt: new Date("2023-02-02T10:47:45.078Z"),
    id: "<value>",
    metadata: {
      "key": false,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2023-02-20T14:26:51.609Z"),
    endsAt: new Date("2025-04-25T19:07:42.564Z"),
    maxRedemptions: 713364,
    redemptionsCount: 679324,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  productId: "<value>",
  productPriceId: "<value>",
  product: {
    createdAt: new Date("2024-08-19T18:40:47.077Z"),
    modifiedAt: new Date("2024-01-16T16:07:14.377Z"),
    id: "<value>",
    name: "<value>",
    description:
      "circa loosely pfft tough reborn willfully carefully warmly nor scaffold",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-01-07T05:47:13.051Z"),
        modifiedAt: new Date("2023-05-08T10:41:06.101Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-02-01T12:36:51.052Z"),
        modifiedAt: new Date("2025-10-26T12:43:46.379Z"),
        id: "<value>",
        type: "license_keys",
        description:
          "possession characterization showboat likely usually outflank versus",
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
        path: "/usr/local/src",
        mimeType: "<value>",
        size: 70257,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-09-13T07:02:39.035Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-02-05T06:03:44.421Z"),
        sizeReadable: "<value>",
        publicUrl: "https://average-commercial.biz/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-07-24T08:55:42.913Z"),
    modifiedAt: new Date("2023-08-31T16:57:01.365Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "year",
  },
  url: "https://ignorant-sprinkles.name",
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