(this["webpackJsonproman-numerals"]=this["webpackJsonproman-numerals"]||[]).push([[0],{14:function(a,n,e){},15:function(a,n,e){},16:function(a,n,e){},17:function(a,n,e){"use strict";e.r(n);var t=e(0),r=e(2),i=e.n(r),o=e(8),c=e.n(o),s=(e(14),e(3)),b=e(4),l=e(1),u=e(6),h=e(5),m=(e(15),{M:1e3,D:500,C:100,L:50,X:10,V:5,I:1}),d={romanToArabic:function(a){for(var n,e,t,r,i=a.split(""),o=0,c=0;c<i.length;c++)if(!(i[c]in m))return"That's not a Roman numeral dumbass";for(var s=0;s<i.length;s++)n=i[s],e=m[n],t=i[s+1],e>=(r=m[t])?o+=e:e<r?o-=e:e&&!r&&(o+=e);return o},arabicToRoman:function(a){if(isNaN(a))return"That's not a number dumbass";for(var n=String(+a).split(""),e=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],t="",r=3;r--;)t=(e[+n.pop()+10*r]||"")+t;return Array(+n.join("")+1).join("M")+t}},j=(e(16),function(a){Object(u.a)(e,a);var n=Object(h.a)(e);function e(a){var t;return Object(s.a)(this,e),(t=n.call(this,a)).state={term:""},t.handleTermChange=t.handleTermChange.bind(Object(l.a)(t)),t.handleArabicToRoman=t.handleArabicToRoman.bind(Object(l.a)(t)),t.handleRomanToArabic=t.handleRomanToArabic.bind(Object(l.a)(t)),t}return Object(b.a)(e,[{key:"handleTermChange",value:function(a){var n=a.target.value;this.setState({term:n})}},{key:"handleArabicToRoman",value:function(a){this.props.arabicToRoman(this.state.term),a.preventDefault()}},{key:"handleRomanToArabic",value:function(a){this.props.romanToArabic(this.state.term),a.preventDefault()}},{key:"render",value:function(){return Object(t.jsxs)("div",{className:"Inputbar",children:[Object(t.jsx)("div",{className:"Inputbar-field",children:Object(t.jsx)("input",{placeholder:"Put in roman numerals or arabic numerals",onChange:this.handleTermChange})}),Object(t.jsxs)("div",{className:"Inputbar-Conversion",children:[Object(t.jsx)("a",{onClick:this.handleArabicToRoman,children:"Arabic to Roman"}),Object(t.jsx)("div",{class:"divider"}),Object(t.jsx)("a",{onClick:this.handleRomanToArabic,children:"Roman to Arabic"})]})]})}}]),e}(i.a.Component)),T=function(a){Object(u.a)(e,a);var n=Object(h.a)(e);function e(a){var t;return Object(s.a)(this,e),(t=n.call(this,a)).state={display:""},t.arabicToRoman=t.arabicToRoman.bind(Object(l.a)(t)),t.romanToArabic=t.romanToArabic.bind(Object(l.a)(t)),t}return Object(b.a)(e,[{key:"arabicToRoman",value:function(a){var n=d.arabicToRoman(a);this.setState({display:n})}},{key:"romanToArabic",value:function(a){var n=d.romanToArabic(a);this.setState({display:n})}},{key:"render",value:function(){return Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)("h1",{children:"ROMAN TO ARABIC NUMERALS CONVERSION"}),Object(t.jsx)(j,{arabicToRoman:this.arabicToRoman,romanToArabic:this.romanToArabic}),Object(t.jsx)("h2",{children:this.state.display})]})}}]),e}(i.a.Component),C=function(a){a&&a instanceof Function&&e.e(3).then(e.bind(null,18)).then((function(n){var e=n.getCLS,t=n.getFID,r=n.getFCP,i=n.getLCP,o=n.getTTFB;e(a),t(a),r(a),i(a),o(a)}))};c.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(T,{})}),document.getElementById("root")),C()}},[[17,1,2]]]);
//# sourceMappingURL=main.59af1d82.chunk.js.map