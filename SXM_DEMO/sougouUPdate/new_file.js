function getCookie1(t) {
	var e = document.cookie.indexOf(";", t);
	return e == -1 && (e = document.cookie.length), unescape(document.cookie.substring(t, e))
}

function getCookie2(t) {
	for(var e = t + "=", i = e.length, s = document.cookie.length, n = 0; n < s;) {
		var a = n + i;
		if(document.cookie.substring(n, a) == e) return getCookie1(a);
		if(n = document.cookie.indexOf(" ", n) + 1, 0 == n) break
	}
	return null
}

function setCookie(t, e, i, s) {
	var s = s ? s : "ie.sogou.com",
		n = new Date;
	n.setTime(n.getTime() + i), document.cookie = t + "=" + e + ";path=/;expires=" + n.toGMTString() + ";domain=" + s + ";"
}

function checkSE() {
	var t = navigator.userAgent.toLowerCase();
	if(t.indexOf(" se ") < 0) try {
		window.external.StartPageCall("");
		try {
			return void 0 != window.external.StartPageCall
		} catch(t) {
			return !0
		}
		return !0
	} catch(t) {
		return !1
	}
	return !0
}

function generateBezier(t, e, i, s) {
	function n(t, e) {
		return 1 - 3 * e + 3 * t
	}

	function a(t, e) {
		return 3 * e - 6 * t
	}

	function r(t) {
		return 3 * t
	}

	function o(t, e, i) {
		return((n(e, i) * t + a(e, i)) * t + r(e)) * t
	}

	function h(t, e, i) {
		return 3 * n(e, i) * t * t + 2 * a(e, i) * t + r(e)
	}

	function l(e, s) {
		for(var n = 0; n < p; ++n) {
			var a = h(s, t, i);
			if(0 === a) return s;
			var r = o(s, t, i) - e;
			s -= r / a
		}
		return s
	}

	function c() {
		for(var e = 0; e < O; ++e) m[e] = o(e * x, t, i)
	}

	function u(e, s, n) {
		var a, r, h = 0;
		do r = s + (n - s) / 2, a = o(r, t, i) - e, a > 0 ? n = r : s = r;
		while (Math.abs(a) > v && ++h < _);
		return r
	}

	function f(e) {
		for(var s = 0, n = 1, a = O - 1; n != a && m[n] <= e; ++n) s += x;
		--n;
		var r = (e - m[n]) / (m[n + 1] - m[n]),
			o = s + r * x,
			c = h(o, t, i);
		return c >= g ? l(e, o) : 0 == c ? o : u(e, s, s + x)
	}

	function d() {
		w = !0, t == e && i == s || c()
	}
	var p = 4,
		g = .001,
		v = 1e-7,
		_ = 10,
		O = 11,
		x = 1 / (O - 1),
		S = "Float32Array" in window;
	if(4 !== arguments.length) return !1;
	for(var y = 0; y < 4; ++y)
		if("number" != typeof arguments[y] || isNaN(arguments[y]) || !isFinite(arguments[y])) return !1;
	t = Math.min(t, 1), i = Math.min(i, 1), t = Math.max(t, 0), i = Math.max(i, 0);
	var m = S ? new Float32Array(O) : new Array(O),
		w = !1,
		b = function(n) {
			return w || d(), t === e && i === s ? n : 0 === n ? 0 : 1 === n ? 1 : o(f(n), e, s)
		};
	b.getControlPoints = function() {
		return [{
			x: t,
			y: e
		}, {
			x: i,
			y: s
		}]
	};
	var $ = "generateBezier(" + [t, e, i, s] + ")";
	return b.toString = function() {
		return $
	}, b
}

function range(t, e) {
	return Math.random() * (e - t) + t
}

function randomTheta() {
	return 2 * Math.random() * Math.PI
}
var PingbackApp = function() {
		var t = "http://ping.ie.sogou.com/",
			e = (new Date).getTime(),
			i = escape(1e3 * e + Math.round(1e3 * Math.random())),
			s = checkSE() ? 1 : 0;
		this.getUid = function() {
			var t = "";
			return null != getCookie2("SMYUV") ? t = getCookie2("SMYUV") : (t = i, setCookie("SMYUV", t, 2592e6, "sogou.com")), t
		}, this.getYYID = function() {
			var t = "";
			return t = null != getCookie2("YYID") ? getCookie2("YYID") : ""
		}, this.refurl = "" == document.referrer ? "" : encodeURIComponent(document.referrer), this.pl = encodeURIComponent(location.href);
		var n = this.getUid();
		this.getPv = function(e) {
			var a = (new Date).getTime(),
				r = a - t1,
				o = t3 - t1,
				h = document.createElement("img");
			h.src = t + "pv.GIF?t=" + i + "&u=" + n + "&r=" + this.refurl + "&pl=" + this.pl + "&load=" + o + "&onloadtime=" + r + "&oSiteVer=feature7.0&sogou=" + s + "&idx=" + e
		}, this.getDlBtnClick = function(e, i, a) {
			var r = (new Date).getTime(),
				o = escape(1e3 * r + Math.round(1e3 * Math.random())),
				h = "";
			for(var l in i) h += "&" + l + "=" + i[l];
			var c = document.createElement("img");
			c.src = t + "ct.GIF?t=" + o + "&u=" + n + "&pl=" + this.pl + "&type=" + e + "&oSiteVer=feature7.0" + h + "&sogou=" + s, c.onerror = c.onload = function() {
				a && a()
			}
		}, this.getClick = function(e) {
			e = e ? e : window.event;
			var i = e.target ? e.target : e.srcElement;
			try {
				for(;
					"A" == i.tagName.toUpperCase() || "INPUT" == i.tagName.toUpperCase() || "IMG" == i.tagName.toUpperCase();) {
					is_link = !1, "A" != i.tagName.toUpperCase() && "INPUT" != i.tagName.toUpperCase() || (is_link = !0);
					var s = i.innerHTML ? i.innerHTML : i.value;
					s = escape(s);
					var a = i.href ? i.href : i.value;
					if(a = encodeURIComponent(a), clickFrom = window.location.href, "" == s || "" == address) break;
					for(var r = (new Date).getTime(), o = escape(1e3 * r + Math.round(1e3 * Math.random())), h = i.parentNode; !h.id;) h = h.parentNode;
					mod = h.id;
					var l = document.createElement("img");
					is_link && (l.src = t + "ct.GIF?t=" + o + "&u=" + n + "&r=" + this.refurl + "&pl=" + this.pl + "&on=" + s + "&ol=" + a + "&mod=" + mod + "&clickfrom=" + clickFrom), i = i.parentNode
				}
			} catch(t) {}
			return !0
		}
	},
	pingApp = new PingbackApp;
!
function(t, e) {
	var i = "function" == typeof define,
		s = "undefined" != typeof module && module.exports;
	i ? define(e) : s ? module.exports = e() : this[t] = e()
}("Light", function() {
	var t = function() {
		this.callbacks = {}
	};
	return t.callbacks = {}, t.listen = t.prototype.listen = function(t, e) {
		var i = this.callbacks[t] = this.callbacks[t] || [];
		i.push(e)
	}, t.remove = t.prototype.remove = function(t, e) {
		if("string" == typeof t) {
			var i = this.callbacks[t];
			if(i)
				if(null == e) delete this.callbacks[t];
				else if("function" == typeof e)
				for(var s = 0, n = i.length; s < n; ++s) e === i[s] && (i[s] = null)
		}
	}, t.notify = t.prototype.notify = function(t) {
		var e = this.callbacks[t];
		if(e && "string" == typeof t)
			for(var i = 0; i < e.length; ++i) {
				var s = e[i];
				"function" == typeof s ? s.apply(null, [].slice.call(arguments, 1)) : (e.splice(i, 1), --i)
			}
	}, t
}),
function(t, e) {
	function i(t) {
		return t = a.call(t).toLowerCase(), t.substring(8, t.length - 1)
	}

	function s(t, e, s) {
		var a = -1,
			h = r.call(arguments, 0);
		for(t = o[n.$name] || {}, e = [], s = !0; h[++a];) "boolean" === i(h[a]) ? s = h[a] : "object" === i(h[a]) && e.push(h[a]);
		for(e.length >= 2 && (t = e.splice(0, 1)[0]), a = 0; a < e.length; a++) {
			h = e[a];
			for(var l in h) t.hasOwnProperty(l) && !s || (t[l] = h[l])
		}
		return t
	}
	var n = {
			$name: "Laro",
			$version: "0.1",
			$description: "game engine based on html5"
		},
		a = Object.prototype.toString,
		r = Array.prototype.slice,
		o = this || t,
		h = s({}, n, {
			toType: i,
			extend: s,
			register: function(t, i) {
				var s = t.split("."),
					a = -1,
					r = o;
				for("" == s[0] && (s[0] = n.$name); s[++a];) r[s[a]] === e && (r[s[a]] = {}), r = r[s[a]];
				i && i.call(r, o[n.$name])
			},
			randomRange: function(t, e) {
				return t + Math.random() * (e - t)
			},
			randomBool: function() {
				return Math.random() >= .5
			},
			curry: function(t, e) {
				return function() {
					"function" == typeof t && t.apply(e, arguments)
				}
			},
			curryWithArgs: function(t, e) {
				var i = Array.prototype.slice.call(arguments, 0);
				return delete i[0], delete i[1],
					function() {
						"function" == typeof t && t.apply(e, i.concat(arguments))
					}
			}
		});
	this[n.$name] = t[n.$name] = h
}(window), Laro.register(".err", function() {
	function t(t) {
		this.assign(t)
	}

	function e(t) {
		this.assign(t)
	}

	function i(t) {
		this.assign(t)
	}
	t.prototype = Error(), t.prototype.constructor = t, t.prototype.assign = function(t) {
		this.message = void 0 === t ? "" : t
	}, e.prototype = new t, e.prototype.constructor = e, i.prototype = new t, i.prototype.constructor = i, this.assert = function(t, i) {
		if(!t) throw new e(i)
	}, this.RuntimeException = t, this.AssertionError = e, this.Exception = i, Laro.extend(this)
}), Laro.register(".base", function() {
	function t(t) {
		return s.call(typeof t === r ? t : function() {}, t, 1)
	}

	function e(t, e, i) {
		return function() {
			var s = this.supr;
			this.supr = i[h][t];
			var n = e.apply(this, arguments);
			return this.supr = s, n
		}
	}

	function i(t, i, s) {
		for(var n in i) i.hasOwnProperty(n) && (t[n] = typeof i[n] === r && typeof s[h][n] === r && o.test(i[n]) ? e(n, i[n], s) : i[n])
	}

	function s(t, e) {
		function s() {}

		function n() {
			this.initialize ? this.initialize.apply(this, arguments) : (e || l && a.apply(this, arguments), c.apply(this, arguments))
		}
		s[h] = this[h];
		var a = this,
			o = new s,
			l = typeof t === r,
			c = l ? t : this,
			u = l ? {} : t;
		return n.methods = function(t) {
			return i(o, t, a), n[h] = o, this
		}, n.methods.call(n, u).prototype.constructor = n, n.extend = arguments.callee, n[h].implement = n.statics = function(t, e) {
			return t = "string" == typeof t ?
				function() {
					var i = {};
					return i[t] = e, i
				}() : t, i(this, t, a), this
		}, n
	}
	var n = this,
		a = n.Class,
		r = "function",
		o = /xyz/.test(function() {}) ? /\bsupr\b/ : /.*/,
		h = "prototype";
	t.noConflict = function() {
		return n.Class = a, this
	}, n.Class = t, Laro.Class = t
}), Laro.register(".geometry", function(t) {
	var e = t.err.assert;
	t = t.base.Class;
	var i = t({
		initialize: function(t, i, s, n) {
			e(t >= 0 && t <= 255, "Pixel32 wrong --> r"), e(i >= 0 && i <= 255, "Pixel32 wrong --> g"), e(s >= 0 && s <= 255, "Pixel32 wrong --> b"), this.r = t, this.g = i, this.b = s, this.a = void 0 === n ? 255 : n, this.normalized = [t / 255, i / 255, s / 255, this.a > 1 ? this.a / 255 : this.a]
		},
		equal: function(t) {
			return t instanceof i && (this.r == t.r && this.g == t.g && this.b == t.b && this.a == t.a)
		},
		toString: function() {
			return "rgba(" + this.r + ", " + this.g + ", " + this.b + ", " + this.normalized[3] + ")"
		},
		rgbString: function() {
			return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
		}
	});
	this.Pixel32 = i, Laro.extend(this)
}), Laro.register(".game", function(t) {
	var e = t.Pixel32 || t.geometry.Pixel32,
		i = t.toType;
	t = (t.Class || t.base.Class)(function(t, e, s) {
		void 0 != t && "object" == i(t) && (this.host = t, this.fsm = e, this.stateId = s, this.isSuspended = !1)
	}).methods({
		enter: function() {
			throw "no enter"
		},
		leave: function() {
			throw "no leave"
		},
		update: function() {
			throw "no update"
		},
		suspended: function() {
			throw "no suspended"
		},
		message: function() {
			throw "no message"
		},
		suspend: function() {
			throw "no suspend"
		},
		resume: function() {
			throw "no resume"
		},
		preload: function() {
			throw "no preload"
		},
		cancelPreload: function() {
			throw "no cancelPreload"
		},
		transition: function() {
			return !1
		}
	});
	var s = t.extend(function(t, e, i, s) {
			this.stateId = t, t = function() {}, this.isSuspended = !1, this.enter = null != e ? e : t, this.leave = null != i ? i : t, this.update = null != s ? s : t
		}),
		n = t.extend(function() {
			this.isSuspended = !1, this.dimTimeLeft = 0
		}).methods({
			update: function(t) {
				this.dimTimeLeft -= t, this.dimTimeLeft < 0 && (this.dimTimeLeft = 0)
			},
			draw: function(t) {
				if(this.dimTimeLeft > 0) {
					var i = new e(0, 0, 0, Math.min(255, 765 * this.dimTimeLeft));
					t.drawQuad(null, i)
				}
			},
			suspended: function() {
				this.dimTimeLeft = .25
			},
			onMouse: function() {
				throw "no onMouse"
			}
		});
	this.BaseState = t, this.SimpleState = s, this.AppState = n
}), Laro.register(".game", function(t) {
	var e = t.SimpleState || t.game.SimpleState,
		i = (t.Class || t.base.Class)(function(t, s, n) {
			if(void 0 != t) {
				for(this.host = t, this.onStateChange = n, this.stateArray = [], n = 0; n < s.length; n += 2) {
					var a = s[n],
						r = s[n + 1];
					this.stateArray[a] = r instanceof e ? r : new r(t, this, a)
				}
				this.currentState = i.kNoState, this.numSuspended = 0, this.suspendedArray = [], this.numPreloaded = 0, this.preloadedArray = [], this.numStates = this.stateArray.length
			}
		}).methods({
			enter: function(t, e) {
				this.setState(t, e)
			},
			leave: function() {
				this.setState(i.kNoState)
			},
			update: function(t) {
				for(var e = 0; e < this.numSuspended; e++) this.stateArray[this.suspendedArray[e]].suspended(t);
				this.currentState != i.kNoState && (this.stateArray[this.currentState].update(t), this.currentState != i.kNoState && this.stateArray[this.currentState].transition())
			},
			message: function(t) {
				this.currentState != i.kNoState && this.stateArray[this.currentState].message(t)
			},
			messageSuspended: function(t) {
				for(var e = 0; e < this.numSuspended; e++) this.stateArray[this.suspendedArray[e]].message(t)
			},
			tryChangeState: function(t, e, s, n, a) {
				return void 0 == n && (n = !0), void 0 == a && (a = !0), e == i.kNextState && (e = this.currentState + 1), !(!t || e == this.currentState && !n) && (this.setState(e, s, a), !0)
			},
			setState: function(t, e, s) {
				if(t == i.kNextState && (t = this.currentState + 1), t == i.kNoState) {
					for(; this.numSuspended > 0; this.numSuspended--) this.stateArray[this.suspendedArray[this.numSuspended - 1]].leave(), this.stateArray[this.suspendedArray[this.numSuspended - 1]].isSuspended = !1;
					for(; this.numPreloaded > 0; this.numPreloaded--) this.stateArray[this.preloadedArray[this.numPreloaded - 1]].cancelPreload()
				} else if(s) this.stateArray[this.currentState].suspended(), this.stateArray[this.currentState].isSuspended = !0, this.suspendedArray[this.numSuspended++] = this.currentState;
				else if(this.currentState != i.kNoState && this.stateArray[this.currentState].leave(), !this.stateArray[t].isSuspended)
					for(; this.numSuspended > 0; this.numSuspended--) this.stateArray[this.suspendedArray[this.numSuspended - 1]].leave(), this.stateArray[this.suspendedArray[this.numSuspended - 1]].isSuspended = !1;
				for(s = 0; s < this.numPreloaded; s++) this.preloadedArray[s] != t && this.stateArray[this.preloadedArray[s]].cancelPreload();
				this.numPreloaded = 0, void 0 != this.onStateChange && this.onStateChange(this.currentState, t, e), s = this.currentState, this.currentState = t, this.currentState != i.kNoState && (this.stateArray[this.currentState].isSuspended ? (this.stateArray[this.currentState].resume(e, s), this.stateArray[this.currentState].isSuspended = !1, --this.numSuspended) : this.stateArray[this.currentState].enter(e, s))
			},
			getCurrentState: function() {
				return this.currentState == i.kNoState ? null : this.stateArray[this.currentState]
			},
			preload: function(t) {
				this.preloadedArray[this.numPreloaded++] = t
			},
			isSuspended: function(t) {
				return this.stateArray[t].isSuspended
			}
		}).statics({
			kNoState: -1,
			kNextState: -2
		});
	t = i.extend().methods({
		draw: function(t) {
			for(var e = 0; e < this.numSuspended; e++) this.stateArray[this.suspendedArray[e]].draw(t);
			(e = this.getCurrentState()) && e.draw(t)
		},
		onMouse: function(t, e, i, s) {
			var n = this.getCurrentState();
			n && n.onMouse(t, e, i, s)
		}
	}), this.FSM = i, this.AppFSM = t, Laro.extend(this)
}), Laro.register(".game", function(t) {
	var e = t.base.Class || t.Class;
	window.requestAnimationFrame = this.requestAnimationFrame = function() {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			function(t) {
				window.setTimeout(t, 1)
			}
	}();
	var i = e(function(t, e) {
		function i() {
			if(s) {
				requestAnimationFrame(i);
				var a = new Date,
					r = (a - n) / 1e3;
				r >= 3 && (r = .25), t.call(e, r), n = a
			}
		}
		var s = !0,
			n = new Date;
		return this.stop = function() {
			s = !1
		}, this.resume = function() {
			s = !0, n = new Date, i()
		}, i(), this
	});
	e = e(function(t, e, i) {
		this.maxTime = i, this.from = t, this.to = e, this.time = 0, this.isDone = !1
	}).methods({
		update: function(t) {
			this.time = Math.min(this.time + t, this.maxTime)
		},
		draw: function(e) {
			this.isDone = this.time == this.maxTime;
			var i = new t.Pixel32(t.lerp(this.from.r, this.to.r, this.time / this.maxTime), t.lerp(this.from.g, this.to.g, this.time / this.maxTime), t.lerp(this.from.b, this.to.b, this.time / this.maxTime), t.lerp(this.from.a, this.to.a, this.time / this.maxTime));
			i.a > 0 && e.drawFillScreen(i)
		},
		reset: function() {
			this.time = 0, this.isDone = !1
		}
	}), this.Loop = i, this.ScreenTransitionFade = e, Laro.extend(this)
});
var isTouchDevice = /andriod|iphone|ipad/.test(navigator.userAgent.toLowerCase()),
	initializing = !1,
	superTest = /horizon/.test(function() {
		horizon
	}) ? /\b_super\b/ : /.*/;
