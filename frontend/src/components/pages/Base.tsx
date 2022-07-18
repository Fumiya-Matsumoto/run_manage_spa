import { memo, FC } from "react";
import { Outlet } from "react-router-dom";

import { HeaderLayout } from "../templates/HeaderLayout";

export const Base: FC = memo(() => {
  return (
    <HeaderLayout>
      <Outlet />
    </HeaderLayout>
  );
});
