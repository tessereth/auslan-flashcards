;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    143: function(e, a, t) {
      'use strict'
      t.r(a),
        t.d(a, 'graphql', function() {
          return f
        }),
        t.d(a, 'StaticQueryContext', function() {
          return m
        }),
        t.d(a, 'StaticQuery', function() {
          return p
        })
      var n = t(0),
        r = t.n(n),
        i = t(4),
        c = t.n(i),
        s = t(142),
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
      var u = t(150),
        o = t.n(u)
      t.d(a, 'PageRenderer', function() {
        return o.a
      })
      var d = t(45)
      t.d(a, 'parsePath', function() {
        return d.a
      })
      var m = r.a.createContext({}),
        p = function(e) {
          return r.a.createElement(m.Consumer, null, function(a) {
            return e.data || (a[e.query] && a[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : a[e.query].data)
              : r.a.createElement('div', null, 'Loading (StaticQuery)')
          })
        }
      function f() {
        throw new Error(
          'It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.'
        )
      }
      p.propTypes = {
        data: c.a.object,
        query: c.a.string.isRequired,
        render: c.a.func,
        children: c.a.func,
      }
    },
    149: function(e, a, t) {
      'use strict'
      var n = t(161),
        r = t(0),
        i = t.n(r),
        c = t(4),
        s = t.n(c),
        l = t(162),
        u = t.n(l),
        o = t(143),
        d = t(7),
        m = t.n(d),
        p = (function(e) {
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
              return i.a.createElement(
                'nav',
                { className: 'navbar has-shadow' },
                i.a.createElement(
                  'div',
                  { className: 'container' },
                  i.a.createElement(
                    'div',
                    { className: 'navbar-brand' },
                    i.a.createElement(
                      o.Link,
                      { to: '/', className: 'navbar-item' },
                      'Auslan flashcards'
                    ),
                    i.a.createElement(
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
                      i.a.createElement('span', { 'aria-hidden': 'true' }),
                      i.a.createElement('span', { 'aria-hidden': 'true' }),
                      i.a.createElement('span', { 'aria-hidden': 'true' })
                    )
                  ),
                  i.a.createElement(
                    'div',
                    {
                      className:
                        'navbar-menu ' +
                        (this.state.menuOpen ? 'is-active' : ''),
                    },
                    i.a.createElement(
                      'div',
                      { className: 'navbar-start' },
                      i.a.createElement(
                        o.Link,
                        { to: '/', className: 'navbar-item' },
                        'Decks'
                      )
                    ),
                    i.a.createElement(
                      'div',
                      { className: 'navbar-end' },
                      i.a.createElement(
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
        f = function() {
          return i.a.createElement(
            'footer',
            { className: 'footer' },
            i.a.createElement(
              'div',
              { className: 'container' },
              i.a.createElement(
                'p',
                null,
                'All videos — ©',
                ' ',
                i.a.createElement(
                  'a',
                  {
                    href: 'http://www.auslan.org.au/',
                    target: '_blank',
                    rel: 'noopener noreferrer external',
                  },
                  'Auslan Signbank'
                )
              ),
              i.a.createElement(
                'p',
                null,
                'Website — © 2018 Teresa Bradbury — licenced under TBA'
              )
            )
          )
        },
        h = (t(170),
        function(e) {
          var a = e.children
          return i.a.createElement(o.StaticQuery, {
            query: '755544856',
            render: function(e) {
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  u.a,
                  {
                    title: e.site.siteMetadata.title,
                    meta: [
                      { name: 'description', content: 'Auslan flashcards' },
                      { name: 'keywords', content: 'auslan, flashcards' },
                    ],
                  },
                  i.a.createElement('html', { lang: 'en' })
                ),
                i.a.createElement(
                  'div',
                  { className: 'everything' },
                  i.a.createElement(
                    'div',
                    { className: 'content' },
                    i.a.createElement(p, null),
                    i.a.createElement('main', null, a)
                  ),
                  i.a.createElement(f, null)
                )
              )
            },
            data: n,
          })
        })
      h.propTypes = { children: s.a.node.isRequired }
      a.a = h
    },
    150: function(e, a, t) {
      var n
      e.exports = ((n = t(160)) && n.default) || n
    },
    160: function(e, a, t) {
      'use strict'
      t.r(a)
      t(34)
      var n = t(0),
        r = t.n(n),
        i = t(4),
        c = t.n(i),
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
        location: c.a.shape({ pathname: c.a.string.isRequired }).isRequired,
      }),
        (a.default = u)
    },
    161: function(e) {
      e.exports = {
        data: { site: { siteMetadata: { title: 'Auslan flashcards' } } },
      }
    },
    170: function(e, a, t) {},
  },
])
//# sourceMappingURL=1-867f82bb1de51429cbf7.js.map
