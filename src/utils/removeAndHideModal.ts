import { hideModal } from "@/store/modal/actions";

// eslint-disable-next-line import/no-anonymous-default-export
export default (dispatch: any, actionCreator: any, props: any) => () => {
  dispatch(actionCreator(props));
  dispatch(hideModal());
};
