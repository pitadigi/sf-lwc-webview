import { LightningElement, api } from 'lwc';

export default class WebView extends LightningElement {
    /**
     * URL
     */
    @api url;

    /**
     * タイトル
     */
    @api title;

    /**
     * アイコン
     */
    @api icon;

    /**
     * ヘッダタイプ
     */
    @api variant;

    /**
     * 高さ(px)
     */
    @api height;

    /**
     * カードのBodyにiframeを作成し、指定されたURLを表示する
     */
    renderedCallback() {
        if (!this.url) {
            return;
        }

        const container = this.template.querySelector('.webview-container');
        const iframe = document.createElement('iframe');

        iframe.src = this.url;
        iframe.id = 'webview-1';
        iframe.width = '100%';
        iframe.height = `${this.height}px`;
        iframe.setAttribute('frameborder', '0');

        container.appendChild(iframe);
    }

    /**
     * 新しいタブでURLを開く
     */
    handleOpen() {
        if (!this.url) {
            return;
        }

        window.open(this.url);
    }
}
