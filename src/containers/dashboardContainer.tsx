import {connect} from 'react-redux';

import DashboardScreen from '../screens/DashboardScreen';
import {ICartState} from '../redux/reducers/cart';
import {addToCart} from '../redux/actions/cart/cart';

export interface IPropsDashboard {
  cartData?: ICartState;
  addToCart: (data: any) => void;
}

function mapStateToProps(state: any): Partial<IPropsDashboard> {
  return {
    cartData: state.rootReducer.cartReducer,
  };
}

function mapDispatchToProps(dispatch: any): Partial<IPropsDashboard> {
  return {
    addToCart: (data: any) => dispatch(addToCart(data)),
  };
}

const DashboardContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardScreen);

export default DashboardContainer;
