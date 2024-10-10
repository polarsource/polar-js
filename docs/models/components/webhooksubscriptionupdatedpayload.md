# WebhookSubscriptionUpdatedPayload

Sent when a new subscription is updated. This event fires if the subscription is cancelled, both immediately and if the subscription is cancelled at the end of the current period.

**Discord & Slack support:** On cancellation

## Example Usage

```typescript
import { WebhookSubscriptionUpdatedPayload } from "@polar-sh/sdk/models/components";

let value: WebhookSubscriptionUpdatedPayload = {
  data: {
    createdAt: new Date("2023-04-07T11:06:58.417Z"),
    modifiedAt: new Date("2023-06-08T05:46:10.028Z"),
    id: "<value>",
    amount: 677862,
    currency: "Falkland Islands Pound",
    recurringInterval: "year",
    status: "incomplete_expired",
    currentPeriodStart: new Date("2024-04-18T08:09:28.288Z"),
    currentPeriodEnd: new Date("2024-03-02T10:25:24.644Z"),
    cancelAtPeriodEnd: false,
    startedAt: new Date("2022-05-10T01:15:05.305Z"),
    endedAt: new Date("2023-10-12T13:11:40.528Z"),
    userId: "<value>",
    productId: "<value>",
    priceId: "<value>",
    checkoutId: "<value>",
    metadata: {
      "key": "<value>",
    },
    user: {
      email: "Vladimir_Aufderhar@gmail.com",
      publicName: "<value>",
      githubUsername: "<value>",
      avatarUrl: "https://tired-tabletop.biz",
    },
    product: {
      createdAt: new Date("2023-01-28T02:30:44.160Z"),
      modifiedAt: new Date("2024-12-04T00:32:06.141Z"),
      id: "<value>",
      name: "<value>",
      description: "hubris ack attribute underneath taxicab quirkily",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-01-22T13:47:16.368Z"),
          modifiedAt: new Date("2023-09-01T01:11:59.221Z"),
          id: "<value>",
          isArchived: false,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-04-15T05:58:11.260Z"),
          modifiedAt: new Date("2022-11-22T09:26:52.208Z"),
          id: "<value>",
          type: "github_repository",
          description:
            "seal cannon since or emphasise toward shrill closely republican",
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
          path: "/lost+found",
          mimeType: "<value>",
          size: 276285,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-08-17T18:33:35.647Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-04-24T07:30:00.599Z"),
        },
      ],
    },
    price: {
      createdAt: new Date("2024-02-07T22:48:59.434Z"),
      modifiedAt: new Date("2023-02-25T00:02:22.663Z"),
      id: "<value>",
      isArchived: false,
      recurringInterval: "year",
    },
  },
};
```

## Fields

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `type`                                                                                                               | [components.WebhookSubscriptionUpdatedPayloadType](../../models/components/webhooksubscriptionupdatedpayloadtype.md) | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |
| `data`                                                                                                               | [components.SubscriptionInput](../../models/components/subscriptioninput.md)                                         | :heavy_check_mark:                                                                                                   | N/A                                                                                                                  |