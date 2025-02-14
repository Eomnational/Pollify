import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";
import { ComponentPropsType } from "../../components/QuestionComponents";
export type ComponentInfoType={
  id:string,
  type:string,
  title:string,
  props:ComponentPropsType
}

export type ComponentsStateType = {
    selectedId: string
    //组件列表
    componentList: Array<ComponentInfoType>
}


const INIT_STATE: ComponentsStateType={
    selectedId: '', 
    componentList: [],
    //其他扩展
}

export const componentsSlice = createSlice({
    name: "components",
    initialState: INIT_STATE,
    reducers: {
       //重置所有组件
        resetComponents: (state:ComponentsStateType,action: PayloadAction<ComponentsStateType>) => {
          return action.payload
        
        },
        //更新组件
        updateComponentList: (state:ComponentsStateType, action: PayloadAction<ComponentInfoType[]>) => {
          state.componentList = action.payload;
        },
        //修改selectedId
        changeSelectedId: (state:ComponentsStateType, action: PayloadAction<string>) => {
          state.selectedId = action.payload;
        }
      }
})

export const { resetComponents,updateComponentList, changeSelectedId } = componentsSlice.actions;

export default componentsSlice.reducer;