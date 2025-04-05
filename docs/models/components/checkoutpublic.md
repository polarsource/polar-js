# CheckoutPublic

Checkout session data retrieved using the client secret.

## Example Usage

```typescript
import { CheckoutPublic } from "@polar-sh/sdk/models/components/checkoutpublic.js";

let value: CheckoutPublic = {
  createdAt: new Date("2024-12-14T20:36:57.037Z"),
  modifiedAt: new Date("2024-03-31T13:03:44.610Z"),
  id: "<value>",
  paymentProcessor: "stripe",
  status: "succeeded",
  clientSecret: "<value>",
  url: "https://annual-begonia.biz/",
  expiresAt: new Date("2023-09-30T09:44:04.147Z"),
  successUrl: "https://simple-castanet.name/",
  embedOrigin: "<value>",
  amount: 57291,
  discountAmount: 326222,
  netAmount: 736132,
  taxAmount: 449851,
  totalAmount: 58955,
  currency: "Yemeni Rial",
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
  subtotalAmount: 580331,
  products: [
    {
      createdAt: new Date("2024-11-02T12:15:27.373Z"),
      modifiedAt: new Date("2025-01-01T09:53:52.426Z"),
      id: "<value>",
      name: "<value>",
      description: "excepting deliberately omelet verbally",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-09-29T07:51:46.586Z"),
          modifiedAt: new Date("2024-07-11T02:04:41.072Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          unitAmount: 494707,
          capAmount: 667669,
          meterId: "<value>",
          meter: {
            id: "<value>",
            name: "<value>",
          },
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-11-21T05:48:17.627Z"),
          modifiedAt: new Date("2024-07-27T17:28:22.859Z"),
          id: "<value>",
          type: "custom",
          description: "giant actually given lashes",
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
          size: 104768,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-08-07T11:19:43.767Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-08-09T13:30:52.992Z"),
          sizeReadable: "<value>",
          publicUrl: "https://smug-importance.net",
        },
      ],
    },
  ],
  product: {
    createdAt: new Date("2023-04-03T22:35:35.753Z"),
    modifiedAt: new Date("2025-01-25T14:54:55.945Z"),
    id: "<value>",
    name: "<value>",
    description: "but kindly dusk finally hypothesise aside whoever ouch",
    recurringInterval: "month",
    isRecurring: false,
    isArchived: false,
    organizationId: "<value>",
    prices: [
      {
        createdAt: new Date("2024-03-06T14:28:43.848Z"),
        modifiedAt: new Date("2024-01-18T20:31:44.092Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
    ],
    benefits: [
      {
        createdAt: new Date("2025-12-09T05:10:58.132Z"),
        modifiedAt: new Date("2025-06-20T22:57:10.576Z"),
        id: "<value>",
        type: "github_repository",
        description:
          "how knowledgeably frightfully extremely ligate immediately likewise",
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
        path: "/usr/bin",
        mimeType: "<value>",
        size: 129179,
        storageVersion: "<value>",
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
        checksumSha256Hex: "<value>",
        lastModifiedAt: new Date("2025-07-08T09:17:29.005Z"),
        version: "<value>",
        isUploaded: false,
        createdAt: new Date("2024-08-08T13:49:15.760Z"),
        sizeReadable: "<value>",
        publicUrl: "https://impish-brochure.org",
      },
    ],
  },
  productPrice: {
    createdAt: new Date("2025-09-02T13:31:45.351Z"),
    modifiedAt: new Date("2025-09-17T12:39:49.638Z"),
    id: "<value>",
    isArchived: false,
    productId: "<value>",
    type: "one_time",
    recurringInterval: "year",
  },
  discount: {
    duration: "once",
    durationInMonths: 120665,
    type: "percentage",
    basisPoints: 329173,
    id: "<value>",
    name: "<value>",
    code: "<value>",
  },
  organization: {
    createdAt: new Date("2025-11-13T00:20:58.148Z"),
    modifiedAt: new Date("2023-11-28T09:00:40.398Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://sour-iridescence.name/",
    email: "Sheridan.Ruecker50@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "other",
        url: "https://limping-intellect.biz/",
      },
    ],
    detailsSubmittedAt: new Date("2023-10-01T21:13:25.844Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
    bio: "<value>",
    company: "Ritchie Group",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 980049,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 395808,
    profileSettings: {},
  },
  attachedCustomFields: [
    {
      customFieldId: "<value>",
      customField: {
        createdAt: new Date("2025-02-14T20:17:30.008Z"),
        modifiedAt: new Date("2024-10-01T06:43:19.591Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        slug: "<value>",
        name: "<value>",
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        properties: {},
      },
      order: 88085,
      required: false,
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                      | Type                                                                                                                                                                       | Required                                                                                                                                                                   | Description                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Creation timestamp of the object.                                                                                                                                          |
| `modifiedAt`                                                                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                                              | :heavy_check_mark:                                                                                                                                                         | Last modification timestamp of the object.                                                                                                                                 |
| `id`                                                                                                                                                                       | *string*                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                         | The ID of the object.                                                                                                                                                      |
| `customFieldData`                                                                                                                                                          | Record<string, *components.CheckoutPublicCustomFieldData*>                                                                                                                 | :heavy_minus_sign:                                                                                                                                                         | Key-value object storing custom field values.                                                                                                                              |
| `paymentProcessor`                                                                                                                                                         | [components.PaymentProcessor](../../models/components/paymentprocessor.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `status`                                                                                                                                                                   | [components.CheckoutStatus](../../models/components/checkoutstatus.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
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
| `productPrice`                                                                                                                                                             | *components.CheckoutPublicProductPrice*                                                                                                                                    | :heavy_check_mark:                                                                                                                                                         | Price of the selected product.                                                                                                                                             |
| `discount`                                                                                                                                                                 | *components.CheckoutPublicDiscount*                                                                                                                                        | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `organization`                                                                                                                                                             | [components.Organization](../../models/components/organization.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |
| `attachedCustomFields`                                                                                                                                                     | [components.AttachedCustomField](../../models/components/attachedcustomfield.md)[]                                                                                         | :heavy_check_mark:                                                                                                                                                         | N/A                                                                                                                                                                        |