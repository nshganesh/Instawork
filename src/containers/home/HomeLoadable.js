import Loadable from 'react-loadable';
import LoadingIndicator from "../../components/indicators/LoadingIndicator";

export default Loadable({
  loader: () => import('./Home'),
  loading: LoadingIndicator,
});
