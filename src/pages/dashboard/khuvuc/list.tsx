import { Helmet } from 'react-helmet-async';
// sections
import { AreaListView } from 'src/sections/khuvuc/view';

// ----------------------------------------------------------------------

export default function OrderListPage() {
  return (
    <>
      <Helmet>
        <title> Dashboard: Khu vực</title>
      </Helmet>

      <AreaListView />
    </>
  );
}
