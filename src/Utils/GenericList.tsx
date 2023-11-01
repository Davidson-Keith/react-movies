import {ReactElement} from "react";
import {resolveObjectURL} from "buffer";
import Loading from "./Loading";
import css from "../Movies/MoviesList.module.css";
import IndividualMovie from "../Movies/IndividualMovie";

export default function GenericList(props: genericListProps) {
  if (!props.list) {
    if (props.loadingUI) {
      return props.loadingUI;
    }
    return <Loading/>
  } else if (props.list.length === 0) {
    if (props.emptyListUI) {
      return props.emptyListUI;
    }
    return <>There are no elements to display.</>
  } else {
    return props.children;
  }

  return (
    <>

    </>
  )
}

interface genericListProps {
  list: any;
  loadingUI?: ReactElement;
  emptyListUI?: ReactElement;
  children: ReactElement;
}
