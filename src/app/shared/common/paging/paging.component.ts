import { Component, Injector, OnInit } from '@angular/core';

import { AppComponentBase } from 'shared/common/app-component-base';
import { DomSanitizer } from '@angular/platform-browser';
import { LocalStorageService } from 'shared/utils/local-storage.service';
import { WeChatScanQRCodeService } from 'shared/services/wechat-scan-qrcode.service';

@Component({
    selector: 'yaojiangjie-paging',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.scss']
})
export class PagingComponent extends AppComponentBase implements OnInit {
    scanQRCodeUrl: any;

    constructor(
        private injector: Injector,
        private sanitizer: DomSanitizer,
        private _wechatScanQRCodeService: WeChatScanQRCodeService
    ) {
        super(injector);
    }

    ngOnInit() {
        this._wechatScanQRCodeService.init();
    }

    scanQRCode(): void {
        this._wechatScanQRCodeService.scanQRCodeHandler();
    }
}
