import { PluginItem } from "@babel/core";

export function removeTestidPlugin(): PluginItem{
    return{
        visitor : {
            Program(path, state){
                const forProps = state.opts.props ||[]
            
            path.traverse()
            JSXIdentifier(current){
                const nodeName = current.node.name
                if(forProps.includes(nodeName)){
                    current.parentPath.remove()
                }
            }
        }
        }
    }
}