# WebhookCheckoutUpdatedPayload

Sent when a checkout is updated.

**Discord & Slack support:** Basic

## Example Usage

```typescript
import { WebhookCheckoutUpdatedPayload } from "@polar-sh/sdk/models/components/webhookcheckoutupdatedpayload.js";

let value: WebhookCheckoutUpdatedPayload = {
  data: {
    createdAt: new Date("2024-10-28T04:36:13.190Z"),
    modifiedAt: new Date("2024-11-28T22:37:10.254Z"),
    id: "<value>",
    paymentProcessor: "stripe",
    status: "expired",
    clientSecret: "<value>",
    url: "https://posh-community.info/",
    expiresAt: new Date("2025-11-15T13:36:19.686Z"),
    successUrl: "https://incomplete-skyscraper.net",
    embedOrigin: "<value>",
    amount: 695971,
    discountAmount: 338469,
    netAmount: 166510,
    taxAmount: 556902,
    totalAmount: 656558,
    currency: "Serbian Dinar",
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
    subtotalAmount: 577515,
    metadata: {
      "key": "<value>",
    },
    customerExternalId: "<id>",
    products: [
      {
        createdAt: new Date("2024-08-19T23:36:13.978Z"),
        modifiedAt: new Date("2024-12-21T10:55:54.892Z"),
        id: "<value>",
        name: "<value>",
        description:
          "below however faint but talkative swim stunt tenant or plump",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-05-05T15:08:17.778Z"),
            modifiedAt: new Date("2025-08-09T12:34:03.537Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            id: "<value>",
            createdAt: new Date("2025-09-26T20:54:23.897Z"),
            modifiedAt: new Date("2025-06-08T15:30:07.568Z"),
            metadata: {
              "key": 947665,
            },
            type: "github_repository",
            description: "because even lock",
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
            size: 771356,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-07-07T19:42:29.721Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-10-16T15:47:42.097Z"),
            sizeReadable: "<value>",
            publicUrl: "https://funny-filter.name/",
          },
        ],
      },
    ],
    product: {
      createdAt: new Date("2023-12-01T09:47:38.796Z"),
      modifiedAt: new Date("2025-11-10T22:22:50.477Z"),
      id: "<value>",
      name: "<value>",
      description:
        "guest pfft typeface whereas however pfft gosh intelligent accept aw",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-12-27T08:10:51.893Z"),
          modifiedAt: new Date("2025-03-11T11:11:33.657Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          id: "<value>",
          createdAt: new Date("2025-01-28T11:27:40.677Z"),
          modifiedAt: new Date("2025-03-10T00:53:09.114Z"),
          metadata: {
            "key": 858853,
          },
          type: "license_keys",
          description: "grandson democratize even about",
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
          path: "/etc",
          mimeType: "<value>",
          size: 616936,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-01-29T01:43:38.112Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-11-11T20:38:28.438Z"),
          sizeReadable: "<value>",
          publicUrl: "https://remarkable-peninsula.net",
        },
      ],
    },
    productPrice: {
      createdAt: new Date("2024-12-20T07:37:35.260Z"),
      modifiedAt: new Date("2023-06-08T13:21:45.007Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      minimumAmount: 181484,
      maximumAmount: 175197,
      presetAmount: 269119,
    },
    discount: {
      duration: "once",
      type: "percentage",
      basisPoints: 216203,
      id: "<value>",
      name: "<value>",
      code: "<value>",
    },
    subscriptionId: "<value>",
    attachedCustomFields: [
      {
        customFieldId: "<value>",
        customField: {
          createdAt: new Date("2023-01-05T14:41:31.341Z"),
          modifiedAt: new Date("2024-11-12T02:34:57.690Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          slug: "<value>",
          name: "<value>",
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          properties: {},
        },
        order: 829857,
        required: false,
      },
    ],
    customerMetadata: {
      "key": 312084,
    },
  },
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `type`                                                     | *string*                                                   | :heavy_check_mark:                                         | N/A                                                        | checkout.updated                                           |
| `data`                                                     | [components.Checkout](../../models/components/checkout.md) | :heavy_check_mark:                                         | Checkout session data retrieved using an access token.     |                                                            |