# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled.
Customers might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload.js";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2024-03-02T23:09:58.976Z"),
    modifiedAt: new Date("2025-10-05T13:49:22.673Z"),
    id: "<value>",
    amount: 567072,
    currency: "New Leu",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2023-01-03T03:36:44.105Z"),
    currentPeriodEnd: new Date("2023-11-09T17:28:43.650Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-06-11T07:37:49.605Z"),
    startedAt: new Date("2025-09-15T10:01:48.470Z"),
    endsAt: new Date("2024-01-21T06:06:28.878Z"),
    endedAt: new Date("2023-11-19T05:08:45.306Z"),
    customerId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "other",
    customerCancellationComment: "<value>",
    metadata: {
      "key": 652245,
    },
    customer: {
      createdAt: new Date("2023-11-04T05:15:14.827Z"),
      modifiedAt: new Date("2023-04-18T07:39:21.900Z"),
      id: "<value>",
      metadata: {
        "key": 923232,
      },
      externalId: "<id>",
      email: "Cordie55@yahoo.com",
      emailVerified: false,
      name: "<value>",
      billingAddress: {
        country: "Canada",
      },
      taxId: [
        "hu_tin",
      ],
      organizationId: "<value>",
      avatarUrl: "https://devoted-jazz.com",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "David_Keeling@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2025-12-18T20:17:29.366Z"),
      modifiedAt: new Date("2024-11-04T04:33:24.549Z"),
      id: "<value>",
      name: "<value>",
      description: "favorite instead by knottily ugh",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2025-11-11T11:47:55.562Z"),
          modifiedAt: new Date("2024-02-14T09:32:18.526Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2025-09-08T05:53:16.779Z"),
          modifiedAt: new Date("2023-04-16T11:56:12.784Z"),
          id: "<value>",
          description: "like majestically because weatherize airbrush",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          properties: {
            imageHeight: 400,
            imageWidth: 400,
          },
        },
      ],
      medias: [
        {
          id: "<value>",
          organizationId: "<value>",
          name: "<value>",
          path: "/mnt",
          mimeType: "<value>",
          size: 860383,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-05-30T15:22:56.357Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-03-29T04:13:17.980Z"),
          sizeReadable: "<value>",
          publicUrl: "https://altruistic-exploration.info/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-02-26T13:18:09.649Z"),
            modifiedAt: new Date("2023-11-13T05:21:42.031Z"),
            id: "<value>",
            metadata: {
              "key": 914695,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 738639,
          required: false,
        },
      ],
    },
    price: {
      createdAt: new Date("2023-05-18T17:28:39.250Z"),
      modifiedAt: new Date("2024-08-19T07:14:49.562Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 371534,
    },
    discount: {
      duration: "forever",
      durationInMonths: 684938,
      type: "percentage",
      amount: 723031,
      currency: "Bhutanese Ngultrum",
      createdAt: new Date("2025-08-02T23:14:47.272Z"),
      modifiedAt: new Date("2023-07-20T12:59:24.049Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-04-27T22:49:02.164Z"),
      endsAt: new Date("2024-01-03T21:31:22.687Z"),
      maxRedemptions: 668155,
      redemptionsCount: 287797,
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