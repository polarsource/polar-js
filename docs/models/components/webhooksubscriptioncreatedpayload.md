# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

When this event occurs, the subscription `status` might not be `active` yet, as we can still have to wait for the first payment to be processed.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2024-03-25T04:53:25.304Z"),
    modifiedAt: new Date("2025-03-02T20:38:32.287Z"),
    id: "<value>",
    amount: 238739,
    currency: "East Caribbean Dollar",
    recurringInterval: "year",
    status: "trialing",
    currentPeriodStart: new Date("2025-04-22T19:44:51.587Z"),
    currentPeriodEnd: new Date("2023-04-02T03:33:58.167Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-12-04T08:27:59.075Z"),
    startedAt: new Date("2023-02-24T00:23:58.036Z"),
    endsAt: new Date("2025-10-20T01:37:25.539Z"),
    endedAt: new Date("2023-10-05T03:04:06.241Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "unused",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": "<value>",
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2023-10-06T15:31:52.701Z"),
      modifiedAt: new Date("2025-04-01T00:20:32.487Z"),
      metadata: {
        "key": 114952,
      },
      externalId: "usr_1337",
      email: "customer@example.com",
      emailVerified: true,
      name: "John Doe",
      billingAddress: {
        country: "SE",
      },
      taxId: [
        "911144442",
        "us_ein",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2024-09-14T16:56:22.815Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Romaine80@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-03-23T21:51:00.945Z"),
      modifiedAt: new Date("2024-07-22T04:50:36.531Z"),
      id: "<value>",
      name: "<value>",
      description: "throughout with ick enlightened wide solemnly lest onto",
      recurringInterval: "month",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": "<value>",
      },
      prices: [
        {
          createdAt: new Date("2025-10-07T10:04:23.461Z"),
          modifiedAt: new Date("2023-08-27T03:13:05.420Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "one_time",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-07-13T00:14:07.257Z"),
          modifiedAt: new Date("2023-12-17T12:12:43.741Z"),
          id: "<value>",
          description:
            "astride acidic range whoever gee outfit outrun lighthearted quizzically",
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
          path: "/sys",
          mimeType: "<value>",
          size: 385828,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-08-05T14:21:26.517Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-12-08T01:43:26.354Z"),
          sizeReadable: "<value>",
          publicUrl: "https://optimistic-obesity.com",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-08-01T18:40:01.314Z"),
            modifiedAt: new Date("2025-05-28T04:41:45.730Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 420910,
          required: false,
        },
      ],
    },
    discount: {
      duration: "once",
      durationInMonths: 791454,
      type: "percentage",
      amount: 439745,
      currency: "Afghani",
      createdAt: new Date("2025-11-23T13:27:52.601Z"),
      modifiedAt: new Date("2025-11-20T09:03:34.763Z"),
      id: "<value>",
      metadata: {
        "key": "<value>",
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-02-15T07:34:29.918Z"),
      endsAt: new Date("2024-08-04T02:21:50.561Z"),
      maxRedemptions: 951411,
      redemptionsCount: 910396,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2023-12-28T15:17:27.912Z"),
      modifiedAt: new Date("2025-09-11T02:43:05.010Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "one_time",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 248425,
    },
    prices: [
      {
        createdAt: new Date("2024-05-22T11:55:09.881Z"),
        modifiedAt: new Date("2025-09-30T23:48:11.129Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "year",
        priceCurrency: "<value>",
        minimumAmount: 72473,
        maximumAmount: 5494,
        presetAmount: 276247,
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