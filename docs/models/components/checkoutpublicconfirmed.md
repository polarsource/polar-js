# CheckoutPublicConfirmed

Checkout session data retrieved using the client secret after confirmation.

It contains a customer session token to retrieve order information
right after the checkout.

## Example Usage

```typescript
import { CheckoutPublicConfirmed } from "@polar-sh/sdk/models/components/checkoutpublicconfirmed.js";

let value: CheckoutPublicConfirmed = {
  createdAt: new Date("2024-10-16T08:53:32.833Z"),
  modifiedAt: new Date("2023-07-15T17:52:40.466Z"),
  id: "<value>",
  paymentProcessor: "stripe",
  clientSecret: "<value>",
  url: "https://quick-witted-saw.net",
  expiresAt: new Date("2023-02-22T09:59:05.552Z"),
  successUrl: "https://extra-large-tooth.net",
  embedOrigin: "<value>",
  amount: 910542,
  discountAmount: 161082,
  netAmount: 81294,
  taxAmount: 879261,
  totalAmount: 678454,
  currency: "Russian Ruble",
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
    country: "SE",
  },
  customerTaxId: "<id>",
  paymentProcessorMetadata: {
    "key": "<value>",
  },
  subtotalAmount: 225800,
  products: [
    {
      createdAt: new Date("2024-07-29T10:16:49.727Z"),
      modifiedAt: new Date("2023-05-08T09:25:55.844Z"),
      id: "<value>",
      name: "<value>",
      description:
        "briskly woot anenst arbitrate quick anti fooey monthly phew outsource",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-01-04T22:52:32.913Z"),
          modifiedAt: new Date("2023-02-06T12:45:24.290Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 475244,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2023-09-03T17:03:44.296Z"),
          modifiedAt: new Date("2024-12-16T07:55:24.449Z"),
          metadata: {
            "key": 18744,
          },
          type: "downloadables",
          description: "above ha past sonar aw",
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
          path: "/usr",
          mimeType: "<value>",
          size: 82749,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-11-02T03:56:39.644Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-11-20T06:33:03.320Z"),
          sizeReadable: "<value>",
          publicUrl: "https://unique-subsidy.biz",
        },
      ],
    },
  ],
  product: {
    createdAt: new Date("2025-07-26T00:56:26.395Z"),
    modifiedAt: new Date("2023-05-13T02:54:35.607Z"),
    id: "<value>",
    name: "<value>",
    description: "pneumonia whether secret oh",
    recurringInterval: "year",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2023-02-20T12:25:37.816Z"),
        modifiedAt: new Date("2024-05-09T11:42:04.427Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
      },
    ],
    benefits: [
      {
        id: "<value>",
        createdAt: new Date("2024-12-12T22:58:53.279Z"),
        modifiedAt: new Date("2024-10-17T21:23:31.516Z"),
        metadata: {
          "key": 5244.75,
        },
        type: "downloadables",
        description: "crossly fiercely square gleaming sardonic",
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
        path: "/var",
        mimeType: "<value>",
        size: 740123,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2024-01-29T20:33:59.489Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2025-11-25T18:45:38.907Z"),
        sizeReadable: "<value>",
        publicUrl: "https://reflecting-making.com/",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2024-08-25T02:26:49.009Z"),
    modifiedAt: new Date("2023-12-18T16:22:46.148Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "recurring",
    recurringInterval: "year",
    priceCurrency: "<value>",
    unitAmount: "<value>",
    capAmount: 804971,
    meterId: "<value>",
    meter: {
      id: "<value>",
      name: "<value>",
    },
  },
  discount: {
    duration: "repeating",
    durationInMonths: 787634,
    type: "fixed",
    basisPoints: 213404,
    id: "<value>",
    name: "<value>",
    code: "<value>",
  },
  organization: {
    createdAt: new Date("2023-04-15T23:05:42.757Z"),
    modifiedAt: new Date("2024-05-19T12:28:16.571Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://present-mountain.info/",
    email: "Janice.Lueilwitz@hotmail.com",
    website: "<value>",
    socials: [
      {
        platform: "other",
        url: "https://easy-chairperson.info/",
      },
    ],
    detailsSubmittedAt: new Date("2025-12-12T16:27:36.101Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
    bio: "<value>",
    company: "Turner, Leannon and Grimes",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
  },
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2024-07-20T06:03:08.352Z"),
        modifiedAt: new Date("2025-11-29T06:44:35.933Z"),
        id: "<value>",
        metadata: {
          "key": 729662,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        properties: {},
      },
      order: 129657,
      required: false,
    },
  ],
  customerSessionToken: "<value>",
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Creation timestamp of the object.                                                                                                                                          |
| `modifiedAt`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Last modification timestamp of the object.                                                                                                                                 |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The ID of the object.                                                                                                                                                      |
| `customFieldData`                                                                                                                                                          | Record<string, *components.CheckoutPublicConfirmedCustomFieldData*>                                                                                                        | :heavy_minus_sign:                                                                                                                                                         | Key-value object storing custom field values.                                                                                                                              |
| `paymentProcessor`                                                                                                                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `status`                                                                                                                                                                   | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `clientSecret`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Client secret used to update and complete the checkout session from the client.                                                                                            |
| `url`                                                                                                                                                                      | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | URL where the customer can access the checkout session.                                                                                                                    |
| `expiresAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Expiration date and time of the checkout session.                                                                                                                          |
| `successUrl`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | URL where the customer will be redirected after a successful payment.                                                                                                      |
| `embedOrigin`                                                                                                                                                              | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page.               |
| `amount`                                                                                                                                                                   | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Amount in cents, before discounts and taxes.                                                                                                                               |
| `discountAmount`                                                                                                                                                           | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Discount amount in cents.                                                                                                                                                  |
| `netAmount`                                                                                                                                                                | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Amount in cents, after discounts but before taxes.                                                                                                                         |
| `taxAmount`                                                                                                                                                                | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Sales tax amount in cents. If `null`, it means there is no enough information yet to calculate it.                                                                         |
| `totalAmount`                                                                                                                                                              | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Amount in cents, after discounts and taxes.                                                                                                                                |
| `currency`                                                                                                                                                                 | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Currency code of the checkout session.                                                                                                                                     |
| `productId`                                                                                                                                                                | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the product to checkout.                                                                                                                                             |
| `productPriceId`                                                                                                                                                           | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the product price to checkout.                                                                                                                                       |
| `discountId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | ID of the discount applied to the checkout.                                                                                                                                |
| `allowDiscountCodes`                                                                                                                                                       | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it. |
| `isDiscountApplicable`                                                                                                                                                     | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the discount is applicable to the checkout. Typically, free and custom prices are not discountable.                                                                |
| `isFreeProductPrice`                                                                                                                                                       | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the product price is free, regardless of discounts.                                                                                                                |
| `isPaymentRequired`                                                                                                                                                        | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the checkout requires payment, e.g. in case of free products or discounts that cover the total amount.                                                             |
| `isPaymentSetupRequired`                                                                                                                                                   | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the checkout requires setting up a payment method, regardless of the amount, e.g. subscriptions that have first free cycles.                                       |
| `isPaymentFormRequired`                                                                                                                                                    | *boolean*                                                                                                                                                                  | :heavy_check_mark:                                                                                                                                                         | Whether the checkout requires a payment form, whether because of a payment or payment method setup.                                                                        |
| `customerId`                                                                                                                                                               | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `customerName`                                                                                                                                                             | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Name of the customer.                                                                                                                                                      |
| `customerEmail`                                                                                                                                                            | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Email address of the customer.                                                                                                                                             |
| `customerIpAddress`                                                                                                                                                        | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `customerBillingAddress`                                                                                                                                                   | [components.Address](../../models/components/address.md)                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `customerTaxId`                                                                                                                                                            | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `paymentProcessorMetadata`                                                                                                                                                 | Record<string, *string*>                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| ~~`subtotalAmount`~~                                                                                                                                                       | *number*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                                    |
| `products`                                                                                                                                                                 | [components.CheckoutProduct](../../models/components/checkoutproduct.md)[]                                                                                                 | :heavy_check_mark:                                                                                                                                                         | List of products available to select.                                                                                                                                      |
| `product`                                                                                                                                                                  | [components.CheckoutProduct](../../models/components/checkoutproduct.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                         | Product data for a checkout session.                                                                                                                                       |
| `productPrice`                                                                                                                                                             | *components.CheckoutPublicConfirmedProductPrice*                                                                                                                           | :heavy_check_mark:                                                                                                                                                         | Price of the selected product.                                                                                                                                             |
| `discount`                                                                                                                                                                 | *components.CheckoutPublicConfirmedDiscount*                                                                                                                               | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `organization`                                                                                                                                                             | [components.Organization](../../models/components/organization.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `attachedCustomFields`                                                                                                                                                     | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                                         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `customerSessionToken`                                                                                                                                                     | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |