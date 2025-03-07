# @commercetools-frontend/application-shell

## 19.3.1

### Patch Changes

- [#2157](https://github.com/commercetools/merchant-center-application-kit/pull/2157) [`e757dd2b`](https://github.com/commercetools/merchant-center-application-kit/commit/e757dd2b114f0c751400eca6179700bddbb3aecc) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

* [#2163](https://github.com/commercetools/merchant-center-application-kit/pull/2163) [`de1fa715`](https://github.com/commercetools/merchant-center-application-kit/commit/de1fa7153c1baab5da116babc857fec3f0e99d51) Thanks [@emmenko](https://github.com/emmenko)! - Handle HTTP responses with header `x-refreshed-session-token`, when using OIDC workflow.

* Updated dependencies [[`e757dd2b`](https://github.com/commercetools/merchant-center-application-kit/commit/e757dd2b114f0c751400eca6179700bddbb3aecc)]:
  - @commercetools-frontend/actions-global@19.3.1
  - @commercetools-frontend/application-components@19.3.1
  - @commercetools-frontend/application-shell-connectors@19.3.1
  - @commercetools-frontend/browser-history@19.3.1
  - @commercetools-frontend/constants@19.3.1
  - @commercetools-frontend/i18n@19.3.1
  - @commercetools-frontend/l10n@19.3.1
  - @commercetools-frontend/notifications@19.3.1
  - @commercetools-frontend/permissions@19.3.1
  - @commercetools-frontend/react-notifications@19.3.1
  - @commercetools-frontend/sdk@19.3.1
  - @commercetools-frontend/sentry@19.3.1
  - @commercetools-frontend/url-utils@19.3.1

## 19.3.0

### Minor Changes

- [#2144](https://github.com/commercetools/merchant-center-application-kit/pull/2144) [`7ec6626f`](https://github.com/commercetools/merchant-center-application-kit/commit/7ec6626f7db35127b3611f546828b01151222d4c) Thanks [@pa3](https://github.com/pa3)! - The `@commercetools-frontend/application-shell/test-utils` now exports a new utility function for testing hooks: `renderHook`. This function wraps the original `renderHook` function from `@testing-library/react-hooks` but it comes pre-configured with providers for testing Custom Applications.

  The new `renderHook` function also accepts the same options as other test utils, such as `renderApp`, and returns some useful properties like `store`, `history`, etc.

  All `@testing-library/react-hooks` functionality is exported under the namespace `hooks` from the package '@commercetools-frontend/application-shell/test-utils'.

  **Usage example**

  ```jsx
  import { hooks } from '@commercetools-frontend/application-shell/test-utils';

  const { act, renderHook } = hooks;

  it('should navigate to a route', () => {
    const { result, history } = renderHook(useRoutes);
    act(() => result.current.someRoute.go());
    expect(history.location.pathname).toBe('/some-route');
  });
  ```

## 19.2.0

### Minor Changes

- [#2144](https://github.com/commercetools/merchant-center-application-kit/pull/2144) [`7ec6626f`](https://github.com/commercetools/merchant-center-application-kit/commit/7ec6626f7db35127b3611f546828b01151222d4c) Thanks [@pa3](https://github.com/pa3)! - Adds re-export of `@testing-library/react-hooks` from `test-utils` with `renderHook` functions wrapped with app-kit providers.

  The `renderHook` function is wrapped similarily to the existing `renderAppWithRedux`:

  - All `options` which can be passed to `renderAppWithRedux` can be passed to `renderHooks`
  - All additional poperties returned as a result of an `renderAppWithRedux` call (like `store` or `history`) are returend from the wrapped `renderHook` too

  All `@testing-library/react-hooks` functionality is exported under the namespace `hooks` from the package '@commercetools-frontend/application-shell/test-utils'.

  **Usage example**

  ```jsx
  import { hooks } from '@commercetools-frontend/application-shell/test-utils';

  const { act, renderHook } = hooks;

  it('should navigate to a route', () => {
    const { result, history } = renderHook(useRoutes);
    act(() => result.current.someRoute.go());
    expect(history.location.pathname).toBe('/some-route');
  });
  ```

## 19.1.0

### Patch Changes

- Updated dependencies [[`18fb7648`](https://github.com/commercetools/merchant-center-application-kit/commit/18fb76483f27e17e05dc8fddeda625dadf587a0f)]:
  - @commercetools-frontend/l10n@19.1.0
  - @commercetools-frontend/application-components@19.1.0

## 19.0.1

### Patch Changes

- [#2135](https://github.com/commercetools/merchant-center-application-kit/pull/2135) [`598d3bb5`](https://github.com/commercetools/merchant-center-application-kit/commit/598d3bb52a43b261f4ddf0393722927b76339870) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

- Updated dependencies [[`598d3bb5`](https://github.com/commercetools/merchant-center-application-kit/commit/598d3bb52a43b261f4ddf0393722927b76339870)]:
  - @commercetools-frontend/application-components@19.0.1
  - @commercetools-frontend/application-shell-connectors@19.0.1
  - @commercetools-frontend/i18n@19.0.1
  - @commercetools-frontend/react-notifications@19.0.1
  - @commercetools-frontend/sdk@19.0.1
  - @commercetools-frontend/permissions@19.0.1

## 19.0.0

### Major Changes

- [#2041](https://github.com/commercetools/merchant-center-application-kit/pull/2041) [`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f) Thanks [@emmenko](https://github.com/emmenko)! - - Requires a peer dependency of `react@17`, `react-dom@17`.
  - The `@types/react*` peer dependencies have been removed and included as normal dependencies with a minor range version.
  - The peer dependency `react-intl` now only requires version `>=5`.
  - The peer dependency `@testing-library/react` now only requires version `>=11`.
  - Changes required Node.js engine version to `>=12 || >=14` in `package.json`.
  - Uses `graphql@15`.

* [#2041](https://github.com/commercetools/merchant-center-application-kit/pull/2041) [`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade and migrate packages to use `ui-kit@v12`

### Patch Changes

- Updated dependencies [[`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f), [`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f), [`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f), [`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f), [`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f), [`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f), [`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f), [`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f), [`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f), [`a240f657`](https://github.com/commercetools/merchant-center-application-kit/commit/a240f6574a9240a2ac82febb67b0f6c814db979f)]:
  - @commercetools-frontend/application-shell-connectors@19.0.0
  - @commercetools-frontend/l10n@19.0.0
  - @commercetools-frontend/permissions@19.0.0
  - @commercetools-frontend/react-notifications@19.0.0
  - @commercetools-frontend/actions-global@19.0.0
  - @commercetools-frontend/sentry@19.0.0
  - @commercetools-frontend/sdk@19.0.0
  - @commercetools-frontend/application-components@19.0.0
  - @commercetools-frontend/i18n@19.0.0

## 18.7.0

### Patch Changes

- [#2122](https://github.com/commercetools/merchant-center-application-kit/pull/2122) [`c3ba44a6`](https://github.com/commercetools/merchant-center-application-kit/commit/c3ba44a6a124ddfbe6322436a260b93ff29ec4e9) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* [#2110](https://github.com/commercetools/merchant-center-application-kit/pull/2110) [`c850d6dc`](https://github.com/commercetools/merchant-center-application-kit/commit/c850d6dcf8edabb5eb9390e41def4b6b52879b7a) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

* Updated dependencies [[`c3ba44a6`](https://github.com/commercetools/merchant-center-application-kit/commit/c3ba44a6a124ddfbe6322436a260b93ff29ec4e9), [`8b1e943c`](https://github.com/commercetools/merchant-center-application-kit/commit/8b1e943ca8068cfbf915a83e8498500455eabd75), [`263f3180`](https://github.com/commercetools/merchant-center-application-kit/commit/263f318028603daa7fadac7f6cd84c1891b2f1c0), [`c850d6dc`](https://github.com/commercetools/merchant-center-application-kit/commit/c850d6dcf8edabb5eb9390e41def4b6b52879b7a)]:
  - @commercetools-frontend/application-components@18.7.0
  - @commercetools-frontend/i18n@18.7.0
  - @commercetools-frontend/react-notifications@18.7.0
  - @commercetools-frontend/l10n@18.7.0
  - @commercetools-frontend/actions-global@18.7.0
  - @commercetools-frontend/application-shell-connectors@18.7.0
  - @commercetools-frontend/sdk@18.7.0
  - @commercetools-frontend/permissions@18.7.0

## 18.6.0

### Patch Changes

- [#2099](https://github.com/commercetools/merchant-center-application-kit/pull/2099) [`d09a154b`](https://github.com/commercetools/merchant-center-application-kit/commit/d09a154b9e74bc180da033acd8e74ac8ed32fc75) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

- Updated dependencies [[`f347093f`](https://github.com/commercetools/merchant-center-application-kit/commit/f347093f1705ae8214fcd556b80bd2366624205d), [`d09a154b`](https://github.com/commercetools/merchant-center-application-kit/commit/d09a154b9e74bc180da033acd8e74ac8ed32fc75)]:
  - @commercetools-frontend/l10n@18.6.0
  - @commercetools-frontend/actions-global@18.6.0
  - @commercetools-frontend/application-components@18.6.0
  - @commercetools-frontend/application-shell-connectors@18.6.0
  - @commercetools-frontend/browser-history@18.6.0
  - @commercetools-frontend/constants@18.6.0
  - @commercetools-frontend/i18n@18.6.0
  - @commercetools-frontend/notifications@18.6.0
  - @commercetools-frontend/permissions@18.6.0
  - @commercetools-frontend/react-notifications@18.6.0
  - @commercetools-frontend/sdk@18.6.0
  - @commercetools-frontend/sentry@18.6.0
  - @commercetools-frontend/url-utils@18.6.0

## 18.5.6

### Patch Changes

- [`075c770a`](https://github.com/commercetools/merchant-center-application-kit/commit/075c770a009c9f428a83a6c57f924b7683bef0fc) [#2088](https://github.com/commercetools/merchant-center-application-kit/pull/2088) Thanks [@tdeekens](https://github.com/tdeekens)! - chore: update msw

* [`ca4ea6eb`](https://github.com/commercetools/merchant-center-application-kit/commit/ca4ea6eb17c14bf015a8448248c58881e005ac99) [#2085](https://github.com/commercetools/merchant-center-application-kit/pull/2085) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- [`0592dc7d`](https://github.com/commercetools/merchant-center-application-kit/commit/0592dc7dccd77305bda07563280d4322d7996b4e) [#2091](https://github.com/commercetools/merchant-center-application-kit/pull/2091) Thanks [@tdeekens](https://github.com/tdeekens)! - chore: update typescript to 4.2.3

- Updated dependencies [[`ca4ea6eb`](https://github.com/commercetools/merchant-center-application-kit/commit/ca4ea6eb17c14bf015a8448248c58881e005ac99)]:
  - @commercetools-frontend/actions-global@18.5.6
  - @commercetools-frontend/application-components@18.5.6
  - @commercetools-frontend/application-shell-connectors@18.5.6
  - @commercetools-frontend/browser-history@18.5.6
  - @commercetools-frontend/constants@18.5.6
  - @commercetools-frontend/i18n@18.5.6
  - @commercetools-frontend/l10n@18.5.6
  - @commercetools-frontend/notifications@18.5.6
  - @commercetools-frontend/permissions@18.5.6
  - @commercetools-frontend/react-notifications@18.5.6
  - @commercetools-frontend/sdk@18.5.6
  - @commercetools-frontend/sentry@18.5.6
  - @commercetools-frontend/url-utils@18.5.6

## 18.5.5

### Patch Changes

- [`e2137ecc`](https://github.com/commercetools/merchant-center-application-kit/commit/e2137ecc786c01445e4e9009174f32b2004a8daa) [#2079](https://github.com/commercetools/merchant-center-application-kit/pull/2079) Thanks [@mohib0306](https://github.com/mohib0306)! - Add navigating to ProjectSetting->Stores to quick access command list

- Updated dependencies [[`5e7d20fb`](https://github.com/commercetools/merchant-center-application-kit/commit/5e7d20fbf908548aae8d9101bb7b36850f92aa95)]:
  - @commercetools-frontend/application-components@18.5.5

## 18.5.4

### Patch Changes

- Updated dependencies [[`d44f5b69`](https://github.com/commercetools/merchant-center-application-kit/commit/d44f5b6916c3897ce198eb06757d29d40535b8d4)]:
  - @commercetools-frontend/assets@18.5.4
  - @commercetools-frontend/application-components@18.5.4

## 18.5.2

### Patch Changes

- [`5892c888`](https://github.com/commercetools/merchant-center-application-kit/commit/5892c88879bea4b5cb11b9da39d080005da6b045) [#2067](https://github.com/commercetools/merchant-center-application-kit/pull/2067) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all ui-kit packages to v11 (major)

* [`7f26c54e`](https://github.com/commercetools/merchant-center-application-kit/commit/7f26c54e55eff8aeac786ec0d011d36e40b0d263) [#2066](https://github.com/commercetools/merchant-center-application-kit/pull/2066) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* Updated dependencies [[`5892c888`](https://github.com/commercetools/merchant-center-application-kit/commit/5892c88879bea4b5cb11b9da39d080005da6b045), [`7f26c54e`](https://github.com/commercetools/merchant-center-application-kit/commit/7f26c54e55eff8aeac786ec0d011d36e40b0d263)]:
  - @commercetools-frontend/application-components@18.5.2
  - @commercetools-frontend/react-notifications@18.5.2
  - @commercetools-frontend/actions-global@18.5.2
  - @commercetools-frontend/application-shell-connectors@18.5.2
  - @commercetools-frontend/browser-history@18.5.2
  - @commercetools-frontend/constants@18.5.2
  - @commercetools-frontend/i18n@18.5.2
  - @commercetools-frontend/l10n@18.5.2
  - @commercetools-frontend/notifications@18.5.2
  - @commercetools-frontend/permissions@18.5.2
  - @commercetools-frontend/sdk@18.5.2
  - @commercetools-frontend/sentry@18.5.2
  - @commercetools-frontend/url-utils@18.5.2

## 18.5.1

### Patch Changes

- [`bb2ceac2`](https://github.com/commercetools/merchant-center-application-kit/commit/bb2ceac229b94836482dbed57824d679a9cbd5d6) [#2062](https://github.com/commercetools/merchant-center-application-kit/pull/2062) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- Updated dependencies [[`bb2ceac2`](https://github.com/commercetools/merchant-center-application-kit/commit/bb2ceac229b94836482dbed57824d679a9cbd5d6)]:
  - @commercetools-frontend/actions-global@18.5.1
  - @commercetools-frontend/application-components@18.5.1
  - @commercetools-frontend/application-shell-connectors@18.5.1
  - @commercetools-frontend/browser-history@18.5.1
  - @commercetools-frontend/constants@18.5.1
  - @commercetools-frontend/i18n@18.5.1
  - @commercetools-frontend/l10n@18.5.1
  - @commercetools-frontend/notifications@18.5.1
  - @commercetools-frontend/permissions@18.5.1
  - @commercetools-frontend/react-notifications@18.5.1
  - @commercetools-frontend/sdk@18.5.1
  - @commercetools-frontend/sentry@18.5.1
  - @commercetools-frontend/url-utils@18.5.1

## 18.5.0

### Minor Changes

- [`8cfd73f3`](https://github.com/commercetools/merchant-center-application-kit/commit/8cfd73f3bcb830a07dffc3040c9c5960f180016f) [#2052](https://github.com/commercetools/merchant-center-application-kit/pull/2052) Thanks [@torihedden](https://github.com/torihedden)! - feat(menu): add new icon option for side nav menu

### Patch Changes

- Updated dependencies [[`7c69f93d`](https://github.com/commercetools/merchant-center-application-kit/commit/7c69f93d2f0aac04badcea556ea2bc9e5e77cb13)]:
  - @commercetools-frontend/sdk@18.5.0

## 18.4.1

### Patch Changes

- [`074ec33d`](https://github.com/commercetools/merchant-center-application-kit/commit/074ec33d97282fc9750fd59ccceb33ff0430da41) [#2053](https://github.com/commercetools/merchant-center-application-kit/pull/2053) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

- Updated dependencies [[`074ec33d`](https://github.com/commercetools/merchant-center-application-kit/commit/074ec33d97282fc9750fd59ccceb33ff0430da41), [`e5743110`](https://github.com/commercetools/merchant-center-application-kit/commit/e574311090e90b6186c18a3a49747a8bcf08822b)]:
  - @commercetools-frontend/actions-global@18.4.1
  - @commercetools-frontend/application-components@18.4.1
  - @commercetools-frontend/application-shell-connectors@18.4.1
  - @commercetools-frontend/i18n@18.4.1
  - @commercetools-frontend/l10n@18.4.1
  - @commercetools-frontend/permissions@18.4.1
  - @commercetools-frontend/react-notifications@18.4.1
  - @commercetools-frontend/sdk@18.4.1
  - @commercetools-frontend/sentry@18.4.1

## 18.4.0

### Patch Changes

- [`63d9c424`](https://github.com/commercetools/merchant-center-application-kit/commit/63d9c42463be04bad32ee32be1c84535086de755) [#2049](https://github.com/commercetools/merchant-center-application-kit/pull/2049) Thanks [@emmenko](https://github.com/emmenko)! - Bump uikit versions, use `@manypkg/cli upgrade` instead of `bulk-update-versions`.

* [`eb2fbb22`](https://github.com/commercetools/merchant-center-application-kit/commit/eb2fbb2279eff99048c91da352a69e1883eb54af) [#2044](https://github.com/commercetools/merchant-center-application-kit/pull/2044) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

* Updated dependencies [[`63d9c424`](https://github.com/commercetools/merchant-center-application-kit/commit/63d9c42463be04bad32ee32be1c84535086de755), [`eb2fbb22`](https://github.com/commercetools/merchant-center-application-kit/commit/eb2fbb2279eff99048c91da352a69e1883eb54af)]:
  - @commercetools-frontend/application-components@18.4.0
  - @commercetools-frontend/i18n@18.4.0
  - @commercetools-frontend/react-notifications@18.4.0
  - @commercetools-frontend/actions-global@18.4.0
  - @commercetools-frontend/application-shell-connectors@18.4.0
  - @commercetools-frontend/browser-history@18.4.0
  - @commercetools-frontend/constants@18.4.0
  - @commercetools-frontend/l10n@18.4.0
  - @commercetools-frontend/notifications@18.4.0
  - @commercetools-frontend/permissions@18.4.0
  - @commercetools-frontend/sdk@18.4.0
  - @commercetools-frontend/sentry@18.4.0
  - @commercetools-frontend/url-utils@18.4.0

## 18.3.0

### Patch Changes

- Updated dependencies [[`71e12377`](https://github.com/commercetools/merchant-center-application-kit/commit/71e12377a4b4e623942b7f6b441bc9899b561cb3)]:
  - @commercetools-frontend/application-components@18.3.0

## 18.2.2

### Patch Changes

- [`27b6690c`](https://github.com/commercetools/merchant-center-application-kit/commit/27b6690c75c9b83bb11ffcf83251b039a6f06cf0) [#2033](https://github.com/commercetools/merchant-center-application-kit/pull/2033) Thanks [@tdeekens](https://github.com/tdeekens)! - Rename to `enableFeatureConfigurationFetching` to `enableLongLivedFeatureFlags`

- Updated dependencies [[`27b6690c`](https://github.com/commercetools/merchant-center-application-kit/commit/27b6690c75c9b83bb11ffcf83251b039a6f06cf0)]:
  - @commercetools-frontend/constants@18.2.2
  - @commercetools-frontend/actions-global@18.2.2
  - @commercetools-frontend/application-components@18.2.2
  - @commercetools-frontend/application-shell-connectors@18.2.2
  - @commercetools-frontend/react-notifications@18.2.2
  - @commercetools-frontend/sdk@18.2.2
  - @commercetools-frontend/sentry@18.2.2
  - @commercetools-frontend/permissions@18.2.2
  - @commercetools-frontend/i18n@18.2.2
  - @commercetools-frontend/l10n@18.2.2

## 18.2.1

### Patch Changes

- [`b8b11a72`](https://github.com/commercetools/merchant-center-application-kit/commit/b8b11a726f05ab2645fa18f93537a427202f2ecd) [#2030](https://github.com/commercetools/merchant-center-application-kit/pull/2030) Thanks [@adnasa](https://github.com/adnasa)! - move logic on cachedScope lookup

## 18.2.0

### Minor Changes

- [`7fbe0c71`](https://github.com/commercetools/merchant-center-application-kit/commit/7fbe0c718d43e5c940e324e282f3cdd67a46717e) [#2018](https://github.com/commercetools/merchant-center-application-kit/pull/2018) Thanks [@emmenko](https://github.com/emmenko)! - Build package using `preconstruct`. This is now possible as we don't directly load the `.css` file anymore. Instead, we use `postcss` to compile it and load the styles using a macro. This allows the code to be bundled using Babel.

## 18.1.5

### Patch Changes

- [`aa6f642a`](https://github.com/commercetools/merchant-center-application-kit/commit/aa6f642a7d28dec7f34f8e6147ed9c7fee0ebd13) [#2026](https://github.com/commercetools/merchant-center-application-kit/pull/2026) Thanks [@emmenko](https://github.com/emmenko)! - Update uikit and docs-kit dependencies to fix some underlying emotion and react-select version resolution.

- Updated dependencies [[`aa6f642a`](https://github.com/commercetools/merchant-center-application-kit/commit/aa6f642a7d28dec7f34f8e6147ed9c7fee0ebd13)]:
  - @commercetools-frontend/application-components@18.1.5
  - @commercetools-frontend/i18n@18.1.5
  - @commercetools-frontend/react-notifications@18.1.5

## 18.1.4

### Patch Changes

- [`c9589f5e`](https://github.com/commercetools/merchant-center-application-kit/commit/c9589f5e3d1fd18393c7bf501c3b23b8ec402804) [#2020](https://github.com/commercetools/merchant-center-application-kit/pull/2020) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* [`657eb48f`](https://github.com/commercetools/merchant-center-application-kit/commit/657eb48f21c0c9c776e4ec4ad22b58318f845e14) [#2021](https://github.com/commercetools/merchant-center-application-kit/pull/2021) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency @types/react-select to v4

- [`88d444fd`](https://github.com/commercetools/merchant-center-application-kit/commit/88d444fd02c6f0c561754220540391dd2abc6025) [#2019](https://github.com/commercetools/merchant-center-application-kit/pull/2019) Thanks [@tdeekens](https://github.com/tdeekens)! - chore: update flopflip

- Updated dependencies [[`c9589f5e`](https://github.com/commercetools/merchant-center-application-kit/commit/c9589f5e3d1fd18393c7bf501c3b23b8ec402804)]:
  - @commercetools-frontend/application-components@18.1.4
  - @commercetools-frontend/i18n@18.1.4
  - @commercetools-frontend/react-notifications@18.1.4
  - @commercetools-frontend/sentry@18.1.4
  - @commercetools-frontend/actions-global@18.1.4
  - @commercetools-frontend/application-shell-connectors@18.1.4
  - @commercetools-frontend/l10n@18.1.4
  - @commercetools-frontend/permissions@18.1.4

## 18.1.3

### Patch Changes

- [`94e350e2`](https://github.com/commercetools/merchant-center-application-kit/commit/94e350e2b65caed07be2dfd9a9d6d29ebc86bf73) [#2014](https://github.com/commercetools/merchant-center-application-kit/pull/2014) Thanks [@tdeekens](https://github.com/tdeekens)! - refactor(test-utils): to use flopflip test provider

  When using `@commercetools-frontend/application-shell/test-utils`, we now render a `TestProviderFlopFlip` instead of the normal `ConfigureFlopFlip` with the `memory` adapter.<br/>
  This change simplifies how feature flags are propagated during tests and should not affect the usage of the test-utils.

  > In the very unlikely case that you have been passing the `adapter` option to the test-utils, you can remove that as it's not necessary anymore.

## 18.1.0

### Patch Changes

- [`3bf32993`](https://github.com/commercetools/merchant-center-application-kit/commit/3bf329935a109a73a7c33580fdf618e60fdbcc2c) [#1971](https://github.com/commercetools/merchant-center-application-kit/pull/1971) Thanks [@tdeekens](https://github.com/tdeekens)! - Add internal opt-in support for combining feature flag adapters.

- Updated dependencies [[`3bf32993`](https://github.com/commercetools/merchant-center-application-kit/commit/3bf329935a109a73a7c33580fdf618e60fdbcc2c), [`7a53760f`](https://github.com/commercetools/merchant-center-application-kit/commit/7a53760f4a04decd02037315d8935bed953abfc8)]:
  - @commercetools-frontend/actions-global@18.1.0
  - @commercetools-frontend/application-components@18.1.0
  - @commercetools-frontend/application-shell-connectors@18.1.0
  - @commercetools-frontend/assets@18.1.0
  - @commercetools-frontend/browser-history@18.1.0
  - @commercetools-frontend/constants@18.1.0
  - @commercetools-frontend/l10n@18.1.0
  - @commercetools-frontend/notifications@18.1.0
  - @commercetools-frontend/permissions@18.1.0
  - @commercetools-frontend/react-notifications@18.1.0
  - @commercetools-frontend/sdk@18.1.0
  - @commercetools-frontend/sentry@18.1.0
  - @commercetools-frontend/i18n@18.1.0

## 18.0.3

### Patch Changes

- [`80668fd2`](https://github.com/commercetools/merchant-center-application-kit/commit/80668fd27f3b8ce35230b7d5f780612e244f9621) [#1999](https://github.com/commercetools/merchant-center-application-kit/pull/1999) Thanks [@emmenko](https://github.com/emmenko)! - Fix rendering of application with implicit routes when redirecting to `/account` route.

## 18.0.2

### Patch Changes

- [`b38cb57f`](https://github.com/commercetools/merchant-center-application-kit/commit/b38cb57f678e79a862f1b97df2d1c753838ffbb7) [#1991](https://github.com/commercetools/merchant-center-application-kit/pull/1991) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

- Updated dependencies [[`b38cb57f`](https://github.com/commercetools/merchant-center-application-kit/commit/b38cb57f678e79a862f1b97df2d1c753838ffbb7)]:
  - @commercetools-frontend/actions-global@18.0.2
  - @commercetools-frontend/application-components@18.0.2
  - @commercetools-frontend/i18n@18.0.2
  - @commercetools-frontend/l10n@18.0.2
  - @commercetools-frontend/react-notifications@18.0.2
  - @commercetools-frontend/sdk@18.0.2

## 17.10.2

### Patch Changes

- [`0ef6a6a`](https://github.com/commercetools/merchant-center-application-kit/commit/0ef6a6a3099ce7210b8db8cc5a21a5e40a050d36) [#1989](https://github.com/commercetools/merchant-center-application-kit/pull/1989) Thanks [@emmenko](https://github.com/emmenko)! - fix(app-shell): to re-export flag variation utils

* [`0ef6a6a`](https://github.com/commercetools/merchant-center-application-kit/commit/0ef6a6a3099ce7210b8db8cc5a21a5e40a050d36) [#1989](https://github.com/commercetools/merchant-center-application-kit/pull/1989) Thanks [@emmenko](https://github.com/emmenko)! - Use correct `@deprecated` annotation.

- [`0ef6a6a`](https://github.com/commercetools/merchant-center-application-kit/commit/0ef6a6a3099ce7210b8db8cc5a21a5e40a050d36) [#1989](https://github.com/commercetools/merchant-center-application-kit/pull/1989) Thanks [@emmenko](https://github.com/emmenko)! - Update uikit packages to `10.44`

- Updated dependencies [[`0ef6a6a`](https://github.com/commercetools/merchant-center-application-kit/commit/0ef6a6a3099ce7210b8db8cc5a21a5e40a050d36)]:
  - @commercetools-frontend/application-components@17.10.2
  - @commercetools-frontend/i18n@17.10.2
  - @commercetools-frontend/react-notifications@17.10.2

## 17.10.1

### Patch Changes

- [`5557c5c`](https://github.com/commercetools/merchant-center-application-kit/commit/5557c5c5744bf34a981247d04dc2f1117c15767d) [#1976](https://github.com/commercetools/merchant-center-application-kit/pull/1976) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

- Updated dependencies [[`5557c5c`](https://github.com/commercetools/merchant-center-application-kit/commit/5557c5c5744bf34a981247d04dc2f1117c15767d)]:
  - @commercetools-frontend/actions-global@17.10.1
  - @commercetools-frontend/application-components@17.10.1
  - @commercetools-frontend/application-shell-connectors@17.10.1
  - @commercetools-frontend/browser-history@17.10.1
  - @commercetools-frontend/constants@17.10.1
  - @commercetools-frontend/i18n@17.10.1
  - @commercetools-frontend/l10n@17.10.1
  - @commercetools-frontend/permissions@17.10.1
  - @commercetools-frontend/react-notifications@17.10.1
  - @commercetools-frontend/sdk@17.10.1
  - @commercetools-frontend/sentry@17.10.1

## 17.10.0

### Minor Changes

- [`d86c2e8`](https://github.com/commercetools/merchant-center-application-kit/commit/d86c2e86179aca2729d92fa18545241e2bf36fca) [#1934](https://github.com/commercetools/merchant-center-application-kit/pull/1934) Thanks [@emmenko](https://github.com/emmenko)! - Introduce a new **experimental opt-in** feature to authenticate the application for local development, using an OIDC-like workflow.

  > Disclaimer: this is an opt-in experimental feature. Use it at your own risk.
  > We want to test this feature internally first. Until then, we discourage you to try it out.

  The feature can be enabled by setting the `ENABLE_OIDC_FOR_DEVELOPMENT=true` environment variable.

  In addition to that, we have a new package `@commercetools-frontend/cypress`, to include some useful commands for testing Custom Applications.

### Patch Changes

- Updated dependencies [[`d86c2e8`](https://github.com/commercetools/merchant-center-application-kit/commit/d86c2e86179aca2729d92fa18545241e2bf36fca), [`dc7a443`](https://github.com/commercetools/merchant-center-application-kit/commit/dc7a4437f02cfe9c840ae6f22cc85f94cf6a0bc9)]:
  - @commercetools-frontend/application-components@17.10.0
  - @commercetools-frontend/application-shell-connectors@17.10.0
  - @commercetools-frontend/constants@17.10.0
  - @commercetools-frontend/sdk@17.10.0
  - @commercetools-frontend/permissions@17.10.0
  - @commercetools-frontend/actions-global@17.10.0
  - @commercetools-frontend/react-notifications@17.10.0
  - @commercetools-frontend/sentry@17.10.0
  - @commercetools-frontend/i18n@17.10.0
  - @commercetools-frontend/l10n@17.10.0

## 17.9.1

### Patch Changes

- Updated dependencies [[`d70e533`](https://github.com/commercetools/merchant-center-application-kit/commit/d70e533e7143dcb23df7b3f80eaec2741b7db1f3)]:
  - @commercetools-frontend/l10n@17.9.1
  - @commercetools-frontend/application-components@17.9.1

## 17.9.0

### Minor Changes

- [`4f7e081`](https://github.com/commercetools/merchant-center-application-kit/commit/4f7e081c001e285e8f4c7771894f5d09509daf8e) [#1948](https://github.com/commercetools/merchant-center-application-kit/pull/1948) Thanks [@emmenko](https://github.com/emmenko)! - Allow to pass the application routes as `children` of `<ApplicationShell>`, instead of using the `render` prop.
  When doing so, the application entry point routes are automatically configured according to the `entryPointUriPath` defined in the `custom-application-config.json`.

  > Note that it's still possible to use the `render` prop. However, for most of the cases it should suffice to rely on the pre-configured routes.

  ```diff
  const AsyncApplicationRoutes = React.lazy(
    () => import('../../routes' /* webpackChunkName: "starter-routes" */)
  );

  -export const ApplicationStarter = () => (
  -  <Switch>
  -    {
  -      /* For development, it's useful to redirect to the actual
  -      application routes when you open the browser at http://localhost:3001 */
  -      process.env.NODE_ENV === 'production' ? null : (
  -        <Redirect
  -          exact={true}
  -          from="/:projectKey"
  -          to="/:projectKey/examples-starter"
  -        />
  -      )
  -    }
  -    <Route
  -      path="/:projectKey/examples-starter"
  -      component={AsyncApplicationRoutes}
  -    />
  -    {/* Catch-all route */}
  -    <RouteCatchAll />
  -  </Switch>
  -);
  -ApplicationStarter.displayName = 'ApplicationStarter';

  const EntryPoint = () => (
    <ApplicationShell
      environment={window.app}
      onRegisterErrorListeners={({ dispatch }) => {
        Sdk.Get.errorHandler = (error) =>
          globalActions.handleActionError(error, 'sdk')(dispatch);
      }}
      applicationMessages={loadMessages}
      DEV_ONLY__loadNavbarMenuConfig={() =>
        import('../../../menu.json').then((data) => data.default || data)
      }
      featureFlags={FEATURE_FLAGS}
  -    render={() => <ApplicationStarter />}
  -  />
  +  >
  +    <AsyncApplicationRoutes />
  +  </ApplicationShell>
  );
  ```

  Furthermore, the `test-utils` of the `@commercetools-frontend/application-shell` have now a new option to enable this opt-in behavior of rendering the application with pre-configured routes.
  To enable this option, pass the `disableAutomaticEntryPointRoutes: false` to the `renderApp` or `renderAppWithRedux` functions.

  > Note that you also need to provide the `environment.entryPointUriPath` in order for the routes to be correctly configured.

  ```diff
  -renderApp(<ApplicationStarter />, {
  +renderApp(<AsyncApplicationRoutes />, {
    route: '/my-project/examples-starter'
  +  environment: {
  +    entryPointUriPath: 'examples-starter',
  +  },
  +  disableAutomaticEntryPointRoutes: false,
  });
  ```

### Patch Changes

- Updated dependencies [[`4f7e081`](https://github.com/commercetools/merchant-center-application-kit/commit/4f7e081c001e285e8f4c7771894f5d09509daf8e)]:
  - @commercetools-frontend/constants@17.9.0
  - @commercetools-frontend/actions-global@17.9.0
  - @commercetools-frontend/application-components@17.9.0
  - @commercetools-frontend/application-shell-connectors@17.9.0
  - @commercetools-frontend/react-notifications@17.9.0
  - @commercetools-frontend/sdk@17.9.0
  - @commercetools-frontend/sentry@17.9.0
  - @commercetools-frontend/permissions@17.9.0
  - @commercetools-frontend/i18n@17.9.0
  - @commercetools-frontend/l10n@17.9.0

## 17.8.0

### Patch Changes

- [`3198d2c`](https://github.com/commercetools/merchant-center-application-kit/commit/3198d2ce49501c1c2f996b808d8060efe7270762) [#1957](https://github.com/commercetools/merchant-center-application-kit/pull/1957) Thanks [@stephsprinkle](https://github.com/stephsprinkle)! - fix(navbar): remove title nowrap to accommodate long application names

* [`48a9886`](https://github.com/commercetools/merchant-center-application-kit/commit/48a98861dcf4193041e02e8ac11eb2940826f5d0) [#1954](https://github.com/commercetools/merchant-center-application-kit/pull/1954) Thanks [@tdeekens](https://github.com/tdeekens)! - chore: update dependencies across packages

- [`4971a78`](https://github.com/commercetools/merchant-center-application-kit/commit/4971a78438fb4d2ca5487764192a0bb1ffc3b18e) [#1952](https://github.com/commercetools/merchant-center-application-kit/pull/1952) Thanks [@tdeekens](https://github.com/tdeekens)! - chore: add and apply fixes via manypkg for automatic mono-repo validation

* [`c6a967c`](https://github.com/commercetools/merchant-center-application-kit/commit/c6a967c4dc76dc87310dec0c1960e9518901f361) [#1953](https://github.com/commercetools/merchant-center-application-kit/pull/1953) Thanks [@tdeekens](https://github.com/tdeekens)! - refactor: to update @flopflip to v12

* Updated dependencies [[`48a9886`](https://github.com/commercetools/merchant-center-application-kit/commit/48a98861dcf4193041e02e8ac11eb2940826f5d0), [`4971a78`](https://github.com/commercetools/merchant-center-application-kit/commit/4971a78438fb4d2ca5487764192a0bb1ffc3b18e)]:
  - @commercetools-frontend/actions-global@17.8.0
  - @commercetools-frontend/application-components@17.8.0
  - @commercetools-frontend/application-shell-connectors@17.8.0
  - @commercetools-frontend/browser-history@17.8.0
  - @commercetools-frontend/i18n@17.8.0
  - @commercetools-frontend/l10n@17.8.0
  - @commercetools-frontend/permissions@17.8.0
  - @commercetools-frontend/react-notifications@17.8.0
  - @commercetools-frontend/sdk@17.8.0
  - @commercetools-frontend/sentry@17.8.0

## 17.7.4

### Patch Changes

- [`5f4565e`](https://github.com/commercetools/merchant-center-application-kit/commit/5f4565e8c819cab178b8a823a3ae5a5b2ced5c9d) [#1946](https://github.com/commercetools/merchant-center-application-kit/pull/1946) Thanks [@emmenko](https://github.com/emmenko)! - Update `@flopflip` to latest pre-major version (fixes import bug)

## 17.7.3

### Patch Changes

- [`62ad638`](https://github.com/commercetools/merchant-center-application-kit/commit/62ad6380ab62e1c3e77bd63bd6c3ad4aaee473a9) [#1945](https://github.com/commercetools/merchant-center-application-kit/pull/1945) Thanks [@tdeekens](https://github.com/tdeekens)! - refactor(app-shell): remove unused `updateFlags` export for LaunchDarkly adapter.

## 17.7.1

### Patch Changes

- [`f6f3c5e`](https://github.com/commercetools/merchant-center-application-kit/commit/f6f3c5ebd08226fd4eca22aec5c39791cf5c5d6a) [#1935](https://github.com/commercetools/merchant-center-application-kit/pull/1935) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- Updated dependencies [[`f6f3c5e`](https://github.com/commercetools/merchant-center-application-kit/commit/f6f3c5ebd08226fd4eca22aec5c39791cf5c5d6a)]:
  - @commercetools-frontend/application-components@17.7.1
  - @commercetools-frontend/application-shell-connectors@17.7.1
  - @commercetools-frontend/i18n@17.7.1
  - @commercetools-frontend/l10n@17.7.1
  - @commercetools-frontend/permissions@17.7.1
  - @commercetools-frontend/react-notifications@17.7.1
  - @commercetools-frontend/sentry@17.7.1
  - @commercetools-frontend/actions-global@17.7.1

## 17.7.0

### Minor Changes

- [`b9fe353`](https://github.com/commercetools/merchant-center-application-kit/commit/b9fe353046fc6998c2bb43c80609db07cb88900a) [#1922](https://github.com/commercetools/merchant-center-application-kit/pull/1922) Thanks [@emmenko](https://github.com/emmenko)! - Fetch permissions for menu links using a separate query field `allPermissionsForAllApplications`.

### Patch Changes

- [`d74addd`](https://github.com/commercetools/merchant-center-application-kit/commit/d74addd32a5f39d19d6bae1ee31cbf33a35fd04e) [#1914](https://github.com/commercetools/merchant-center-application-kit/pull/1914) Thanks [@adnasa](https://github.com/adnasa)! - add experimental application-components/product-picker, generate new types in application-config, application-shell

* [`1ec4379`](https://github.com/commercetools/merchant-center-application-kit/commit/1ec4379938b093d4444ec9e4079524c48afd4a42) [#1923](https://github.com/commercetools/merchant-center-application-kit/pull/1923) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- [`36cabfc`](https://github.com/commercetools/merchant-center-application-kit/commit/36cabfc3ff0a22a3739f1eb77520814219b2dc62) [#1933](https://github.com/commercetools/merchant-center-application-kit/pull/1933) Thanks [@pa3](https://github.com/pa3)! - Improve error message when graphql target is missing.

- Updated dependencies [[`d74addd`](https://github.com/commercetools/merchant-center-application-kit/commit/d74addd32a5f39d19d6bae1ee31cbf33a35fd04e), [`1ec4379`](https://github.com/commercetools/merchant-center-application-kit/commit/1ec4379938b093d4444ec9e4079524c48afd4a42), [`9746f4b`](https://github.com/commercetools/merchant-center-application-kit/commit/9746f4b992dd764599ca7bc7702e92b73dde739a), [`b9fe353`](https://github.com/commercetools/merchant-center-application-kit/commit/b9fe353046fc6998c2bb43c80609db07cb88900a)]:
  - @commercetools-frontend/application-components@17.7.0
  - @commercetools-frontend/application-shell-connectors@17.7.0
  - @commercetools-frontend/l10n@17.7.0
  - @commercetools-frontend/sdk@17.7.0
  - @commercetools-frontend/permissions@17.7.0

## 17.6.2

### Patch Changes

- [`1a96e83`](https://github.com/commercetools/merchant-center-application-kit/commit/1a96e831c94250e10de61dee40e682a77313445f) [#1905](https://github.com/commercetools/merchant-center-application-kit/pull/1905) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- Updated dependencies [[`6819edc`](https://github.com/commercetools/merchant-center-application-kit/commit/6819edc25ef7f4a4d8a30c0c27db93ee4dae187a), [`1a96e83`](https://github.com/commercetools/merchant-center-application-kit/commit/1a96e831c94250e10de61dee40e682a77313445f)]:
  - @commercetools-frontend/application-components@17.6.2
  - @commercetools-frontend/react-notifications@17.6.2
  - @commercetools-frontend/application-shell-connectors@17.6.2
  - @commercetools-frontend/i18n@17.6.2
  - @commercetools-frontend/l10n@17.6.2
  - @commercetools-frontend/permissions@17.6.2
  - @commercetools-frontend/sentry@17.6.2
  - @commercetools-frontend/actions-global@17.6.2

## 17.6.1

### Patch Changes

- [`c946eca`](https://github.com/commercetools/merchant-center-application-kit/commit/c946eca9063535f0fe8ae7be99d2097557d588d9) [#1902](https://github.com/commercetools/merchant-center-application-kit/pull/1902) Thanks [@ahmehri](https://github.com/ahmehri)! - fix(test-utils): `storeState` render option of `renderAppWithRedux` is unusable

* [`947a1cf`](https://github.com/commercetools/merchant-center-application-kit/commit/947a1cfeb62d8856a6e60e16df5cc08c53b86fe3) [#1892](https://github.com/commercetools/merchant-center-application-kit/pull/1892) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update flopflip monorepo

* Updated dependencies [[`1ef03e3`](https://github.com/commercetools/merchant-center-application-kit/commit/1ef03e30996e6e83c0f521ba9253fb7a93fed241)]:
  - @commercetools-frontend/l10n@17.6.1

## 17.6.0

### Patch Changes

- [`2287813`](https://github.com/commercetools/merchant-center-application-kit/commit/2287813c19a54b7edb7005d417c5f6a7b34cad1f) [#1871](https://github.com/commercetools/merchant-center-application-kit/pull/1871) Thanks [@emmenko](https://github.com/emmenko)! - Compile and bundle packages using [preconstruct](https://preconstruct.tools)

- Updated dependencies [[`81a274c`](https://github.com/commercetools/merchant-center-application-kit/commit/81a274c6abd5f3725e7698fa37004b9647549e41), [`2287813`](https://github.com/commercetools/merchant-center-application-kit/commit/2287813c19a54b7edb7005d417c5f6a7b34cad1f)]:
  - @commercetools-frontend/application-components@17.6.0
  - @commercetools-frontend/actions-global@17.6.0
  - @commercetools-frontend/application-shell-connectors@17.6.0
  - @commercetools-frontend/browser-history@17.6.0
  - @commercetools-frontend/constants@17.6.0
  - @commercetools-frontend/i18n@17.6.0
  - @commercetools-frontend/l10n@17.6.0
  - @commercetools-frontend/notifications@17.6.0
  - @commercetools-frontend/permissions@17.6.0
  - @commercetools-frontend/react-notifications@17.6.0
  - @commercetools-frontend/sdk@17.6.0
  - @commercetools-frontend/sentry@17.6.0
  - @commercetools-frontend/url-utils@17.6.0

## 17.5.0

### Patch Changes

- [`bf5f71e`](https://github.com/commercetools/merchant-center-application-kit/commit/bf5f71e663a91d68d777d26ed3145bc96bbf2aa4) [#1896](https://github.com/commercetools/merchant-center-application-kit/pull/1896) Thanks [@emmenko](https://github.com/emmenko)! - Update docs-kit dependencies to v11, which supports emotion v11. As a result, the appkit bundles are using the correct emotion dependencies.

- Updated dependencies [[`bf5f71e`](https://github.com/commercetools/merchant-center-application-kit/commit/bf5f71e663a91d68d777d26ed3145bc96bbf2aa4), [`a8e2202`](https://github.com/commercetools/merchant-center-application-kit/commit/a8e2202d74bb28cc90bbf51e8c46a2128229599a)]:
  - @commercetools-frontend/application-components@17.5.0
  - @commercetools-frontend/react-notifications@17.5.0
  - @commercetools-frontend/l10n@17.5.0

## 17.4.1

### Patch Changes

- [`636fc45`](https://github.com/commercetools/merchant-center-application-kit/commit/636fc45c0d53544a90b0977b2212ec3a8aec8b94) [#1887](https://github.com/commercetools/merchant-center-application-kit/pull/1887) Thanks [@adnasa](https://github.com/adnasa)! - upgrade ui-kit, which includes the new [horizontal constraint changes](https://github.com/commercetools/ui-kit/pull/1632).

* [`e2d519f`](https://github.com/commercetools/merchant-center-application-kit/commit/e2d519f8669319a60d70eddb04fbaeb5649ad638) [#1695](https://github.com/commercetools/merchant-center-application-kit/pull/1695) Thanks [@renovate](https://github.com/apps/renovate)! - Migrate to Typescript v4

- [`d832bd4`](https://github.com/commercetools/merchant-center-application-kit/commit/d832bd44c354aaf2374c0c75c9050c673998ff32) [#1876](https://github.com/commercetools/merchant-center-application-kit/pull/1876) Thanks [@renovate](https://github.com/apps/renovate)! - Migrate to emotion v11. https://emotion.sh/docs/emotion-11

* [`ec9e10f`](https://github.com/commercetools/merchant-center-application-kit/commit/ec9e10fde15351cc7cb825aaebb53cdb6e00e0d9) [#1889](https://github.com/commercetools/merchant-center-application-kit/pull/1889) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies

* Updated dependencies [[`636fc45`](https://github.com/commercetools/merchant-center-application-kit/commit/636fc45c0d53544a90b0977b2212ec3a8aec8b94), [`d832bd4`](https://github.com/commercetools/merchant-center-application-kit/commit/d832bd44c354aaf2374c0c75c9050c673998ff32), [`ec9e10f`](https://github.com/commercetools/merchant-center-application-kit/commit/ec9e10fde15351cc7cb825aaebb53cdb6e00e0d9)]:
  - @commercetools-frontend/application-components@17.4.1
  - @commercetools-frontend/i18n@17.4.1
  - @commercetools-frontend/react-notifications@17.4.1
  - @commercetools-frontend/application-shell-connectors@17.4.1
  - @commercetools-frontend/permissions@17.4.1
  - @commercetools-frontend/sentry@17.4.1
  - @commercetools-frontend/l10n@17.4.1

## 17.4.0

### Minor Changes

- [`b742780`](https://github.com/commercetools/merchant-center-application-kit/commit/b742780a8b0b2d165b49a30cf93aaac3047a93c8) [#1881](https://github.com/commercetools/merchant-center-application-kit/pull/1881) Thanks [@stephsprinkle](https://github.com/stephsprinkle)! - feat(navbar): add clock with arrow icon to available application icons

## 17.3.1

### Patch Changes

- [`89c4464`](https://github.com/commercetools/merchant-center-application-kit/commit/89c4464c334dd6c3922d031872286ad3bea8cf67) [#1872](https://github.com/commercetools/merchant-center-application-kit/pull/1872) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

- Updated dependencies [[`bb492fd`](https://github.com/commercetools/merchant-center-application-kit/commit/bb492fd5e79642d6ddf2501b8f62dd3e3f09a538), [`89c4464`](https://github.com/commercetools/merchant-center-application-kit/commit/89c4464c334dd6c3922d031872286ad3bea8cf67)]:
  - @commercetools-frontend/actions-global@17.3.1
  - @commercetools-frontend/application-components@17.3.1
  - @commercetools-frontend/application-shell-connectors@17.3.1
  - @commercetools-frontend/i18n@17.3.1
  - @commercetools-frontend/l10n@17.3.1
  - @commercetools-frontend/react-notifications@17.3.1
  - @commercetools-frontend/sentry@17.3.1
  - @commercetools-frontend/permissions@17.3.1

## 17.3.0

### Minor Changes

- [`cefef43`](https://github.com/commercetools/merchant-center-application-kit/commit/cefef435e646e7c91dcf41c0f8ff7b94b5a7f3c8) [#1869](https://github.com/commercetools/merchant-center-application-kit/pull/1869) Thanks [@fuchodeveloper](https://github.com/fuchodeveloper)! - add user business role custom dimension tracking

### Patch Changes

- [`71c9111`](https://github.com/commercetools/merchant-center-application-kit/commit/71c9111308832009d1a27e91e4f2d2da4c53367c) [#1866](https://github.com/commercetools/merchant-center-application-kit/pull/1866) Thanks [@emmenko](https://github.com/emmenko)! - Update to uikit v10.39.8

- Updated dependencies [[`cefef43`](https://github.com/commercetools/merchant-center-application-kit/commit/cefef435e646e7c91dcf41c0f8ff7b94b5a7f3c8), [`71c9111`](https://github.com/commercetools/merchant-center-application-kit/commit/71c9111308832009d1a27e91e4f2d2da4c53367c)]:
  - @commercetools-frontend/application-shell-connectors@17.3.0
  - @commercetools-frontend/actions-global@17.3.0
  - @commercetools-frontend/application-components@17.3.0
  - @commercetools-frontend/assets@17.3.0
  - @commercetools-frontend/browser-history@17.3.0
  - @commercetools-frontend/constants@17.3.0
  - @commercetools-frontend/i18n@17.3.0
  - @commercetools-frontend/l10n@17.3.0
  - @commercetools-frontend/notifications@17.3.0
  - @commercetools-frontend/permissions@17.3.0
  - @commercetools-frontend/react-notifications@17.3.0
  - @commercetools-frontend/sdk@17.3.0
  - @commercetools-frontend/sentry@17.3.0
  - @commercetools-frontend/url-utils@17.3.0

## 17.2.1

### Patch Changes

- [`310e98c`](https://github.com/commercetools/merchant-center-application-kit/commit/310e98c39c0b6479175b7685b3f29ea0a5baa22b) Thanks [@emmenko](https://github.com/emmenko)! - Update dependencies (https://github.com/commercetools/merchant-center-application-kit/pull/1857)

- Updated dependencies [[`310e98c`](https://github.com/commercetools/merchant-center-application-kit/commit/310e98c39c0b6479175b7685b3f29ea0a5baa22b)]:
  - @commercetools-frontend/actions-global@17.2.1
  - @commercetools-frontend/application-components@17.2.1
  - @commercetools-frontend/application-shell-connectors@17.2.1
  - @commercetools-frontend/browser-history@17.2.1
  - @commercetools-frontend/constants@17.2.1
  - @commercetools-frontend/i18n@17.2.1
  - @commercetools-frontend/l10n@17.2.1
  - @commercetools-frontend/notifications@17.2.1
  - @commercetools-frontend/permissions@17.2.1
  - @commercetools-frontend/react-notifications@17.2.1
  - @commercetools-frontend/sdk@17.2.1
  - @commercetools-frontend/sentry@17.2.1
  - @commercetools-frontend/url-utils@17.2.1

## 17.2.0

### Minor Changes

- [`5967db7`](https://github.com/commercetools/merchant-center-application-kit/commit/5967db7fe27c0b322de96067ae19de7225a9aaec) [#1850](https://github.com/commercetools/merchant-center-application-kit/pull/1850) Thanks [@adnasa](https://github.com/adnasa)! - expand `FetchProjectExtensionsNavbar` to query `installedApplications`

### Patch Changes

- [`e0ec004`](https://github.com/commercetools/merchant-center-application-kit/commit/e0ec004d611f93b24f015120d09f6f18389b219f) [#1854](https://github.com/commercetools/merchant-center-application-kit/pull/1854) Thanks [@emmenko](https://github.com/emmenko)! - chore: update deps

- Updated dependencies [[`5967db7`](https://github.com/commercetools/merchant-center-application-kit/commit/5967db7fe27c0b322de96067ae19de7225a9aaec), [`e0ec004`](https://github.com/commercetools/merchant-center-application-kit/commit/e0ec004d611f93b24f015120d09f6f18389b219f), [`e519929`](https://github.com/commercetools/merchant-center-application-kit/commit/e519929415f225ff28731f068bebb8facad868f8)]:
  - @commercetools-frontend/application-shell-connectors@17.2.0
  - @commercetools-frontend/actions-global@17.2.0
  - @commercetools-frontend/application-components@17.2.0
  - @commercetools-frontend/assets@17.2.0
  - @commercetools-frontend/browser-history@17.2.0
  - @commercetools-frontend/constants@17.2.0
  - @commercetools-frontend/i18n@17.2.0
  - @commercetools-frontend/l10n@17.2.0
  - @commercetools-frontend/notifications@17.2.0
  - @commercetools-frontend/permissions@17.2.0
  - @commercetools-frontend/react-notifications@17.2.0
  - @commercetools-frontend/sdk@17.2.0
  - @commercetools-frontend/sentry@17.2.0
  - @commercetools-frontend/url-utils@17.2.0

## 17.1.1

### Patch Changes

- [`bacc091`](https://github.com/commercetools/merchant-center-application-kit/commit/bacc091506dedb58fadaa4008fc93381a5e9b212) [#1836](https://github.com/commercetools/merchant-center-application-kit/pull/1836) Thanks [@emmenko](https://github.com/emmenko)! - Always infer MC API URL from origin when running behind the MC Proxy.

- Updated dependencies [[`bacc091`](https://github.com/commercetools/merchant-center-application-kit/commit/bacc091506dedb58fadaa4008fc93381a5e9b212)]:
  - @commercetools-frontend/application-shell-connectors@17.1.1
  - @commercetools-frontend/constants@17.1.1
  - @commercetools-frontend/sdk@17.1.1
  - @commercetools-frontend/permissions@17.1.1
  - @commercetools-frontend/actions-global@17.1.1
  - @commercetools-frontend/application-components@17.1.1
  - @commercetools-frontend/react-notifications@17.1.1
  - @commercetools-frontend/sentry@17.1.1
  - @commercetools-frontend/i18n@17.1.1
  - @commercetools-frontend/l10n@17.1.1

## 17.1.0

### Minor Changes

- [`323cf6b`](https://github.com/commercetools/merchant-center-application-kit/commit/323cf6bb0fba41510947287dd18b346cda6f0833) [#1816](https://github.com/commercetools/merchant-center-application-kit/pull/1816) Thanks [@ahmehri](https://github.com/ahmehri)! - Fix wrong navigation when using Quick Access Product commands

### Patch Changes

- [`6059b9a`](https://github.com/commercetools/merchant-center-application-kit/commit/6059b9af35fbee646d008c393578c83795f10b4f) [#1835](https://github.com/commercetools/merchant-center-application-kit/pull/1835) Thanks [@nbryant-commercetools](https://github.com/nbryant-commercetools)! - Addition of new change history GraphQL Target

- Updated dependencies [[`5d9d5da`](https://github.com/commercetools/merchant-center-application-kit/commit/5d9d5da44364fe5590b67be21ac3630e177326e3), [`6059b9a`](https://github.com/commercetools/merchant-center-application-kit/commit/6059b9af35fbee646d008c393578c83795f10b4f)]:
  - @commercetools-frontend/i18n@17.1.0
  - @commercetools-frontend/sentry@17.1.0
  - @commercetools-frontend/constants@17.1.0
  - @commercetools-frontend/application-components@17.1.0
  - @commercetools-frontend/application-shell-connectors@17.1.0
  - @commercetools-frontend/l10n@17.1.0
  - @commercetools-frontend/react-notifications@17.1.0
  - @commercetools-frontend/actions-global@17.1.0
  - @commercetools-frontend/sdk@17.1.0
  - @commercetools-frontend/permissions@17.1.0

## 17.0.1

### Patch Changes

- [`bea3005`](https://github.com/commercetools/merchant-center-application-kit/commit/bea30056b43fdb782251956acb5829abcd91e836) [#1815](https://github.com/commercetools/merchant-center-application-kit/pull/1815) Thanks [@emmenko](https://github.com/emmenko)! - In `test-utils` of the ApplicationShell, passing a custom instance of `apolloClient` now correctly passes the `cache` object to the Apollo `MockedProvider`. See https://www.apollographql.com/docs/react/development-testing/testing/#a-note-on-fragment-usage-typepolicies-and-possibletypes.

  Furthermore, the `addTypename` option is no longer available in the `test-utils`, as the value is derived by the Apollo cache object. This is important to ensure that the `addTypename` behavior is the same between the Apollo cache and the Apollo `MockedProvider`.

  If you wish to disable adding `__typename` fields to the query, you must specify `addTypename: false` to your custom instance of the Apollo client.

  ```js
  import { createApolloClient } from '@commercetools-frontend/application-shell';

  createApolloClient({
    cache: {
      addTypename: false,
    },
  });
  ```

* [`71c5f78`](https://github.com/commercetools/merchant-center-application-kit/commit/71c5f7875c7476e34b65d37046d48ca47e96f12e) [#1795](https://github.com/commercetools/merchant-center-application-kit/pull/1795) Thanks [@renovate](https://github.com/apps/renovate)! - update dependencies

- [`8111543`](https://github.com/commercetools/merchant-center-application-kit/commit/8111543a5d3e923c9c754b34290c899698910825) [#1809](https://github.com/commercetools/merchant-center-application-kit/pull/1809) Thanks [@emmenko](https://github.com/emmenko)! - Fix default cache policies for applications menu items

- Updated dependencies [[`f5125b8`](https://github.com/commercetools/merchant-center-application-kit/commit/f5125b8061cb624f950916909e4cb7b0f35594ad), [`71c5f78`](https://github.com/commercetools/merchant-center-application-kit/commit/71c5f7875c7476e34b65d37046d48ca47e96f12e)]:
  - @commercetools-frontend/sentry@17.0.1
  - @commercetools-frontend/actions-global@17.0.1
  - @commercetools-frontend/application-components@17.0.1
  - @commercetools-frontend/application-shell-connectors@17.0.1
  - @commercetools-frontend/browser-history@17.0.1
  - @commercetools-frontend/constants@17.0.1
  - @commercetools-frontend/i18n@17.0.1
  - @commercetools-frontend/l10n@17.0.1
  - @commercetools-frontend/notifications@17.0.1
  - @commercetools-frontend/permissions@17.0.1
  - @commercetools-frontend/react-notifications@17.0.1
  - @commercetools-frontend/sdk@17.0.1
  - @commercetools-frontend/url-utils@17.0.1

## 17.0.0

### Major Changes

- [`0e0efc6`](https://github.com/commercetools/merchant-center-application-kit/commit/0e0efc68e93621209f8ee84ebc920b79431c704a) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - remove deprecated `compile-html` options

* [`80b7936`](https://github.com/commercetools/merchant-center-application-kit/commit/80b793610027fc6c1708f457d030354265beabca) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - Remove the experimental render method `experimentalRenderAppWithRedux` from the `test-utils`.

  Instead, you should pass the `disableApolloMocks` option to the `renderApp` and `renderAppWithRedux` methods. When this option is set to `true`, the real `ApolloProvider` is rendered instead of Apollo's `MockProvider`.
  This is useful if you want to mock requests at the network level, for example when using [Mock Service Worker](https://mswjs.io/).

  Additionally, you can also pass a custom `apolloClient` instance together with the `disableApolloMocks` option. This is only useful when your Custom Application uses a custom `apolloClient`, for example for configuring the cache policies.

- [`e706232`](https://github.com/commercetools/merchant-center-application-kit/commit/e706232c152f3fed9cf44c10a0c4f25b27448a16) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - Remove `mc-scripts extract-intl` command in favor of the official `@formatjs/cli` package.
  We recommend to update your script to extract Intl messages to use the `formatjs extract` command.

  See full release notes: https://docs.commercetools.com/custom-applications/releases/2020-10-14-custom-applications-v17

* [`873048b`](https://github.com/commercetools/merchant-center-application-kit/commit/873048b1c288ca85a37cf26f7d5d2b10879cfd64) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - Migrate Apollo dependencies to `@apollo/client` package.

  See full release notes: https://docs.commercetools.com/custom-applications/releases/2020-10-14-custom-applications-v17

- [`65f21a1`](https://github.com/commercetools/merchant-center-application-kit/commit/65f21a158d32f5759f109035b02aa78569fcad13) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - remove support for `trackingEventWhitelist`

* [`633d8c7`](https://github.com/commercetools/merchant-center-application-kit/commit/633d8c7b8ddc2f25128d8249579b7bb287a62e30) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - Remove the CLI flag `--use-local-assets`. The default behavior of `mc-scripts compile-html` now is to compile the assets locally, which is the only reasonable thing to do.

  Furthermore, the `@commercetools-frontend/mc-http-server` package has been deprecated and won't be published anymore.
  With the `compile-html` command there is no need to have a pre-configured HTTP server anymore.

  When running the `mc-scripts compile-html` command, the `index.html` is compiled for production usage and it lives in the `public` folder, together with the other static assets. This is all you need to deploy your application.
  You can decide to [deploy the Custom Application statically to one of the popular cloud providers](https://docs.commercetools.com/custom-applications/deployment/compiling-a-custom-application#deployment), or serve the files on your own using a static server.

  For example, to run locally the Custom Application using the production bundles:

  ```console
  NODE_ENV=production MC_APP_ENV=development dotenv -- \
    mc-scripts compile-html \
    --transformer @commercetools-frontend/mc-dev-authentication/transformer-local.js

  mc-scripts serve
  ```

- [`6e86c36`](https://github.com/commercetools/merchant-center-application-kit/commit/6e86c36a20a597cca81d121ce80cc1c47f8a961f) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - remove deprecated exports `AsyncChunkLoader` and `handleApolloErrors`

### Patch Changes

- [`d883e96`](https://github.com/commercetools/merchant-center-application-kit/commit/d883e96ffd076788256d33d833e7f69ffc39f3ac) [#1802](https://github.com/commercetools/merchant-center-application-kit/pull/1802) Thanks [@tdeekens](https://github.com/tdeekens)! - refactor(app-shell): to remove disabbledMenuItems support

* [`633d8c7`](https://github.com/commercetools/merchant-center-application-kit/commit/633d8c7b8ddc2f25128d8249579b7bb287a62e30) [#1805](https://github.com/commercetools/merchant-center-application-kit/pull/1805) Thanks [@emmenko](https://github.com/emmenko)! - update deps

* Updated dependencies [[`e706232`](https://github.com/commercetools/merchant-center-application-kit/commit/e706232c152f3fed9cf44c10a0c4f25b27448a16), [`873048b`](https://github.com/commercetools/merchant-center-application-kit/commit/873048b1c288ca85a37cf26f7d5d2b10879cfd64), [`d883e96`](https://github.com/commercetools/merchant-center-application-kit/commit/d883e96ffd076788256d33d833e7f69ffc39f3ac), [`633d8c7`](https://github.com/commercetools/merchant-center-application-kit/commit/633d8c7b8ddc2f25128d8249579b7bb287a62e30), [`633d8c7`](https://github.com/commercetools/merchant-center-application-kit/commit/633d8c7b8ddc2f25128d8249579b7bb287a62e30)]:
  - @commercetools-frontend/application-shell-connectors@17.0.0
  - @commercetools-frontend/constants@17.0.0
  - @commercetools-frontend/application-components@17.0.0
  - @commercetools-frontend/i18n@17.0.0
  - @commercetools-frontend/react-notifications@17.0.0
  - @commercetools-frontend/sdk@17.0.0
  - @commercetools-frontend/sentry@17.0.0
  - @commercetools-frontend/permissions@17.0.0
  - @commercetools-frontend/actions-global@17.0.0
  - @commercetools-frontend/l10n@17.0.0

## 16.18.2

### Patch Changes

- [`3de5acc`](https://github.com/commercetools/merchant-center-application-kit/commit/3de5accab54a565a74fbfbdf5cd2a71482b3026e) [#1801](https://github.com/commercetools/merchant-center-application-kit/pull/1801) Thanks [@emmenko](https://github.com/emmenko)! - Send graphql operation name as HTTP header, for debugging purposes

## 16.18.1

### Patch Changes

- [`3fd4aa2`](https://github.com/commercetools/merchant-center-application-kit/commit/3fd4aa2e7ac935bf75daaceacaf1b77dada7afe6) [#1788](https://github.com/commercetools/merchant-center-application-kit/pull/1788) Thanks [@jonnybel](https://github.com/jonnybel)! - Improved keyboard navigation on the user settings menu.

## 16.18.0

### Minor Changes

- [`78418b9`](https://github.com/commercetools/merchant-center-application-kit/commit/78418b9db14014c7d9c03c8e754ee9d2adb7ffb7) [#1784](https://github.com/commercetools/merchant-center-application-kit/pull/1784) Thanks [@fuchodeveloper](https://github.com/fuchodeveloper)! - Expose `user.businessRole` to application context

### Patch Changes

- [`8cdb025`](https://github.com/commercetools/merchant-center-application-kit/commit/8cdb02591b718406c910a2c4128d4be3dfe24785) [#1776](https://github.com/commercetools/merchant-center-application-kit/pull/1776) Thanks [@renovate](https://github.com/apps/renovate)! - update deps

* [`290ed48`](https://github.com/commercetools/merchant-center-application-kit/commit/290ed483e9a93adf1cf7863d766ad8237735dfca) [#1777](https://github.com/commercetools/merchant-center-application-kit/pull/1777) Thanks [@renovate](https://github.com/apps/renovate)! - Remove unused dependency `jwt-decode`

* Updated dependencies [[`78418b9`](https://github.com/commercetools/merchant-center-application-kit/commit/78418b9db14014c7d9c03c8e754ee9d2adb7ffb7), [`8cdb025`](https://github.com/commercetools/merchant-center-application-kit/commit/8cdb02591b718406c910a2c4128d4be3dfe24785)]:
  - @commercetools-frontend/application-shell-connectors@16.18.0
  - @commercetools-frontend/permissions@16.18.0
  - @commercetools-frontend/application-components@16.18.0
  - @commercetools-frontend/i18n@16.18.0
  - @commercetools-frontend/react-notifications@16.18.0
  - @commercetools-frontend/sdk@16.18.0
  - @commercetools-frontend/sentry@16.18.0
  - @commercetools-frontend/l10n@16.18.0

## 16.17.3

### Patch Changes

- [`9c957e7`](https://github.com/commercetools/merchant-center-application-kit/commit/9c957e797ef55786c8d8c678a663338be58b694a) [#1771](https://github.com/commercetools/merchant-center-application-kit/pull/1771) Thanks [@stephsprinkle](https://github.com/stephsprinkle)! - fix(navbar): timing of updating menu open local storage to eliminate navbar state change during window resize

## 16.17.2

### Patch Changes

- [`9e4870f`](https://github.com/commercetools/merchant-center-application-kit/commit/9e4870fe0c3f53c372036374e10a51bee7835f95) [#1764](https://github.com/commercetools/merchant-center-application-kit/pull/1764) Thanks [@tdeekens](https://github.com/tdeekens)! - fix(app-shell): to handle errors without extentions property

* [`0c4d950`](https://github.com/commercetools/merchant-center-application-kit/commit/0c4d95061a09a8cb5f8b4cf7b1b0276e4cc5c50c) [#1767](https://github.com/commercetools/merchant-center-application-kit/pull/1767) Thanks [@adnasa](https://github.com/adnasa)! - update ui-kit to 10.35.1

- [`9752622`](https://github.com/commercetools/merchant-center-application-kit/commit/9752622b7422e821bb62d61af360a01f6994dc6b) [#1758](https://github.com/commercetools/merchant-center-application-kit/pull/1758) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- Updated dependencies [[`0c4d950`](https://github.com/commercetools/merchant-center-application-kit/commit/0c4d95061a09a8cb5f8b4cf7b1b0276e4cc5c50c), [`9752622`](https://github.com/commercetools/merchant-center-application-kit/commit/9752622b7422e821bb62d61af360a01f6994dc6b)]:
  - @commercetools-frontend/application-components@16.17.2
  - @commercetools-frontend/react-notifications@16.17.2
  - @commercetools-frontend/l10n@16.17.2

## 16.17.1

### Patch Changes

- [`0c4cc95`](https://github.com/commercetools/merchant-center-application-kit/commit/0c4cc9524747fe43ec4768fdaebe1acc4959f1a8) [#1756](https://github.com/commercetools/merchant-center-application-kit/pull/1756) Thanks [@tdeekens](https://github.com/tdeekens)! - fix(app-shell): error link to support opting out of token retry

## 16.17.0

### Minor Changes

- [`2c0bd66`](https://github.com/commercetools/merchant-center-application-kit/commit/2c0bd66c90fe64ad15397029e05146c0a04ef331) [#1755](https://github.com/commercetools/merchant-center-application-kit/pull/1755) Thanks [@tdeekens](https://github.com/tdeekens)! - feat(app-shell): add ability to `skipTokenRetry` for Apollo queries.

  The Merchant Center API Gateway assigns a commercetools platform API token in order to access the commercetools HTTP APIs. The access token eventually expires, causing requests to fail with HTTP `401`.
  A Custom Application comes with a built-in mechanism to automatically retries unauthorized requests by forcing the Merchant Center API Gateway to assign a new valid API token. This retry mechanism is configured for Apollo queries for certain GraphQL APIs.

  However, it is useful for some requests to disable this mechanism to avoid uncalled-for network requests. This is done by specifying a `skipTokenRetry` property on the Apollo query `context` object.

  You can skip the process of token refetching as follows:

  ```js
  const query = useQuery(MyGraphQLQuery, {
    context: { skipTokenRetry: true },
  });
  ```

### Patch Changes

- [`786c697`](https://github.com/commercetools/merchant-center-application-kit/commit/786c6978c1febf927db6b45c758498b72e8e48be) [#1745](https://github.com/commercetools/merchant-center-application-kit/pull/1745) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* [`ebb2441`](https://github.com/commercetools/merchant-center-application-kit/commit/ebb2441cfb5ee126a1be0ea0add017ec53aefbba) [#1754](https://github.com/commercetools/merchant-center-application-kit/pull/1754) Thanks [@tdeekens](https://github.com/tdeekens)! - fix(application-shell): to support token retry on mc backend graphql …

- [`178ff31`](https://github.com/commercetools/merchant-center-application-kit/commit/178ff317426e0cfcfe1c0adf42a9eada3b134642) [#1734](https://github.com/commercetools/merchant-center-application-kit/pull/1734) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* [`9bc8558`](https://github.com/commercetools/merchant-center-application-kit/commit/9bc85581d336c7d75fda5dc82a1c02f32f16c1fb) [#1704](https://github.com/commercetools/merchant-center-application-kit/pull/1704) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

* Updated dependencies [[`786c697`](https://github.com/commercetools/merchant-center-application-kit/commit/786c6978c1febf927db6b45c758498b72e8e48be), [`178ff31`](https://github.com/commercetools/merchant-center-application-kit/commit/178ff317426e0cfcfe1c0adf42a9eada3b134642), [`9bc8558`](https://github.com/commercetools/merchant-center-application-kit/commit/9bc85581d336c7d75fda5dc82a1c02f32f16c1fb), [`1fdde03`](https://github.com/commercetools/merchant-center-application-kit/commit/1fdde039f36a0290bfc1c179002cfe6d535f35c0)]:
  - @commercetools-frontend/application-components@16.17.0
  - @commercetools-frontend/i18n@16.17.0
  - @commercetools-frontend/react-notifications@16.17.0
  - @commercetools-frontend/sentry@16.17.0
  - @commercetools-frontend/application-shell-connectors@16.17.0
  - @commercetools-frontend/l10n@16.17.0
  - @commercetools-frontend/permissions@16.17.0

## 16.16.5

### Patch Changes

- Updated dependencies [[`4c54f6d`](https://github.com/commercetools/merchant-center-application-kit/commit/4c54f6d88bc7a9107d721afd1e38d66a3eb4577d), [`3d38e5e`](https://github.com/commercetools/merchant-center-application-kit/commit/3d38e5e536b2ef410f796752b6f9926479cd7017)]:
  - @commercetools-frontend/i18n@16.16.5
  - @commercetools-frontend/react-notifications@16.16.5
  - @commercetools-frontend/application-components@16.16.5

## 16.16.4

### Patch Changes

- [`d8915a8`](https://github.com/commercetools/merchant-center-application-kit/commit/d8915a8b29ac940839720d5912a1ef0050b9ada5) [#1713](https://github.com/commercetools/merchant-center-application-kit/pull/1713) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update dependency @testing-library/react to v11

  Added support for both @testing-library/react to v11 and v10.

* [`4fff00c`](https://github.com/commercetools/merchant-center-application-kit/commit/4fff00c24bf74d853170400951cfb1892567f313) [#1717](https://github.com/commercetools/merchant-center-application-kit/pull/1717) Thanks [@emmenko](https://github.com/emmenko)! - Update Sentry packages and fix wrong configuration option (`allowUrls` instead of `denyUrls`)

* Updated dependencies [[`d8915a8`](https://github.com/commercetools/merchant-center-application-kit/commit/d8915a8b29ac940839720d5912a1ef0050b9ada5), [`4fff00c`](https://github.com/commercetools/merchant-center-application-kit/commit/4fff00c24bf74d853170400951cfb1892567f313)]:
  - @commercetools-frontend/application-shell-connectors@16.16.4
  - @commercetools-frontend/react-notifications@16.16.4
  - @commercetools-frontend/sentry@16.16.4
  - @commercetools-frontend/permissions@16.16.4
  - @commercetools-frontend/i18n@16.16.4
  - @commercetools-frontend/l10n@16.16.4
  - @commercetools-frontend/application-components@16.16.4

## 16.16.3

### Patch Changes

- [`67e5e2c`](https://github.com/commercetools/merchant-center-application-kit/commit/67e5e2ccbddfc3df5fe2cea23f02c83d2bdcc73b) [#1698](https://github.com/commercetools/merchant-center-application-kit/pull/1698) Thanks [@emmenko](https://github.com/emmenko)! - test(app-shell): migrate tests to use msw, instead of custom graphql mock server

## 16.16.2

### Patch Changes

- [`b4f2bfd`](https://github.com/commercetools/merchant-center-application-kit/commit/b4f2bfd34579f7a24615171aeedb47afd6fbc16f) [#1699](https://github.com/commercetools/merchant-center-application-kit/pull/1699) Thanks [@tdeekens](https://github.com/tdeekens)! - chore: update flopflip adapters

- Updated dependencies [[`4290f63`](https://github.com/commercetools/merchant-center-application-kit/commit/4290f63f89e0d394176ed36c9bb436ac7228d66d)]:
  - @commercetools-frontend/i18n@16.16.2
  - @commercetools-frontend/application-components@16.16.2

## 16.16.1

### Patch Changes

- [`bc15ac2`](https://github.com/commercetools/merchant-center-application-kit/commit/bc15ac2f6d53d4c8e0d53ceb6c1a0e5ba0f5353e) [#1692](https://github.com/commercetools/merchant-center-application-kit/pull/1692) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* [`f23655a`](https://github.com/commercetools/merchant-center-application-kit/commit/f23655a681fd54fca9757e0b62727c38aaa813ad) [#1552](https://github.com/commercetools/merchant-center-application-kit/pull/1552) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update dependency graphql-cli to v4

* Updated dependencies [[`bc15ac2`](https://github.com/commercetools/merchant-center-application-kit/commit/bc15ac2f6d53d4c8e0d53ceb6c1a0e5ba0f5353e), [`f23655a`](https://github.com/commercetools/merchant-center-application-kit/commit/f23655a681fd54fca9757e0b62727c38aaa813ad)]:
  - @commercetools-frontend/application-components@16.16.1
  - @commercetools-frontend/application-shell-connectors@16.16.1
  - @commercetools-frontend/react-notifications@16.16.1
  - @commercetools-frontend/sdk@16.16.1
  - @commercetools-frontend/sentry@16.16.1
  - @commercetools-frontend/permissions@16.16.1
  - @commercetools-frontend/i18n@16.16.1
  - @commercetools-frontend/l10n@16.16.1

## 16.16.0

### Minor Changes

- [`4216b92`](https://github.com/commercetools/merchant-center-application-kit/commit/4216b922fbb39e74ce35f8647d1c4e9ae77909c8) [#1685](https://github.com/commercetools/merchant-center-application-kit/pull/1685) Thanks [@emmenko](https://github.com/emmenko)! - Refactor i18n package to consume compiled data from ui-kit translation messages. Furthermore, the `@commercetools-frontend/i18n` now exposes a `compiled-data` folder as well: `@commercetools-frontend/i18n/compiled-data`.
  This can be used the load pre-compiled messages and thus improving the runtime performance.

  Furthermore, the `mc-scripts extract-intl` command has been deprecated in favor of the more official message extraction with the `@formatjs/cli`: https://formatjs.io/docs/getting-started/message-extraction.

### Patch Changes

- [`f144292`](https://github.com/commercetools/merchant-center-application-kit/commit/f1442921650ca4e6c9bf61ce31bda2b63e72038a) [#1673](https://github.com/commercetools/merchant-center-application-kit/pull/1673) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* [`211ab69`](https://github.com/commercetools/merchant-center-application-kit/commit/211ab6969a78af5c592c1cc3c3e3ace3199e95cb) [#1689](https://github.com/commercetools/merchant-center-application-kit/pull/1689) Thanks [@emmenko](https://github.com/emmenko)! - Remove emotion dependencies resolutions

- [`74d43d2`](https://github.com/commercetools/merchant-center-application-kit/commit/74d43d2abe7efa085780692d8a364de4aaad7278) [#1690](https://github.com/commercetools/merchant-center-application-kit/pull/1690) Thanks [@tdeekens](https://github.com/tdeekens)! - fix: to re-export the launchdarkly adapter

- Updated dependencies [[`f144292`](https://github.com/commercetools/merchant-center-application-kit/commit/f1442921650ca4e6c9bf61ce31bda2b63e72038a), [`211ab69`](https://github.com/commercetools/merchant-center-application-kit/commit/211ab6969a78af5c592c1cc3c3e3ace3199e95cb), [`4216b92`](https://github.com/commercetools/merchant-center-application-kit/commit/4216b922fbb39e74ce35f8647d1c4e9ae77909c8)]:
  - @commercetools-frontend/actions-global@16.16.0
  - @commercetools-frontend/application-components@16.16.0
  - @commercetools-frontend/application-shell-connectors@16.16.0
  - @commercetools-frontend/browser-history@16.16.0
  - @commercetools-frontend/constants@16.16.0
  - @commercetools-frontend/i18n@16.16.0
  - @commercetools-frontend/l10n@16.16.0
  - @commercetools-frontend/notifications@16.16.0
  - @commercetools-frontend/permissions@16.16.0
  - @commercetools-frontend/react-notifications@16.16.0
  - @commercetools-frontend/sdk@16.16.0
  - @commercetools-frontend/sentry@16.16.0
  - @commercetools-frontend/url-utils@16.16.0

## 16.15.9

### Patch Changes

- [`564cd91`](https://github.com/commercetools/merchant-center-application-kit/commit/564cd9186d23ea34886d1c41718486e16d3ca90e) [#1671](https://github.com/commercetools/merchant-center-application-kit/pull/1671) Thanks [@emmenko](https://github.com/emmenko)! - Allow to overwrite LD client ID via application config.

  > This is mostly useful for internal usage on our staging environments.

* [`9f861cd`](https://github.com/commercetools/merchant-center-application-kit/commit/9f861cdf31017d394f7738c80aa377d977a5460f) [#1667](https://github.com/commercetools/merchant-center-application-kit/pull/1667) Thanks [@emmenko](https://github.com/emmenko)! - Import types using 'import type' syntax

* Updated dependencies [[`a0ae954`](https://github.com/commercetools/merchant-center-application-kit/commit/a0ae9543c139bfa4cde619153082b400d953dfa5), [`564cd91`](https://github.com/commercetools/merchant-center-application-kit/commit/564cd9186d23ea34886d1c41718486e16d3ca90e)]:
  - @commercetools-frontend/i18n@16.15.9
  - @commercetools-frontend/react-notifications@16.15.9
  - @commercetools-frontend/constants@16.15.9
  - @commercetools-frontend/application-components@16.15.9
  - @commercetools-frontend/actions-global@16.15.9
  - @commercetools-frontend/application-shell-connectors@16.15.9
  - @commercetools-frontend/sdk@16.15.9
  - @commercetools-frontend/sentry@16.15.9
  - @commercetools-frontend/permissions@16.15.9
  - @commercetools-frontend/l10n@16.15.9

## 16.15.8

### Patch Changes

- [`c62261f`](https://github.com/commercetools/merchant-center-application-kit/commit/c62261f80e17fb63467eed6328e41764d3e9a50e) [#1653](https://github.com/commercetools/merchant-center-application-kit/pull/1653) Thanks [@renovate](https://github.com/apps/renovate)! - Update dependencies and regenerate l10n data based on CLDR v37

- Updated dependencies [[`c62261f`](https://github.com/commercetools/merchant-center-application-kit/commit/c62261f80e17fb63467eed6328e41764d3e9a50e), [`bb95246`](https://github.com/commercetools/merchant-center-application-kit/commit/bb95246be446aa0431b3b7d3e48979159e5cbd5c)]:
  - @commercetools-frontend/actions-global@16.15.8
  - @commercetools-frontend/application-components@16.15.8
  - @commercetools-frontend/l10n@16.15.8
  - @commercetools-frontend/react-notifications@16.15.8
  - @commercetools-frontend/sdk@16.15.8
  - @commercetools-frontend/sentry@16.15.8
  - @commercetools-frontend/application-shell-connectors@16.15.8
  - @commercetools-frontend/i18n@16.15.8
  - @commercetools-frontend/permissions@16.15.8

## 16.15.7

### Patch Changes

- [`302e0b8`](https://github.com/commercetools/merchant-center-application-kit/commit/302e0b87ae2e496f23d231ad572c60914699ff85) [#1660](https://github.com/commercetools/merchant-center-application-kit/pull/1660) Thanks [@emmenko](https://github.com/emmenko)! - When using the `<ApplicationShellProvider>` (for **internal usage**, you probably only need the `<ApplicationShell>`), the `environment` prop is not being coerced, when passing it as `environment={window.app}`, causing possible values to be strings (for example `"false"`).

* [`7638609`](https://github.com/commercetools/merchant-center-application-kit/commit/76386095d2097b738b395ec54bb363426002bbff) [#1656](https://github.com/commercetools/merchant-center-application-kit/pull/1656) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency downshift to v6

## 16.15.6

### Patch Changes

- [`2f6ef4a`](https://github.com/commercetools/merchant-center-application-kit/commit/2f6ef4ae637d9e1de78d8358322be5dd2f87868b) [#1651](https://github.com/commercetools/merchant-center-application-kit/pull/1651) Thanks [@emmenko](https://github.com/emmenko)! - Remove unused feature toggle for fetching project extensions.

## 16.15.5

### Patch Changes

- [`9800911`](https://github.com/commercetools/merchant-center-application-kit/commit/9800911fe0523a2a02271950490c4ed15b2c2765) [#1650](https://github.com/commercetools/merchant-center-application-kit/pull/1650) Thanks [@emmenko](https://github.com/emmenko)! - Make coercing environment values a React hook, bail out if the value is not a string.

* [`cd800cd`](https://github.com/commercetools/merchant-center-application-kit/commit/cd800cd4b88729f087ebcb0a13ce32c2ddbbc58b) [#1648](https://github.com/commercetools/merchant-center-application-kit/pull/1648) Thanks [@emmenko](https://github.com/emmenko)! - fix(app-shell): coercing values for stringified array with double escaped quotes

## 16.15.3

### Patch Changes

- [`6d98245`](https://github.com/commercetools/merchant-center-application-kit/commit/6d98245615ddb83e805e5cc2cc0620920b4a71c7) [#1643](https://github.com/commercetools/merchant-center-application-kit/pull/1643) Thanks [@emmenko](https://github.com/emmenko)! - Update copyright date to 2020 in LICENSE files

- Updated dependencies [[`6d98245`](https://github.com/commercetools/merchant-center-application-kit/commit/6d98245615ddb83e805e5cc2cc0620920b4a71c7)]:
  - @commercetools-frontend/actions-global@16.15.3
  - @commercetools-frontend/application-shell-connectors@16.15.3
  - @commercetools-frontend/assets@16.15.3
  - @commercetools-frontend/browser-history@16.15.3
  - @commercetools-frontend/constants@16.15.3
  - @commercetools-frontend/i18n@16.15.3
  - @commercetools-frontend/l10n@16.15.3
  - @commercetools-frontend/notifications@16.15.3
  - @commercetools-frontend/permissions@16.15.3
  - @commercetools-frontend/react-notifications@16.15.3
  - @commercetools-frontend/sdk@16.15.3
  - @commercetools-frontend/sentry@16.15.3
  - @commercetools-frontend/url-utils@16.15.3
  - @commercetools-frontend/application-components@16.15.3

## 16.15.2

### Patch Changes

- [`0f3dcc3`](https://github.com/commercetools/merchant-center-application-kit/commit/0f3dcc38c81a5fb3c668faecce9a13057f66a66b) [#1638](https://github.com/commercetools/merchant-center-application-kit/pull/1638) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- Updated dependencies [[`0f3dcc3`](https://github.com/commercetools/merchant-center-application-kit/commit/0f3dcc38c81a5fb3c668faecce9a13057f66a66b)]:
  - @commercetools-frontend/actions-global@16.15.2
  - @commercetools-frontend/application-components@16.15.2
  - @commercetools-frontend/application-shell-connectors@16.15.2
  - @commercetools-frontend/browser-history@16.15.2
  - @commercetools-frontend/constants@16.15.2
  - @commercetools-frontend/i18n@16.15.2
  - @commercetools-frontend/l10n@16.15.2
  - @commercetools-frontend/notifications@16.15.2
  - @commercetools-frontend/permissions@16.15.2
  - @commercetools-frontend/react-notifications@16.15.2
  - @commercetools-frontend/sdk@16.15.2
  - @commercetools-frontend/sentry@16.15.2
  - @commercetools-frontend/url-utils@16.15.2

## 16.15.0

### Minor Changes

- [`728024c`](https://github.com/commercetools/merchant-center-application-kit/commit/728024c57666d67e997b7342df74cceba511d182) [#1626](https://github.com/commercetools/merchant-center-application-kit/pull/1626) Thanks [@emmenko](https://github.com/emmenko)! - This release introduces the usage of a new configuration file format and marks the deprecation of the `env.json` and `headers.json` files.

  For all the necessary information about migrating to the new configuration file, please [read the release notes](https://docs.commercetools.com/custom-applications/releases/2020-07-16-introducing-a-new-and-simpler-application-config).

### Patch Changes

- [`cc8b37b`](https://github.com/commercetools/merchant-center-application-kit/commit/cc8b37bf85d4683a605a6c3233100627e670ebe7) [#1627](https://github.com/commercetools/merchant-center-application-kit/pull/1627) Thanks [@renovate](https://github.com/apps/renovate)! - chore: update dependencies

- Updated dependencies [[`cc8b37b`](https://github.com/commercetools/merchant-center-application-kit/commit/cc8b37bf85d4683a605a6c3233100627e670ebe7), [`33baf25`](https://github.com/commercetools/merchant-center-application-kit/commit/33baf25a5990d7bb292e88e4040e11bff4669b2c)]:
  - @commercetools-frontend/actions-global@16.15.0
  - @commercetools-frontend/application-components@16.15.0
  - @commercetools-frontend/application-shell-connectors@16.15.0
  - @commercetools-frontend/permissions@16.15.0
  - @commercetools-frontend/react-notifications@16.15.0
  - @commercetools-frontend/sentry@16.15.0
  - @commercetools-frontend/constants@16.15.0
  - @commercetools-frontend/i18n@16.15.0
  - @commercetools-frontend/l10n@16.15.0
  - @commercetools-frontend/sdk@16.15.0

## 16.14.1

### Patch Changes

- [`e154dcc`](https://github.com/commercetools/merchant-center-application-kit/commit/e154dcc18ebeb43a63b9dbb5ce54daca25f9f7d1) [#1624](https://github.com/commercetools/merchant-center-application-kit/pull/1624) Thanks [@emmenko](https://github.com/emmenko)! - Fixes an issue when using the `forward-to` feature with the Apollo Client, where the additional headers pre-configured in `createApolloContextForProxyForwardTo` have been ignored by the Apollo Link.

## 16.14.0

### Minor Changes

- [`364e711`](https://github.com/commercetools/merchant-center-application-kit/commit/364e71195f9886d30f907b29f8b03eb650df71e5) [#1621](https://github.com/commercetools/merchant-center-application-kit/pull/1621) Thanks [@renovate](https://github.com/apps/renovate)! - feat(deps: add support for react-intl v5 through peer dependencies
  fix(deps): update dependency react-intl to v5

### Patch Changes

- [`779100b`](https://github.com/commercetools/merchant-center-application-kit/commit/779100b432ad448eefec311f31f87891f35489f6) [#1608](https://github.com/commercetools/merchant-center-application-kit/pull/1608) Thanks [@renovate](https://github.com/apps/renovate)! - Update all dependencies

* [`387cab5`](https://github.com/commercetools/merchant-center-application-kit/commit/387cab543fd607b72256f759597f90efd10b64c8) [#1614](https://github.com/commercetools/merchant-center-application-kit/pull/1614) Thanks [@emmenko](https://github.com/emmenko)! - Use non oppressive language. The `trackingEventWhitelist` option for the `<ApplicationShell>` component has been deprecated in favor of `trackingEventList`.

- [`4168061`](https://github.com/commercetools/merchant-center-application-kit/commit/41680612042d476422776e5eaa254450bf874581) [#1618](https://github.com/commercetools/merchant-center-application-kit/pull/1618) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- Updated dependencies [[`779100b`](https://github.com/commercetools/merchant-center-application-kit/commit/779100b432ad448eefec311f31f87891f35489f6), [`364e711`](https://github.com/commercetools/merchant-center-application-kit/commit/364e71195f9886d30f907b29f8b03eb650df71e5), [`387cab5`](https://github.com/commercetools/merchant-center-application-kit/commit/387cab543fd607b72256f759597f90efd10b64c8), [`4168061`](https://github.com/commercetools/merchant-center-application-kit/commit/41680612042d476422776e5eaa254450bf874581)]:
  - @commercetools-frontend/application-components@16.14.0
  - @commercetools-frontend/application-shell-connectors@16.14.0
  - @commercetools-frontend/react-notifications@16.14.0
  - @commercetools-frontend/sdk@16.14.0
  - @commercetools-frontend/sentry@16.14.0
  - @commercetools-frontend/l10n@16.14.0
  - @commercetools-frontend/actions-global@16.14.0
  - @commercetools-frontend/browser-history@16.14.0
  - @commercetools-frontend/constants@16.14.0
  - @commercetools-frontend/i18n@16.14.0
  - @commercetools-frontend/notifications@16.14.0
  - @commercetools-frontend/permissions@16.14.0
  - @commercetools-frontend/url-utils@16.14.0

## 16.13.2

### Patch Changes

- Updated dependencies [[`7fbb076`](https://github.com/commercetools/merchant-center-application-kit/commit/7fbb0760a6573396d9038d5e2109ad25632c0392), [`faf980d`](https://github.com/commercetools/merchant-center-application-kit/commit/faf980ddb23827baba79faa4fb4e4f004922edd2)]:
  - @commercetools-frontend/i18n@16.13.2
  - @commercetools-frontend/application-components@16.13.2

## 16.13.1

### Patch Changes

- [`0e85200`](https://github.com/commercetools/merchant-center-application-kit/commit/0e8520074143508e0078f8eeb1311bc1e2b6033d) [#1600](https://github.com/commercetools/merchant-center-application-kit/pull/1600) Thanks [@tdeekens](https://github.com/tdeekens)! - feat(app-shell): to allow passing `featureFlag` as variable

## 16.13.0

### Patch Changes

- Updated dependencies [[`f70fed0`](https://github.com/commercetools/merchant-center-application-kit/commit/f70fed0e1332d1cc285bf832aec5e3dcbe325546)]:
  - @commercetools-frontend/application-components@16.13.0

## 16.12.0

### Minor Changes

- [`053ae10`](https://github.com/commercetools/merchant-center-application-kit/commit/053ae101588c75410aaa7cf4e17848fa8e22cfef) [#1583](https://github.com/commercetools/merchant-center-application-kit/pull/1583) Thanks [@tdeekens](https://github.com/tdeekens)! - feat(app-shell): to add label to maintenance page layouts

### Patch Changes

- [`fa6386c`](https://github.com/commercetools/merchant-center-application-kit/commit/fa6386c347df0505235c199232353bc315a47c81) [#1587](https://github.com/commercetools/merchant-center-application-kit/pull/1587) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- Updated dependencies [[`053ae10`](https://github.com/commercetools/merchant-center-application-kit/commit/053ae101588c75410aaa7cf4e17848fa8e22cfef), [`fa6386c`](https://github.com/commercetools/merchant-center-application-kit/commit/fa6386c347df0505235c199232353bc315a47c81)]:
  - @commercetools-frontend/application-components@16.12.0
  - @commercetools-frontend/actions-global@16.12.0
  - @commercetools-frontend/application-shell-connectors@16.12.0
  - @commercetools-frontend/browser-history@16.12.0
  - @commercetools-frontend/constants@16.12.0
  - @commercetools-frontend/i18n@16.12.0
  - @commercetools-frontend/l10n@16.12.0
  - @commercetools-frontend/notifications@16.12.0
  - @commercetools-frontend/permissions@16.12.0
  - @commercetools-frontend/react-notifications@16.12.0
  - @commercetools-frontend/sdk@16.12.0
  - @commercetools-frontend/sentry@16.12.0
  - @commercetools-frontend/url-utils@16.12.0

## 16.10.0

### Patch Changes

- [`f8f8609`](https://github.com/commercetools/merchant-center-application-kit/commit/f8f86098687c8cecaaec1b13debabe290b007b58) [#1573](https://github.com/commercetools/merchant-center-application-kit/pull/1573) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update all dependencies

* [`352cc92`](https://github.com/commercetools/merchant-center-application-kit/commit/352cc92eeb1981e6f024fb6d6065cd5a800408f2) [#1571](https://github.com/commercetools/merchant-center-application-kit/pull/1571) Thanks [@tdeekens](https://github.com/tdeekens)! - fix(app-shell): user settings menu link width for testing

- [`ab6f011`](https://github.com/commercetools/merchant-center-application-kit/commit/ab6f011d2988d25364269f737aa91a3b9c920f00) [#1572](https://github.com/commercetools/merchant-center-application-kit/pull/1572) Thanks [@tdeekens](https://github.com/tdeekens)! - fix(app-shell): user settings menu labels for opening and closing menu

- Updated dependencies [[`f8f8609`](https://github.com/commercetools/merchant-center-application-kit/commit/f8f86098687c8cecaaec1b13debabe290b007b58), [`ab6f011`](https://github.com/commercetools/merchant-center-application-kit/commit/ab6f011d2988d25364269f737aa91a3b9c920f00)]:
  - @commercetools-frontend/l10n@16.10.0
  - @commercetools-frontend/sentry@16.10.0
  - @commercetools-frontend/i18n@16.10.0
  - @commercetools-frontend/application-shell-connectors@16.10.0
  - @commercetools-frontend/react-notifications@16.10.0
  - @commercetools-frontend/application-components@16.10.0
  - @commercetools-frontend/permissions@16.10.0

## 16.9.2

### Patch Changes

- [`5992613`](https://github.com/commercetools/merchant-center-application-kit/commit/5992613e512853501581c8757b25642433f8aedd) [#1565](https://github.com/commercetools/merchant-center-application-kit/pull/1565) Thanks [@emmenko](https://github.com/emmenko)! - Ignore certain errors from being reported to Sentry

* [`a21276e`](https://github.com/commercetools/merchant-center-application-kit/commit/a21276e8ce45ce74a15873fe7853d499bcd2a348) [#1559](https://github.com/commercetools/merchant-center-application-kit/pull/1559) Thanks [@emmenko](https://github.com/emmenko)! - Use new hostname scheme in test utils for the default `mcApiUrl` environment value.

* Updated dependencies [[`fcdf604`](https://github.com/commercetools/merchant-center-application-kit/commit/fcdf604b1daba48e0617c0db321572206ba79afe), [`77c06ea`](https://github.com/commercetools/merchant-center-application-kit/commit/77c06ea17a56e2bd48793f5e1b0bba95b0dc3d27)]:
  - @commercetools-frontend/i18n@16.9.2
  - @commercetools-frontend/application-components@16.9.2

## 16.9.1

### Patch Changes

- [`f92ec54`](https://github.com/commercetools/merchant-center-application-kit/commit/f92ec54e78edb668e8dff53342e8542e96d8c319) [#1551](https://github.com/commercetools/merchant-center-application-kit/pull/1551) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

* [`92b1637`](https://github.com/commercetools/merchant-center-application-kit/commit/92b16375d22e0395ae5278bcf874e5532ad8248c) [#1555](https://github.com/commercetools/merchant-center-application-kit/pull/1555) Thanks [@renovate](https://github.com/apps/renovate)! - Remove unnecessary `@types/moment-timezone` package.

* Updated dependencies [[`f92ec54`](https://github.com/commercetools/merchant-center-application-kit/commit/f92ec54e78edb668e8dff53342e8542e96d8c319), [`92b1637`](https://github.com/commercetools/merchant-center-application-kit/commit/92b16375d22e0395ae5278bcf874e5532ad8248c)]:
  - @commercetools-frontend/actions-global@16.9.1
  - @commercetools-frontend/application-components@16.9.1
  - @commercetools-frontend/application-shell-connectors@16.9.1
  - @commercetools-frontend/assets@16.9.1
  - @commercetools-frontend/browser-history@16.9.1
  - @commercetools-frontend/constants@16.9.1
  - @commercetools-frontend/i18n@16.9.1
  - @commercetools-frontend/l10n@16.9.1
  - @commercetools-frontend/notifications@16.9.1
  - @commercetools-frontend/permissions@16.9.1
  - @commercetools-frontend/react-notifications@16.9.1
  - @commercetools-frontend/sdk@16.9.1
  - @commercetools-frontend/sentry@16.9.1
  - @commercetools-frontend/url-utils@16.9.1

## 16.9.0

### Minor Changes

- [`96ab311`](https://github.com/commercetools/merchant-center-application-kit/commit/96ab3114a4c00b192763feaeedb68c1e3e804c3e) [#1533](https://github.com/commercetools/merchant-center-application-kit/pull/1533) Thanks [@emmenko](https://github.com/emmenko)! - Upgrade to `react-intl` v4. See also https://formatjs.io/docs/react-intl/upgrade-guide-4x

  We updated the peer dependency range to support both `v3` and `v4`.

### Patch Changes

- [`b01419d`](https://github.com/commercetools/merchant-center-application-kit/commit/b01419d37881a8d5234ed977364e01c29b92e74b) [#1547](https://github.com/commercetools/merchant-center-application-kit/pull/1547) Thanks [@tdeekens](https://github.com/tdeekens)! - feat(app-shell): fetch organization name with owner

* [`ccbabfd`](https://github.com/commercetools/merchant-center-application-kit/commit/ccbabfdc75972aedcc12e833cc958b5585cb6d60) [#1549](https://github.com/commercetools/merchant-center-application-kit/pull/1549) Thanks [@tdeekens](https://github.com/tdeekens)! - chore: update deps to prepare for release

* Updated dependencies [[`b01419d`](https://github.com/commercetools/merchant-center-application-kit/commit/b01419d37881a8d5234ed977364e01c29b92e74b), [`ccbabfd`](https://github.com/commercetools/merchant-center-application-kit/commit/ccbabfdc75972aedcc12e833cc958b5585cb6d60), [`2f6f7ba`](https://github.com/commercetools/merchant-center-application-kit/commit/2f6f7bad4970a6b38b39df58fe6fedb98cb62873), [`96ab311`](https://github.com/commercetools/merchant-center-application-kit/commit/96ab3114a4c00b192763feaeedb68c1e3e804c3e)]:
  - @commercetools-frontend/application-shell-connectors@16.9.0
  - @commercetools-frontend/permissions@16.9.0
  - @commercetools-frontend/actions-global@16.9.0
  - @commercetools-frontend/application-components@16.9.0
  - @commercetools-frontend/l10n@16.9.0
  - @commercetools-frontend/react-notifications@16.9.0
  - @commercetools-frontend/sdk@16.9.0
  - @commercetools-frontend/sentry@16.9.0
  - @commercetools-frontend/i18n@16.9.0

## 16.8.8

### Patch Changes

- [`0925da6`](https://github.com/commercetools/merchant-center-application-kit/commit/0925da6f11e35cc712cc12337716f846a67c0e4c) [#1537](https://github.com/commercetools/merchant-center-application-kit/pull/1537) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- Updated dependencies [[`0925da6`](https://github.com/commercetools/merchant-center-application-kit/commit/0925da6f11e35cc712cc12337716f846a67c0e4c)]:
  - @commercetools-frontend/actions-global@16.8.8
  - @commercetools-frontend/application-components@16.8.8
  - @commercetools-frontend/application-shell-connectors@16.8.8
  - @commercetools-frontend/browser-history@16.8.8
  - @commercetools-frontend/constants@16.8.8
  - @commercetools-frontend/i18n@16.8.8
  - @commercetools-frontend/l10n@16.8.8
  - @commercetools-frontend/notifications@16.8.8
  - @commercetools-frontend/permissions@16.8.8
  - @commercetools-frontend/react-notifications@16.8.8
  - @commercetools-frontend/sdk@16.8.8
  - @commercetools-frontend/sentry@16.8.8
  - @commercetools-frontend/url-utils@16.8.8

## 16.8.7

### Patch Changes

- [`96e411a`](https://github.com/commercetools/merchant-center-application-kit/commit/96e411a95eb07a65aab3648afb79299f0767d36a) [#1524](https://github.com/commercetools/merchant-center-application-kit/pull/1524) Thanks [@renovate](https://github.com/apps/renovate)! - fix(deps): update dependency perfume.js to v5

## 16.8.6

### Patch Changes

- [`9391762`](https://github.com/commercetools/merchant-center-application-kit/commit/939176298df3558970a267b6e6478051a355ffae) [#1530](https://github.com/commercetools/merchant-center-application-kit/pull/1530) Thanks [@emmenko](https://github.com/emmenko)! - Update `@commercetools-uikit/*` packages to `10.21.0`

- Updated dependencies [[`9391762`](https://github.com/commercetools/merchant-center-application-kit/commit/939176298df3558970a267b6e6478051a355ffae)]:
  - @commercetools-frontend/actions-global@16.8.6
  - @commercetools-frontend/application-components@16.8.6
  - @commercetools-frontend/application-shell-connectors@16.8.6
  - @commercetools-frontend/assets@16.8.6
  - @commercetools-frontend/browser-history@16.8.6
  - @commercetools-frontend/constants@16.8.6
  - @commercetools-frontend/i18n@16.8.6
  - @commercetools-frontend/l10n@16.8.6
  - @commercetools-frontend/notifications@16.8.6
  - @commercetools-frontend/permissions@16.8.6
  - @commercetools-frontend/react-notifications@16.8.6
  - @commercetools-frontend/sdk@16.8.6
  - @commercetools-frontend/sentry@16.8.6
  - @commercetools-frontend/url-utils@16.8.6

## 16.8.5

### Patch Changes

- [`a66fb1f`](https://github.com/commercetools/merchant-center-application-kit/commit/a66fb1f37a06271b0fad0b2a3f6ea41c61455f0e) [#1518](https://github.com/commercetools/merchant-center-application-kit/pull/1518) Thanks [@tdeekens](https://github.com/tdeekens)! - chore(deps): update all dependencies

* [`a66fb1f`](https://github.com/commercetools/merchant-center-application-kit/commit/a66fb1f37a06271b0fad0b2a3f6ea41c61455f0e) [#1518](https://github.com/commercetools/merchant-center-application-kit/pull/1518) Thanks [@tdeekens](https://github.com/tdeekens)! - fix(deps): update dependency fuse.js to v6

- [`a66fb1f`](https://github.com/commercetools/merchant-center-application-kit/commit/a66fb1f37a06271b0fad0b2a3f6ea41c61455f0e) [#1518](https://github.com/commercetools/merchant-center-application-kit/pull/1518) Thanks [@tdeekens](https://github.com/tdeekens)! - Update remaining dependencies

- Updated dependencies [[`a66fb1f`](https://github.com/commercetools/merchant-center-application-kit/commit/a66fb1f37a06271b0fad0b2a3f6ea41c61455f0e), [`a66fb1f`](https://github.com/commercetools/merchant-center-application-kit/commit/a66fb1f37a06271b0fad0b2a3f6ea41c61455f0e)]:
  - @commercetools-frontend/sdk@16.8.5
  - @commercetools-frontend/actions-global@16.8.5
  - @commercetools-frontend/application-components@16.8.5
  - @commercetools-frontend/application-shell-connectors@16.8.5
  - @commercetools-frontend/browser-history@16.8.5
  - @commercetools-frontend/permissions@16.8.5
  - @commercetools-frontend/react-notifications@16.8.5

## 16.8.4

### Patch Changes

- [`6ffe293`](https://github.com/commercetools/merchant-center-application-kit/commit/6ffe29312433e357ac6c57ce39e98cf9cba49ba5) [#1508](https://github.com/commercetools/merchant-center-application-kit/pull/1508) Thanks [@renovate](https://github.com/apps/renovate)! - chore(deps): update all dependencies

- Updated dependencies [[`6ffe293`](https://github.com/commercetools/merchant-center-application-kit/commit/6ffe29312433e357ac6c57ce39e98cf9cba49ba5), [`6ffe293`](https://github.com/commercetools/merchant-center-application-kit/commit/6ffe29312433e357ac6c57ce39e98cf9cba49ba5)]:
  - @commercetools-frontend/i18n@16.8.4
  - @commercetools-frontend/application-shell-connectors@16.8.4
  - @commercetools-frontend/l10n@16.8.4
  - @commercetools-frontend/react-notifications@16.8.4
  - @commercetools-frontend/sdk@16.8.4
  - @commercetools-frontend/application-components@16.8.4
  - @commercetools-frontend/permissions@16.8.4

## 16.8.3

### Patch Changes

- [`10c9a89`](https://github.com/commercetools/merchant-center-application-kit/commit/10c9a89ce96c1748e84505e65266577fbea890e3) [#1503](https://github.com/commercetools/merchant-center-application-kit/pull/1503) Thanks [@emmenko](https://github.com/emmenko)! - Support experimental HTTP header `X-Application-Id`

- Updated dependencies [[`10c9a89`](https://github.com/commercetools/merchant-center-application-kit/commit/10c9a89ce96c1748e84505e65266577fbea890e3)]:
  - @commercetools-frontend/constants@16.8.3
  - @commercetools-frontend/sdk@16.8.3
  - @commercetools-frontend/actions-global@16.8.3
  - @commercetools-frontend/application-components@16.8.3
  - @commercetools-frontend/application-shell-connectors@16.8.3
  - @commercetools-frontend/react-notifications@16.8.3
  - @commercetools-frontend/sentry@16.8.3
  - @commercetools-frontend/permissions@16.8.3
  - @commercetools-frontend/i18n@16.8.3
  - @commercetools-frontend/l10n@16.8.3
