this.gbar_ = this.gbar_ || {};(function (_) {var window = this;
    try {
        _.jb = function (a) {var c = _.La;
            c.d? a(): c.b.push(a);};_.kb = function () {};_.lb = function (a) {_.lb[' '](a);return a;};_.lb[' '] = _.kb;
    } catch(e) {
        _._DumpException(e);
    }
    try {
        var gh;
        gh = function (a) {if (a.classList)return a.classList;a = a.className;return _.t(a) && a.match(/\S+/g) || [];};_.Q = function (a, c) {return a.classList? a.classList.contains(c): _.ra(gh(a), c);};_.R = function (a, c) {a.classList? a.classList.add(c): _.Q(a, c) || (a.className += 0 < a.className.length? ' ' + c: c);};
        _.hh = function (a, c) {if (a.classList)(0, _.ma)(c, function (c) {_.R(a, c);}); else {var d = {};
                (0, _.ma)(gh(a), function (a) {d[a] = !0;});(0, _.ma)(c, function (a) {d[a] = !0;});a.className = ''; for (var e in d)a.className += 0 < a.className.length? ' ' + e: e}};_.S = function (a, c) {a.classList? a.classList.remove(c): _.Q(a, c) && (a.className = (0, _.na)(gh(a), function (a) {return a != c;}).join(' '));};_.ih = function (a, c) {a.classList? (0, _.ma)(c, function (c) {_.S(a, c);}): a.className = (0, _.na)(gh(a), function (a) {return !_.ra(c, a);}).join(' ');};

    } catch(e) {_._DumpException(e); }
    try {
        var ak,ik,lk,kk;
        _.Vj = function (a) {_.A(this, a, 0, null);};_.w(_.Vj, _.z);_.Wj = function () {return _.D(_.J(), _.Vj, 11);};_.Xj = function (a) {_.A(this, a, 0, null);};_.w(_.Xj, _.z);_.Zj = function () {var a = _.Yj();
            return _.B(a, 9);};ak = function (a) {_.A(this, a, 0, null);};_.w(ak, _.z);_.bk = function (a) {return null != _.B(a, 2)? _.B(a, 2): .001;};_.ck = function (a) {_.A(this, a, 0, null);};_.w(_.ck, _.z);var dk = function (a) {return null != _.B(a, 3)? _.B(a, 3): 1;},ek = function (a) {return null != _.B(a, 2)? _.B(a, 2): 1E-4;},fk = function (a) {_.A(this, a, 0, null);};
        _.w(fk, _.z);_.gk = function (a) {return _.B(a, 10);};_.hk = function (a) {return _.B(a, 5);};_.Yj = function () {return _.D(_.J(), ak, 4) || new ak;};_.jk = function (a) {var c = '//www.google.com/gen_204?',c = c + a.d(2040 - c.length);
            ik(c);};ik = function (a) {var c = new window.Image,d = kk;
            c.onerror = c.onload = c.onabort = function () {d in lk && delete lk[d];};lk[kk++] = c;c.src = a;};lk = [];kk = 0;
        _.mk = function () {this.data = {};};_.mk.prototype.b = function () {window.console && window.console.log && window.console.log('Log data: ', this.data);};_.mk.prototype.d = function (a) {var c = [],d;
            for (d in this.data)c.push((0, window.encodeURIComponent)(d) + '=' + (0, window.encodeURIComponent)(String(this.data[d])));return ('atyp=i&zx=' + (new Date).getTime() + '&' + c.join('&')).substr(0, a);};
        var nk = function (a) {this.b = a;};
        nk.prototype.log = function (a, c) {try {if (this.A(a)) {var d = this.k(a, c);
                    this.d(d);}} catch(e) {}};nk.prototype.d = function (a) {this.b? a.b(): _.jk(a);};var ok = function (a, c) {this.data = {};var d = _.D(a, _.wa, 8) || new _.wa;
            this.data.ei = _.G(_.gk(a));this.data.ogf = _.G(_.B(d, 3));var e;
            e = window.google && window.google.sn? /.*hp$/.test(window.google.sn)? !1: !0: _.F(_.B(a, 7));this.data.ogrp = e? '1': '';this.data.ogv = _.G(_.B(d, 6)) + '.' + _.G(_.B(d, 7));this.data.ogd = _.G(_.B(a, 21));this.data.ogc = _.G(_.B(a, 20));this.data.ogl = _.G(_.hk(a));c && (this.data.oggv = c);};
        _.w(ok, _.mk);
        _.pk = function (a, c, d, e, f) {ok.call(this, a, c);_.ua(this.data, {jexpid: _.G(_.B(a, 9)),srcpg: 'prop=' + _.G(_.B(a, 6)),jsr: Math.round(1 / e),emsg: d.name + ':' + d.message});if (f) {f._sn && (f._sn = 'og.' + f._sn); for (var g in f)this.data[(0, window.encodeURIComponent)(g)] = f[g]}};_.w(_.pk, ok);
        var qk = [1, 2, 3, 4, 5, 6, 9, 10, 11, 13, 14, 28, 29, 30, 34, 35, 37, 38, 39, 40, 41, 42, 43, 48, 49, 50, 51, 52, 53, 500],tk = function (a, c, d, e, f, g) {ok.call(this, a, c);_.ua(this.data, {oge: e,ogex: _.G(_.B(a, 9)),ogp: _.G(_.B(a, 6)),ogsr: Math.round(1 / (rk(e)? _.H(dk(d)): _.H(ek(d)))),ogus: f});if (g) {'ogw' in g && (this.data.ogw = g.ogw, delete g.ogw);'ved' in g && (this.data.ved = g.ved, delete g.ved);a = []; for (var h in g)0 != a.length && a.push(','), a.push(sk(h)), a.push('.'), a.push(sk(g[h]));g = a.join('');'' != g && (this.data.ogad = g);}};
        _.w(tk, ok); var sk = function (a) {return (a + '').replace('.', '%2E').replace(',', '%2C');},uk = null,rk = function (a) {if (!uk) {uk = {}; for (var c = 0;c < qk.length;c++)uk[qk[c]] = !0}return !!uk[a];};
        var vk = function (a, c, d, e, f) {this.b = f;this.F = a;this.O = c;this.ea = e;this.B = _.H(ek(a), 1E-4);this.w = _.H(dk(a), 1);c = Math.random();this.C = _.F(_.B(a, 1)) && c < this.B;this.o = _.F(_.B(a, 1)) && c < this.w;a = 0;_.F(_.B(d, 1)) && (a |= 1);_.F(_.B(d, 2)) && (a |= 2);_.F(_.B(d, 3)) && (a |= 4);this.J = a;};
        _.w(vk, nk);vk.prototype.A = function (a) {return this.b || (rk(a)? this.o: this.C);};vk.prototype.k = function (a, c) {return new tk(this.O, this.ea, this.F, a, this.J, c);};
        var wk = function (a, c, d, e) {this.b = e;this.F = c;this.ea = d;this.w = _.H(_.bk(a), .001);this.O = _.F(_.B(a, 1)) && Math.random() < this.w;c = null != _.B(a, 3)? _.B(a, 3): 1;this.C = _.H(c, 1);this.o = 0;a = null != _.B(a, 4)? _.B(a, 4): !0;this.B = _.F(a, !0);};
        _.w(wk, nk);wk.prototype.log = function (a, c) {wk.G.log.call(this, a, c);if (this.b && this.B)throw a;};wk.prototype.A = function () {return this.b || this.O && this.o < this.C;};wk.prototype.k = function (a, c) {try {return _.za(_.ya.N(), 'lm').uf(a, c);} catch(d) {return new _.pk(this.F, this.ea, a, this.w, c); }}; wk.prototype.d = function (a) {wk.G.d.call(this, a);this.o++;};
        var xk;
        xk = null;_.yk = function () {if (!xk) {var a = _.D(_.J(), _.ck, 13) || new _.ck,c = _.Na(),d = _.Zj();
                xk = new wk(a, c, d, _.Ja);}return xk;};_.I = function (a, c) {_.yk().log(a, c);};_.zk = function (a, c) {return function () {try {return a.apply(c, arguments);} catch(d) {_.I(d); }};};var Ak;
        Ak = null;_.Bk = function () {if (!Ak) {var a = _.D(_.J(), fk, 12) || new fk,c = _.Na(),d = _.Wj() || new _.Vj,e = _.Zj();
                Ak = new vk(a, c, d, e, _.Ja);}return Ak;};_.U = function (a, c) {_.Bk().log(a, c);};_.U(8, {m: 'BackCompat' == window.document.compatMode? 'q': 's'});
    } catch(e) {_._DumpException(e); }
    try {
        var Ck,Gk,Ik;
        Ck = [3, 5];_.Dk = function (a) {_.A(this, a, 0, Ck);};_.w(_.Dk, _.z);var Ek = function (a) {_.A(this, a, 0, null);};
        _.w(Ek, _.z);_.Fk = function (a) {_.A(this, a, 0, null);};_.w(_.Fk, _.z);_.Fk.prototype.Qa = function () {return _.B(this, 6);};
        _.Hk = function (a, c, d, e, f, g) {_.y.call(this);this.F = c;this.J = f;this.o = g;this.S = !1;this.k = {'': !0};this.H = {'': !0};this.A = [];this.w = [];this.R = ['//' + _.G(_.B(a, 2)), 'og/_/js', 'k=' + _.G(_.B(a, 3)), 'rt=j'];this.O = '' == _.G(_.B(a, 14))? null: _.B(a, 14);this.K = ['//' + _.G(_.B(a, 2)), 'og/_/ss', 'k=' + _.G(_.B(a, 13))];this.B = '' == _.G(_.B(a, 15))? null: _.B(a, 15);this.U = _.F(_.B(a, 1))? '?host=www.gstatic.com&bust=' + _.G(_.B(a, 16)): '';this.T = _.F(_.B(a, 1))? '?host=www.gstatic.com&bust=' + 1E11 * Math.random(): '';this.d = d;_.B(a, 19);a = null !=
            _.B(a, 17)? _.B(a, 17): 1;this.b = _.H(a, 1);a = 0; for (c = e[a];a < e.length;a++, c = e[a])Gk(this, c, !0)};_.w(_.Hk, _.y);_.Aa(_.Hk, 'm');Gk = function (a, c, d) {if (!a.k[c] && (a.k[c] = !0, d && a.d[c])) for (var e = 0;e < a.d[c].length;e++)Gk(a, a.d[c][e], d)};Ik = function (a, c) { for (var d = [],e = 0;e < c.length;e++) {var f = c[e];
                if (!a.k[f]) {var g = a.d[f];
                    g && (g = Ik(a, g), d = d.concat(g));d.push(f);a.k[f] = !0;}}return d;};
        _.Kk = function (a, c, d) {c = Ik(a, c);0 < c.length && (c = a.R.join('/') + '/' + ('m=' + c.join(',')), a.O && (c += '/rs=' + a.O), c = c + a.U, Jk(a, c, (0, _.u)(a.P, a, d)), a.A.push(c));};_.Hk.prototype.P = function (a) {_.E('api').Ta(); for (var c = 0;c < this.w.length;c++)this.w[c].call(null);a && a.call(null);};
        var Jk = function (a, c, d, e) {var f = window.document.createElement('SCRIPT');
            f.async = !0;f.type = 'text/javascript';f.charset = 'UTF-8';f.src = c;var g = !0,h = e || 1;
            e = (0, _.u)(function () {g = !1;this.o.log(47, {att: h,max: a.b,url: c});h < a.b? Jk(a, c, d, h + 1): this.J.log(Error('V`' + h + '`' + a.b), {url: c});}, a);var l = (0, _.u)(function () {g && (this.o.log(46, {att: h,max: a.b,url: c}), g = !1, d && d.call(null));}, a),q = function (a) {'loaded' == a.readyState || 'complete' == a.readyState? l(): g && window.setTimeout(function () {q(a);}, 100);};
            'undefined' !== typeof f.addEventListener?
                f.onload = function () {l();}: f.onreadystatechange = function () {f.onreadystatechange = null;q(f);};f.onerror = e;a.o.log(45, {att: h,max: a.b,url: c});window.document.getElementsByTagName('HEAD')[0].appendChild(f);};
        _.Hk.prototype.Jd = function (a, c) { for (var d = [],e = 0,f = a[e];e < a.length;e++, f = a[e])this.H[f] || (d.push(f), this.H[f] = !0);0 < d.length && (d = this.K.join('/') + '/' + ('m=' + d.join(',')), this.B && (d += '/rs=' + this.B), d += this.T, Lk(d, c));};
        var Lk = function (a, c) {var d = window.document.createElement('LINK');
            d.setAttribute('rel', 'stylesheet');d.setAttribute('type', 'text/css');d.setAttribute('href', a);d.onload = d.onreadystatechange = function () {d.readyState && 'loaded' != d.readyState && 'complete' != d.readyState || c && c.call(null);};window.document.getElementsByTagName('HEAD')[0].appendChild(d);};
        _.Hk.prototype.C = function (a) {this.S || (void 0 != a? window.setTimeout((0, _.u)(this.C, this, void 0), a): (_.Kk(this, _.B(this.F, 1), (0, _.u)(this.Q, this)), this.Jd(_.B(this.F, 2)), this.S = !0));};_.Hk.prototype.Q = function () {_.v('gbar.qm', (0, _.u)(function (a) {try {a();} catch(c) {this.J.log(c); }}, this));};
        var Mk = function (a, c) {var d = {};
            d._sn = ['v.gas', c].join('.');_.I(a, d);};
        var Nk = ['gbq1', 'gbq2', 'gbqfbwa'],Ok = function (a) {var c = window.document.getElementById('gbqld');
                c && (c.style.display = a? 'none': 'block', c = window.document.getElementById('gbql')) && (c.style.display = a? 'block': 'none');};
        var Pk = function () {};
        var Qk = function (a, c, d) {this.d = a;this.k = c;this.b = d || _.m;};
        var Rk = function () {this.b = [];};
        Rk.prototype.A = function (a, c, d) {this.F(a, c, d);this.b.push(new Qk(a, c, d));};Rk.prototype.F = function (a, c, d) {d = d || _.m; for (var e = 0,f = this.b.length;e < f;e++) {var g = this.b[e];
                if (g.d == a && g.k == c && g.b == d) {this.b.splice(e, 1);break;}}};Rk.prototype.w = function (a) { for (var c = 0,d = this.b.length;c < d;c++) {var e = this.b[c];
                'hrc' == e.d && e.k.call(e.b, a);}};
        var Sk,Uk,Vk,Wk,Xk;
        Sk = null;_.Tk = function () {if (null != Sk)return Sk;var a = window.document.body.style;
            if (!(a = 'flexGrow' in a || 'webkitFlexGrow' in a))a:{if (a = window.navigator.userAgent) {var c = /Trident\/(\d+)/.exec(a);
                    if (c && 7 <= Number(c[1])) {a = /\bMSIE (\d+)/.exec(a);a = !a || '10' == a[1];break a;}}a = !1;}return Sk = a;};
        Uk = function (a, c, d) {var e = window.NaN;
            window.getComputedStyle && (a = window.getComputedStyle(a, null).getPropertyValue(c)) && 'px' == a.substr(a.length - 2) && (e = d? (0, window.parseFloat)(a.substr(0, a.length - 2)): (0, window.parseInt)(a.substr(0, a.length - 2), 10));return e;};
        Vk = function (a) {var c = a.offsetWidth,d = Uk(a, 'width');
            if (!(0, window.isNaN)(d))return c - d;var e = a.style.padding,f = a.style.paddingLeft,g = a.style.paddingRight;
            a.style.padding = a.style.paddingLeft = a.style.paddingRight = 0;d = a.clientWidth;a.style.padding = e;a.style.paddingLeft = f;a.style.paddingRight = g;return c - d;};
        Wk = function (a) {var c = Uk(a, 'min-width');
            if (!(0, window.isNaN)(c))return c;var d = a.style.width,e = a.style.padding,f = a.style.paddingLeft,g = a.style.paddingRight;
            a.style.width = a.style.padding = a.style.paddingLeft = a.style.paddingRight = 0;c = a.clientWidth;a.style.width = d;a.style.padding = e;a.style.paddingLeft = f;a.style.paddingRight = g;return c;};Xk = function (a, c) {c || -.5 != a - Math.round(a) || (a -= .5);return Math.round(a);}; _.Yk = function (a) {if (a) {var c = a.style.opacity;
                a.style.opacity = '.99';_.lb(a.offsetWidth);a.style.opacity = c;}};
        var Zk = function (a) {_.y.call(this);this.b = a;this.d = [];this.k = [];};
        _.w(Zk, _.y);Zk.prototype.L = function () {Zk.G.L.call(this);this.b = null; for (var a = 0;a < this.d.length;a++)this.d[a].Y(); for (a = 0;a < this.k.length;a++)this.k[a].Y();this.d = this.k = null;};
        Zk.prototype.La = function (a) {void 0 == a && (a = this.b.offsetWidth); for (var c = Vk(this.b),d = [],e = 0,f = 0,g = 0,h = 0,l = 0;l < this.d.length;l++) {var q = this.d[l],r = $k(q),x = Vk(q.b);
                d.push({item: q,gb: r,sh: x,tc: 0});e += r.Gc;f += r.Vc;g += r.Sb;h += x;}a = a - h - c - g;e = 0 < a? e: f;f = a;c = d;do {g = !0;h = []; for (l = q = 0;l < c.length;l++) {var r = c[l],x = 0 < f? r.gb.Gc: r.gb.Vc,C = 0 == e? 0: x / e * f + r.tc,C = Xk(C, g),g = !g;
                    r.tc = al(r.item, C, r.sh, r.gb.Sb);0 < x && C == r.tc && (h.push(r), q += x);}c = h;f = a - (0, _.pa)(d, function (a, c) {return a + c.tc;}, 0);e = q; } while (0 != f && 0 != c.length);
            for (l = 0;l < this.k.length;l++)this.k[l].La()};var cl = function (a) {var c = {};
                c.items = (0, _.oa)(a.d, function (a) {return bl(a);});c.children = (0, _.oa)(a.k, function (a) {return cl(a);});return c;},dl = function (a, c) { for (var d = 0;d < a.d.length;d++)a.d[d].b.style.width = c.items[d]; for (d = 0;d < a.k.length;d++)dl(a.k[d], c.children[d])};
        Zk.prototype.M = function () {return this.b;};
        var el = function (a, c, d, e) {Zk.call(this, a);this.w = c;this.A = d;this.o = e;};
        _.w(el, Zk);
        var $k = function (a, c) {var d = a.w,e = a.A,f;
                if (-1 == a.o) {var g = c;
                    void 0 == g && (g = Vk(a.b));f = bl(a);var h = cl(a),l = Uk(a.b, 'width', !0);
                    (0, window.isNaN)(l) && (l = a.b.offsetWidth - g);g = Math.ceil(l);a.b.style.width = f;dl(a, h);f = g;}else f = a.o;return {Gc: d,Vc: e,Sb: f};},al = function (a, c, d, e) {void 0 == d && (d = Vk(a.b));void 0 == e && (e = $k(a, d).Sb);c = e + c;0 > c && (c = 0);a.b.style.width = c + 'px';d = a.b.offsetWidth - d;a.b.style.width = d + 'px';return d - e;},bl = function (a) {var c = a.b.style.width;
                a.b.style.width = '';return c;};
        var fl = function (a, c, d) {var e;
                void 0 == e && (e = -1);return {className: a,gb: {Gc: c || 0,Vc: d || 0,Sb: e}};},gl = {className: 'gb_3b',items: [fl('gb_Ua'), fl('gb_ic'), fl('gb_Mb', 0, 2), fl('gb_jc'), fl('gb_ea', 1, 1)],eb: [{className: 'gb_ea',items: [fl('gb_Lc', 0, 1), fl('gb_Kc', 0, 1)],eb: [function (a) {a = a.gb_Lc;var c;
                        if (a)c = a.M(); else {c = window.document.querySelector('.gb_Lc');if (!c)return null;a = new Zk(c);}c = c.querySelectorAll('.gb_m'); for (var d = 0;d < c.length;d++) {var e;
                            if (_.Q(c[d], 'gb_o')) {e = new el(c[d], 0, 1, -1);var f = c[d].querySelector('.gb_l');
                        f && (f = new el(f, 0, 1, -1), e.d.push(f), a.k.push(e));}else e = new el(c[d], 0, 0, -1);a.d.push(e);}return a;}, {className: 'gb_Kc',items: [fl('gb_J'), fl('gb_4a'), fl('gb_Zb'), fl('gb_ma', 0, 1), fl('gb_Mc'), fl('gb_ia', 0, 1), fl('gb_Nc'), fl('gb_lc')],eb: [{className: 'gb_ma',items: [fl('gb_oa', 0, 1)],eb: [{className: 'gb_oa',items: [fl('gb_ka', 0, 1)],eb: []}]}]}]}, {className: 'gb_fc',items: [fl('gbqff', 1, 1), fl('gb_ec')],eb: []}]},hl = function (a, c) {var d = c;
                if (!d) {d = window.document.querySelector('.' + a.className);if (!d)return null;d = new Zk(d);} for (var e =
                        {},f = 0;f < a.items.length;f++) {var g = a.items[f],h;
                    h = g;var l = window.document.querySelector('.' + h.className);
                    if (h = l? new el(l, h.gb.Gc, h.gb.Vc, h.gb.Sb): null)d.d.push(h), e[g.className] = h;} for (f = 0;f < a.eb.length;f++) {var g = a.eb[f],q;
                    'function' == typeof g? q = g(e): q = hl(g, e[g.className]);q && d.k.push(q);}return d;};
        _.kl = function (a) {_.y.call(this);this.B = new Rk;this.d = window.document.getElementById('gb');this.O = (this.b = window.document.querySelector('.gb_ea'))? this.b.querySelector('.gb_Kc'): null;this.C = [];this.he = 60;this.J = _.B(a, 4);this.Bh = _.H(_.B(a, 2), 152);this.If = _.H(_.B(a, 1), 30);this.k = null;this.Ke = _.F(_.B(a, 3), !0);this.o = 1;this.d && this.J && (this.d.style.minWidth = this.J + 'px');_.il(this);this.Ke && (this.d && (jl(this), _.R(this.d, 'gb_p'), this.b && _.R(this.b, 'gb_p'), _.Tk() || (this.k = hl(gl))), this.La(), window.setTimeout((0, _.u)(this.La,
            this), 0));_.v('gbar.elc', (0, _.u)(this.K, this));_.v('gbar.ela', _.kb);_.v('gbar.elh', (0, _.u)(this.S, this));};_.w(_.kl, _.y);_.Aa(_.kl, 'el');var ll = function () {var a = _.kl.Lh();
            return {es: a? {f: a.Bh,h: a.he,m: a.If}: {f: 152,h: 60,m: 30},mo: 'md',vh: window.innerHeight || 0,vw: window.innerWidth || 0};};
        _.kl.prototype.L = function () {_.kl.G.L.call(this);};_.kl.prototype.La = function (a) {a && jl(this);this.k && this.k.La(Math.max(window.document.documentElement.clientWidth, Wk(this.d)));_.Yk(this.b);};
        _.kl.prototype.H = function () {try {var a = window.document.getElementById('gb'),c = a.querySelector('.gb_ea');
                _.S(a, 'gb_3c');c && _.S(c, 'gb_3c'); for (var a = 0,d;d = Nk[a];a++) {var e = window.document.getElementById(d);
                    e && _.S(e, 'gbqfh');}Ok(!1);} catch(f) {Mk(f, 'rhcc'); }this.La(!0);};_.kl.prototype.T = function () {try {var a = window.document.getElementById('gb'),c = a.querySelector('.gb_ea');
                _.R(a, 'gb_3c');c && _.R(c, 'gb_3c'); for (var a = 0,d;d = Nk[a];a++)_.R(window.document.getElementById(d), 'gbqfh');Ok(!0);} catch(e) {Mk(e, 'ahcc'); }this.La(!0);};
        _.il = function (a) {if (a.d) {var c = a.d.offsetWidth;
                0 == a.o? 900 <= c && (a.o = 1, a.w(new Pk)): 900 > c && (a.o = 0, a.w(new Pk));}};_.kl.prototype.K = function (a) {this.C.push(a);};_.kl.prototype.S = function (a) {var c = ll().es.h;
            this.he = c + a; for (a = 0;a < this.C.length;a++)try {this.C[a](ll());} catch(d) {_.I(d); }};var jl = function (a) {if (a.b) {var c;
                a.k && (c = cl(a.k));_.R(a.b, 'gb_s');a.b.style.minWidth = a.b.offsetWidth - Vk(a.b) + 'px';a.O.style.minWidth = a.O.offsetWidth - Vk(a.O) + 'px';_.S(a.b, 'gb_s');c && dl(a.k, c);}};
        _.kl.prototype.A = function (a, c, d) {this.B.A(a, c, d);};_.kl.prototype.F = function (a, c) {this.B.F(a, c);};_.kl.prototype.w = function (a) {this.B.w(a);};
        _.jb(function () {var a = _.D(_.J(), Ek, 21) || new Ek,a = new _.kl(a);
            _.Ca('el', a);_.v('gbar.gpca', (0, _.u)(a.T, a));_.v('gbar.gpcr', (0, _.u)(a.H, a));});_.v('gbar.elr', ll);_.ml = function (a) {this.k = _.kl.N();this.d = a;};_.ml.prototype.b = function (a, c) {0 == this.k.o? (_.R(a, 'gb_r'), c? (_.S(a, 'gb_la'), _.R(a, 'gb_Oc')): (_.S(a, 'gb_Oc'), _.R(a, 'gb_la'))): _.ih(a, ['gb_r', 'gb_la', 'gb_Oc']);};_.v('gbar.sos', function () {return window.document.querySelectorAll('.gb_hc');});_.v('gbar.si', function () {return window.document.querySelector('.gb_gc');});
        _.jb(function () {if (_.D(_.J(), _.Dk, 16)) {var a = window.document.querySelector('.gb_ea'),c = _.D(_.J(), _.Dk, 16) || new _.Dk,c = _.F(_.B(c, 1), !1),c = new _.ml(c);
                a && c.d && c.b(a, !1);}});
    } catch(e) {_._DumpException(e); }
    try {
        var nl = function () {_.La.k(_.I);};
        var ol = function (a, c) {var d = _.zk(nl);
            a.addEventListener? a.addEventListener(c, d): a.attachEvent('on' + c, d);};
        var pl = [1, 2],ql = function (a, c) {a.w.push(c);},rl = function (a) {_.A(this, a, 0, pl);};
        _.w(rl, _.z);var sl = function () {_.y.call(this);this.o = this.b = null;this.d = {};this.w = {};this.k = {};};
        _.w(sl, _.y);_.k = sl.prototype;_.k.Ze = function (a) {a && this.b && a != this.b && this.b.close();this.b = a;};_.k.Me = function (a) {a = this.k[a] || a;return this.b == a;};_.k.Fh = function (a) {this.o = a;};
        _.k.Le = function (a) {return this.o == a;};_.k.hd = function () {this.b && this.b.close();this.b = null;};_.k.tf = function (a) {this.b && this.b.getId() == a && this.hd();};_.k.Pb = function (a, c, d) {this.d[a] = this.d[a] || {};this.d[a][c] = this.d[a][c] || [];this.d[a][c].push(d);};_.k.fd = function (a, c) {var d = c.getId();
            if (this.d[a] && this.d[a][d]) for (var e = 0;e < this.d[a][d].length;e++)try {this.d[a][d][e]();} catch(f) {_.I(f); }};_.k.Hh = function (a, c) {this.w[a] = c;};_.k.rf = function (a) {return !this.w[a.getId()];};
        _.k.Qg = function () {return !!this.b && this.b.V;};_.k.qf = function () {return !!this.b;};_.k.Re = function () {this.b && this.b.la();};_.k.cf = function (a) {this.k[a] && (this.b && this.b.getId() == a || this.k[a].open());};_.k.jh = function (a) {this.k[a.getId()] = a;};var tl;
        window.gbar && window.gbar._DPG? tl = window.gbar._DPG[0] || {}: tl = {};var ul;
        window.gbar && window.gbar._LDD? ul = window.gbar._LDD: ul = [];var vl = _.Na(),wl = new _.Hk(vl, _.D(_.J(), rl, 17) || new rl, tl, ul, _.yk(), _.Bk());
        _.Ca('m', wl); if (_.F(_.B(vl, 18), !0))wl.C(); else {var xl = _.H(_.B(vl, 19), 200),yl = (0, _.u)(wl.C, wl, xl);
            _.jb(yl);}ol(window.document, 'DOMContentLoaded');ol(window, 'load');
        _.v('gbar.ldb', (0, _.u)(_.La.k, _.La));_.v('gbar.mls', function () {});var zl = function () {_.y.call(this);this.k = this.b = null;this.w = 0;this.o = {};this.d = !1;var a = window.navigator.userAgent;
            0 <= a.indexOf('MSIE') && 0 <= a.indexOf('Trident') && (a = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a)) && a[1] && 9 > (0, window.parseFloat)(a[1]) && (this.d = !0);};
        _.w(zl, _.y);
        var Al = function (a, c, d) {if (!a.d)if (d instanceof Array) for (var e in d)Al(a, c, d[e]); else {e = (0, _.u)(a.A, a, c);var f = a.w + d;
                    a.w++;c.setAttribute('data-eqid', f);a.o[f] = e;c && c.addEventListener? c.addEventListener(d, e, !1): c && c.attachEvent? c.attachEvent('on' + d, e): _.I(Error('W`' + c));}};
        zl.prototype.Ne = function (a, c) {if (this.d)return null;if (c instanceof Array) {var d = null,e;
                for (e in c) {var f = this.Ne(a, c[e]);
                    f && (d = f); }return d;}d = null;this.b && this.b.type == c && this.k == a && (d = this.b, this.b = null);if (e = a.getAttribute('data-eqid'))a.removeAttribute('data-eqid'), (e = this.o[e])? a.removeEventListener? a.removeEventListener(c, e, !1): a.detachEvent && a.detachEvent('on' + c, e): _.I(Error('X`' + a));return d;};zl.prototype.A = function (a, c) {this.b = c;this.k = a;c.preventDefault? c.preventDefault(): c.returnValue = !1;};
        _.Ca('eq', new zl);var Bl = function () {_.y.call(this);this.ge = [];this.jd = [];};
        _.w(Bl, _.y);Bl.prototype.b = function (a, c) {this.ge.push({uc: a,options: c});};Bl.prototype.init = function () {window.gapi = {};var a = _.Yj(),c = window.___jsl = {};
            c.h = _.G(_.B(a, 1));c.ms = _.G(_.B(a, 2));c.m = _.G(_.B(a, 3));c.l = [];a = _.D(_.J(), _.Xj, 5) || new _.Xj;_.B(a, 1) && (a = _.B(a, 3)) && this.jd.push(a);a = _.D(_.J(), _.Fk, 6) || new _.Fk;_.B(a, 1) && (a = _.B(a, 2)) && this.jd.push(a);_.v('gapi.load', (0, _.u)(this.b, this));return this;};
        var Cl = window,Dl,El = _.Yj();
        Dl = _.B(El, 7);Cl.__PVT = _.G(Dl);_.Ca('gs', (new Bl).init());(function () { for (var a = function (a) {return function () {_.U(44, {n: a});};},c = 0;c < _.Qa.length;c++) {var d = 'gbar.' + _.Qa[c];
                _.v(d, a(d));}var e = _.ya.N();
            _.za(e, 'api').Ta();ql(_.za(e, 'm'), function () {_.za(e, 'api').Ta();});})();var Fl = function (a) {_.jb(function () {var c = window.document.querySelector('.' + a);
                c && (c = c.querySelector('.gb_K')) && Al(_.E('eq'), c, 'click');});};
        var Gl = window.document.querySelector('.gb_J'),Hl = /(\s+|^)gb_dc(\s+|$)/;
        Gl && !Hl.test(Gl.className) && Fl('gb_J');var Il = new sl;
        _.Ca('dd', Il);_.v('gbar.close', (0, _.u)(Il.hd, Il));_.v('gbar.cls', (0, _.u)(Il.tf, Il));_.v('gbar.abh', (0, _.u)(Il.Pb, Il, 0));_.v('gbar.adh', (0, _.u)(Il.Pb, Il, 1));_.v('gbar.ach', (0, _.u)(Il.Pb, Il, 2));_.v('gbar.aeh', (0, _.u)(Il.Hh, Il));_.v('gbar.bsy', (0, _.u)(Il.Qg, Il));_.v('gbar.op', (0, _.u)(Il.qf, Il));
        Fl('gb_ma');_.jb(function () {var a = window.document.querySelector('.gb_Xa');
            a && Al(_.E('eq'), a, 'click');});Fl('gb_4a');_.v('gbar.qfgw', (0, _.u)(window.document.getElementById, window.document, 'gbqfqw'));_.v('gbar.qfgq', (0, _.u)(window.document.getElementById, window.document, 'gbqfq'));_.v('gbar.qfgf', (0, _.u)(window.document.getElementById, window.document, 'gbqf'));_.v('gbar.qfsb', (0, _.u)(window.document.getElementById, window.document, 'gbqfb'));
        Fl('gb_Zb');Fl('gb_lc');
    } catch(e) {_._DumpException(e); }
})(this.gbar_);
// Google Inc.
