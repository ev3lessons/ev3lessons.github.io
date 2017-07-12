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
            REST: 'WebResource.axd?d=UAeeTLK5d4Doi4TDenXqRVaTiy1Fod2pssEPwAGjWUxIxBqLoJkywIoqth1nk4utI-c81Q5jP8EBX61TECd4dQu0PFpMM--HUNrIYYPlCWnS-9L7hX0XJoNn3YYYPHDtFxJ2GG1q9pFg4cHa3X0TmA2&t=635236628095349753',
            GROUP: 'WebResource.axd?d=0zOVYFTriKDFhCrtgsKI0p8NdmT5ClDJmORSrRZLYd5Fafai7VQGJTHhf29lySucY-W5DkRYuLJv5b8dcc4cUXo0noZ-QVBCHyWvsE23kiSkipXeR06DYJhJW4tSYRNq5MzhXFTSChfHobhbAjNNdFiZZHs-BUQUvhsk99RFqHI1&t=635236628095349753',
            HOVER: 'WebResource.axd?d=uWkf7vNWV87gP-YzjY2CEMeAkg6_ff3lAfm9f6NZ8YYrEH2v4n1KQCyIkkGv8MavS8TJXfCOcweIb_SpS1vj4_9Fv6Js3GLZviqJK2koqERU7FawiqBEq594hh80z6LDpHzZn4HF4mqhteFqcNkqtw2&t=635236628095349753',
            DOWN: 'WebResource.axd?d=y09d2LIAMi1rR7WTcapH9Q7MNozaB6hWNRwDvyGlaThb0cEtRHMSdYm0SZzTa4PeEhfzFLL2mw8-vKpbfyXnavocSu1JmlDKNNDv3VQsRkwrgCV0hGqKvff77BDEWAuvZUAkMi7PONAy7IgfGQtZhQ2&t=635236628095349753'
        },
        zoomOut: {
            REST: 'WebResource.axd?d=qCKxvjVEVM1pvR1gh2X8meh6A9SNdUs1JaILWCRgpf3T1-A9K_u3VPot6mwRvEGW7DMT5wUWwYlNZyOhrSgBXrrZCLT3wSC2C7waCe1MjsUCBAJvBa-WFq_ye2rRFng9VM9eMSL0IiCcB7lc_637nw2&t=635236628095349753',
            GROUP: 'WebResource.axd?d=eXKM6xxknzFl65IIgDN-UHl5IkOc0diLMYNAgbocZVx8eDbPJYWYn9QYm6X8sgolcUjCgw_aAlxZ3ftj_TEvpMUjrZi-IqPIY-KJHHVf6kMHFuBqY_C6Y2DYtNTgFS8vblhG_JxOti4nw3GNK0nYd-mpxIIgrY3TtpKFjcJWvGc1&t=635236628095349753',
            HOVER: 'WebResource.axd?d=ZdFTUAAiDBhPmyKMsgV0SE6T-I2pl38EFb7fFPluwTB0mcXlbjM9v6rqv0uio8YFUfvJWQLygRY8RzVfZiCeJ7jUh-R5RoxRUN_WMGcmcHlryBfv6IshW1SOmO-1P8x85_BkyA7sIlA9MlvJqhOs1Q2&t=635236628095349753',
            DOWN: 'WebResource.axd?d=CA6_k10UAaxRre7sGgLJTkMs3udRkReu-aU-gN-7dsHh4Kq1IRd6aTWKnIM8vSJJanlQTf8P9sLGw7iYsnylVbpdtFgdDbNmJ1o7dTwgMqdk595Ne9ZBMyIdyQpRajFJW09mVUazyuFz-48mWwareAfLyneQTbFpPErkVUSZ5Bc1&t=635236628095349753'
        },
        home: {
            REST: 'WebResource.axd?d=FZwhqSmJgjT0HvdpGMnb8Z-4oSWioKhxrHKfZ2k4UOdpTmFM5wqcem5MsolhKsbNPb4cT_cb4iAjCzuwzJF706a3RrWH4MpKz2AmJoLL6H_G-DqbZxAtlanWFK-vXHz0FcszKkTbHJGtHF54VSafqA2&t=635236628095349753',
            GROUP: 'WebResource.axd?d=gTc0cQy-ZN_0dW6AtzPjVv4aDJXSpAXeyWSknpxiST_xpKT5XNJTDfLdIm3WAsF6Op4z2XbUPqgRzgulzO5tsnEHWtNvrysgKCIYbTDOO6D6WE2DXlyZfq_GUW5lWeKqPwcJ4Xhp5-O_FNY1KHt6u7hkqnvr7HUT1MkZ1ejRvMk1&t=635236628095349753',
            HOVER: 'WebResource.axd?d=KLYOPaUD1tHrJqRdgY-_6TpsMo3OUc1GJNG5NrVtT99DhSP7sgyW7TEJqKbPs6DHQYlV3MQohW6P5dPZ2JwEDfmsojvjKheTBzTTCA9lWxbZ_2t57KMuFbqn4rmqbR3ntac5rOjKVgXB4bvwbr9wXg2&t=635236628095349753',
            DOWN: 'WebResource.axd?d=WYG0m_sH-rI502hnLNdlDCE2HrySWjfg5WdPb0Sngxv35BigCqYLrVZuqUCGpk8KEOXbsuVlqKEL8TlRbJ435mf6410sRt9Z3DMkLsqqqsDrJV5IgN5Ke_EThSNQB3v2NhRev-ZfREoQ0OHrSfUNug2&t=635236628095349753'
        },
        fullpage: {
            REST: 'WebResource.axd?d=PGCHlqBPIr7OH92XLKasuo2AO5jT2v3wAoyKr5rgYwHDB4AF6TR8ySHOjjxKMa3_iaPCCr9zGBl_Qw5mhgmYlJergnlc_Isgta-LDg_6lwtbtNLoUwls0ThqxMBlswD83SoWP9Otmuvrbxf5tPjCdQ2&t=635236628095349753',
            GROUP: 'WebResource.axd?d=MA7b3SgSmRBjmT_NXw58qO6lKgrqjZcWERYJh0sqgIkLGdNtpe5iISGBDtpNyAW-XLEeb4AD3mQ7JbcD6SMua0LPgGCv0wlZIqOa1w6v_ccBqVDLDFehGhpXCS40y52yPGLWoJ-cc_X92N_XjlvI74_9mSmrx-01KGOccSAd1m41&t=635236628095349753',
            HOVER: 'WebResource.axd?d=CuQCXfDMVkCyVYaGkEH2xEZvYyNSsyWNW5kpF0io9HfWNC9QhUYGHggG1csyO7dUuW-dScwGhGfl4kieK9WWhBaJTKrSo0116fiADNPJ3aGyEjErpK9gsljAWOv87j890KPnqNOmd80rG1a3Nk5NaA2&t=635236628095349753',
            DOWN: 'WebResource.axd?d=Gn5RUQCN9Z-wl3bFtPYdu1DtYbxWktZB5t2TlFSi1_WQOPSsQYxavlYqpUhPhaRAXET_Ha1RwqSUXUpzE9lWaFzt_fhCorZyCVhFInXlJ52GFKXkLW_sz2kQdRkZzF2KdQGRDa1wmc5ZtEE7O791Z8aD-zMZvyu4DCd2Tf76ICM1&t=635236628095349753'
        }
    };
};
Sys.Extended.UI.Seadragon.Config.registerClass('Sys.Extended.UI.Seadragon.Config', null, Sys.IDisposable);
