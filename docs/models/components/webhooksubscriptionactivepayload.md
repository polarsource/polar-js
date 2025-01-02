# WebhookSubscriptionActivePayload

Sent when a subscription becomes active,
whether because it's a new paid subscription or because payment was recovered.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionActivePayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionActivePayload = {
  data: {
    createdAt: new Date("2025-10-26T05:31:01.527Z"),
    modifiedAt: new Date("2023-09-01T17:18:42.245Z"),
    id: "<value>",
    amount: 553542,
    currency: "Aruban Guilder",
    recurringInterval: "month",
    status: "past_due",
    currentPeriodStart: new Date("2024-12-26T18:04:43.696Z"),
    currentPeriodEnd: new Date("2024-09-28T18:30:50.452Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2025-08-11T01:59:44.328Z"),
    endedAt: new Date("2025-12-24T18:31:51.343Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": false,
    },
    customer: {
      createdAt: new Date("2024-05-24T17:46:27.444Z"),
      modifiedAt: new Date("2025-07-02T23:49:03.163Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      email: "Joshua61@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Liberia",
      },
      taxId: [
        "<id>",
      ],
      organizationId: "<value>",
      avatarUrl: "https://handy-whale.org",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Flavio_Yost47@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-02-06T10:09:35.758Z"),
      modifiedAt: new Date("2025-07-29T21:23:38.273Z"),
      id: "<value>",
      name: "<value>",
      description: "home naturally watery before",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 96803,
      },
      prices: [
        {
          createdAt: new Date("2024-05-07T20:45:44.261Z"),
          modifiedAt: new Date("2023-11-09T00:35:33.800Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 154869,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-02-22T13:34:54.556Z"),
          modifiedAt: new Date("2023-06-09T23:00:47.892Z"),
          id: "<value>",
          description:
            "metabolise impact worth shameful mount gradient oof even",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            archived: {
              "key": false,
            },
            files: [
              "<value>",
            ],
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/var/log",
          mimeType: "<value>",
          size: 652013,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-07-06T19:22:40.277Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-09-03T04:26:49.288Z"),
          sizeReadable: "<value>",
          publicUrl: "https://pleasing-help.biz/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-02-14T17:30:08.402Z"),
            modifiedAt: new Date("2025-05-10T10:23:09.731Z"),
            id: "<value>",
            metadata: {
              "key": 508271,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {
              options: [
                {
                  value: "<value>",
                  label: "<value>",
                },
              ],
            },
          },
          order: 787467,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2025-11-24T23:28:50.658Z"),
      modifiedAt: new Date("2025-05-19T03:49:33.823Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 826431,
      maximumAmount: 953921,
      presetAmount: 388851,
      recurringInterval: "year",
    },
    discount: {
      duration: "repeating",
      type: "percentage",
      basisPoints: 288348,
      createdAt: new Date("2023-11-16T07:58:25.136Z"),
      modifiedAt: new Date("2025-10-03T03:11:16.049Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-08-11T21:05:33.502Z"),
      endsAt: new Date("2024-09-16T18:30:47.093Z"),
      maxRedemptions: 745764,
      redemptionsCount: 353036,
      organizationId: "<value>",
    },
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |