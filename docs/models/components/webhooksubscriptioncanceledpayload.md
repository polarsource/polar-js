# WebhookSubscriptionCanceledPayload

Sent when a subscription is canceled.
Customers might still have access until the end of the current period.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCanceledPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncanceledpayload.js";

let value: WebhookSubscriptionCanceledPayload = {
  data: {
    createdAt: new Date("2024-01-20T18:38:36.784Z"),
    modifiedAt: new Date("2024-12-15T20:39:26.738Z"),
    id: "<value>",
    amount: 280309,
    currency: "Burundi Franc",
    recurringInterval: "year",
    status: "unpaid",
    currentPeriodStart: new Date("2024-11-09T00:43:35.009Z"),
    currentPeriodEnd: new Date("2023-08-17T20:58:31.938Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-01-17T22:37:38.992Z"),
    startedAt: new Date("2025-04-22T02:58:17.524Z"),
    endsAt: new Date("2023-12-18T13:17:08.954Z"),
    endedAt: new Date("2024-09-04T21:26:38.743Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_expensive",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2025-11-22T15:42:40.032Z"),
      modifiedAt: new Date("2024-05-09T13:43:53.738Z"),
      metadata: {
        "key": false,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "US",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2023-07-01T18:36:52.222Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
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
            note: "<value>",
          },
          isTaxApplicable: false,
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
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 738639,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      durationInMonths: 125664,
      type: "percentage",
      basisPoints: 697371,
      createdAt: new Date("2025-11-12T16:00:20.228Z"),
      modifiedAt: new Date("2024-02-12T04:50:27.888Z"),
      id: "<value>",
      metadata: {
        "key": 515854,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-01-20T16:36:26.954Z"),
      endsAt: new Date("2024-09-12T08:41:21.960Z"),
      maxRedemptions: 723031,
      redemptionsCount: 380315,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-12-13T05:33:20.610Z"),
      modifiedAt: new Date("2025-04-27T22:49:02.164Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "year",
      priceCurrency: "<value>",
      priceAmount: 287797,
    },
    prices: [
      {
        createdAt: new Date("2025-08-30T03:28:18.067Z"),
        modifiedAt: new Date("2024-05-20T03:04:11.342Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 321438,
        maximumAmount: 2770,
        presetAmount: 755809,
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.canceled                                              |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |