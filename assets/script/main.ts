// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.ScrollView)
    scrollView : cc.ScrollView = null;

    // LIFE-CYCLE CALLBACKS:

    isLeftClick : boolean = false

    onLoad () {
        this.scrollView.node.on(cc.Node.EventType.MOUSE_DOWN,this.onMouseDown,this)
        this.scrollView.node.on(cc.Node.EventType.TOUCH_MOVE,this.onTouchMove,this)
        this.scrollView.node.on(cc.Node.EventType.MOUSE_UP,this.onMouseUp,this)
    }

    start () {
        
    }

    onMouseDown(event){
        
        let mouseType = event.getButton()
        if (mouseType == cc.Event.EventMouse.BUTTON_LEFT) {
            this.isLeftClick = true
            this.scrollView.horizontal = false
            this.scrollView.vertical = false
        }else if(mouseType == cc.Event.EventMouse.BUTTON_MIDDLE){
            console.log("DDDDDDDDDDDDD")
        }
    }

    onTouchMove(event){
        if( this.isLeftClick ){
            return;
        }
    }

    onMouseUp(event){
        let mouseType = event.getButton()
        if (mouseType == cc.Event.EventMouse.BUTTON_LEFT) {
            this.isLeftClick = false
            this.scrollView.horizontal = true
            this.scrollView.vertical = true
        }
    }

    

    // update (dt) {}
}
