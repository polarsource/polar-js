# Checkout

Checkout session data retrieved using an access token.

## Example Usage

```typescript
import { Checkout } from "@polar-sh/sdk/models/components/checkout.js";

let value: Checkout = {
  createdAt: new Date("2025-08-02T23:05:08.428Z"),
  modifiedAt: new Date("2025-12-02T07:40:27.262Z"),
  id: "<value>",
  paymentProcessor: "stripe",
  status: "failed",
  clientSecret: "<value>",
  url: "https://sorrowful-finger.com",
  expiresAt: new Date("2024-03-22T08:04:18.382Z"),
  successUrl: "https://complete-availability.net/",
  embedOrigin: "<value>",
  amount: 11427,
  discountAmount: 770581,
  netAmount: 146946,
  taxAmount: 79522,
  totalAmount: 89603,
  currency: "Philippine Peso",
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
    country: "US",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {
    "key": "<value>",
  },
  subtotalAmount: 420539,
  metadata: {
    "key": 860552,
  },
  customerExternalId: "<id>",
  products: [
    {
      createdAt: new Date("2025-03-07T20:10:20.231Z"),
      modifiedAt: new Date("2023-10-24T06:42:18.790Z"),
      id: "<value>",
      name: "<value>",
      description: "emphasize sarong in-joke oof",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-07-12T23:28:59.820Z"),
          modifiedAt: new Date("2024-08-10T15:36:46.154Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 277596,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-05-22T05:32:53.930Z"),
          modifiedAt: new Date("2024-03-06T08:56:27.585Z"),
          id: "<value>",
          type: "meter_credit",
          description: "impish exalted late quickly",
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
          size: 62713,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-04-09T17:44:39.673Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-10-11T12:25:32.503Z"),
          sizeReadable: "<value>",
          publicUrl: "https://animated-velocity.info",
        },
      ],
    },
  ],
  product: {
    createdAt: new Date("2024-01-26T22:49:04.962Z"),
    modifiedAt: new Date("2023-01-18T21:30:17.764Z"),
    id: "<value>",
    name: "<value>",
    description: "helplessly hence why baseboard",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-12-27T02:31:12.899Z"),
        modifiedAt: new Date("2023-09-27T16:26:45.665Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 517309,
        maximumAmount: 424089,
        presetAmount: 554688,
      },
    ],
    benefits: [
      {
        createdAt: new Date("2023-11-11T14:36:11.448Z"),
        modifiedAt: new Date("2025-02-13T09:44:27.866Z"),
        id: "<value>",
        type: "github_repository",
        description: "um unit grade soap sizzling",
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
        path: "/usr/X11R6",
        mimeType: "<value>",
        size: 967966,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-12-25T20:43:06.136Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-05-10T04:43:03.147Z"),
        sizeReadable: "<value>",
        publicUrl: "https://frail-circumference.info/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-02-24T13:22:59.477Z"),
    modifiedAt: new Date("2025-09-08T08:13:49.082Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    recurringInterval: "year",
    priceCurrency: "<value>",
    priceAmount: 546885,
  },
  discount: {
    duration: "forever",
    durationInMonths: 896762,
    type: "fixed",
    amount: 552078,
    currency: "Euro",
    id: "<value>",
    name: "<value>",
    code: "<value>",
  },
  subscriptionId: "<value>",
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-03-16T06:40:22.205Z"),
        modifiedAt: new Date("2023-09-30T06:16:04.028Z"),
        id: "<value>",
        metadata: {
          "key": 310381,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        properties: {},
      },
      order: 373035,
      required: false,
    },
  ],
  customerMetadata: {
    "key": 750595,
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