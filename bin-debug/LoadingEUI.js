var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LoadingEUI = (function (_super) {
    __extends(LoadingEUI, _super);
    function LoadingEUI() {
        var _this = _super.call(this) || this;
        _this.addToStage();
        return _this;
    }
    LoadingEUI.prototype.addToStage = function () {
        ///设置Group,用于给按钮布局，具体可参看布局示例。
        var group = new eui.Group();
        group.width = 100;
        group.height = 100;
        this.addChild(group);
        var layout = new eui.VerticalLayout();
        layout.gap = 30;
        layout.verticalAlign = egret.VerticalAlign.MIDDLE;
        layout.horizontalAlign = egret.HorizontalAlign.CENTER;
        group.layout = layout;
        ///绘制icon，并保存。
        var icon = new egret.Shape();
        icon.graphics.beginFill(0xcc2211, 1);
        icon.graphics.drawCircle(12, 12, 6);
        icon.graphics.endFill();
        this._icon = icon;
        var renderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(icon);
        var btn1 = new eui.Button();
        ///设置按钮的标签
        btn1.label = "按钮";
        btn1.icon = renderTexture;
        btn1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouch, this);
        group.addChild(btn1);
    };
    ///处理按钮的触摸事件回调
    LoadingEUI.prototype.onTouch = function (event) {
        ///获得当前按钮
        var btn = event.target;
        ///获得按钮icon，并绘转换为纹理
        var renderTexture = new egret.RenderTexture();
        renderTexture.drawToTexture(this._icon);
        switch (event.type) {
            case egret.TouchEvent.TOUCH_BEGIN:
                //设置按钮的 icon
                btn.icon = renderTexture;
                break;
            case egret.TouchEvent.TOUCH_END:
                //取消按钮的 icon
                btn.icon = null;
                break;
            default:
                break;
        }
    };
    return LoadingEUI;
}(eui.UILayer));
__reflect(LoadingEUI.prototype, "LoadingEUI");
//# sourceMappingURL=LoadingEUI.js.map