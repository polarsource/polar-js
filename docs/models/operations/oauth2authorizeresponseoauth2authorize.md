# Oauth2AuthorizeResponseOauth2Authorize

Successful Response


## Supported Types

### `components.AuthorizeResponseUser`

```typescript
const value: components.AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2023-02-12T21:33:27.477Z"),
    modifiedAt: new Date("2023-01-31T12:23:22.680Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://outgoing-marathon.info",
    logoUri: "https://frizzy-toaster.org",
    tosUri: "https://plain-nudge.biz",
    policyUri: "https://uniform-grandpa.org/",
  },
  sub: {
    id: "<value>",
    email: "Mose5@hotmail.com",
    avatarUrl: "https://rubbery-soliloquy.biz",
  },
  scopes: [
    "checkouts:write",
  ],
};
```

### `components.AuthorizeResponseOrganization`

```typescript
const value: components.AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2025-06-03T04:32:33.374Z"),
    modifiedAt: new Date("2024-02-11T20:26:54.603Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://suburban-sand.name",
    logoUri: "https://friendly-horde.net",
    tosUri: "https://quick-witted-castanet.name",
    policyUri: "https://fatherly-bathrobe.com",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://aware-translation.org",
  },
  scopes: [
    "repositories:write",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://angelic-meander.com",
    },
  ],
};
```

