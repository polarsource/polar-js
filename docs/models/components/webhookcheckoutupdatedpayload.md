# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutupdatedpayload.js";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2025-06-25T05:46:03.384Z"),
    modifiedAt: new Date("2025-03-06T05:29:10.468Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "open",
    clientSecret: "<value>",
    url: "https://edible-teriyaki.com",
    expiresAt: new Date("2024-01-01T01:07:36.461Z"),
    successUrl: "https://little-slide.biz/",
    embedOrigin: "<value>",
    amount: 150935,
    taxAmount: 330267,
    currency: "Lilangeni",
    subtotalAmount: 140384,
    totalAmount: 227362,
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
    metadata: {
      "key": false,
    },
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2024-03-09T04:12:54.857Z"),
        modifiedAt: new Date("2023-12-07T16:20:05.131Z"),
        id: "<value>",
        name: "<value>",
        description: "gently electric mmm zen strange earnest boo legitimize",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-07-24T00:13:17.699Z"),
            modifiedAt: new Date("2023-02-03T14:30:29.574Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-11-11T05:29:07.868Z"),
            modifiedAt: new Date("2024-09-30T05:20:17.730Z"),
            id: "<value>",
            type: "custom",
            description: "resource lustrous why coagulate stir-fry",
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
            path: "/private/tmp",
            mimeType: "<value>",
            size: 969206,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-10-19T03:11:54.710Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-01-15T19:19:58.868Z"),
            sizeReadable: "<value>",
            publicUrl: "https://fantastic-smog.biz/",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2023-12-07T10:47:27.448Z"),
      modifiedAt: new Date("2025-05-17T04:26:46.844Z"),
      id: "<value>",
      name: "<value>",
      description:
        "against however inside above sun beneath biodegradable failing",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2025-09-20T05:30:40.558Z"),
          modifiedAt: new Date("2025-06-13T17:38:48.093Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          priceAmount: 962396,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-05-02T03:10:42.322Z"),
          modifiedAt: new Date("2024-11-22T09:23:59.598Z"),
          id: "<value>",
          type: "license_keys",
          description:
            "fess boo merge tenderly huzzah shanghai ruddy gadzooks tricky realistic",
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
          path: "/media",
          mimeType: "<value>",
          size: 19462,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-03-13T13:08:44.087Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-12-05T03:31:10.013Z"),
          sizeReadable: "<value>",
          publicUrl: "https://unhealthy-strategy.name",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2025-06-12T11:40:46.096Z"),
      modifiedAt: new Date("2023-04-19T01:50:49.700Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 41179,
    },
    discount: {
      duration: "repeating",
      durationInMonths: 51007,
      type: "percentage",
      basisPoints: 502453,
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-06-12T14:57:34.476Z"),
          modifiedAt: new Date("2025-04-27T11:48:28.988Z"),
          id: "<value>",
          metadata: {
            "key": 983000,
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 982248,
        required: false,
      },
    ],
    customerMetadata: {
      "key": false,
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | checkout.updated                                           |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |                                                            |