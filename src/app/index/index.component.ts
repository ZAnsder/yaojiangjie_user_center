import { AppComponentBase } from "shared/common/app-component-base";
import { Injector, Component, OnInit } from "@angular/core";
import { WechatScanQRCodeService } from "shared/services/wechat-scanQRCode.service";

@Component({
    selector: 'xiaoyuyue-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent extends AppComponentBase implements OnInit {
    scanQRCodeUrl: string;
    constructor
        (
        injector: Injector,
        private _wechatScanQRCodeService: WechatScanQRCodeService
        ) {
        super(injector);
    }

    ngOnInit() {
    }

    scanQRCode(): void {
        if(this.isWeiXin()) {
            this._wechatScanQRCodeService.init();
            this._wechatScanQRCodeService
            .scanQRCodeSuccess
            .subscribe( result => {
                this.scanQRCodeUrl = result;
                alert(result);
            })
        } else {
            this.message.warn("请在微信内打开!");
        }
    }
}
