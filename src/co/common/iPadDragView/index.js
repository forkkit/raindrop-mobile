import * as React from "react"
import { requireNativeComponent, Platform, View } from "react-native"

const DragViewNative = requireNativeComponent("iPadDragView", null)

export const dragViewSupported = (DragViewNative && Platform.OS === 'ios' && parseInt(Platform.Version, 10)>=11)

export default class DragView extends React.Component {
    render() {
        let { children, dragItem, dragItems, ...rest } = this.props;

        if (!dragViewSupported)
            return (
                <View {...rest}>{children}</View>
            )

        if (dragItem)
            dragItems = [dragItem]

        return (
            <DragViewNative {...rest} dragItems={dragItems}>
                {children}
            </DragViewNative>
        );
    }
}