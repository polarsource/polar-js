# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

When this event occurs, the subscription `status` might not be `active` yet, as we can still have to wait for the first payment to be processed.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2024-03-30T05:24:00.433Z"),
    modifiedAt: new Date("2025-05-17T05:52:11.820Z"),
    id: "<value>",
    amount: 721198,
    currency: "Cayman Islands Dollar",
    recurringInterval: "year",
    status: "active",
    currentPeriodStart: new Date("2025-06-08T10:10:54.665Z"),
    currentPeriodEnd: new Date("2024-06-05T18:54:47.401Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2024-07-27T09:05:42.579Z"),
    startedAt: new Date("2023-10-02T13:41:36.618Z"),
    endsAt: new Date("2024-10-25T03:03:05.451Z"),
    endedAt: new Date("2023-11-28T23:36:29.114Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "too_complex",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-06-24T18:40:30.017Z"),
      modifiedAt: new Date("2024-04-02T01:33:01.124Z"),
      metadata: {
        "key": 268109,
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
      deletedAt: new Date("2023-01-28T15:41:52.745Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Jake_Krajcik3@gmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-01-07T00:17:06.784Z"),
      modifiedAt: new Date("2024-09-24T22:27:35.031Z"),
      id: "<value>",
      name: "<value>",
      description:
        "whale within versus upon amid jubilantly dark machine entice",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": 395411,
      },
      prices: [
        {
          createdAt: new Date("2025-11-05T07:59:51.921Z"),
          modifiedAt: new Date("2023-11-17T15:47:00.809Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 583138,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-06-02T19:56:17.254Z"),
          modifiedAt: new Date("2025-07-03T06:10:20.109Z"),
          id: "<value>",
          description: "wide solemnly lest onto",
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
          path: "/opt",
          mimeType: "<value>",
          size: 102019,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2025-05-13T11:35:30.480Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2025-02-15T01:12:10.982Z"),
          sizeReadable: "<value>",
          publicUrl: "https://educated-cappelletti.net",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-07-13T00:14:07.257Z"),
            modifiedAt: new Date("2023-12-17T12:12:43.741Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 539537,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      type: "percentage",
      amount: 538368,
      currency: "Mauritius Rupee",
      createdAt: new Date("2023-09-04T08:32:34.245Z"),
      modifiedAt: new Date("2025-07-18T02:56:07.362Z"),
      id: "<value>",
      metadata: {
        "key": 713246,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2025-12-12T02:57:22.912Z"),
      endsAt: new Date("2024-04-14T07:20:14.969Z"),
      maxRedemptions: 881067,
      redemptionsCount: 7281,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-12-08T08:21:53.641Z"),
      modifiedAt: new Date("2023-09-30T02:40:00.548Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 318403,
    },
    prices: [
      {
        createdAt: new Date("2025-05-14T18:48:08.000Z"),
        modifiedAt: new Date("2025-06-28T21:29:27.010Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "month",
      },
    ],
  },
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `type`                                                             | *string*                                                           | :heavy_check_mark:                                                 | N/A                                                                | subscription.created                                               |
| `data`                                                             | [components.Subscription](../../models/components/subscription.md) | :heavy_check_mark:                                                 | N/A                                                                |                                                                    |