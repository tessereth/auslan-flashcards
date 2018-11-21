;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    144: function(e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'graphql', function() {
          return p
        }),
        t.d(a, 'StaticQueryContext', function() {
          return m
        }),
        t.d(a, 'StaticQuery', function() {
          return f
        })
      var n = t(0),
        r = t.n(n),
        c = t(4),
        i = t.n(c),
        s = t(143),
        l = t.n(s)
      t.d(a, 'Link', function() {
        return l.a
      }),
        t.d(a, 'withPrefix', function() {
          return s.withPrefix
        }),
        t.d(a, 'navigate', function() {
          return s.navigate
        }),
        t.d(a, 'push', function() {
          return s.push
        }),
        t.d(a, 'replace', function() {
          return s.replace
        }),
        t.d(a, 'navigateTo', function() {
          return s.navigateTo
        })
      var u = t(155),
        o = t.n(u)
      t.d(a, 'PageRenderer', function() {
        return o.a
      })
      var d = t(45)
      t.d(a, 'parsePath', function() {
        return d.a
      })
      var m = r.a.createContext({}),
        f = function(e) {
          return r.a.createElement(m.Consumer, null, function(a) {
            return e.data || (a[e.query] && a[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : a[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function p() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      f.propTypes = {
        data: i.a.object,
        query: i.a.string.isRequired,
        render: i.a.func,
        children: i.a.func,
      }
    },
    149: function(e, a, t) {
      'use strict'
      var n = t(166),
        r = t(0),
        c = t.n(r),
        i = t(4),
        s = t.n(i),
        l = t(167),
        u = t.n(l),
        o = t(144),
        d = t(7),
        m = t.n(d),
        f = (function(e) {
          function a() {
            for (
              var a, t = arguments.length, n = new Array(t), r = 0;
              r < t;
              r++
            )
              n[r] = arguments[r]
            return (
              ((a = e.call.apply(e, [this].concat(n)) || this).state = {
                menuOpen: !1,
              }),
              (a.toggleMenu = function() {
                a.setState({ menuOpen: !a.state.menuOpen })
              }),
              a
            )
          }
          return (
            m()(a, e),
            (a.prototype.render = function() {
              return c.a.createElement(
                'nav',
                { className: 'navbar has-shadow' },
                c.a.createElement(
                  'div',
                  { className: 'container' },
                  c.a.createElement(
                    'div',
                    { className: 'navbar-brand' },
                    c.a.createElement(
                      o.Link,
                      { to: '/', className: 'navbar-item' },
                      'Auslan flashcards'
                    ),
                    c.a.createElement(
                      'a',
                      {
                        role: 'button',
                        className:
                          'navbar-burger ' +
                          (this.state.menuOpen ? 'is-active' : ''),
                        'aria-label': 'menu',
                        'aria-expanded': this.state.menuOpen,
                        onClick: this.toggleMenu,
                      },
                      c.a.createElement('span', { 'aria-hidden': 'true' }),
                      c.a.createElement('span', { 'aria-hidden': 'true' }),
                      c.a.createElement('span', { 'aria-hidden': 'true' })
                    )
                  ),
                  c.a.createElement(
                    'div',
                    {
                      className:
                        'navbar-menu ' +
                        (this.state.menuOpen ? 'is-active' : ''),
                    },
                    c.a.createElement(
                      'div',
                      { className: 'navbar-start' },
                      c.a.createElement(
                        o.Link,
                        { to: '/', className: 'navbar-item' },
                        'Decks'
                      )
                    ),
                    c.a.createElement(
                      'div',
                      { className: 'navbar-end' },
                      c.a.createElement(
                        o.Link,
                        { className: 'navbar-item', to: '#' },
                        'Contact'
                      )
                    )
                  )
                )
              )
            }),
            a
          )
        })(r.PureComponent),
        p = t(152),
        h = function() {
          return c.a.createElement(
            'footer',
            { className: 'footer af-footer' },
            c.a.createElement(
              'div',
              { className: 'container' },
              c.a.createElement(
                'p',
                null,
                'Videos — ©',
                ' ',
                c.a.createElement(
                  p.a,
                  { href: 'http://www.auslan.org.au/' },
                  'Auslan Signbank'
                ),
                ' ',
                '— licenced',
                ' ',
                c.a.createElement(
                  p.a,
                  { href: 'http://creativecommons.org/licenses/by-nc-nd/4.0/' },
                  'Creative Commons BY-NC-ND 4.0'
                )
              ),
              c.a.createElement(
                'p',
                null,
                'Website and source code — © 2018 Teresa Bradbury — licenced',
                ' ',
                c.a.createElement(
                  p.a,
                  {
                    href:
                      'https://github.com/tessereth/auslan-flashcards/blob/master/LICENSE',
                  },
                  'MIT'
                )
              )
            )
          )
        },
        v = (t(175),
        function(e) {
          var a = e.children
          return c.a.createElement(o.StaticQuery, {
            query: '755544856',
            render: function(e) {
              return c.a.createElement(
                c.a.Fragment,
                null,
                c.a.createElement(
                  u.a,
                  {
                    title: e.site.siteMetadata.title,
                    meta: [
                      { name: 'description', content: 'Auslan flashcards' },
                      { name: 'keywords', content: 'auslan, flashcards' },
                    ],
                  },
                  c.a.createElement('html', { lang: 'en' })
                ),
                c.a.createElement(
                  'div',
                  { className: 'af-everything' },
                  c.a.createElement(
                    'div',
                    { className: 'af-above-footer' },
                    c.a.createElement(f, null),
                    c.a.createElement('main', null, a)
                  ),
                  c.a.createElement(h, null)
                )
              )
            },
            data: n,
          })
        })
      v.propTypes = { children: s.a.node.isRequired }
      a.a = v
    },
    152: function(e, a, t) {
      'use strict'
      t(33)
      var n = t(0),
        r = t.n(n)
      a.a = function(e) {
        return r.a.createElement(
          'a',
          Object.assign(
            { target: '_blank', rel: 'noopener noreferrer external' },
            e
          )
        )
      }
    },
    155: function(e, a, t) {
      var n
      e.exports = ((n = t(165)) && n.default) || n
    },
    165: function(e, a, t) {
      'use strict'
      t.r(a)
      t(33)
      var n = t(0),
        r = t.n(n),
        c = t(4),
        i = t.n(c),
        s = t(70),
        l = t(2),
        u = function(e) {
          var a = e.location,
            t = l.default.getResourcesForPathnameSync(a.pathname)
          return r.a.createElement(
            s.a,
            Object.assign({ location: a, pageResources: t }, t.json)
          )
        }
      ;(u.propTypes = {
        location: i.a.shape({ pathname: i.a.string.isRequired }).isRequired,
      }),
        (a.default = u)
    },
    166: function(e) {
      e.exports = {
        data: { site: { siteMetadata: { title: 'Auslan flashcards' } } },
      }
    },
    175: function(e, a, t) {},
  },
])
//# sourceMappingURL=1-aea584d24834504c0a36.js.map
