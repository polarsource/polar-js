# Checkout

Checkout session data retrieved using an access token.

## Example Usage

```typescript
import { Checkout } from "@polar-sh/sdk/models/components/checkout.js";

let value: Checkout = {
  createdAt: new Date("2024-09-02T21:01:43.273Z"),
  modifiedAt: new Date("2025-08-01T03:56:17.075Z"),
  id: "<value>",
  paymentProcessor: "stripe",
  status: "succeeded",
  clientSecret: "<value>",
  url: "https://competent-awareness.biz/",
  expiresAt: new Date("2023-10-15T06:45:20.871Z"),
  successUrl: "https://rich-porter.biz/",
  embedOrigin: "<value>",
  amount: 379927,
  taxAmount: 181151,
  currency: "Surinam Dollar",
  subtotalAmount: 56848,
  totalAmount: 696997,
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
  metadata: {
    "key": false,
  },
  customerExternalId: "<id>",
  products: [
    {
      createdAt: new Date("2023-10-12T07:51:04.077Z"),
      modifiedAt: new Date("2024-02-14T16:46:50.809Z"),
      id: "<value>",
      name: "<value>",
      description: "after horst vanadyl mmm ownership toward curly",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-04-09T17:44:39.673Z"),
          modifiedAt: new Date("2023-10-11T12:25:32.503Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 33304,
          maximumAmount: 958983,
          presetAmount: 355369,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-01-26T22:49:04.962Z"),
          modifiedAt: new Date("2023-01-18T21:30:17.764Z"),
          id: "<value>",
          type: "custom",
          description: "furthermore geez um scenario hippodrome vain",
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
          path: "/boot",
          mimeType: "<value>",
          size: 232627,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-01-17T23:27:12.582Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-06-12T04:52:41.784Z"),
          sizeReadable: "<value>",
          publicUrl: "https://wiggly-term.biz",
        },
      ],
    },
  ],
  product: {
    createdAt: new Date("2025-12-23T05:51:49.489Z"),
    modifiedAt: new Date("2023-10-01T08:44:41.136Z"),
    id: "<value>",
    name: "<value>",
    description: "dress gratefully wasteful",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2025-12-25T20:43:06.136Z"),
        modifiedAt: new Date("2024-05-10T04:43:03.147Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
        unitAmount: 152354,
        includedUnits: 417486,
        capAmount: 131289,
        meterId: "<value>",
        meter: {
          id: "<value>",
          name: "<value>",
        },
      },
    ],
    benefits: [
      {
        createdAt: new Date("2024-10-24T02:42:52.981Z"),
        modifiedAt: new Date("2024-02-24T13:22:59.477Z"),
        id: "<value>",
        type: "license_keys",
        description:
          "firm lieu limply decide seemingly almost recount venture bus questioningly",
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
        path: "/usr/src",
        mimeType: "<value>",
        size: 618826,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2023-05-27T06:34:13.913Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-12-10T17:10:47.327Z"),
        sizeReadable: "<value>",
        publicUrl: "https://meager-topsail.name",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2025-11-27T05:48:20.651Z"),
    modifiedAt: new Date("2025-10-05T01:58:01.397Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "one_time",
    recurringInterval: "month",
    unitAmount: 389135,
    includedUnits: 952143,
    capAmount: 300029,
    meterId: "<value>",
    meter: {
      id: "<value>",
      name: "<value>",
    },
  },
  discount: {
    duration: "repeating",
    type: "fixed",
    amount: 907876,
    currency: "Canadian Dollar",
    id: "<value>",
    name: "<value>",
    code: "<value>",
  },
  subscriptionId: "<value>",
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-04-27T12:41:51.916Z"),
        modifiedAt: new Date("2023-03-25T19:54:28.701Z"),
        id: "<value>",
        metadata: {
          "key": false,
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
      order: 247399,
      required: false,
    },
  ],
  customerMetadata: {
    "key": "<value>",
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
| `amount`                                                                                                                                                                                             | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `taxAmount`                                                                                                                                                                                          | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Computed tax amount to pay in cents.                                                                                                                                                                 |
| `currency`                                                                                                                                                                                           | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Currency code of the checkout session.                                                                                                                                                               |
| `subtotalAmount`                                                                                                                                                                                     | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Subtotal amount in cents, including discounts and before tax.                                                                                                                                        |
| `totalAmount`                                                                                                                                                                                        | *number*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Total amount to pay in cents, including discounts and after tax.                                                                                                                                     |
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
| `metadata`                                                                                                                                                                                           | Record<string, *components.CheckoutMetadata*>                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `customerExternalId`                                                                                                                                                                                 | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | ID of the customer in your system. If a matching customer exists on Polar, the resulting order will be linked to this customer. Otherwise, a new customer will be created with this external ID set. |
| `products`                                                                                                                                                                                           | [components.CheckoutProduct](../../models/components/checkoutproduct.md)[]                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                   | List of products available to select.                                                                                                                                                                |
| `product`                                                                                                                                                                                            | [components.CheckoutProduct](../../models/components/checkoutproduct.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | Product data for a checkout session.                                                                                                                                                                 |
| `productPrice`                                                                                                                                                                                       | *components.CheckoutProductPrice*                                                                                                                                                                    | :heavy_check_mark:                                                                                                                                                                                   | Price of the selected product.                                                                                                                                                                       |
| `discount`                                                                                                                                                                                           | *components.CheckoutDiscount*                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `subscriptionId`                                                                                                                                                                                     | *string*                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `attachedCustomFields`                                                                                                                                                                               | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |
| `customerMetadata`                                                                                                                                                                                   | Record<string, *components.CustomerMetadata*>                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                   | N/A                                                                                                                                                                                                  |