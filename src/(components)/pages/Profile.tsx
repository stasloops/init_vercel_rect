import React, { useLayoutEffect } from "react";
// import { useRequest } from "../../(logic)/hooks/useRequest";
import { useAppDispatch, useAppSelector } from "../../(store)/hooks/hooks";
import { open } from "../../(store)/slices/popup/popupSlice";
import { selectIsActive, selectType } from "../../(store)/slices/popup/selector";
const Profile = () => {
//   const { $request, } = useRequest();

  const isActive = useAppSelector((state) => selectIsActive(state));
  const type = useAppSelector((state) => selectType(state));
  const dispatch = useAppDispatch();

  useLayoutEffect(() => {
    // const getData = async () => {
    //   await $request.get("url");
    // };
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p onClick={() => dispatch(open({ type: "auth" }))} className="mt-1">
        Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex
        voluptates quos aperiam repudiandae quae amet eligendi voluptate, sed
        deserunt, nesciunt dignissimos magnam possimus sit ratione expedita
        itaque nulla ad earum.
      </p>
      <div className="bg-slate-200 border-r-2">
        <span className="text-purple-400">Popup isActive: </span>
        <span className="text-purple-400">{String(isActive)}</span>
      </div>
      <div className="bg-slate-200 border-r-2 mt-2 border-1 border-red-500">
        <span className="text-purple-400">Popup type: </span>
        <span className="text-purple-400">{String(type)}</span>
      </div>
    </>
  );
};

export default Profile;
