(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@hey_ff/my-lib', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.hey_ff = global.hey_ff || {}, global.hey_ff['my-lib'] = {}), global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var MyLibService = /** @class */ (function () {
        function MyLibService() {
        }
        return MyLibService;
    }());
    MyLibService.ɵprov = i0.ɵɵdefineInjectable({ factory: function MyLibService_Factory() { return new MyLibService(); }, token: MyLibService, providedIn: "root" });
    MyLibService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    MyLibService.ctorParameters = function () { return []; };

    var MyLibComponent = /** @class */ (function () {
        function MyLibComponent() {
        }
        MyLibComponent.prototype.ngOnInit = function () {
        };
        return MyLibComponent;
    }());
    MyLibComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ml-my-lib',
                    template: "\n    <p>\n      my-lib works!\n    </p>\n  "
                },] }
    ];
    MyLibComponent.ctorParameters = function () { return []; };

    var MyTheButtonComponent = /** @class */ (function () {
        function MyTheButtonComponent() {
        }
        MyTheButtonComponent.prototype.ngOnInit = function () {
        };
        return MyTheButtonComponent;
    }());
    MyTheButtonComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'ml-the-button',
                    template: "<span class=\"theButton\">\n    {{text}}\n</span>",
                    styles: [".theButton{border:1px solid pink;border-radius:8px;color:pink;display:inline-block;line-height:32px;min-width:60px;padding:0 6px}"]
                },] }
    ];
    MyTheButtonComponent.ctorParameters = function () { return []; };
    MyTheButtonComponent.propDecorators = {
        text: [{ type: i0.Input }]
    };

    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        return MyLibModule;
    }());
    MyLibModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [MyLibComponent, MyTheButtonComponent],
                    imports: [],
                    exports: [MyLibComponent, MyTheButtonComponent]
                },] }
    ];

    /*
     * Public API Surface of my-lib
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MyLibComponent = MyLibComponent;
    exports.MyLibModule = MyLibModule;
    exports.MyLibService = MyLibService;
    exports.MyTheButtonComponent = MyTheButtonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=hey_ff-my-lib.umd.js.map
