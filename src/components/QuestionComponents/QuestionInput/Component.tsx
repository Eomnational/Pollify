import React, { FC } from "react";
import { Input, Typography } from 'antd'
import { QuestionInputPropsType, QuestionInputDefaultProps } from './interface'


const { Paragraph } = Typography
const QuestionInput: FC<QuestionInputPropsType> = (props) => {
    const { title = '', placeholder = '请输入...' } = { ...QuestionInputDefaultProps, ...props }
    return (<div>
        <Paragraph>{title}</Paragraph>
        <Input placeholder={placeholder} />
    </div>)
}
export default QuestionInput;