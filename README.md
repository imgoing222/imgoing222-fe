실행 
```
yarn dev
```

폴더 구조
```
src
 ┣ api
 ┃ ┣ data
 ┃ ┃ ┗ products.json
 ┃ ┣ handlers.ts
 ┃ ┗ setup.ts
 ┣ apis
 ┃ ┣ index.ts
 ┃ ┣ productApi.ts
 ┃ ┗ userApi.ts
 ┣ components
 ┃ ┣ navigationBar
 ┃ ┃ ┣ NavigationBar.tsx
 ┃ ┃ ┗ useNavigationBar.tsx
 ┃ ┣ pagination
 ┃ ┃ ┣ Pagination.tsx
 ┃ ┃ ┗ usePagination.tsx
 ┃ ┣ ErrorPage.tsx
 ┃ ┣ ProductItem.tsx
 ┃ ┗ ProductList.tsx
 ┣ hooks
 ┣ pages
 ┃ ┣ infinite-scroll
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ useInfiniteScroll.tsx
 ┃ ┣ login
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ useLogin.tsx
 ┃ ┣ pagination
 ┃ ┃ ┣ index.tsx
 ┃ ┃ ┗ useProducts.tsx
 ┃ ┣ products
 ┃ ┃ ┣ useProductDetail.tsx
 ┃ ┃ ┗ [id].tsx
 ┃ ┣ index.tsx
 ┃ ┗ _app.tsx
 ┣ stores
 ┃ ┗ index.ts
 ┣ styles
 ┃ ┗ GlobalStyle.tsx
 ┣ types
 ┃ ┣ product.ts
 ┃ ┗ user.ts
 ┗ utilities
 ┃ ┣ index.ts
 ┃ ┣ placeCommas.ts
 ┃ ┗ validateInput.ts
```

기술
- Next.js
- Typescript
- styled-component
- recoil, recoil-persist