this.Class = function() {}, Class.extend = function(t) {
	function e() {
		!initializing && this.init && this.init.apply(this, arguments)
	}
	var i = this.prototype;
	initializing = !0;
	var s = new this;
	initializing = !1;
	for(var n in t) s[n] = "function" == typeof t[n] && "function" == typeof i[n] && superTest.test(t[n]) ?
		function(t, e) {
			return function() {
				var s = this._super;
				this._super = i[t];
				var n = e.apply(this, arguments);
				return this._super = s, n
			}
		}(n, t[n]) : t[n];
	return e.prototype = s, e.constructor = e, e.extend = arguments.callee, e
};
var extend = function(t, e, i) {
		void 0 === i && (i = !0);
		for(var s in e) t.hasOwnProperty(s) && !i || (t[s] = e[s]);
		return t
	},
	DisplayClass = Class.extend({
		init: function(t) {
			this.x = 0, this.y = 0, this.width = 0, this.height = 0, this.stage = null, this.draw = function() {}, "function" == typeof t ? t.call(this) : extend(this, t || {})
		}
	}),
	InteractiveClass = DisplayClass.extend({
		init: function(t) {
			this._super(t), this.eventListener = {}
		},
		addEventListener: function(t, e) {
			null !== this.eventListener[t] && void 0 !== this.eventListener[t] || (this.eventListener[t] = []), this.eventListener[t].push(e)
		},
		removeEventListener: function(t, e) {
			if(null !== this.eventListener[t] && void 0 !== this.eventListener[t]) {
				for(var i = 0; i < this.eventListener[t].length; i++) this.eventListener[t][i] == e && (delete this.eventListener[t][i], this.eventListener[t].splice(i, 1));
				0 === this.eventListener[t].length && delete this.eventListener[t]
			}
		},
		removeAllEventListener: function(t) {
			null !== this.eventListener[t] && void 0 !== this.eventListener[t] && (this.eventListener[t].splice(), delete this.eventListener[t])
		},
		hasEventListener: function(t) {
			return !!this.eventListener[t] && this.eventListener[t].length > 0
		}
	}),
	ObjectContainerClass = InteractiveClass.extend({
		init: function(t, e) {
			this._super(e), this.ctx = t, this.children = [], this.maxWidth = 0, this.maxHeight = 0, this.hoverChildren = []
		},
		addEventListener: function(t, e) {
			this._super(t, e)
		},
		removeEventListener: function(t, e) {
			this._super(t, e)
		},
		removeAllEventListener: function(t) {
			this._super(t)
		},
		hasEventListener: function(t) {
			this._super(t)
		},
		getContext: function() {
			return this.ctx
		},
		addChild: function(t) {
			this.maxWidth < t.x + t.width && (this.maxWidth = t.x + t.width), this.maxHeight < t.y + t.height && (this.maxHegiht = t.y + t.height), t.stage = this, this.children.push(t)
		},
		addChildAt: function(t, e) {
			this.maxWidth < t.x + t.width && (this.maxWidth = t.x + t.width), this.maxHeight < t.y + t.height && (this.maxHeight = t.y + t.height), t.stage = this, this.children.splice(e, 0, t)
		},
		removeChild: function(t) {
			if(this.children.splice(this.getChildIndex(t), 1), this.maxWidth == t.x + t.width) {
				this.maxWidth = 0;
				for(var e = 0; e < this.children.length; e++) this.maxWidth < this.children[e].x + this.children[e].width && (this.maxWidth = this.children[e].x + this.children[e].width)
			}
			if(this.maxHeight == t.y + t.height) {
				this.maxHeight = 0;
				for(var e = 0; e < this.children.length; e++) this.maxHeight < this.children[e].y + this.children[e].height && (this.maxHeight = this.children[e].y + this.children[e].height)
			}
			t.stage = null
		},
		removeChildAt: function(t) {
			this.children[t].stage = null;
			var e = this.children.splice(t, 1);
			if(this.maxWidth == e.x + e.width) {
				this.maxWidth = 0;
				for(var i = 0; i < this.children.length; i++) this.maxWidth < this.children[i].x + this.children[i].width && (this.maxWidth = this.children[i].x + this.children[i].width)
			}
			if(this.maxHeight == e.y + e.height) {
				this.maxHeight = 0;
				for(var i = 0; i < this.children.length; i++) this.maxHeight = 0, this.maxHeight < this.children[i].y + this.children[i].height && (this.maxHeight = this.children[i].y + this.children[i].height)
			}
		},
		getChildAt: function(t) {
			return this.children[t]
		},
		getChildIndex: function(t) {
			for(var e = 0; e < this.children.length; e++)
				if(this.children[e] == t) return e;
			return -1
		},
		contains: function(t) {
			return this.getChildIndex(t) != -1
		},
		dispatchMouseEvent: function(t, e, i) {
			function s(t) {
				var e = !1;
				switch(t.checkType || (t.checkType = "rect"), t.checkType) {
					case "rect":
						e = n > t.x && n < t.x + t.width && a > t.y && a < t.y + t.height;
						break;
					case "circle":
						if("number" != typeof t.radius) throw "no radius or radius is not a number";
						e = Math.sqrt(Math.pow(n - t.x, 2) + Math.pow(a - t.y, 2)) < t.radius;
						break;
					case "poly":
				}
				return e
			}
			for(var n = e, a = i, r = [], o = this.children.length - 1; o >= 0; o--) {
				var h = this.children[o];
				if(h.dispatchMouseEvent && h.dispatchMouseEvent(t, n - h.x, a - h.y), s(h)) {
					if("mousemove" == t && r.length < 1 && r.push(h), null == h.eventListener[t] || void 0 == h.eventListener[t]) continue;
					for(var l = 0, c = h.eventListener[t]; l < c.length; l++) c[l](n - h.x, a - h.y);
					break
				}
			}
			if("mousemove" == t) {
				for(var u = 0; u < this.hoverChildren.length; u++) {
					for(var f = !1, d = 0; d < r.length; d++) this.hoverChildren[u] == r[d] && (f = !0);
					if(!f) {
						if(this.hoverChildren[u].eventListener.mouseout)
							for(var o = 0, p = this.hoverChildren[u]; o < p.eventListener.mouseout.length; o++) p.eventListener.mouseout[o](n - p.x, a - p.y);
						delete this.hoverChildren[u];
						break
					}
				}
				for(var u = 0; u < r.length; u++) {
					for(var f = !1, d = 0; d < this.hoverChildren.length; d++) r[u] == this.hoverChildren[d] && (f = !0);
					if(!f && this.hoverChildren.length < 1) {
						if(this.hoverChildren.push(r[u]), r[u].eventListener.mouseover)
							for(var o = 0, g = r[u]; o < g.eventListener.mouseover.length; o++) g.eventListener.mouseover[o](n - g.x, a - g.y);
						break
					}
				}
				this.clearHoverChildren()
			}
		},
		clearHoverChildren: function() {
			for(var t = [], e = 0; e < this.hoverChildren.length; e++) null != this.hoverChildren[e] && void 0 != this.hoverChildren[e] && t.push(this.hoverChildren[e]);
			this.hoverChildren = t
		}
	}),
	Stage = ObjectContainerClass.extend({
		init: function(t, e) {
			function i() {
				return {
					x: n.pageXOffset || a.scrollLeft,
					y: n.pageYOffset || a.scrollTop
				}
			}

			function s(t) {
				t = t || r.canvas;
				for(var e = t.offsetWidth, i = t.offsetHeight, s = t.offsetTop, n = t.offsetLeft; t = t.offsetParent;) s += t.offsetTop, n += t.offsetLeft;
				return {
					top: s,
					left: n,
					width: e,
					height: i
				}
			}
			if(this._super(t.getContext("2d"), e), void 0 === t) throw new Error("htmlCanvasElement undefined");
			this.canvas = t, this.isStart = !1, this.interval = 16, this.timer = null, this.stage = null, this.CONFIG = {
				interval: 16,
				isClear: !0
			}, this.width = t.width, this.height = t.height;
			var n = window,
				a = document.documentElement || {
					scrollLeft: 0,
					scrollTop: 0
				},
				r = this,
				o = function(t, e) {
					for(var n = 0; n < e.length; n++) t.addEventListener(e[n], function(t, n) {
						return function(a) {
							var r = s(),
								o = i();
							if(isTouchDevice) {
								a.preventDefault();
								var h = "touchend" == e[n] ? a.changedTouches[0] : a.touches[0],
									l = h.pageX - r.left + o.x,
									c = h.pageY - r.top + o.y
							} else var l = a.clientX - r.left + o.x,
								c = a.clientY - r.top + o.y;
							if(t.eventListener[e[n]])
								for(var u = 0; u < t.eventListener[e[n]].length; u++) t.eventListener[e[n]][u](l, c);
							t.dispatchMouseEvent(e[n], l, c)
						}
					}(r, n), !1)
				},
				h = function(t, e) {
					for(var i = 0; i < e.length; i++) t.addEventListener(e[i], function(t, i) {
						return function(s) {
							if(t.eventListener[e[i]])
								for(var n = 0; n < t.eventListener[e[i]].length; n++) t.eventListener[e[i]][n](s)
						}
					}(r, i), !1)
				};
			o(this.canvas, ["mousemove", "mouseup", "mousedown", "click", "mouseover", "mouseout", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchend"]), h(this.canvas, ["keyup", "keydown", "keypress"])
		},
		onRefresh: function() {},
		addEventListener: function(t, e) {
			return this._super(t, e)
		},
		removeEventListener: function(t, e) {
			return this._super(t, e)
		},
		removeAllEventListener: function(t) {
			return this._super(t)
		},
		hasEventListener: function(t) {
			return this._super(t)
		},
		getContext: function() {
			return this._super()
		},
		addChild: function(t) {
			return this._super(t)
		},
		addChildAt: function(t, e) {
			return this._super(t, e)
		},
		removeChild: function(t) {
			return this._super(t)
		},
		removeChildAt: function(t, e) {
			return this._super(t, e)
		},
		getChildAt: function(t) {
			return this._super(t)
		},
		getChildIndex: function(t) {
			return this._super(t)
		},
		contains: function(t) {
			return this._super(t)
		},
		dispatchMouseEvent: function(t, e, i) {
			return this._super(t, e, i)
		},
		clearHoverChildren: function() {
			return this._super()
		},
		render: function(t) {
			!!this.CONFIG.isClear && this.clear(), this.draw(t);
			for(var e = 0; e < this.children.length; e++) this.ctx.translate(this.children[e].x, this.children[e].y), this.children[e].render(t), this.ctx.translate(-this.children[e].x, -this.children[e].y)
		},
		clear: function(t, e, i, s) {
			void 0 !== t && void 0 !== e && void 0 !== i && void 0 !== s ? this.ctx.clearRect(t, e, i, s) : this.ctx.clearRect(0, 0, this.width, this.height)
		},
		start: function() {
			this.isStart = !0, this.timer = setInterval(function(t) {
				return function() {
					t.render(), t.onRefresh()
				}
			}(this), this.CONFIG.interval)
		},
		stop: function() {
			this.isStart = !1, clearInterval(this.timer)
		}
	}),
	Sprite = ObjectContainerClass.extend({
		init: function(t, e) {
			this._super(t, e), this.isDragging = !1, this.dragPos = {}, this.dragFunc = null, this.dropFunc = null
		},
		addEventListener: function(t, e) {
			return this._super(t, e)
		},
		removeEventListener: function(t, e) {
			return this._super(t, e)
		},
		removeAllEventListener: function(t) {
			return this._super(t)
		},
		hasEventListener: function(t) {
			return this._super(t)
		},
		getContext: function() {
			return this._super()
		},
		addChild: function(t) {
			return this._super(t)
		},
		addChildAt: function(t, e) {
			return this._super(t, e)
		},
		removeChild: function(t) {
			return this._super(t)
		},
		removeChildAt: function(t) {
			return this._super(t)
		},
		getChildAt: function(t) {
			return this._super(t)
		},
		getChildIndex: function(t) {
			return this._super(t)
		},
		contains: function(t) {
			return this._super(t)
		},
		dispatchMouseEvent: function(t, e, i) {
			return this._super(t, e, i)
		},
		clearHoverChildren: function() {
			return this._super()
		},
		render: function(t) {
			this.draw(t), this.ctx.scale(this.width < this.maxWidth ? this.width / this.maxWidth : 1, this.height < this.maxHeight ? this.height / this.maxHeight : 1);
			for(var e = 0; e < this.children.length; e++) this.ctx.translate(this.children[e].x, this.children[e].y), this.children[e].render(t), this.children[e].translate(-this.children[e].x, this.children[e].y);
			this.ctx.scale(this.width < this.maxWidth ? this.maxWidth / this.width : 1, this.height < this.maxHeight ? this.maxHeight / this.height : 1)
		},
		onDrag: function(t, e) {
			var i = this;
			this.isDragging = !0, this.dragPos.x = t + this.x, this.dragPos.y = e + this.y, this.dragFunc = function(t, e) {
				var s = t - i.dragPos.x,
					n = e - i.dragPos.y;
				i.x += s, i.y += n, i.dragPos.x = t, i.dragPos.y = e
			}, this.dropFunc = function(t, e) {
				i.onDrop()
			}, this.stage.addEventListener("mousemove", this.dragFunc), this.stage.addEventListener("mouseout", this.dropFunc)
		},
		onDrop: function() {
			this.isDragging = !1, this.dragPos = {}, this.stage.removeEventListener("mousemove", this.dragFunc), this.stage.removeEventListener("mouseout", this.dropFunc), delete this.dragFunc, delete this.dropFunc
		}
	}),
	Vector2 = Class.extend({
		init: function(t, e) {
			this.x = t, this.y = e
		},
		copy: function() {
			return new Vector2(this.x, this.y)
		},
		length: function() {
			return Math.sqrt(this.sqrLength())
		},
		sqrLength: function() {
			return this.x * this.x + this.y * this.y
		},
		normalize: function() {
			var t = 1 / this.length();
			return new Vector2(this.x * t, this.y * t)
		},
		negate: function() {
			return new Vector2((-this.x), (-this.y))
		},
		add: function(t) {
			return new Vector2(this.x + t.x, this.y + t.y)
		},
		subtract: function(t) {
			return new Vector2(this.x - t.x, this.y - t.y)
		},
		multiply: function(t) {
			return new Vector2(this.x * t, this.y * t)
		},
		divide: function(t) {
			return new Vector2(this.x / t, this.y / t)
		},
		dot: function(t) {
			return new Vector2(this.x * t.x, this.y * t.y)
		}
	});
Vector2.zero = new Vector2(0, 0);
var Color = Class.extend({
	init: function(t, e, i) {
		this.r = t, this.g = e, this.b = i
	},
	copy: function() {
		return new Color(this.r, this.g, this.b)
	},
	add: function(t) {
		return new Color(Math.min(this.r + t.r, 1), Math.min(this.g + t.g, 1), Math.min(this.b + t.b, 1))
	},
	subtract: function(t) {
		return new Color(Math.max(this.r - t.r, 0), Math.max(this.g - t.g, 0), Math.max(this.b - t.b, 0))
	},
	multiply: function(t) {
		return new Color(Math.min(this.r * t, 1), Math.min(this.g * t, 1), Math.min(this.b * t, 1))
	},
	divide: function(t) {
		return new Color(this.r / t, this.g / t, this.b / t)
	},
	modulate: function(t) {
		return new Color(this.r * t.r, this.g * t.g, this.b * t.b)
	},
	saturate: function() {
		this.r = Math.min(this.r, 1), this.g = Math.min(this.g, 1), this.b = Math.min(this.b, 1)
	}
});
Color.black = new Color(0, 0, 0), Color.white = new Color(1, 1, 1), Color.red = new Color(1, 0, 0), Color.green = new Color(0, 1, 0), Color.blue = new Color(0, 0, 1), Color.yellow = new Color(1, 1, 0), Color.cyan = new Color(0, 1, 1), Color.purple = new Color(1, 0, 1);
var Particle = Class.extend({
		init: function(t) {
			this.position = t.position, this.velocity = t.velocity, this.acceleration = Vector2.zero, this.age = 0, this.life = t.life, this.color = t.color, this.size = t.size
		}
	}),
	ParticleSystem = Class.extend({
		init: function() {
			this.$private = {
				particles: []
			}, this.gravity = new Vector2(0, 100), this.effectors = []
		},
		emit: function(t) {
			this.$private.particles.push(t)
		},
		simulate: function(t) {
			this.aging(t), this.applyGravity(), this.applyEffectors(), this.kinematics(t)
		},
		aging: function(t) {
			for(var e = 0; e < this.$private.particles.length;) {
				var i = this.$private.particles[e];
				i.age += t, i.age > i.life ? this.kill(e) : e++
			}
		},
		kill: function(t) {
			t < this.$private.particles.length && this.$private.particles.splice(t, 1)
		},
		applyGravity: function() {
			for(var t in this.$private.particles) this.$private.particles[t].acceleration = this.gravity
		},
		applyEffectors: function() {
			for(var t in this.effectors) {
				var e = this.effectors[t].apply;
				for(var i in this.$private.particles) e(this.$private.particles[i])
			}
		},
		kinematics: function(t) {
			for(var e in this.$private.particles) {
				var i = this.$private.particles[e];
				i.position = i.position.add(i.velocity.multiply(t)), i.velocity = i.velocity.add(i.acceleration.multiply(t))
			}
		},
		render: function(t) {
			for(var e in this.$private.particles) {
				var i = this.$private.particles[e],
					s = 1 - i.age / i.life;
				t.fillStyle = "rgba(" + Math.floor(255 * i.color.r) + ", " + Math.floor(255 * i.color.g) + ", " + Math.floor(i.color.b) + ", " + s.toFixed(2) + ")", t.beginPath(), t.arc(i.position.x, i.position.y, i.size, 0, 2 * Math.PI, !0), t.closePath(), t.fill()
			}
		}
	}),
	ParticleBlock = Class.extend({
		init: function(t, e, i, s) {
			this.apply = function(n) {
				(n.position.x - n.size < t || n.position.x + n.size > i) && (n.velocity.x *= -1), (n.position.y - n.size < e || n.position.y + n.size > s) && (n.velocity.y *= -1)
			}
		}
	}),
	CVS = {};
CVS.$class = Class, CVS.$stage = Stage, CVS.$sprite = Sprite, CVS.$vector2 = Vector2, CVS.$color = Color, CVS.$particle = Particle, CVS.$particleSystem = ParticleSystem, CVS.$particleBlock = ParticleBlock, extend(CVS, {
	createSprite: function(t, e) {
		return new Sprite(t, e)
	},
	createPoint3D: function(t, e) {
		var i = 0,
			s = 0,
			n = 0,
			a = 0,
			r = 0,
			o = {
				x: 0,
				y: 0,
				xpos: 0,
				ypos: 0,
				zpos: 0,
				focalLength: 250,
				width: 0,
				height: 0,
				draw: function() {},
				setVanishPoint: function(t, e) {
					i = t, s = e
				},
				setCenterPoint: function(t, e, i) {
					n = t, a = e, r = i
				},
				rotateX: function(t) {
					var e = Math.cos(t),
						i = Math.sin(t),
						s = this.ypos * e - this.zpos * i,
						n = this.zpos * e + this.ypos * i;
					this.ypos = s, this.zpos = n
				},
				rotateY: function(t) {
					var e = Math.cos(t),
						i = Math.sin(t),
						s = this.xpos * e - this.zpos * i,
						n = this.zpos * e + this.xpos * i;
					this.xpos = s, this.zpos = n
				},
				rotateZ: function(t) {
					var e = Math.cos(t),
						i = Math.sin(t),
						s = this.xpos * e - this.ypos * i,
						n = this.ypos * e + this.xpos * i;
					this.xpos = s, this.ypos = n
				},
				getScale: function() {
					return this.focalLength / (this.focalLength + this.zpos + r)
				},
				getScreenXY: function() {
					var t = this.getScale();
					return {
						x: i + (n + this.xpos) * t,
						y: s + (a + this.ypos) * t
					}
				}
			};
		"function" == typeof e ? e.call(o) : extend(o, e || {});
		var h = new Sprite(t, o);
		return Object.defineProperties(h, {
			screenX: {
				get: function() {
					return this.getScreenXY().x
				}
			},
			screenY: {
				get: function() {
					return this.getScreenXY().y
				}
			}
		}), h
	},
	createTriangle: function(t, e, i, s, n, a) {
		function r() {
			var t = this.color >> 16,
				e = this.color >> 8 & 255,
				i = 255 & this.color,
				s = o.call(this);
			return t *= s, e *= s, i *= s, t << 16 | e << 8 | i
		}

		function o() {
			var t = {
					x: l.xpos - c.xpos,
					y: l.ypos - c.ypos,
					z: l.zpos - c.zpos
				},
				e = {
					x: c.xpos - u.xpos,
					y: c.ypos - u.ypos,
					z: c.zpos - u.zpos
				},
				i = {
					x: t.y * e.z - t.z * e.y,
					y: -(t.x * e.z - t.z * e.x),
					z: t.x * e.y - t.y * e.x
				},
				s = i.x * this.light.x + i.y * this.light.y + i.z * this.light.z,
				n = Math.sqrt(i.x * i.x + i.y * i.y + i.z * i.z),
				a = Math.sqrt(this.light.x * this.light.x + this.light.y * this.light.y + this.light.z * this.light.z);
			return Math.acos(s / (n * a)) / Math.PI * this.light.brightness
		}

		function h() {
			var t = u.screenX - l.screenX,
				e = u.screenY - l.screenY,
				i = c.screenX - u.screenX,
				s = c.screenY - u.screenY;
			return t * s > e * i
		}
		a = void 0 == a || a;
		var l = e,
			c = i,
			u = s,
			f = CVS.createSprite(t, function() {
				this.color = n, this.light = null, this.isPointInside = function(t, e) {
					var i = function(i, s, n) {
							return(e - i.screenY) * (s.screenX - i.screenX) - (t - i.screenX) * (s.screenY - i.screenY)
						},
						s = function(i, s, n) {
							return(e - n.screenY) * (i.screenX - n.screenX) - (t - n.screenX) * (i.screenY - n.screenY)
						},
						n = function(i, s, n) {
							return(e - s.screenY) * (n.screenX - s.screenX) - (t - s.screenX) * (n.screenY - s.screenY)
						};
					return i(l, c, u) * n(l, c, u) > 0 && n(l, c, u) * s(l, c, u) > 0
				}, this.draw = function(t) {
					if(!h()) {
						t = t || this.ctx, t.beginPath(), t.moveTo(l.screenX, l.screenY), t.lineTo(c.screenX, c.screenY), t.lineTo(u.screenX, u.screenY), t.lineTo(l.screenX, l.screenY), t.closePath();
						var e = this.light ? r.call(this) : this.color;
						"number" == typeof e && (e = "rgb(" + (e >> 16) + ", " + (e >> 8 & 255) + ", " + (255 & e) + ")"), t.fillStyle = e, t.fill(), a || (t.strokeStyle = e, t.stroke())
					}
				}
			});
		return Object.defineProperties(f, {
			depth: {
				get: function() {
					var t = Math.min(l.z, c.z, u.z);
					return t
				}
			}
		}), f
	},
	createLight: function(t, e, i, s) {
		return t = void 0 === t ? -100 : t, e = void 0 === e ? -100 : e, i = void 0 === i ? -100 : i, s = void 0 === s ? 1 : s, Object.defineProperties({
			x: t,
			y: e,
			z: i
		}, {
			brightness: {
				get: function() {
					return s
				},
				set: function(t) {
					s = Math.min(Math.max(t, 0), 1)
				}
			}
		})
	}
}), this.Laro && Laro.extend ? Laro.extend(CVS) : this.CVS = CVS, CVS.$stage.prototype.refresh = function(t) {
	this.width = t.width, this.height = t.height
};
var arr = [
		[937, 1038, 4],
		[913, 748, 4],
		[912, 1614, 4],
		[909, 896, 4],
		[893, 1346, 4],
		[892, 602, 4],
		[879, 1092, 4],
		[866, 731, 8],
		[861, 986, 4],
		[857, 927, 4],
		[854, 944, 8],
		[850, 913, 4],
		[849, 1e3, 8],
		[843, 808, 8],
		[842, 1032, 8],
		[839, 1135, 4],
		[835, 1049, 4],
		[835, 839, 10],
		[832, 872, 16],
		[825, 1244, 8],
		[825, 1091, 8],
		[822, 959, 16],
		[818, 1148, 4],
		[817, 1117, 8],
		[811, 1008, 16],
		[807, 820, 4],
		[806, 782, 16],
		[805, 1004, 4],
		[804, 762, 4],
		[803, 883, 8],
		[802, 1133, 4],
		[802, 980, 8],
		[798, 847, 16],
		[796, 954, 8],
		[796, 904, 24],
		[796, 828, 8],
		[792, 1165, 16],
		[790, 602, 8],
		[789, 1353, 8],
		[789, 691, 4],
		[787, 1284, 4],
		[787, 1142, 8],
		[783, 1092, 16],
		[782, 720, 16],
		[780, 1040, 24],
		[777, 846, 8],
		[774, 514, 4],
		[770, 1190, 8],
		[770, 1124, 8],
		[770, 700, 8],
		[765, 1534, 4],
		[763, 1215, 4],
		[762, 726, 8],
		[759, 757, 16],
		[758, 1152, 16],
		[756, 1230, 4],
		[756, 743, 4],
		[752, 792, 24],
		[738, 1154, 8],
		[737, 804, 4],
		[731, 1364, 4],
		[724, 1278, 4],
		[720, 608, 4],
		[716, 1227, 16],
		[715, 686, 24],
		[713, 741, 22],
		[713, 669, 8],
		[709, 1171, 24],
		[701, 994, 4],
		[700, 1242, 4],
		[694, 683, 4],
		[691, 1014, 4],
		[691, 702, 8],
		[687, 1302, 8],
		[684, 906, 8],
		[682, 1270, 4],
		[682, 641, 16],
		[680, 1028, 4],
		[680, 726, 16],
		[673, 1420, 8],
		[672, 1203, 20],
		[670, 1341, 4],
		[666, 641, 4],
		[664, 1039, 8],
		[655, 657, 8],
		[651, 1046, 4],
		[648, 1060, 8],
		[645, 1273, 16],
		[644, 426, 4],
		[642, 1227, 24],
		[641, 685, 24],
		[641, 681, 4],
		[638, 1068, 4],
		[636, 668, 4],
		[628, 1080, 8],
		[625, 631, 16],
		[621, 1279, 8],
		[620, 1300, 4],
		[620, 514, 4],
		[619, 1058, 8],
		[617, 580, 8],
		[615, 824, 32],
		[607, 896, 40],
		[576, 866, 23],
		[560, 840, 16],
		[530, 857, 16],
		[507, 810, 23],
		[477, 796, 16],
		[615, 1086, 4],
		[615, 659, 8],
		[607, 680, 16],
		[602, 627, 8],
		[597, 1094, 8],
		[597, 847, 8],
		[594, 1634, 4],
		[589, 1229, 24],
		[586, 687, 8],
		[584, 1292, 16],
		[584, 1061, 16],
		[581, 1272, 4],
		[580, 1338, 8],
		[579, 649, 16],
		[576, 796, 24],
		[575, 596, 16],
		[572, 1082, 4],
		[572, 914, 16],
		[568, 1248, 8],
		[564, 1060, 8],
		[564, 673, 8],
		[562, 632, 4],
		[560, 1458, 4],
		[560, 650, 8],
		[558, 1310, 8],
		[558, 885, 8],
		[558, 821, 8],
		[554, 1118, 4],
		[552, 685, 4],
		[548, 451, 4],
		[547, 539, 8],
		[544, 1244, 8],
		[544, 785, 16],
		[542, 1265, 16],
		[540, 1347, 4],
		[540, 664, 8],
		[534, 1118, 8],
		[534, 595, 8],
		[532, 1254, 4],
		[528, 1235, 8],
		[526, 1287, 8],
		[325, 629, 16],
		[524, 788, 8],
		[619, 287, 4],
		[516, 1304, 4],
		[516, 1261, 8],
		[513, 1336, 8],
		[373, 1018, 16],
		[395, 1035, 32],
		[512, 795, 4],
		[512, 608, 4],
		[505, 635, 8],
		[497, 663, 16],
		[500, 1279, 8],
		[500, 1085, 8],
		[500, 1020, 8],
		[498, 1105, 16],
		[494, 846, 8],
		[493, 832, 4],
		[489, 1234, 16],
		[487, 1124, 4],
		[486, 655, 4],
		[485, 1277, 4],
		[484, 576, 4],
		[482, 1357, 4],
		[670, 872, 12],
		[477, 1486, 4],
		[476, 505, 4],
		[475, 649, 8],
		[473, 692, 8],
		[471, 597, 16],
		[469, 975, 16],
		[466, 1332, 8],
		[464, 1259, 8],
		[461, 1290, 16],
		[460, 1058, 8],
		[460, 811, 8],
		[457, 829, 16],
		[455, 1381, 8],
		[451, 1222, 16],
		[451, 827, 4],
		[449, 1078, 24],
		[448, 663, 16],
		[446, 1314, 4],
		[439, 847, 8],
		[437, 629, 16],
		[432, 1098, 8],
		[430, 826, 8],
		[429, 1227, 8],
		[427, 846, 4],
		[426, 677, 8],
		[424, 1249, 16],
		[424, 583, 4],
		[421, 648, 8],
		[419, 1293, 8],
		[419, 433, 4],
		[415, 867, 4],
		[415, 670, 4],
		[409, 846, 8],
		[408, 1242, 8],
		[407, 630, 4],
		[399, 1270, 8],
		[397, 689, 16],
		[394, 866, 8],
		[391, 666, 8],
		[390, 527, 8],
		[388, 1209, 16],
		[388, 946, 40],
		[386, 886, 4],
		[385, 1246, 4],
		[385, 1192, 8],
		[385, 637, 8],
		[377, 1211, 4],
		[376, 903, 4],
		[375, 712, 8],
		[374, 1347, 4],
		[374, 1e3, 8],
		[450, 1010, 23],
		[367, 925, 4],
		[364, 655, 4],
		[361, 1220, 8],
		[483, 1051, 16],
		[512, 1033, 16],
		[519, 1065, 23],
		[563, 1093, 16],
		[357, 1257, 16],
		[355, 610, 8],
		[344, 722, 16],
		[342, 1269, 4],
		[341, 676, 16],
		[336, 486, 4],
		[335, 1183, 20],
		[331, 662, 4],
		[325, 1165, 8],
		[323, 727, 8],
		[322, 1227, 16],
		[322, 1197, 8],
		[317, 1217, 4],
		[312, 754, 16],
		[311, 734, 4],
		[311, 371, 4],
		[310, 1377, 8],
		[307, 1183, 4],
		[298, 672, 16],
		[297, 768, 4],
		[295, 801, 8],
		[293, 1138, 16],
		[291, 825, 8],
		[289, 1206, 8],
		[289, 707, 8],
		[287, 1570, 4],
		[286, 649, 8],
		[283, 1172, 4],
		[278, 833, 4],
		[272, 882, 8],
		[271, 1444, 4],
		[270, 1153, 8],
		[270, 732, 16],
		[270, 555, 4],
		[268, 991, 8],
		[268, 811, 8],
		[266, 845, 16],
		[263, 944, 8],
		[260, 1096, 24],
		[259, 772, 16],
		[258, 1334, 4],
		[258, 1182, 16],
		[258, 1059, 16],
		[256, 828, 8],
		[251, 1276, 8],
		[247, 754, 8],
		[245, 944, 8],
		[242, 877, 8],
		[242, 478, 4],
		[236, 894, 24],
		[236, 826, 4],
		[235, 1006, 24],
		[234, 1058, 8],
		[233, 1090, 8],
		[232, 971, 16],
		[231, 1139, 16],
		[231, 895, 4],
		[229, 842, 16],
		[225, 942, 8],
		[223, 1046, 4],
		[222, 1117, 8],
		[218, 1251, 4],
		[216, 1158, 4],
		[215, 788, 16],
		[214, 1084, 4],
		[214, 1004, 8],
		[214, 958, 4],
		[210, 879, 8],
		[210, 623, 8],
		[207, 728, 8],
		[202, 1029, 8],
		[201, 971, 8],
		[199, 1378, 4],
		[195, 910, 6],
		[188, 1115, 4],
		[166, 1496, 4],
		[159, 794, 4],
		[151, 962, 8],
		[149, 1210, 8],
		[134, 891, 4],
		[115, 471, 4]
	],
	arr2 = [
		[751, 854, 9],
		[726, 693, 6],
		[698, 1024, 6],
		[696, 1402, 2],
		[680, 1680, 6],
		[664, 459, 7],
		[658, 1572, 2],
		[651, 1113, 10],
		[628, 773, 9],
		[627, 1137, 7],
		[627, 938, 2],
		[621, 507, 6],
		[604, 719, 6],
		[602, 1813, 9],
		[598, 1438, 9],
		[593, 180, 9],
		[573, 1195, 2],
		[561, 565, 5],
		[560, 578, 2],
		[557, 501, 6],
		[556, 742, 4],
		[554, 283, 6],
		[553, 1786, 6],
		[553, 1174, 6],
		[553, 524, 8],
		[552, 1340, 3],
		[552, 1151, 8],
		[552, 954, 9],
		[551, 587, 9],
		[549, 546, 8],
		[548, 1167, 3],
		[548, 974, 3],
		[548, 754, 7],
		[547, 1406, 10],
		[547, 536, 2],
		[547, 501, 2],
		[546, 1194, 6],
		[546, 1112, 3],
		[546, 571, 6],
		[545, 1092, 6],
		[545, 512, 6],
		[544, 1374, 6],
		[542, 1352, 8],
		[542, 599, 2],
		[541, 1131, 9],
		[540, 1214, 3],
		[540, 1183, 4],
		[539, 1324, 5],
		[539, 725, 4],
		[537, 961, 6],
		[536, 1684, 9],
		[536, 1338, 6],
		[535, 1411, 3],
		[534, 736, 9],
		[531, 1388, 9],
		[531, 1198, 6],
		[530, 1127, 4],
		[529, 975, 7],
		[529, 62, 6],
		[527, 1109, 7],
		[527, 584, 8],
		[526, 501, 8],
		[520, 1530, 6],
		[520, 1091, 7],
		[520, 727, 6],
		[520, 389, 6],
		[518, 990, 8],
		[516, 1312, 9],
		[515, 1400, 6],
		[515, 482, 6],
		[514, 1137, 6],
		[514, 976, 6],
		[513, 706, 8],
		[513, 606, 9],
		[511, 588, 6],
		[510, 507, 6],
		[509, 1118, 8],
		[508, 1413, 5],
		[508, 893, 5],
		[507, 763, 5],
		[507, 495, 5],
		[506, 925, 6],
		[505, 1222, 6],
		[505, 964, 5],
		[505, 725, 5],
		[502, 942, 8],
		[500, 687, 7],
		[500, 600, 5],
		[499, 1419, 3],
		[498, 738, 8],
		[497, 1401, 6],
		[497, 1096, 9],
		[495, 905, 9],
		[494, 998, 11],
		[494, 934, 4],
		[494, 892, 4],
		[494, 794, 9],
		[494, 155, 9],
		[493, 976, 9],
		[493, 773, 9],
		[492, 756, 6],
		[491, 956, 6],
		[491, 580, 8],
		[491, 521, 5],
		[490, 1305, 11],
		[490, 502, 7],
		[489, 1204, 9],
		[488, 1229, 5],
		[488, 1184, 6],
		[485, 703, 11],
		[484, 1411, 5],
		[484, 984, 2],
		[484, 729, 5],
		[483, 566, 6],
		[479, 993, 6],
		[478, 1309, 3],
		[478, 582, 5],
		[477, 516, 5],
		[475, 1319, 6],
		[472, 553, 2],
		[468, 528, 8],
		[465, 1111, 8],
		[465, 719, 7],
		[465, 563, 7],
		[464, 1395, 9],
		[462, 739, 8],
		[461, 1318, 5],
		[461, 1226, 9],
		[461, 1129, 6],
		[461, 974, 9],
		[459, 1833, 2],
		[459, 1184, 4],
		[456, 1196, 14],
		[456, 960, 6],
		[455, 1123, 3],
		[455, 761, 4],
		[454, 737, 2],
		[451, 948, 5],
		[450, 1385, 6],
		[450, 1186, 3],
		[449, 1133, 5],
		[448, 1332, 9],
		[446, 1630, 6],
		[445, 1146, 10],
		[445, 747, 6],
		[445, 540, 11],
		[444, 1357, 11],
		[444, 962, 4],
		[443, 1169, 7],
		[426, 1824, 6],
		[425, 1509, 2],
		[420, 226, 9],
		[408, 867, 6],
		[406, 445, 9],
		[406, 104, 9],
		[391, 505, 2],
		[388, 1368, 9],
		[372, 929, 6],
		[367, 55, 2],
		[361, 167, 6],
		[347, 1406, 6],
		[347, 379, 6],
		[344, 1151, 9],
		[335, 329, 4],
		[333, 695, 6],
		[329, 1660, 9],
		[316, 1179, 2],
		[302, 1271, 6],
		[276, 629, 2]
	],
	arr3 = [
		[-859, -210, .1, "#67a5f1"],
		[-431, -254, .16, "#67a5f1"],
		[251, -140, .16, "#67a5f1"],
		[571, -310, .1, "#67a5f1"],
		[-555, -144, .4, "#a0c7f7"],
		[-114, -222, 1, "#fff"],
		[453, -300, .4, "#a0c7f7"],
		[833, -110, .16, "#67a5f1"],
		[614, 250, 1.6, "#b3d2f8"]
	];
Laro.register("SOGOU.$func", function(t) {
	this.bezier1 = generateBezier(0, 0, 1, 1), this.bezier2 = generateBezier(.42, 0, 1, 1), this.bezier3 = generateBezier(0, 0, .58, 1), this.bezier4 = generateBezier(.42, 0, .58, 1), this.bezier5 = generateBezier(.84, .45, .98, .73), this.initWordsPos = function() {
		this.w1.style.marginLeft = -670 * e.scale + "px", this.w2.style.marginLeft = -491 * e.scale + "px", this.w2.style.bottom = SOGOU.$func.canvas.height / 2 + "px", this.w3.style.marginLeft = 210 * e.scale + "px", this.w4.style.marginLeft = 95 * e.scale + "px";
		for(var t = document.querySelectorAll(".word"), i = document.querySelectorAll(".word_l"), s = 0; s < t.length; s++) t[s].style.fontSize = 55 * SOGOU.$func.scale + "px";
		for(var s = 0; s < i.length; s++) i[s].style.fontSize = 18 * SOGOU.$func.scale + "px"
	}, this.resizeOfballs = function() {
		var t = this;
		Light.listen("resize", function(e) {
			try {
				switch(t.initWordsPos(), sogou.manager.index) {
					case 0:
					case 1:
						t.logoParticles.forEach(function(t, i) {
							t._resize(e.scale)
						});
						break;
					case 2:
						t.initBallHead(), t.initBallLine();
						break;
					case 3:
					case 4:
						t.iconsParticles.forEach(function(t, i) {
							t._resize(e.scale)
						});
						break;
					case 5:
						t.resetIconBalls(), t.resetDnaBalls(), t.resetDnaBgBalls(), t.lastScale = t.scale;
						break;
					case 6:
						t.resetDnaList();
						break;
					case 7:
						t.resetMainDna(), t.lastScale = t.scale;
						break;
					case 8:
						t.resetDnaMain(), t.lastScale = t.scale;
						break;
					case 9:
						t.resetRotateLogo(), t.resetLogoEnd()
				}
			} catch(t) {}
		})
	}, this.initStage = function() {
		var t = document.getElementById("canvas");
		t.width = window.innerWidth, t.height = window.innerHeight, this.canvas = t, this.scale = window.innerWidth / 1920, this.stage = new CVS.$stage(t), this.ctx = this.stage.ctx, this.vpx = t.width / 2, this.vpy = t.height / 2, this.normalN = 100, this.normalBalls = [], this.angleX = .001, this.angleY = .001, this.zstep = 1, this.zflag = 1, this.w1 = document.getElementById("w1"), this.w2 = document.getElementById("w2"), this.w3 = document.getElementById("w3"), this.w4 = document.getElementById("w4"), this.initWordsPos(), pingApp.getPv(0)
	};
	var e = this;
	this.createBall = function(t, i, s, n, a, r, o) {
		return CVS.createPoint3D(t.ctx, function() {
			this.width = s, this.xpos = n, this.ypos = a, this.zpos = r, this.draw = function() {
				var t = e.canvas.width,
					s = e.canvas.height;
				this.ctx.translate(t / 2, s / 2), this.ctx.beginPath();
				try {
					this.ctx.arc(0, 0, this.width, 0, 2 * Math.PI, !0)
				} catch(t) {}
				this.ctx.closePath(), this.ctx.fillStyle = i, this.ctx.fill(), this.ctx.translate(-t / 2, -s / 2)
			}
		})
	}, this.tween = function(t, e, i, s) {
		t.start_t || (t.start_t = 0), t.end_t || (t.end_t = 0);
		var n = (e - t.start_t).toFixed(2);
		n <= 0 || (n <= i + t.end_t ? (void 0 != t.t_xpos && (t.xpos = t.f_xpos + (t.t_xpos - t.f_xpos) * s(n / (i + t.end_t))), void 0 != t.t_ypos && (t.ypos = t.f_ypos + (t.t_ypos - t.f_ypos) * s(n / (i + t.end_t))), void 0 != t.t_zpos && (t.zpos = t.f_zpos + (t.t_zpos - t.f_zpos) * s(n / (i + t.end_t))), void 0 != t.t_width && (t.width = t.f_width + (t.t_width - t.f_width) * s(n / (i + t.end_t)))) : t.end = !0)
	}, this.tween2 = function(t, e, i, s) {
		t.start_t || (t.start_t = 0), t.end_t || (t.end_t = 0);
		var n = (e - t.start_t).toFixed(2);
		n <= 0 || (n <= i + t.end_t ? (void 0 != t.t_xpos && (t.xpos = t.f_xpos + (t.t_xpos - t.f_xpos) * s(n / (i + t.end_t))), void 0 != t.t_ypos && (t.ypos = t.f_ypos + (t.t_ypos - t.f_ypos) * s(n / (i + t.end_t))), void 0 != t.t_zpos && (t.zpos = t.f_zpos + (t.t_zpos - t.f_zpos) * s(n / (i + t.end_t))), void 0 != t.t_width && (t.width = t.f_width + (t.t_width - t.f_width) * s(n / (i + t.end_t)))) : (void 0 != t.t_xpos && (t.xpos = t.t_xpos), void 0 != t.t_ypos && (t.ypos = t.t_ypos), void 0 != t.t_zpos && (t.zpos = t.t_zpos), void 0 != t.t_width && (t.width = t.t_width), t.end = !0))
	}, this.resetBallStartTime = function(t) {
		if(t.length)
			for(var e = 0; e < t.length; e++) {
				var i = t[e];
				i.start_t = 0
			} else t.start_t = 0
	}, this.sin = function(t, e, i, s) {
		return e * Math.sin(i * Math.PI * t + s)
	}, this.linear = function(t, e, i, s) {
		return t <= 0 ? 0 : t <= e ? t / e * s * i : i
	}, this.cos = function(t, e, i) {
		return e * Math.cos(i * Math.PI * t + 3 * Math.PI / 2)
	}, this.initEvents = function() {
		window.addEventListener("resize", this.resizeInstance.bind(this))
	}, this.scalew = function(t, e, i, s) {
		void 0 == t.bi_w && (t.bi_w = t.width), void 0 == t.start_t && (t.start_t = 0);
		var n = e - t.start_t;
		1 == s ? start = Math.PI / 2 : start = 3 * Math.PI / 2;
		var a = t.bi_w + this.sin(n, i, .5, start);
		t.width = a >= 1 ? a : 1
	}, this.getWidthOfTime = function(t, e, i, s, n, a) {
		void 0 == t.start_t && (t.start_t = 0);
		var r = e - i;
		return 1 == a ? start = Math.PI / 2 : start = 3 * Math.PI / 2, n + this.sin(r, s, .5, start)
	}, this.roll = function(t, e, i, s) {
		void 0 == t.bi_x && (t.bi_x = t.xpos, t.bi_y = t.ypos), void 0 == t.start_t && (t.start_t = 0);
		var n = e - t.start_t;
		0 != i && n > 0 && (t.xpos = t.bi_x + this.sin(n, i, .5, 0)), 0 != s && n > 0 && (t.ypos = t.bi_y + this.sin(n, s, .5, 3 * Math.PI / 2))
	}, this.getRollPos = function(t, e, i, s, n, a, r) {
		var o = e - i,
			h = {
				x: s,
				y: n
			};
		return 0 != a && o > 0 && (h.x = s + this.sin(o, a, .5, 0)), 0 != r && o > 0 && (h.y = n + this.sin(o, r, .5, 3 * Math.PI / 2)), h
	}, this.resizeInstance = function() {
		var t = this;
		this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight, this.ctx.canvas.height = window.innerHeight, this.ctx.canvas.width = window.innerWidth, this.stage.refresh(canvas), this.scale = window.innerWidth / 1920, Light.notify("resize", {
			scale: t.scale
		})
	}, this.init = function() {
		this.initStage(), this.resizeOfballs(), this.initEvents()
	}
}), Laro.register("SOGOU.$func", function(t) {
	var e = (this.vpx, this.vpy, this);
	this.particle = function(t, i, s, n, a, r, o, h) {
		this.canvas = s, scale = this.scale;
		var l = this.createBall(t, i, a, r, o, h, n);
		l.id = n;
		var c = a;
		return l._resize = function(t) {
			var i = sogou.manager.index;
			switch(i) {
				case 0:
					a = c * t, x = r * t, y = o * t, l.t_xpos = x, l.t_ypos = y, l.t_zpos = l.zpos, l.width = a;
					var s = l.t_xpos,
						n = l.t_ypos;
					if(s > 0 && n >= 0) var h = Math.atan(n / s);
					else if(s > 0 && n < 0) var h = 2 * Math.PI + Math.atan(n / s);
					else if(s < 0) var h = Math.PI + Math.atan(n / s);
					else if(0 == s && n > 0) var h = .5 * Math.PI;
					else if(0 == s && n < 0) var h = 1.5 * Math.PI;
					if(r < 190 && r > 0 && o < 190 && o > -190) {
						var u = (o + 190) / 1900;
						u *= 5;
						var f = h - 1.6 * Math.PI / 2
					} else if(r < 0 && r > -190 && o < 190 && o > -190) {
						var u = (-o + 190) / 1900;
						u *= 5;
						var f = h - 1.6 * Math.PI / 2
					} else var u = range(1e3, 2e3) / 1e3,
						f = h - 2 * Math.PI / 2;
					l.start_t = u;
					var d = 1e3;
					l.r1 = d, l.t_theta = f;
					break;
				case 1:
					l.xpos = r * t + 161 * t, l.ypos = o * t;
					var p = l.getScreenXY();
					l.x = p.x, l.y = p.y, l.width = c * t, void 0 != l.bi_x && (l.bi_x = l.xpos), void 0 != l.bi_y && (l.bi_y = l.ypos);
					break;
				case 3:
				case 4:
					a = c * t, x = r * t, y = o * t, l.xpos = x, l.ypos = y, e.initVibrate(l), l.t_xpos = x, l.t_ypos = y, l.width = a, e.resetIcon(l)
			}
		}, l._resize(this.scale), l.x = 3e3, l.y = 3e3, l.z = 0, l.setVanishPoint(0, 0), l.setCenterPoint(0, 0, h), l
	}, this.getParticles = function(t, e, i) {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		for(var s, n = [], a = 0; a < t.length; a++) {
			var r = t[a][2],
				s = e,
				o = !1;
			if("icons" === i) {
				(t[a][1] < 475 || t[a][1] > 1430 || t[a][0] < 434 || t[a][0] > 580) && (s = "rgba(255,255,255," + range(.2, .6) + ")", o = !0);
				var h = t[a][1] + t[a][2] - 960,
					l = t[a][0] + t[a][2] - 540
			} else var h = t[a][1] + t[a][2] - 960,
				l = t[a][0] + t[a][2] - 540;
			var c = this.particle(this.stage, s, this.canvas, a, r, h, l, 0);
			c.outer = o, n.push(c)
		}
		return n
	}, this.initParticlesLogo = function() {
		this.logoParticles = this.getParticles(arr, "rgb(70,147,236)", "logo")
	}, this.rotateTranslate = function(t, e) {
		for(var i = 0; i < this.logoParticles.length; i++) {
			var s = this.logoParticles[i];
			if(!(t < s.start_t)) {
				s.t = t - s.start_t;
				var n = s.r1,
					a = n - n * Math.pow(s.t / e, 1),
					r = s.t_theta,
					o = r - 1.5 * Math.PI / 2 * Math.pow(s.t / e, 1),
					h = s.t_xpos,
					l = s.t_ypos;
				s.t > e ? (s.xpos = s.t_xpos + 161 * this.scale, s.ypos = s.t_ypos, pos = s.getScreenXY(), s.x = pos.x, s.y = pos.y) : (s.r = a, s.xpos = a * Math.cos(o) + h + 161 * this.scale, s.ypos = a * Math.sin(o) + l, pos = s.getScreenXY(), s.x = pos.x, s.y = pos.y)
			}
		}
	}, this.createLine = function(t, e, i, s, n, a, r, o) {
		return CVS.createPoint3D(t.ctx, function() {
			var t = "rgb(70,147,236)";
			this.color = t, this.width = e, this.height = i, this.xpos = s, this.ypos = n, this.zpos = a, this.draw = function() {
				this.ctx.beginPath();
				var t = this.ctx.createLinearGradient(0, 0, this.width, 0);
				t.addColorStop(0, r), t.addColorStop(1, o), this.ctx.fillStyle = t, this.ctx.fillRect(0, 0, this.width, this.height)
			}
		})
	}, this.resetBalls = function() {
		for(var t = 0; t < this.logoParticles.length; t++) ball = this.logoParticles[t], ball.f_xpos = ball.xpos, ball.f_ypos = ball.ypos, ball.f_zpos = ball.zpos, ball.t_xpos = ball.f_xpos + range(-400, 450), ball.t_ypos = ball.f_ypos + range(-200, 150), ball.t_zpos = ball.f_zpos + range(0, -100), ball.end_t = range(0, .2), ball.end = !1
	}
}), Laro.register("SOGOU.$func", function(t) {
	this.breathe = function(t, e) {
		void 0 == t.bi_x && (t.bi_x = t.xpos), void 0 == t.bi_y && (t.bi_y = t.ypos), t.dx = t.dx ? t.dx : 0, t.dy = t.dy ? t.dy : 0, t.xpos = t.dx + t.bi_x + .02 * t.xpos * (1 + Math.sin(2 * Math.PI * e / 3 + 3 * Math.PI / 2)), t.ypos = t.dy + t.bi_y + .02 * t.ypos * (1 + Math.sin(2 * Math.PI * e / 3 + 3 * Math.PI / 2))
	}, this.vibrate = function(t, e) {
		void 0 != t.step && 0 != t.step || (t.step = 0, t.direction = 1, t.theta = randomTheta(), t.d = range(5, 20), t.dx = 0, t.dy = 0), t.direction > 0 ? (t.step++, t.dx += 1.2 * Math.cos(t.theta) / 6, t.dy += 1.2 * Math.sin(t.theta) / 6) : (t.step--, t.dx -= 1.2 * Math.cos(t.theta) / 6, t.dy -= 1.2 * Math.sin(t.theta) / 6), t.step >= t.d ? t.direction = -1 : t.step <= 0 && (t.direction = 1)
	}
}), Laro.register("SOGOU.$func", function(t) {
	this.forwardAndBack = function(t, e, i) {
		void 0 != t.step && 0 != t.step || (t.step = 0, t.direction = 1, t.d = i - e), t.direction > 0 ? (t.step++, t.xpos += 1.2) : (t.step--, t.xpos -= 1.2), t.step >= t.d ? (t.step = t.d, t.direction = -1) : t.step <= 0 && (t.step = 0, t.direction = 1)
	}, this.bigAndSmall = function(t) {
		t.width += .03 * (t.direction > 0 ? 1 : -1)
	}, this.initBallHead = function() {
		this.ball_head && (this.stage.removeChild(this.ball_head), delete this.ball_head);
		var t = 16 * this.scale;
		this.ball_head = new this.createBall(this.stage, "rgb(70,147,236)", t, -this.canvas.width / 2 - 50, 0, 0);
		var e = this.ball_head.getScreenXY();
		this.ball_head.x = e.x, this.ball_head.y = e.y, this.ball_head.f_xpos = this.ball_head.xpos, this.ball_head.t_xpos = 500 * this.scale, this.stage.addChild(this.ball_head), this.ball_head.start_t = .5
	}, this.initBallLine = function() {
		if(this.line_arr) {
			for(var t = 0; t < this.line_arr.length; t++) {
				var e = this.line_arr[t];
				this.stage.removeChild(e)
			}
			delete this.line_arr
		}
		this.ball_line && (this.stage.removeChild(this.ball_line), delete this.ball_line);
		var i = this.canvas.width / 2 + 700 * this.scale,
			s = 4,
			n = -(this.canvas.width / 2 + 700 * this.scale),
			a = this.stage.height / 2,
			r = 0,
			o = color_s = "rgba(70,147,236,1)";
		this.ball_line = new this.createLine(this.stage, i, s, n, a, r, color_s, o), this.stage.addChild(this.ball_line);
		var h = this.ball_line.getScreenXY();
		this.ball_line.x = h.x, this.ball_line.y = h.y, this.ball_line.f_xpos = h.x, this.ball_line.t_xpos = -200 * this.scale, this.ball_line.start_t = .5;
		var l = [{
			width: 221,
			left: 580,
			top: 164,
			a: .5
		}, {
			width: 246,
			left: 80,
			top: 220,
			a: .2
		}, {
			width: 350,
			left: 420,
			top: 244,
			a: 1
		}, {
			width: 210,
			left: 948,
			top: 358,
			a: .7
		}, {
			width: 263,
			left: 0,
			top: 395,
			a: .3
		}, {
			width: 371,
			left: 830,
			top: 442,
			a: .7
		}, {
			width: 375,
			left: 511,
			top: 678,
			a: 1
		}, {
			width: 286,
			left: 275,
			top: 846,
			a: .7
		}];
		this.line_arr = [];
		for(var t = 0; t < l.length; t++) {
			var e = this.line_arr[t] = new this.createLine(this.stage, l[t].width, s, l[t].left, l[t].top, r, "rgba(70,147,236,0)", "rgba(70,147,236," + l[t].a + ")");
			this.stage.addChild(e);
			var h = e.getScreenXY();
			e.x = this.stage.width + h.x, e.y = h.y, e.f_xpos = e.x, e.t_xpos = -h.x, e.end = !1, e.start_t = .5
		}
	}
}), Laro.register("SOGOU.$func", function(t) {
	this.initParticlesIcons = function() {
		this.iconsParticles = this.getParticles(arr2, "#fff", "icons");
		for(var t = 0; t < this.iconsParticles.length; t++) {
			var e = this.iconsParticles[t];
			e.f_xpos = range(-this.vpx, this.vpx), e.f_ypos = range(-this.vpy, this.vpy), e.f_zpos = -249, e.zpos = e.f_zpos, e.t_zpos = 0
		}
	}, this.resetIcon = function(t, e) {
		e && (t.start_t = e), t.t_width = t.width
	}
}), Laro.register("SOGOU.$func", function(t) {
	this.initVibrate = function(t) {
		t.step = 0, t.direction = 1, t.theta = randomTheta(), t.d = range(10, 50), t.dx = 0, t.dy = 0, t.bi_x = t.xpos, t.bi_y = t.ypos
	}, this.vibratePart2 = function(t, e, i) {
		i = i ? i : 1.2, void 0 != t.step && 0 != t.step || this.initVibrate(t), t.direction > 0 ? (t.step++, t.dx += i * Math.cos(t.theta) / 6, t.xpos = t.bi_x + t.dx, t.dy += i * Math.sin(t.theta) / 6, t.ypos = t.bi_y + t.dy) : (t.step--, t.dx -= i * Math.cos(t.theta) / 6, t.xpos = t.bi_x + t.dx, t.dy -= i * Math.sin(t.theta) / 6, t.ypos = t.bi_y + t.dy), t.step >= t.d ? t.direction = -1 : t.step <= 0 && (t.direction = 1)
	}
}), Laro.register("SOGOU.$func", function(t) {
	this.initDnaBgBalls = function() {
		this.dnaBgBalls = [];
		for(var t = 0; t < 30; t++) {
			var e = range(-this.canvas.width / 3, this.canvas.width / 3),
				i = e + range(-100, 100),
				s = range(-this.canvas.height / 3, this.canvas.height / 3),
				n = s + range(-100, 100),
				a = new this.createBall(this.stage, "rgba(255,255,255," + range(0, .5) + ")", range(2, 7), 3e3, 3e3, 250);
			a.f_xpos = e, a.f_ypos = s, a.f_zpos = 200, a.t_xpos = i, a.t_ypos = n, a.t_zpos = 0, a.t_width = a.width, a.start_t = .5, this.dnaBgBalls.push(a)
		}
	}, this.resetDnaBgBalls = function() {
		for(var t = 0; t < this.dnaBgBalls.length; t++) ball = this.dnaBgBalls[t], ball.t_xpos = ball.t_xpos / this.lastScale * this.scale, ball.t_ypos = ball.t_ypos / this.lastScale * this.scale, ball.t_width = ball.t_width / this.lastScale * this.scale
	}, this.initDnaBalls = function() {
		var t = arr3,
			e = 20;
		this.dnaBalls = [];
		for(var i = 0; i < t.length; i++)
			for(var s = 0; s < 7; s++) {
				var n = t[i][2],
					a = t[i][3],
					r = e * n * SOGOU.$func.scale,
					o = 1,
					h = range(-SOGOU.$func.canvas.width / 3, SOGOU.$func.canvas.width / 3),
					l = range(-SOGOU.$func.canvas.width / 3, SOGOU.$func.canvas.width / 3),
					c = range(-SOGOU.$func.canvas.height / 3, SOGOU.$func.canvas.height / 3),
					u = range(-SOGOU.$func.canvas.height / 3, SOGOU.$func.canvas.height / 3),
					f = new this.createBall(SOGOU.$func.stage, a, o, 3e3, 3e3, 250),
					d = new this.createBall(SOGOU.$func.stage, a, o, 3e3, 3e3, 250);
				if(f.f_xpos = h, f.f_ypos = c, f.f_zpos = 0, f.f_width = o, f.width = o, d.f_xpos = l, d.f_ypos = u, d.f_zpos = 0, d.f_width = o, d.width = o, i <= 4) var p = .5;
				else var p = 0;
				var g = 59,
					v = t[i][0] * this.scale,
					_ = (t[i][1] + g * s * n) * this.scale,
					O = 117 * n * this.scale,
					x = this.getRollPos(f, Math.PI + .06 + p, .4 * s, v, _, O, 0);
				f.t_xpos = x.x, f.t_ypos = x.y, f.t_zpos = 0, f.t_width = r;
				var x = this.getRollPos(d, Math.PI + .06 + p, .4 * s, v, _, -O, 0);
				d.t_xpos = x.x, d.t_ypos = x.y, d.t_zpos = 0, d.t_width = r;
				var S = this.getWidthOfTime(f, Math.PI + .06 + p, p + .4 * s, 5 * n * SOGOU.$func.scale, r, 1);
				f.t_width = S;
				var y = this.getWidthOfTime(f, Math.PI + .06 + p, p + .4 * s, 5 * n * this.scale, r, -1);
				d.t_width = y, f.color = d.color = a, f.scale = d.scale = n, f.end_t = range(0, .3), d.end_t = range(0, .3), 5 == i ? (f.end_t = 0, d.end_t = 0) : 8 == i && (f.end_t = .3, d.end_t = .3), this.dnaBalls.push(f), this.dnaBalls.push(d)
			}
	}, this.resetDnaBalls = function() {
		for(var t = 0; t < this.dnaBalls.length; t++) {
			var e = this.dnaBalls[t];
			e.t_width = e.t_width / this.lastScale * this.scale, e.t_xpos = e.t_xpos / this.lastScale * this.scale, e.t_ypos = e.t_ypos / this.lastScale * this.scale
		}
	}, this.resetIconBalls = function() {
		for(var t = 0; t < this.iconsParticles.length; t++) {
			var e = this.iconsParticles[t];
			e.t_xpos = range(-this.vpx, this.vpx), e.t_ypos = range(-this.vpy, this.vpy), e.t_zpos = -249
		}
	}, this.dnaRotateSingle = function(t, e, i, s, n, a) {
		var r = e.ball_left,
			o = e.ball_right;
		this.roll(r, t, i, 0), this.roll(o, t, -i, 0), this.scalew(r, t, n, 1), this.scalew(o, t, n, -1);
		var h = r.getScreenXY();
		r.x = h.x, r.y = h.y;
		var h = o.getScreenXY();
		o.x = h.x, o.y = h.y, this.ctx.beginPath(), this.ctx.moveTo(this.canvas.width / 2 + r.x, this.canvas.height / 2 + r.y), this.ctx.lineTo(this.canvas.width / 2 + o.x, this.canvas.height / 2 + o.y), this.ctx.lineWidth = s, this.ctx.strokeStyle = a, this.ctx.stroke(), this.ctx.closePath()
	}
}), Laro.register("SOGOU.$func", function(t) {
	this.initDnaList = function(t) {
		this.dnaList = [];
		for(var e = arr3, i = 20, s = 0; s < e.length; s++) {
			var n, a, r = e[s][2],
				o = i * r * this.scale,
				a = 59,
				h = 117;
			n = s <= 4 ? .5 : 0;
			var l = this.createDNA(e[s][0], e[s][1], o, a, h, e[s][3], n, t, r);
			l.scale = r, l.color = e[s][3], l.start_t = n, this.dnaList.push(l)
		}
	}, this.resetDnaList = function() {
		var t = this;
		this.dnaList.forEach(function(e) {
			e.forEach(function(e) {
				t.stage.removeChild(e.ball_left), t.stage.removeChild(e.ball_right)
			})
		}), this.initDnaList()
	}, this.createDNA = function(t, e, i, s, n, a, r, o, h) {
		var l = [];
		n = n * h * this.scale;
		for(var c = 0; c < 7; c++) {
			var u = new this.createBall(this.stage, a, i, t * SOGOU.$func.scale, (e + s * c * h) * SOGOU.$func.scale, 0),
				f = new this.createBall(this.stage, a, i, t * SOGOU.$func.scale, (e + s * c * h) * SOGOU.$func.scale, 0);
			this.stage.addChild(u), this.stage.addChild(f);
			var d = u.getScreenXY();
			u.x = d.x, u.y = d.y;
			var d = f.getScreenXY();
			f.x = d.x, f.y = d.y, l[c] = {}, l[c].ball_left = u, l[c].ball_right = f, u.start_t = .4 * c, f.start_t = .4 * c;
			var d = u.getScreenXY();
			u.x = d.x, u.y = d.y;
			var d = f.getScreenXY();
			f.x = d.x, f.y = d.y
		}
		SOGOU.$func.dnaRotate(r + o, l, n, 5 * h * SOGOU.$func.scale, 5 * h * SOGOU.$func.scale, a);
		for(var c = 0; c < 7; c++) {
			var p = new SOGOU.$func.createBall(SOGOU.$func.stage, "#fff", 0, l[c].ball_left.xpos, l[c].ball_left.ypos, 0);
			p.f_xpos = l[c].ball_left.x, p.f_ypos = l[c].ball_left.y, p.t_xpos = l[c].ball_right.x, p.t_ypos = l[c].ball_right.y, l[c].ball_connect = p
		}
		return l
	}, this.dnaRotate = function(t, e, i, s, n, a) {
		for(var r = 0; r < 7; r++) {
			var o = e[r].ball_left,
				h = e[r].ball_right;
			o.stop || (this.roll(o, t, i, 0), this.scalew(o, t, n, 1)), h.stop || (this.roll(h, t, -i, 0), this.scalew(h, t, n, -1));
			var l = o.getScreenXY();
			o.x = l.x, o.y = l.y;
			var l = h.getScreenXY();
			h.x = l.x, h.y = l.y
		}
	}, this.connectDnaSlow = function(t, e, i, s, n, a) {
		for(var r = 0; r < 7; r++) {
			var o = i[r].ball_connect,
				h = i[r].ball_left;
			this.tween(o, t, e, a);
			var l = o.getScreenXY();
			o.x = l.x, o.y = l.y, this.ctx.beginPath(), this.ctx.moveTo(this.canvas.width / 2 + h.x, this.canvas.height / 2 + h.y), this.ctx.lineTo(this.canvas.width / 2 + o.xpos, this.canvas.height / 2 + o.ypos), this.ctx.lineWidth = s, this.ctx.strokeStyle = n, this.ctx.stroke(), this.ctx.closePath()
		}
	}, this.connectDna = function(t, e, i) {
		for(var s = 0; s < 7; s++) {
			var n = t[s].ball_left,
				a = t[s].ball_right;
			this.ctx.beginPath(), this.ctx.moveTo(this.canvas.width / 2 + n.x, this.canvas.height / 2 + n.y), this.ctx.lineTo(this.canvas.width / 2 + a.x, this.canvas.height / 2 + a.y), this.ctx.lineWidth = e, this.ctx.strokeStyle = i, this.ctx.stroke(), this.ctx.closePath()
		}
	}
}), Laro.register("SOGOU.$func", function(t) {
	this.initMainDna = function() {
		this.dnaMainBalls = [];
		for(var t = SOGOU.$func.dna_main = SOGOU.$func.dnaList[5], e = Math.abs(t[0].ball_right.xpos + t[0].ball_left.xpos) / 2, i = Math.abs(t[0].ball_left.ypos + t[6].ball_left.ypos) / 2, s = 0; s < 7; s++) {
			var n = t[s].ball_left,
				a = t[s].ball_right;
			n.f_zpos = 0, n.t_zpos = 69, n.f_xpos = n.xpos, n.f_ypos = n.ypos, n.t_xpos = n.xpos + e, n.t_ypos = n.ypos + i, a.f_xpos = a.xpos, a.f_ypos = a.ypos, a.t_xpos = a.xpos + e, a.t_ypos = a.ypos + i, a.f_zpos = 0, a.t_zpos = 69, this.dnaMainBalls.push(n), this.dnaMainBalls.push(a)
		}
	}, this.resetMainDna = function() {
		for(var t = 0; t < this.dnaMainBalls.length; t++) {
			var e = this.dnaMainBalls[t];
			e.t_xpos = e.t_xpos / this.lastScale * this.scale, e.t_ypos = e.t_ypos / this.lastScale * this.scale, e.bi_w = e.bi_w / this.lastScale * this.scale
		}
	}, this.resetDnaBalls2 = function() {
		this.dnaBalls = [];
		for(var t = 0; t < SOGOU.$func.dnaList.length; t++)
			if(5 != t)
				for(var e = SOGOU.$func.dnaList[t], i = 0; i < 7; i++) {
					var s = e[i].ball_left,
						n = e[i].ball_right;
					s.f_zpos = n.f_zpos = 0, s.t_zpos = n.t_zpos = -200, s.bi_width = s.width, n.bi_width = n.width, s.start_t = n.start_t = 0, this.dnaBalls.push(s), this.dnaBalls.push(n)
				}
	}, this.resetDnaBgBalls2 = function() {
		if(SOGOU.$func.dnaBgBalls)
			for(var t = 0; t < SOGOU.$func.dnaBgBalls.length; t++) {
				var e = SOGOU.$func.dnaBgBalls[t];
				e.f_zpos = e.zpos, e.t_zpos = -300, e.bi_width = e.width, e.start_t = 0
			}
	}
}), Laro.register("SOGOU.$func", function(t) {
	this.drawArcSlow = function(t) {
		var e = t.ctx,
			i = t.x + this.canvas.width / 2,
			s = t.y + this.canvas.height / 2,
			n = t.t,
			a = t.T,
			r = t.r,
			o = t.line_weight,
			h = t.color,
			l = t.f_theta,
			c = t.t_theta,
			u = t.bezier;
		n > a && (n = a);
		var f = l + u(n / a) * (c - l);
		e.lineWidth = o, e.lineCap = "round", e.strokeStyle = h, e.moveTo(i, s), e.beginPath(), e.arc(i, s, r, l, f), this.ctx.stroke(), this.ctx.closePath()
	}, this.resetDnaMain = function() {
		for(var t = 0; t < this.dnaMainBalls.length; t++) ball = this.dnaMainBalls[t], ball.xpos = ball.xpos / this.lastScale * this.scale, ball.ypos = ball.ypos / this.lastScale * this.scale, ball.bi_w = ball.bi_w / this.lastScale * this.scale, ball.width = ball.width / this.lastScale * this.scale
	}
}), Laro.register("SOGOU.$func", function(t) {
	this.resetLogoEnd = function() {
		logo_box = document.getElementById("logo_box"), logo_box.style.width = logo_box.style.height = 426 * SOGOU.$func.scale + "px", logo = document.getElementById("logo"), logo_sogou_wrap = document.getElementById("logo_sogou_wrap"), logo_sogou = document.getElementById("logo_sogou"), dl_btn = document.getElementById("dl_btn"), logo_sogou_wrap.style.width = 577 * SOGOU.$func.scale + "px", logo_sogou_wrap.style.height = Math.ceil(64 * SOGOU.$func.scale) + "px", logo_sogou_wrap.style.top = SOGOU.$func.canvas.height / 2 + 80 * SOGOU.$func.scale + "px", dl_btn.style.width = 260 * SOGOU.$func.scale + "px", dl_btn.style.height = 70 * SOGOU.$func.scale + "px", dl_btn.style.fontSize = 24 * SOGOU.$func.scale + "px", dl_btn.style.lineHeight = 70 * SOGOU.$func.scale + "px", dl_btn.style.borderRadius = 70 * SOGOU.$func.scale + "px", dl_btn.style.top = SOGOU.$func.canvas.height / 2 + 347 * SOGOU.$func.scale + "px"
	}, this.resetRotateLogo = function() {
		this.circles[0].radius = 208.5 * this.scale
	}, this.rotateX = function(t, e) {
		var i = Math.sqrt(t[2] * t[2] + t[1] * t[1]),
			s = Math.atan2(t[1], t[2]) + e;
		return [t[0], i * Math.sin(s), i * Math.cos(s)]
	}, this.rotateY = function(t, e) {
		var i = Math.sqrt(t[2] * t[2] + t[0] * t[0]),
			s = Math.atan2(t[2], t[0]) + e;
		return [i * Math.cos(s), t[1], i * Math.sin(s)]
	}, this.rotateZ = function(t, e) {
		var i = Math.sqrt(t[1] * t[1] + t[0] * t[0]),
			s = Math.atan2(t[1], t[0]) + e;
		return [i * Math.cos(s), i * Math.sin(s), t[2]]
	}, this.loxo = function(t, e, i) {
		for(var s = [], n = 0; n < i; n++) {
			var a = Math.PI2 * n / i,
				r = Math.cos(a),
				o = Math.sin(a),
				h = .5 * Math.PI;
			h -= .5 * (r + 1) * e, s.push([t * r, t * o * Math.sin(h), t * o * Math.cos(h)])
		}
		return s
	}, this.twistEasing = function(t) {
		return t < .5 ? 2 * t * t : 1 - 2 * (t = 1 - t) * t
	}
}), Laro.register("SOGOU.$loop", function(t) {
	this.init = function() {
		this.$ = new t.Loop(this.looper, this)
	}, this.looper = function(t) {
		this.update(t), this.draw()
	}, this.update = function(t) {
		SOGOU.$fsm.$.update(t)
	}, this.draw = function() {
		SOGOU.$func.ctx.clearRect(-SOGOU.$func.canvas.width, -SOGOU.$func.canvas.height, 3 * SOGOU.$func.canvas.width, 3 * SOGOU.$func.canvas.height), SOGOU.$func.stage.render(), SOGOU.$fsm.$.draw()
	}
}), Laro.register("SOGOU.$states", function(t) {
	var e = 1.5,
		i = 2;
	this.logo = t.BaseState.extend(function() {}).methods({
		enter: function() {
			if(sogou.manager.lock(), "previous" == sogou.manager.from) this._t = e;
			else {
				SOGOU.$func.initParticlesLogo();
				for(var t = 0; t < SOGOU.$func.logoParticles.length; t++) {
					var i = SOGOU.$func.logoParticles[t];
					SOGOU.$func.stage.addChild(i)
				}
				this._t = 0
			}
		},
		leave: function() {},
		update: function(t) {
			this._t += t
		},
		transition: function() {
			this._t > e + i && sogou.manager.next(!0)
		},
		draw: function() {
			SOGOU.$func.rotateTranslate(this._t, e), this._t > 3 && SOGOU.$func.w1.classList.add("fadein")
		}
	})
}), Laro.register("SOGOU.$states", function(t) {
	this.breathe = t.BaseState.extend(function() {}).methods({
		enter: function() {
			this._t = 0, this.T = 1, SOGOU.$func.resetBallStartTime(SOGOU.$func.logoParticles)
		},
		leave: function() {
			for(var t = 0; t < SOGOU.$func.logoParticles.length; t++) ball = SOGOU.$func.logoParticles[t], delete ball.dx, delete ball.dy, delete ball.bi_x, delete ball.bi_y;
			SOGOU.$func.w1.classList.add("fadeout")
		},
		update: function(t) {
			this._t += t
		},
		transition: function() {
			this._t > 6 && (sogou.manager.unlock(), sogou.manager.auto && sogou.manager.next())
		},
		draw: function() {
			for(var t = 0; t < SOGOU.$func.logoParticles.length; t++) {
				var e = SOGOU.$func.logoParticles[t];
				SOGOU.$func.breathe(e, this._t), SOGOU.$func.vibrate(e, this._t);
				var i = e.getScreenXY();
				e.x = i.x, e.y = i.y
			}
		}
	})
}), Laro.register("SOGOU.$states", function(t) {
	this.expand = t.BaseState.extend(function() {}).methods({
		enter: function(t, e) {
			sogou.manager.lock(), this.state = 2, this._t = 0, this.T = 1, this.step = 0;
			var i = this.f = SOGOU.$func;
			i.logoParticles || i.initParticlesLogo(), i.resetBalls(), i.resetBallStartTime(i.logoParticles), i.initBallHead(), i.initBallLine(), this.bezier1 = generateBezier(.53, .24, .88, .55), this.bezier2 = generateBezier(0, 0, 1, 1)
		},
		leave: function() {
			this.f.stage.removeChild(this.f.ball_head), this.f.stage.removeChild(this.f.ball_line);
			for(var t = 0; t < this.f.line_arr.length; t++) this.f.stage.removeChild(this.f.line_arr[t])
		},
		update: function(t) {
			this._t += t
		},
		transition: function() {
			this._t > 6 && (sogou.manager.unlock(), sogou.manager.auto && sogou.manager.next())
		},
		draw: function() {
			for(var t = 0; t < this.f.logoParticles.length; t++) {
				var e = this.f.logoParticles[t];
				e.end ? e.step2 ? this.f.tween(e, this._t, .5, SOGOU.$func.bezier2) : (e.step2 = !0, e.t_xpos = 2.1 * this.f.canvas.width / 2, e.f_xpos = e.xpos, e.t_ypos = e.ypos, e.f_ypos = e.ypos, e.t_zpos = e.zpos, e.f_zpos = e.zpos, e.start_t = this._t) : this.f.tween(e, this._t, .5, SOGOU.$func.bezier2);
				var i = e.getScreenXY();
				e.x = i.x, e.y = i.y
			}
			if(!(this._t <= this.f.ball_head.start_t)) {
				this.f.tween2(this.f.ball_head, this._t, 1, this.bezier2);
				var i = this.f.ball_head.getScreenXY();
				if(this.f.ball_head.x = i.x, this.f.ball_head.y = i.y, SOGOU.$func.w2.classList.add("slideright"), this.f.ball_line.end || (this.f.tween2(this.f.ball_line, this._t, 1, this.bezier1), i = this.f.ball_line.getScreenXY(), this.f.ball_line.x = i.x, this.f.ball_line.y = i.y), this.f.ball_line.end) {
					delete this.f.ball_head.f_xpos, delete this.f.ball_head.t_xpos, this.f.forwardAndBack(this.f.ball_head, SOGOU.$func.canvas.width / 2 + 350 * SOGOU.$func.scale, SOGOU.$func.canvas.width / 2 + 500 * SOGOU.$func.scale), this.f.bigAndSmall(this.f.ball_head);
					var i = this.f.ball_head.getScreenXY();
					this.f.ball_head.x = i.x, this.f.ball_head.y = i.y, this.f.forwardAndBack(this.f.ball_line, -200 * this.f.scale, -50 * this.f.scale), i = this.f.ball_line.getScreenXY(), this.f.ball_line.x = i.x, this.f.ball_line.y = i.y;
					for(var t = 0; t < this.f.line_arr.length; t++) this.f.line_arr[t].end && (this.f.line_arr[t].end = !1, this.f.line_arr[t].start_t = this._t), this.f.tween(this.f.line_arr[t], this._t, range(.5, 5), this.bezier2), i = this.f.line_arr[t].getScreenXY(), this.f.line_arr[t].x = i.x, this.f.line_arr[t].y = i.y
				}
			}
		}
	})
}), Laro.register("SOGOU.$states", function(t) {
	this.roll = t.BaseState.extend(function() {}).methods({
		enter: function(t, e) {
			sogou.manager.lock(), this._t = 0, this.T = 1;
			var i = this.f = SOGOU.$func;
			i.ball_head || i.initBallHead();
			var s = this.ball_head = document.getElementById("ball_head"),
				n = i.ball_head.width,
				a = i.ball_head.x - n;
			s.style.left = i.canvas.width / 2 + a + "px", s.style.width = 2 * n + "px", s.style.height = 2 * n + "px", s.style.display = "block", s.classList.add("roll"), i.canvas.classList.add("changebgblue"), this.start_t = .6, i.iconsParticles || i.initParticlesIcons();
			for(var r = 0; r < i.iconsParticles.length; r++) {
				var o = i.iconsParticles[r];
				i.stage.addChild(o), i.resetIcon(o, this.start_t)
			}
			this.bezier1 = generateBezier(0, 0, 1, 1), SOGOU.$func.w2.classList.remove("slideright"), SOGOU.$func.w2.classList.add("fadeout")
		},
		leave: function() {},
		update: function(t) {
			if(this._t += t, this._t >= this.start_t)
				for(var e = 0; e < this.f.iconsParticles.length; e++) {
					var i = this.f.iconsParticles[e],
						s = i.getScale();
					i.width = i.t_width * s
				}
		},
		transition: function() {
			this._t > 2 && sogou.manager.next(!0)
		},
		draw: function() {
			if(this._t >= this.start_t)
				for(var t = 0; t < this.f.iconsParticles.length; t++) {
					var e = this.f.iconsParticles[t];
					0 == t && (e.index = 0), this.f.tween2(e, this._t, this.T, this.bezier1);
					var i = e.getScreenXY();
					e.x = i.x, e.y = i.y
				}
			this._t > this.T && (this.ball_head.style.display = "none", SOGOU.$func.w3.classList.add("fadein"))
		}
	})
}), Laro.register("SOGOU.$states", function(t) {
	this.vibrate = t.BaseState.extend(function() {}).methods({
		enter: function(t, e) {
			this._t = 0, this.T = 1
		},
		leave: function() {
			SOGOU.$func.w3.classList.add("fadeout")
		},
		update: function(t) {
			this._t += t
		},
		transition: function() {
			this._t > 3 && (sogou.manager.unlock(), sogou.manager.auto && sogou.manager.next())
		},
		draw: function() {
			for(var t = 0; t < SOGOU.$func.iconsParticles.length; t++) {
				var e = SOGOU.$func.iconsParticles[t];
				e.outer && SOGOU.$func.vibratePart2(e, this._t), pos = e.getScreenXY(), e.x = pos.x, e.y = pos.y
			}
		}
	})
}), Laro.register("SOGOU.$states", function(t) {
	this.disperse = t.BaseState.extend(function() {}).methods({
		enter: function(t, e) {
			if(sogou.manager.lock(), this._t = 0, this.T = 1, SOGOU.$func.iconsParticles)
				for(var i = 0; i < SOGOU.$func.iconsParticles.length; i++) {
					var s = SOGOU.$func.iconsParticles[i],
						n = s.f_xpos;
					s.f_xpos = s.t_xpos, s.t_xpos = n;
					var a = s.f_ypos;
					s.f_ypos = s.t_ypos, s.t_ypos = a;
					var r = s.f_zpos;
					s.f_zpos = s.t_zpos, s.t_zpos = r
				}
			SOGOU.$func.initDnaBgBalls(), SOGOU.$func.initDnaBalls(), SOGOU.$func.lastScale = SOGOU.$func.scale, setTimeout(function() {
				for(var t = 0; t < SOGOU.$func.dnaBalls.length; t++) SOGOU.$func.stage.addChild(SOGOU.$func.dnaBalls[t]);
				for(var t = 0; t < SOGOU.$func.dnaBgBalls.length; t++) SOGOU.$func.stage.addChild(SOGOU.$func.dnaBgBalls[t])
			}, 600), this.dnaList = []
		},
		leave: function() {
			if(SOGOU.$func.dnaBalls)
				for(var t = 0; t < SOGOU.$func.dnaBalls.length; t++) SOGOU.$func.stage.removeChild(SOGOU.$func.dnaBalls[t])
		},
		update: function(t) {
			if(this._t += t, SOGOU.$func.iconsParticles)
				for(var e = 0; e < SOGOU.$func.iconsParticles.length; e++) {
					var i = SOGOU.$func.iconsParticles[e],
						s = i.getScale();
					i.width = i.t_width * s
				}
		},
		transition: function() {},
		draw: function() {
			if(this._t > .7)
				for(var t = 0; t < SOGOU.$func.dnaBalls.length; t++) {
					var e = SOGOU.$func.dnaBalls[t];
					SOGOU.$func.tween2(e, this._t, 1.5, SOGOU.$func.bezier4);
					var i = e.getScreenXY();
					e.x = i.x, e.y = i.y, e.end && t == SOGOU.$func.dnaBalls.length - 1 && sogou.manager.next(!0)
				}
			if(SOGOU.$func.iconsParticles)
				for(var t = 0; t < SOGOU.$func.iconsParticles.length; t++) {
					var e = SOGOU.$func.iconsParticles[t];
					SOGOU.$func.tween2(e, this._t, 1.2, SOGOU.$func.bezier1);
					var i = e.getScreenXY();
					e.x = i.x, e.y = i.y
				}
			if(this._t > .7)
				for(var t = 0; t < SOGOU.$func.dnaBgBalls.length; t++) {
					var e = SOGOU.$func.dnaBgBalls[t];
					SOGOU.$func.tween2(e, this._t, 1, SOGOU.$func.bezier1);
					var i = e.getScreenXY();
					e.x = i.x, e.y = i.y
				}
		}
	})
}), Laro.register("SOGOU.$states", function(t) {
	this.dna = t.BaseState.extend(function() {}).methods({
		enter: function(t, e) {
			this._t = 0, this.T = 1, this.init_t = Math.PI + .06, SOGOU.$func.initDnaList(this.init_t), SOGOU.$func.w4.classList.add("rotatein"), document.body.style.perspective = "none"
		},
		leave: function() {
			SOGOU.$func.dnaList.forEach(function(t) {
				for(var e = 0; e < 7; e++) {
					var i = t[e].ball_left,
						s = t[e].ball_left;
					delete i.end_t, delete i.f_xpos, delete i.f_ypos, delete i.f_zpos, delete i.t_xpos, delete i.t_ypos, delete i.t_zpos, delete s.end_t, delete s.f_xpos, delete s.f_ypos, delete s.f_zpos, delete s.t_xpos, delete s.t_ypos, delete s.t_zpos, delete i.bi_x, delete s.bi_x
				}
			}), SOGOU.$func.w4.classList.add("rotateout")
		},
		update: function(t) {
			this._t += t
		},
		transition: function() {
			this._t > 4 && (sogou.manager.unlock(), sogou.manager.auto && sogou.manager.next(!0, this.stop_t))
		},
		draw: function() {
			var t = this._t,
				e = .3;
			t < e && SOGOU.$func.dnaList.forEach(function(i) {
				SOGOU.$func.connectDnaSlow(t, e, i, 5 * i.scale * SOGOU.$func.scale, i.color, SOGOU.$func.bezier1)
			});
			for(var i = 0; i < SOGOU.$func.dnaBgBalls.length; i++) {
				var s = SOGOU.$func.dnaBgBalls[i];
				SOGOU.$func.vibratePart2(s, this._t, .5), pos = s.getScreenXY(), s.x = pos.x, s.y = pos.y
			}
			t >= e && (start_t = t + this.init_t - e, this.stop_t = start_t, SOGOU.$func.dnaList.forEach(function(t, e) {
				SOGOU.$func.dnaRotate(start_t + t.start_t, t, 117 * t.scale * SOGOU.$func.scale, 5 * t.scale * SOGOU.$func.scale, 5 * t.scale * SOGOU.$func.scale, t.color), SOGOU.$func.connectDna(t, 5 * t.scale * SOGOU.$func.scale, t.color)
			}))
		}
	})
}), Laro.register("SOGOU.$states", function(t) {
	this.dnaleave = t.BaseState.extend(function() {}).methods({
		enter: function(t, e) {
			sogou.manager.lock(), this.last_t = t, this._t = 0, SOGOU.$func.initMainDna(), SOGOU.$func.resetDnaBalls2(), SOGOU.$func.resetDnaBgBalls2(), this.step = 1, SOGOU.$func.lastScale = SOGOU.$func.scale
		},
		leave: function() {
			for(var t = 0; t < SOGOU.$func.dnaBgBalls.length; t++) {
				var e = SOGOU.$func.dnaBgBalls[t];
				SOGOU.$func.stage.removeChild(e)
			}
			for(var t = 0; t < SOGOU.$func.dnaBalls.length; t++) {
				var e = SOGOU.$func.dnaBalls[t];
				SOGOU.$func.stage.removeChild(e)
			}
		},
		update: function(t) {
			this._t += t;
			for(var e = 0; e < SOGOU.$func.dnaBalls.length; e++) {
				var i = SOGOU.$func.dnaBalls[e],
					s = i.getScale();
				i.width = i.bi_width * s < 0 ? 0 : i.bi_width * s
			}
			if(SOGOU.$func.dnaBgBalls)
				for(var e = 0; e < SOGOU.$func.dnaBgBalls.length; e++) {
					var i = SOGOU.$func.dnaBgBalls[e],
						s = i.getScale();
					i.width = i.bi_width * s < 0 ? 0 : i.bi_width * s
				}
		},
		transition: function() {
			this._t > 2 && sogou.manager.auto
		},
		draw: function() {
			for(var t = this._t, e = SOGOU.$func.dnaMainBalls, i = 0; i < e.length; i += 2) {
				var s = e[i],
					n = e[i + 1];
				SOGOU.$func.tween2(s, t + s.start_t, .5, SOGOU.$func.bezier3), SOGOU.$func.tween2(n, t + n.start_t, .5, SOGOU.$func.bezier3);
				var a = s.getScreenXY();
				s.x = a.x, s.y = a.y, s.bi_y = void 0;
				var a = n.getScreenXY();
				if(n.x = a.x, n.y = a.y, n.bi_y = void 0, s.end) {
					if(i >= e.length - 2) {
						if(this.stop_t = this.last_t + this._t, 1 == this.step) {
							this.step = 2;
							for(var i = 0; i < e.length; i += 2) {
								var s = e[i],
									n = e[i + 1],
									r = s.getScale();
								n.bi_w = s.bi_w = s.bi_w * r
							}
						}
						sogou.manager.next(!0, this.stop_t)
					}
				} else {
					var o = (e[i].xpos + e[i + 1].xpos) / 2;
					n.bi_x = s.bi_x = o
				}
			}
			if(SOGOU.$func.dnaBgBalls)
				for(var i = 0; i < SOGOU.$func.dnaBgBalls.length; i++) {
					var h = SOGOU.$func.dnaBgBalls[i];
					SOGOU.$func.tween2(h, t, 1, SOGOU.$func.bezier3);
					var a = h.getScreenXY();
					h.x = a.x, h.y = a.y
				}
			this.stop_t = this.last_t + this._t, SOGOU.$func.dnaRotate(this.last_t + this._t, SOGOU.$func.dna_main, 117 * SOGOU.$func.dna_main.scale * SOGOU.$func.scale, 5 * SOGOU.$func.dna_main.scale * SOGOU.$func.scale, 5 * SOGOU.$func.dna_main.scale * SOGOU.$func.scale, SOGOU.$func.dna_main.color);
			for(var i = 0; i < e.length; i += 2) {
				var s = e[i],
					n = e[i + 1],
					r = s.getScale();
				s.width = s.width * r, n.width = n.width * r
			}
			for(var l = SOGOU.$func.dnaBalls, i = 0; i < l.length; i++) {
				var h = l[i];
				SOGOU.$func.tween2(h, t + h.start_t, .3, SOGOU.$func.bezier2);
				var a = h.getScreenXY();
				h.x = a.x, h.y = a.y
			}
			SOGOU.$func.dnaList.forEach(function(t) {
				SOGOU.$func.connectDna(t, 5 * t.scale * SOGOU.$func.scale, t.color)
			})
		}
	})
}), Laro.register("SOGOU.$states", function(t) {
	this.dna2circle = t.BaseState.extend(function() {}).methods({
		enter: function(t, e) {
			this.last_t = t, this._t = 0;
			for(var i = 0; i < SOGOU.$func.dna_main.length; i++) ball = SOGOU.$func.dna_main[i], ball.end = !1;
			this.stop_index = 0, this.step = 0, this.circle_head_h = 246 * SOGOU.$func.scale, SOGOU.$func.lastScale = SOGOU.$func.scale
		},
		leave: function() {},
		update: function(t) {
			this._t += t
		},
		transition: function() {},
		draw: function() {
			var t = this._t,
				e = SOGOU.$func.ctx;
			if(0 == this.step) {
				SOGOU.$func.dnaRotate(this.last_t + this._t, SOGOU.$func.dna_main, 117 * SOGOU.$func.dna_main.scale * SOGOU.$func.scale, 5 * SOGOU.$func.dna_main.scale * SOGOU.$func.scale, 5 * SOGOU.$func.dna_main.scale * SOGOU.$func.scale, SOGOU.$func.dna_main.color), SOGOU.$func.dnaList.forEach(function(t) {
					SOGOU.$func.connectDna(t, 5 * t.scale * SOGOU.$func.scale, t.color)
				});
				for(var i = 0; i < SOGOU.$func.dna_main.length; i++) ball_left = SOGOU.$func.dna_main[i].ball_left, ball_right = SOGOU.$func.dna_main[i].ball_right, Math.abs(parseInt(ball_left.xpos)) <= 3 && this.stop_index == i && (ball_left.xpos = 0, ball_right.xpos = 0, ball_left.stop = !0, ball_right.stop = !0, this.stop_index++, 7 == this.stop_index && this.step++)
			}
			if(1 == this.step) {
				for(var i = 0; i < SOGOU.$func.dna_main.length; i++) {
					var s = SOGOU.$func.dna_main[i].ball_left;
					SOGOU.$func.stage.removeChild(s), s = SOGOU.$func.dna_main[i].ball_right, SOGOU.$func.stage.removeChild(s)
				}
				this.start_t = this._t, this.step++
			}
			if(2 == this.step) {
				var n = 1,
					a = 40 * SOGOU.$func.scale,
					r = 31 * SOGOU.$func.scale,
					t = this._t - this.start_t,
					o = SOGOU.$func.linear(t, n, r, 1),
					h = a - o;
				SOGOU.$func.drawArcSlow({
					ctx: SOGOU.$func.ctx,
					x: 0,
					y: 0,
					t: t,
					T: n,
					r: 213 * SOGOU.$func.scale - (a - r) / 2,
					line_weight: h,
					color: "#fff",
					f_theta: Math.PI / 2,
					t_theta: 2.5 * Math.PI,
					bezier: SOGOU.$func.bezier3
				}), t >= n && sogou.manager.next(!0);
				var l = this.circle_head_h - SOGOU.$func.linear(t, n, this.circle_head_h, 1),
					c = l / 4,
					u = radius = 208.5 * SOGOU.$func.scale;
				SOGOU.$func.ctx.translate(.5 * SOGOU.$func.canvas.width, .5 * SOGOU.$func.canvas.height), e.lineWidth = h, e.strokeStyle = "#fff";
				for(var i = 0; i < 4; i++) {
					if(t > n / 5) {
						e.lineCap = "flat";
						var f = u - i * c
					} else {
						e.lineCap = "round";
						var f = u - i * c - h
					}
					var d = u - (i + 1) * c;
					if(f < d) break;
					e.beginPath(), e.moveTo(0, f), e.lineTo(0, d), e.stroke(), e.closePath()
				}
				SOGOU.$func.ctx.translate(.5 * -SOGOU.$func.canvas.width, .5 * -SOGOU.$func.canvas.height)
			}
		}
	})
}), Laro.register("SOGOU.$states", function(t) {
	this.rotatelogo = t.BaseState.extend(function() {}).methods({
		enter: function(t, e) {
			var i = 208.5 * SOGOU.$func.scale;
			this._t = 0, SOGOU.$func.circles = [{
				color: "#fff",
				radius: i,
				angle: Math.PI / 2
			}], this.segmentsPerCircle = 400, this.speed = 1, this.angleOffset = 0, this.angleOffsetGoal = 0, this.logo_box = document.getElementById("logo_box"), this.logo = document.getElementById("logo"), this.dl_btn = document.getElementById("dl_btn"), this.logo_sogou_wrap = document.getElementById("logo_sogou_wrap"), this.logo_sogou = document.getElementById("logo_sogou")
		},
		leave: function() {},
		update: function(t) {
			this._t += t
		},
		transition: function() {
			this._t > 2 && (sogou.manager.unlock(), sogou.manager.auto)
		},
		draw: function() {
			SOGOU.$func.ctx.translate(.5 * SOGOU.$func.canvas.width, .5 * SOGOU.$func.canvas.height);
			var t = 1e3 * this._t,
				e = SOGOU.$func.ctx,
				i = SOGOU.$func.circles,
				s = this.segmentsPerCircle,
				n = this.speed;
			Math.PI2 = 2 * Math.PI;
			var a = (SOGOU.$func.loxo, SOGOU.$func.rotateX),
				r = SOGOU.$func.rotateY,
				o = SOGOU.$func.rotateZ;
			if(this.angleOffset += .1 * (this.angleOffsetGoal - this.angleOffset), .001 * t * n < Math.PI) var t = .001 * t * n % Math.PI;
			else {
				if(this.stop) return void SOGOU.$func.ctx.translate(.5 * -SOGOU.$func.canvas.width, .5 * -SOGOU.$func.canvas.height);
				if(t >= Math.PI) var t = Math.PI
			}
			SOGOU.$func.ctx.lineCap = "round", SOGOU.$func.ctx.lineWidth = 9 * SOGOU.$func.scale;
			var h, l, c, u, f = -t - .5 * Math.PI,
				d = .5 * Math.PI * Math.cos(t),
				p = SOGOU.$func.twistEasing(.5 * (Math.cos(2 * t + Math.PI) + 1)),
				g = 2 * p * Math.PI2,
				v = 2 * t > Math.PI ? 1 : -1,
				_ = [];
			for(h = 0, l = i.length; h < l; h++) {
				var O = SOGOU.$func.loxo(i[h].radius, g, s);
				for((!this.x || this.x < 10) && (this.x = this.x ? ++this.x : 1), c = 0, u = s; c < u; c++) O[c] = a(O[c], i[h].angle * (1 - p) * v), O[c] = r(o(r(O[c], f), d), Math.PI / 2);
				_.push(O)
			}
			for(h = i.length - 1; h >= 0; h--) {
				for(e.strokeStyle = i[h].color, e.beginPath(), c = 0, u = s; c < u; c++) {
					var x = _[h][c];
					if(!(x[2] < 0)) {
						var S = _[h][0 == c ? u - 1 : c - 1];
						e.moveTo(S[0], S[1]), e.lineTo(x[0], x[1])
					}
				}
				e.stroke()
			}
			for(h = 0, l = i.length; h < l; h++) {
				for(e.strokeStyle = i[h].color, e.beginPath(), c = 0, u = s; c < u; c++) {
					var x = _[h][c];
					if(!(x[2] > 0)) {
						var S = _[h][0 == c ? u - 1 : c - 1];
						e.moveTo(S[0], S[1]), e.lineTo(x[0], x[1])
					}
				}
				e.stroke()
			}
			if(t >= .9 * Math.PI) {
				this.logo_box.style.width = this.logo_box.style.height = 426 * SOGOU.$func.scale + "px", this.logo_box.classList.add("fadein");
				var y = this;
				this.logo_box.addEventListener("webkitAnimationEnd", function() {
					y.stop = !0, y.logo.classList.add("slideup"), SOGOU.$func.resetLogoEnd(), y.logo_sogou_wrap.style.display = "block", y.logo_sogou.classList.add("write"), y.dl_btn.classList.add("dlfadein"), y.logo.addEventListener("webkitAnimationEnd", function() {
						sogou.$loop.$.stop()
					})
				}, !1)
			}
			SOGOU.$func.ctx.translate(.5 * -SOGOU.$func.canvas.width, .5 * -SOGOU.$func.canvas.height)
		}
	})
}), Laro.register("SOGOU.$fsm", function(t) {
	this.init = function(e) {
		this.$ = new t.AppFSM(this, e)
	}, this.setState = function(t, e, i) {
		this.$.setState(t, e, i)
	}
});
var sogou = SOGOU,
	_list = [0, SOGOU.$states.logo, 1, SOGOU.$states.breathe, 2, SOGOU.$states.expand, 3, SOGOU.$states.roll, 4, SOGOU.$states.vibrate, 5, SOGOU.$states.disperse, 6, SOGOU.$states.dna, 7, SOGOU.$states.dnaleave, 8, SOGOU.$states.dna2circle, 9, SOGOU.$states.rotatelogo];
sogou.manager = {
	index: 0,
	auto: !0,
	max: _list.length - 1,
	locked: !1,
	from: "",
	lock: function() {
		this.locked = !0
	},
	unlock: function() {
		this.locked = !1
	},
	init: function() {
		sogou.$func.init(), sogou.$fsm.init(_list), sogou.$fsm.setState(this.index), SOGOU.$loop.init()
	},
	next: function(t, e) {
		this.max != this.index && (this.locked && !t || (this.from = "next", sogou.$fsm.setState(++this.index, e)))
	},
	previous: function() {
		1 != this.index && (this.locked || (this.from = "previous", sogou.$fsm.setState(--this.index)))
	},
	reverse: function() {
		this.locked || Light.notify("reverse")
	}
}, document.addEventListener("keydown", function(t) {
	var e = t.which;
	switch(e) {
		case 37:
		case 38:
			sogou.manager.reverse();
			break;
		case 39:
		case 40:
			sogou.manager.next()
	}
}), sogou.manager.init();