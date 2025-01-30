# Oauth2AuthorizeResponseOauth2Authorize

Successful Response


## Supported Types

### `components.AuthorizeResponseUser`

```typescript
const value: components.AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2023-02-08T12:10:47.638Z"),
    modifiedAt: new Date("2025-07-10T00:34:37.878Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://hot-blowgun.org/",
    logoUri: "https://unaware-colonialism.biz/",
    tosUri: "https://corny-charm.org/",
    policyUri: "https://heavenly-developmental.org/",
  },
  sub: {
    id: "<value>",
    email: "Ewell.Veum@yahoo.com",
    avatarUrl: "https://definite-nightlife.info/",
  },
  scopes: [
    "organizations:read",
  ],
};
```

### `components.AuthorizeResponseOrganization`

```typescript
const value: components.AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2024-09-21T14:30:07.308Z"),
    modifiedAt: new Date("2025-01-01T06:51:40.408Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://faint-legend.info",
    logoUri: "https://long-middle.name",
    tosUri: "https://unlined-willow.biz",
    policyUri: "https://kooky-premise.net/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://monumental-innovation.net/",
  },
  scopes: [
    "events:write",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://superb-plastic.info",
    },
  ],
};
```

