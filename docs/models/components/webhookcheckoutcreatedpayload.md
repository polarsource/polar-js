# WebhookCheckoutCreatedPayload

Sent when a new checkout is created.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutCreatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutcreatedpayload.js";

let value: WebhookCheckoutCreatedPayload = {
  data: {
    createdAt: new Date("2024-06-17T23:01:40.328Z"),
    modifiedAt: new Date("2023-08-20T15:49:44.498Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "failed",
    clientSecret: "<value>",
    url: "https://unhealthy-noon.info/",
    expiresAt: new Date("2025-11-23T17:32:24.813Z"),
    successUrl: "https://sophisticated-slipper.info",
    embedOrigin: "<value>",
    amount: 968219,
    discountAmount: 557270,
    netAmount: 112135,
    taxAmount: 449681,
    totalAmount: 564684,
    currency: "Egyptian Pound",
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
    subtotalAmount: 750787,
    metadata: {
      "key": 463878,
    },
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2023-08-14T22:17:13.209Z"),
        modifiedAt: new Date("2024-10-03T07:12:22.482Z"),
        id: "<value>",
        name: "<value>",
        description: "always blah amongst proliferate onto weep",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-10-12T08:11:53.251Z"),
            modifiedAt: new Date("2024-03-22T06:17:10.752Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 817045,
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2024-07-24T05:20:43.555Z"),
            modifiedAt: new Date("2025-12-21T18:34:56.044Z"),
            metadata: {
              "key": false,
            },
            type: "downloadables",
            description: "among filthy aware quizzically safely",
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
            path: "/home/user/dir",
            mimeType: "<value>",
            size: 990002,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-02-28T01:09:21.212Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-06-28T08:53:26.675Z"),
            sizeReadable: "<value>",
            publicUrl: "https://obedient-legislature.com/",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2024-09-16T18:15:48.057Z"),
      modifiedAt: new Date("2025-02-05T19:40:37.393Z"),
      id: "<value>",
      name: "<value>",
      description: "phooey whoever contrast meh youthfully",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-09-08T10:45:40.024Z"),
          modifiedAt: new Date("2023-03-21T07:44:01.177Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
          priceCurrency: "<value>",
          minimumAmount: 778114,
          maximumAmount: 400327,
          presetAmount: 655577,
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-07-21T22:16:04.637Z"),
          modifiedAt: new Date("2025-10-30T04:02:45.122Z"),
          metadata: {
            "key": false,
          },
          type: "github_repository",
          description:
            "ha stir-fry than pace instead within worth awkwardly duh",
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
          path: "/Network",
          mimeType: "<value>",
          size: 519265,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-11-25T06:20:11.979Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-01-21T15:54:46.328Z"),
          sizeReadable: "<value>",
          publicUrl: "https://puzzled-thunderbolt.net",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2025-09-27T11:53:48.047Z"),
      modifiedAt: new Date("2023-01-15T14:16:05.548Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 814343,
      maximumAmount: 138638,
      presetAmount: 396236,
    },
    discount: {
      duration: "forever",
      durationInMonths: 316703,
      type: "percentage",
      basisPoints: 616962,
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2024-01-13T22:46:59.675Z"),
          modifiedAt: new Date("2025-02-26T23:42:21.748Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 378891,
        required: false,
      },
    ],
    customerMetadata: {
      "key": "<value>",
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | checkout.created                                           |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |                                                            |