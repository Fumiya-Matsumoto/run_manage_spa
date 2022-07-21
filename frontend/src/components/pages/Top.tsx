import { memo, FC } from "react";

import { HeaderLayout } from "../templates/HeaderLayout";

export const Top: FC = memo(() => {
  return (
    <HeaderLayout>
        <>
            <h1>Topページ</h1>
        </>
    </HeaderLayout>
  );
});