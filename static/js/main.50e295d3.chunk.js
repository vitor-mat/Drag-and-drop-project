(this.webpackJsonpclone_whatsappweb=this.webpackJsonpclone_whatsappweb||[]).push([[0],{28:function(n,e,t){"use strict";t.r(e);var i,r,a,d,c=t(0),o=t.n(c),s=t(5),l=t.n(s),p=t(8),u=t(4),b=t.n(u),x=t(9),h=t(12),g=t(2),f=t(3),j="#fd951fcc",m="#141316",O=f.b.div(i||(i=Object(g.a)(["\n    background: ",";\n    border: 1px solid #fb951f11;\n    border-radius: 4px;\n    min-width: 350px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    \n    #title-container{\n        h3{\n            font-weight: 700;\n            padding: 16px;\n            color: #fd951fcc;\n        }\n    }\n\n\n"])),m),w=t(1),v=function(n){var e=n.title,t=n.children;return Object(w.jsxs)(O,{children:[Object(w.jsx)("div",{id:"title-container",children:Object(w.jsx)("h3",{children:e})}),t]})},y=f.b.div(r||(r=Object(g.a)(["\n\n    box-shadow: 0 2px 2px -1px #fd951fcc;\n    backgorund: blue;\n    widht: 100px;\n    margin: 25px 0;\n    font-weight: 600;\n    font-size: 18px;\n    padding: 16px;\n\n    #status-div{\n\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        margin-bottom: 16px;\n\n        #status{\n            width: 30px;\n            height: 8px;\n            ","\n        }\n\n        img{\n            width: 20px;\n            height: 20px;\n            cursor: pointer;\n        }\n    }\n\n    border-radius: 4px;\n    \n"])),(function(n){return"urgent"===n.status?"background: red;":"alert"===n.status?"background: yellow;":"background: green;"})),k=t.p+"static/media/close_icon_x.b1caa3ff.svg",I=function(n){var e=n.title,t=n.deleteItemFunction,i=n.id,r=n.column;return Object(w.jsxs)(y,{children:[Object(w.jsxs)("div",{id:"status-div",children:[Object(w.jsx)("div",{id:"status"}),Object(w.jsx)("img",{src:k,alt:"close icon",onClick:function(){return t(i,r)}})]}),e]})},S=t(10),z=f.b.div(a||(a=Object(g.a)(['\n    width: 100%;\n    min-height: 100vh;\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background: rgba(50, 50, 50);\n    overflow-x: hidden;\n\n    header{\n        width: 100%;\n        height: 130px;\n        display: grid;\n        grid-template-areas: "title input";\n        grid-template-row: 100%;\n        grid-template-columns: 65% 35%;\n        align-items: center;\n        background: ',";\n        padding-left: 70px;\n\n\n        h1{\n            width: 100%;\n            grid-area: title;\n            color: ",";\n            font-size: 72px;\n            font-weight: 900;\n        }\n\n        #add-div{\n\n            grid-area: input;\n            height: 100%;\n            width: 100%;\n            display: flex;\n            gap: 20px;\n            align-items: center;\n            padding: 0 10px;\n\n            input{\n                width: 100%;\n                height: 32px;\n                background: none;\n                border: none;\n                outline: none;\n                border-bottom: 2px solid ",";\n                color: ",";\n                font-weight: 700;\n                font-size: 18px;\n            }\n\n            input::placeholder{\n                font-weight: 300;\n            }\n\n            button{\n                background: ",";\n                color: ",';\n                border: none;\n                font-weight: 700;\n                width: 120px;\n                height: 32px;\n                font-size: 16px;\n                cursor: pointer;\n                transition: .2s linear;\n            }\n\n            button:active{\n                opacity: .5;\n            }\n        }\n\n        @media(max-width: 1000px){\n            height: 220px;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            padding: 10px;\n\n            h1{\n                text-align: center;\n            }\n\n            #add-div{\n                padding: 0 50px;\n            }\n        }\n\n        @media(max-width: 530px){\n            h1{\n                font-size: 48px;\n            }\n\n            #add-div{\n                padding: 0 20px;\n            }\n        }\n\n    }\n\n    main{\n        width: 100%;\n        flex: 1;\n\n\n        display: grid;\n        grid-template-areas: "all";\n        grid-template-column: 1fr;\n        grid-template-row: 1fr;\n\n        #test{\n            grid-area: all;\n            display: flex;\n            gap: 20px;\n            padding: 20px;\n            width: 100%;\n            flex: 1;\n            overflow: auto;\n\n            span{\n                widht: 100%;\n                padding: 0 10px;\n            }\n        }\n    }\n\n    footer{\n        height: 70px;\n        width: 100%;\n        background: ',";\n        display: flex;\n        align-items: center;\n        justify-content: center;\n\n        span{\n            color: ",";\n            font-size: 18px;\n        }\n    }\n\n"])),m,j,j,j,j,m,m,j),J=JSON.parse(localStorage.getItem("dataKanban3354676199304804"))||[{id:"0",title:"Todo",items:[]},{id:"1",title:"In-Progress",items:[]},{id:"2",title:"Completed",items:[]}],K=function(){var n=Object(c.useState)(J),e=Object(h.a)(n,2),t=e[0],i=e[1],r=Object(c.useState)(""),a=Object(h.a)(r,2),d=a[0],o=a[1];function s(){return(s=Object(x.a)(b.a.mark((function n(e){var r,a,d,c;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.destination){n.next=2;break}return n.abrupt("return");case 2:if(r=e.source,a=e.destination,d=Array.from(t),r.droppableId!==a.droppableId||r.index!==a.index){n.next=6;break}return n.abrupt("return");case 6:if(r.droppableId!==a.droppableId||r.index===a.index){n.next=10;break}return c=d[r.droppableId].items.splice(r.index,1),n.next=10,d[r.droppableId].items.splice(a.index,0,c[0]);case 10:if(r.droppableId===a.droppableId){n.next=14;break}return c=d[r.droppableId].items.splice(r.index,1),n.next=14,d[a.droppableId].items.splice(a.index,0,c[0]);case 14:return n.next=16,i(d);case 16:localStorage.setItem("dataKanban3354676199304804",JSON.stringify(t));case 17:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var l=function(){var n=Object(x.a)(b.a.mark((function n(e){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(d){n.next=3;break}return alert("Error: Campo de entrada vazio!"),n.abrupt("return");case 3:return(r=t)[0].items.push({name:d,status:"eventual",id:(1e6*Math.random()).toFixed(2).toString()}),n.next=7,i(t=r);case 7:o(d=""),localStorage.setItem("dataKanban3354676199304804",JSON.stringify(t));case 9:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=Object(x.a)(b.a.mark((function n(e,r){var a,c,s;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=t,c=t[r].items.filter((function(n,t){return n.id!==e})),a[r].items=c,n.next=5,i(t=a);case 5:localStorage.setItem("dataKanban3354676199304804",JSON.stringify(t)),s=d,o(d=" "),o(d=s);case 9:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return Object(w.jsxs)(z,{children:[Object(w.jsxs)("header",{children:[Object(w.jsx)("h1",{children:"Kanban Board"}),Object(w.jsxs)("div",{id:"add-div",children:[Object(w.jsx)("input",{type:"text",onChange:function(n){return function(n){o(d=n.target.value)}(n)},value:d,onKeyPress:function(n){"Enter"===n.key&&l()},placeholder:"Digite Aqui"}),Object(w.jsx)("button",{onClick:l,children:"Adicionar"})]})]}),Object(w.jsx)("main",{children:Object(w.jsx)("div",{id:"test",children:Object(w.jsx)(S.a,{onDragEnd:function(n){return s.apply(this,arguments)},children:t.map((function(n,e){return Object(w.jsx)(v,{title:n.title,children:Object(w.jsx)(S.c,{droppableId:n.id,children:function(e,t){return Object(w.jsxs)("div",Object(p.a)(Object(p.a)({ref:e.innerRef},e.droppableProps),{},{className:"dropzone-container",style:{background:t.isDraggingOver?"rgba(10, 255, 180, .1)":""},children:[n.items.map((function(e,t){return Object(w.jsx)(S.b,{draggableId:e.id,index:t,children:function(t){return Object(w.jsx)("span",Object(p.a)(Object(p.a)(Object(p.a)({ref:t.innerRef},t.draggableProps),t.dragHandleProps),{},{children:Object(w.jsx)(I,{title:e.name,status:e.status,deleteItemFunction:u,id:e.id,column:n.id})}))}},"key".concat(e.id))})),e.placeholder]}))}})},e)}))})})}),Object(w.jsx)("footer",{children:Object(w.jsx)("span",{children:"Make by Vitor M."})})]})},N=Object(f.a)(d||(d=Object(g.a)(["\n    *{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        color: white;\n        font-family: 'Nunito', sans-serif;\n        font-weight: 400;\n    }\n"]))),C=function(){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(N,{}),Object(w.jsx)(K,{})]})};l.a.render(Object(w.jsx)(o.a.StrictMode,{children:Object(w.jsx)(C,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.50e295d3.chunk.js.map