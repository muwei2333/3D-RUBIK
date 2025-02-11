(function() {
    'use strict';

    function e(e, t, o) {
        function a() {
            for (var e = Math.cos, a = [new THREE.Vector3(1, 1, 1), new THREE.Vector3(1, 1, -1), new THREE.Vector3(-1, 1, -1), new THREE.Vector3(-1, 1, 1), new THREE.Vector3(1, -1, 1), new THREE.Vector3(1, -1, -1), new THREE.Vector3(-1, -1, -1), new THREE.Vector3(-1, -1, 1)], s = 0; 8 > s; s++) C.push([]), L.push([]);
            for (var r = i / 2, l = new THREE.Vector3(b, f, z), c = 0; c <= o; c++) {
                var m = c / o,
                    d = m * r,
                    g = e(d),
                    p = n(d);
                if (c == o) {
                    M.set(0, 1, 0);
                    var h = M.clone().multiplyScalar(t).add(l);
                    C[0].push(h), A.push(h);
                    var v = M.clone();
                    L[0].push(v), E.push(v);
                    continue
                }
                for (var S = 0; S <= o; S++) {
                    var w = S / o,
                        u = w * r;
                    M.x = g * e(u), M.y = p, M.z = g * n(u);
                    var h = M.clone().multiplyScalar(t).add(l);
                    C[0].push(h), A.push(h);
                    var v = M.clone().normalize();
                    L[0].push(v), E.push(v)
                }
            }
            for (var T = 1; 8 > T; T++)
                for (var h, s = 0; s < C[0].length; s++) {
                    h = C[0][s].clone().multiply(a[T]), C[T].push(h), A.push(h);
                    var v = L[0][s].clone().multiply(a[T]);
                    L[T].push(v), E.push(v)
                }
        }

        function s() {
            for (var e, t = [!0, !1, !0, !1, !1, !0, !1, !0], s = x * (o - 1), r = 0; 8 > r; r++) {
                e = _ * r;
                for (var n = 0; n < o - 1; n++)
                    for (var l = n * x, m = (n + 1) * x, g = 0; g < o; g++) {
                        var p = g + 1,
                            h = e + l + g,
                            y = e + l + p,
                            f = e + m + g,
                            z = e + m + p;
                        t[r] ? (P.push(h), P.push(f), P.push(y), P.push(y), P.push(f), P.push(z)) : (P.push(h), P.push(y), P.push(f), P.push(y), P.push(z), P.push(f))
                    }
                for (var g = 0; g < o; g++) {
                    var h = e + s + g,
                        y = e + s + g + 1,
                        f = e + D;
                    t[r] ? (P.push(h), P.push(f), P.push(y)) : (P.push(h), P.push(y), P.push(f))
                }
            }
        }

        function r() {
            var e = D,
                t = D + _,
                s = D + 2 * _,
                r = D + 3 * _;
            P.push(e), P.push(t), P.push(s), P.push(e), P.push(s), P.push(r), e = D + 4 * _, t = D + 5 * _, s = D + 6 * _, r = D + 7 * _, P.push(e), P.push(s), P.push(t), P.push(e), P.push(r), P.push(s), e = 0, t = _, s = 4 * _, r = 5 * _, P.push(e), P.push(s), P.push(t), P.push(t), P.push(s), P.push(r), e = 2 * _, t = 3 * _, s = 6 * _, r = 7 * _, P.push(e), P.push(s), P.push(t), P.push(t), P.push(s), P.push(r), e = o, t = o + 3 * _, s = o + 4 * _, r = o + 7 * _, P.push(e), P.push(t), P.push(s), P.push(t), P.push(r), P.push(s), e = o + _, t = o + 2 * _, s = o + 5 * _, r = o + 6 * _, P.push(e), P.push(s), P.push(t), P.push(t), P.push(s), P.push(r)
        }

        function m() {
            for (var e = 0; 4 > e; e++)
                for (var t = e * _, s = 4 * _ + t, r = !0 & e, n = 0; n < o; n++) {
                    var l = n + 1,
                        m = t + n,
                        a = t + l,
                        g = s + n,
                        c = s + l;
                    r ? (P.push(m), P.push(g), P.push(a), P.push(a), P.push(g), P.push(c)) : (P.push(m), P.push(a), P.push(g), P.push(a), P.push(c), P.push(g))
                }
        }

        function u() {
            for (var e = [0, 2, 4, 6], t = [1, 3, 5, 7], s = 0; 4 > s; s++)
                for (var r = _ * e[s], n = _ * t[s], l = 1 >= s, m = 0; m < o; m++) {
                    var g = m * x,
                        p = (m + 1) * x,
                        h = r + g,
                        a = r + p,
                        y = n + g,
                        c = n + p;
                    l ? (P.push(h), P.push(y), P.push(a), P.push(a), P.push(y), P.push(c)) : (P.push(h), P.push(a), P.push(y), P.push(a), P.push(c), P.push(y))
                }
        }

        function g() {
            for (var e = o - 1, t = [0, 1, 4, 5], s = [3, 2, 7, 6], r = [0, 1, 1, 0], n = 0; 4 > n; n++)
                for (var l = t[n] * _, m = s[n] * _, g = 0; g <= e; g++) {
                    var p = l + o + g * x,
                        a = l + (g == e ? _ - 1 : o + (g + 1) * x),
                        h = m + o + g * x,
                        c = m + (g == e ? _ - 1 : o + (g + 1) * x);
                    r[n] ? (P.push(p), P.push(h), P.push(a), P.push(a), P.push(h), P.push(c)) : (P.push(p), P.push(a), P.push(h), P.push(a), P.push(c), P.push(h))
                }
        }
        THREE.BufferGeometry.call(this), this.type = 'RoundedBoxGeometry', o = isNaN(o) ? 1 : c(1, d(o));
        var p, h, y;
        p = h = y = e, t = e * t, t = l(t, l(p, l(h, l(y))) / 2);
        var b = p / 2 - t,
            f = h / 2 - t,
            z = y / 2 - t;
        this.parameters = {
            width: p,
            height: h,
            depth: y,
            radius: t,
            radiusSegments: o
        };
        var x = o + 1,
            v = x * o + 1 << 3,
            S = new THREE.BufferAttribute(new Float32Array(3 * v), 3),
            w = new THREE.BufferAttribute(new Float32Array(3 * v), 3),
            C = [],
            L = [],
            T = new THREE.Vector3,
            M = new THREE.Vector3,
            A = [],
            E = [],
            P = [],
            D = x * o,
            _ = x * o + 1;
        a(), r(), s(), m(), g(), u();
        for (var k = 0, V = 0; V < A.length; V++) S.setXYZ(k, A[V].x, A[V].y, A[V].z), w.setXYZ(k, E[V].x, E[V].y, E[V].z), k++;
        this.setIndex(new THREE.BufferAttribute(new Uint16Array(P), 1)), this.addAttribute('position', S), this.addAttribute('normal', w)
    }

    function t(e, t, a) {
        var o, s, r, n;
        o = s = -e / 2, r = n = e, t = e * t;
        const i = new THREE.Shape;
        i.moveTo(o, s + t), i.lineTo(o, s + n - t), i.quadraticCurveTo(o, s + n, o + t, s + n), i.lineTo(o + r - t, s + n), i.quadraticCurveTo(o + r, s + n, o + r, s + n - t), i.lineTo(o + r, s + t), i.quadraticCurveTo(o + r, s, o + r - t, s), i.lineTo(o + t, s), i.quadraticCurveTo(o, s, o, s + t);
        const l = new THREE.ExtrudeBufferGeometry(i, {
            depth: a,
            bevelEnabled: !1,
            curveSegments: 3
        });
        return l
    }
    var a = Math.sign,
        o = Math.abs,
        s = Math.pow,
        r = Math.round,
        n = Math.sin,
        i = Math.PI,
        l = Math.min,
        c = Math.max,
        d = Math.floor,
        m = Math.tan;
    const u = (() => {
        let e = 0;
        return new class {
            constructor() {
                this.ids = [], this.animations = {}, this.update = this.update.bind(this), this.raf = 0, this.time = 0
            }
            update() {
                const e = performance.now(),
                    t = e - this.time;
                this.time = e;
                let a = this.ids.length;
                for (this.raf = a ? requestAnimationFrame(this.update) : 0; a--;) this.animations[this.ids[a]] && this.animations[this.ids[a]].update(t)
            }
            add(t) {
                t.id = e++, this.ids.push(t.id), this.animations[t.id] = t;
                0 !== this.raf || (this.time = performance.now(), this.raf = requestAnimationFrame(this.update))
            }
            remove(e) {
                const t = this.ids.indexOf(e.id);
                0 > t || (this.ids.splice(t, 1), delete this.animations[e.id], e = null)
            }
        }
    })();
    class g {
        constructor(e) {
            !0 === e && this.start()
        }
        start() {
            u.add(this)
        }
        stop() {
            u.remove(this)
        }
        update() {}
    }
    class p extends g {
        constructor(e) {
            super(!0), this.game = e, this.container = this.game.dom.game, this.scene = new THREE.Scene, this.renderer = new THREE.WebGLRenderer({
                antialias: !0,
                alpha: !0
            }), this.renderer.setPixelRatio(window.devicePixelRatio), this.container.appendChild(this.renderer.domElement), this.camera = new THREE.PerspectiveCamera(2, 1, .1, 1e4), this.stage = {
                width: 2,
                height: 3
            }, this.fov = 10, this.createLights(), this.onResize = [], this.resize(), window.addEventListener('resize', () => this.resize(), !1)
        }
        update() {
            this.renderer.render(this.scene, this.camera)
        }
        resize() {
            this.width = this.container.offsetWidth, this.height = this.container.offsetHeight, this.renderer.setSize(this.width, this.height), this.camera.fov = this.fov, this.camera.aspect = this.width / this.height;
            const e = this.stage.width / this.stage.height,
                t = this.fov * THREE.Math.DEG2RAD;
            let a = e < this.camera.aspect ? this.stage.height / 2 / m(t / 2) : this.stage.width / this.camera.aspect / (2 * m(t / 2));
            a *= .5, this.camera.position.set(a, a, a), this.camera.lookAt(this.scene.position), this.camera.updateProjectionMatrix();
            const o = e < this.camera.aspect ? this.height / 100 * e : this.width / 100;
            document.documentElement.style.fontSize = o + 'px', this.onResize && this.onResize.forEach(e => e())
        }
        createLights() {
            this.lights = {
                holder: new THREE.Object3D,
                ambient: new THREE.AmbientLight(16777215, .69),
                front: new THREE.DirectionalLight(16777215, .36),
                back: new THREE.DirectionalLight(16777215, .19)
            }, this.lights.front.position.set(1.5, 5, 3), this.lights.back.position.set(-1.5, -5, -3), this.lights.holder.add(this.lights.ambient), this.lights.holder.add(this.lights.front), this.lights.holder.add(this.lights.back), this.scene.add(this.lights.holder)
        }
    }
    e.prototype = Object.create(THREE.BufferGeometry.prototype), e.constructor = e;
    class h {
        constructor(e) {
            this.game = e, this.size = 3, this.geometry = {
                pieceCornerRadius: .12,
                edgeCornerRoundness: .15,
                edgeScale: .82,
                edgeDepth: .01
            }, this.holder = new THREE.Object3D, this.object = new THREE.Object3D, this.animator = new THREE.Object3D, this.holder.add(this.animator), this.animator.add(this.object), this.game.world.scene.add(this.holder)
        }
        init() {
            this.cubes = [], this.object.children = [], this.object.add(this.game.controls.group), 2 === this.size ? this.scale = 1.25 : 3 === this.size ? this.scale = 1 : 3 < this.size && (this.scale = 3 / this.size), this.object.scale.set(this.scale, this.scale, this.scale);
            const e = 2 === this.size ? .825 : 1;
            this.game.controls.edges.scale.set(e, e, e), this.generatePositions(), this.generateModel(), this.pieces.forEach(e => {
                this.cubes.push(e.userData.cube), this.object.add(e)
            }), this.holder.traverse(e => {
                e.frustumCulled && (e.frustumCulled = !1)
            }), this.updateColors(this.game.themes.getColors()), this.sizeGenerated = this.size
        }
        resize(e = !1) {
            (this.size !== this.sizeGenerated || e) && (this.size = this.game.preferences.ranges.size.value, this.reset(), this.init(), this.game.saved = !1, this.game.timer.reset(), this.game.storage.clearGame())
        }
        reset() {
            this.game.controls.edges.rotation.set(0, 0, 0), this.holder.rotation.set(0, 0, 0), this.object.rotation.set(0, 0, 0), this.animator.rotation.set(0, 0, 0)
        }
        generatePositions() {
            const e = this.size - 1,
                t = 0 == this.size % 2 ? .5 - this.size / 2 : 0 - d(this.size / 2);
            let a, o, s;
            for (this.positions = [], a = 0; a < this.size; a++)
                for (o = 0; o < this.size; o++)
                    for (s = 0; s < this.size; s++) {
                        let r = new THREE.Vector3(t + a, t + o, t + s),
                            n = [];
                        0 == a && n.push(0), a == e && n.push(1), 0 == o && n.push(2), o == e && n.push(3), 0 == s && n.push(4), s == e && n.push(5), r.edges = n, this.positions.push(r)
                    }
        }
        generateModel() {
            this.pieces = [], this.edges = [];
            const a = 1 / 3,
                o = new THREE.MeshLambertMaterial,
                s = new THREE.Mesh(new e(a, this.geometry.pieceCornerRadius, 3), o.clone()),
                r = t(a, this.geometry.edgeCornerRoundness, this.geometry.edgeDepth);
            this.positions.forEach((e, t) => {
                const n = new THREE.Object3D,
                    l = s.clone(),
                    c = [];
                n.position.copy(e.clone().divideScalar(3)), n.add(l), n.name = t, n.edgesName = '', e.edges.forEach(e => {
                    const t = new THREE.Mesh(r, o.clone()),
                        s = ['L', 'R', 'D', 'U', 'B', 'F'][e],
                        l = a / 2;
                    t.position.set(l * [-1, 1, 0, 0, 0, 0][e], l * [0, 0, -1, 1, 0, 0][e], l * [0, 0, 0, 0, -1, 1][e]), t.rotation.set(i / 2 * [0, 0, 1, -1, 0, 0][e], i / 2 * [-1, 1, 0, 0, 2, 0][e], 0), t.scale.set(this.geometry.edgeScale, this.geometry.edgeScale, this.geometry.edgeScale), t.name = s, n.add(t), c.push(s), this.edges.push(t)
                }), n.userData.edges = c, n.userData.cube = l, n.userData.start = {
                    position: n.position.clone(),
                    rotation: n.rotation.clone()
                }, this.pieces.push(n)
            })
        }
        updateColors(e) {
            'object' != typeof this.pieces && 'object' != typeof this.edges || (this.pieces.forEach(t => t.userData.cube.material.color.setHex(e.P)), this.edges.forEach(t => t.material.color.setHex(e[t.name])))
        }
        loadFromData(e) {
            this.size = e.size, this.reset(), this.init(), this.pieces.forEach(t => {
                const a = e.names.indexOf(t.name),
                    o = e.positions[a],
                    s = e.rotations[a];
                t.position.set(o.x, o.y, o.z), t.rotation.set(s.x, s.y, s.z)
            })
        }
    }
    const y = {
        Power: {
            In: e => (e = r(e || 1), a => s(a, e)),
            Out: e => (e = r(e || 1), a => 1 - o(s(a - 1, e))),
            InOut: e => (e = r(e || 1), a => .5 > a ? s(2 * a, e) / 2 : (1 - o(s(2 * a - 1 - 1, e))) / 2 + .5)
        },
        Sine: {
            In: () => e => 1 + n(i / 2 * e - i / 2),
            Out: () => e => n(i / 2 * e),
            InOut: () => e => (1 + n(i * e - i / 2)) / 2
        },
        Back: {
            Out: e => (e = e || 1.70158, a => (a -= 1) * a * ((e + 1) * a + e) + 1),
            In: e => (e = e || 1.70158, a => a * a * ((e + 1) * a - e))
        },
        Elastic: {
            Out: (e, t) => {
                let a = 2 * i,
                    o = 1 <= e ? e : 1,
                    r = (t || .3) / (1 > e ? e : 1),
                    l = r / a * (Math.asin(1 / o) || 0);
                return r = a / r, e => o * s(2, -10 * e) * n((e - l) * r) + 1
            }
        }
    };
    class b extends g {
        constructor(e) {
            super(!1), this.duration = e.duration || 500, this.easing = e.easing || (e => e), this.onUpdate = e.onUpdate || (() => {}), this.onComplete = e.onComplete || (() => {}), this.delay = e.delay || !1, this.yoyo = !e.yoyo && null, this.progress = 0, this.value = 0, this.delta = 0, this.getFromTo(e), this.delay ? setTimeout(() => super.start(), this.delay) : super.start(), this.onUpdate(this)
        }
        update(e) {
            const t = 1 * this.value,
                a = !0 === this.yoyo ? -1 : 1;
            this.progress += e / this.duration * a, this.value = this.easing(this.progress), this.delta = this.value - t, null !== this.values && this.updateFromTo(), null === this.yoyo ? 1 >= this.progress ? this.onUpdate(this) : (this.progress = 1, this.value = 1, this.onUpdate(this), this.onComplete(this), super.stop()) : this.updateYoyo()
        }
        updateYoyo() {
            (1 < this.progress || 0 > this.progress) && (this.value = this.progress = 1 < this.progress ? 1 : 0, this.yoyo = !this.yoyo), this.onUpdate(this)
        }
        updateFromTo() {
            this.values.forEach(e => {
                this.target[e] = this.from[e] + (this.to[e] - this.from[e]) * this.value
            })
        }
        getFromTo(e) {
            return e.target && e.to ? void(this.target = e.target || null, this.from = e.from || {}, this.to = e.to || null, this.values = [], 1 > Object.keys(this.from).length && Object.keys(this.to).forEach(e => {
                this.from[e] = this.target[e]
            }), Object.keys(this.to).forEach(e => {
                this.values.push(e)
            })) : void(this.values = null)
        }
    }
    window.addEventListener('touchmove', () => {}), document.addEventListener('touchmove', e => {
        e.preventDefault()
    }, {
        passive: !1
    });
    class v {
        constructor(e, t) {
            return this.position = {
                current: new THREE.Vector2,
                start: new THREE.Vector2,
                delta: new THREE.Vector2,
                old: new THREE.Vector2,
                drag: new THREE.Vector2
            }, this.options = Object.assign({
                calcDelta: !1
            }, t || {}), this.element = e, this.touch = null, this.drag = {
                start: e => {
                    'mousedown' == e.type && 1 != e.which || 'touchstart' == e.type && 1 < e.touches.length || (this.getPositionCurrent(e), this.options.calcDelta && (this.position.start = this.position.current.clone(), this.position.delta.set(0, 0), this.position.drag.set(0, 0)), this.touch = 'touchstart' == e.type, this.onDragStart(this.position), window.addEventListener(this.touch ? 'touchmove' : 'mousemove', this.drag.move, !1), window.addEventListener(this.touch ? 'touchend' : 'mouseup', this.drag.end, !1))
                },
                move: e => {
                    this.options.calcDelta && (this.position.old = this.position.current.clone()), this.getPositionCurrent(e), this.options.calcDelta && (this.position.delta = this.position.current.clone().sub(this.position.old), this.position.drag = this.position.current.clone().sub(this.position.start)), this.onDragMove(this.position)
                },
                end: e => {
                    this.getPositionCurrent(e), this.onDragEnd(this.position), window.removeEventListener(this.touch ? 'touchmove' : 'mousemove', this.drag.move, !1), window.removeEventListener(this.touch ? 'touchend' : 'mouseup', this.drag.end, !1)
                }
            }, this.onDragStart = () => {}, this.onDragMove = () => {}, this.onDragEnd = () => {}, this.enable(), this
        }
        enable() {
            return this.element.addEventListener('touchstart', this.drag.start, !1), this.element.addEventListener('mousedown', this.drag.start, !1), this
        }
        disable() {
            return this.element.removeEventListener('touchstart', this.drag.start, !1), this.element.removeEventListener('mousedown', this.drag.start, !1), this
        }
        getPositionCurrent(e) {
            const t = e.touches ? e.touches[0] || e.changedTouches[0] : e;
            this.position.current.set(t.pageX, t.pageY)
        }
        convertPosition(e) {
            return e.x = 2 * (e.x / this.element.offsetWidth) - 1, e.y = -(2 * (e.y / this.element.offsetHeight) - 1), e
        }
    }
    const f = 0;
    class x {
        constructor(e) {
            this.game = e, this.flipConfig = 0, this.flipEasings = [y.Power.Out(3), y.Sine.Out(), y.Back.Out(1.5)], this.flipSpeeds = [125, 200, 300], this.raycaster = new THREE.Raycaster;
            const t = new THREE.MeshBasicMaterial({
                depthWrite: !1,
                transparent: !0,
                opacity: 0,
                color: 13311
            });
            this.group = new THREE.Object3D, this.group.name = 'controls', this.game.cube.object.add(this.group), this.helper = new THREE.Mesh(new THREE.PlaneBufferGeometry(200, 200), t.clone()), this.helper.rotation.set(0, i / 4, 0), this.game.world.scene.add(this.helper), this.edges = new THREE.Mesh(new THREE.BoxBufferGeometry(1, 1, 1), t.clone()), this.game.world.scene.add(this.edges), this.onSolved = () => {}, this.onMove = () => {}, this.momentum = [], this.scramble = null, this.state = f, this.enabled = !1, this.initDraggable()
        }
        enable() {
            this.draggable.enable(), this.enabled = !0
        }
        disable() {
            this.draggable.disable(), this.enabled = !1
        }
        initDraggable() {
            this.draggable = new v(this.game.dom.game), this.draggable.onDragStart = e => {
                if (null === this.scramble && 1 !== this.state && 2 !== this.state) {
                    this.gettingDrag = 3 === this.state;
                    const t = this.getIntersect(e.current, this.edges, !1);
                    !1 !== t && (this.dragIntersect = this.getIntersect(e.current, this.game.cube.cubes, !0)), !1 !== t && !1 !== this.dragIntersect ? (this.dragNormal = t.face.normal.round(), this.flipType = 'layer', this.attach(this.helper, this.edges), this.helper.rotation.set(0, 0, 0), this.helper.position.set(0, 0, 0), this.helper.lookAt(this.dragNormal), this.helper.translateZ(.5), this.helper.updateMatrixWorld(), this.detach(this.helper, this.edges)) : (this.dragNormal = new THREE.Vector3(0, 0, 1), this.flipType = 'cube', this.helper.position.set(0, 0, 0), this.helper.rotation.set(0, i / 4, 0), this.helper.updateMatrixWorld());
                    let a = this.getIntersect(e.current, this.helper, !1);
                    !1 === a || (this.dragCurrent = this.helper.worldToLocal(a.point), this.dragTotal = new THREE.Vector3, this.state = this.state === f ? 1 : this.state)
                }
            }, this.draggable.onDragMove = e => {
                if (null === this.scramble && this.state !== f && (3 !== this.state || !1 !== this.gettingDrag)) {
                    const t = this.getIntersect(e.current, this.helper, !1);
                    if (!1 !== t) {
                        const a = this.helper.worldToLocal(t.point.clone());
                        if (this.dragDelta = a.clone().sub(this.dragCurrent).setZ(0), this.dragTotal.add(this.dragDelta), this.dragCurrent = a, this.addMomentumPoint(this.dragDelta), 1 === this.state && .05 < this.dragTotal.length()) {
                            if (this.dragDirection = this.getMainAxis(this.dragTotal), 'layer' === this.flipType) {
                                const e = new THREE.Vector3;
                                e[this.dragDirection] = 1;
                                const t = this.helper.localToWorld(e).sub(this.helper.position),
                                    a = this.edges.worldToLocal(t).round();
                                this.flipAxis = a.cross(this.dragNormal).negate(), this.selectLayer(this.getLayer(!1))
                            } else {
                                const t = 'x' == this.dragDirection ? 'y' : 'y' == this.dragDirection && e.current.x > this.game.world.width / 2 ? 'z' : 'x';
                                this.flipAxis = new THREE.Vector3, this.flipAxis[t] = 1 * ('x' == t ? -1 : 1)
                            }
                            this.flipAngle = 0, this.state = 2
                        } else if (2 === this.state) {
                            const e = this.dragDelta[this.dragDirection];
                            'layer' === this.flipType ? (this.group.rotateOnAxis(this.flipAxis, e), this.flipAngle += e) : (this.edges.rotateOnWorldAxis(this.flipAxis, e), this.game.cube.object.rotation.copy(this.edges.rotation), this.flipAngle += e)
                        }
                    }
                }
            }, this.draggable.onDragEnd = () => {
                if (null === this.scramble) {
                    if (2 !== this.state) return this.gettingDrag = !1, void(this.state = f);
                    this.state = 3;
                    const e = this.getMomentum()[this.dragDirection],
                        t = .05 < o(e) && o(this.flipAngle) < i / 2,
                        s = t ? this.roundAngle(this.flipAngle + a(this.flipAngle) * (i / 4)) : this.roundAngle(this.flipAngle),
                        r = s - this.flipAngle;
                    'layer' === this.flipType ? this.rotateLayer(r, !1, () => {
                        this.game.storage.saveGame(), this.state = this.gettingDrag ? 1 : f, this.gettingDrag = !1, this.checkIsSolved()
                    }) : this.rotateCube(r, () => {
                        this.state = this.gettingDrag ? 1 : f, this.gettingDrag = !1
                    })
                }
            }
        }
        rotateLayer(e, t, a) {
            const o = t ? 0 : this.flipConfig,
                s = this.flipEasings[o],
                r = this.flipSpeeds[o],
                n = 2 == o ? this.bounceCube() : () => {};
            this.rotationTween = new b({
                easing: s,
                duration: r,
                onUpdate: t => {
                    let a = t.delta * e;
                    this.group.rotateOnAxis(this.flipAxis, a), n(t.value, a, e)
                },
                onComplete: () => {
                    t || this.onMove();
                    const e = this.flipLayer.slice(0);
                    this.game.cube.object.rotation.setFromVector3(this.snapRotation(this.game.cube.object.rotation.toVector3())), this.group.rotation.setFromVector3(this.snapRotation(this.group.rotation.toVector3())), this.deselectLayer(this.flipLayer), a(e)
                }
            })
        }
        bounceCube() {
            let e = !0;
            return (t, a, o) => {
                1 <= t && (e && (a = (t - 1) * o, e = !1), this.game.cube.object.rotateOnAxis(this.flipAxis, a))
            }
        }
        rotateCube(e, t) {
            const a = this.flipConfig,
                o = [y.Power.Out(4), y.Sine.Out(), y.Back.Out(2)][a],
                s = [100, 150, 350][a];
            this.rotationTween = new b({
                easing: o,
                duration: s,
                onUpdate: t => {
                    this.edges.rotateOnWorldAxis(this.flipAxis, t.delta * e), this.game.cube.object.rotation.copy(this.edges.rotation)
                },
                onComplete: () => {
                    this.edges.rotation.setFromVector3(this.snapRotation(this.edges.rotation.toVector3())), this.game.cube.object.rotation.copy(this.edges.rotation), t()
                }
            })
        }
        selectLayer(e) {
            this.group.rotation.set(0, 0, 0), this.movePieces(e, this.game.cube.object, this.group), this.flipLayer = e
        }
        deselectLayer(e) {
            this.movePieces(e, this.group, this.game.cube.object), this.flipLayer = null
        }
        movePieces(e, t, a) {
            t.updateMatrixWorld(), a.updateMatrixWorld(), e.forEach(e => {
                const o = this.game.cube.pieces[e];
                o.applyMatrix(t.matrixWorld), t.remove(o), o.applyMatrix(new THREE.Matrix4().getInverse(a.matrixWorld)), a.add(o)
            })
        }
        getLayer(e) {
            const t = {
                    2: 6,
                    3: 3,
                    4: 4,
                    5: 3
                }[this.game.cube.size],
                a = [];
            let o;
            if (!1 === e) {
                const a = this.dragIntersect.object.parent;
                o = this.getMainAxis(this.flipAxis), e = a.position.clone().multiplyScalar(t).round()
            } else o = this.getMainAxis(e);
            return this.game.cube.pieces.forEach(s => {
                const r = s.position.clone().multiplyScalar(t).round();
                r[o] == e[o] && a.push(s.name)
            }), a
        }
        keyboardMove(e, t) {
            if (this.state === f && !0 === this.enabled)
                if ('LAYER' === e) {
                    const e = this.getLayer(t.position);
                    this.flipAxis = new THREE.Vector3, this.flipAxis[t.axis] = 1, this.state = 2, this.selectLayer(e), this.rotateLayer(t.angle, !1, () => {
                        this.game.storage.saveGame(), this.state = f, this.checkIsSolved()
                    })
                } else 'CUBE' === e && (this.flipAxis = new THREE.Vector3, this.flipAxis[t.axis] = 1, this.state = 2, this.rotateCube(t.angle, () => {
                    this.state = f
                }))
        }
        scrambleCube() {
            null == this.scramble && (this.scramble = this.game.scrambler, this.scramble.callback = 'function' == typeof callback ? callback : () => {});
            const e = this.scramble.converted,
                t = e[0],
                a = this.getLayer(t.position);
            this.flipAxis = new THREE.Vector3, this.flipAxis[t.axis] = 1, this.selectLayer(a), this.rotateLayer(t.angle, !0, () => {
                e.shift(), 0 < e.length ? this.scrambleCube() : (this.scramble = null, this.game.storage.saveGame())
            })
        }
        getIntersect(e, t, a) {
            this.raycaster.setFromCamera(this.draggable.convertPosition(e.clone()), this.game.world.camera);
            const o = a ? this.raycaster.intersectObjects(t) : this.raycaster.intersectObject(t);
            return !!(0 < o.length) && o[0]
        }
        getMainAxis(e) {
            return Object.keys(e).reduce((t, a) => o(e[t]) > o(e[a]) ? t : a)
        }
        detach(e, t) {
            e.applyMatrix(t.matrixWorld), t.remove(e), this.game.world.scene.add(e)
        }
        attach(e, t) {
            e.applyMatrix(new THREE.Matrix4().getInverse(t.matrixWorld)), this.game.world.scene.remove(e), t.add(e)
        }
        addMomentumPoint(e) {
            const t = Date.now();
            this.momentum = this.momentum.filter(e => 500 > t - e.time), !1 !== e && this.momentum.push({
                delta: e,
                time: t
            })
        }
        getMomentum() {
            const e = this.momentum.length,
                t = new THREE.Vector2;
            return this.addMomentumPoint(!1), this.momentum.forEach((a, o) => {
                t.add(a.delta.multiplyScalar(o / e))
            }), t
        }
        roundAngle(e) {
            const t = i / 2;
            return a(e) * r(o(e) / t) * t
        }
        snapRotation(e) {
            return e.set(this.roundAngle(e.x), this.roundAngle(e.y), this.roundAngle(e.z))
        }
        checkIsSolved() {
            performance.now();
            let e = !0;
            const t = {
                "x-": [],
                "x+": [],
                "y-": [],
                "y+": [],
                "z-": [],
                "z+": []
            };
            this.game.cube.edges.forEach(e => {
                const a = e.parent.localToWorld(e.position.clone()).sub(this.game.cube.object.position),
                    o = this.getMainAxis(a),
                    s = 1 > a.multiplyScalar(2).round()[o] ? '-' : '+';
                t[o + s].push(e.name)
            }), Object.keys(t).forEach(a => {
                t[a].every(e => e === t[a][0]) || (e = !1)
            }), e && this.onSolved()
        }
    }
    class z {
        constructor(e) {
            this.game = e, this.dificulty = 0, this.scrambleLength = {
                2: [7, 9, 11],
                3: [20, 25, 30],
                4: [30, 40, 50],
                5: [40, 60, 80]
            }, this.moves = [], this.conveted = [], this.pring = ''
        }
        scramble(e) {
            let t = 0;
            if (this.moves = 'undefined' == typeof e ? [] : e.split(' '), 1 > this.moves.length) {
                const a = this.scrambleLength[this.game.cube.size][this.dificulty],
                    o = 4 > this.game.cube.size ? 'UDLRFB' : 'UuDdLlRrFfBb',
                    s = ['', '\'', '2'],
                    r = 'undefined' == typeof e ? a : e;
                for (; t < r;) {
                    const e = o[d(Math.random() * o.length)] + s[d(3 * Math.random())];
                    0 < t && e.charAt(0) == this.moves[t - 1].charAt(0) || 1 < t && e.charAt(0) == this.moves[t - 2].charAt(0) || (this.moves.push(e), t++)
                }
            }
            return this.callback = () => {}, this.convert(), this.print = this.moves.join(' '), this
        }
        convert() {
            this.converted = [], this.moves.forEach(e => {
                const t = this.convertMove(e),
                    a = e.charAt(1);
                this.converted.push(t), '2' == a && this.converted.push(t)
            })
        }
        convertMove(e) {
            const t = e.charAt(0),
                a = e.charAt(1),
                o = {
                    D: 'y',
                    U: 'y',
                    L: 'x',
                    R: 'x',
                    F: 'z',
                    B: 'z'
                }[t.toUpperCase()];
            let s = {
                D: -1,
                U: 1,
                L: -1,
                R: 1,
                F: 1,
                B: -1
            }[t.toUpperCase()];
            3 < this.game.cube.size && t !== t.toLowerCase() && (s *= 2);
            const r = new THREE.Vector3;
            r[{
                D: 'y',
                U: 'y',
                L: 'x',
                R: 'x',
                F: 'z',
                B: 'z'
            }[t.toUpperCase()]] = s;
            const n = i / 2 * -s * ('\'' == a ? -1 : 1);
            return {
                position: r,
                axis: o,
                angle: n,
                name: e
            }
        }
    }
    class S {
        constructor(e) {
            this.game = e, this.tweens = {}, this.durations = {}, this.data = {
                cubeY: -.2,
                cameraZoom: .85
            }, this.activeTransitions = 0
        }
        init() {
            this.game.controls.disable(), this.game.cube.object.position.y = this.data.cubeY, this.game.cube.animator.position.y = 4, this.game.cube.animator.rotation.x = -i / 3, this.game.world.camera.zoom = this.data.cameraZoom, this.game.world.camera.updateProjectionMatrix(), this.tweens.buttons = {}, this.tweens.timer = [], this.tweens.title = [], this.tweens.best = [], this.tweens.complete = [], this.tweens.prefs = [], this.tweens.theme = [], this.tweens.stats = []
        }
        buttons(e, t) {
            const a = (e, t) => new b({
                target: e.style,
                duration: 300,
                easing: t ? y.Power.Out(2) : y.Power.In(3),
                from: {
                    opacity: t ? 0 : 1
                },
                to: {
                    opacity: t ? 1 : 0
                },
                onUpdate: a => {
                    const o = t ? 1 - a.value : a.value;
                    e.style.transform = `translate3d(0, ${1.5*o}em, 0)`
                },
                onComplete: () => e.style.pointerEvents = t ? 'all' : 'none'
            });
            t.forEach(e => this.tweens.buttons[e] = a(this.game.dom.buttons[e], !1)), setTimeout(() => e.forEach(e => {
                this.tweens.buttons[e] = a(this.game.dom.buttons[e], !0)
            }), t ? 500 : 0)
        }
        cube(e, t = !1) {
            this.activeTransitions++;
            try {
                this.tweens.cube.stop()
            } catch (t) {}
            const a = this.game.cube.animator.position.y,
                o = this.game.cube.animator.rotation.x;
            this.tweens.cube = new b({
                duration: e ? 3e3 : 1250,
                easing: e ? y.Elastic.Out(.8, .6) : y.Back.In(1),
                onUpdate: s => {
                    this.game.cube.animator.position.y = e ? t ? .9 + 3.5 * (1 - s.value) : 4 * (1 - s.value) : a + 4 * s.value, this.game.cube.animator.rotation.x = e ? (1 - s.value) * i / 3 : o + s.value * -i / 3
                }
            }), t && (e ? (this.game.world.camera.zoom = .75, this.game.world.camera.updateProjectionMatrix()) : setTimeout(() => {
                this.game.world.camera.zoom = this.data.cameraZoom, this.game.world.camera.updateProjectionMatrix()
            }, 1500)), this.durations.cube = e ? 1500 : 1500, setTimeout(() => this.activeTransitions--, this.durations.cube)
        }
        float() {
            try {
                this.tweens.float.stop()
            } catch (t) {}
            this.tweens.float = new b({
                duration: 1500,
                easing: y.Sine.InOut(),
                yoyo: !0,
                onUpdate: e => {
                    this.game.cube.holder.position.y = -.02 + .04 * e.value, this.game.cube.holder.rotation.x = .005 - .01 * e.value, this.game.cube.holder.rotation.z = -this.game.cube.holder.rotation.x, this.game.cube.holder.rotation.y = this.game.cube.holder.rotation.x, this.game.controls.edges.position.y = this.game.cube.holder.position.y + this.game.cube.object.position.y
                }
            })
        }
        zoom(e, t) {
            this.activeTransitions++;
            const a = e ? 1 : this.data.cameraZoom,
                o = 0 < t ? c(t, 1500) : 1500,
                s = 0 < t ? r(o / 1500) : 1,
                n = y.Power.InOut(0 < t ? 2 : 3);
            this.tweens.zoom = new b({
                target: this.game.world.camera,
                duration: o,
                easing: n,
                to: {
                    zoom: a
                },
                onUpdate: () => {
                    this.game.world.camera.updateProjectionMatrix()
                }
            }), this.tweens.rotate = new b({
                target: this.game.cube.animator.rotation,
                duration: o,
                easing: n,
                to: {
                    y: 2 * -i * s
                },
                onComplete: () => {
                    this.game.cube.animator.rotation.y = 0
                }
            }), this.durations.zoom = o, setTimeout(() => this.activeTransitions--, this.durations.zoom)
        }
        elevate(e) {
            this.activeTransitions++;
            this.tweens.elevate = new b({
                target: this.game.cube.object.position,
                duration: e ? 1500 : 0,
                easing: y.Power.InOut(3),
                to: {
                    y: e ? -.05 : this.data.cubeY
                }
            });
            this.durations.elevate = 1500, setTimeout(() => this.activeTransitions--, this.durations.elevate)
        }
        complete(e, t) {
            this.activeTransitions++;
            const a = t ? this.game.dom.texts.best : this.game.dom.texts.complete;
            null === a.querySelector('span i') && a.querySelectorAll('span').forEach(e => this.splitLetters(e));
            const o = a.querySelectorAll('.icon, i');
            this.flipLetters(t ? 'best' : 'complete', o, e), a.style.opacity = 1;
            const s = this.durations[t ? 'best' : 'complete'];
            e || setTimeout(() => this.game.dom.texts.timer.style.transform = '', s), setTimeout(() => this.activeTransitions--, s)
        }
        stats(e) {
            e && this.game.scores.calcStats(), this.activeTransitions++, this.tweens.stats.forEach(e => {
                e.stop(), e = null
            });
            let t = -1;
            const a = this.game.dom.stats.querySelectorAll('.stats'),
                o = e ? y.Power.Out(2) : y.Power.In(3);
            a.forEach((a, s) => {
                const r = s * (e ? 80 : 60);
                this.tweens.stats[t++] = new b({
                    delay: r,
                    duration: 400,
                    easing: o,
                    onUpdate: t => {
                        const o = e ? 2 * (1 - t.value) : t.value,
                            s = e ? t.value : 1 - t.value;
                        a.style.transform = `translate3d(0, ${o}em, 0)`, a.style.opacity = s
                    }
                })
            }), this.durations.stats = 0, setTimeout(() => this.activeTransitions--, this.durations.stats)
        }
        preferences(e) {
            this.ranges(this.game.dom.prefs.querySelectorAll('.range'), 'prefs', e)
        }
        theming(e) {
            this.ranges(this.game.dom.theme.querySelectorAll('.range'), 'prefs', e)
        }
        ranges(e, t, a) {
            this.activeTransitions++, this.tweens[t].forEach(e => {
                e.stop(), e = null
            });
            const o = a ? y.Power.Out(2) : y.Power.In(3);
            let s = -1,
                r = 0;
            e.forEach((e, n) => {
                const i = e.querySelector('.range__label'),
                    l = e.querySelector('.range__track-line'),
                    c = e.querySelector('.range__handle'),
                    m = e.querySelectorAll('.range__list div'),
                    d = n * (a ? 120 : 100);
                i.style.opacity = a ? 0 : 1, l.style.opacity = a ? 0 : 1, c.style.opacity = a ? 0 : 1, c.style.pointerEvents = a ? 'all' : 'none', this.tweens[t][s++] = new b({
                    delay: a ? d : d,
                    duration: 400,
                    easing: o,
                    onUpdate: e => {
                        const t = a ? 1 - e.value : e.value,
                            o = a ? e.value : 1 - e.value;
                        i.style.transform = `translate3d(0, ${t}em, 0)`, i.style.opacity = o
                    }
                }), this.tweens[t][s++] = new b({
                    delay: a ? d + 100 : d,
                    duration: 400,
                    easing: o,
                    onUpdate: e => {
                        const t = a ? 1 - e.value : e.value,
                            o = a ? e.value : 1 - e.value;
                        l.style.transform = `translate3d(0, ${t}em, 0) scale3d(${o}, 1, 1)`, l.style.opacity = o
                    }
                }), this.tweens[t][s++] = new b({
                    delay: a ? d + 100 : d,
                    duration: 400,
                    easing: o,
                    onUpdate: e => {
                        const t = a ? 1 - e.value : e.value,
                            o = 1 - t,
                            s = .5 + .5 * o;
                        c.style.transform = `translate3d(0, ${t}em, 0) scale3d(${s}, ${s}, ${s})`, c.style.opacity = o
                    }
                }), m.forEach((e, r) => {
                    e.style.opacity = a ? 0 : 1, this.tweens[t][s++] = new b({
                        delay: a ? d + 200 + 50 * r : d,
                        duration: 400,
                        easing: o,
                        onUpdate: t => {
                            const o = a ? 1 - t.value : t.value,
                                s = a ? t.value : 1 - t.value;
                            e.style.transform = `translate3d(0, ${o}em, 0)`, e.style.opacity = s
                        }
                    })
                }), r = m.length > r ? m.length - 1 : r, e.style.opacity = 1
            }), this.durations[t] = a ? 100 * (e.length - 1) + 200 + 50 * r + 400 : 100 * (e.length - 1) + 400, setTimeout(() => this.activeTransitions--, this.durations[t])
        }
        title(e) {
            this.activeTransitions++;
            const t = this.game.dom.texts.title;
            null === t.querySelector('span i') && t.querySelectorAll('span').forEach(e => this.splitLetters(e));
            const a = t.querySelectorAll('i');
            this.flipLetters('title', a, e), t.style.opacity = 1;
            const o = this.game.dom.texts.note;
            this.tweens.title[a.length] = new b({
                target: o.style,
                easing: y.Sine.InOut(),
                duration: e ? 800 : 400,
                yoyo: !!e || null,
                from: {
                    opacity: e ? 0 : parseFloat(getComputedStyle(o).opacity)
                },
                to: {
                    opacity: e ? 1 : 0
                }
            }), setTimeout(() => this.activeTransitions--, this.durations.title)
        }
        timer(e) {
            this.activeTransitions++;
            const t = this.game.dom.texts.timer;
            t.style.opacity = 0, this.game.timer.convert(), this.game.timer.setText(), this.splitLetters(t);
            const a = t.querySelectorAll('i');
            this.flipLetters('timer', a, e), t.style.opacity = 1, setTimeout(() => this.activeTransitions--, this.durations.timer)
        }
        splitLetters(e) {
            const t = e.innerHTML;
            e.innerHTML = '', t.split('').forEach(t => {
                const a = document.createElement('i');
                a.innerHTML = t, e.appendChild(a)
            })
        }
        flipLetters(e, t, a) {
            try {
                this.tweens[e].forEach(e => e.stop())
            } catch (t) {}
            t.forEach((t, o) => {
                t.style.opacity = a ? 0 : 1, this.tweens[e][o] = new b({
                    easing: y.Sine.Out(),
                    duration: a ? 800 : 400,
                    delay: 50 * o,
                    onUpdate: e => {
                        const o = a ? -80 * (1 - e.value) : 80 * e.value;
                        t.style.transform = `rotate3d(0, 1, 0, ${o}deg)`, t.style.opacity = a ? e.value : 1 - e.value
                    }
                })
            }), this.durations[e] = 50 * (t.length - 1) + (a ? 800 : 400)
        }
    }
    class w extends g {
        constructor(e) {
            super(!1), this.game = e, this.reset()
        }
        start(e) {
            this.startTime = e ? Date.now() - this.deltaTime : Date.now(), this.deltaTime = 0, this.converted = this.convert(), super.start()
        }
        reset() {
            this.startTime = 0, this.currentTime = 0, this.deltaTime = 0, this.converted = '0:00'
        }
        stop() {
            return this.currentTime = Date.now(), this.deltaTime = this.currentTime - this.startTime, this.convert(), super.stop(), {
                time: this.converted,
                millis: this.deltaTime
            }
        }
        update() {
            const e = this.converted;
            this.currentTime = Date.now(), this.deltaTime = this.currentTime - this.startTime, this.convert(), this.converted != e && (localStorage.setItem('theCube_time', this.deltaTime), this.setText())
        }
        convert() {
            const e = parseInt(this.deltaTime / 1e3 % 60),
                t = parseInt(this.deltaTime / 60000);
            this.converted = t + ':' + (10 > e ? '0' : '') + e
        }
        setText() {
            this.game.dom.texts.timer.innerHTML = this.converted
        }
    }
    document.querySelectorAll('range').forEach(e => {
        const t = document.createElement('div');
        t.innerHTML = '<div class="range">\n<div class="range__label"></div>\n<div class="range__track">\n<div class="range__track-line"></div>\n<div class="range__handle"><div></div></div>\n</div>\n<div class="range__list"></div>\n</div>';
        const a = t.querySelector('.range'),
            o = a.querySelector('.range__label'),
            s = a.querySelector('.range__list');
        a.setAttribute('name', e.getAttribute('name')), o.innerHTML = e.getAttribute('title'), e.hasAttribute('color') && (a.classList.add('range--type-color'), a.classList.add('range--color-' + e.getAttribute('name'))), e.hasAttribute('list') && e.getAttribute('list').split(',').forEach(e => {
            const t = document.createElement('div');
            t.innerHTML = e, s.appendChild(t)
        }), e.parentNode.replaceChild(a, e)
    });
    class C {
        constructor(e, t) {
            t = Object.assign({
                range: [0, 1],
                value: 0,
                step: 0,
                onUpdate: () => {},
                onComplete: () => {}
            }, t || {}), this.element = document.querySelector('.range[name="' + e + '"]'), this.track = this.element.querySelector('.range__track'), this.handle = this.element.querySelector('.range__handle'), this.list = [].slice.call(this.element.querySelectorAll('.range__list div')), this.value = t.value, this.min = t.range[0], this.max = t.range[1], this.step = t.step, this.onUpdate = t.onUpdate, this.onComplete = t.onComplete, this.setValue(this.value), this.initDraggable()
        }
        setValue(e) {
            this.value = this.round(this.limitValue(e)), this.setHandlePosition()
        }
        initDraggable() {
            let e;
            this.draggable = new v(this.handle, {
                calcDelta: !0
            }), this.draggable.onDragStart = () => {
                e = this.positionFromValue(this.value), this.handle.style.left = e + 'px'
            }, this.draggable.onDragMove = t => {
                e = this.limitPosition(e + t.delta.x), this.value = this.round(this.valueFromPosition(e)), this.setHandlePosition(), this.onUpdate(this.value)
            }, this.draggable.onDragEnd = () => {
                this.onComplete(this.value)
            }
        }
        round(e) {
            return 1 > this.step ? e : r((e - this.min) / this.step) * this.step + this.min
        }
        limitValue(e) {
            const t = c(this.max, this.min),
                a = l(this.max, this.min);
            return l(c(e, a), t)
        }
        limitPosition(e) {
            return l(c(e, 0), this.track.offsetWidth)
        }
        percentsFromValue(e) {
            return (e - this.min) / (this.max - this.min)
        }
        valueFromPosition(e) {
            return this.min + (this.max - this.min) * (e / this.track.offsetWidth)
        }
        positionFromValue(e) {
            return this.percentsFromValue(e) * this.track.offsetWidth
        }
        setHandlePosition() {
            this.handle.style.left = 100 * this.percentsFromValue(this.value) + '%'
        }
    }
    class L {
        constructor(e) {
            this.game = e
        }
        init() {
            this.ranges = {
                size: new C('size', {
                    value: this.game.cube.size,
                    range: [2, 5],
                    step: 1,
                    onUpdate: e => {
                        this.game.cube.size = e, this.game.preferences.ranges.scramble.list.forEach((e, t) => {
                            e.innerHTML = this.game.scrambler.scrambleLength[this.game.cube.size][t]
                        })
                    },
                    onComplete: () => this.game.storage.savePreferences()
                }),
                flip: new C('flip', {
                    value: this.game.controls.flipConfig,
                    range: [0, 2],
                    step: 1,
                    onUpdate: e => {
                        this.game.controls.flipConfig = e
                    },
                    onComplete: () => this.game.storage.savePreferences()
                }),
                scramble: new C('scramble', {
                    value: this.game.scrambler.dificulty,
                    range: [0, 2],
                    step: 1,
                    onUpdate: e => {
                        this.game.scrambler.dificulty = e
                    },
                    onComplete: () => this.game.storage.savePreferences()
                }),
                fov: new C('fov', {
                    value: this.game.world.fov,
                    range: [2, 45],
                    onUpdate: e => {
                        this.game.world.fov = e, this.game.world.resize()
                    },
                    onComplete: () => this.game.storage.savePreferences()
                }),
                theme: new C('theme', {
                    value: {
                        cube: 0,
                        erno: 1,
                        dust: 2,
                        camo: 3,
                        rain: 4
                    }[this.game.themes.theme],
                    range: [0, 4],
                    step: 1,
                    onUpdate: e => {
                        const t = ['cube', 'erno', 'dust', 'camo', 'rain'][e];
                        this.game.themes.setTheme(t)
                    },
                    onComplete: () => this.game.storage.savePreferences()
                }),
                hue: new C('hue', {
                    value: 0,
                    range: [0, 360],
                    onUpdate: () => this.game.themeEditor.updateHSL(),
                    onComplete: () => this.game.storage.savePreferences()
                }),
                saturation: new C('saturation', {
                    value: 100,
                    range: [0, 100],
                    onUpdate: () => this.game.themeEditor.updateHSL(),
                    onComplete: () => this.game.storage.savePreferences()
                }),
                lightness: new C('lightness', {
                    value: 50,
                    range: [0, 100],
                    onUpdate: () => this.game.themeEditor.updateHSL(),
                    onComplete: () => this.game.storage.savePreferences()
                })
            }, this.ranges.scramble.list.forEach((e, t) => {
                e.innerHTML = this.game.scrambler.scrambleLength[this.game.cube.size][t]
            })
        }
    }
    class T {
        constructor(e) {
            this.game = e, this.started = 0, this.options = {
                speed: {
                    min: .0011,
                    max: .0022
                },
                revolution: {
                    min: .01,
                    max: .05
                },
                size: {
                    min: .1,
                    max: .15
                },
                colors: [4303560, 8571448, 16772936, 15677731, 16747530]
            }, this.geometry = new THREE.PlaneGeometry(1, 1), this.material = new THREE.MeshLambertMaterial({
                side: THREE.DoubleSide
            }), this.holders = [new M(this.game, this, 1, 20), new M(this.game, this, -1, 30)]
        }
        start() {
            0 < this.started || this.holders.forEach(e => {
                this.game.world.scene.add(e.holder), e.start(), this.started++
            })
        }
        stop() {
            0 == this.started || this.holders.forEach(e => {
                e.stop(() => {
                    this.game.world.scene.remove(e.holder), this.started--
                })
            })
        }
        updateColors(e) {
            this.holders.forEach(t => {
                t.options.colors.forEach((a, o) => {
                    t.options.colors[o] = e[['D', 'F', 'R', 'B', 'L'][o]]
                })
            })
        }
    }
    class M extends g {
        constructor(e, t, a, o) {
            super(!1), this.game = e, this.parent = t, this.distanceFromCube = a, this.count = o, this.particles = [], this.holder = new THREE.Object3D, this.holder.rotation.copy(this.game.world.camera.rotation), this.object = new THREE.Object3D, this.holder.add(this.object), this.resizeViewport = this.resizeViewport.bind(this), this.game.world.onResize.push(this.resizeViewport), this.resizeViewport(), this.geometry = this.parent.geometry, this.material = this.parent.material, this.options = this.parent.options;
            for (let s = this.count; s--;) this.particles.push(new A(this))
        }
        start() {
            this.time = performance.now(), this.playing = !0;
            for (let e = this.count; e--;) this.particles[e].reset();
            super.start()
        }
        stop(e) {
            this.playing = !1, this.completed = 0, this.callback = e
        }
        reset() {
            super.stop(), this.callback()
        }
        update() {
            const e = performance.now(),
                t = e - this.time;
            this.time = e;
            for (let e = this.count; e--;) this.particles[e].completed || this.particles[e].update(t);
            this.playing || this.completed != this.count || this.reset()
        }
        resizeViewport() {
            const e = this.game.world.camera.fov * THREE.Math.DEG2RAD;
            this.height = 2 * m(e / 2) * (this.game.world.camera.position.length() - this.distanceFromCube), this.width = this.height * this.game.world.camera.aspect;
            const t = 1 / this.game.transition.data.cameraZoom;
            this.width *= t, this.height *= t, this.object.position.z = this.distanceFromCube, this.object.position.y = this.height / 2
        }
    }
    class A {
        constructor(e) {
            return this.confetti = e, this.options = this.confetti.options, this.velocity = new THREE.Vector3, this.force = new THREE.Vector3, this.mesh = new THREE.Mesh(this.confetti.geometry, this.confetti.material.clone()), this.confetti.object.add(this.mesh), this.size = THREE.Math.randFloat(this.options.size.min, this.options.size.max), this.mesh.scale.set(this.size, this.size, this.size), this
        }
        reset(e = !0) {
            this.completed = !1, this.color = new THREE.Color(this.options.colors[d(Math.random() * this.options.colors.length)]), this.mesh.material.color.set(this.color), this.speed = -1 * THREE.Math.randFloat(this.options.speed.min, this.options.speed.max), this.mesh.position.x = THREE.Math.randFloat(-this.confetti.width / 2, this.confetti.width / 2), this.mesh.position.y = e ? THREE.Math.randFloat(this.size, this.confetti.height + this.size) : this.size, this.revolutionSpeed = THREE.Math.randFloat(this.options.revolution.min, this.options.revolution.max), this.revolutionAxis = ['x', 'y', 'z'][d(3 * Math.random())], this.mesh.rotation.set(Math.random() * i / 3, Math.random() * i / 3, Math.random() * i / 3)
        }
        stop() {
            this.completed = !0, this.confetti.completed++
        }
        update(e) {
            this.mesh.position.y += this.speed * e, this.mesh.rotation[this.revolutionAxis] += this.revolutionSpeed, this.mesh.position.y < -this.confetti.height - this.size && (this.confetti.playing ? this.reset(!1) : this.stop())
        }
    }
    class E {
        constructor(e) {
            this.game = e, this.data = {
                2: {
                    scores: [],
                    solves: 0,
                    best: 0,
                    worst: 0
                },
                3: {
                    scores: [],
                    solves: 0,
                    best: 0,
                    worst: 0
                },
                4: {
                    scores: [],
                    solves: 0,
                    best: 0,
                    worst: 0
                },
                5: {
                    scores: [],
                    solves: 0,
                    best: 0,
                    worst: 0
                }
            }
        }
        addScore(e) {
            const t = this.data[this.game.cube.sizeGenerated];
            t.scores.push(e), t.solves++, 100 < t.scores.lenght && t.scores.shift();
            let a = !1;
            return (e < t.best || 0 === t.best) && (t.best = e, a = !0), e > t.worst && (t.worst = e), this.game.storage.saveScores(), a
        }
        calcStats() {
            const e = this.game.cube.sizeGenerated,
                t = this.data[e];
            this.setStat('cube-size', `${e}<i>x</i>${e}<i>x</i>${e}`), this.setStat('total-solves', t.solves), this.setStat('best-time', this.convertTime(t.best)), this.setStat('worst-time', this.convertTime(t.worst)), this.setStat('average-5', this.getAverage(5)), this.setStat('average-12', this.getAverage(12)), this.setStat('average-25', this.getAverage(25))
        }
        setStat(e, t) {
            0 === t && (t = '-'), this.game.dom.stats.querySelector(`.stats[name="${e}"] b`).innerHTML = t
        }
        getAverage(e) {
            const t = this.data[this.game.cube.sizeGenerated];
            return t.scores.length < e ? 0 : this.convertTime(t.scores.slice(-e).reduce((e, t) => e + t, 0) / e)
        }
        convertTime(e) {
            if (0 >= e) return 0;
            const t = parseInt(e / 1e3 % 60),
                a = parseInt(e / 60000);
            return a + ':' + (10 > t ? '0' : '') + t
        }
    }
    class P {
        constructor(e) {
            this.game = e;
            const t = localStorage.getItem('theCube_version');
            t && t === window.gameVersion || (this.clearGame(), this.clearPreferences(), this.migrateScores(), localStorage.setItem('theCube_version', window.gameVersion))
        }
        init() {
            this.loadPreferences(), this.loadScores()
        }
        loadGame() {
            try {
                const e = 'true' === localStorage.getItem('theCube_playing');
                if (!e) throw new Error;
                const t = JSON.parse(localStorage.getItem('theCube_savedState')),
                    a = parseInt(localStorage.getItem('theCube_time'));
                if (!t || null === a) throw new Error;
                if (t.size !== this.game.cube.sizeGenerated) throw new Error;
                this.game.cube.loadFromData(t), this.game.timer.deltaTime = a, this.game.saved = !0
            } catch (t) {
                this.game.saved = !1
            }
        }
        saveGame() {
            const e = {
                    names: [],
                    positions: [],
                    rotations: []
                },
                t = this.game.timer.deltaTime;
            e.size = this.game.cube.sizeGenerated, this.game.cube.pieces.forEach(t => {
                e.names.push(t.name), e.positions.push(t.position), e.rotations.push(t.rotation.toVector3())
            }), localStorage.setItem('theCube_playing', !0), localStorage.setItem('theCube_savedState', JSON.stringify(e)), localStorage.setItem('theCube_time', t)
        }
        clearGame() {
            localStorage.removeItem('theCube_playing'), localStorage.removeItem('theCube_savedState'), localStorage.removeItem('theCube_time')
        }
        loadScores() {
            try {
                const e = JSON.parse(localStorage.getItem('theCube_scores'));
                if (!e) throw new Error;
                this.game.scores.data = e
            } catch (t) {}
        }
        saveScores() {
            const e = this.game.scores.data;
            localStorage.setItem('theCube_scores', JSON.stringify(e))
        }
        clearScores() {
            localStorage.removeItem('theCube_scores')
        }
        migrateScores() {
            try {
                const e = JSON.parse(localStorage.getItem('theCube_scoresData')),
                    t = parseInt(localStorage.getItem('theCube_scoresBest')),
                    a = parseInt(localStorage.getItem('theCube_scoresWorst')),
                    o = parseInt(localStorage.getItem('theCube_scoresSolves'));
                if (!e || !t || !o || !a) return !1;
                this.game.scores.data[3].scores = e, this.game.scores.data[3].best = t, this.game.scores.data[3].solves = o, this.game.scores.data[3].worst = a, localStorage.removeItem('theCube_scoresData'), localStorage.removeItem('theCube_scoresBest'), localStorage.removeItem('theCube_scoresWorst'), localStorage.removeItem('theCube_scoresSolves')
            } catch (t) {}
        }
        loadPreferences() {
            try {
                const e = JSON.parse(localStorage.getItem('theCube_preferences'));
                if (!e) throw new Error;
                return this.game.cube.size = parseInt(e.cubeSize), this.game.controls.flipConfig = parseInt(e.flipConfig), this.game.scrambler.dificulty = parseInt(e.dificulty), this.game.world.fov = parseFloat(e.fov), this.game.world.resize(), this.game.themes.colors = e.colors, this.game.themes.setTheme(e.theme), !0
            } catch (t) {
                return this.game.cube.size = 3, this.game.controls.flipConfig = 0, this.game.scrambler.dificulty = 1, this.game.world.fov = 10, this.game.world.resize(), this.game.themes.setTheme('cube'), this.savePreferences(), !1
            }
        }
        savePreferences() {
            const e = {
                cubeSize: this.game.cube.size,
                flipConfig: this.game.controls.flipConfig,
                dificulty: this.game.scrambler.dificulty,
                fov: this.game.world.fov,
                theme: this.game.themes.theme,
                colors: this.game.themes.colors
            };
            localStorage.setItem('theCube_preferences', JSON.stringify(e))
        }
        clearPreferences() {
            localStorage.removeItem('theCube_preferences')
        }
    }
    class D {
        constructor(e) {
            this.game = e, this.theme = null, this.defaults = {
                cube: {
                    U: 16775167,
                    D: 16772936,
                    F: 15677731,
                    R: 4303560,
                    B: 16747530,
                    L: 8571448,
                    P: 528410,
                    G: 13751771
                },
                erno: {
                    U: 16777215,
                    D: 16766208,
                    F: 12852794,
                    R: 20922,
                    B: 16734208,
                    L: 40544,
                    P: 528410,
                    G: 9092607
                },
                dust: {
                    U: 16774891,
                    D: 15189133,
                    F: 9381182,
                    R: 6323817,
                    B: 12480354,
                    L: 8691549,
                    P: 528410,
                    G: 15189133
                },
                camo: {
                    U: 16774891,
                    D: 12564082,
                    F: 3613724,
                    R: 7439446,
                    B: 8411185,
                    L: 3621661,
                    P: 528410,
                    G: 12564082
                },
                rain: {
                    U: 16448255,
                    D: 15579437,
                    F: 13508917,
                    R: 4496009,
                    B: 15489071,
                    L: 10725703,
                    P: 528410,
                    G: 8894892
                }
            }, this.colors = JSON.parse(JSON.stringify(this.defaults))
        }
        getColors() {
            return this.colors[this.theme]
        }
        setTheme(e = !1, t = !1) {
            if (e === this.theme && !1 === t) return;
            !1 !== e && (this.theme = e);
            const a = this.getColors();
            this.game.dom.prefs.querySelectorAll('.range__handle div').forEach(e => {
                e.style.background = '#' + a.R.toString(16).padStart(6, '0')
            }), this.game.cube.updateColors(a), this.game.confetti.updateColors(a), this.game.dom.back.style.background = '#' + a.G.toString(16).padStart(6, '0')
        }
    }
    class _ {
        constructor(e) {
            this.game = e, this.editColor = 'R', this.getPieceColor = this.getPieceColor.bind(this)
        }
        colorFromHSL(e, t, a) {
            return e = r(e), t = r(t), a = r(a), new THREE.Color(`hsl(${e}, ${t}%, ${a}%)`)
        }
        setHSL(e = null, t = !1) {
            this.editColor = null === e ? 'R' : e;
            const a = new THREE.Color(this.game.themes.getColors()[this.editColor]),
                {
                    h: o,
                    s: r,
                    l: s
                } = a.getHSL(a),
                {
                    hue: n,
                    saturation: i,
                    lightness: l
                } = this.game.preferences.ranges;
            if (t) {
                const e = n.value / 360,
                    t = i.value / 100,
                    c = l.value / 100,
                    m = this.colorFromHSL(n.value, i.value, l.value);
                this.tweenHSL && this.tweenHSL.stop(), this.tweenHSL = new b({
                    duration: 200,
                    easing: y.Sine.Out(),
                    onUpdate: d => {
                        n.setValue(360 * (e + (o - e) * d.value)), i.setValue(100 * (t + (r - t) * d.value)), l.setValue(100 * (c + (s - c) * d.value));
                        const u = m.clone().lerp(a, d.value),
                            g = u.getStyle(),
                            p = u.getHSL(u);
                        n.handle.style.color = g, i.handle.style.color = g, l.handle.style.color = g, i.track.style.color = this.colorFromHSL(360 * p.h, 100, 50).getStyle(), l.track.style.color = this.colorFromHSL(360 * p.h, 100 * p.s, 50).getStyle(), this.game.dom.theme.style.display = 'none', this.game.dom.theme.offsetHeight, this.game.dom.theme.style.display = ''
                    },
                    onComplete: () => {
                        this.updateHSL(), this.game.storage.savePreferences()
                    }
                })
            } else n.setValue(360 * o), i.setValue(100 * r), l.setValue(100 * s), this.updateHSL(), this.game.storage.savePreferences()
        }
        updateHSL() {
            const {
                hue: e,
                saturation: t,
                lightness: a
            } = this.game.preferences.ranges, o = e.value, r = t.value, s = a.value, n = this.colorFromHSL(o, r, s).getStyle();
            e.handle.style.color = n, t.handle.style.color = n, a.handle.style.color = n, t.track.style.color = this.colorFromHSL(o, 100, 50).getStyle(), a.track.style.color = this.colorFromHSL(o, r, 50).getStyle(), this.game.dom.theme.style.display = 'none', this.game.dom.theme.offsetHeight, this.game.dom.theme.style.display = '';
            const i = this.game.themes.theme;
            this.game.themes.colors[i][this.editColor] = this.colorFromHSL(o, r, s).getHex(), this.game.themes.setTheme()
        }
        colorPicker(e) {
            e ? this.game.dom.game.addEventListener('click', this.getPieceColor, !1) : this.game.dom.game.removeEventListener('click', this.getPieceColor, !1)
        }
        getPieceColor(e) {
            const t = e.touches ? e.touches[0] || e.changedTouches[0] : e,
                a = new THREE.Vector2(t.pageX, t.pageY);
            let o = this.game.controls.getIntersect(a, this.game.cube.edges, !0),
                s = this.game.controls.getIntersect(a, this.game.cube.cubes, !0);
            if (!1 !== o) {
                const e = o.object,
                    t = e.parent.localToWorld(e.position.clone()).sub(this.game.cube.object.position).sub(this.game.cube.animator.position),
                    a = this.game.controls.getMainAxis(t);
                1 > t.multiplyScalar(2).round()[a] && (o = !1)
            }
            const r = o ? o.object.name : s ? 'P' : 'G';
            this.setHSL(r, !0)
        }
        resetTheme() {
            this.game.themes.colors[this.game.themes.theme] = JSON.parse(JSON.stringify(this.game.themes.defaults[this.game.themes.theme])), this.game.themes.setTheme(), this.setHSL(this.editColor, !0)
        }
    }
    const k = {
        3: {
            checkerboard: {
                names: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                positions: [{
                    x: 1 / 3,
                    y: -1 / 3,
                    z: 1 / 3
                }, {
                    x: -1 / 3,
                    y: 1 / 3,
                    z: 0
                }, {
                    x: 1 / 3,
                    y: -1 / 3,
                    z: -1 / 3
                }, {
                    x: -1 / 3,
                    y: 0,
                    z: -1 / 3
                }, {
                    x: 1 / 3,
                    y: 0,
                    z: 0
                }, {
                    x: -1 / 3,
                    y: 0,
                    z: 1 / 3
                }, {
                    x: 1 / 3,
                    y: 1 / 3,
                    z: 1 / 3
                }, {
                    x: -1 / 3,
                    y: -1 / 3,
                    z: 0
                }, {
                    x: 1 / 3,
                    y: 1 / 3,
                    z: -1 / 3
                }, {
                    x: 0,
                    y: 1 / 3,
                    z: -1 / 3
                }, {
                    x: 0,
                    y: -1 / 3,
                    z: 0
                }, {
                    x: 0,
                    y: 1 / 3,
                    z: 1 / 3
                }, {
                    x: 0,
                    y: 0,
                    z: 1 / 3
                }, {
                    x: 0,
                    y: 0,
                    z: 0
                }, {
                    x: 0,
                    y: 0,
                    z: -1 / 3
                }, {
                    x: 0,
                    y: -1 / 3,
                    z: -1 / 3
                }, {
                    x: 0,
                    y: 1 / 3,
                    z: 0
                }, {
                    x: 0,
                    y: -1 / 3,
                    z: 1 / 3
                }, {
                    x: -1 / 3,
                    y: -1 / 3,
                    z: 1 / 3
                }, {
                    x: 1 / 3,
                    y: 1 / 3,
                    z: 0
                }, {
                    x: -1 / 3,
                    y: -1 / 3,
                    z: -1 / 3
                }, {
                    x: 1 / 3,
                    y: 0,
                    z: -1 / 3
                }, {
                    x: -1 / 3,
                    y: 0,
                    z: 0
                }, {
                    x: 1 / 3,
                    y: 0,
                    z: 1 / 3
                }, {
                    x: -1 / 3,
                    y: 1 / 3,
                    z: 1 / 3
                }, {
                    x: 1 / 3,
                    y: -1 / 3,
                    z: 0
                }, {
                    x: -1 / 3,
                    y: 1 / 3,
                    z: -1 / 3
                }],
                rotations: [{
                    x: -i,
                    y: 0,
                    z: i
                }, {
                    x: i,
                    y: 0,
                    z: 0
                }, {
                    x: -i,
                    y: 0,
                    z: i
                }, {
                    x: 0,
                    y: 0,
                    z: 0
                }, {
                    x: 0,
                    y: 0,
                    z: i
                }, {
                    x: 0,
                    y: 0,
                    z: 0
                }, {
                    x: -i,
                    y: 0,
                    z: i
                }, {
                    x: i,
                    y: 0,
                    z: 0
                }, {
                    x: -i,
                    y: 0,
                    z: i
                }, {
                    x: 0,
                    y: 0,
                    z: i
                }, {
                    x: 0,
                    y: 0,
                    z: 0
                }, {
                    x: 0,
                    y: 0,
                    z: i
                }, {
                    x: -i,
                    y: 0,
                    z: 0
                }, {
                    x: i,
                    y: 0,
                    z: i
                }, {
                    x: i,
                    y: 0,
                    z: 0
                }, {
                    x: 0,
                    y: 0,
                    z: i
                }, {
                    x: 0,
                    y: 0,
                    z: 0
                }, {
                    x: 0,
                    y: 0,
                    z: i
                }, {
                    x: i,
                    y: 0,
                    z: i
                }, {
                    x: -i,
                    y: 0,
                    z: 0
                }, {
                    x: i,
                    y: 0,
                    z: i
                }, {
                    x: 0,
                    y: 0,
                    z: 0
                }, {
                    x: 0,
                    y: 0,
                    z: i
                }, {
                    x: 0,
                    y: 0,
                    z: 0
                }, {
                    x: i,
                    y: 0,
                    z: i
                }, {
                    x: -i,
                    y: 0,
                    z: 0
                }, {
                    x: i,
                    y: 0,
                    z: i
                }],
                size: 3
            }
        }
    };
    const V = new class {
            constructor(e) {
                if (e = Object.assign({
                        tagName: 'icon',
                        className: 'icon',
                        styles: !1,
                        icons: {},
                        observe: !1,
                        convert: !1
                    }, e || {}), this.tagName = e.tagName, this.className = e.className, this.icons = e.icons, this.svgTag = document.createElementNS('http://www.w3.org/2000/svg', 'svg'), this.svgTag.setAttribute('class', this.className), e.styles && this.addStyles(), e.convert && this.convertAllIcons(), e.observe) {
                    const e = window.MutationObserver || window.WebKitMutationObserver;
                    this.observer = new e(() => {
                        this.convertAllIcons()
                    }), this.observer.observe(document.documentElement, {
                        childList: !0,
                        subtree: !0
                    })
                }
                return this
            }
            convertAllIcons() {
                document.querySelectorAll(this.tagName).forEach(e => {
                    this.convertIcon(e)
                })
            }
            convertIcon(e) {
                const t = this.icons[e.attributes[0].localName];
                if ('undefined' != typeof t) {
                    const a = this.svgTag.cloneNode(!0),
                        o = t.viewbox.split(' ');
                    a.setAttributeNS(null, 'viewBox', t.viewbox), a.style.width = o[2] / o[3] + 'em', a.style.height = '1em', a.innerHTML = t.content, e.parentNode.replaceChild(a, e)
                }
            }
            addStyles() {
                const e = document.createElement('style');
                e.innerHTML = `.${this.className} { display: inline-block; font-size: inherit; overflow: visible; vertical-align: -0.125em; preserveAspectRatio: none; }`, document.head.appendChild(e)
            }
        }({
            icons: {
                settings: {
                    viewbox: '0 0 512 512',
                    content: '<path fill="currentColor" d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z" />'
                },
                back: {
                    viewbox: '0 0 512 512',
                    content: '<path transform="translate(512, 0) scale(-1,1)" fill="currentColor" d="M503.691 189.836L327.687 37.851C312.281 24.546 288 35.347 288 56.015v80.053C127.371 137.907 0 170.1 0 322.326c0 61.441 39.581 122.309 83.333 154.132 13.653 9.931 33.111-2.533 28.077-18.631C66.066 312.814 132.917 274.316 288 272.085V360c0 20.7 24.3 31.453 39.687 18.164l176.004-152c11.071-9.562 11.086-26.753 0-36.328z" />'
                },
                trophy: {
                    viewbox: '0 0 576 512',
                    content: '<path fill="currentColor" d="M552 64H448V24c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v40H24C10.7 64 0 74.7 0 88v56c0 66.5 77.9 131.7 171.9 142.4C203.3 338.5 240 360 240 360v72h-48c-35.3 0-64 20.7-64 56v12c0 6.6 5.4 12 12 12h296c6.6 0 12-5.4 12-12v-12c0-35.3-28.7-56-64-56h-48v-72s36.7-21.5 68.1-73.6C498.4 275.6 576 210.3 576 144V88c0-13.3-10.7-24-24-24zM64 144v-16h64.2c1 32.6 5.8 61.2 12.8 86.2-47.5-16.4-77-49.9-77-70.2zm448 0c0 20.2-29.4 53.8-77 70.2 7-25 11.8-53.6 12.8-86.2H512v16zm-127.3 4.7l-39.6 38.6 9.4 54.6c1.7 9.8-8.7 17.2-17.4 12.6l-49-25.8-49 25.8c-8.8 4.6-19.1-2.9-17.4-12.6l9.4-54.6-39.6-38.6c-7.1-6.9-3.2-19 6.7-20.5l54.8-8 24.5-49.6c4.4-8.9 17.1-8.9 21.5 0l24.5 49.6 54.8 8c9.6 1.5 13.5 13.6 6.4 20.5z" />'
                },
                cancel: {
                    viewbox: '0 0 352 512',
                    content: '<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />'
                },
                theme: {
                    viewbox: '0 0 512 512',
                    content: '<path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"/>'
                },
                reset: {
                    viewbox: '0 0 512 512',
                    content: '<path fill="currentColor" d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z" />'
                },
                trash: {
                    viewbox: '0 0 448 512',
                    content: '<path fill="currentColor" d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z" />'
                }
            },
            convert: !0
        }),
        I = {
            Menu: 0,
            Playing: 1,
            Complete: 2,
            Stats: 3,
            Prefs: 4,
            Theme: 5
        },
        H = {
            Menu: ['stats', 'prefs'],
            Playing: ['back'],
            Complete: [],
            Stats: [],
            Prefs: ['back', 'theme'],
            Theme: ['back', 'reset'],
            None: []
        };
    window.game = new class {
        constructor() {
            this.dom = {
                ui: document.querySelector('.ui'),
                game: document.querySelector('.ui__game'),
                back: document.querySelector('.ui__background'),
                prefs: document.querySelector('.ui__prefs'),
                theme: document.querySelector('.ui__theme'),
                stats: document.querySelector('.ui__stats'),
                texts: {
                    title: document.querySelector('.text--title'),
                    note: document.querySelector('.text--note'),
                    timer: document.querySelector('.text--timer'),
                    complete: document.querySelector('.text--complete'),
                    best: document.querySelector('.text--best-time'),
                    theme: document.querySelector('.text--theme')
                },
                buttons: {
                    prefs: document.querySelector('.btn--prefs'),
                    back: document.querySelector('.btn--back'),
                    stats: document.querySelector('.btn--stats'),
                    reset: document.querySelector('.btn--reset'),
                    theme: document.querySelector('.btn--theme')
                }
            }, this.world = new p(this), this.cube = new h(this), this.controls = new x(this), this.scrambler = new z(this), this.transition = new S(this), this.timer = new w(this), this.preferences = new L(this), this.scores = new E(this), this.storage = new P(this), this.confetti = new T(this), this.themes = new D(this), this.themeEditor = new _(this), this.initActions(), this.state = I.Menu, this.newGame = !1, this.saved = !1, this.storage.init(), this.preferences.init(), this.cube.init(), this.transition.init(), this.storage.loadGame(), this.scores.calcStats(), setTimeout(() => {
                this.transition.float(), this.transition.cube(!0), setTimeout(() => this.transition.title(!0), 700), setTimeout(() => this.transition.buttons(H.Menu, H.None), 1e3)
            }, 500)
        }
        initActions() {
            let e = !1;
            this.dom.game.addEventListener('click', () => {
                if (!(0 < this.transition.activeTransitions) && this.state !== I.Playing)
                    if (this.state === I.Menu) {
                        if (!e) return e = !0, setTimeout(() => e = !1, 300), !1;
                        this.game(!0)
                    } else this.state === I.Complete ? this.complete(!1) : this.state === I.Stats && this.stats(!1)
            }, !1), this.controls.onMove = () => {
                this.newGame && (this.timer.start(!0), this.newGame = !1)
            }, this.dom.buttons.back.onclick = () => {
                0 < this.transition.activeTransitions || (this.state === I.Playing ? this.game(!1) : this.state === I.Prefs ? this.prefs(!1) : this.state === I.Theme && this.theme(!1))
            }, this.dom.buttons.reset.onclick = () => {
                this.state === I.Theme && this.themeEditor.resetTheme()
            }, this.dom.buttons.prefs.onclick = () => this.prefs(!0), this.dom.buttons.theme.onclick = () => this.theme(!0), this.dom.buttons.stats.onclick = () => this.stats(!0), this.controls.onSolved = () => this.complete(!0)
        }
        game(e) {
            if (e) {
                this.saved || (this.scrambler.scramble(), this.controls.scrambleCube(), this.newGame = !0);
                const e = this.saved ? 0 : this.scrambler.converted.length * (this.controls.flipSpeeds[0] + 10);
                this.state = I.Playing, this.saved = !0, this.transition.buttons(H.None, H.Menu), this.transition.zoom(I.Playing, e), this.transition.title(!1), setTimeout(() => {
                    this.transition.timer(!0), this.transition.buttons(H.Playing, H.None)
                }, this.transition.durations.zoom - 1e3), setTimeout(() => {
                    this.controls.enable(), this.newGame || this.timer.start(!0)
                }, this.transition.durations.zoom)
            } else this.state = I.Menu, this.transition.buttons(H.Menu, H.Playing), this.transition.zoom(I.Menu, 0), this.controls.disable(), this.newGame || this.timer.stop(), this.transition.timer(!1), setTimeout(() => this.transition.title(!0), this.transition.durations.zoom - 1e3), this.playing = !1, this.controls.disable()
        }
        prefs(e) {
            if (e) {
                if (0 < this.transition.activeTransitions) return;
                this.state = I.Prefs, this.transition.buttons(H.Prefs, H.Menu), this.transition.title(!1), this.transition.cube(!1), setTimeout(() => this.transition.preferences(!0), 1e3)
            } else this.cube.resize(), this.state = I.Menu, this.transition.buttons(H.Menu, H.Prefs), this.transition.preferences(!1), setTimeout(() => this.transition.cube(!0), 500), setTimeout(() => this.transition.title(!0), 1200)
        }
        theme(e) {
            if (this.themeEditor.colorPicker(e), e) {
                if (0 < this.transition.activeTransitions) return;
                this.cube.loadFromData(k[3].checkerboard), this.themeEditor.setHSL(null, !1), this.state = I.Theme, this.transition.buttons(H.Theme, H.Prefs), this.transition.preferences(!1), setTimeout(() => this.transition.cube(!0, !0), 500), setTimeout(() => this.transition.theming(!0), 1e3)
            } else this.state = I.Prefs, this.transition.buttons(H.Prefs, H.Theme), this.transition.cube(!1, !0), this.transition.theming(!1), setTimeout(() => this.transition.preferences(!0), 1e3), setTimeout(() => {
                const e = JSON.parse(localStorage.getItem('theCube_savedState'));
                return e ? void this.cube.loadFromData(e) : void this.cube.resize(!0)
            }, 1500)
        }
        stats(e) {
            if (e) {
                if (0 < this.transition.activeTransitions) return;
                this.state = I.Stats, this.transition.buttons(H.Stats, H.Menu), this.transition.title(!1), this.transition.cube(!1), setTimeout(() => this.transition.stats(!0), 1e3)
            } else this.state = I.Menu, this.transition.buttons(H.Menu, H.None), this.transition.stats(!1), setTimeout(() => this.transition.cube(!0), 500), setTimeout(() => this.transition.title(!0), 1200)
        }
        complete(e) {
            return e ? void(this.transition.buttons(H.Complete, H.Playing), this.state = I.Complete, this.saved = !1, this.controls.disable(), this.timer.stop(), this.storage.clearGame(), this.bestTime = this.scores.addScore(this.timer.deltaTime), this.transition.zoom(I.Menu, 0), this.transition.elevate(!0), setTimeout(() => {
                this.transition.complete(!0, this.bestTime), this.confetti.start()
            }, 1e3)) : (this.state = I.Stats, this.saved = !1, this.transition.timer(!1), this.transition.complete(!1, this.bestTime), this.transition.cube(!1), this.timer.reset(), setTimeout(() => {
                this.cube.reset(), this.confetti.stop(), this.transition.stats(!0), this.transition.elevate(0)
            }, 1e3), !1)
        }
    }
})();