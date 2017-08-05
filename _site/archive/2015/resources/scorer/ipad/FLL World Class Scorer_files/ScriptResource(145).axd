// Name:        Seadragon.Seadragon.Config.debug.js
// Assembly:    AjaxControlToolkit
// Version:     4.1.7.1213
// FileVersion: 4.1.7.1213
// (c) 2010 CodePlex Foundation
Type.registerNamespace('Sys.Extended.UI.Seadragon');
Type.registerNamespace('Seadragon');
Sys.Extended.UI.Seadragon.Config = function() {

    this.debugMode = true;

    this.animationTime = 1.5;

    this.blendTime = 0.5;

    this.alwaysBlend = false;

    this.autoHideControls = true;

    this.immediateRender = false;

    this.wrapHorizontal = false;

    this.wrapVertical = false;

    this.minZoomDimension = 0.8;

    this.maxZoomPixelRatio = 2;

    this.visibilityRatio = 0.5;

    this.springStiffness = 5.0;

    this.imageLoaderLimit = 2;

    this.clickTimeThreshold = 200;

    this.clickDistThreshold = 5;

    this.zoomPerClick = 2.0;

    this.zoomPerSecond = 2.0;

    this.showNavigationControl = true;

    this.maxImageCacheCount = 100;

    this.minPixelRatio = 0.5;

    this.mouseNavEnabled = true;

    this.navImages = {
        zoomIn: {
            REST: 'WebResource.axd?d=8f8hBZuejlgnnWSe8nxzeb5pjRm9aXIDf5H-Up_ZOCGWcVIzvwKLvJTixlNpr2vEnLjVTw_uoevmVK2ZlbFJB8AEpQQTD39K1QnMwxLB2muq9msBCFwozN1hkHHbrAMsvX5PQY33n606IhHkOFRl7g2&t=635236628095349753',
            GROUP: 'WebResource.axd?d=VVn_71kHw_gVJuXsIO0eVM_gd0sVcPOTVjGG6BmcpRUoVUSOwbqLbFWB-hb2Rr2yG15IhUdIbqDbTdxXzPJhiMdGZaMnRkQ0R25aBn2BRjcQYCQNKLZz-SfRI_HblVpi-NP51dVSSsho4PU3USjVicsIPzFxTWFs3eNbquQmnjA1&t=635236628095349753',
            HOVER: 'WebResource.axd?d=nc6gCyDs6_NnE26_5j2sU2G2ESx6vAh6MDhoIw-eX47dm_gVy4vwzIlDKeJclzHrV64PYnL-PJK4dbK86aISGp1YcWcR7rDQpv-bU_mC8C8RgTO2qYGMeO3vkq-fXmWYm8KIXHgi78eYq_JnFc_sTg2&t=635236628095349753',
            DOWN: 'WebResource.axd?d=LwYPl3iisLPe0MEaYJJ4SS-0M7uV52j10RQU2QnPn5WFlrii0LktOvef-pcMF0MG_iOmxencs8GEQrXgcUJGpuXp-r0xk_b2bUViiDolY_bLrsORtgFv5Wo-D-3o2GZITRFn_znFV_15bcNvNGXhYQ2&t=635236628095349753'
        },
        zoomOut: {
            REST: 'WebResource.axd?d=Hn4zKLI0oChFtFd_CwClcsz6Qvjnsh6D0icl6vJK9Y0er62HPIVCHncHmRq8S-WI02TECYwwcaYOlio0E2i1XuKTrs6sl3UtVKNW2zePcfSWof83eytK17Dm0CbH7hThKzwQeL4nNmmexLPqwrxSKA2&t=635236628095349753',
            GROUP: 'WebResource.axd?d=22f6LbDrclBK1xxQNgZzX3O7Jh8CicxPPN6LKxIFXteqXZEBqP1zXCRjY9EyqH67CHTzI394pDKt5hff4Y6j-D1skbvU9Mzrv-_YaM9qgZqeudacMRYbCREeuLPaL2-DwXQB8GdEZknbXHS6mXOqKxiQ5lZXCYll7qEo2kx_U2A1&t=635236628095349753',
            HOVER: 'WebResource.axd?d=yNIusyra-fBV6-l4Vt-JARQuAjcxW9oeoopF90-p_7Hr8wDrg3cm3Ufs-JyNgalrOGbX2Yl7OnDGAe2lbM4qOhL5qmHFPWYjTTsDe9t7NKlO46vgqa2XrsbQS6roKpuiYVjP2nSdj2zhJfJx0TRfiQ2&t=635236628095349753',
            DOWN: 'WebResource.axd?d=FxSsgQsqb_D7m3CNYFzkQUqDN9oU1Q29tjMfQu1JuvAzOobIy0ExfyffFa-11n9fZXFSgwLVWYqcYXsWBjNs9OaXp0Ap7dxhty6f4xc-J9odkDjnN902YZHyl6teMgtvnPfrEgIOQ9uHKI9SWu6f6lMv9KIGgrx5w3s_77hwoqE1&t=635236628095349753'
        },
        home: {
            REST: 'WebResource.axd?d=WzbcOz8pTgmfsQMo259GM_qZ92YWXIPhnXTkJfrwflzn18OojnNuZJOEyDI1t324czHhqdrWCpWdjHU9H-L8q278A8uEyfNqrwVe5Z4AMfub7CTqTm1Tu5xGKYU30BYRCabIP0dp8xFT9dr_q05Lxg2&t=635236628095349753',
            GROUP: 'WebResource.axd?d=LhuCpDmdcKkawr8fzGv7hxsB8OINEy54APvbb2j6Y1b5w__oiFUF0VP1UGo4xgPWTm6IYTNsXs7OZ4HCuzf19vISduhYZgNl2RlQ2jY5eNjRuevSruzqF8KoXuTocvPDL4CBRai8AuUOcWtOh4IkcbCMCKE_f3krpSMU2GJ25NI1&t=635236628095349753',
            HOVER: 'WebResource.axd?d=JNaZajwX1lIRNBUqjrE9JM4YLgorTBdfiJ5N_RsyEtB5WbW7jyIkgeNcB1Y_u84qfCiIL12wgSO_Aa8SecyfKBQkWR8iCAyBkQmdX8hDfTeVf_xHq9itG3qzvP6e_GFP8ZUZzqYkbGjyMJoz2QM30A2&t=635236628095349753',
            DOWN: 'WebResource.axd?d=NKxkJs3CLvvMbdCJ73ee9FEff5QhQOLB3c6O6VKNSux96pPl9zi91ALMR-pTDyh3OugUcbOYRm0rY6Vkm9Ja1hGD8yKckcR1NuqIByzZgGoXSLhBBOasmixfV2m1owxid24QBfvWz9GqsotJyVQudQ2&t=635236628095349753'
        },
        fullpage: {
            REST: 'WebResource.axd?d=5EFOzLYpuXAiT27KSTGXWuBU7jnBxYN-rbI1hUUwsqIjkofBfy9XiPEKJa6NRZEyAQ7x4e6eU-s0uA0ZKi4DRPR9YeAx2IYG1ypUKY6w0aA4Cmw8VV3Kt5_PM65TGvCfpPdYd2Y1RzUmnpOtaWLhrA2&t=635236628095349753',
            GROUP: 'WebResource.axd?d=KTjoer6qpMMfekFZYXmthlb6qIn7kXdkVL1e2m4-_rUzQ1izDNnRFrpHfjQRzy5ETEoP0klruTmIp0eTwF5B-bQIGZUwW9OPtZ_IEvku1JYkKDDaXeGk5it80c7WAl0aFfTJEwVs9H0a-HyfuRiRTAWY0_Ccvi74NLv_d1xSnk41&t=635236628095349753',
            HOVER: 'WebResource.axd?d=n5oVRRkiG_xoZBKS1mqQiGlBYwwN9T2l1YbiMmIhYbe4XkPgPC7yr6O_vp2MX7JfLfPsViPoUZA_MMG57QGYozi2-EUz7_haAN4Rqw9_5ItwGDpWfMhrobhcj36OyuhlP9f83KBdpyHyaflkJ2UEIg2&t=635236628095349753',
            DOWN: 'WebResource.axd?d=vfo7erObviEvcR0ozhj1UXmXNJ5YVJthGNHT2wWf7wsztsqt8uUMvgObUsrRZsxd1f5WS63fhmcYMIxQct0sGX4p5Ql5f8TlzjpJGuzxVS5aHI2nSkkM0DSIf4_lE2BVC_X1ne_v6pXOIkLMzGdWNWfBa4-uusX3I-jGV8Apzn81&t=635236628095349753'
        }
    };
};
Sys.Extended.UI.Seadragon.Config.registerClass('Sys.Extended.UI.Seadragon.Config', null, Sys.IDisposable);
