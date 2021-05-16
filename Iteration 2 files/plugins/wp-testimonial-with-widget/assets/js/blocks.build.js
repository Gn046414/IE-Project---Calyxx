!function(e){function t(n){if(i[n])return i[n].exports;var l=i[n]={i:n,l:!1,exports:{}};return e[n].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var i={};t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});i(1)},function(e,t,i){"use strict";var n=i(2),l=(i.n(n),i(3)),a=(i.n(l),i(4)),o=i(5),__=wp.i18n.__,r=wp.blocks.registerBlockType;r("wtwp/sp-testimonials",{title:__("Testimonial Grid","wp-testimonial-with-widget"),description:__("Display testimonial in a grid view with various layouts.","wp-testimonial-with-widget"),icon:"format-quote",category:"wpos_guten_block",keywords:[__("wpos"),__("testimonial grid","wp-testimonial-with-widget"),__("sp-testimonials")],supports:{html:!1,multiple:!0},getEditWrapperProps:function(e){var t=e.align;if(["wide","full"].includes(t))return{"data-align":t,"data-block-type":"wtwp-grid"}},edit:a.a,save:function(){return null}}),r("wtwp/sp-testimonials-slider",{title:__("Testimonial Slider","wp-testimonial-with-widget"),description:__("Display testimonial in a slider view with various layouts.","wp-testimonial-with-widget"),icon:"format-quote",category:"wpos_guten_block",keywords:[__("wpos"),__("testimonial slider","wp-testimonial-with-widget"),__("sp-testimonials-slider")],supports:{html:!1,multiple:!0},getEditWrapperProps:function(e){var t=e.align;if(["wide","full"].includes(t))return{"data-align":t,"data-block-type":"wtwp-slider"}},edit:o.a,save:function(){return null}})},function(e,t){},function(e,t){},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=wp.element,w=r.Component,s=r.Fragment,p=wp.components,m=p.PanelBody,d=p.Disabled,c=p.TextControl,u=p.ToggleControl,h=p.RangeControl,g=p.SelectControl,__=wp.i18n.__,f=(wp.data.select,wp.editor),E=f.InspectorControls,v=f.BlockControls,b=f.BlockAlignmentToolbar,y=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={isLoading:!1},e}return a(t,e),o(t,[{key:"ObjToString",value:function(e){var t=wp.blocks.getBlockAttributes("wtwp/sp-testimonials"),i=["content_tail"],n="";for(var l in e)e.hasOwnProperty(l)&&"undefined"!==typeof e[l]&&e[l]!==t[l]&&(""!=jQuery.trim(e[l])||jQuery.inArray(l,i)>=0)&&(n+=l+'="'+e[l]+'" ');return n}},{key:"GetBooleanDropdown",value:function(){return[{value:"true",label:__("True","wp-testimonial-with-widget")},{value:"false",label:__("False","wp-testimonial-with-widget")}]}},{key:"GetDesigns",value:function(){return[{value:"design-1",label:__("Design 1","wp-testimonial-with-widget")},{value:"design-2",label:__("Design 2","wp-testimonial-with-widget")},{value:"design-3",label:__("Design 3","wp-testimonial-with-widget")},{value:"design-4",label:__("Design 4","wp-testimonial-with-widget")}]}},{key:"GetImageStyle",value:function(){return[{value:"circle",label:__("Circle","wp-testimonial-with-widget")},{value:"square",label:__("Square","wp-testimonial-with-widget")}]}},{key:"GetPostOrderby",value:function(){return[{value:"date",label:__("Post Date","wp-testimonial-with-widget")},{value:"modified",label:__("Post Modified Date","wp-testimonial-with-widget")},{value:"title",label:__("Post Title","wp-testimonial-with-widget")},{value:"author",label:__("Post Author","wp-testimonial-with-widget")},{value:"ID",label:__("Post ID","wp-testimonial-with-widget")},{value:"rand",label:__("Random","wp-testimonial-with-widget")}]}},{key:"GetPostOrder",value:function(){return[{value:"desc",label:__("Descending","wp-testimonial-with-widget")},{value:"asc",label:__("Ascending","wp-testimonial-with-widget")}]}},{key:"GetPaginationType",value:function(){return[{value:"numeric",label:__("Numeric Pagination","wp-testimonial-with-widget")},{value:"prev-next",label:__("Previous - Next Pagination","wp-testimonial-with-widget")}]}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=wp.data.select("core/editor").getEditorSettings(),i=t.alignWide;e.attributes;i||this.props.setAttributes({align:void 0})}},{key:"render",value:function(){var e=this.props,t=e.attributes,i=e.setAttributes,n=t.design,l=t.per_row,a=t.display_client,o=t.display_job,r=t.display_company,w=t.display_quotes,p=t.display_avatar,f=t.image_style,y=t.size,_=t.limit,k=t.orderby,P=t.order,C=t.category,S=t.align,D=(t.className,this.state.isLoading,wp.element.createElement(E,null,wp.element.createElement(m,{title:__("General Parameters","wp-testimonial-with-widget")},wp.element.createElement(g,{label:__("Design","wp-testimonial-with-widget"),value:n,options:this.GetDesigns(),onChange:function(e){return i({design:e})}}),wp.element.createElement(h,{label:__("Display Grid","wp-testimonial-with-widget"),value:l,onChange:function(e){return i({per_row:e})},min:1,max:4,help:__("Select number of column per row.","wp-testimonial-with-widget")}),wp.element.createElement(d,null,wp.element.createElement(u,{label:__("Show Title","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Display testimonial title. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(u,{label:__("Show Client Name","wp-testimonial-with-widget"),checked:!!a,onChange:function(){return i({display_client:!a})}}),wp.element.createElement(u,{label:__("Show Job Name","wp-testimonial-with-widget"),checked:!!o,onChange:function(){return i({display_job:!o})}}),wp.element.createElement(u,{label:__("Show Company Name","wp-testimonial-with-widget"),checked:!!r,onChange:function(){return i({display_company:!r})}}),wp.element.createElement(u,{label:__("Show Content Quotes","wp-testimonial-with-widget"),checked:!!w,onChange:function(){return i({display_quotes:!w})}}),wp.element.createElement(d,null,wp.element.createElement(u,{label:__("Show Rating","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Display ratings. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(h,{label:__("Minimum Rating","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Enter number of rating to displayed testimonial with given and greater rating. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(u,{label:__("Show Avatar Image","wp-testimonial-with-widget"),checked:!!p,onChange:function(){return i({display_avatar:!p})}}),p&&wp.element.createElement(g,{label:__("Image Style","wp-testimonial-with-widget"),value:f,options:this.GetImageStyle(),onChange:function(e){return i({image_style:e})}}),p&&wp.element.createElement(h,{label:__("Image Size","wp-testimonial-with-widget"),value:y,onChange:function(e){return i({size:e})},min:1,max:1e3,help:__("Control height of the featured image. You can enter any numeric number. e.g 100. Leave empty for default height.","wp-testimonial-with-widget")})),wp.element.createElement(m,{title:__("Query Parameters","wp-testimonial-with-widget"),initialOpen:!1},wp.element.createElement(h,{label:__("Total Items","wp-testimonial-with-widget"),value:_,onChange:function(e){return i({limit:e})},min:-1,max:1e3,help:__("Enter number of testimonials to be displayed. Enter -1 to display all.","wp-testimonial-with-widget")}),wp.element.createElement(g,{label:__("Order By","wp-testimonial-with-widget"),value:k,options:this.GetPostOrderby(),onChange:function(e){return i({orderby:e})}}),wp.element.createElement(g,{label:__("Order","wp-testimonial-with-widget"),value:P,options:this.GetPostOrder(),onChange:function(e){return i({order:e})}}),wp.element.createElement(c,{label:__("Specific Category Testimonial","wp-testimonial-with-widget"),value:C,onChange:function(e){return i({category:e})},help:wp.element.createElement("span",{title:__("You can pass multiple ids with comma seperated. You can find id at relevant category listing page.","wp-testimonial-with-widget")},__("Enter category id to display categories wise.","wp-testimonial-with-widget")," [?]")}),wp.element.createElement(d,null,wp.element.createElement(g,{label:__("Include Child Category Post","wp-testimonial-with-widget"),options:this.GetBooleanDropdown(),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("If you are using parent category then whether to display child category testimonials or not. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(c,{label:__("Exclude Category Testimonial","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Exclude category testimonial. Works only if `Category` field is empty. You can pass multiple ids with comma seperated. You can find id at relevant category listing page. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(c,{label:__("Display Specific Testimonials","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Enter id of the testimonial which you want to display. You can pass multiple ids with comma seperated. You can find id at relevant post listing page. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(c,{label:__("Exclude Specific Testimonials","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Enter id of the testimonial which you do not want to display. You can pass multiple ids with comma seperated. You can find id at relevant post listing page. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(c,{label:__("Include Author","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Enter author id to display testimonials of particular author. You can pass multiple ids with comma seperated. You can find id at users listing page. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(c,{label:__("Exclude Author","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Enter author id to hide testimonials of particular author. Works only if `Include Author` field is empty. You can pass multiple ids with comma seperated. You can find id at relevant users listing page. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(g,{label:__("Pagination","wp-testimonial-with-widget"),options:this.GetBooleanDropdown(),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Display pagination. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(g,{label:__("Pagination Type","wp-testimonial-with-widget"),options:this.GetPaginationType(),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Choose pagination type. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(h,{label:__("Query Offset","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Exclude number of posts from starting. e.g if you pass 5 then it will skip first five post. Note: This will not work with limit=-1. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})))));return wp.element.createElement(s,null,D,wp.element.createElement(v,null,wp.element.createElement(b,{value:S,onChange:function(e){return i({align:e})},controls:["wide","full"]})),wp.element.createElement("div",{className:this.props.className},this.renderOutput()))}},{key:"renderOutput",value:function(){var e=this.props.attributes,t=this.ObjToString(e);t=t.trim();var i=t?"[sp_testimonials "+t+"]":"[sp_testimonials]";return wp.element.createElement("div",{className:"wpos-guten-shrt"},wp.element.createElement("div",{className:"wpos-guten-shrt-title"},wp.element.createElement("span",null,__("WP Testimonials with Rotator Widget - Grid","wp-testimonial-with-widget"))),i,wp.element.createElement("div",{className:"wpos-guten-shrt-footer"},wp.element.createElement("span",null),__("Do you want to check demo of this plugin.","wp-testimonial-with-widget")," ",wp.element.createElement("a",{href:Wtwpf_Block.free_demo_link,target:"_blank"},__("Click here","wp-testimonial-with-widget"))),wp.element.createElement("div",{className:"wpos-guten-shrt-footer"},__("Do you also want to check premium version demo of this plugin.","wp-testimonial-with-widget")," ",wp.element.createElement("a",{href:Wtwpf_Block.pro_demo_link,target:"_blank"},__("Click here","wp-testimonial-with-widget"))))}}]),t}(w);t.a=y},function(e,t,i){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function a(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),r=wp.element,w=r.Component,s=r.Fragment,p=wp.components,m=p.PanelBody,d=p.Disabled,c=p.TextControl,u=p.ToggleControl,h=p.RangeControl,g=p.SelectControl,__=wp.i18n.__,f=(wp.data.select,wp.editor),E=f.InspectorControls,v=f.BlockControls,b=f.BlockAlignmentToolbar,y=function(e){function t(){n(this,t);var e=l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={isLoading:!1},e}return a(t,e),o(t,[{key:"ObjToString",value:function(e){var t=wp.blocks.getBlockAttributes("wtwp/sp-testimonials-slider"),i=["content_tail"],n="";for(var l in e)e.hasOwnProperty(l)&&"undefined"!==typeof e[l]&&e[l]!==t[l]&&(""!=jQuery.trim(e[l])||jQuery.inArray(l,i)>=0)&&(n+=l+'="'+e[l]+'" ');return n}},{key:"GetBooleanDropdown",value:function(){return[{value:"true",label:__("True","wp-testimonial-with-widget")},{value:"false",label:__("False","wp-testimonial-with-widget")}]}},{key:"GetDesigns",value:function(){return[{value:"design-1",label:__("Design 1","wp-testimonial-with-widget")},{value:"design-2",label:__("Design 2","wp-testimonial-with-widget")},{value:"design-3",label:__("Design 3","wp-testimonial-with-widget")},{value:"design-4",label:__("Design 4","wp-testimonial-with-widget")}]}},{key:"GetEffectStyle",value:function(){return[{value:"slide",label:__("Slide","wp-testimonial-with-widget")},{value:"fade",label:__("Fade","wp-testimonial-with-widget")}]}},{key:"GetImageStyle",value:function(){return[{value:"circle",label:__("Circle","wp-testimonial-with-widget")},{value:"square",label:__("Square","wp-testimonial-with-widget")}]}},{key:"GetPostOrderby",value:function(){return[{value:"date",label:__("Post Date","wp-testimonial-with-widget")},{value:"modified",label:__("Post Modified Date","wp-testimonial-with-widget")},{value:"title",label:__("Post Title","wp-testimonial-with-widget")},{value:"author",label:__("Post Author","wp-testimonial-with-widget")},{value:"ID",label:__("Post ID","wp-testimonial-with-widget")},{value:"rand",label:__("Random","wp-testimonial-with-widget")}]}},{key:"GetPostOrder",value:function(){return[{value:"desc",label:__("Descending","wp-testimonial-with-widget")},{value:"asc",label:__("Ascending","wp-testimonial-with-widget")}]}},{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e){var t=wp.data.select("core/editor").getEditorSettings(),i=t.alignWide;e.attributes;i||this.props.setAttributes({align:void 0})}},{key:"render",value:function(){var e=this.props,t=e.attributes,i=e.setAttributes,n=t.design,l=t.display_client,a=t.display_job,o=t.display_company,r=t.display_quotes,w=t.display_avatar,p=t.image_style,f=t.size,y=t.dots,_=t.arrows,k=t.slides_column,P=t.slides_scroll,C=t.autoplay,S=t.autoplay_interval,D=t.speed,B=t.adaptive_height,N=t.limit,O=t.orderby,T=t.order,W=t.category,G=t.align,x=(t.className,this.state.isLoading,wp.element.createElement(E,null,wp.element.createElement(m,{title:__("General Parameters","wp-testimonial-with-widget")},wp.element.createElement(g,{label:__("Design","wp-testimonial-with-widget"),value:n,options:this.GetDesigns(),onChange:function(e){return i({design:e})}}),wp.element.createElement(d,null,wp.element.createElement(u,{label:__("Show Title","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Display testimonial title. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(u,{label:__("Show Client Name","wp-testimonial-with-widget"),checked:!!l,onChange:function(){return i({display_client:!l})}}),wp.element.createElement(u,{label:__("Show Job Name","wp-testimonial-with-widget"),checked:!!a,onChange:function(){return i({display_job:!a})}}),wp.element.createElement(u,{label:__("Show Company Name","wp-testimonial-with-widget"),checked:!!o,onChange:function(){return i({display_company:!o})}}),wp.element.createElement(d,null,wp.element.createElement(u,{label:__("Show Rating","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Display ratings. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(h,{label:__("Minimum Rating","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Enter number of rating to displayed testimonial with given and greater rating. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(u,{label:__("Show Content Quotes","wp-testimonial-with-widget"),checked:!!r,onChange:function(){return i({display_quotes:!r})}}),wp.element.createElement(u,{label:__("Show Avatar Image","wp-testimonial-with-widget"),checked:!!w,onChange:function(){return i({display_avatar:!w})}}),w&&wp.element.createElement(g,{label:__("Image Style","wp-testimonial-with-widget"),value:p,options:this.GetImageStyle(),onChange:function(e){return i({image_style:e})}}),w&&wp.element.createElement(h,{label:__("Image Size","wp-testimonial-with-widget"),value:f,onChange:function(e){return i({size:e})},min:1,max:1e3,help:__("Control height of the featured image. You can enter any numeric number. e.g 100. Leave empty for default height.","wp-testimonial-with-widget")})),wp.element.createElement(m,{title:__("Slider Parameters","wp-testimonial-with-widget"),initialOpen:!1},wp.element.createElement(g,{label:__("Dots","wp-testimonial-with-widget"),value:y,options:this.GetBooleanDropdown(),onChange:function(e){return i({dots:e})},help:__("Show pagination dots.","wp-testimonial-with-widget")}),wp.element.createElement(g,{label:__("Arrows","wp-testimonial-with-widget"),value:_,options:this.GetBooleanDropdown(),onChange:function(e){return i({arrows:e})},help:__("Show prev - next arrows.","wp-testimonial-with-widget")}),wp.element.createElement(h,{label:__("Slide To Show","wp-testimonial-with-widget"),value:k,onChange:function(e){return i({slides_column:e})},min:1,max:100,help:__("Enter number for Slide to show at a time.","wp-testimonial-with-widget")}),wp.element.createElement(h,{label:__("Slide To Scroll","wp-testimonial-with-widget"),value:P,onChange:function(e){return i({slides_scroll:e})},min:1,max:100,help:__("Enter number to scroll slider at a time.","wp-testimonial-with-widget")}),wp.element.createElement(g,{label:__("Autoplay","wp-testimonial-with-widget"),value:C,options:this.GetBooleanDropdown(),onChange:function(e){return i({autoplay:e})}}),"true"==C&&wp.element.createElement(h,{label:__("Autoplay Interval","wp-testimonial-with-widget"),value:S,onChange:function(e){return i({autoplay_interval:e})},min:1,max:5e4,help:__("Enter autoplay interval speed.","wp-testimonial-with-widget")}),wp.element.createElement(h,{label:__("Speed","wp-testimonial-with-widget"),value:D,onChange:function(e){return i({speed:e})},min:1,max:5e4,help:__("Enter slider speed.","wp-testimonial-with-widget")}),wp.element.createElement(d,null,wp.element.createElement(g,{label:__("Slider Effect","wp-testimonial-with-widget"),options:this.GetEffectStyle(),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Choose slider effect. Note: fade effect parameter will only work when Slide To Show is set to 1. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(g,{label:__("Loop","wp-testimonial-with-widget"),options:this.GetBooleanDropdown(),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Enable infinite loop for continuous sliding. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(g,{label:__("Slider Ceter Mode Effect","wp-testimonial-with-widget"),options:this.GetBooleanDropdown(),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Enable slider center mode effect. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(g,{label:__("Pause On Hover","wp-testimonial-with-widget"),options:this.GetBooleanDropdown(),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Pause slider autoplay on hover. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(g,{label:__("Pause On Focus","wp-testimonial-with-widget"),options:this.GetBooleanDropdown(),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Pause slider autoplay when slider element is focused. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(g,{label:__("Slider Auto Height","wp-testimonial-with-widget"),value:B,options:this.GetBooleanDropdown(),onChange:function(e){return i({adaptive_height:e})},help:__("Show slider auto height.","wp-testimonial-with-widget")})),wp.element.createElement(m,{title:__("Query Parameters","wp-testimonial-with-widget"),initialOpen:!1},wp.element.createElement(h,{label:__("Total Items","wp-testimonial-with-widget"),value:N,onChange:function(e){return i({limit:e})},min:-1,max:1e3,help:__("Enter number of testimonials to be displayed. Enter -1 to display all.","wp-testimonial-with-widget")}),wp.element.createElement(g,{label:__("Order By","wp-testimonial-with-widget"),value:O,options:this.GetPostOrderby(),onChange:function(e){return i({orderby:e})}}),wp.element.createElement(g,{label:__("Order","wp-testimonial-with-widget"),value:T,options:this.GetPostOrder(),onChange:function(e){return i({order:e})}}),wp.element.createElement(c,{label:__("Specific Category Testimonial","wp-testimonial-with-widget"),value:W,onChange:function(e){return i({category:e})},help:wp.element.createElement("span",{title:__("You can pass multiple ids with comma seperated. You can find id at relevant category listing page.","wp-testimonial-with-widget")},__("Enter category id to display categories wise.","wp-testimonial-with-widget")," [?]")}),wp.element.createElement(d,null,wp.element.createElement(g,{label:__("Include Child Category Post","wp-testimonial-with-widget"),options:this.GetBooleanDropdown(),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("If you are using parent category then whether to display child category testimonials or not. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(c,{label:__("Exclude Category Testimonial","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Exclude category testimonial. Works only if `Category` field is empty. You can pass multiple ids with comma seperated. You can find id at relevant category listing page. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(c,{label:__("Display Specific Testimonials","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Enter id of the testimonial which you want to display. You can pass multiple ids with comma seperated. You can find id at relevant post listing page. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(c,{label:__("Exclude Specific Testimonials","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Enter id of the testimonial which you do not want to display. You can pass multiple ids with comma seperated. You can find id at relevant post listing page. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(c,{label:__("Include Author","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Enter author id to display testimonials of particular author. You can pass multiple ids with comma seperated. You can find id at users listing page. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(c,{label:__("Exclude Author","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Enter author id to hide testimonials of particular author. Works only if `Include Author` field is empty. You can pass multiple ids with comma seperated. You can find id at relevant users listing page. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})),wp.element.createElement(d,null,wp.element.createElement(h,{label:__("Query Offset","wp-testimonial-with-widget"),help:wp.element.createElement("div",{className:"wpos-hidden-opts-desc"},wp.element.createElement("span",null,__("Exclude number of posts from starting. e.g if you pass 5 then it will skip first five post. Note: This will not work with limit=-1. Upgarade to ","wp-testimonial-with-widget"),wp.element.createElement("a",{href:Wtwpf_Block.pro_link,target:"_blank"},__("Premium version ","wp-testimonial-with-widget")),__("to get this option.","wp-testimonial-with-widget")))})))));return wp.element.createElement(s,null,x,wp.element.createElement(v,null,wp.element.createElement(b,{value:G,onChange:function(e){return i({align:e})},controls:["wide","full"]})),wp.element.createElement("div",{className:this.props.className},this.renderOutput()))}},{key:"renderOutput",value:function(){var e=this.props.attributes,t=this.ObjToString(e);t=t.trim();var i=t?"[sp_testimonials_slider "+t+"]":"[sp_testimonials_slider]";return wp.element.createElement("div",{className:"wpos-guten-shrt"},wp.element.createElement("div",{className:"wpos-guten-shrt-title"},wp.element.createElement("span",null,__("WP Testimonials with Rotator Widget - Slider","wp-testimonial-with-widget"))),i,wp.element.createElement("div",{className:"wpos-guten-shrt-footer"},wp.element.createElement("span",null),__("Do you want to check demo of this plugin.","wp-testimonial-with-widget")," ",wp.element.createElement("a",{href:Wtwpf_Block.free_demo_link,target:"_blank"},__("Click here","wp-testimonial-with-widget"))),wp.element.createElement("div",{className:"wpos-guten-shrt-footer"},__("Do you also want to check premium version demo of this plugin.","wp-testimonial-with-widget")," ",wp.element.createElement("a",{href:Wtwpf_Block.pro_demo_link,target:"_blank"},__("Click here","wp-testimonial-with-widget"))))}}]),t}(w);t.a=y}]);