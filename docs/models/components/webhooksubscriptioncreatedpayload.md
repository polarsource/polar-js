# WebhookSubscriptionCreatedPayload

Sent when a new subscription is created.

When this event occurs, the subscription `status` might not be `active` yet, as we can still have to wait for the first payment to be processed.

**Discord & Slack support:** Full

## Example Usage

```typescript
import { WebhookSubscriptionCreatedPayload } from "@polar-sh/sdk/models/components/webhooksubscriptioncreatedpayload.js";

let value: WebhookSubscriptionCreatedPayload = {
  data: {
    createdAt: new Date("2023-02-18T17:02:19.985Z"),
    modifiedAt: new Date("2023-06-09T20:12:21.697Z"),
    id: "<value>",
    amount: 600185,
    currency: "Djibouti Franc",
    recurringInterval: "year",
    status: "trialing",
    currentPeriodStart: new Date("2023-04-25T21:33:32.355Z"),
    currentPeriodEnd: new Date("2023-04-02T13:11:18.964Z"),
    cancelAtPeriodEnd: false,
    canceledAt: new Date("2025-10-24T02:05:02.156Z"),
    startedAt: new Date("2023-05-10T08:24:22.560Z"),
    endsAt: new Date("2023-06-04T10:29:25.571Z"),
    endedAt: new Date("2025-08-03T11:34:04.757Z"),
    customerId: "<value>",
    productId: "<value>",
    discountId: "<value>",
    checkoutId: "<value>",
    customerCancellationReason: "missing_features",
    customerCancellationComment: "<value>",
    priceId: "<value>",
    metadata: {
      "key": 816726,
    },
    customer: {
      id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
      createdAt: new Date("2024-10-27T11:16:46.409Z"),
      modifiedAt: new Date("2025-11-15T09:46:43.129Z"),
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
        "FR61954506077",
        "eu_vat",
      ],
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      deletedAt: new Date("2025-02-26T03:10:42.176Z"),
      avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
    },
    userId: "<value>",
    user: {
      id: "<value>",
      email: "Aleen_Shanahan@hotmail.com",
      publicName: "<value>",
    },
    product: {
      createdAt: new Date("2024-08-25T03:54:23.094Z"),
      modifiedAt: new Date("2025-02-11T06:56:52.274Z"),
      id: "<value>",
      name: "<value>",
      description:
        "however across wherever yowza ick moralise which whenever exasperation cap",
      recurringInterval: "year",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      metadata: {
        "key": false,
      },
      prices: [
        {
          createdAt: new Date("2025-03-01T06:19:32.936Z"),
          modifiedAt: new Date("2023-11-23T13:48:35.382Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-01-11T01:55:17.102Z"),
          modifiedAt: new Date("2024-02-16T15:28:53.569Z"),
          id: "<value>",
          description: "likewise live even dredger hourly",
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
          path: "/selinux",
          mimeType: "<value>",
          size: 852737,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-01-19T19:42:43.719Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2023-10-21T17:10:27.496Z"),
          sizeReadable: "<value>",
          publicUrl: "https://sunny-glider.name/",
        },
      ],
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2023-01-02T17:56:36.906Z"),
            modifiedAt: new Date("2023-06-09T09:55:13.803Z"),
            id: "<value>",
            metadata: {
              "key": false,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            properties: {},
          },
          order: 805128,
          required: false,
        },
      ],
    },
    discount: {
      duration: "forever",
      durationInMonths: 978857,
      type: "fixed",
      basisPoints: 601944,
      createdAt: new Date("2023-03-11T10:51:29.864Z"),
      modifiedAt: new Date("2024-03-25T04:53:25.304Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      name: "<value>",
      code: "<value>",
      startsAt: new Date("2023-09-19T15:47:11.283Z"),
      endsAt: new Date("2025-10-31T10:26:27.251Z"),
      maxRedemptions: 686784,
      redemptionsCount: 287575,
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    },
    price: {
      createdAt: new Date("2025-12-04T08:27:59.075Z"),
      modifiedAt: new Date("2023-02-24T00:23:58.036Z"),
      id: "<value>",
      isArchived: false,
      productId: "<value>",
      type: "recurring",
      recurringInterval: "month",
      priceCurrency: "<value>",
      priceAmount: 757824,
    },
    prices: [
      {
        createdAt: new Date("2025-04-01T00:20:32.487Z"),
        modifiedAt: new Date("2024-08-06T10:34:04.832Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
        priceCurrency: "<value>",
        minimumAmount: 393630,
        maximumAmount: 375549,
        presetAmount: 568162,
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