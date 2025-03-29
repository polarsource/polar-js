# CheckoutLink

Checkout link data.

## Example Usage

```typescript
import { CheckoutLink } from "@polar-sh/sdk/models/components/checkoutlink.js";

let value: CheckoutLink = {
  createdAt: new Date("2024-04-06T11:06:58.417Z"),
  modifiedAt: new Date("2024-06-07T05:46:10.028Z"),
  id: "<value>",
  metadata: {
    "key": false,
  },
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  successUrl: "https://punctual-dependency.net/",
  label: "<value>",
  allowDiscountCodes: false,
  discountId: "<value>",
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  products: [
    {
      createdAt: new Date("2025-03-02T10:25:24.644Z"),
      modifiedAt: new Date("2023-05-10T01:15:05.305Z"),
      id: "<value>",
      name: "<value>",
      description:
        "though irresponsible hubris ack attribute underneath taxicab",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-10-26T20:24:31.839Z"),
          modifiedAt: new Date("2025-03-27T18:09:35.560Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-02-10T05:06:21.763Z"),
          modifiedAt: new Date("2025-10-07T00:51:30.483Z"),
          id: "<value>",
          type: "custom",
          description: "some self-assured snow square ah inasmuch how",
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
          path: "/opt/lib",
          mimeType: "<value>",
          size: 47423,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-06-13T11:03:06.616Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-01-02T23:04:43.120Z"),
          sizeReadable: "<value>",
          publicUrl: "https://stunning-minister.org/",
        },
      ],
    },
  ],
  discount: {
    duration: "repeating",
    type: "percentage",
    amount: 344001,
    currency: "Brunei Dollar",
    createdAt: new Date("2025-03-24T10:54:04.717Z"),
    modifiedAt: new Date("2024-07-25T12:45:38.576Z"),
    id: "<value>",
    metadata: {
      "key": 837110,
    },
    name: "<value>",
    code: "<value>",
    startsAt: new Date("2024-06-24T05:24:09.981Z"),
    endsAt: new Date("2023-11-20T07:02:04.141Z"),
    maxRedemptions: 748432,
    redemptionsCount: 269847,
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  },
  productId: "<value>",
  productPriceId: "<value>",
  product: {
    createdAt: new Date("2023-10-30T19:24:48.529Z"),
    modifiedAt: new Date("2023-08-17T18:33:35.647Z"),
    id: "<value>",
    name: "<value>",
    description: "machine so loudly",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2025-04-29T16:14:06.656Z"),
        modifiedAt: new Date("2025-10-18T01:10:09.104Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-02-10T16:11:09.070Z"),
        modifiedAt: new Date("2024-04-14T18:31:17.553Z"),
        id: "<value>",
        type: "discord",
        description: "crafty chasuble via feline yet",
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
        path: "/usr/include",
        mimeType: "<value>",
        size: 455069,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-06-24T05:42:29.206Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-01-01T06:40:37.483Z"),
        sizeReadable: "<value>",
        publicUrl: "https://strident-archaeology.net/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-08-19T18:40:47.077Z"),
    modifiedAt: new Date("2024-01-16T16:07:14.377Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "recurring",
    recurringInterval: "year",
  },
  url: "https://defensive-deployment.com/",
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