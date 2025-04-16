# Checkout

Checkout session data retrieved using an access token.

## Example Usage

```typescript
import { Checkout } from "@polar-sh/sdk/models/components/checkout.js";

let value: Checkout = {
  createdAt: new Date("2024-05-25T00:29:55.609Z"),
  modifiedAt: new Date("2023-05-16T16:15:25.827Z"),
  id: "<value>",
  paymentProcessor: "stripe",
  status: "failed",
  clientSecret: "<value>",
  url: "https://stable-reasoning.org/",
  expiresAt: new Date("2023-09-14T20:53:35.894Z"),
  successUrl: "https://dead-elevator.com",
  embedOrigin: "<value>",
  amount: 958327,
  discountAmount: 192709,
  netAmount: 260987,
  taxAmount: 992510,
  totalAmount: 108220,
  currency: "Euro",
  productId: "<value>",
  productPriceId: "<value>",
  discountId: "<value>",
  allowDiscountCodes: false,
  isDiscountApplicable: false,
  isFreeProductPrice: false,
  isPaymentRequired: false,
  isPaymentSetupRequired: false,
  isPaymentFormRequired: false,
  customerId: "<value>",
  customerName: "<value>",
  customerEmail: "<value>",
  customerIpAddress: "<value>",
  customerBillingAddress: {
    country: "FR",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {
    "key": "<value>",
  },
  subtotalAmount: 380392,
  metadata: {
    "key": "<value>",
  },
  customerExternalId: "<id>",
  products: [
    {
      createdAt: new Date("2023-10-14T17:26:12.576Z"),
      modifiedAt: new Date("2024-08-28T16:04:25.184Z"),
      id: "<value>",
      name: "<value>",
      description:
        "volleyball following effector lest boo upbeat through brood wicked",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-04-20T23:51:13.817Z"),
          modifiedAt: new Date("2023-02-19T11:30:39.403Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 943698,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2024-03-22T03:20:49.000Z"),
          modifiedAt: new Date("2024-12-25T15:57:55.764Z"),
          metadata: {
            "key": false,
          },
          type: "license_keys",
          description: "shakily even fair aha as masquerade versus",
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
          path: "/sys",
          mimeType: "<value>",
          size: 560964,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-08-20T16:04:10.991Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-10-22T12:34:26.724Z"),
          sizeReadable: "<value>",
          publicUrl: "https://faraway-climb.org/",
        },
      ],
    },
  ],
  product: {
    createdAt: new Date("2025-12-10T05:32:38.930Z"),
    modifiedAt: new Date("2024-11-12T02:39:14.875Z"),
    id: "<value>",
    name: "<value>",
    description:
      "scrap brr publicity majority towards opposite than incidentally stiff",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-04-01T21:15:54.759Z"),
        modifiedAt: new Date("2023-03-05T09:28:01.729Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 349968,
        maximumAmount: 425035,
        presetAmount: 910637,
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2025-04-25T00:12:49.352Z"),
        modifiedAt: new Date("2025-03-18T10:51:44.563Z"),
        metadata: {
          "key": 5071.47,
        },
        type: "discord",
        description: "really near mmm fully molasses birdcage underneath",
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
        path: "/Users",
        mimeType: "<value>",
        size: 255554,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-05-26T10:40:37.147Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2023-08-06T23:18:04.534Z"),
        sizeReadable: "<value>",
        publicUrl: "https://ornate-thorn.name/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-05-30T17:44:54.237Z"),
    modifiedAt: new Date("2024-11-04T17:16:17.846Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "recurring",
    recurringInterval: "month",
    priceCurrency: "<value>",
    unitAmount: "<value>",
    capAmount: 354035,
    meterId: "<value>",
    meter: {
      id: "<value>",
      name: "<value>",
    },
  },
  discount: {
    duration: "repeating",
    durationInMonths: 629488,
    type: "percentage",
    amount: 921603,
    currency: "New Israeli Sheqel",
    id: "<value>",
    name: "<value>",
    code: "<value>",
  },
  subscriptionId: "<value>",
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2023-01-28T03:55:32.852Z"),
        modifiedAt: new Date("2024-12-18T11:09:36.166Z"),
        id: "<value>",
        metadata: {
          "key": 446334,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        properties: {
          options: [
            {
              value: "<value>",
              label: "<value>",
            },
          ],
        },
      },
      order: 726126,
      required: false,
    },
  ],
  customerMetadata: {
    "key": 59566,
  },
};
```

## Fields

