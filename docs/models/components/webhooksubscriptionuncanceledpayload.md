# WebhookSubscriptionUncanceledPayload

Sent when a subscription is uncanceled.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionUncanceledPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUncanceledPayload = {
  data: {
    createdAt: new Date("2023-08-05T12:05:21.716Z"),
    modifiedAt: new Date("2023-03-07T14:11:50.943Z"),
    id: "<value>",
    amount: 302207,
    currency: "Pakistan Rupee",
    recurringInterval: "year",
    status: "trialing",
    currentPeriodStart: new Date("2025-07-02T11:49:42.061Z"),
    currentPeriodEnd: new Date("2023-10-30T18:58:57.422Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2023-10-13T13:26:42.286Z"),
    startedAt: new Date("2024-09-05T16:51:24.096Z"),
    endsAt: new Date("2024-06-08T02:59:03.086Z"),
    endedAt: new Date("2024-05-03T18:51:53.512Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "low_quality",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 259019,
    },
    customer: {
      createdAt: new Date("2024-03-05T19:53:58.677Z"),
      modifiedAt: new Date("2025-03-14T23:50:13.400Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      email: "Gussie.Rogahn36@hotmail.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Russian Federation",
      },
      taxId: [
        "do_rcn",
      ],
      organizationId: "<value>",
      avatarUrl: "https://pitiful-schedule.info",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Hailie25@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-02-24T14:34:24.056Z"),
      modifiedAt: new Date("2023-02-12T21:10:23.646Z"),
      id: "<value>",
      name: "<value>",
      description: "hungrily than impish intervention hence ew",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2024-09-19T14:32:18.040Z"),
          modifiedAt: new Date("2024-09-13T21:57:59.380Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 202372,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-05-17T06:34:04.861Z"),
          modifiedAt: new Date("2023-02-22T16:38:20.435Z"),
          id: "<value>",
          description: "outside enormously obvious past",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            guildId: "<id>",
            roleId: "<id>",
            guildToken: "<value>",
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/System",
          mimeType: "<value>",
          size: 964883,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-12-09T12:22:34.653Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-06-04T21:07:29.157Z"),
          sizeReadable: "<value>",
          publicUrl: "https://bulky-cork.name/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-09-06T16:17:40.992Z"),
            modifiedAt: new Date("2024-03-14T10:45:15.823Z"),
            id: "<value>",
            metadata: {
              "key": 809200,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 312070,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-07-10T19:03:58.934Z"),
      modifiedAt: new Date("2024-06-06T06:55:01.621Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      priceCurrency: "<value>",
      minimumAmount: 173072,
      maximumAmount: 462426,
      presetAmount: 396820,
      recurringInterval: "month",
    },
    discount: {
      duration: "once",
      type: "fixed",
      amount: 239580,
      currency: "Solomon Islands Dollar",
      createdAt: new Date("2025-02-24T19:18:44.351Z"),
      modifiedAt: new Date("2024-10-02T14:14:26.405Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2024-09-12T14:57:06.534Z"),
      endsAt: new Date("2023-03-28T20:15:02.629Z"),
      maxRedemptions: 18173,
      redemptionsCount: 352596,
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