| Field                                                                                                                                                                                                | Type                                                                                                                                                                                                 | Required                                                                                                                                                                                             | Description                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | Creation timestamp of the object.                                                                                                                                                                    |
| `modifiedAt`                                                                                                                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | Last modification timestamp of the object.                                                                                                                                                           |
| `id`                                                                                                                                                                                                 | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | The ID of the object.                                                                                                                                                                                |
| `customFieldData`                                                                                                                                                                                    | Record<string, *components.CheckoutCustomFieldData*>                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                   | Key-value object storing custom field values.                                                                                                                                                        |
| `paymentProcessor`                                                                                                                                                                                   | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `status`                                                                                                                                                                                             | [components.CheckoutStatus](../../models/components/checkoutstatus.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `clientSecret`                                                                                                                                                                                       | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Client secret used to update and complete the checkout session from the client.                                                                                                                      |
| `url`                                                                                                                                                                                                | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | URL where the customer can access the checkout session.                                                                                                                                              |
| `expiresAt`                                                                                                                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | Expiration date and time of the checkout session.                                                                                                                                                    |
| `successUrl`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | URL where the customer will be redirected after a successful payment.                                                                                                                                |
| `embedOrigin`                                                                                                                                                                                        | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page.                                         |
| `amount`                                                                                                                                                                                             | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Amount in cents, before discounts and taxes.                                                                                                                                                         |
| `discountAmount`                                                                                                                                                                                     | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Discount amount in cents.                                                                                                                                                                            |
| `netAmount`                                                                                                                                                                                          | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Amount in cents, after discounts but before taxes.                                                                                                                                                   |
| `taxAmount`                                                                                                                                                                                          | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Sales tax amount in cents. If `null`, it means there is no enough information yet to calculate it.                                                                                                   |
| `totalAmount`                                                                                                                                                                                        | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Amount in cents, after discounts and taxes.                                                                                                                                                          |
| `currency`                                                                                                                                                                                           | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Currency code of the checkout session.                                                                                                                                                               |
| `productId`                                                                                                                                                                                          | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | ID of the product to checkout.                                                                                                                                                                       |
| `productPriceId`                                                                                                                                                                                     | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | ID of the product price to checkout.                                                                                                                                                                 |
| `discountId`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | ID of the discount applied to the checkout.                                                                                                                                                          |
| `allowDiscountCodes`                                                                                                                                                                                 | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.                           |
| `isDiscountApplicable`                                                                                                                                                                               | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether the discount is applicable to the checkout. Typically, free and custom prices are not discountable.                                                                                          |
| `isFreeProductPrice`                                                                                                                                                                                 | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether the product price is free, regardless of discounts.                                                                                                                                          |
| `isPaymentRequired`                                                                                                                                                                                  | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether the checkout requires payment, e.g. in case of free products or discounts that cover the total amount.                                                                                       |
| `isPaymentSetupRequired`                                                                                                                                                                             | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether the checkout requires setting up a payment method, regardless of the amount, e.g. subscriptions that have first free cycles.                                                                 |
| `isPaymentFormRequired`                                                                                                                                                                              | *boolean*                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                   | Whether the checkout requires a payment form, whether because of a payment or payment method setup.                                                                                                  |
| `customerId`                                                                                                                                                                                         | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `customerName`                                                                                                                                                                                       | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Name of the customer.                                                                                                                                                                                |
| `customerEmail`                                                                                                                                                                                      | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Email address of the customer.                                                                                                                                                                       |
| `customerIpAddress`                                                                                                                                                                                  | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `customerBillingAddress`                                                                                                                                                                             | [components.Address](../../models/components/address.md)                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `customerTaxId`                                                                                                                                                                                      | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `paymentProcessorMetadata`                                                                                                                                                                           | Record<string, *string*>                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| ~~`subtotalAmount`~~                                                                                                                                                                                 | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                                              |
| `metadata`                                                                                                                                                                                           | Record<string, *components.CheckoutMetadata*>                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `customerExternalId`                                                                                                                                                                                 | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | ID of the customer in your system. If a matching customer exists on Polar, the resulting order will be linked to this customer. Otherwise, a new customer will be created with this external ID set. |
| `products`                                                                                                                                                                                           | [components.CheckoutProduct](../../models/components/checkoutproduct.md)[]                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                   | List of products available to select.                                                                                                                                                                |
| `product`                                                                                                                                                                                            | [components.CheckoutProduct](../../models/components/checkoutproduct.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Product data for a checkout session.                                                                                                                                                                 |
| `productPrice`                                                                                                                                                                                       | *components.CheckoutProductPrice*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                   | Price of the selected product.                                                                                                                                                                       |
| `discount`                                                                                                                                                                                           | *components.CheckoutDiscount*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `subscriptionId`                                                                                                                                                                                     | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `attachedCustomFields`                                                                                                                                                                               | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `customerMetadata`                                                                                                                                                                                   | Record<string, *components.CustomerMetadata*>                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |